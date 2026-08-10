import type { Project } from '@/data/projects/projects.types';
import styles from './ProjectOverviewCards.module.css';

interface ProjectOverviewCardsProps {
  project: Project;
}

export function ProjectOverviewCards({ project }: ProjectOverviewCardsProps) {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <span className={styles.label}>CLIENT</span>
        <span className={styles.value}>{project.client || 'Internal / Confidential'}</span>
      </div>

      <div className={styles.card}>
        <span className={styles.label}>SERVICES</span>
        <div className={styles.list}>
          {project.services.map((svc) => (
            <span key={svc}>{svc}</span>
          ))}
        </div>
      </div>

      <div className={styles.card}>
        <span className={styles.label}>YEAR</span>
        <span className={styles.value}>{project.year}</span>
      </div>

      <div className={styles.card}>
        <span className={styles.label}>WEBSITE / CODE</span>
        {project.website ? (
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {project.website.replace('https://', '')}
          </a>
        ) : (
          <span className={styles.value}>N/A</span>
        )}
      </div>
    </section>
  );
}
