import sharpness from './frameSharpness.json';

// Frames in public/frames come from one clip per direction, all starting from the same resting pose
// (ffmpeg numbers them from 1). `angle` is the direction the head moves, in degrees counter-clockwise
// from "right" on screen (90 = straight up, -90 = straight down, 180 = left).
export type Clip = { prefix: string; count: number; angle: number };

export const CLIPS: Clip[] = [
  { prefix: 'u', count: 53, angle: 90 }, // up (0 clockwise from up)
  { prefix: 'v', count: 48, angle: 60 }, // 30 clockwise
  { prefix: 'w', count: 52, angle: 30 }, // 60 clockwise
  { prefix: 'x', count: 64, angle: 0 }, // 90 clockwise: right
  { prefix: 'a', count: 72, angle: -30 }, // 120 clockwise: down-right
  { prefix: 'b', count: 53, angle: -60 }, // 150 clockwise
  { prefix: 'h', count: 31, angle: -90 }, // 180 clockwise: straight down
  { prefix: 'c', count: 36, angle: -120 }, // 210 clockwise
  { prefix: 'd', count: 62, angle: -150 }, // 240 clockwise
  { prefix: 'e', count: 64, angle: 180 }, // 270 clockwise: left
  { prefix: 'f', count: 71, angle: 150 }, // 300 clockwise
  { prefix: 'g', count: 56, angle: 120 }, // 330 clockwise: up-left
];

export const frameUrl = (clip: Clip, index: number) =>
  `/frames/${clip.prefix}${String(index + 1).padStart(3, '0')}.webp`;

// Solid colour of the clips' own backdrop, shown behind the canvas while frames load.
export const BACKDROP = '#d83a56';

// Where her head sits inside the frame (0..1).
export const HEAD = { x: 0.5, y: 0.43 };

// While the pointer is within this distance of her head (fraction of the viewport height) she holds still.
export const HEAD_RADIUS = 0.14;

// How far the pointer must travel from her head for the full pose, as a fraction of the viewport height.
export const REACH = 0.4;

// The area counted as "on her" (face, hair and shoulders): an ellipse around her, as fractions of the
// drawn frame's size. Nothing changes while the pointer is inside it.
export const BODY = { x: 0.5, y: 0.5, rx: 0.17, ry: 0.27 };

// The pointer must cross a clip boundary by this many degrees before the active clip changes.
export const SWITCH_HYSTERESIS_DEG = 8;
// The straight-up clip holds on even longer, so wobbling side to side at the top of the page never leaves it.
export const UP_HYSTERESIS_DEG = 18;

// A clip's first frames blend in over this sliver of its progress; clips start from slightly different renders.
export const FADE_IN = 0.02;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

/** Fractional frame for how far along a clip the pose is (0 = resting, 1 = full). */
export function clipFrame(clip: Clip, progress: number) {
  return clamp(progress, 0, 1) * (clip.count - 1);
}

/** Smallest difference between two directions, 0..180 degrees. */
function angleGap(a: number, b: number) {
  return Math.abs(((((a - b) % 360) + 540) % 360) - 180);
}

/** The clip whose direction is nearest `degrees`; `current` keeps its claim a little past the midpoint. */
export function nearestClip(degrees: number, current: number) {
  let best = 0;
  let bestScore = Infinity;
  CLIPS.forEach((clip, i) => {
    const score = angleGap(degrees, clip.angle) -
      (i === current ? (i === 0 ? UP_HYSTERESIS_DEG : SWITCH_HYSTERESIS_DEG) : 0);
    if (score < bestScore) {
      bestScore = score;
      best = i;
    }
  });
  return best;
}

// Continuous sweep clips for when the pointer is out past the radial clips' reach. While the pointer
// is far out and inside a ring's arc, the ring's frame follows the pointer's angle (a hard cut in and out).
// Angles here are degrees clockwise from straight up; `stops` pairs an angle with the (0-based) frame
// where the head points that way.
export type Ring = {
  clip: Clip;
  enter: [number, number];
  release: [number, number];
  stops: [number, number][];
};

export const RINGS: Ring[] = [
  {
    // up -> right -> down
    clip: { prefix: 'q', count: 125, angle: 0 },
    // Near straight up it stays out, so a ring only appears once the pointer is clearly turning round.
    enter: [25, 175],
    // Once showing, it stays until the pointer is back within this many degrees of straight up.
    release: [12, 178],
    stops: [
      [0, 6],
      [30, 16],
      [60, 22],
      [75, 28],
      [90, 40],
      [100, 76],
      [120, 88],
      [135, 94],
      [150, 102],
      [165, 110],
      [180, 120],
    ],
  },
  {
    // down -> down-left -> left -> up-left -> up
    clip: { prefix: 's', count: 93, angle: 0 },
    enter: [185, 335],
    release: [183, 348],
    stops: [
      [180, 0],
      [195, 6],
      [210, 11],
      [225, 18],
      [240, 24],
      [255, 34],
      [270, 52],
      [285, 60],
      [300, 66],
      [315, 71],
      [330, 77],
      [345, 84],
      [360, 92],
    ],
  },
];

// The rings take over as soon as the pointer is out of the dead zone, and let go back at it.
export const RING_ENTER = 0.05;
export const RING_EXIT = 0;

/** Pointer direction in degrees clockwise from straight up, 0 to 360. */
export function clockwiseFromUp(degrees: number) {
  return (((90 - degrees) % 360) + 360) % 360;
}

export function ringContains(ring: Ring, degrees: number, on: boolean) {
  const cw = clockwiseFromUp(degrees);
  const [min, max] = on ? ring.release : ring.enter;
  return cw >= min && cw <= max;
}

/** Ring frame (fractional) for a pointer `degrees` counter-clockwise from right; clamps to the arc. */
export function ringFrame(ring: Ring, degrees: number) {
  const { stops } = ring;
  const cw = clamp(clockwiseFromUp(degrees), stops[0][0], stops[stops.length - 1][0]);
  let k = 0;
  while (k < stops.length - 2 && cw > stops[k + 1][0]) {
    k += 1;
  }
  const [fromAngle, fromFrame] = stops[k];
  const [toAngle, toFrame] = stops[k + 1];
  return fromFrame + ((toFrame - fromFrame) * (cw - fromAngle)) / (toAngle - fromAngle);
}

/**
 * When the pointer has stopped, the sharpest frame near `frame` (clips have motion-blurred frames mid-turn),
 * so she settles on a clean pose instead of stopping on a blurry one. Only moves for a clearly sharper frame.
 */
export function sharpFrame(prefix: string, frame: number, radius = 3) {
  const values = (sharpness as Record<string, number[]>)[prefix];
  const centre = Math.round(frame);
  if (!values) {
    return centre;
  }
  let best = centre;
  for (let i = Math.max(0, centre - radius); i <= Math.min(values.length - 1, centre + radius); i += 1) {
    if (values[i] > values[best]) {
      best = i;
    }
  }
  return values[best] > values[centre] * 1.15 ? best : centre;
}
