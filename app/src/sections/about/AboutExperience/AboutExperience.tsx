import { motion } from 'framer-motion';
import { aboutData } from '@/data/about.data';
import { aboutExperienceStyles } from './AboutExperience.styles';
import type { AboutExperienceProps } from './AboutExperience.types';

export function AboutExperience({ className = '' }: AboutExperienceProps) {
  return (
    <section className={`${aboutExperienceStyles.section} ${className}`}>
      <div className={aboutExperienceStyles.container}>
        <div className={aboutExperienceStyles.layoutRow}>
          {/* Sticky Left Label */}
          <motion.div
            className={aboutExperienceStyles.stickyCol}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={aboutExperienceStyles.tag}>{aboutData.experience.tag}</span>
            <h2 className={aboutExperienceStyles.title}>
              EXPERIENCE &<br />EDUCATION
            </h2>
          </motion.div>

          {/* Experience Items */}
          <div className={aboutExperienceStyles.listWrapper}>
            {aboutData.experience.items.map((exp, index) => (
              <motion.div
                key={exp.company}
                className={aboutExperienceStyles.itemCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={aboutExperienceStyles.itemHeader}>
                  <h3 className={aboutExperienceStyles.itemCompany}>{exp.company}</h3>
                  <span className={aboutExperienceStyles.itemRole}>// {exp.role}</span>
                </div>
                <p className={aboutExperienceStyles.itemPeriod}>
                  {exp.period} • {exp.location}
                </p>
                <p className={aboutExperienceStyles.itemDesc}>{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
