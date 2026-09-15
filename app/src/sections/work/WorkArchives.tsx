import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { workPageData } from '@/data/work.data';

gsap.registerPlugin(ScrollTrigger);

export function WorkArchives() {
  useEffect(() => {
    const archiveRows = document.querySelectorAll<HTMLElement>('.work-archives__row');

    archiveRows.forEach((row) => {
      const images = row.querySelectorAll('.work-archives__img-wrap');

      gsap.fromTo(
        images,
        { scale: 0.9, opacity: 0, y: 30 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
            once: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="w-full px-4 py-20 sm:px-6 lg:px-8 border-t border-black/10 dark:border-white/10">
      <div className="mx-auto w-full max-w-7xl">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-5xl font-bold uppercase tracking-wider text-[var(--text)]">
            ARCHIVES ({workPageData.archives.length})
          </h2>
        </div>

        {/* Archives List */}
        <div className="flex flex-col gap-16 sm:gap-24">
          {workPageData.archives.map((archive, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={archive.id}
                className={`work-archives__row grid grid-cols-1 ${
                  isReversed ? 'lg:grid-cols-[1fr_2fr]' : 'lg:grid-cols-[2fr_1fr]'
                } gap-8 items-center`}
              >
                {/* Visual Stack (3 Images) */}
                <div className="grid grid-cols-3 gap-3">
                  {archive.images.map((imgSrc, imgIdx) => (
                    <div
                      key={imgIdx}
                      className="work-archives__img-wrap relative aspect-[4/3] rounded-lg overflow-hidden bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10"
                      data-cursor-hover={archive.title}
                    >
                      <img
                        src={imgSrc}
                        alt={`${archive.title} preview ${imgIdx + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  ))}
                </div>

                {/* Details Meta */}
                <div className="flex flex-col gap-2">
                  <div className="text-mono text-xs text-[var(--text)] opacity-60">
                    {archive.category} &bull; {archive.year}
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold uppercase text-[var(--text)]">
                    {archive.title}
                  </h3>
                  <p className="text-base text-[var(--text)] opacity-75">
                    {archive.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
