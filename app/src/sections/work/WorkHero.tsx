import { SectionLabel } from '@/components/shared/SectionLabel';
import { CTAButton } from '@/components/shared/CTAButton';

export function WorkHero() {
  return (
    <section className="pt-[120px] pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionLabel className="mb-6">WORK</SectionLabel>
        
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-foreground mb-4">
              The <span className="text-[#4ade80]">Magic</span> We've Made
            </h1>
            <p className="text-xl sm:text-2xl text-foreground-secondary mb-6">
              Let our portfolio inspire you
            </p>
          </div>
          
          <div className="lg:pt-4">
            <p className="text-foreground-secondary mb-8 max-w-md">
              A look at the captivating designs, seamless functionality, and brand stories brought to life through our digital magic.
            </p>
            <CTAButton variant="primary" size="md" showArrow>
              Let's Collaborate
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
