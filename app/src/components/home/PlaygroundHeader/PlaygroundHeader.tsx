import { Link } from 'react-router-dom';
import type { MouseEvent } from 'react';
import { playgroundHeaderStyles } from './PlaygroundHeader.styles';

interface PlaygroundHeaderProps {
  className?: string;
  onNavigate?: (href: string) => void;
}

export function PlaygroundHeader({ className = '', onNavigate }: PlaygroundHeaderProps) {
  const href = '/work';

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!onNavigate) return;
    event.preventDefault();
    onNavigate(href);
  };

  return (
    <header className={`${playgroundHeaderStyles.header} ${className}`}>
      <div className={playgroundHeaderStyles.labelWrap}>
        <span className={playgroundHeaderStyles.label}>SELECTED PROJECTS</span>
      </div>
      <Link
        to={href}
        onClick={handleClick}
        className={playgroundHeaderStyles.titleLink}
        data-cursor-hover="PORTFOLIO"
        data-cursor-icon="↗"
        aria-label="View all portfolio projects"
      >
        <h2 className={playgroundHeaderStyles.title}>PLAYGROUND</h2>
      </Link>
    </header>
  );
}
