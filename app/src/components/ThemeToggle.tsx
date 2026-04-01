import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const isLight = theme === 'light';

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="theme-toggle-cta"
        >
            {isLight ? 'LIGHT' : 'DARK'}
            <span className="theme-toggle-icon">
                {isLight ? <Sun strokeWidth={1.8} /> : <Moon strokeWidth={1.8} />}
            </span>
        </button>
    );
}
