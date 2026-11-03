import type { Metadata } from 'next';
import Link from 'next/link';
import { servicesRegistry, servicesOverviewPage } from '@/data/services';
import {
  generateProfessionalServiceSchema,
  generateBreadcrumbSchema,
  generateFaqSchema,
} from '@/lib/jsonLd';
import { JsonLd } from '@/components/shared/JsonLd';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: servicesOverviewPage.seo.title,
  description: servicesOverviewPage.seo.description,
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: servicesOverviewPage.seo.title,
    description: servicesOverviewPage.seo.description,
    url: '/services',
    type: 'website',
    images: [
      {
        url: servicesOverviewPage.seo.ogImage,
        width: 1200,
        height: 630,
        alt: servicesOverviewPage.seo.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: servicesOverviewPage.seo.title,
    description: servicesOverviewPage.seo.description,
    images: [servicesOverviewPage.seo.ogImage],
  },
};

export default function ServicesPage() {
  const { hero, intro, faq, cta } = servicesOverviewPage;

  const schemas = [
    generateProfessionalServiceSchema(),
    generateBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
    ]),
    generateFaqSchema(faq.items),
  ];

  return (
    <>
      <JsonLd schema={schemas} />

      <div className="min-h-screen bg-[var(--background)] text-[var(--text)] w-full">
        <main className="w-full">
          {/* Hero */}
          <section className="relative w-full pt-28 sm:pt-36 lg:pt-44 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-10 border-b border-black/10 dark:border-white/10">
            <div className="mx-auto w-full max-w-7xl">
              <div className="flex flex-col items-start gap-4 sm:gap-6 max-w-5xl">
                <span className="px-2.5 py-1 rounded-[4px] bg-black/10 dark:bg-white/15 text-[11px] font-mono uppercase tracking-wider font-semibold">
                  {hero.badge}
                </span>

                <h1 className="font-['PP_Neue_Corp_Tight_Ultrabold'] text-[clamp(2.75rem,8vw,8rem)] uppercase leading-[0.95] tracking-[0.04em]">
                  {hero.title}
                </h1>

                <p className="font-['Space_Grotesk'] text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl">
                  {hero.subtitle}
                </p>

                <div className="pt-2 sm:pt-4">
                  <Link
                    href="/#services"
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-[4px] bg-[var(--text)] text-[var(--background)] font-['PP_Neue_Montreal_Medium',sans-serif] text-sm uppercase tracking-wider font-semibold transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    <span>{hero.ctaButton}</span>
                    <span className="text-base">↗</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Statement */}
          <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-10 border-b border-black/10 dark:border-white/10 bg-black/[0.01] dark:bg-white/[0.01]">
            <div className="mx-auto w-full max-w-7xl">
              <span className="font-mono text-xs uppercase tracking-widest opacity-60 block mb-2">
                {intro.tag}
              </span>
              <p className="font-['PP_Neue_Corp_Tight_Ultrabold'] text-2xl sm:text-3xl lg:text-4xl uppercase tracking-[0.05em] leading-snug">
                {intro.statement}
              </p>
            </div>
          </section>

          {/* Services Registry Cards Grid */}
          <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 border-b border-black/10 dark:border-white/10">
            <div className="mx-auto w-full max-w-7xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesRegistry.map((service, index) => {
                  const serviceUrl = `/services/${service.slug}`;

                  return (
                    <div
                      key={service.slug}
                      className="group rounded-[4px] border border-black/10 dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between bg-black/[0.02] dark:bg-white/[0.02] hover:border-black/30 dark:hover:border-white/30 transition-colors"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-mono text-xs uppercase tracking-widest opacity-50">
                            0{index + 1}
                          </span>
                          <span className="px-2 py-0.5 rounded-[3px] bg-black/5 dark:bg-white/10 font-mono text-[11px] uppercase tracking-wider">
                            {service.navLabel}
                          </span>
                        </div>

                        <h2 className="font-['PP_Neue_Corp_Tight_Ultrabold'] text-2xl sm:text-3xl uppercase tracking-[0.06em] leading-snug mb-3">
                          {service.title}
                        </h2>

                        <p className="font-['Space_Grotesk'] text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                          {service.shortDescription}
                        </p>

                        <div className="space-y-2 mb-8">
                          {service.deliverables.items.slice(0, 3).map((d) => (
                            <div key={d.title} className="flex items-start gap-2 text-xs font-mono opacity-75">
                              <span className="opacity-40">✦</span>
                              <span>{d.title}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link
                        href={serviceUrl}
                        className="inline-flex items-center justify-between w-full pt-4 border-t border-black/10 dark:border-white/10 font-['PP_Neue_Montreal_Medium',sans-serif] text-sm uppercase tracking-wider font-semibold opacity-90 group-hover:opacity-100 transition-opacity"
                      >
                        <span>Explore service deliverables</span>
                        <span className="transition-transform duration-200 group-hover:translate-x-1">
                          →
                        </span>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Overview FAQ */}
          <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 border-b border-black/10 dark:border-white/10">
            <div className="mx-auto w-full max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-4 lg:sticky lg:top-28">
                  <span className="font-mono text-xs uppercase tracking-widest opacity-60 block mb-2">
                    {faq.tag}
                  </span>
                  <h2 className="font-['PP_Neue_Corp_Tight_Ultrabold'] text-3xl sm:text-4xl lg:text-5xl uppercase leading-[1.08] tracking-[0.05em]">
                    {faq.title}
                  </h2>
                </div>

                <div className="lg:col-span-8 space-y-6">
                  {faq.items.map((item) => (
                    <div
                      key={item.question}
                      className="p-6 sm:p-8 rounded-[4px] border border-black/10 dark:border-white/10"
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

          {/* Final CTA */}
          <section className="py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-10 border-b border-black/10 dark:border-white/10 text-center">
            <div className="mx-auto w-full max-w-7xl flex flex-col items-center">
              <h2 className="font-['PP_Neue_Corp_Tight_Ultrabold'] text-4xl sm:text-6xl lg:text-7xl uppercase tracking-[0.05em] leading-[1.08] max-w-4xl mb-4">
                {cta.line1}
                <br />
                {cta.line2}
              </h2>
              <p className="font-['Space_Grotesk'] text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mb-8">
                {cta.desc}
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
