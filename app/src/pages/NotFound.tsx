import { useEffect } from 'react';

interface NotFoundProps {
  onNavigate?: (href: string) => void;
}

export function NotFound({ onNavigate }: NotFoundProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-[var(--background)] px-4 text-center text-[var(--text)] sm:px-6 lg:px-10">
      <div className="flex max-w-5xl flex-col items-center py-20">
        <p className="mb-6 font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.08em] opacity-60">
          Page not found
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-[clamp(7rem,24vw,22rem)] font-bold uppercase leading-[0.78] tracking-[0.01em]">
          404
        </h1>
        <a
          href="/"
          className="link mt-10 font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.08em]"
          onClick={(event) => {
            if (!onNavigate) return;
            event.preventDefault();
            onNavigate('/');
          }}
        >
          <span>Back home</span>
        </a>
      </div>
    </main>
  );
}

export default NotFound;
