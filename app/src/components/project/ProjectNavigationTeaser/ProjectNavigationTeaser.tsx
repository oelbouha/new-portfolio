import { Link } from 'react-router-dom';
import { projectsData } from '@/data/projects/projects.data';
import { projectNavigationTeaserStyles } from './ProjectNavigationTeaser.styles';

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
    <section className={projectNavigationTeaserStyles.section}>
      <Link to={`/work/${prevProject.slug}`} className={projectNavigationTeaserStyles.teaserCard}>
        <span className={projectNavigationTeaserStyles.direction}>← PREVIOUS PROJECT</span>
        <h3 className={projectNavigationTeaserStyles.title}>{prevProject.title}</h3>
      </Link>

      <Link to={`/work/${nextProject.slug}`} className={projectNavigationTeaserStyles.teaserCard} style={{ textAlign: 'right' }}>
        <span className={projectNavigationTeaserStyles.direction}>NEXT PROJECT →</span>
        <h3 className={projectNavigationTeaserStyles.title}>{nextProject.title}</h3>
      </Link>
    </section>
  );
}
