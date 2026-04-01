import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
      className={cn('theme-toggle-cta', className)}
    >
      {isLight ? 'LIGHT' : 'DARK'}
      <span className="theme-toggle-icon">
        {isLight ? <Sun strokeWidth={1.8} /> : <Moon strokeWidth={1.8} />}
      </span>
    </button>
  );
}
