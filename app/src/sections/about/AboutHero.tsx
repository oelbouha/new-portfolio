import { SectionLabel } from '@/components/shared/SectionLabel';

export function AboutHero() {
  return (
    <section className="pt-[120px] pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <SectionLabel className="mb-6">ABOUT</SectionLabel>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight">
              <span className="text-foreground">We are </span>
              <span className="text-[#4ade80]">Disco Frog</span>
              <span className="text-foreground">, an independent </span>
              <span className="text-foreground">design studio</span>
              <span className="text-foreground"> that leverages </span>
              <span className="text-[#4ade80]">fresh ideas</span>
              <span className="text-foreground"> and </span>
              <span className="text-[#4ade80]">innovation</span>
              <span className="text-foreground"> to build </span>
              <span className="text-[#4ade80]">standout brands</span>
              <span className="text-foreground"> for our clients.</span>
            </h1>
          </div>
          
          {/* 3D Card Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <img
                src="/images/studio-card.jpg"
                alt="Disco Frog Studio"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-[#4ade80]/20 blur-3xl rounded-full -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
