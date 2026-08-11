import type { Project } from '@/data/projects/projects.types';
import { projectHeroSectionStyles } from './ProjectHeroSection.styles';

interface ProjectHeroSectionProps {
  project: Project;
}

export function ProjectHeroSection({ project }: ProjectHeroSectionProps) {
  return (
    <section className={projectHeroSectionStyles.hero}>
      <h1 className={projectHeroSectionStyles.title}>{project.title}</h1>

      <div className={projectHeroSectionStyles.metaRow}>
        <span>{project.category}</span>
        <span>YEAR — {project.year}</span>
      </div>

      {project.tags && (
        <div className={projectHeroSectionStyles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={projectHeroSectionStyles.tag}>
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className={projectHeroSectionStyles.heroImageWrapper}>
        <img src={project.heroImage} alt={project.title} className={projectHeroSectionStyles.heroImage} />
      </div>
    </section>
  );
}
