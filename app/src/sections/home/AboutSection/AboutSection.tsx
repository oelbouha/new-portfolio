import { motion } from 'framer-motion';
import { aboutSectionStyles } from './AboutSection.styles';
import type { AboutSectionProps } from './AboutSection.types';

export function AboutSection({}: AboutSectionProps = {}) {
  return (
    <section id="about" className={aboutSectionStyles.section}>
      <div className={aboutSectionStyles.container}>
        {/* Label with line */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className={aboutSectionStyles.headerWrapper}
        >
          <div className={aboutSectionStyles.labelRow}>
            <span className={aboutSectionStyles.label}>About</span>
            <div className={aboutSectionStyles.line}></div>
          </div>
          <h2 className={aboutSectionStyles.title}>
            Building Digital Products That Matter
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={aboutSectionStyles.contentWrapper}
        >
          <p className={aboutSectionStyles.paragraph}>
            I'm Outman Elbouhali, a developer specializing in Full Stack Web and Mobile App Development.
            With experience spanning React, Next.js, Django, Flutter, WordPress, and backend infrastructure, I help startups
            and businesses transform ideas into polished, production-ready products.
          </p>
          <p className={aboutSectionStyles.paragraphLast}>
            Whether it's a responsive web application, a cross-platform mobile app, or a complex automation
            workflow — I focus on clean architecture, performance, and user experience. Every project is built
            with scalability and maintainability at its core.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
