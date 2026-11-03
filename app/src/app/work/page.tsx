import type { Metadata } from 'next';
import { projectsPage } from '@/data';
import {
  generateCollectionPageSchema,
  generateBreadcrumbSchema,
} from '@/lib/jsonLd';
import { JsonLd } from '@/components/shared/JsonLd';
import { WorkProjectsList } from '@/sections/work/WorkProjectsList';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: projectsPage.seo.title,
  description: projectsPage.seo.description,
  alternates: {
    canonical: '/work',
  },
  openGraph: {
    title: projectsPage.seo.title,
    description: projectsPage.seo.description,
    url: '/work',
    type: 'website',
    images: [
      {
        url: projectsPage.seo.ogImage,
        width: 1200,
        height: 630,
        alt: projectsPage.seo.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: projectsPage.seo.title,
    description: projectsPage.seo.description,
    images: [projectsPage.seo.ogImage],
  },
};

export default function WorkPage() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
  ];

  const schemas = [
    generateCollectionPageSchema(
      projectsPage.seo.title,
      projectsPage.seo.description,
      '/work'
    ),
    generateBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <>
      <JsonLd schema={schemas} />
      <div
        style={{
          background: 'var(--background)',
          minHeight: '100vh',
          color: 'var(--text)',
        }}
        className="w-full"
      >
        <main className="w-full">
          <WorkProjectsList />
        </main>
        <Footer />
      </div>
    </>
  );
}
