import { heroHeadlineStyles } from './HeroHeadline.styles';
import { heroHeadlineData } from './HeroHeadline.data';
import type { HeroHeadlineProps } from './HeroHeadline.types';

export function HeroHeadline({ className = '' }: HeroHeadlineProps) {
  return (
    <h1 className={`${heroHeadlineStyles.container} ${className}`}>
      {heroHeadlineData.lines.map((line, idx) => (
        <span key={idx} className={heroHeadlineStyles.lineWrap}>
          <span className={heroHeadlineStyles.line}>{line}</span>
        </span>
      ))}
    </h1>
  );
}
