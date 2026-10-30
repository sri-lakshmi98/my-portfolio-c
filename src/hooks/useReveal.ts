import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('in'));
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // A section taller than the screen may never show 15% of itself, so it reveals on entering.
          const tall = entry.boundingClientRect.height > window.innerHeight;
          if (entry.isIntersecting && (tall || entry.intersectionRatio >= 0.15)) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: [0, 0.15], rootMargin: '0px 0px -6% 0px' },
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
