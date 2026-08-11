import type { Project } from '@/data/projects/projects.types';
import { projectProcessTitleStyles } from './ProjectProcessTitle.styles';

interface ProjectProcessTitleProps {
  project: Project;
}

export function ProjectProcessTitle({ project }: ProjectProcessTitleProps) {
  return (
    <section className={projectProcessTitleStyles.section}>
      <h2 className={projectProcessTitleStyles.heading}>PROJECT OVERVIEW & PROCESS</h2>
      <p className={projectProcessTitleStyles.body}>
        {project.overview || project.description}
      </p>
      {project.conclusion && (
        <p className={projectProcessTitleStyles.body} style={{ marginTop: '1rem' }}>
          {project.conclusion}
        </p>
      )}
    </section>
  );
}
