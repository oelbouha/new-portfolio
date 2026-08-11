import type { Project } from '@/data/projects/projects.types';
import { projectOverviewCardsStyles } from './ProjectOverviewCards.styles';

interface ProjectOverviewCardsProps {
  project: Project;
}

export function ProjectOverviewCards({ project }: ProjectOverviewCardsProps) {
  return (
    <section className={projectOverviewCardsStyles.section}>
      <div className={projectOverviewCardsStyles.card}>
        <span className={projectOverviewCardsStyles.label}>CLIENT</span>
        <span className={projectOverviewCardsStyles.value}>{project.client || 'Internal / Confidential'}</span>
      </div>

      <div className={projectOverviewCardsStyles.card}>
        <span className={projectOverviewCardsStyles.label}>SERVICES</span>
        <div className={projectOverviewCardsStyles.list}>
          {project.services.map((svc) => (
            <span key={svc}>{svc}</span>
          ))}
        </div>
      </div>

      <div className={projectOverviewCardsStyles.card}>
        <span className={projectOverviewCardsStyles.label}>YEAR</span>
        <span className={projectOverviewCardsStyles.value}>{project.year}</span>
      </div>

      <div className={projectOverviewCardsStyles.card}>
        <span className={projectOverviewCardsStyles.label}>WEBSITE / CODE</span>
        {project.website ? (
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className={projectOverviewCardsStyles.link}
          >
            {project.website.replace('https://', '')}
          </a>
        ) : (
          <span className={projectOverviewCardsStyles.value}>N/A</span>
        )}
      </div>
    </section>
  );
}
