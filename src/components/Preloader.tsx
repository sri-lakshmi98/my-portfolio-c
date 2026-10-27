import { useEffect, useState, useRef } from 'react';
import { preloadManager, type PreloadStats } from '../utils/preloadManager';

const CORE_SHOWCASE_ASSETS = [
  '/hero-chibi.png',
  '/work/nand-bhabhi-hero.webp',
  '/work/nand-bhabhi.jpg',
  '/work/aadithya.webp',
  '/work/aadithya-3d.webp',
  '/work/aadithya-quote.webp',
  '/work/nest.webp',
  '/work/nest-audit.webp',
  '/work/nand-bhabhi-delivery.webp',
  '/work/nand-bhabhi-categories.webp',
  '/work/nand-bhabhi-admin.webp',
  '/work/new-arrival.webp',
];

export function Preloader() {
  const [stats, setStats] = useState<PreloadStats>(() => preloadManager.getStats());
  const [displayedPercent, setDisplayedPercent] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const animRef = useRef<number | null>(null);

  // 1. Kick off preloading of core visual showcase assets and typography
  useEffect(() => {
    preloadManager.register(CORE_SHOWCASE_ASSETS.length, 'Caching project case studies...');
    CORE_SHOWCASE_ASSETS.forEach((src) => {
      const img = new Image();
      img.onload = () => preloadManager.onAssetLoaded(1);
      img.onerror = () => preloadManager.onAssetLoaded(1);
      img.src = src;
    });

    if (typeof document !== 'undefined' && 'fonts' in document) {
      preloadManager.register(1, 'Compiling typography & styles...');
      document.fonts.ready
        .then(() => preloadManager.onAssetLoaded(1))
        .catch(() => preloadManager.onAssetLoaded(1));
    }

    // Safety timeout: ensure page opens within 6.5s even on slow connections
    const timeout = setTimeout(() => {
      preloadManager.completeNow();
    }, 6500);

    return () => clearTimeout(timeout);
  }, []);

  // 2. Subscribe to preloadManager stats
  useEffect(() => {
    return preloadManager.subscribe((newStats) => {
      setStats(newStats);
    });
  }, []);

  // 3. Smooth animated interpolation for percentage counter
  useEffect(() => {
    const target = stats.percent;
    const animate = () => {
      setDisplayedPercent((current) => {
        if (current >= target) {
          return target;
        }
        const delta = target - current;
        const step = Math.max(1, Math.ceil(delta * 0.18));
        return Math.min(target, current + step);
      });

      if (displayedPercent < target) {
        animRef.current = requestAnimationFrame(animate);
      }
    };

    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [stats.percent, displayedPercent]);

  // 4. Handle completion and dismiss transition
  useEffect(() => {
    if (stats.isComplete && displayedPercent >= 100) {
      const timer = setTimeout(() => {
        setIsFadingOut(true);
        const cleanup = setTimeout(() => {
          setIsDismissed(true);
        }, 800);
        return () => clearTimeout(cleanup);
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [stats.isComplete, displayedPercent]);

  // Lock body scroll while loader is visible
  useEffect(() => {
    if (!isDismissed) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDismissed]);

  if (isDismissed) return null;

  return (
    <aside
      className={`fixed inset-0 z-50 flex flex-col justify-between bg-[#460607] px-6 py-8 sm:px-12 sm:py-10 text-white transition-all duration-800 ease-out ${
        isFadingOut ? 'pointer-events-none -translate-y-8 opacity-0' : 'opacity-100'
      }`}
      style={{
        background: 'radial-gradient(ellipse at 50% 45%, #460607 0%, #2f0506 65%, #1f0304 100%)',
      }}
      aria-live="polite"
      aria-label="Website preloader"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e8453c] opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#e8453c]" />
          </span>
          <span
            className="text-[17px] font-medium tracking-tight text-white sm:text-[19px]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Shri Lakshmi®
          </span>
        </div>
        <div className="flex items-center gap-2 text-[12px] uppercase tracking-widest text-white/50 font-mono">
          <span>PORTFOLIO</span>
          <span>·</span>
          <span>2026</span>
        </div>
      </div>

      {/* Center Stage: Huge Percentage Counter & Glowing Progress Bar */}
      <div className="my-auto flex flex-col items-center justify-center text-center">
        {/* Phase subtitle */}
        <p className="mb-3 text-[13px] sm:text-[14px] uppercase tracking-[0.2em] text-[#e8453c] font-mono">
          {stats.isComplete ? 'WORKSPACE READY' : 'PRELOADING ASSETS'}
        </p>

        {/* Big Counter */}
        <div className="flex items-baseline justify-center select-none">
          <span
            className="text-[72px] sm:text-[108px] md:text-[124px] font-light leading-none tracking-tighter text-white"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {displayedPercent}
          </span>
          <span className="ml-1 text-[28px] sm:text-[44px] italic text-[#e8453c] font-serif">
            %
          </span>
        </div>

        {/* Sleek Progress Bar */}
        <div className="mt-6 w-full max-w-[320px] sm:max-w-[420px]">
          <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/12">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#e8453c] via-[#ff685f] to-[#ffe28a] transition-[width] duration-200 ease-out shadow-[0_0_12px_rgba(232,69,60,0.8)]"
              style={{ width: `${displayedPercent}%` }}
            />
          </div>
        </div>

        {/* Live Loading Stats Pill */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 font-mono text-[11.5px] sm:text-[12.5px] text-white/70">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
            Assets: <strong className="text-white font-semibold">{stats.loaded}</strong> / {stats.total}
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
            Status: <span className="text-[#ffe28a]">{stats.phase}</span>
          </span>
        </div>
      </div>

      {/* Bottom Footer Info */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-white/10 pt-4 text-[11.5px] font-mono text-white/40">
        <div>
          <span>Crafted with high-fidelity visuals &amp; interactive motion</span>
        </div>
        <div className="flex items-center gap-3">
          <span>{displayedPercent >= 100 ? 'INITIALIZING INTERACTION' : 'STREAMING ASSETS'}</span>
          <div className="flex gap-1">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/40 animate-pulse" />
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/40 animate-pulse [animation-delay:200ms]" />
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/40 animate-pulse [animation-delay:400ms]" />
          </div>
        </div>
      </div>
    </aside>
  );
}
