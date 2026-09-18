import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { MouseEvent } from 'react';
import { cn } from '@/lib/utils';
import { projectCardMotion, projectCardStyles } from './ProjectCard.styles';
import type { ProjectCardProps } from './ProjectCard.types';

const MotionCard = motion.div;

export function ProjectCard({ project, index = 0, className = '', onNavigate }: ProjectCardProps) {
  const motionVariant = index % 2 === 0 ? projectCardMotion.fromLeft : projectCardMotion.fromRight;
  const href = `/work/${project.slug}`;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!onNavigate) return;
    event.preventDefault();
    onNavigate(href);
  };

  return (
    <MotionCard
      className={projectCardStyles.motionShell}
      initial={motionVariant.initial}
      whileInView={motionVariant.whileInView}
      viewport={motionVariant.viewport}
      transition={motionVariant.transition}
    >
      <Link
        to={href}
        onClick={handleClick}
        className={cn(projectCardStyles.card, className)}
        data-cursor-hover="Open project"
        data-cursor-icon="↗"
      >
        <div className={projectCardStyles.imageWrapper}>
          <img
            src={project.thumbnail}
            alt={project.title}
            className={projectCardStyles.image}
            loading="lazy"
          />
          <div className={projectCardStyles.hoverOverlay}>
            <span className={projectCardStyles.hoverBadge}>
              {project.category || 'Case Study'}
            </span>
            <div className={projectCardStyles.hoverBottomRow}>
              <span className={projectCardStyles.hoverTitle}>{project.title}</span>
              <span className={projectCardStyles.hoverArrow}>↗</span>
            </div>
          </div>
        </div>
      </Link>
    </MotionCard>
  );
}
