'use client';

import Link from 'next/link';
import type { MouseEvent } from 'react';
import { home } from '@/data';
import { playgroundHeaderStyles } from './PlaygroundHeader.styles';

interface PlaygroundHeaderProps {
  className?: string;
  onNavigate?: (href: string) => void;
}

export function PlaygroundHeader({ className = '', onNavigate }: PlaygroundHeaderProps) {
  const { playground } = home;
  const href = playground.href;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!onNavigate) return;
    event.preventDefault();
    onNavigate(href);
  };

  return (
    <header className={`${playgroundHeaderStyles.header} ${className}`}>
      <div className={playgroundHeaderStyles.labelWrap}>
        <span className={playgroundHeaderStyles.label}>{playground.label}</span>
      </div>
      <Link
        href={href}
        onClick={handleClick}
        className={playgroundHeaderStyles.titleLink}
        data-cursor-hover={playground.badge}
        data-cursor-icon="↗"
        aria-label="View all portfolio projects"
      >
        <h2 className={playgroundHeaderStyles.title}>{playground.title}</h2>
      </Link>
    </header>
  );
}
