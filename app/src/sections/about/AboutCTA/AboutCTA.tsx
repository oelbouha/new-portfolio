import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutCTAStyles } from './AboutCTA.styles';
import type { AboutCTAProps } from './AboutCTA.types';

gsap.registerPlugin(ScrollTrigger);

export function AboutCTA({ onContactOpen, className = '' }: AboutCTAProps) {
  const statementRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const stmt = statementRef.current;
    if (!stmt) return;

    gsap.set(stmt, { opacity: 0.18 });

    const st = ScrollTrigger.create({
      trigger: stmt,
      start: 'top 88%',
      end: 'top 45%',
      scrub: 0.6,
      onUpdate: (self) => {
        gsap.set(stmt, { opacity: 0.18 + self.progress * 0.82 });
      },
    });

    return () => st.kill();
  }, []);

  return (
    <section className={`${aboutCTAStyles.section} ${className}`}>
      <div className={aboutCTAStyles.container}>
        {/* Scroll Scrub Animated Bold Statement */}
        <p ref={statementRef} className={aboutCTAStyles.statement} style={{ willChange: 'opacity' }}>
          BEYOND WRITING CODE, I FOCUS ON BUILDING PRODUCTS THAT ARE STRUCTURED, RELIABLE, AND READY FOR REAL USERS.
        </p>

        <motion.p
          className={aboutCTAStyles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Ready to bring your ideas to life?
        </motion.p>

        {/* Let's Talk CTA Button — Matching Home Page CTA Button Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            type="button"
            onClick={onContactOpen}
            className={aboutCTAStyles.button}
            data-cursor-hover="Let's talk"
            aria-label="Open contact form"
          >
            <div className={aboutCTAStyles.monoWrapper}>
              <span className={aboutCTAStyles.monoText}>let's talk</span>
            </div>
            <svg
              className={aboutCTAStyles.svgArrow}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.66663 11.3333L11.3333 4.66663M11.3333 4.66663H5.33329M11.3333 4.66663V10.6666"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
