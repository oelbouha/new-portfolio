import { motion } from 'framer-motion';
import { ScrollHeadline } from '@/components/shared/ScrollHeadline';
import { aboutData } from '@/data/about.data';
import { aboutBioStyles } from './AboutBio.styles';
import type { AboutBioProps } from './AboutBio.types';

export function AboutBio({ className = '' }: AboutBioProps) {
  return (
    <section className={`${aboutBioStyles.section} ${className}`}>
      <div className={aboutBioStyles.container}>
        <ScrollHeadline
          tag={aboutData.bio.tag}
          lines={aboutData.bio.lines}
        />

        <motion.p
          className={aboutBioStyles.paragraph}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {aboutData.bio.paragraph}
        </motion.p>
      </div>
    </section>
  );
}
