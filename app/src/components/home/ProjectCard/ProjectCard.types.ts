import type { Project } from '@/data/projects/projects.types';

export interface ProjectCardProps {
  project: Project;
  index?: number;
  className?: string;
}
