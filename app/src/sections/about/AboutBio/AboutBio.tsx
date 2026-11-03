import { motion } from 'framer-motion';
import { ScrollHeadline } from '@/components/shared/ScrollHeadline';
import { about } from '@/data';
import { aboutBioStyles } from './AboutBio.styles';
import type { AboutBioProps } from './AboutBio.types';

export function AboutBio({ className = '' }: AboutBioProps) {
  const { bio } = about;

  return (
    <section className={`${aboutBioStyles.section} ${className}`}>
      <div className={aboutBioStyles.container}>
        <ScrollHeadline tag={bio.tag} statement={bio.statement} />

        <motion.p
          className={aboutBioStyles.paragraph}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {bio.paragraph}
        </motion.p>
      </div>
    </section>
  );
}
