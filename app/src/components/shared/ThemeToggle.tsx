import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300",
        "hover:bg-secondary/50",
        className
      )}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <span className="text-sm text-foreground-secondary hidden sm:inline">
        {theme === 'dark' ? 'Dark' : 'Light'}
      </span>
      <div className="relative w-5 h-5">
        <Sun 
          className={cn(
            "w-5 h-5 absolute transition-all duration-300",
            theme === 'dark' ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
          )}
        />
        <Moon 
          className={cn(
            "w-5 h-5 absolute transition-all duration-300",
            theme === 'dark' ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
          )}
        />
      </div>
    </button>
  );
}
