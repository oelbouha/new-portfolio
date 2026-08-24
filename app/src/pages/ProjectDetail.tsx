import { useParams, Navigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { projectsData } from '@/data/projects/projects.data';
import { Footer } from '@/components/layout/Footer';
import { ProjectDetailHero } from '@/components/project/ProjectDetailHero';
import { ProjectDetailCover } from '@/components/project/ProjectDetailCover';
import { ProjectDetailTagline } from '@/components/project/ProjectDetailTagline';
import { ProjectDetailIntro } from '@/components/project/ProjectDetailIntro';
import { ProjectDetailGallery } from '@/components/project/ProjectDetailGallery';
import { ProjectDetailQuote } from '@/components/project/ProjectDetailQuote';
import { ProjectDetailInfos } from '@/components/project/ProjectDetailInfos';
import { ProjectDetailNext } from '@/components/project/ProjectDetailNext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Delay for entrance animations — wait for Phase 2 (overlay uncover) to begin
const ENTRANCE_DELAY = 0.15;

interface ProjectDetailProps {
  onNavigate?: (href: string) => void;
}

export default function ProjectDetail({ onNavigate }: ProjectDetailProps) {
  const { slug } = useParams<{ slug: string }>();
  const pageRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);

  const project = projectsData.find((p) => p.slug === slug) ?? null;
  const currentIndex = project ? projectsData.findIndex((p) => p.slug === slug) : -1;
  const nextProject = project ? projectsData[(currentIndex + 1) % projectsData.length] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // GSAP entrance animations — timed with the slide-out (uncover) phase
  useEffect(() => {
    if (!pageRef.current || !project) return;

    // Kill any lingering ScrollTriggers from the previous page before adding new ones
    ScrollTrigger.getAll().forEach((t) => t.kill());

    const ctx = gsap.context(() => {
      // Hero title — reveals as the overlay slides away
      if (titleRef.current) {
        gsap.fromTo(titleRef.current,
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.4, ease: 'power4.out', delay: ENTRANCE_DELAY }
        );
      }

      // Cover image reveal
      if (coverRef.current) {
        gsap.fromTo(coverRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out', delay: ENTRANCE_DELAY + 0.15 }
        );
      }

      // Tagline
      if (taglineRef.current) {
        gsap.fromTo(taglineRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 1.2, ease: 'power4.out',
            scrollTrigger: { trigger: taglineRef.current, start: 'top 88%' },
          }
        );
      }

      // Gallery image reveals
      gsap.utils.toArray<HTMLElement>('.proj-img-reveal').forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1.1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
          },
        });
      });

      // Info rows
      gsap.utils.toArray<HTMLElement>('.proj-info-row').forEach((el, i) => {
        gsap.from(el, {
          y: 30,
          opacity: 0,
          duration: 0.9,
          delay: i * 0.07,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
          },
        });
      });

      // Next project title
      gsap.from('.proj-next-title', {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.proj-next-title',
          start: 'top 88%',
        },
        onComplete: () => {
          gsap.set('.proj-next-title', { clearProps: 'transform,opacity' });
        },
      });

      // Refresh ST after entrance animations settle
      setTimeout(() => ScrollTrigger.refresh(), 1200);
    }, pageRef);

    return () => ctx.revert();
  }, [slug, project]);

  if (!project || !nextProject) return <Navigate to="/" replace />;

  // Split gallery images into top half and bottom half around quote
  const [, ...galleryImages] = project.images;
  const midIndex = Math.floor(galleryImages.length / 2);
  const topImages = galleryImages.slice(0, midIndex);
  const bottomImages = galleryImages.slice(midIndex);

  return (
    <main
      ref={pageRef}
      className="proj-page bg-[var(--background)] text-[var(--text)] overflow-x-hidden"
      aria-label={`${project.title} case study`}
    >
      <div className="mx-auto w-full max-w-[1980px]">
        {/* 1. Hero */}
        <ProjectDetailHero title={project.title} titleRef={titleRef} />

        {/* 2. Cover Image */}
        <ProjectDetailCover
          coverImage={project.coverImage || project.heroImage}
          title={project.title}
          coverRef={coverRef}
        />

        {/* 3. Tagline Row */}
        {project.tagline && (
          <ProjectDetailTagline
            tagline={project.tagline}
            year={project.year}
            taglineRef={taglineRef}
          />
        )}

        {/* 4. Intro & Overview */}
        <ProjectDetailIntro
          overview={project.overview}
          description={project.description}
          website={project.website}
        />

        {/* 5. Top Gallery */}
        <ProjectDetailGallery images={topImages} title={project.title} />

        {/* 6. Quote / Testimonial */}
        {project.quote && (
          <ProjectDetailQuote
            quote={project.quote}
            quoteAuthor={project.quoteAuthor}
            quoteRole={project.quoteRole}
          />
        )}

        {/* 7. Bottom Gallery */}
        <ProjectDetailGallery images={bottomImages} title={project.title} />

        {/* 8. Credits & Scope Info */}
        <ProjectDetailInfos
          credits={project.credits}
          services={project.services}
          client={project.client}
          year={project.year}
          tags={project.tags}
        />

        {/* 9. Next Project Teaser */}
        <ProjectDetailNext nextProject={nextProject} onNavigate={onNavigate} />

        {/* 10. Footer */}
        <Footer />
      </div>
    </main>
  );
}