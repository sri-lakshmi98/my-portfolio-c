import { preloadManager } from '../utils/preloadManager';
import { useEffect, useRef } from 'react';
import {
  BACKDROP,
  CLIPS,
  FADE_IN,
  HEAD,
  BODY,
  HEAD_RADIUS,
  REACH,
  RINGS,
  RING_ENTER,
  RING_EXIT,
  ringContains,
  ringFrame,
  clipFrame,
  frameUrl,
  nearestClip,
  sharpFrame,
} from '../gaze';

// Time constant of the tilt spring: smaller = snappier.
// The sweep clips track the pointer more tightly.
const RING_SMOOTH_TIME_S = 0.04;
// Pointer on the right half of the screen: she stays on her resting frame and does not follow it.
// Code-level only, no visual split. The left half keeps the normal gaze.
const RESTING_POLAR = { degrees: 90, distance: 0, onHer: false };
// A shown frame only changes once the target is this many frames away, so a pointer sitting between two
// frames never flickers; each frame is drawn on its own, never blended with its neighbour.
const FRAME_STICKINESS = 0.75;
// Once the pointer has been still this long, she finishes the turn onto the sharpest nearby frame.
const IDLE_MS = 120;
// Where her head sits across the screen on wide viewports, and how soft the left edge of her frame is.
const HEAD_SCREEN_X = 0.74;
const FEATHER_PX = 160;
const SMOOTH_TIME_S = 0.14;
// Slower glide used right after a cut to a new clip, and how long it lasts.
const GLIDE_TIME_S = 0.3;
const GLIDE_FOR_MS = 1200;
// The pointer's direction is low-passed with this time constant, so small wobbles near a boundary
// between two clips don't flip between them.
const ANGLE_TIME_S = 0.12;
// After switching clips, hold the new one at least this long before another switch is allowed.
const MIN_SWITCH_GAP_MS = 350;

type Layout = { offsetX: number; offsetY: number; width: number; height: number };
type Spring = { value: number; velocity: number };

function loadFrames(count: number, url: (index: number) => string, onLoad: () => void) {
  return Array.from({ length: count }, (_, index) => {
    const image = new Image();
    image.decoding = 'async';
    image.onload = onLoad;
    image.src = url(index);
    return image;
  });
}

/** Critically damped spring toward `target` (frame-rate independent, no overshoot). */
function smoothDamp(spring: Spring, target: number, smoothTime: number, dt: number) {
  const omega = 2 / smoothTime;
  const x = omega * dt;
  const decay = 1 / (1 + x + 0.48 * x * x + 0.235 * x * x * x);
  const change = spring.value - target;
  const temp = (spring.velocity + omega * change) * dt;
  spring.velocity = (spring.velocity - omega * temp) * decay;
  spring.value = target + (change + temp) * decay;
}

/**
 * The chibi, drawn from still frames of one clip per direction. She turns her head toward the
 * pointer as it moves away from her head, and settles back when it returns.
 */
