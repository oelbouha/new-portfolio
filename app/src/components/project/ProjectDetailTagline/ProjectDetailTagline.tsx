import { projectDetailTaglineStyles } from './ProjectDetailTagline.styles';
import type { ProjectDetailTaglineProps } from './ProjectDetailTagline.types';

export function ProjectDetailTagline({ tagline, year, taglineRef }: ProjectDetailTaglineProps) {
  return (
    <section className={projectDetailTaglineStyles.section}>
      <div ref={taglineRef} className={projectDetailTaglineStyles.container}>
        <p className={projectDetailTaglineStyles.tagline}>{tagline}</p>
        <span className={projectDetailTaglineStyles.year}>{year}</span>
      </div>
    </section>
  );
}
