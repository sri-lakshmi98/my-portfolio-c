import { useEffect, useState } from 'react';

export type PageKey = 'home' | 'aadithya' | 'nand-bhabhi' | 'anusathya';

type Phase = 'idle' | 'cover' | 'hold' | 'reveal';

// These match the curtain animations in index.css, delay included.
const COVER_MS = 560;
const HOLD_MS = 180;
const REVEAL_MS = 620;

export function pageOf(route: string): PageKey {
  if (route.startsWith('#/case-study/nand-bhabhi')) return 'nand-bhabhi';
  if (route.startsWith('#/case-study/anusathya')) return 'anusathya';
  if (route.startsWith('#/case-study/aadithya')) return 'aadithya';
  return 'home';
}

function labelOf(route: string) {
  switch (pageOf(route)) {
    case 'nand-bhabhi':
      return { eyebrow: 'Case study', title: 'NANADHBABBHI' };
    case 'anusathya':
      return { eyebrow: 'Case study', title: 'Shree Anusathya Designers' };
    case 'aadithya':
      return { eyebrow: 'Case study', title: 'Aadithya Automation' };
    default:
      return { eyebrow: 'Back to', title: route === '#work' ? 'My work' : 'Home' };
  }
}

/**
 * Swaps pages behind a curtain: it covers the old page, the new one mounts unseen, and the curtain only
 * lifts once that page has painted. Hash links within a page don't count as a page change.
 */
export function usePageTransition(route: string) {
  const target = pageOf(route);
  const [page, setPage] = useState(target);
  const [phase, setPhase] = useState<Phase>('idle');
  const [label, setLabel] = useState(() => labelOf(route));

  useEffect(() => {
    if (target === page && phase === 'idle') return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setPage(target);
      return undefined;
    }
    setLabel(labelOf(route));
    setPhase('cover');
    const timer = window.setTimeout(() => {
      setPage(target);
      setPhase('hold');
    }, COVER_MS);
    return () => window.clearTimeout(timer);
    // Only a new destination starts a transition; the phases below carry it through.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  useEffect(() => {
    if (phase === 'hold') {
      // Two frames: the first runs before the new page paints, the second after it.
      let timer = 0;
      let frame = window.requestAnimationFrame(() => {
        frame = window.requestAnimationFrame(() => {
          timer = window.setTimeout(() => setPhase('reveal'), HOLD_MS);
        });
      });
      return () => {
        window.cancelAnimationFrame(frame);
        window.clearTimeout(timer);
      };
    }
    if (phase === 'reveal') {
      const timer = window.setTimeout(() => setPhase('idle'), REVEAL_MS);
      return () => window.clearTimeout(timer);
    }
    return undefined;
  }, [phase]);

  const curtain =
    phase === 'idle' ? null : (
      <div className={`page-curtain is-${phase}`} aria-hidden="true">
        <span className="page-curtain__edge" />
        <div className="page-curtain__panel">
          <p className="page-curtain__eyebrow">{label.eyebrow}</p>
          <p className="page-curtain__title" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            {label.title}
          </p>
          <svg
            className="page-curtain__scribble"
            viewBox="0 0 140 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            preserveAspectRatio="none"
          >
            <path pathLength={1} d="M3 6C36 3 92 2 136 6C108 9 68 11 38 12C62 13 104 12 132 10" />
          </svg>
        </div>
      </div>
    );

  return { page, curtain };
}
