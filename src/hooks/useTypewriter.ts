import { useEffect, useState } from 'react';

type TypewriterResult = {
  displayed: string;
  done: boolean;
};

export function useTypewriter(
  text: string,
  speed = 38,
  startDelay = 600,
): TypewriterResult {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let intervalId: number | undefined;
    let characterIndex = 0;

    setDisplayed('');
    setDone(false);

    const delayId = window.setTimeout(() => {
      if (!text) {
        setDone(true);
        return;
      }

      intervalId = window.setInterval(() => {
        characterIndex += 1;
        setDisplayed(text.slice(0, characterIndex));

        if (characterIndex >= text.length) {
          window.clearInterval(intervalId);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      window.clearTimeout(delayId);
      if (intervalId !== undefined) {
        window.clearInterval(intervalId);
      }
    };
  }, [startDelay, speed, text]);

  return { displayed, done };
}
