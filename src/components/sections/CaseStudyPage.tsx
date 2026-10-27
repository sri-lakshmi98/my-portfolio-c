import { useEffect } from 'react';
import { useReveal } from '../../hooks/useReveal';
import { CaseStudy } from './CaseStudy';
import { EMAIL, Footer } from './Sections';

/** The Aadithya case study as a page of its own, with a simple header and a way back to the work. */
export function CaseStudyPage() {
  useReveal();

  useEffect(() => {
    const previous = document.title;
    document.title = 'Aadithya case study | M. Shri Lakshmi';
    window.scrollTo(0, 0);
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#460607] text-white">
      <header className="cs-header">
        <a href="#work" className="cs-back">
          <span aria-hidden="true">&larr;</span> Back to my work
        </a>
        <a href="#top" className="cs-home" style={{ fontFamily: 'var(--font-heading)' }}>
          Shri Lakshmi®
        </a>
        <a href={`mailto:${EMAIL}`} className="cs-mail">
          Get in touch
        </a>
      </header>
      <main>
        <CaseStudy page />
      </main>
      <Footer />
    </div>
  );
}
