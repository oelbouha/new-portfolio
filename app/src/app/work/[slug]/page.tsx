import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allProjects } from '@/data/projects/projects.data';
import { generateProjectSchema, generateBreadcrumbSchema } from '@/lib/jsonLd';
import { JsonLd } from '@/components/shared/JsonLd';
import { ProjectDetailClient } from '@/components/project/ProjectDetailClient';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allProjects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found | Outman Elbouhali',
      description: 'The requested project could not be found.',
    };
  }

  const title = `${project.title} Case Study | Outman Elbouhali`;
  const description = project.description;
  const canonicalUrl = `/work/${project.slug}`;
  const ogImage = project.coverImage?.src || '/images/icon.png';

  return {
    title,
    description,
    authors: [{ name: 'Outman Elbouhali' }],
    category: project.category,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'article',
      siteName: 'Outman Elbouhali Portfolio',
      publishedTime: `${project.year}-01-01T00:00:00.000Z`,
      authors: ['Outman Elbouhali'],
      tags: project.tags,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${project.title} Case Study Preview`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: '@oelbouha',
      site: '@oelbouha',
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const projectIndex = allProjects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = allProjects[projectIndex];
  const nextProject = allProjects[(projectIndex + 1) % allProjects.length];

  const schemas = [
    generateProjectSchema(project),
    generateBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Projects', path: '/work' },
      { name: project.title, path: `/work/${project.slug}` },
    ]),
  ];

  return (
    <>
      <JsonLd schema={schemas} />
      <ProjectDetailClient project={project} nextProject={nextProject} />
    </>
  );
}
