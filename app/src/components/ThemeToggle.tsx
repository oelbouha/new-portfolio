import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative w-14 h-7 bg-card border border-border rounded-full transition-colors hover:border-accent/50"
            aria-label="Toggle theme"
        >
            <div
                className={`absolute top-0.5 left-0.5 w-6 h-6 bg-accent rounded-full transition-transform duration-300 flex items-center justify-center ${theme === 'dark' ? 'translate-x-7' : 'translate-x-0'
                    }`}
            >
                {theme === 'dark' ? (
                    <Moon className="w-3.5 h-3.5 text-background" />
                ) : (
                    <Sun className="w-3.5 h-3.5 text-background" />
                )}
            </div>
        </button>
    );
}
