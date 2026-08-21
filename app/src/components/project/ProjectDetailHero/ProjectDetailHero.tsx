import { projectDetailHeroStyles } from './ProjectDetailHero.styles';
import type { ProjectDetailHeroProps } from './ProjectDetailHero.types';

export function ProjectDetailHero({ title, titleRef }: ProjectDetailHeroProps) {
  return (
    <section className={projectDetailHeroStyles.section}>
      <div className={projectDetailHeroStyles.container}>
        <p className={projectDetailHeroStyles.scrollText}>[ Scroll ]</p>
        <h1 ref={titleRef} className={projectDetailHeroStyles.title}>
          {title}
        </h1>
      </div>
    </section>
  );
}
