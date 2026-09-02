import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface ScrollHeadlineProps {
  tag?: string;
  lines: string[];
  className?: string;
  lineClassName?: string;
}

export function ScrollHeadline({
  tag,
  lines,
  className = '',
  lineClassName = '',
}: ScrollHeadlineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const lineEls = Array.from(container.querySelectorAll<HTMLElement>('[data-scroll-line]'));
    const triggers: ScrollTrigger[] = [];

    lineEls.forEach((line) => {
      gsap.set(line, { opacity: 0.14 });

      const st = ScrollTrigger.create({
        trigger: line,
        start: 'top 85%',
        end: 'top 40%',
        scrub: 0.6,
        onUpdate: (self) => {
          gsap.set(line, { opacity: 0.14 + self.progress * 0.86 });
        },
      });
      triggers.push(st);
    });

    return () => triggers.forEach((t) => t.kill());
  }, [lines]);

  return (
    <div ref={containerRef} className={`flex w-full flex-col items-center gap-3 text-center ${className}`}>
      {tag && (
        <div className="font-[family-name:var(--font-mono)] text-xs sm:text-sm font-semibold uppercase tracking-[0.08em] text-black/40 dark:text-white/40 text-center mb-4 sm:mb-6">
          {tag}
        </div>
      )}

      {lines.map((line, idx) => (
        <h2
          key={idx}
          data-scroll-line={idx}
          className={`max-w-4xl lg:max-w-5xl font-[family-name:var(--font-display)] text-[clamp(2.2rem,5.2vw,5.2rem)] font-bold uppercase leading-[0.95] tracking-[0.01em] text-[var(--text)] [text-wrap:balance] ${lineClassName}`}
          style={{ willChange: 'opacity' }}
        >
          {line}
        </h2>
      ))}
    </div>
  );
}
