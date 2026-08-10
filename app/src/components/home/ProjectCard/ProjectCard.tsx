import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';

interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  thumbnail: string;
  tags?: string[];
}

interface ProjectCardProps {
  project: Project;
  index?: number;
  className?: string;
}

export function ProjectCard({ project, className = '' }: ProjectCardProps) {
  return (
    <Link to={`/work/${project.slug}`} className={`${styles.card} ${className}`}>
      <div className={styles.imageWrapper}>
        <img
          src={project.thumbnail}
          alt={project.title}
          className={styles.image}
          loading="lazy"
        />
        <div className={styles.hoverOverlay}>
          <span className={styles.hoverTitle}>{project.title}</span>
        </div>
      </div>
    </Link>
  );
}
