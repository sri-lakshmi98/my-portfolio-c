import { useEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import './skills.css';

type NodeKind = 'tool' | 'skill' | 'hub';

interface SkillNode {
  id: string;
  label: string;
  kind: NodeKind;
  x: number;
  y: number;
  c: string;
  note: string;
  mark?: string;
}

const W = 1000;
const H = 640;
const OPS = '#f5e211';

const NODES: SkillNode[] = [
  { id: 'figma', label: 'Figma', kind: 'tool', x: 255, y: 270, c: '#a259ff', mark: 'Fg', note: 'Where the UI layouts for a company website take shape: wireframes, flows and screens before anything is built.' },
  { id: 'photoshop', label: 'Photoshop', kind: 'tool', x: 585, y: 130, c: '#31a8ff', mark: 'Ps', note: 'Image work and visual polish, so layouts and graphics feel finished and consistent.' },
  { id: 'canva', label: 'Canva', kind: 'tool', x: 800, y: 270, c: '#00c4cc', mark: 'Cv', note: 'Fast, on-brand visuals and content that support SEO and content strategy.' },
  { id: 'framer', label: 'Framer', kind: 'tool', x: 520, y: 430, c: '#ffffff', mark: 'Fr', note: 'Turns designs into live, interactive websites and prototypes, like the Aadithya redesign.' },

  { id: 'wireframing', label: 'Wireframing', kind: 'skill', x: 105, y: 150, c: '#a259ff', note: 'Sketching page structure for the company website before any visual design starts.' },
  { id: 'uiux', label: 'UI/UX', kind: 'skill', x: 80, y: 310, c: '#a259ff', note: 'Designing UI layouts for a company website around how people actually use it.' },
  { id: 'uitesting', label: 'UI testing', kind: 'skill', x: 185, y: 455, c: '#a259ff', note: 'Checking websites and digital products for UI quality, including usability testing for nest.emmple.com.' },
  { id: 'ia', label: 'Information architecture', kind: 'skill', x: 295, y: 75, c: '#a259ff', note: 'Organising pages and content so visitors find what they need without effort.' },
  { id: 'webdesign', label: 'Web design', kind: 'skill', x: 395, y: 345, c: '#ffffff', note: 'Creating the website for the Aadithya redesign, from layout to the finished page.' },
  { id: 'visual', label: 'Visual design', kind: 'skill', x: 700, y: 215, c: '#31a8ff', note: 'Colour, type and imagery that give a layout a clear, confident look.' },
  { id: 'seo', label: 'SEO', kind: 'skill', x: 900, y: 120, c: '#00c4cc', note: 'Part of SEO and content strategy: making pages easy to find and worth reading.' },
  { id: 'content', label: 'Content', kind: 'skill', x: 925, y: 300, c: '#00c4cc', note: 'Shaping the words and structure of a site alongside the design.' },
  { id: 'html', label: 'HTML & CSS', kind: 'skill', x: 345, y: 555, c: '#ffffff', note: 'Clean markup and styling for the moments a design needs hands-on precision.' },
  { id: 'webdev', label: 'Web development', kind: 'skill', x: 585, y: 580, c: '#ffffff', note: 'Bringing approved designs to life as working website pages.' },

  { id: 'operations', label: 'Operations', kind: 'hub', x: 805, y: 480, c: OPS, note: 'Keeping day-to-day operations running smoothly, from vendor coordination to supplies.' },
  { id: 'exec', label: 'Executive support', kind: 'skill', x: 705, y: 380, c: OPS, note: 'Day-to-day support for senior staff, keeping work organised and moving.' },
  { id: 'vendors', label: 'Vendors', kind: 'skill', x: 925, y: 415, c: OPS, note: 'Operations and vendor coordination: clear briefs, follow-ups and handovers.' },
  { id: 'audits', label: 'Audits', kind: 'skill', x: 925, y: 555, c: OPS, note: 'Checking that processes and records are accurate and in order.' },
  { id: 'inventory', label: 'Inventory', kind: 'skill', x: 770, y: 600, c: OPS, note: 'Keeping stock and supplies tracked so nothing runs short.' },
];

const EDGES: [string, string][] = [
  ['figma', 'wireframing'],
  ['figma', 'uiux'],
  ['figma', 'uitesting'],
  ['figma', 'ia'],
  ['figma', 'webdesign'],
  ['framer', 'webdesign'],
  ['framer', 'html'],
  ['framer', 'webdev'],
  ['figma', 'html'],
  ['photoshop', 'visual'],
  ['canva', 'visual'],
  ['canva', 'seo'],
  ['canva', 'content'],
  ['operations', 'exec'],
  ['operations', 'vendors'],
  ['operations', 'audits'],
  ['operations', 'inventory'],
];

const BY_ID = Object.fromEntries(NODES.map((n) => [n.id, n])) as Record<string, SkillNode>;

const NEIGHBORS: Record<string, string[]> = {};
EDGES.forEach(([a, b]) => {
  (NEIGHBORS[a] ||= []).push(b);
  (NEIGHBORS[b] ||= []).push(a);
});

const FACTS = [
  { title: 'Education', text: 'BCA, ICFAI University, Jaipur' },
  { title: 'Languages', text: 'English, Hindi, Tamil' },
  { title: 'Leadership', text: 'Head of the Abhivyakti cultural representation club. Girls’ football team captain. Anchor at many events.' },
  { title: 'Based', text: 'Chennai, Jaipur or remote' },
];

const MOBILE_GROUPS = [
  { id: 'figma', title: 'Figma', sub: 'Design tool' },
  { id: 'photoshop', title: 'Photoshop', sub: 'Design tool' },
  { id: 'canva', title: 'Canva', sub: 'Design tool' },
  { id: 'framer', title: 'Framer', sub: 'Design tool' },
  { id: 'operations', title: 'Operations', sub: 'Admin and operations' },
];

const DESKTOP_QUERY = '(min-width: 900px)';
const REDUCED_QUERY = '(prefers-reduced-motion: reduce)';

function useMedia(query: string) {
  const [match, setMatch] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const on = () => setMatch(mq.matches);
    on();
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, [query]);
  return match;
}

