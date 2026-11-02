import { Fragment, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  CameraSiteIllustration,
  EcommerceIllustration,
  ManagementIllustration,
  MarketingIllustration,
  TestingIllustration,
  WebsiteIllustration,
} from './journey/illustrations';
import './journey/journey.css';

const HEADING = 'Turning ideas into digital experiences.';

type Station = {
  id: string;
  title: string;
  line: string;
  text: string;
  tags: string[];
  art: JSX.Element;
  link?: { href: string; label: string };
};

const STATIONS: Station[] = [
  {
    id: 'wisflux',
    title: 'Wisflux Tech Labs',
    line: 'People Ops',
    text: 'Where the design eye started: usability testing of websites and digital products, plus the content that explains them.',
    tags: ['UI/UX testing', 'Content', 'Onboarding'],
    art: <TestingIllustration />,
  },
  {
    id: 'layam',
    title: 'Layam Group',
    line: 'Jr. Executive',
    text: 'Secretary to the CEO: calendars, priorities and cross-team coordination, plus vendor and procurement workflows from purchase orders to invoice checks.',
    tags: ['Executive support', 'Vendors', 'Procurement'],
    art: <ManagementIllustration />,
  },
  {
    id: 'first-welding',
    title: 'First Welding Certification',
    line: 'Admin Manager',
    text: 'Designed the UI layouts for the company website and led its SEO, content and digital marketing, while running admin, accounts and vendors.',
    tags: ['Website UI', 'SEO', 'Operations'],
    art: <WebsiteIllustration />,
  },
  {
    id: 'aadithya',
    title: 'Aadithya Automation & Security Systems',
    line: 'Freelance, part one',
    text: 'Built the website from an open-ended brief: researched the business, deployed it live on Vercel and kept refining it with the client.',
    tags: ['Website design', 'Research', 'Vercel'],
    art: <CameraSiteIllustration />,
    link: { href: '#/case-study/aadithya', label: 'Read the case study' },
  },
  {
    id: 'anu-sathya',
    title: 'Shree Anusathya Designers',
    line: 'Freelance digital marketing',
    text: 'Built the brand\'s digital presence from the ground up with organic marketing on Instagram, Pinterest and Google Business Profile, reaching 23,278 Instagram views and 63 Google direction requests.',
    tags: ['Instagram', 'Pinterest', 'Google Business Profile'],
    art: <MarketingIllustration />,
    link: { href: '#/case-study/anusathya', label: 'Read the case study' },
  },
  {
    id: 'nand-bhabhi',
    title: 'NANADHBABBHI',
    line: 'E-commerce & admin dashboard',
    text: 'Extended a client website reference into a connected fashion commerce experience: video-led discovery and Shop the Look for customers, plus a custom dashboard for inventory, orders, fashion videos and configurable delivery tracking.',
    tags: ['E-commerce UX', 'Video commerce', 'Dashboard design'],
    art: <EcommerceIllustration />,
    link: { href: '#/case-study/nand-bhabhi', label: 'Read the case study' },
  },
];

interface Point {
  x: number;
  y: number;
}

interface Geometry {
  width: number;
  height: number;
  d: string;
  nodes: Point[];
}

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

function buildGeometry(track: HTMLElement, rows: HTMLElement[]): Geometry {
  const width = track.offsetWidth;
  const height = track.offsetHeight;
  const mobile = width < 768;
  const nodes = rows.map((row) => {
    const node = row.querySelector<HTMLElement>('[data-node]')!;
    return {
      x: row.offsetLeft + node.offsetLeft + node.offsetWidth / 2,
      y: row.offsetTop + node.offsetTop + node.offsetHeight / 2,
    };
  });
  const lane = nodes[0].x;
  const swing = mobile ? 16 : clamp(width * 0.1, 40, 150);
  const end: Point = { x: lane, y: height - (mobile ? 70 : 110) };
  const points: Point[] = [{ x: lane, y: 0 }];

  nodes.forEach((node, i) => {
    const prev = i === 0 ? points[0] : nodes[i - 1];
    points.push({ x: lane + (i % 2 === 0 ? swing : -swing), y: (prev.y + node.y) / 2 });
    points.push(node);
  });
  const last = nodes[nodes.length - 1];
  points.push({ x: lane + (nodes.length % 2 === 0 ? swing : -swing), y: (last.y + end.y) / 2 });
  points.push(end);

  let d = `M${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;
  for (let i = 1; i < points.length; i += 1) {
    const a = points[i - 1];
    const b = points[i];
    const k = (b.y - a.y) * 0.55;
    d += `C${a.x.toFixed(1)} ${(a.y + k).toFixed(1)} ${b.x.toFixed(1)} ${(b.y - k).toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
  }

  return { width, height, d, nodes };
}

