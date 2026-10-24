import { useCallback, useEffect, useRef, useState } from 'react';

export function useCopy(text: string) {
  const timeoutRef = useRef<number | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const announce = useCallback(() => {
    setCopied(true);
    if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setCopied(false), 1800);
  }, []);

  const copy = useCallback(async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        announce();
        return;
      }
    } catch {
      // Fall through to the legacy copy path when browser permission is unavailable.
    }

    const area = document.createElement('textarea');
    area.value = text;
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(area);
    if (ok) announce();
  }, [text, announce]);

  return { copied, copy };
}
