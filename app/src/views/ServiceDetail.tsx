import { useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getServiceBySlug, allProjects } from '@/data';
import { SeoHead } from '@/components/shared/SeoHead';
import {
  generateServiceSchema,
  generateProfessionalServiceSchema,
  generateBreadcrumbSchema,
  generateFaqSchema,
} from '@/lib/jsonLd';
import { Footer } from '@/components/layout/Footer';

interface ServiceDetailProps {
  onNavigate?: (href: string) => void;
  onContactOpen?: () => void;
}

export default function ServiceDetail({ onNavigate, onContactOpen }: ServiceDetailProps) {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [slug]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Filter relevant projects by service slug or tag
  const relevantProjects = allProjects.filter(
    (p) =>
      p.serviceSlugs?.includes(service.slug) ||
      service.relevantProjectTags.some((tag) => p.serviceSlugs?.includes(tag))
  );

  // Related services
  const relatedServices = service.relatedServiceSlugs
    .map((sSlug) => getServiceBySlug(sSlug))
    .filter(Boolean);

  const jsonLd = [
    generateServiceSchema(service),
    generateProfessionalServiceSchema(),
    generateBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: service.title, path: `/services/${service.slug}` },
    ]),
    generateFaqSchema(service.faq.items),
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  return (
    <>
      <SeoHead seo={service.seo} jsonLd={jsonLd} />

      <div className="min-h-screen bg-[var(--background)] text-[var(--text)] w-full">
        <main className="w-full">
          {/* 1. Hero Section */}
          <section className="relative w-full pt-28 sm:pt-36 lg:pt-44 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-10 border-b border-black/10 dark:border-white/10">
            <div className="mx-auto w-full max-w-7xl">
              <div className="flex flex-col items-start gap-4 sm:gap-6 max-w-5xl">
                <span className="px-2.5 py-1 rounded-[4px] bg-black/10 dark:bg-white/15 text-[11px] font-mono uppercase tracking-wider font-semibold">
                  {service.hero.badge}
                </span>

                <h1 className="font-['PP_Neue_Corp_Tight_Ultrabold'] text-[clamp(2.75rem,7.5vw,7.5rem)] uppercase leading-[0.95] tracking-[0.04em]">
                  {service.hero.headline}
                </h1>

                <p className="font-['Space_Grotesk'] text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl">
                  {service.hero.subheadline}
                </p>

                <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={onContactOpen}
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-[4px] bg-[var(--text)] text-[var(--background)] font-['PP_Neue_Montreal_Medium',sans-serif] text-sm uppercase tracking-wider font-semibold transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    <span>{service.hero.ctaButton}</span>
                    <span className="text-base">↗</span>
                  </button>

                  <a
                    href="#process"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-[4px] border border-black/15 dark:border-white/20 font-['PP_Neue_Montreal_Medium',sans-serif] text-sm uppercase tracking-wider opacity-80 hover:opacity-100 transition-opacity"
                  >
                    View process & timelines
                  </a>
                </div>
              </div>

              {/* Hero Image Showcase */}
              {service.hero.image?.src && (
                <div className="mt-12 sm:mt-16 w-full rounded-[4px] overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl aspect-[16/9] max-h-[560px] bg-neutral-900">
                  <img
                    src={service.hero.image.src}
                    alt={service.hero.image.alt}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              )}
            </div>
          </section>

          {/* 2. Deliverables / What I Build */}
          <section className="relative w-full py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-10 border-b border-black/10 dark:border-white/10">
            <div className="mx-auto w-full max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-4 lg:sticky lg:top-28">
                  <span className="font-mono text-xs uppercase tracking-widest opacity-60 block mb-2">
                    {service.deliverables.tag}
                  </span>
                  <h2 className="font-['PP_Neue_Corp_Tight_Ultrabold'] text-3xl sm:text-4xl lg:text-5xl uppercase leading-[1.08] tracking-[0.05em]">
                    {service.deliverables.title}
                  </h2>
                </div>

                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {service.deliverables.items.map((item) => (
                    <div
                      key={item.title}
                      className="p-6 sm:p-8 rounded-[4px] border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] flex flex-col justify-between"
                    >
                      <div>
                        <h3 className="font-['PP_Neue_Corp_Tight_Ultrabold'] text-xl sm:text-2xl uppercase tracking-[0.06em] leading-snug mb-3">
                          {item.title}
                        </h3>
                        <p className="font-['Space_Grotesk'] text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 3. Tech Stack */}
          <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-10 border-b border-black/10 dark:border-white/10">
            <div className="mx-auto w-full max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-4 lg:sticky lg:top-28">
                  <span className="font-mono text-xs uppercase tracking-widest opacity-60 block mb-2">
                    {service.techStack.tag}
                  </span>
                  <h2 className="font-['PP_Neue_Corp_Tight_Ultrabold'] text-3xl sm:text-4xl lg:text-5xl uppercase leading-[1.08] tracking-[0.05em]">
                    {service.techStack.title}
                  </h2>
                </div>

                <div className="lg:col-span-8 space-y-6">
                  {service.techStack.items.map((cat) => (
                    <div
                      key={cat.category}
                      className="p-6 sm:p-8 rounded-[4px] border border-black/10 dark:border-white/10"
                    >
                      <h3 className="font-mono text-xs uppercase tracking-widest opacity-60 mb-4">
                        // {cat.category}
                      </h3>
                      <div className="flex flex-wrap gap-2.5">
                        {cat.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-[4px] bg-black/5 dark:bg-white/10 font-mono text-xs sm:text-sm uppercase tracking-wider font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 4. Process & Realistic Timelines */}
          <section
            id="process"
            className="relative w-full py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-10 border-b border-black/10 dark:border-white/10"
          >
            <div className="mx-auto w-full max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-4 lg:sticky lg:top-28">
                  <span className="font-mono text-xs uppercase tracking-widest opacity-60 block mb-2">
                    {service.process.tag}
                  </span>
                  <h2 className="font-['PP_Neue_Corp_Tight_Ultrabold'] text-3xl sm:text-4xl lg:text-5xl uppercase leading-[1.08] tracking-[0.05em]">
                    {service.process.title}
                  </h2>
                </div>

                <div className="lg:col-span-8 divide-y divide-black/10 dark:divide-white/10">
                  {service.process.steps.map((step) => (
                    <div key={step.step} className="py-6 sm:py-8 first:pt-0 last:pb-0">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-xs uppercase tracking-widest opacity-50">
                          STAGE {step.step}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-[3px] bg-black/5 dark:bg-white/10 font-mono text-xs uppercase tracking-wider">
                          {step.duration}
                        </span>
                      </div>
                      <h3 className="font-['PP_Neue_Corp_Tight_Ultrabold'] text-2xl sm:text-3xl uppercase tracking-[0.06em] leading-snug mb-2">
                        {step.title}
                      </h3>
                      <p className="font-['Space_Grotesk'] text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 5. Relevant Projects */}
          {relevantProjects.length > 0 && (
            <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-10 border-b border-black/10 dark:border-white/10">
              <div className="mx-auto w-full max-w-7xl">
                <div className="flex items-center justify-between mb-8 sm:mb-12">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest opacity-60 block mb-2">
                      [ CASE STUDIES ]
                    </span>
                    <h2 className="font-['PP_Neue_Corp_Tight_Ultrabold'] text-3xl sm:text-4xl lg:text-5xl uppercase leading-[1.08] tracking-[0.05em]">
                      Relevant Work & Results
                    </h2>
                  </div>
                  <a
                    href="/work"
                    onClick={(e) => handleLinkClick(e, '/work')}
                    className="font-mono text-xs uppercase tracking-wider opacity-80 hover:opacity-100"
                  >
                    All projects →
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {relevantProjects.slice(0, 4).map((project) => (
                    <a
                      key={project.slug}
                      href={`/work/${project.slug}`}
                      onClick={(e) => handleLinkClick(e, `/work/${project.slug}`)}
                      className="group block rounded-[4px] border border-black/10 dark:border-white/10 overflow-hidden bg-black/[0.02] dark:bg-white/[0.02]"
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="aspect-[16/10] overflow-hidden bg-neutral-900">
                        <img
                          src={project.coverImage.src || project.thumbnail.src}
                          alt={project.coverImage.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-xs uppercase tracking-wider opacity-60">
                            {project.category} · {project.year}
                          </span>
                          <span className="text-sm transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                            ↗
                          </span>
                        </div>
                        <h3 className="font-['PP_Neue_Corp_Tight_Ultrabold'] text-2xl uppercase tracking-[0.06em] leading-snug mb-2 text-[var(--text)]">
                          {project.title}
                        </h3>
                        <p className="font-['Space_Grotesk'] text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                          {project.tagline || project.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* 6. Target Audience / Who It's For */}
          <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-10 border-b border-black/10 dark:border-white/10">
            <div className="mx-auto w-full max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-4 lg:sticky lg:top-28">
                  <span className="font-mono text-xs uppercase tracking-widest opacity-60 block mb-2">
                    {service.audience.tag}
                  </span>
                  <h2 className="font-['PP_Neue_Corp_Tight_Ultrabold'] text-3xl sm:text-4xl lg:text-5xl uppercase leading-[1.08] tracking-[0.05em]">
                    {service.audience.title}
                  </h2>
                </div>

                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.audience.items.map((aud) => (
                    <div
                      key={aud.title}
                      className="p-6 sm:p-8 rounded-[4px] border border-black/10 dark:border-white/10"
                    >
                      <h3 className="font-['PP_Neue_Corp_Tight_Ultrabold'] text-xl sm:text-2xl uppercase tracking-[0.06em] leading-snug mb-3">
                        {aud.title}
                      </h3>
                      <p className="font-['Space_Grotesk'] text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {aud.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 7. FAQ Section */}
          <section className="relative w-full py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-10 border-b border-black/10 dark:border-white/10">
            <div className="mx-auto w-full max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-4 lg:sticky lg:top-28">
                  <span className="font-mono text-xs uppercase tracking-widest opacity-60 block mb-2">
                    {service.faq.tag}
                  </span>
                  <h2 className="font-['PP_Neue_Corp_Tight_Ultrabold'] text-3xl sm:text-4xl lg:text-5xl uppercase leading-[1.08] tracking-[0.05em]">
                    {service.faq.title}
                  </h2>
                </div>

                <div className="lg:col-span-8 space-y-6">
                  {service.faq.items.map((item) => (
                    <div
                      key={item.question}
                      className="p-6 sm:p-8 rounded-[4px] border border-black/10 dark:border-white/10 bg-black/[0.01] dark:bg-white/[0.01]"
                    >
                      <h3 className="font-['PP_Neue_Corp_Tight_Ultrabold'] text-xl sm:text-2xl uppercase tracking-[0.06em] leading-snug mb-3">
                        {item.question}
                      </h3>
                      <p className="font-['Space_Grotesk'] text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 8. Final CTA & Related Services */}
          <section className="relative w-full py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-10 border-b border-black/10 dark:border-white/10">
            <div className="mx-auto w-full max-w-7xl text-center flex flex-col items-center">
              <span className="font-mono text-xs uppercase tracking-widest opacity-60 block mb-3">
                [ GET STARTED ]
              </span>
              <h2 className="font-['PP_Neue_Corp_Tight_Ultrabold'] text-4xl sm:text-5xl lg:text-6xl uppercase tracking-[0.05em] leading-[1.08] max-w-4xl mb-4">
                {service.cta.headline}
              </h2>
              <p className="font-['Space_Grotesk'] text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mb-8">
                {service.cta.subheadline}
              </p>

              <button
                onClick={onContactOpen}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-[4px] bg-[var(--text)] text-[var(--background)] font-['PP_Neue_Montreal_Medium',sans-serif] text-sm uppercase tracking-wider font-bold transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                <span>{service.cta.buttonText}</span>
                <span className="text-lg">↗</span>
              </button>

              {/* Related services links */}
              {relatedServices.length > 0 && (
                <div className="mt-16 pt-12 border-t border-black/10 dark:border-white/10 w-full">
                  <span className="font-mono text-xs uppercase tracking-widest opacity-60 block mb-6">
                    Complementary Services
                  </span>
                  <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                    {relatedServices.map((rel) => (
                      <a
                        key={rel!.slug}
                        href={`/services/${rel!.slug}`}
                        onClick={(e) => handleLinkClick(e, `/services/${rel!.slug}`)}
                        className="px-4 py-2.5 rounded-[4px] border border-black/15 dark:border-white/20 font-['PP_Neue_Montreal_Medium',sans-serif] text-xs sm:text-sm uppercase tracking-wider hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                      >
                        {rel!.navLabel} →
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        </main>

        <Footer onContactOpen={onContactOpen} onNavigate={onNavigate} />
      </div>
    </>
  );
}
