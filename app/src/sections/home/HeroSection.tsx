import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { HERO_WORDS } from '@/lib/constants';
import { heroSectionStyles } from './HeroSection.styles';

export function HeroSection() {
  const slotRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const slot = slotRef.current;
    if (!slot) return;

    // Pin at first word immediately
    gsap.set(slot, { y: '0%' });

    const tick = () => {
      const next = (indexRef.current + 1) % HERO_WORDS.length;
      indexRef.current = next;
      gsap.to(slot, {
        y: `-${next * 100}%`,
        duration: 0.9,
        ease: 'power4.inOut',
      });
    };

    const id = setInterval(tick, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section className={heroSectionStyles.section} id="hero">
      <div className={heroSectionStyles.inner}>
        <h1 className={heroSectionStyles.title}>
          <span className={heroSectionStyles.line}>We</span>
          <span className={heroSectionStyles.wordRow}>
            <span className={heroSectionStyles.wordViewport}>
              <div
                ref={slotRef}
                className={heroSectionStyles.wordSlot}
              >
                {HERO_WORDS.map((word) => (
                  <span key={word} className={heroSectionStyles.word}>
                    {word}
                  </span>
                ))}
              </div>
            </span>
          </span>
          <span className={heroSectionStyles.line}>Websites.</span>
        </h1>

        <p className={heroSectionStyles.subtitle}>
          Bold systems, calm execution, and clean interfaces built to move.
        </p>
      </div>

      <div aria-hidden className={heroSectionStyles.noise} />
    </section>
  );
}
