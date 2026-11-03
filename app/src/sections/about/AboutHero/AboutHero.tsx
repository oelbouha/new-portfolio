'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { about } from '@/data';
import { aboutHeroStyles } from './AboutHero.styles';
import type { AboutHeroProps } from './AboutHero.types';

gsap.registerPlugin(ScrollTrigger);

export function AboutHero({ className = '' }: AboutHeroProps) {
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mask = maskRef.current;
    if (!mask) return;

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
      <h1 className={aboutHeroStyles.headlineWrapper}>
        <motion.span
          className={`${aboutHeroStyles.line1} block`}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {about.hero.line1}
        </motion.span>
        <motion.span
          className={`${aboutHeroStyles.line2} block`}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          {about.hero.line2}
        </motion.span>
        <motion.span
          className={`${aboutHeroStyles.line3} block`}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
        >
          {about.hero.line3}
        </motion.span>
        <span className="sr-only"> — Outman Elbouhali Full-Stack Developer</span>
      </h1>

      <div className={aboutHeroStyles.imageWrapper}>
        <div className={aboutHeroStyles.imageFrame}>
          <div ref={maskRef} className={aboutHeroStyles.imageMask} style={{ willChange: 'clip-path' }}>
            <img
              src={about.hero.image.src}
              alt={about.hero.image.alt}
              className={aboutHeroStyles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
