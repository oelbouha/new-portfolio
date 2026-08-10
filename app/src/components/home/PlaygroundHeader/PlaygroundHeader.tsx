import styles from './PlaygroundHeader.module.css';

interface PlaygroundHeaderProps {
  className?: string;
}

export function PlaygroundHeader({ className = '' }: PlaygroundHeaderProps) {
  return (
    <header className={`${styles.header} ${className}`}>
      <h2 className={styles.title}>PLAYGROUND</h2>
    </header>
  );
}
