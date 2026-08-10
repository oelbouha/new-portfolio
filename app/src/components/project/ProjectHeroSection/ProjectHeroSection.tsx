import type { Project } from '@/data/projects/projects.types';
import styles from './ProjectHeroSection.module.css';

interface ProjectHeroSectionProps {
  project: Project;
}

export function ProjectHeroSection({ project }: ProjectHeroSectionProps) {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>{project.title}</h1>

      <div className={styles.metaRow}>
        <span>{project.category}</span>
        <span>YEAR — {project.year}</span>
      </div>

      {project.tags && (
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className={styles.heroImageWrapper}>
        <img src={project.heroImage} alt={project.title} className={styles.heroImage} />
      </div>
    </section>
  );
}
