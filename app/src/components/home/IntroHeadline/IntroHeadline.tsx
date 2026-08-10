import styles from './IntroHeadline.module.css';
import { introHeadlineData } from './IntroHeadline.data';

interface IntroHeadlineProps {
  className?: string;
}

export function IntroHeadline({ className = '' }: IntroHeadlineProps) {
  return (
    <div className={`${styles.container} ${className}`}>
      {introHeadlineData.lines.map((line, idx) => {
        const isHighlight = line.includes('OUR OBSESSION') || line.includes('OUR PLAYGROUND');
        return (
          <h2
            key={idx}
            className={`${styles.line} ${isHighlight ? styles.lineHighlighted : ''}`}
          >
            {line}
          </h2>
        );
      })}
    </div>
  );
}
