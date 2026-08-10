import { Link } from 'react-router-dom';
import { projectsData } from '@/data/projects/projects.data';
import styles from './ProjectNavigationTeaser.module.css';

interface ProjectNavigationTeaserProps {
  currentSlug: string;
}

export function ProjectNavigationTeaser({ currentSlug }: ProjectNavigationTeaserProps) {
  const currentIndex = projectsData.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1) return null;

  const prevIndex = (currentIndex - 1 + projectsData.length) % projectsData.length;
  const nextIndex = (currentIndex + 1) % projectsData.length;

  const prevProject = projectsData[prevIndex];
  const nextProject = projectsData[nextIndex];

  return (
    <section className={styles.section}>
      <Link to={`/work/${prevProject.slug}`} className={styles.teaserCard}>
        <span className={styles.direction}>← PREVIOUS PROJECT</span>
        <h3 className={styles.title}>{prevProject.title}</h3>
      </Link>

      <Link to={`/work/${nextProject.slug}`} className={styles.teaserCard} style={{ textAlign: 'right' }}>
        <span className={styles.direction}>NEXT PROJECT →</span>
        <h3 className={styles.title}>{nextProject.title}</h3>
      </Link>
    </section>
  );
}
