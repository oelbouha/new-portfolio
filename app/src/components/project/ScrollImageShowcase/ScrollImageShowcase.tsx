import type { Project } from '@/data/projects/projects.types';
import { scrollImageShowcaseStyles } from './ScrollImageShowcase.styles';

interface ScrollImageShowcaseProps {
  project: Project;
}

export function ScrollImageShowcase({ project }: ScrollImageShowcaseProps) {
  return (
    <section className={scrollImageShowcaseStyles.section}>
      {project.images.map((imgSrc, idx) => (
        <div key={idx} className={scrollImageShowcaseStyles.imageWrapper}>
          <img
            src={imgSrc}
            alt={`${project.title} screenshot ${idx + 1}`}
            className={scrollImageShowcaseStyles.image}
            loading="lazy"
          />
        </div>
      ))}
    </section>
  );
}
