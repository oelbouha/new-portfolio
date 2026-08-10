import styles from './HeroHeadline.module.css';
import { heroHeadlineData } from './HeroHeadline.data';

interface HeroHeadlineProps {
  className?: string;
}

export function HeroHeadline({ className = '' }: HeroHeadlineProps) {
  return (
    <h1 className={`${styles.headlineContainer} ${className}`}>
      {heroHeadlineData.lines.map((line, idx) => (
        <span key={idx} className={styles.headlineText}>
          <span className={styles.line}>{line}</span>
        </span>
      ))}
    </h1>
  );
}