function describe(n: SkillNode) {
  const links = (NEIGHBORS[n.id] || []).map((id) => BY_ID[id].label).join(', ');
  const type = n.kind === 'tool' ? 'Design tool' : n.kind === 'hub' ? 'Operations skill' : 'Skill';
  return `${n.label}, ${type}. Connected to ${links}.`;
}

function Mark({ n }: { n: SkillNode }) {
  return (
    <span className="sk-mark" aria-hidden="true">
      {n.mark}
    </span>
  );
}

function Constellation({ reduced }: { reduced: boolean }) {
  const [hover, setHover] = useState<string | null>(null);
  const [pin, setPin] = useState<string | null>(null);
  const [seen, setSeen] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const lineRefs = useRef<(SVGLineElement | null)[]>([]);
  const pulseRefs = useRef<(SVGCircleElement | null)[]>([]);
  const calm = useRef(0);

  const active = hover ?? pin;
  const lit = useMemo(() => {
    if (!active) return null;
    return new Set([active, ...(NEIGHBORS[active] || [])]);
  }, [active]);
  calm.current = active ? 1 : 0;

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;
    let scale = stage.clientWidth / W;
    let visible = false;
    let raf = 0;
    let calmness = 0;
    let last = 0;
    let clock = 0;

    const pos: Record<string, { x: number; y: number }> = {};
    const seeds = NODES.map((n, i) => ({
      n,
      px: i * 1.7,
      py: i * 2.3,
      fx: 0.35 + (i % 5) * 0.07,
      fy: 0.3 + (i % 4) * 0.09,
      a: n.kind === 'tool' ? 7 : 11,
    }));

    const paint = () => {
      seeds.forEach((s) => {
        const k = 1 - calmness * 0.8;
        const x = s.n.x + Math.sin(clock * s.fx + s.px) * s.a * k;
        const y = s.n.y + Math.cos(clock * s.fy + s.py) * s.a * k;
        pos[s.n.id] = { x, y };
        const el = nodeRefs.current[s.n.id];
        if (el) el.style.transform = `translate3d(${x * scale}px, ${y * scale}px, 0) translate(-50%, -50%)`;
      });
      EDGES.forEach(([a, b], i) => {
        const p = pos[a];
        const q = pos[b];
        const line = lineRefs.current[i];
        if (line) {
          line.setAttribute('x1', p.x.toFixed(1));
          line.setAttribute('y1', p.y.toFixed(1));
          line.setAttribute('x2', q.x.toFixed(1));
          line.setAttribute('y2', q.y.toFixed(1));
        }
        const dot = pulseRefs.current[i];
        if (dot) {
          const t = (clock * 0.11 + i * 0.173) % 1;
          dot.setAttribute('cx', (p.x + (q.x - p.x) * t).toFixed(1));
          dot.setAttribute('cy', (p.y + (q.y - p.y) * t).toFixed(1));
          dot.setAttribute('fill-opacity', Math.sin(Math.PI * t).toFixed(2));
        }
      });
    };

    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000 || 0);
      last = now;
      clock += dt;
      calmness += (calm.current - calmness) * Math.min(1, dt * 4);
      paint();
      raf = requestAnimationFrame(frame);
    };

    const sync = () => {
      cancelAnimationFrame(raf);
      raf = 0;
      if (reduced || !visible || document.hidden) return;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };

    const ro = new ResizeObserver(() => {
      scale = stage.clientWidth / W;
      paint();
    });
    ro.observe(stage);
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) setSeen(true);
        sync();
      },
      { threshold: 0.1 },
    );
    io.observe(stage);
    document.addEventListener('visibilitychange', sync);
    paint();
    sync();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener('visibilitychange', sync);
    };
  }, [reduced]);

  const current = active ? BY_ID[active] : null;
  const state = (id: string) => (!lit ? '' : id === active ? 'is-active' : lit.has(id) ? 'is-lit' : 'is-dim');
  const edgeState = (a: string, b: string) => (!lit ? '' : a === active || b === active ? 'is-lit' : 'is-dim');

  return (
    <div className={`sk-constellation ${seen || reduced ? 'is-in' : ''} ${reduced ? 'is-still' : ''} ${active ? 'has-active' : ''}`}>
      <div className="sk-note" role="status" aria-live="polite" style={{ '--c': current ? current.c : '#fff' } as CSSProperties}>
        {current ? (
          <>
            <p className="sk-note-head">
              <span className="sk-note-dot" aria-hidden="true" />
              <strong>{current.label}</strong>
              <span className="sk-note-links">
                {(NEIGHBORS[current.id] || []).map((id) => BY_ID[id].label).join('  ·  ')}
              </span>
            </p>
            <p className="sk-note-text">{current.note}</p>
          </>
        ) : (
          <p className="sk-note-idle">Hover, focus or tap any node to light up its connections and see how it is used.</p>
        )}
      </div>
      <div className="sk-stage" ref={stageRef} style={{ '--ar': `${W} / ${H}` } as CSSProperties}>
        <svg className="sk-svg" viewBox={`0 0 ${W} ${H}`} aria-hidden="true" focusable="false">
          {NODES.filter((n) => n.kind === 'tool').map((n) => (
            <g key={n.id} className={`sk-orbit ${state(n.id)}`}>
              <circle cx={n.x} cy={n.y} r="86" stroke={n.c} />
              <circle cx={n.x} cy={n.y} r="128" stroke={n.c} />
            </g>
          ))}
          {EDGES.map(([a, b], i) => (
            <g key={`${a}-${b}`} className={`sk-edge ${edgeState(a, b)}`} style={{ '--c': BY_ID[a].c } as CSSProperties}>
              <line ref={(el) => (lineRefs.current[i] = el)} x1={BY_ID[a].x} y1={BY_ID[a].y} x2={BY_ID[b].x} y2={BY_ID[b].y} />
              <circle ref={(el) => (pulseRefs.current[i] = el)} className="sk-pulse" r="3.4" cx={BY_ID[a].x} cy={BY_ID[a].y} />
            </g>
          ))}
        </svg>
        {NODES.map((n, i) => (
          <button
            key={n.id}
            type="button"
            ref={(el) => (nodeRefs.current[n.id] = el)}
            className={`sk-node sk-${n.kind} ${state(n.id)} ${pin === n.id ? 'is-pinned' : ''}`}
            style={{ left: 0, top: 0, '--c': n.c, '--i': i, transform: `translate3d(${(n.x / W) * 100}cqw, ${(n.y / H) * 100 * (H / W)}cqw, 0) translate(-50%, -50%)` } as CSSProperties}
            aria-label={describe(n)}
            aria-pressed={pin === n.id}
            onPointerEnter={(e) => e.pointerType === 'mouse' && setHover(n.id)}
            onPointerLeave={(e) => e.pointerType === 'mouse' && setHover(null)}
            onFocus={() => setHover(n.id)}
            onBlur={() => setHover(null)}
            onClick={() => setPin((p) => (p === n.id ? null : n.id))}
          >
            <span className="sk-body">
              {n.kind === 'tool' && <Mark n={n} />}
              <span className="sk-name">{n.label}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function Grouped() {
  const [open, setOpen] = useState<string>('figma');
  const [sel, setSel] = useState<string | null>(null);

  const toggle = (id: string) => {
    setSel(null);
    setOpen((o) => (o === id ? '' : id));
  };

  return (
    <div className="sk-groups">
      {MOBILE_GROUPS.map((g) => {
        const node = BY_ID[g.id];
        const items = (NEIGHBORS[g.id] || []).map((id) => BY_ID[id]);
        const isOpen = open === g.id;
        const shown = sel && items.some((it) => it.id === sel) ? BY_ID[sel] : node;
        return (
          <div key={g.id} className={`sk-card ${isOpen ? 'is-open' : ''}`} style={{ '--c': node.c } as CSSProperties}>
            <button
              type="button"
              className="sk-card-head"
              aria-expanded={isOpen}
              aria-controls={`sk-panel-${g.id}`}
              id={`sk-head-${g.id}`}
              onClick={() => toggle(g.id)}
            >
              {node.kind === 'tool' ? <Mark n={node} /> : <span className="sk-mark sk-mark-ops" aria-hidden="true">Op</span>}
              <span className="sk-card-title">
                <strong>{g.title}</strong>
                <small>{g.sub}</small>
              </span>
              <span className="sk-chev" aria-hidden="true" />
            </button>
            <div className="sk-panel" id={`sk-panel-${g.id}`} role="region" aria-labelledby={`sk-head-${g.id}`}>
              <div className="sk-panel-in">
                <ul className="sk-chips">
                  {items.map((it) => (
                    <li key={it.id}>
                      <button
                        type="button"
                        className={shown.id === it.id ? 'is-on' : ''}
                        aria-pressed={shown.id === it.id}
                        tabIndex={isOpen ? 0 : -1}
                        onClick={() => setSel(it.id)}
                      >
                        {it.label}
                      </button>
                    </li>
                  ))}
                </ul>
                <p className="sk-chip-note" aria-live="polite">
                  <strong>{shown.label}.</strong> {shown.note}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function SkillsSection() {
  const desktop = useMedia(DESKTOP_QUERY);
  const reduced = useMedia(REDUCED_QUERY);
  return (
    <section id="skills" className="s-sec s-dark sk-sec" aria-labelledby="skills-title">
      <Wave />
      <div className="s-wrap">
        <p className="s-label light" data-reveal>
          <span className="s-dot" aria-hidden="true" />
          Tools and skills
        </p>
        <h2 id="skills-title" className="s-title" data-reveal>
          The toolkit, <em>at a glance.</em>
        </h2>
        <p className="s-lead sk-lead" data-reveal>
          Four tools sit at the centre. Everything else is a skill that grows out of them.
        </p>
        {desktop ? <Constellation reduced={reduced} /> : <Grouped />}
        <div className="sk-facts" data-reveal>
          {FACTS.map((f) => (
            <div key={f.title}>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Wave(): ReactNode {
  return (
    <svg className="s-wave flip" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path d="M0 90V46C180 4 330 6 520 40s420 62 640 14c110-24 200-40 280-34V90z" fill="#f5f1e4" />
    </svg>
  );
}
