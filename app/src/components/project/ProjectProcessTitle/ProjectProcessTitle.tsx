import type { Project } from '@/data/projects/projects.types';
import styles from './ProjectProcessTitle.module.css';

interface ProjectProcessTitleProps {
  project: Project;
}

export function ProjectProcessTitle({ project }: ProjectProcessTitleProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>PROJECT OVERVIEW & PROCESS</h2>
      <p className={styles.body}>
        {project.overview || project.description}
      </p>
      {project.conclusion && (
        <p className={styles.body} style={{ marginTop: '1rem' }}>
          {project.conclusion}
        </p>
      )}
    </section>
  );
}
