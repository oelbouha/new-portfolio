import { ScrollHeadline } from '@/components/shared/ScrollHeadline';
import { homeData } from '@/data/home.data';
import { introSectionStyles } from './IntroSection.styles';

export function IntroSection() {
  return (
    <section className={introSectionStyles.section} id="intro">
      <div className={introSectionStyles.inner}>
        <ScrollHeadline
          tag={homeData.intro.tag}
          lines={homeData.intro.lines}
        />
      </div>
    </section>
  );
}

