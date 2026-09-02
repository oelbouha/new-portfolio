import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { introHeadlineData } from './IntroHeadline.data';

gsap.registerPlugin(ScrollTrigger);

interface IntroHeadlineProps {
  className?: string;
}

export function IntroHeadline({ className = '' }: IntroHeadlineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const lines = Array.from(container.querySelectorAll<HTMLElement>('[data-line]'));
    const triggers: ScrollTrigger[] = [];

    lines.forEach((line) => {
      // Start invisible/faint
      gsap.set(line, { opacity: 0.12 });

      const st = ScrollTrigger.create({
        trigger: line,
        start: 'top 82%',
        end: 'top 40%',
        scrub: 0.6,
        onUpdate: (self) => {
          gsap.set(line, { opacity: 0.12 + self.progress * 0.83 });
        },
      });
      triggers.push(st);
    });

    return () => triggers.forEach((t) => t.kill());
  }, []);

  return (
    <div ref={containerRef} className={`flex w-full flex-col items-center gap-3 text-center ${className}`}>
      {introHeadlineData.lines.map((line, idx) => (
        <h2
          key={idx}
          data-line={idx}
          className="max-w-4xl lg:max-w-5xl font-[family-name:var(--font-display)] text-[clamp(2.2rem,5.2vw,5.2rem)] font-bold uppercase leading-[0.95] tracking-[0.01em] text-[var(--text)] [text-wrap:balance]"
          style={{ willChange: 'opacity' }}
        >
          {line}
        </h2>
      ))}
    </div>
  );
}

