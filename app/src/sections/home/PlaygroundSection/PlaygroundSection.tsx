import { PlaygroundHeader } from '@/components/home/PlaygroundHeader/PlaygroundHeader';
import { ProjectCard } from '@/components/home/ProjectCard/ProjectCard';
import { projectsData } from '@/data/projects/projects.data';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './PlaygroundSection.module.css';

export function PlaygroundSection() {
  const headerRef = useScrollReveal<HTMLDivElement>({ y: 40, duration: 0.9, delay: 0 });
  const gridRef = useScrollReveal<HTMLDivElement>({ y: 60, duration: 1.1, delay: 0.1, stagger: 0.1 });

  return (
    <section className={styles.section} id="playground">
      <div ref={headerRef}>
        <PlaygroundHeader />
      </div>
      <div ref={gridRef} className={styles.grid}>
        {projectsData.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
