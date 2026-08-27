import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutBioStyles } from './AboutBio.styles';
import type { AboutBioProps } from './AboutBio.types';

gsap.registerPlugin(ScrollTrigger);

export function AboutBio({ className = '' }: AboutBioProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const lines = Array.from(container.querySelectorAll<HTMLElement>('[data-bio-line]'));
    const triggers: ScrollTrigger[] = [];

    lines.forEach((line) => {
      gsap.set(line, { opacity: 0.15 });

      const st = ScrollTrigger.create({
        trigger: line,
        start: 'top 85%',
        end: 'top 45%',
        scrub: 0.6,
        onUpdate: (self) => {
          gsap.set(line, { opacity: 0.15 + self.progress * 0.85 });
        },
      });
      triggers.push(st);
    });

    return () => triggers.forEach((t) => t.kill());
  }, []);

  return (
    <section className={`${aboutBioStyles.section} ${className}`}>
      <div className={aboutBioStyles.container}>
        {/* Tag Badge */}
        <div className={aboutBioStyles.badge}>[ ABOUT OUTMAN ]</div>

        {/* Scroll-scrub Animated Bio Lines — Balanced length and rhythm */}
        <div ref={containerRef} className={aboutBioStyles.linesWrapper}>
          <h2 data-bio-line="1" className={aboutBioStyles.line} style={{ willChange: 'opacity' }}>
            BASED IN MOROCCO, I'M A FULL STACK DEVELOPER
          </h2>
          <h2 data-bio-line="2" className={aboutBioStyles.line} style={{ willChange: 'opacity' }}>
            BUILDING CLEAN, SCALABLE WEB & MOBILE APPS.
          </h2>
          <h2 data-bio-line="3" className={aboutBioStyles.line} style={{ willChange: 'opacity' }}>
            WORKING FROM UI DESIGN TO BACKEND ARCHITECTURE
          </h2>
          <h2 data-bio-line="4" className={aboutBioStyles.line} style={{ willChange: 'opacity' }}>
            WITH REACT, NEXT.JS, DJANGO, AND MODERN TOOLS.
          </h2>
        </div>

        {/* Secondary Paragraph */}
        <motion.p
          className={aboutBioStyles.paragraph}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          With a strong foundation from 1337 (42 Network), I approach development with a systems mindset: clean architecture, performance awareness, and maintainable code. Whether it's a web platform, a mobile app, or an automation workflow, I build solutions that are ready for production.
        </motion.p>
      </div>
    </section>
  );
}
