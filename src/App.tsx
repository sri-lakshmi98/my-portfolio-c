import { useEffect, useState } from 'react';
import { GazeCanvas } from './components/GazeCanvas';
import { CaseStudyPage } from './components/sections/CaseStudyPage';
import { JourneySection } from './components/JourneySection';
import {
  Contact,
  EMAIL,
  Experience,
  Footer,
  MAILTO,
  Process,
  RESUME,
  Services,
  Skills,
  Work,
} from './components/sections/Sections';
import { useCopy } from './hooks/useCopy';
import { useHashRoute } from './hooks/useHashRoute';
import { useReveal } from './hooks/useReveal';
import { useTypewriter } from './hooks/useTypewriter';

const HERO_MESSAGE = 'Clear, usable websites, backed by content, SEO and sound operations.';
const NAV_ITEMS = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

function CopyIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-3 w-3 shrink-0"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="1" width="7" height="7" rx="0.7" stroke="currentColor" />
      <rect x="1" y="4" width="7" height="7" rx="0.7" stroke="currentColor" />
    </svg>
  );
}

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { displayed, done } = useTypewriter(HERO_MESSAGE);
  const { copied, copy: copyEmail } = useCopy(EMAIL);

  useReveal();

  useEffect(() => {
    const target = window.location.hash.length > 1 ? document.getElementById(window.location.hash.slice(1)) : null;
    target?.scrollIntoView();
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
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-black/20"
        aria-hidden="true"
      />

      <nav
        className={`fixed inset-x-0 top-0 z-10 flex items-center justify-between px-5 py-4 transition-[background-color,box-shadow] duration-300 sm:px-8 sm:py-4 ${
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

        <div className="hidden items-center gap-1 rounded-full border border-white/30 bg-black/20 p-1 text-[17px] text-white backdrop-blur-md md:flex lg:text-[18px]">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full px-5 py-[0.35em] transition-colors duration-200 hover:bg-white hover:text-black focus-visible:bg-white focus-visible:text-black focus-visible:outline-none"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={MAILTO}
          className="hidden text-[23px] text-white underline underline-offset-2 transition-opacity hover:opacity-60 md:block"
        >
          Get in touch
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
        className="relative z-[1] flex h-screen min-h-[640px] flex-col justify-end overflow-hidden px-5 pb-12 sm:px-8 md:justify-center md:px-10 md:pb-0"
      >
        <div className="relative z-10 max-w-[680px]">
          <div className="hero-rise mb-5 flex flex-wrap gap-y-1 sm:mb-6" style={{ '--d': '0.1s' } as React.CSSProperties}>
            <a href={MAILTO} className="mb-[0.4em] mx-[0.2em] inline-flex items-center justify-center whitespace-nowrap rounded-full border border-black/10 bg-white px-4 py-[0.3em] text-[13px] text-black transition-colors duration-200 hover:bg-black hover:text-white sm:px-5 sm:text-[15px]">
              Hire me
            </a>
            <a href="#work" className="mb-[0.4em] mx-[0.2em] inline-flex items-center justify-center whitespace-nowrap rounded-full border border-black/10 bg-white px-4 py-[0.3em] text-[13px] text-black transition-colors duration-200 hover:bg-black hover:text-white sm:px-5 sm:text-[15px]">
              See my work
            </a>
            <a href="#contact" className="mb-[0.4em] mx-[0.2em] inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white bg-transparent px-4 py-[0.3em] text-[13px] text-white transition-colors duration-200 hover:bg-white hover:text-black sm:gap-3 sm:px-5 sm:text-[15px]">
              Open to an Associate Designer role
            </a>
          </div>

          <h1
            className="mb-4 text-[clamp(64px,13vw,168px)] font-normal leading-[0.88] tracking-[-0.04em] text-white"
            style={{ textShadow: '0 2px 24px rgba(0,0,0,0.45)', fontFamily: 'var(--font-heading)' }}
          >
            <span className="block overflow-hidden pb-[0.06em]">
              <span className="hero-rise block" style={{ '--d': '0.2s' } as React.CSSProperties}>
                Shri
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.06em]">
              <span className="hero-rise block" style={{ '--d': '0.34s' } as React.CSSProperties}>
                Lakshmi
              </span>
            </span>
          </h1>

          <p
            className="mb-5 min-h-[56px] max-w-[30rem] text-[clamp(17px,2.4vw,24px)] font-normal leading-[1.35] text-white sm:mb-6"
            style={{ textShadow: '0 1px 14px rgba(0,0,0,0.5)' }}
            aria-label={HERO_MESSAGE}
          >
            <span aria-hidden="true">
              {displayed}
              {!done && <span className="blink-cursor" aria-hidden="true" />}
            </span>
          </p>

          <div className="hero-rise flex flex-wrap gap-y-1" style={{ '--d': '0.7s' } as React.CSSProperties}>
            <a href={RESUME} download="Shri-Lakshmi-Resume.pdf" className="mb-[0.4em] mx-[0.2em] inline-flex items-center justify-center whitespace-nowrap rounded-full border border-black/10 bg-white px-4 py-[0.3em] text-[13px] text-black transition-colors duration-200 hover:bg-black hover:text-white sm:px-5 sm:text-[15px]">
              Download resume
            </a>
            <a href="#services" className="mb-[0.4em] mx-[0.2em] inline-flex items-center justify-center whitespace-nowrap rounded-full border border-black/10 bg-white px-4 py-[0.3em] text-[13px] text-black transition-colors duration-200 hover:bg-black hover:text-white sm:px-5 sm:text-[15px]">
              What I can do
            </a>
            <a href="#skills" className="mb-[0.4em] mx-[0.2em] inline-flex items-center justify-center whitespace-nowrap rounded-full border border-black/10 bg-white px-4 py-[0.3em] text-[13px] text-black transition-colors duration-200 hover:bg-black hover:text-white sm:px-5 sm:text-[15px]">
              Skills and tools
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="mb-[0.4em] mx-[0.2em] inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white bg-transparent px-4 py-[0.3em] text-[13px] text-white transition-colors duration-200 hover:bg-white hover:text-black sm:gap-3 sm:px-5 sm:text-[15px]"
              aria-label={copied ? 'Email copied to clipboard' : `Copy ${EMAIL} to clipboard`}
              title={copied ? 'Email copied' : 'Copy email address'}
            >
              <span className="inline-grid">
                <span className={`col-start-1 row-start-1 ${copied ? 'invisible' : ''}`}>
                  Reach me: <span className="underline underline-offset-1">{EMAIL}</span>
                </span>
                <span className={`col-start-1 row-start-1 ${copied ? '' : 'invisible'}`} aria-hidden="true">
                  Copied to clipboard
                </span>
              </span>
              <CopyIcon />
            </button>
            <span className="sr-only" aria-live="polite">
              {copied ? 'Email copied to clipboard.' : ''}
            </span>
          </div>
        </div>
      </main>

      <JourneySection />
      <Services />
      <Work />
      <Process />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  const route = useHashRoute();
  return route.startsWith('#/case-study/aadithya') ? <CaseStudyPage /> : <Home />;
}

export default App;
