import { useEffect } from 'react';
import { notFound } from '@/data';

interface NotFoundProps {
  onNavigate?: (href: string) => void;
}

export function NotFound({ onNavigate }: NotFoundProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-[var(--background)] px-4 text-center text-[var(--text)] sm:px-6 lg:px-10">
      <div className="flex max-w-5xl flex-col items-center py-20">
        <p className="mb-6 font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.08em] opacity-60">
          {notFound.badge}
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-[clamp(7rem,24vw,22rem)] font-bold uppercase leading-[0.78] tracking-[0.01em]">
          {notFound.code}
        </h1>
        <p className="mt-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider opacity-70 max-w-md">
          {notFound.message}
        </p>
        <a
          href="/"
          className="link mt-10 font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.08em]"
          onClick={(event) => {
            if (!onNavigate) return;
            event.preventDefault();
            onNavigate('/');
          }}
        >
          <span>{notFound.backHomeText}</span>
        </a>
      </div>
    </main>
  );
}

export default NotFound;
