export const servicesSectionStyles = {
  section:
    'w-full border-t border-black/10 px-4 py-20 sm:px-6 lg:px-8 lg:py-28 dark:border-white/10',
  container: 'mx-auto w-full max-w-7xl',
  sectionTitle:
    'mb-8 text-center font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.16em] text-black/35 dark:text-white/35',
  listWrapper: 'flex flex-col',
  seeAllWrapper: 'mt-12 flex justify-center',
  seeAllLink: 'small-link',
  previewBox: 'service-video-preview is-visible fixed',
} as const;
