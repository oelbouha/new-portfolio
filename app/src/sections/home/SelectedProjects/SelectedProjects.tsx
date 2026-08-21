import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS } from '@/lib/constants';
import { selectedProjectsStyles } from './SelectedProjects.styles';
import type { SelectedProjectsProps } from './SelectedProjects.types';

gsap.registerPlugin(ScrollTrigger);

export function SelectedProjects({}: SelectedProjectsProps = {}) {
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
    <section ref={sectionRef} className={selectedProjectsStyles.section} id="work">
      {/* Section heading */}
      <div className={selectedProjectsStyles.headingWrap}>
        <div className={selectedProjectsStyles.monoWrapper}>
          <span className={selectedProjectsStyles.projectsLabel}>Selected projects</span>
        </div>
        <a
          href="/work"
          data-cursor-hover="Portfolio"
          className={selectedProjectsStyles.headingLink}
          style={{ textDecoration: 'none' }}
        >
          <div className={selectedProjectsStyles.projectsTitle}>Playground</div>
        </a>
      </div>

      {/* Projects list */}
      {PROJECTS.map((project, i) => {
        const isOdd = i % 2 === 0;
        return (
          <div key={project.id} className={selectedProjectsStyles.projectItem}>
            {/* Visual */}
            <a
              href={`/work/${project.id}`}
              data-cursor-hover={project.title}
              className={selectedProjectsStyles.visualLink}
            >
              <div
                className={`${selectedProjectsStyles.visualWrap} ${isOdd ? 'project-visual-odd' : 'project-visual-even'}`}
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
                  className={selectedProjectsStyles.image}
                />
                <div className={selectedProjectsStyles.visualOverlay} />
              </div>
            </a>

            {/* Info row */}
            <div className={selectedProjectsStyles.infoRow}>
              <div className={selectedProjectsStyles.overflowHidden}>
                <div className={selectedProjectsStyles.projectName}>{project.title}</div>
              </div>

              <div className={selectedProjectsStyles.tagsGroup}>
                <div className={selectedProjectsStyles.tagsList}>
                  {project.tags.map(tag => (
                    <span key={tag} className={selectedProjectsStyles.tag}>{tag}</span>
                  ))}
                </div>
                <span className={selectedProjectsStyles.yearText}>
                  {project.year}
                </span>
              </div>
            </div>
          </div>
        );
      })}

      {/* See all link */}
      <div className={selectedProjectsStyles.seeAllWrapper}>
        <a
          href="/work"
          className={selectedProjectsStyles.seeAllLink}
          data-cursor-hover="Work"
        >
          <div className={selectedProjectsStyles.monoWrapper}>
            <span className="text-mono">See all projects</span>
          </div>
          <svg
            className={selectedProjectsStyles.arrowSvg}
            width="14" height="8" viewBox="0 0 14 8" fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11 1.5V2.5H12V1.5H11ZM10 0.5V1.5H11V0.5H10ZM11 6.5H12V5.5H11V6.5ZM10 7.5H11V6.5H10V7.5ZM13 3.5V2.5H12V3.5H0V4.5H12V5.5H13V4.5H14V3.5H13Z" fill="currentColor"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
