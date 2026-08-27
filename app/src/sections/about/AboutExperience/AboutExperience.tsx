import { motion } from 'framer-motion';
import { aboutExperienceStyles } from './AboutExperience.styles';
import type { AboutExperienceProps } from './AboutExperience.types';

const experience = [
  {
    company: 'FREELANCE',
    location: 'REMOTE',
    role: 'FULL STACK DEVELOPER',
    period: '2026',
    description:
      'Skatys — a freelance full-stack web app built with Next.js and Django, backed by PostgreSQL and deployed on a VPS with Docker and NGINX.',
  },
  {
    company: 'REVO ADVERTISING AGENCY',
    location: 'MOROCCO',
    role: 'WEB DEVELOPER INTERN',
    period: '2025',
    description:
      'Assisted in building and maintaining client websites. Worked on frontend implementation and UI improvements. Collaborated with design and marketing teams to deliver real-world agency projects.',
  },
  {
    company: '1337 (42 NETWORK)',
    location: 'MOROCCO',
    role: 'SOFTWARE ENGINEERING STUDENT',
    period: '2022 — PRESENT',
    description:
      'Intensive peer-to-peer learning program covering systems programming, algorithms, networking, and full-stack development in C, C++, and modern web technologies. Built projects like Webserv (HTTP server), Inception (Docker), and multiplayer Pong.',
  },
];

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
            <span className={aboutExperienceStyles.tag}>[ CAREER ]</span>
            <h2 className={aboutExperienceStyles.title}>
              EXPERIENCE &<br />EDUCATION
            </h2>
          </motion.div>

          {/* Experience Items — NO full-width divider lines */}
          <div className={aboutExperienceStyles.listWrapper}>
            {experience.map((exp, index) => (
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
