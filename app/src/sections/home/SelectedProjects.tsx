import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

export function SelectedProjects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Fly-in animation for project visuals
    const odds = document.querySelectorAll<HTMLElement>('.project-visual-odd');
    const evens = document.querySelectorAll<HTMLElement>('.project-visual-even');

    odds.forEach(el => {
      gsap.to(el, {
        x: 0, y: 0, rotation: 0, opacity: 1,
        duration: 1.6,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
          once: true,
        },
      });
    });

    evens.forEach(el => {
      gsap.to(el, {
        x: 0, y: 0, rotation: 0, opacity: 1,
        duration: 1.6,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
          once: true,
        },
      });
    });

    // Project name reveal
    document.querySelectorAll<HTMLElement>('.project-name').forEach(el => {
      gsap.fromTo(el,
        { y: '100%', opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.0, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 92%', once: true },
        }
      );
    });

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <section ref={sectionRef} className="section-projects" id="work">
      {/* Section heading */}
      <div className="projects-heading-wrap">
        <div className="text-mono_wrapper">
          <span className="text-mono projects-label">Selected projects</span>
        </div>
        <a
          href="/work"
          data-cursor-hover="Portfolio"
          className="heading-appear gsap-ready"
          style={{ textDecoration: 'none' }}
        >
          <div className="projects-title">Playground</div>
        </a>
      </div>

      {/* Projects list */}
      {PROJECTS.map((project, i) => {
        const isOdd = i % 2 === 0;
        return (
          <div key={project.id} className="project-item">
            {/* Visual */}
            <a
              href={`/work/${project.id}`}
              data-cursor-hover={project.title}
              style={{ display: 'block', textDecoration: 'none' }}
            >
              <div
                className={`project-visual-wrap ${isOdd ? 'project-visual-odd' : 'project-visual-even'}`}
                style={{
                  transform: isOdd
                    ? 'translate(-100%, 30rem) rotateZ(-26deg)'
                    : 'translate(100%, 30rem) rotateZ(26deg)',
                  opacity: 0,
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {/* Overlay that reveals */}
                <div className="visual-overlay" />
              </div>
            </a>

            {/* Info row */}
            <div className="project-info">
              <div style={{ overflow: 'hidden' }}>
                <div className="project-name">{project.title}</div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <span className="text-mono" style={{ opacity: 0.4, flexShrink: 0 }}>
                  {project.year}
                </span>
              </div>
            </div>
          </div>
        );
      })}

      {/* See all link */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        padding: 'clamp(2rem, 4vw, 4rem) clamp(1rem, 2.5vw, 2.5rem)',
      }}>
        <a
          href="/work"
          className="small-link"
          data-cursor-hover="Work"
          style={{ textDecoration: 'none' }}
        >
          <div className="text-mono_wrapper">
            <span className="text-mono">See all projects</span>
          </div>
          <svg
            className="small-link-arrow"
            width="14" height="8" viewBox="0 0 14 8" fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity: 0 }}
          >
            <path d="M11 1.5V2.5H12V1.5H11ZM10 0.5V1.5H11V0.5H10ZM11 6.5H12V5.5H11V6.5ZM10 7.5H11V6.5H10V7.5ZM13 3.5V2.5H12V3.5H0V4.5H12V5.5H13V4.5H14V3.5H13Z" fill="currentColor"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