export function GazeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) {
      return;
    }

    let dirty = true;
    const markDirty = () => {
      dirty = true;
    };

    const totalGazeFrames =
      CLIPS.reduce((sum, c) => sum + c.count, 0) +
      RINGS.reduce((sum, r) => sum + r.clip.count, 0);

    preloadManager.register(totalGazeFrames, 'Streaming character frames...');

    const onFrameLoad = () => {
      markDirty();
      preloadManager.onAssetLoaded(1, 'Streaming character frames...');
    };

    const clipFrames = CLIPS.map((clip) =>
      loadFrames(clip.count, (index) => frameUrl(clip, index), onFrameLoad),
    );
    const ringFrames = RINGS.map((ring) =>
      loadFrames(ring.clip.count, (index) => frameUrl(ring.clip, index), onFrameLoad),
    );
    const ready = (image: HTMLImageElement | undefined) =>
      !!image && image.complete && image.naturalWidth > 0;

    let width = 0;
    let height = 0;
    let layout: Layout | null = null;
    let pointer: { x: number; y: number } | null = null;
    let lastTickAt = 0;
    let lastMoveAt = 0;
    let drawnKey = '';

    // Per clip: how far into the pose she is. Only the active clip moves away from rest.
    const progress: Spring[] = CLIPS.map(() => ({ value: 0, velocity: 0 }));
    let active = 0;
    let glideUntil = 0;
    let lastSwitchAt = -Infinity;
    let smoothDegrees: number | null = null;
    // Each ring sweep: which frame it is on, and whether the pointer is out far enough to show it.
    const ringPosition: Spring[] = RINGS.map(() => ({ value: 0, velocity: 0 }));
    const ringOn: boolean[] = RINGS.map(() => false);
    const ringShown: number[] = RINGS.map(() => 0);
    const clipShown: number[] = CLIPS.map(() => 0);
    const settle = (current: number, target: number) =>
      Math.abs(target - current) > FRAME_STICKINESS ? Math.round(target) : current;

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      layout = null;
      drawnKey = '';
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointer = { x: event.clientX, y: event.clientY };
      lastMoveAt = performance.now();
    };

    const ensureLayout = () => {
      if (layout) {
        return layout;
      }
      const sample = clipFrames[0][0];
      if (!ready(sample)) {
        return null;
      }
      const scale = Math.max(width / sample.naturalWidth, height / sample.naturalHeight);
      const drawWidth = sample.naturalWidth * scale;
      const drawHeight = sample.naturalHeight * scale;
      // She sits towards the right, leaving the left for the page content. The left edge of her frame is
      // feathered into the backdrop colour behind the canvas.
      const offsetX = width * (width >= 768 ? HEAD_SCREEN_X : 0.5) - HEAD.x * drawWidth;
      const feather = `linear-gradient(to right, transparent ${offsetX}px, #000 ${offsetX + FEATHER_PX}px)`;
      canvas.style.maskImage = offsetX > 0 ? feather : '';
      canvas.style.webkitMaskImage = offsetX > 0 ? feather : '';
      layout = {
        offsetX,
        offsetY: (height - drawHeight) / 2,
        width: drawWidth,
        height: drawHeight,
      };
      return layout;
    };

    /** Pointer relative to her head: its direction (degrees) and distance in units of the reach. */
    const pointerPolar = (placed: Layout) => {
      if (!pointer) {
        return { degrees: 90, distance: 0, onHer: true };
      }
      const dx = pointer.x - (placed.offsetX + HEAD.x * placed.width);
      const dy = placed.offsetY + HEAD.y * placed.height - pointer.y;
      // Nothing moves while the pointer is on her (an ellipse round face, hair and shoulders); the pose
      // then builds up from the edge of that area, along the line out from her head.
      const length = Math.hypot(dx, dy);
      const cx = placed.offsetX + BODY.x * placed.width;
      const cy = placed.offsetY + BODY.y * placed.height;
      const a = BODY.rx * placed.width;
      const b = BODY.ry * placed.height;
      const ex = (pointer.x - cx) / a;
      const ey = (pointer.y - cy) / b;
      const inside = ex * ex + ey * ey <= 1;
      // Distance from the head to the ellipse's edge in the pointer's direction (head is inside it).
      const ux = dx / Math.max(length, 1e-6);
      const uy = -dy / Math.max(length, 1e-6);
      const hx = (placed.offsetX + HEAD.x * placed.width - cx) / a;
      const hy = (placed.offsetY + HEAD.y * placed.height - cy) / b;
      const qa = (ux / a) ** 2 + (uy / b) ** 2;
      const qb = 2 * (hx * (ux / a) + hy * (uy / b));
      const qc = hx * hx + hy * hy - 1;
      const edge = (-qb + Math.sqrt(Math.max(qb * qb - 4 * qa * qc, 0))) / (2 * qa);
      const span = (REACH - HEAD_RADIUS) * height;
      return {
        degrees: (Math.atan2(dy, dx) * 180) / Math.PI,
        distance: Math.max(length - edge, 0) / span,
        onHer: inside,
      };
    };

    /** Nearest decoded frame, so she never blinks out while frames stream in. */
    const draw = (frames: HTMLImageElement[], index: number, alpha: number, placed: Layout) => {
      for (let step = 0; step < frames.length; step += 1) {
        const image = [frames[index - step], frames[index + step]].find(ready);
        if (image) {
          context.globalAlpha = alpha;
          context.drawImage(image, placed.offsetX, placed.offsetY, placed.width, placed.height);
          return;
        }
      }
    };

    let frameId = 0;
    const tick = (now: number) => {
      const dt = lastTickAt === 0 ? 1 / 60 : Math.min(Math.max((now - lastTickAt) / 1000, 0), 0.05);
      lastTickAt = now;
      // Hidden (phones, or the home page behind a case study): nothing to draw this frame.
      if (!canvas.offsetWidth) {
        frameId = window.requestAnimationFrame(tick);
        return;
      }
      const placed = ensureLayout();

      if (placed) {
        const clock = performance.now();
        const restingOnRight = pointer !== null && pointer.x >= width / 2;
        const { degrees: rawDegrees, distance, onHer } = restingOnRight
          ? RESTING_POLAR
          : pointerPolar(placed);
        // Follow the pointer's direction the short way round; while it is on her, just track it.
        if (smoothDegrees === null || onHer) {
          smoothDegrees = rawDegrees;
        } else {
          const gap = ((((rawDegrees - smoothDegrees) % 360) + 540) % 360) - 180;
          smoothDegrees += gap * (1 - Math.exp(-dt / ANGLE_TIME_S));
        }
        const degrees = smoothDegrees;
        // Swinging to another direction cuts to that clip at the same distance along its path, where
        // neighbouring poses differ least, then glides the rest of the way.
        const wanted =
          onHer || clock - lastSwitchAt < MIN_SWITCH_GAP_MS ? active : nearestClip(degrees, active);
        if (wanted !== active) {
          const carried = progress[active].value;
          const velocity = progress[active].velocity;
          progress[active].value = 0;
          progress[active].velocity = 0;
          progress[wanted].value = Math.min(Math.max(carried, 0), 1);
          progress[wanted].velocity = velocity;
          active = wanted;
          lastSwitchAt = clock;
          glideUntil = clock + GLIDE_FOR_MS;
        }
        // Out past the radial clips' reach, a ring clip follows the pointer's angle. A straight cut in and out, no fade.
        const idle = clock - lastMoveAt > IDLE_MS;
        let key = '';
        RINGS.forEach((ring, r) => {
          const wasOn = ringOn[r];
          if (onHer) {
            // Hovering on her: hold whatever pose she is in.
            key += `${r}|${ringOn[r] ? ringShown[r] : 'off'};`;
            return;
          }
          ringOn[r] = ringContains(ring, degrees, wasOn) && distance > (wasOn ? RING_EXIT : RING_ENTER);
          if (ringOn[r] && !wasOn) {
            ringPosition[r].value = ringFrame(ring, degrees);
            ringPosition[r].velocity = 0;
            ringShown[r] = Math.round(ringPosition[r].value);
          }
          if (ringOn[r]) {
            const target = ringFrame(ring, degrees);
            smoothDamp(
              ringPosition[r],
              idle ? sharpFrame(ring.clip.prefix, target) : target,
              RING_SMOOTH_TIME_S,
              dt,
            );
          }
          ringShown[r] = settle(ringShown[r], ringPosition[r].value);
          key += `${r}|${ringOn[r] ? ringShown[r] : 'off'};`;
        });
        const shown = CLIPS.map((clip, i) => {
          // Only the part of the pointer's travel along this clip's direction counts.
          const along = Math.cos(((degrees - clip.angle) * Math.PI) / 180) * distance;
          let target = i === active ? Math.min(Math.max(along, 0), 1) : 0;
          if (idle && target > 0.05 && target < 1) {
            target = sharpFrame(clip.prefix, clipFrame(clip, target)) / (clip.count - 1);
          }
          if (!onHer) {
            smoothDamp(progress[i], target, clock < glideUntil ? GLIDE_TIME_S : SMOOTH_TIME_S, dt);
          }
          clipShown[i] = settle(clipShown[i], clipFrame(clip, Math.max(progress[i].value, 0)));
          const alpha = Math.min(Math.max(progress[i].value / FADE_IN, 0), 1);
          key += `${clipShown[i]}|${alpha.toFixed(2)};`;
          return { frame: clipShown[i], alpha };
        });

        if (dirty || key !== drawnKey) {
          dirty = false;
          drawnKey = key;
          context.clearRect(0, 0, width, height);
          // One fixed resting frame underneath everything, so she never fades at rest.
          draw(clipFrames[0], 0, 1, placed);
          shown.forEach(({ frame, alpha }, i) => {
            if (alpha >= 0.01) {
              draw(clipFrames[i], frame, alpha, placed);
            }
          });
          RINGS.forEach((_, r) => {
            if (ringOn[r]) {
              draw(ringFrames[r], ringShown[r], 1, placed);
            }
          });
          context.globalAlpha = 1;
        }
      }

      frameId = window.requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', handlePointerMove);
    frameId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 hidden md:block" style={{ backgroundColor: BACKDROP }} aria-hidden="true">
      <canvas ref={canvasRef} className="h-screen w-screen" />
    </div>
  );
}
