import { playgroundHeaderStyles } from './PlaygroundHeader.styles';

interface PlaygroundHeaderProps {
  className?: string;
}

export function PlaygroundHeader({ className = '' }: PlaygroundHeaderProps) {
  return (
    <header className={`${playgroundHeaderStyles.header} ${className}`}>
      <div className={playgroundHeaderStyles.labelWrap}>
        <span className={playgroundHeaderStyles.label}>Projects</span>
      </div>
      <h2 className={playgroundHeaderStyles.title}>PLAYGROUND</h2>
    </header>
  );
}
