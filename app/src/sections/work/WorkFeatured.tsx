import { ProjectCard } from '@/components/home/ProjectCard';
import { projectsData } from '@/data/projects/projects.data';

interface WorkFeaturedProps {
  onNavigate?: (href: string) => void;
}

export function WorkFeatured({ onNavigate }: WorkFeaturedProps) {
  return (
    <section className="w-full px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1980px]">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-6">
          {projectsData.slice(0, 4).map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
