import type { Metadata } from 'next';
import { about } from '@/data';
import {
  generateAboutPageSchema,
  generatePersonSchema,
  generateBreadcrumbSchema,
} from '@/lib/jsonLd';
import { JsonLd } from '@/components/shared/JsonLd';
import { AboutHero } from '@/sections/about/AboutHero/AboutHero';
import { AboutBio } from '@/sections/about/AboutBio/AboutBio';
import { AboutServices } from '@/sections/about/AboutServices/AboutServices';
import { AboutExperience } from '@/sections/about/AboutExperience/AboutExperience';
import { AboutCTA } from '@/sections/about/AboutCTA/AboutCTA';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: about.seo.title,
  description: about.seo.description,
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: about.seo.title,
    description: about.seo.description,
    url: '/about',
    type: 'profile',
    images: [
      {
        url: about.seo.ogImage,
        width: 1200,
        height: 630,
        alt: about.seo.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: about.seo.title,
    description: about.seo.description,
    images: [about.seo.ogImage],
  },
};

export default function AboutPage() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ];

  const schemas = [
    generateAboutPageSchema(),
    generatePersonSchema(),
    generateBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <>
      <JsonLd schema={schemas} />
      <div className="min-h-screen bg-background text-[var(--text)] w-full">
        <main className="w-full">
          <AboutHero />
          <AboutBio />
          <AboutServices />
          <AboutExperience />
          <AboutCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
