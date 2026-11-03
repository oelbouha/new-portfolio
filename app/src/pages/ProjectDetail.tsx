import { useParams, Navigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { allProjects } from '@/data';
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

interface ProjectDetailProps {
  onNavigate?: (href: string) => void;
  onContactOpen?: () => void;
}

export default function ProjectDetail({ onNavigate, onContactOpen }: ProjectDetailProps) {
  const { slug } = useParams<{ slug: string }>();
  const pageRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);

  const project = allProjects.find((p) => p.slug === slug) ?? null;
  const currentIndex = project ? allProjects.findIndex((p) => p.slug === slug) : -1;
  const nextProject = project ? allProjects[(currentIndex + 1) % allProjects.length] : null;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [slug]);

  // GSAP entrance animations
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!pageRef.current || !project) return;

    ScrollTrigger.getAll().forEach((t) => t.kill());

    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.1 }
        );
      }

      if (coverRef.current) {
        gsap.fromTo(
          coverRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.15 }
        );
      }

      if (taglineRef.current) {
        gsap.fromTo(
          taglineRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power4.out',
            scrollTrigger: { trigger: taglineRef.current, start: 'top 88%' },
          }
        );
      }

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

      gsap.from('.proj-next-title', {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.proj-next-wrap',
          start: 'top 88%',
        },
        onComplete: () => {
          gsap.set('.proj-next-title', { clearProps: 'transform,opacity' });
        },
      });

      setTimeout(() => ScrollTrigger.refresh(), 1200);
    }, pageRef);

    return () => ctx.revert();
  }, [slug, project]);

  if (!project || !nextProject) return <Navigate to="/" replace />;

  const coverSrc = project.coverImage?.src || project.heroImage?.src || '';
  const coverAlt = project.coverImage?.alt || project.heroImage?.alt || `${project.title} cover`;

  const [, ...galleryImages] = project.images;
  const midIndex = Math.floor(galleryImages.length / 2);
  const topImages = galleryImages.slice(0, midIndex);
  const bottomImages = galleryImages.slice(midIndex);

  return (
    <main
      ref={pageRef}
      className="proj-page bg-[var(--project-bg)] text-[var(--text)] overflow-x-hidden"
      aria-label={`${project.title} case study`}
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* 1. Hero */}
        <ProjectDetailHero title={project.title} titleRef={titleRef} />

        {/* 2. Cover Image */}
        <ProjectDetailCover
          coverImage={coverSrc}
          alt={coverAlt}
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

        {/* 5. Gallery & Quote */}
        {project.quote ? (
          <>
            <ProjectDetailGallery images={topImages} title={project.title} />
            <ProjectDetailQuote
              quote={project.quote}
              quoteAuthor={project.quoteAuthor}
              quoteRole={project.quoteRole}
            />
            <ProjectDetailGallery images={bottomImages} title={project.title} />
          </>
        ) : (
          <ProjectDetailGallery images={galleryImages} title={project.title} />
        )}

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
      </div>

      {/* 10. Footer */}
      <Footer onContactOpen={onContactOpen} onNavigate={onNavigate} />
    </main>
  );
}
