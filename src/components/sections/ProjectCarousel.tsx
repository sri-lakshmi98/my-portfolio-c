import { useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import type { PostcardSlide } from './PostcardSlider';
import './project-carousel.css';

export type ProjectItem = {
  id: string;
  kind: string;
  name: string;
  /** The name as it splits on the card and panel. */
  title: string;
  subtitle: string;
  /** Portrait crop of a screen for the carousel card. */
  cover: string;
  coverPosition: string;
  text: string;
  points: string[];
  cta: string;
  href: string;
  caseHref?: string;
  slides: PostcardSlide[];
  tags: string[];
};

// How a card sits for its distance from the centre: [offset, x in card widths, scale, rotateY, opacity].
// Two cards rest on the left and one on the right; offsets -2.5 and 1.5 are invisible, so a card can wrap
// from one side to the other unseen.
const POSES = [
  [-2.5, -1.58, 0.34, 34, 0],
  [-2, -1.38, 0.46, 30, 1],
  [-1, -0.98, 0.66, 24, 1],
  [0, 0, 1, -5, 1],
  [1, 0.98, 0.66, -24, 1],
  [1.5, 1.32, 0.46, -30, 0],
];
const WRAP_FROM = -2.5;
const SPRING_RATE = 9;

const mod = (value: number, size: number) => ((value % size) + size) % size;

function poseAt(offset: number) {
  const last = POSES[POSES.length - 1];
  if (offset >= last[0]) return last;
  const next = POSES.findIndex((p) => offset < p[0]);
  const a = POSES[next - 1];
  const b = POSES[next];
  const t = (offset - a[0]) / (b[0] - a[0]);
  return a.map((value, i) => value + (b[i] - value) * t);
}

const Chevron = ({ left }: { left?: boolean }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={left ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'} />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 12h16M14 6l6 6-6 6" />
  </svg>
);

// Pointer tilt on desktop, after Aceternity's Comet Card: the card leans towards the cursor, its layers
// separate in depth, and a glare follows the pointer.
// Degrees across the card, so a corner leans half of this.
const TILT_DEGREES = 30;
const TILT_RATE = 11;

function TiltSurface({ children }: { children: ReactNode }) {
  const surface = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = surface.current;
    const host = el?.parentElement;
    if (
      !el ||
      !host ||
      !window.matchMedia('(hover: hover) and (pointer: fine)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return undefined;
    }

    const now = { x: 0, y: 0, glare: 0 };
    const goal = { x: 0, y: 0, glare: 0 };
    let frame = 0;
    let last = 0;

    const tick = (time: number) => {
      const dt = Math.min((time - last) / 1000, 0.05);
      last = time;
      const k = 1 - Math.exp(-dt * TILT_RATE);
      now.x += (goal.x - now.x) * k;
      now.y += (goal.y - now.y) * k;
      now.glare += (goal.glare - now.glare) * k;
      el.style.transform = `perspective(900px) rotateX(${(-now.y * TILT_DEGREES).toFixed(2)}deg) rotateY(${(now.x * TILT_DEGREES).toFixed(2)}deg) scale(${(1 + now.glare * 0.03).toFixed(4)})`;
      el.style.setProperty('--gx', `${((now.x + 0.5) * 100).toFixed(1)}%`);
      el.style.setProperty('--gy', `${((now.y + 0.5) * 100).toFixed(1)}%`);
      el.style.setProperty('--glare', now.glare.toFixed(3));
      const settled = Math.abs(goal.x - now.x) + Math.abs(goal.y - now.y) + Math.abs(goal.glare - now.glare) < 0.001;
      frame = settled ? 0 : requestAnimationFrame(tick);
    };
    const wake = () => {
      if (frame) return;
      last = performance.now();
      frame = requestAnimationFrame(tick);
    };
    const onMove = (e: PointerEvent) => {
      // A held button means the carousel is being dragged, so the card rests.
      if (e.buttons) {
        goal.x = goal.y = goal.glare = 0;
      } else {
        const box = host.getBoundingClientRect();
        goal.x = Math.min(0.5, Math.max(-0.5, (e.clientX - box.left) / box.width - 0.5));
        goal.y = Math.min(0.5, Math.max(-0.5, (e.clientY - box.top) / box.height - 0.5));
        goal.glare = 1;
      }
      wake();
    };
    const onLeave = () => {
      goal.x = goal.y = goal.glare = 0;
      wake();
    };

    host.addEventListener('pointermove', onMove);
    host.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(frame);
      host.removeEventListener('pointermove', onMove);
      host.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <span ref={surface} className="hc-tilt">
      {children}
      <span className="hc-glare" aria-hidden="true" />
      <span className="hc-dim" aria-hidden="true" />
    </span>
  );
}

/** The fixed details panel for the active project; remounted per project so it starts on the first screen. */
function ProjectPanel({ project, index, total }: { project: ProjectItem; index: number; total: number }) {
  const [slide, setSlide] = useState(0);
  const lightbox = useRef<HTMLDialogElement>(null);
  const active = project.slides[slide];
  const step = (by: number) => setSlide((s) => mod(s + by, project.slides.length));
  const external = !project.href.startsWith('#');

  return (
    <div className="hc-panel-inner">
      <div className="hc-panel-top">
        <span className="hc-count">
          <b>0{index + 1}</b> / 0{total}
        </span>
        <i aria-hidden="true" />
        <span>Selected project</span>
      </div>

      <h3 className="hc-panel-title">{project.title}</h3>
      {project.subtitle ? <p className="hc-panel-sub">{project.subtitle}</p> : null}
      <p className="hc-panel-text">{project.text}</p>

      <ul className="hc-tags" aria-label="Skills used">
        {project.tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <details className="hc-more">
        <summary>Key highlights</summary>
        <ul>
          {project.points.map((pt) => (
            <li key={pt}>{pt}</li>
          ))}
        </ul>
      </details>

      <button
        type="button"
        className="hc-preview"
        aria-label={`View full size: ${active.title}`}
        onClick={() => lightbox.current?.showModal()}
      >
        <img src={active.src} alt={active.alt} draggable={false} />
      </button>
      <p className="hc-preview-title">{active.title}</p>

      <div className="hc-thumbs" role="group" aria-label={`${project.title} screens`}>
        {project.slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            className={i === slide ? 'on' : ''}
            aria-label={`Show ${s.title}`}
            aria-pressed={i === slide}
            onClick={() => setSlide(i)}
          >
            <img src={s.src} alt="" loading="lazy" draggable={false} />
          </button>
        ))}
      </div>

      <div className="hc-actions">
        {project.caseHref && (
          <a className="hc-cta" href={project.caseHref}>
            View Case Study <ArrowIcon />
          </a>
        )}
        <a
          className={project.caseHref ? 'hc-cta ghost' : 'hc-cta'}
          href={project.href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noreferrer' : undefined}
        >
          {project.cta}
          {external && <span className="sr-only"> (opens in a new tab)</span>}
          <ArrowIcon />
        </a>
      </div>

      <dialog
        ref={lightbox}
        className="postcard-lightbox"
        aria-label={`${project.name}: ${active.title}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) lightbox.current?.close();
        }}
      >
        <img src={active.src} alt={active.alt} />
        <div className="postcard-lightbox-bar">
          <p className="postcard-lightbox-title">{active.title}</p>
          <div className="postcard-lightbox-actions">
            <button type="button" onClick={() => step(-1)}>Previous</button>
            <button type="button" onClick={() => step(1)}>Next</button>
            <button type="button" onClick={() => lightbox.current?.close()}>Close</button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export function ProjectCarousel({ projects, children }: { projects: ProjectItem[]; children: ReactNode }) {
  const total = projects.length;
  const [active, setActive] = useState(0);
  const cards = useRef<(HTMLAnchorElement | null)[]>([]);
  const stage = useRef<HTMLDivElement>(null);
  // Position runs through frames outside React; only the settled active index re-renders.
  const position = useRef(0);
  const target = useRef(0);
  const frame = useRef(0);
  const drag = useRef({ id: -1, startX: 0, startTarget: 0, moved: false, cardWidth: 1 });

  const place = useCallback(() => {
    cards.current.forEach((card, i) => {
      if (!card) return;
      const offset = mod(i - position.current - WRAP_FROM, total) + WRAP_FROM;
      const [, x, scale, rotate, opacity] = poseAt(offset);
      const on = Math.max(0, 1 - Math.abs(offset));
      card.style.transform = `translate(-50%, -50%) translateX(calc(${x.toFixed(4)} * var(--hc-w))) rotateY(${rotate.toFixed(2)}deg) scale(${scale.toFixed(4)})`;
      card.style.opacity = opacity.toFixed(3);
      card.style.zIndex = String(Math.round(20 - Math.abs(offset) * 4));
      card.style.setProperty('--on', on.toFixed(3));
      card.style.pointerEvents = opacity < 0.5 ? 'none' : '';
    });
  }, [total]);

  const animate = useCallback(() => {
    if (frame.current) return;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      position.current += (target.current - position.current) * (1 - Math.exp(-dt * SPRING_RATE));
      if (Math.abs(target.current - position.current) < 0.0006) {
        position.current = target.current;
        frame.current = 0;
        place();
        return;
      }
      place();
      frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
  }, [place]);

  const moveTo = useCallback(
    (next: number) => {
      target.current = next;
      setActive(mod(Math.round(next), total));
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        position.current = next;
        place();
      } else {
        animate();
      }
    },
    [animate, place, total],
  );

  const goToProject = (index: number) => {
    moveTo(target.current + mod(index - target.current - WRAP_FROM, total) + WRAP_FROM);
  };

  useLayoutEffect(place, [place]);
  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  const onPointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest('button')) return;
    const card = cards.current[0];
    const width = stage.current?.querySelector<HTMLElement>('.hc-world')?.offsetWidth ?? 1;
    drag.current = {
      id: e.pointerId,
      startX: e.clientX,
      startTarget: target.current,
      moved: false,
      cardWidth: card?.offsetWidth || width,
    };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (d.id !== e.pointerId) return;
    const dx = e.clientX - d.startX;
    if (!d.moved && Math.abs(dx) < 6) return;
    if (!d.moved) {
      d.moved = true;
      stage.current?.setPointerCapture(e.pointerId);
    }
    target.current = d.startTarget - dx / (d.cardWidth * 1.1);
    position.current = target.current;
    setActive(mod(Math.round(target.current), total));
    place();
  };

  const onPointerEnd = (e: React.PointerEvent) => {
    const d = drag.current;
    if (d.id !== e.pointerId) return;
    d.id = -1;
    if (!d.moved) return;
    const dx = e.clientX - d.startX;
    const steps = Math.abs(dx) < d.cardWidth * 0.14 ? 0 : Math.max(1, Math.round(Math.abs(dx) / (d.cardWidth * 1.1)));
    moveTo(d.startTarget - Math.sign(dx) * steps);
  };

  return (
    <div className="hc">
      <div
        ref={stage}
        className="hc-stage"
        role="group"
        aria-roledescription="carousel"
        aria-label="Selected projects"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerEnd}
        onPointerCancel={onPointerEnd}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') moveTo(Math.round(target.current) - 1);
          if (e.key === 'ArrowRight') moveTo(Math.round(target.current) + 1);
        }}
      >
        <div className="hc-world">
          <div className="hc-backdrop" aria-hidden="true" />
          <div className="hc-beam" aria-hidden="true" />
          <div className="hc-orbit" aria-hidden="true" />
          <div className="hc-pedestal" aria-hidden="true">
            <span className="hc-floor-ring" />
            <span className="hc-floor-ring two" />
            <span className="hc-tier low" />
            <span className="hc-tier high" />
            <span className="hc-pool" />
          </div>

          {projects.map((p, i) => (
            <a
              key={p.id}
              ref={(el) => {
                cards.current[i] = el;
              }}
              className="hc-card"
              href={p.caseHref ?? p.href}
              target={p.caseHref ? undefined : '_blank'}
              rel={p.caseHref ? undefined : 'noreferrer'}
              draggable={false}
              tabIndex={i === active ? 0 : -1}
              aria-hidden={i !== active}
              aria-label={`${p.name}: ${p.caseHref ? 'read the case study' : 'open the project'}`}
              onClick={(e) => {
                if (drag.current.moved) {
                  drag.current.moved = false;
                  e.preventDefault();
                } else if (i !== active) {
                  e.preventDefault();
                  goToProject(i);
                }
              }}
            >
              <TiltSurface>
                <span className="hc-card-shot">
                  <img
                    src={p.cover}
                    alt=""
                    draggable={false}
                    style={{ objectPosition: p.coverPosition }}
                  />
                </span>
                <span className="hc-card-label">
                  <strong>{p.title}</strong>
                  {p.subtitle ? <small>{p.subtitle}</small> : null}
                </span>
              </TiltSurface>
            </a>
          ))}
        </div>

        <div className="hc-heading">{children}</div>

        <button type="button" className="hc-arrow prev" aria-label="Previous project" onClick={() => moveTo(Math.round(target.current) - 1)}>
          <Chevron left />
        </button>
        <button type="button" className="hc-arrow next" aria-label="Next project" onClick={() => moveTo(Math.round(target.current) + 1)}>
          <Chevron />
        </button>

        <div className="hc-dots" role="group" aria-label="Choose a project">
          {projects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              className={i === active ? 'on' : ''}
              aria-label={`Show ${p.title}`}
              aria-current={i === active}
              onClick={() => goToProject(i)}
            />
          ))}
        </div>
      </div>

      <aside className="hc-panel" aria-live="polite">
        <ProjectPanel key={projects[active].id} project={projects[active]} index={active} total={total} />
      </aside>
    </div>
  );
}
