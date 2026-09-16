import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface ScrollHeadlineProps {
  tag?: string;
  statement?: string;
  lines?: string[];
  className?: string;
  lineClassName?: string;
}

export function ScrollHeadline({
  tag,
  statement,
  lines,
  className = '',
  lineClassName = '',
}: ScrollHeadlineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const items = statement ? [statement] : (lines || []);

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
  }, [statement, lines]);

  return (
    <div ref={containerRef} className={`flex w-full flex-col items-center gap-3 text-center ${className}`}>
      {tag && (
        <div className="font-[family-name:var(--font-mono)] text-xs sm:text-sm font-semibold uppercase tracking-[0.08em] text-[var(--text)] opacity-50 text-center mb-4 sm:mb-6">
          {tag}
        </div>
      )}

      {items.map((item, idx) => (
        <h2
          key={idx}
          data-scroll-line={idx}
          className={`max-w-5xl lg:max-w-6xl font-[family-name:var(--font-display)] text-[clamp(2.8rem,6.5vw,6.5rem)] font-bold uppercase leading-[0.92] tracking-[0.01em] text-[var(--text)] [text-wrap:balance] ${lineClassName}`}
          style={{ willChange: 'opacity' }}
        >
          {item}
        </h2>
      ))}
    </div>
  );
}
