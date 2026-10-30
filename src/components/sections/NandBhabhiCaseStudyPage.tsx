import { useEffect } from 'react';
import { useReveal } from '../../hooks/useReveal';
import { NandBhabhiCaseStudy } from './NandBhabhiCaseStudy';
import { EMAIL, Footer } from './Sections';

/** The NANADHBABBHI e-commerce and admin dashboard case study page. */
export function NandBhabhiCaseStudyPage() {
  useReveal();

  useEffect(() => {
    const previous = document.title;
    document.title = 'NANADHBABBHI Case Study | M. Shri Lakshmi';
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
        <NandBhabhiCaseStudy page />
      </main>
      <Footer />
    </div>
  );
}
