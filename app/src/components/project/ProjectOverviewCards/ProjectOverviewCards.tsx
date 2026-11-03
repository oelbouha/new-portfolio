import type { Project } from '@/data/projects/projects.types';
import { ui } from '@/data';
import { projectOverviewCardsStyles } from './ProjectOverviewCards.styles';

interface ProjectOverviewCardsProps {
  project: Project;
}

export function ProjectOverviewCards({ project }: ProjectOverviewCardsProps) {
  const { labels } = ui;

  return (
    <section className={projectOverviewCardsStyles.section}>
      <div className={projectOverviewCardsStyles.card}>
        <span className={projectOverviewCardsStyles.label}>{labels.client}</span>
        <span className={projectOverviewCardsStyles.value}>{project.client || '—'}</span>
      </div>

      <div className={projectOverviewCardsStyles.card}>
        <span className={projectOverviewCardsStyles.label}>{labels.servicesScope}</span>
        <div className={projectOverviewCardsStyles.list}>
          {project.services.map((svc) => (
            <span key={svc}>{svc}</span>
          ))}
        </div>
      </div>

      <div className={projectOverviewCardsStyles.card}>
        <span className={projectOverviewCardsStyles.label}>{labels.year}</span>
        <span className={projectOverviewCardsStyles.value}>{project.year}</span>
      </div>

      <div className={projectOverviewCardsStyles.card}>
        <span className={projectOverviewCardsStyles.label}>{labels.projectInfo}</span>
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
          <span className={projectOverviewCardsStyles.value}>—</span>
        )}
      </div>
    </section>
  );
}
