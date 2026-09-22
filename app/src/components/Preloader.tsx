import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const countRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const topEl = preloaderRef.current?.querySelector('.preloader-top');
    const centerEl = preloaderRef.current?.querySelector('.preloader-center');
    const bottomEl = preloaderRef.current?.querySelector('.preloader-bottom');

    // Set initial states: elements start below and invisible (slide-up animation like hero)
    if (topEl) gsap.set(topEl, { y: 40, opacity: 0 });
    if (centerEl) gsap.set(centerEl, { y: 60, opacity: 0 });
    if (bottomEl) gsap.set(bottomEl, { y: 40, opacity: 0 });

    const tl = gsap.timeline({
      onComplete: () => {
        if (!preloaderRef.current) { onComplete(); return; }
        // Exit: slide the entire preloader up using translateY (same slide feel as page transitions)
        gsap.to(preloaderRef.current, {
          yPercent: -100,
          duration: 1.2,
          ease: 'power4.inOut',
          onComplete,
        });
      },
    });

    // Slide-up entrance animations (same pattern as home page hero)
    tl.to(topEl, { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out' }, 0);
    tl.to(centerEl, { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out' }, 0.1);
    tl.to(bottomEl, { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out' }, 0.2);

    // Animate the count 0 → 100
    const countObj = { val: 0 };
    tl.to(countObj, {
      val: 100,
      duration: 1.8,
      ease: 'power2.inOut',
      onUpdate() {
        if (countRef.current) countRef.current.textContent = String(Math.round(countObj.val));
      },
    }, 0.3);

    // Animate the bar
    if (barRef.current) {
      tl.fromTo(barRef.current, { scaleX: 0 }, { scaleX: 1, duration: 1.8, ease: 'power2.inOut' }, 0.3);
    }

    // Small hold before exit slide
    tl.to({}, { duration: 0.2 });

    return () => { tl.kill(); };
  }, [onComplete]);

  return (
    <div ref={preloaderRef} className="preloader" aria-hidden="true">
      <div className="preloader-top">
        <span className="preloader-name" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.55 }}>
          Portfolio
        </span>
        <span className="preloader-name" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.4 }}>
          Loading
        </span>
      </div>

      <div className="preloader-center">
        <div ref={countRef} className="preloader-count">0</div>
      </div>

      <div className="preloader-bottom">
        <div className="preloader-bar-track">
          <div ref={barRef} className="preloader-bar-fill" />
        </div>
        <div className="preloader-status">Crafting your experience</div>
      </div>
    </div>
  );
}
