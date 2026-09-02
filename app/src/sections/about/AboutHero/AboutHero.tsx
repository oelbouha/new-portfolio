import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutData } from '@/data/about.data';
import { aboutHeroStyles } from './AboutHero.styles';
import type { AboutHeroProps } from './AboutHero.types';

gsap.registerPlugin(ScrollTrigger);

export function AboutHero({ className = '' }: AboutHeroProps) {
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mask = maskRef.current;
    if (!mask) return;

    // Top-to-bottom scroll reveal: compressed scroll range so image is fully revealed as user scrolls
    gsap.fromTo(
      mask,
      { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' },
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        ease: 'none',
        scrollTrigger: {
          trigger: mask,
          start: 'top 85%',
          end: 'top 20%',
          scrub: 0.6,
        },
      }
    );
  }, []);

  return (
    <section className={`${aboutHeroStyles.section} ${className}`}>
      {/* Three-Line Headline — Centered full-screen using Tailwind CSS */}
      <div className={aboutHeroStyles.headlineWrapper}>
        <motion.h1
          className={aboutHeroStyles.line1}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {aboutData.hero.line1}
        </motion.h1>
        <motion.h1
          className={aboutHeroStyles.line2}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          {aboutData.hero.line2}
        </motion.h1>
        <motion.h1
          className={aboutHeroStyles.line3}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
        >
          {aboutData.hero.line3}
        </motion.h1>
      </div>

      {/* Profile Photo — Clean Scroll Reveal Animation */}
      <div className={aboutHeroStyles.imageWrapper}>
        <div className={aboutHeroStyles.imageFrame}>
          <div ref={maskRef} className={aboutHeroStyles.imageMask} style={{ willChange: 'clip-path' }}>
            <img
              src={aboutData.hero.imageSrc}
              alt={aboutData.hero.imageAlt}
              className={aboutHeroStyles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
