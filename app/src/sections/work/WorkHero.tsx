import { SectionLabel } from '@/components/shared/SectionLabel';
import { CTAButton } from '@/components/shared/CTAButton';
import { workData } from '@/data/work.data';

export function WorkHero() {
  return (
    <section className="pt-[120px] pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionLabel className="mb-6">{workData.hero.tag}</SectionLabel>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-foreground mb-4">
              {workData.hero.titleMain}
              <span className="text-[#4ade80]">{workData.hero.titleHighlight}</span>
              {workData.hero.titleEnd}
            </h1>
            <p className="text-xl sm:text-2xl text-foreground-secondary mb-6">
              {workData.hero.subtitle}
            </p>
          </div>

          <div className="lg:pt-4">
            <p className="text-foreground-secondary mb-8 max-w-md">
              {workData.hero.description}
            </p>
            <CTAButton variant="primary" size="md" showArrow>
              {workData.hero.buttonText}
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
