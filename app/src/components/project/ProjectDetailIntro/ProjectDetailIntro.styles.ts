export const projectDetailIntroStyles = {
  section:
    'relative w-full pt-[clamp(3rem,6vw,7rem)] pb-[clamp(3rem,6vw,7rem)] px-[clamp(1rem,2.5vw,2.5rem)]',
  container:
    'mx-auto w-full max-w-7xl grid grid-cols-[1fr_2fr] gap-[clamp(2rem,5vw,6rem)] items-start max-md:grid-cols-1 max-md:gap-6',
  labelCol: 'pt-1',
  monoWrapper: 'overflow-hidden',
  monoText:
    'block font-["IBM_Plex_Mono",monospace] text-[clamp(0.65rem,1vw,0.75rem)] font-normal tracking-[0.02em] uppercase',
  bodyCol: 'flex flex-col gap-8',
  desc:
    'font-["Space_Grotesk",system-ui,sans-serif] text-[clamp(1rem,1.8vw,1.25rem)] leading-[1.75] text-[var(--text)] opacity-85 max-w-[640px]',
  visitLink:
    'inline-flex items-center gap-2.5 no-underline text-[var(--text)] cursor-pointer group',
  arrowIcon:
    'flex items-center opacity-0 -translate-x-1.5 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0',
} as const;
