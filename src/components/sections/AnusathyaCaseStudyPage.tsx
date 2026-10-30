import { useEffect } from 'react';
import { useReveal } from '../../hooks/useReveal';
import { AnusathyaCaseStudy } from './AnusathyaCaseStudy';
import { EMAIL, Footer } from './Sections';

/** The Shree Anusathya Designers digital marketing case study page. */
export function AnusathyaCaseStudyPage() {
  useReveal();

  useEffect(() => {
    const previous = document.title;
    document.title = 'Shree Anusathya Designers Case Study | M. Shri Lakshmi';
    window.scrollTo({ top: 0, behavior: 'instant' });
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
        <AnusathyaCaseStudy page />
      </main>
      <Footer />
    </div>
  );
}
