import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { HERO_WORDS } from '@/lib/constants';

export function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const slotRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const wordIndex = useRef(0);

  useEffect(() => {
    // Staggered reveal after preloader
    const tl = gsap.timeline({ delay: 0.3 });
    if (headlineRef.current) {
      tl.fromTo(headlineRef.current,
        { y: '3rem', opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out' }
      );
    }
    if (descRef.current) {
      tl.fromTo(descRef.current,
        { y: '2rem', opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0, ease: 'power3.out' },
        '-=0.7'
      );
    }
    if (scrollHintRef.current) {
      tl.fromTo(scrollHintRef.current,
        { opacity: 0 },
        { opacity: 0.35, duration: 1.0, ease: 'power2.out' },
        '-=0.5'
      );
    }

    // Word rotation
    const interval = setInterval(() => {
      if (!slotRef.current) return;
      wordIndex.current = (wordIndex.current + 1) % HERO_WORDS.length;
      gsap.to(slotRef.current, {
        y: `-${wordIndex.current * 100}%`,
        duration: 0.9,
        ease: 'power4.inOut',
      });
    }, 2800);

    return () => { clearInterval(interval); tl.kill(); };
  }, []);

  return (
    <section className="section-hero" id="hero">
      {/* Animated gradient background */}
      <div
        className="hero-bg"
        style={{
          background: 'radial-gradient(ellipse at 70% 40%, rgba(128,128,128,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="hero-content">
        {/* Main headline */}
        <h1 ref={headlineRef} className="hero-headline" style={{ opacity: 0 }}>
          <span style={{ display: 'block' }}>We build</span>
          <span style={{ display: 'block', position: 'relative' }}>
            {/* Word switcher */}
            <span
              className="hero-word-wrapper"
              style={{ height: '1em', verticalAlign: 'bottom', lineHeight: 1 }}
            >
              <div ref={slotRef} className="hero-word-slot" style={{ y: 0 }}>
                {HERO_WORDS.map((w) => (
                  <span
                    key={w}
                    style={{
                      display: 'block',
                      height: '1em',
                      lineHeight: 1,
                      fontStyle: 'italic',
                    }}
                  >
                    {w}
                  </span>
                ))}
              </div>
            </span>
          </span>
          <span style={{ display: 'block' }}>Websites.</span>
        </h1>

        {/* Bottom row */}
        <div ref={descRef} className="hero-bottom" style={{ opacity: 0 }}>
          <p className="hero-desc">
            Designer &amp; developer crafting bold digital<br />
            experiences for ambitious brands.<br />
            Based in Paris, available worldwide.
          </p>

          <div
            ref={scrollHintRef}
            className="hero-scroll-hint"
            style={{ opacity: 0 }}
          >
            Scroll to explore
          </div>
        </div>
      </div>

      {/* Subtle noise/grain texture */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          opacity: 0.4,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
    </section>
  );
}
