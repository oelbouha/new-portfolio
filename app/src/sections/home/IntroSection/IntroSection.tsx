'use client';

import { ScrollHeadline } from '@/components/shared/ScrollHeadline';
import { home } from '@/data';
import { introSectionStyles } from './IntroSection.styles';

export function IntroSection() {
  return (
    <section className={introSectionStyles.section} id="intro">
      <div className={introSectionStyles.inner}>
        <ScrollHeadline
          heading={home.intro.heading || 'Web & Mobile App Development'}
          tag={home.intro.tag}
          statement={home.intro.statement}
          as="p"
        />
        <p className="max-w-3xl text-center font-['Space_Grotesk'] text-base sm:text-lg text-[var(--text)] opacity-80 font-normal leading-relaxed mt-2 sm:mt-4">
          Full stack developer building high-performance web and mobile apps with React, Next.js, and Flutter. I help startups and SaaS teams architect, build, launch, and scale their MVP fast.
        </p>
      </div>
    </section>
  );
}
