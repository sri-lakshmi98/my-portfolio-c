import { useState, useRef, useEffect, useCallback } from 'react';

export interface PostcardSlide {
  src: string;
  title: string;
  caption: string;
  tag?: string;
  alt: string;
}

interface PostcardSliderProps {
  slides: PostcardSlide[];
  projectName: string;
  projectHref?: string;
}

export function PostcardSlider({ slides, projectName, projectHref }: PostcardSliderProps) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const lightbox = useRef<HTMLDialogElement>(null);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  }, [slides.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));
  }, [slides.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) next();
    if (diff < -50) prev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const activeSlide = slides[current];

  return (
    <div
      className="postcard-container group"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label={`${projectName} gallery`}
    >
      {/* Postcard Frame */}
      <div className="postcard-card">
        {/* Postcard Header / Airmail Bar */}
        <div className="postcard-header">
          <div className="postcard-stamp">
            <span className="postcard-stamp-dot" />
            <span className="postcard-stamp-text">POSTCARD</span>
          </div>
          <div className="postcard-counter">
            <span className="current-num">0{current + 1}</span>
            <span className="divider">/</span>
            <span className="total-num">0{slides.length}</span>
          </div>
        </div>

        {/* Viewport & Slide Track */}
        <div className="postcard-viewport">
          <div
            className="postcard-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((s, idx) => (
              <div
                key={idx}
                className="postcard-slide"
                aria-hidden={idx !== current}
              >
                <button
                  type="button"
                  className="postcard-zoom"
                  tabIndex={idx === current ? 0 : -1}
                  aria-label={`View full size: ${s.title}`}
                  onClick={() => lightbox.current?.showModal()}
                >
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading={idx === 0 ? 'eager' : 'lazy'}
                    className="postcard-img"
                  />
                </button>
                <span className="postcard-zoom-hint" aria-hidden="true">Click to enlarge</span>
                {s.tag && (
                  <span className="postcard-badge">{s.tag}</span>
                )}
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {slides.length > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                className="postcard-nav-btn prev"
                aria-label="Previous postcard slide"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                  <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={next}
                className="postcard-nav-btn next"
                aria-label="Next postcard slide"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                  <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Postcard Caption Footer */}
        <div className="postcard-footer">
          <div className="postcard-caption">
            <h4 className="postcard-caption-title">{activeSlide.title}</h4>
            <p className="postcard-caption-desc">{activeSlide.caption}</p>
          </div>

          {/* Slide Indicator Dots */}
          {slides.length > 1 && (
            <div className="postcard-dots" role="tablist" aria-label="Slides">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  role="tab"
                  aria-selected={idx === current}
                  aria-label={`Jump to slide ${idx + 1}`}
                  onClick={() => setCurrent(idx)}
                  className={`postcard-dot ${idx === current ? 'active' : ''}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Full-size view of the current slide, so screen text stays readable */}
      <dialog
        ref={lightbox}
        className="postcard-lightbox"
        aria-label={`${projectName}: ${activeSlide.title}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) lightbox.current?.close();
        }}
      >
        <img src={activeSlide.src} alt={activeSlide.alt} />
        <div className="postcard-lightbox-bar">
          <p className="postcard-lightbox-title">{activeSlide.title}</p>
          <div className="postcard-lightbox-actions">
            {slides.length > 1 && (
              <>
                <button type="button" onClick={prev}>Previous</button>
                <button type="button" onClick={next}>Next</button>
              </>
            )}
            <button type="button" onClick={() => lightbox.current?.close()}>Close</button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
