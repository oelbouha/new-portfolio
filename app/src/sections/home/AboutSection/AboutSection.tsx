import { motion } from 'framer-motion';
import { homeData } from '@/data/home.data';
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
            <span className={aboutSectionStyles.label}>{homeData.about.label}</span>
            <div className={aboutSectionStyles.line}></div>
          </div>
          <h2 className={aboutSectionStyles.title}>
            {homeData.about.title}
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
            {homeData.about.paragraph1}
          </p>
          <p className={aboutSectionStyles.paragraphLast}>
            {homeData.about.paragraph2}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
