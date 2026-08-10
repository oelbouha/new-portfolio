import { useState, useEffect, type RefObject } from 'react';

export function useScrollProgress<T extends HTMLElement>(ref: RefObject<T | null>): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const calculateProgress = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start when top of element enters viewport, end when bottom of element aligns or leaves
      const start = windowHeight;
      const end = 0;
      const current = rect.top;

      // Calculate progress between 0 and 1
      const rawProgress = (start - current) / (start - end);
      const clampedProgress = Math.max(0, Math.min(1, rawProgress));

      setProgress(clampedProgress);
    };

    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(calculateProgress);
    };

    calculateProgress();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', calculateProgress, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateProgress);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [ref]);

  return progress;
}
