export const footerStyles = {
  footer: 'w-full overflow-hidden pt-8  border-black/15 dark:border-white/15 ',
  videosGrid: 'mx-auto grid grid-cols-2 md:grid-cols-3 gap-2 px-4 sm:px-6 lg:px-10 mb-12 w-full',
  videoItem: 'relative aspect-[4/3] rounded-[0.2rem] overflow-hidden bg-black/10 dark:bg-white/10 footer-video-item group',
  videoImg: 'h-full w-full object-cover block transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]',
  navGrid: 'mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 px-4 sm:px-6 lg:px-10 py-8  border-black/15 dark:border-white/15 w-full  mb-8',
  navCol: 'flex flex-col gap-2',
  colTitle: 'font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.08em] mb-3 opacity-35 text-[var(--text)]',
  navLink: 'font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.08em] opacity-55 hover:opacity-100 transition-opacity duration-200 cursor-pointer text-[var(--text)]',
  ctaBar: 'mx-auto flex flex-wrap items-center justify-between gap-4 px-4 sm:px-6 lg:px-10 py-8 border-t border-black/15 dark:border-white/15 mb-20 w-full',
  ctaText: 'font-[family-name:var(--font-mono)] text-xs sm:text-sm uppercase tracking-[0.08em] opacity-50 text-[var(--text)]',
  ctaButton: 'font-[family-name:var(--font-mono)] text-xs sm:text-sm uppercase tracking-[0.08em] inline-flex items-center gap-2 group cursor-pointer opacity-55 hover:opacity-100 transition-opacity duration-200 text-[var(--text)]',
  ctaArrow: 'transition-transform duration-300 group-hover:translate-x-1',
} as const;