export function JourneySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<HTMLElement[]>([]);
  const inkRef = useRef<SVGPathElement>(null);
  const pencilRef = useRef<SVGPathElement>(null);
  const markerRef = useRef<SVGGElement>(null);
  const veilRef = useRef<HTMLDivElement>(null);
  const [geo, setGeo] = useState<Geometry | null>(null);

  const state = useRef({ total: 0, stops: [] as number[], current: 0, target: 0, raf: 0 });

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track || rowRefs.current.length === 0) return;
    setGeo(buildGeometry(track, rowRefs.current));
  }, []);

  useLayoutEffect(() => {
    measure();
    const track = trackRef.current;
    if (!track) return undefined;
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    window.addEventListener('load', measure);
    return () => {
      observer.disconnect();
      window.removeEventListener('load', measure);
    };
  }, [measure]);

  useEffect(() => {
    const head = headRef.current;
    if (!head) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          head.classList.add('in');
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(head);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const ink = inkRef.current;
    const pencil = pencilRef.current;
    const marker = markerRef.current;
    const track = trackRef.current;
    if (!geo || !ink || !pencil || !marker || !track) return undefined;

    const s = state.current;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    s.total = ink.getTotalLength();
    s.stops = geo.nodes.map((node) => {
      let best = 0;
      let bestDist = Infinity;
      for (let i = 0; i <= 400; i += 1) {
        const p = ink.getPointAtLength((s.total * i) / 400);
        const dist = Math.hypot(p.x - node.x, p.y - node.y);
        if (dist < bestDist) {
          bestDist = dist;
          best = (s.total * i) / 400;
        }
      }
      return best;
    });
    ink.style.strokeDasharray = `${s.total}`;
    pencil.style.strokeDasharray = `${s.total}`;

    const rows = rowRefs.current;

    const render = () => {
      const length = s.current;
      ink.style.strokeDashoffset = `${s.total - length}`;
      pencil.style.strokeDashoffset = `${s.total - length}`;
      const p = ink.getPointAtLength(length);
      const a = ink.getPointAtLength(Math.max(0, length - 4));
      const b = ink.getPointAtLength(Math.min(s.total, length + 4));
      const angle = (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI;
      marker.setAttribute('transform', `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)}) rotate(${angle.toFixed(1)})`);
      marker.style.opacity = length > 2 ? '1' : '0';
      rows.forEach((row, i) => {
        if (length >= s.stops[i] - 24) row.classList.add('on');
      });
    };

    const frame = () => {
      s.raf = 0;
      const diff = s.target - s.current;
      if (Math.abs(diff) < 0.4) {
        s.current = s.target;
      } else {
        s.current += diff * 0.14;
        s.raf = requestAnimationFrame(frame);
      }
      render();
    };

    const request = () => {
      if (!s.raf) s.raf = requestAnimationFrame(frame);
    };

    const update = (snap: boolean) => {
      if (reduced.matches) {
        s.target = s.total;
        s.current = s.total;
        rows.forEach((row) => row.classList.add('on'));
        render();
        return;
      }
      const rect = track.getBoundingClientRect();
      const progress = clamp((window.innerHeight * 0.62 - rect.top) / (rect.height - window.innerHeight * 0.38), 0, 1);
      s.target = progress * s.total;
      if (snap) {
        s.current = s.target;
        render();
      } else {
        request();
      }
    };

    const veil = veilRef.current;
    const onScroll = () => {
      update(false);
      const rect = track.getBoundingClientRect();
      veil?.classList.toggle('show', rect.top < 60 && rect.bottom > 0);
    };
    update(true);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    reduced.addEventListener('change', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      reduced.removeEventListener('change', onScroll);
      if (s.raf) cancelAnimationFrame(s.raf);
      s.raf = 0;
    };
  }, [geo]);

  return (
    <section id="journey" ref={sectionRef} className="journey" aria-labelledby="journey-title">
      <div className="j-head" ref={headRef}>
        <svg className="j-stars" viewBox="0 0 600 300" aria-hidden="true" focusable="false">
          <path d="M520 60l5 16 16 5-16 5-5 16-5-16-16-5 16-5z" fill="#f5e211" />
          <path d="M470 150l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" fill="#fff" fillOpacity="0.7" />
          <circle cx="560" cy="200" r="4" fill="#8ed462" />
          <circle cx="430" cy="40" r="3" fill="#fff" fillOpacity="0.6" />
          <path d="M380 230q20-24 40 0t40 0 40 0" fill="none" stroke="#fff" strokeOpacity="0.35" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <div className="j-head-inner">
          <p className="j-label">
            <span className="j-label-dot" aria-hidden="true" />
            My journey
          </p>
          <h2 id="journey-title" className="j-title">
            {HEADING.split(' ').map((word, i) => (
              <Fragment key={`${word}-${i}`}>
                <span className="j-word">
                  <span style={{ transitionDelay: `${0.08 * i}s` }}>{word}</span>
                </span>{' '}
              </Fragment>
            ))}
          </h2>
          <p className="j-lead">
            From creative design to strategic marketing and managing operations, my journey is built on curiosity,
            learning and a passion for creating impactful solutions.
          </p>
        </div>
        <svg className="j-wave" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <path d="M0 90V46C180 4 330 6 520 40s420 62 640 14c110-24 200-40 280-34V90z" fill="#f5f1e4" />
        </svg>
      </div>

      <div className="j-veil" ref={veilRef} aria-hidden="true" />

      <div className="j-track" ref={trackRef}>
        <svg
          className="j-svg"
          width={geo?.width ?? 0}
          height={geo?.height ?? 0}
          viewBox={`0 0 ${geo?.width ?? 0} ${geo?.height ?? 0}`}
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <radialGradient id="j-glow">
              <stop offset="0" stopColor="#f5e211" stopOpacity="0.95" />
              <stop offset="0.45" stopColor="#f5e211" stopOpacity="0.35" />
              <stop offset="1" stopColor="#f5e211" stopOpacity="0" />
            </radialGradient>
          </defs>
          <path d={geo?.d ?? ''} className="j-ghost" fill="none" />
          <path ref={pencilRef} d={geo?.d ?? ''} className="j-pencil" fill="none" transform="translate(2.5 1.5)" />
          <path ref={inkRef} d={geo?.d ?? ''} className="j-ink" fill="none" />
          <g ref={markerRef} className="j-marker" style={{ opacity: 0 }}>
            <circle className="j-glow" r="34" fill="url(#j-glow)" />
            <g className="j-plane">
              <path d="M-15 -10L19 0L-15 10L-8 0Z" fill="#fffdf6" stroke="#460607" strokeWidth="2" strokeLinejoin="round" />
              <path d="M-8 0L19 0L-9 5Z" fill="#e0dbce" stroke="#460607" strokeWidth="1.4" strokeLinejoin="round" />
            </g>
          </g>
        </svg>

        <p className="j-start" aria-hidden="true">
          Departure
        </p>

        {STATIONS.map((station, i) => (
          <article
            key={station.id}
            className={`j-row ${i % 2 === 1 ? 'flip' : ''}`}
            ref={(el) => {
              if (el) rowRefs.current[i] = el;
            }}
            aria-labelledby={`${station.id}-title`}
          >
            <div className="j-node" data-node>
              <span>0{i + 1}</span>
            </div>
            <div className={`j-card c${i + 1}`}>{station.art}</div>
            <div className="j-copy">
              <p className="j-kicker">
                Stop 0{i + 1} <i aria-hidden="true" /> {station.line}
              </p>
              <h3 id={`${station.id}-title`} className="j-station-title">
                {station.title}
              </h3>
              <p className="j-station-text">{station.text}</p>
              {station.link && (
                <a
                  className="j-link"
                  href={station.link.href}
                  target={station.link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                >
                  {station.link.label} <span aria-hidden="true">&rarr;</span>
                </a>
              )}
              <ul className="j-tags" aria-label={`${station.title} focus areas`}>
                {station.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}

        <div className="j-end" aria-hidden="true">
          <svg viewBox="0 0 60 70" width="44" height="52" focusable="false">
            <path d="M12 66V6" stroke="#460607" strokeWidth="3" strokeLinecap="round" />
            <path d="M12 8c10-6 18 6 30 0v26c-12 6-20-6-30 0z" fill="#e8453c" stroke="#460607" strokeWidth="3" strokeLinejoin="round" />
          </svg>
          <span>To be continued</span>
        </div>
      </div>
    </section>
  );
}
