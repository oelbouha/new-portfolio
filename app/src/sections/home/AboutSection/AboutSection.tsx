import { homeData } from '@/data/home.data';
import { aboutSectionStyles } from './AboutSection.styles';
import type { AboutSectionProps } from './AboutSection.types';

export function AboutSection({}: AboutSectionProps = {}) {
  return (
    <section id="about" className={aboutSectionStyles.section}>
      <div className={aboutSectionStyles.container}>
        <div className={aboutSectionStyles.headerWrapper}>
          <div className={aboutSectionStyles.labelRow}>
            <span className={aboutSectionStyles.label}>{homeData.about.label}</span>
            <div className={aboutSectionStyles.line}></div>
          </div>
          <h2 className={aboutSectionStyles.title}>
            {homeData.about.title}
          </h2>
        </div>

        <div className={aboutSectionStyles.contentWrapper}>
          <p className={aboutSectionStyles.paragraph}>
            {homeData.about.paragraph1}
          </p>
          <p className={aboutSectionStyles.paragraph}>
            {homeData.about.paragraph2}
          </p>
          <p className={aboutSectionStyles.paragraphLast}>
            Trained in computer science and software architecture within the 42 Network (1337 School), I bring a disciplined, systems-first engineering approach to every product. Whether architecting a custom web platform or crafting a reactive Flutter mobile app, my goal is to deliver clean code, dependable performance, and maintainable software that scales with your business.
          </p>
        </div>
      </div>
    </section>
  );
}
