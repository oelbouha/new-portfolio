import { PlaygroundHeader } from '@/components/home/PlaygroundHeader/PlaygroundHeader';
import { ProjectCard } from '@/components/home/ProjectCard';
import { projectsData } from '@/data/projects/projects.data';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { playgroundSectionStyles } from './PlaygroundSection.styles';

interface PlaygroundSectionProps {
  onNavigate?: (href: string) => void;
}

export function PlaygroundSection({ onNavigate }: PlaygroundSectionProps) {
  const headerRef = useScrollReveal<HTMLDivElement>({ y: 40, duration: 0.9, delay: 0 });

  return (
    <section className={playgroundSectionStyles.section} id="playground">
      <div className={playgroundSectionStyles.inner}>
        <div ref={headerRef}>
          <PlaygroundHeader />
        </div>
        <div className={playgroundSectionStyles.grid}>
          {projectsData.slice(0, 4).map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
    </section>
  );
}
