import { ScrollHeadline } from '@/components/shared/ScrollHeadline';
import { home } from '@/data';
import { introSectionStyles } from './IntroSection.styles';

export function IntroSection() {
  return (
    <section className={introSectionStyles.section} id="intro">
      <div className={introSectionStyles.inner}>
        <ScrollHeadline
          tag={home.intro.tag}
          statement={home.intro.statement}
        />
      </div>
    </section>
  );
}

