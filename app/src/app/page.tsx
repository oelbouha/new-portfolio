import type { Metadata } from 'next';
import { home } from '@/data';
import { generatePersonSchema, generateWebSiteSchema } from '@/lib/jsonLd';
import { JsonLd } from '@/components/shared/JsonLd';
import { HeroSection } from '@/sections/home/HeroSection';
import { VideoSection } from '@/sections/home/VideoSection';
import { IntroSection } from '@/sections/home/IntroSection';
import { PlaygroundSection } from '@/sections/home/PlaygroundSection';
import { ServicesSection } from '@/sections/home/ServicesSection';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: home.seo.title,
  description: home.seo.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: home.seo.title,
    description: home.seo.description,
    url: '/',
    type: 'website',
    images: [
      {
        url: home.seo.ogImage,
        width: 1200,
        height: 630,
        alt: home.seo.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: home.seo.title,
    description: home.seo.description,
    images: [home.seo.ogImage],
  },
};

export default function HomePage() {
  const schemas = [generatePersonSchema(), generateWebSiteSchema()];

  return (
    <>
      <JsonLd schema={schemas} />
      <div style={{ background: 'var(--background)', minHeight: '100vh' }} className="w-full">
        <main className="w-full">
          <HeroSection />
          <VideoSection />
          <IntroSection />
          <PlaygroundSection />
          <ServicesSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
