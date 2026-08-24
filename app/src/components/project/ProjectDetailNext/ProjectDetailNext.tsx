import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { projectDetailNextStyles } from './ProjectDetailNext.styles';
import type { ProjectDetailNextProps } from './ProjectDetailNext.types';

export function ProjectDetailNext({ nextProject, onNavigate }: ProjectDetailNextProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!badgeRef.current || !linkRef.current) return;
    const rect = linkRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    badgeRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) rotate(-6deg) scale(1)`;
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!badgeRef.current || !linkRef.current) return;
    const rect = linkRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    badgeRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) rotate(-6deg) scale(1)`;
  };

  return (
    <section className={projectDetailNextStyles.section}>
      <div className={projectDetailNextStyles.container}>
        <Link
          ref={linkRef}
          to={`/work/${nextProject.slug}`}
          onClick={(e) => {
            if (onNavigate) {
              e.preventDefault();
              onNavigate(`/work/${nextProject.slug}`);
            }
          }}
          className={projectDetailNextStyles.link}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
        >
          <span className={projectDetailNextStyles.label}>NEXT PROJECT</span>
          <div className={projectDetailNextStyles.titleWrapper}>
            <h2 className={projectDetailNextStyles.title}>{nextProject.title}</h2>
          </div>
          <div ref={badgeRef} className={projectDetailNextStyles.badge}>
            <span>OPEN PROJECT</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
