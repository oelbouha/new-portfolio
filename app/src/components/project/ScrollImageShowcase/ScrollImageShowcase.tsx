import type { Project } from '@/data/projects/projects.types';
import styles from './ScrollImageShowcase.module.css';

interface ScrollImageShowcaseProps {
  project: Project;
}

export function ScrollImageShowcase({ project }: ScrollImageShowcaseProps) {
  return (
    <section className={styles.section}>
      {project.images.map((imgSrc, idx) => (
        <div key={idx} className={styles.imageWrapper}>
          <img
            src={imgSrc}
            alt={`${project.title} screenshot ${idx + 1}`}
            className={styles.image}
            loading="lazy"
          />
        </div>
      ))}
    </section>
  );
}
