import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutHeroStyles } from './AboutHero.styles';
import type { AboutHeroProps } from './AboutHero.types';

gsap.registerPlugin(ScrollTrigger);

export function AboutHero({ className = '' }: AboutHeroProps) {
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mask = maskRef.current;
    if (!mask) return;

    // Top-to-bottom scroll reveal: compressed scroll range so image is fully revealed before scrolling past
    gsap.fromTo(
      mask,
      { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' },
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        ease: 'none',
        scrollTrigger: {
          trigger: mask,
          start: 'top 90%',
          end: 'top 10%',
          scrub: 0.6,
        },
      }
    );
  }, []);

  return (
    <section className={`${aboutHeroStyles.section} ${className}`}>
      {/* Two-Line Headline */}
      <div className={aboutHeroStyles.headlineWrapper}>
        <motion.h1
          className={aboutHeroStyles.line1}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          WAIT.
        </motion.h1>
        <motion.h1
          className={aboutHeroStyles.line2}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          WHO THIS GUY?
        </motion.h1>
      </div>

      {/* Profile Photo — Clean Scroll Reveal Animation */}
      <div className={aboutHeroStyles.imageWrapper}>
        <div className={aboutHeroStyles.imageFrame}>
          <div ref={maskRef} className={aboutHeroStyles.imageMask} style={{ willChange: 'clip-path' }}>
            <img
              src="/profile.png"
              alt="Outman Elbouhali"
              className={aboutHeroStyles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
