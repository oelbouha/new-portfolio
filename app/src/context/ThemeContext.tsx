'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
  mounted: false,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  // Read stored preference only on the client after mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('darkMode');
      if (stored === 'enabled') {
        setTheme('dark');
      }
    } catch {}
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.classList.toggle('is-dark', theme === 'dark');
    root.classList.toggle('dark', theme === 'dark');
    try {
      localStorage.setItem('darkMode', theme === 'dark' ? 'enabled' : 'disabled');
    } catch {}
  }, [theme, mounted]);

  const toggleTheme = () => {
    document.documentElement.classList.add('theme-toggling');
    setTimeout(() => document.documentElement.classList.remove('theme-toggling'), 500);
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
