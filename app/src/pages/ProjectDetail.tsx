import { useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { projectsData } from '@/data/projects/projects.data';
import { ProjectHeroSection } from '@/components/project/ProjectHeroSection/ProjectHeroSection';
import { ProjectOverviewCards } from '@/components/project/ProjectOverviewCards/ProjectOverviewCards';
import { ProjectProcessTitle } from '@/components/project/ProjectProcessTitle/ProjectProcessTitle';
import { ScrollImageShowcase } from '@/components/project/ScrollImageShowcase/ScrollImageShowcase';
import { ProjectNavigationTeaser } from '@/components/project/ProjectNavigationTeaser/ProjectNavigationTeaser';
import { Footer } from '@/components/layout/Footer';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <article style={{ minHeight: '100vh', paddingTop: '2rem' }}>
      <ProjectHeroSection project={project} />
      <ProjectOverviewCards project={project} />
      <ProjectProcessTitle project={project} />
      <ScrollImageShowcase project={project} />
      <ProjectNavigationTeaser currentSlug={project.slug} />
      <Footer />
    </article>
  );
}