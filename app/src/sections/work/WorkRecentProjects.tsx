import { useState } from 'react';
import { projectsData } from '@/data/projects/projects.data';

interface WorkRecentProjectsProps {
  onNavigate?: (href: string) => void;
}

export function WorkRecentProjects({ onNavigate }: WorkRecentProjectsProps) {
  const [activeProject, setActiveProject] = useState(projectsData[0]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  return (
    <section className="w-full px-4 py-20 sm:px-6 lg:px-8 border-t border-black/10 dark:border-white/10">
      <div className="mx-auto w-full max-w-7xl">
        {/* Section Header with Header Font */}
        <div className="mb-12">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-5xl font-bold uppercase tracking-wider text-[var(--text)]">
            RECENT PROJECTS
          </h2>
        </div>

        {/* Desktop Split View: Title list on left + Image preview on right */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-start">
          {/* List of Titles ONLY */}
          <div className="col-span-7 flex flex-col divide-y divide-black/10 dark:divide-white/10">
            {projectsData.map((project) => (
              <a
                key={project.slug}
                href={`/work/${project.slug}`}
                onClick={(e) => handleClick(e, `/work/${project.slug}`)}
                onMouseEnter={() => setActiveProject(project)}
                data-cursor-hover={project.title}
                className="group py-6 block text-decoration-none transition-all duration-300"
              >
                <h3 className="font-[family-name:var(--font-display)] text-5xl xl:text-7xl font-bold uppercase tracking-[0.01em] text-[var(--text)] group-hover:text-blue-600 transition-colors duration-300 leading-none">
                  {project.title}
                </h3>
              </a>
            ))}
          </div>

          {/* Right Image Preview (Displayed on Hover) */}
          <div className="col-span-5 sticky top-32">
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
              {activeProject && (
                <img
                  key={activeProject.slug}
                  src={activeProject.thumbnail || activeProject.coverImage}
                  alt={activeProject.title}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
              )}
            </div>
          </div>
        </div>

        {/* Mobile View: Vertical Title List + Displayed Preview on active/touch */}
        <div className="lg:hidden flex flex-col gap-6">
          {projectsData.map((project) => (
            <a
              key={project.slug}
              href={`/work/${project.slug}`}
              onClick={(e) => handleClick(e, `/work/${project.slug}`)}
              className="group block p-4 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-decoration-none"
            >
              <div className="aspect-[16/10] w-full rounded-lg overflow-hidden mb-4">
                <img
                  src={project.thumbnail || project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-4xl font-bold uppercase text-[var(--text)]">
                {project.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
