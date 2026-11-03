import type { ProjectItem } from '@/data/types';
import type { Project } from '@/data/projects/projects.types';

export interface ProjectDetailNextProps {
  nextProject: ProjectItem | Project;
  onNavigate?: (href: string) => void;
}
