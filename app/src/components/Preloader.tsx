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
    if (preloaderRef.current) {
      gsap.set(preloaderRef.current, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 175%, 0% 100%)' });
    }

    const tl = gsap.timeline({
      onComplete: () => {
        if (!preloaderRef.current) { onComplete(); return; }
        gsap.to(preloaderRef.current, {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
          duration: 1.8,
          ease: 'power4.inOut',
          onComplete,
        });
      },
    });

    // Animate the count 0 → 100
    const countObj = { val: 0 };
    tl.to(countObj, {
      val: 100,
      duration: 1.8,
      ease: 'power2.inOut',
      onUpdate() {
        if (countRef.current) countRef.current.textContent = String(Math.round(countObj.val));
      },
    }, 0);

    // Animate the bar
    if (barRef.current) {
      tl.fromTo(barRef.current, { scaleX: 0 }, { scaleX: 1, duration: 1.8, ease: 'power2.inOut' }, 0);
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
