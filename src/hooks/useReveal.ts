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
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -6% 0px' },
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
