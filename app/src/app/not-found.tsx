import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found | Outman Elbouhali',
  description: 'The requested page could not be found. Explore custom web and mobile app development projects by Outman Elbouhali.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text)] flex flex-col items-center justify-center px-4 text-center">
      <span className="font-mono text-xs uppercase tracking-widest opacity-60 mb-4 block">
        [ 404 ERROR ]
      </span>
      <h1 className="font-['PP_Neue_Corp_Tight_Ultrabold'] text-6xl sm:text-8xl lg:text-9xl uppercase tracking-wider mb-6">
        PAGE NOT FOUND
      </h1>
      <p className="font-['Space_Grotesk'] text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-md mb-8">
        The link you followed may be broken, or the page may have been moved.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-[4px] bg-[var(--text)] text-[var(--background)] font-mono text-xs uppercase tracking-wider font-semibold"
        >
          Return Home →
        </Link>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-[4px] border border-black/15 dark:border-white/20 font-mono text-xs uppercase tracking-wider opacity-80 hover:opacity-100"
        >
          View Projects
        </Link>
      </div>
    </div>
  );
}
