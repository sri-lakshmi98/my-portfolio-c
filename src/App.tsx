import { useEffect, useRef, useState } from 'react';
import { GazeCanvas } from './components/GazeCanvas';
import { HeroDeskOverlay } from './components/HeroDeskOverlay';
import { CaseStudyPage } from './components/sections/CaseStudyPage';
import { NandBhabhiCaseStudyPage } from './components/sections/NandBhabhiCaseStudyPage';
import { JourneySection } from './components/JourneySection';
import {
  Contact,
  EMAIL,
  Experience,
  Footer,
  MAILTO,
  Process,
  Services,
  Skills,
  Work,
} from './components/sections/Sections';
import { useHashRoute } from './hooks/useHashRoute';
import { useReveal } from './hooks/useReveal';

const NAV_ITEMS = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const HERO_LINKS = [
  { label: 'My journey', href: '#journey' },
  { label: 'What I am capable of', href: '#services' },
  { label: 'Tools & skills I have a strong command of', href: '#skills' },
  { label: 'Hire me or reach out', href: '#contact' },
];

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const [isHeroVisible, setIsHeroVisible] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.location.hash && window.location.hash !== '#top' && window.location.hash !== '#') {
        return false;
      }
    }
    return true;
  });

  useReveal();

  useEffect(() => {
    const target = window.location.hash.length > 1 ? document.getElementById(window.location.hash.slice(1)) : null;
    target?.scrollIntoView();
  }, []);

  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#460607] text-white">
      <GazeCanvas />
      <HeroDeskOverlay />
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-r from-black/20 via-black/5 to-transparent"
        aria-hidden="true"
      />

      <nav
        className={`fixed inset-x-0 top-0 z-10 flex items-center justify-between px-6 py-4 transition-[background-color,box-shadow] duration-300 sm:px-10 md:px-14 lg:px-16 ${
          scrolled || isMenuOpen ? 'bg-[#460607]/92 shadow-[0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-md' : ''
        }`}
        aria-label="Main navigation"
      >
        <a href="#top" className="flex items-center" aria-label="M. Shri Lakshmi, back to top">
          <span
            className="text-[21px] tracking-tight text-white sm:text-[26px]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Shri Lakshmi®
          </span>
        </a>

        <div
          className={`hidden items-center gap-1 rounded-full border border-white/30 bg-black/20 p-1 text-[17px] text-white backdrop-blur-md md:flex lg:text-[18px] transition-[opacity,transform] duration-300 ease-out ${
            isHeroVisible
              ? 'pointer-events-none opacity-0 -translate-y-2'
              : 'pointer-events-auto opacity-100 translate-y-0'
          }`}
          aria-hidden={isHeroVisible}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              tabIndex={isHeroVisible ? -1 : 0}
              className="rounded-full px-5 py-[0.35em] transition-colors duration-200 hover:bg-white hover:text-black focus-visible:bg-white focus-visible:text-black focus-visible:outline-none"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={MAILTO}
          className="hidden items-center gap-1 text-[21px] text-white underline underline-offset-2 transition-opacity hover:opacity-75 sm:text-[23px] md:inline-flex"
        >
          <span>Get in touch</span>
          <span className="text-[19px] leading-none" aria-hidden="true">↗</span>
        </a>

        <button
          type="button"
          className="flex flex-col gap-[5px] md:hidden"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span
            className={`h-[2px] w-6 origin-center bg-white transition duration-300 ${
              isMenuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-white transition duration-300 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`h-[2px] w-6 origin-center bg-white transition duration-300 ${
              isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-[9] flex flex-col justify-center gap-7 bg-black/90 px-8 backdrop-blur-md transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!isMenuOpen}
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-[32px] font-medium text-white transition-opacity hover:opacity-60"
            onClick={closeMenu}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            {item.label}
          </a>
        ))}
        <a
          href={MAILTO}
          className="text-[32px] font-medium text-white underline underline-offset-2 transition-opacity hover:opacity-60"
          onClick={closeMenu}
          tabIndex={isMenuOpen ? 0 : -1}
        >
          Get in touch
        </a>
      </div>

      <main
        id="top"
        ref={heroRef}
        className="relative z-[1] flex h-screen min-h-[600px] flex-col justify-start px-6 pt-20 sm:px-10 sm:pt-24 md:px-14 md:pt-26 lg:px-16 lg:pt-28"
      >
        {/* Floating handwritten doodle shifted more right to clear the chibi */}
        <div
          className="pointer-events-none absolute right-2 top-[22%] z-10 hidden rotate-[-6deg] select-none text-[#e8453c] sm:right-3 sm:top-[23%] sm:block md:right-4 md:top-[24%] lg:right-6"
          style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
          aria-hidden="true"
        >
          <div className="flex flex-col text-[18px] font-semibold leading-[1.2] sm:text-[20px] md:text-[23px]">
            <span className="pl-0">Design</span>
            <span className="pl-2.5">Create</span>
            <span className="pl-5">Build</span>
            <span className="flex items-center pl-7">
              Grow&nbsp;<span className="text-[0.75em]">♡</span>
            </span>
            <svg
              className="ml-6 mt-1 h-2.5 w-11 text-[#e8453c]"
              viewBox="0 0 54 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            >
              <path d="M4 5C18 12 38 12 50 5" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-[640px]">
          <h1
            className="text-[clamp(28px,3.6vw,54px)] font-normal leading-[1.14] tracking-[-0.015em] text-white"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            I make{' '}
            <span className="relative inline-block italic font-normal">
              ideas
              <svg
                className="pointer-events-none absolute -top-4 left-1/2 h-4 w-7 -translate-x-1/2 overflow-visible text-[#e8453c] sm:-top-5 sm:h-5 sm:w-8"
                viewBox="0 0 32 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M8 14L4 4" />
                <path d="M16 13L16 2" />
                <path d="M24 14L28 4" />
              </svg>
            </span>{' '}
            work —<br />
            from pixels to{' '}
            <span className="relative inline-block pb-1">
              people.
              <svg
                className="pointer-events-none absolute -bottom-2 left-0 h-3.5 w-full overflow-visible text-[#e8453c] sm:-bottom-2.5 sm:h-4"
                viewBox="0 0 140 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M3 6C36 3 92 2 136 6C108 9 68 11 38 12C62 13 104 12 132 10" />
              </svg>
            </span>
          </h1>

          <nav
            className="mt-5 flex w-full max-w-[430px] flex-col border-t border-white/20 sm:mt-7 sm:max-w-[460px]"
            aria-label="Hero shortcuts"
          >
            {HERO_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group flex items-center justify-between border-b border-white/20 py-2 sm:py-2.5 text-[13.5px] sm:text-[14.5px] md:text-[15.5px] text-white/90 transition-colors duration-200 hover:text-white"
              >
                <span className="font-normal tracking-wide transition-transform duration-200 group-hover:translate-x-1">
                  {link.label}
                </span>
                <svg
                  className="h-4 w-4 text-[#e8453c] transition-transform duration-200 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <polyline points="14 6 20 12 14 18" />
                </svg>
              </a>
            ))}
          </nav>
        </div>
      </main>

            {/* Sections fade and rise in smoothly when hero scrolls away */}
      <div
        className="transition-[opacity,transform] duration-700 ease-out"
        style={{
          opacity: isHeroVisible ? 0.75 : 1,
          transform: isHeroVisible ? 'translateY(18px)' : 'translateY(0)',
        }}
      >
<JourneySection />
      <Services />
      <Work />
      <Process />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
      </div>
    </div>
  );
}

function App() {
  const route = useHashRoute();
  if (route.startsWith('#/case-study/nand-bhabhi')) {
    return <NandBhabhiCaseStudyPage />;
  }
  return route.startsWith('#/case-study/aadithya') ? <CaseStudyPage /> : <Home />;
}

export default App;
