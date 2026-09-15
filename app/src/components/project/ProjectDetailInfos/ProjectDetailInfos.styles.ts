export const projectDetailInfosStyles = {
  section:
    'relative w-full py-[clamp(4rem,8vw,10rem)] px-[clamp(1rem,2.5vw,2.5rem)] border-t border-black/15 dark:border-white/15',
  grid:
    'mx-auto w-full max-w-7xl grid grid-cols-3 gap-[clamp(2rem,5vw,6rem)] items-start max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-12',
  col: 'proj-infos__col flex flex-col gap-5',
  colMeta:
    'proj-infos__col flex flex-col gap-5 max-lg:col-span-full max-sm:col-auto',
  monoWrapper: 'overflow-hidden proj-info-row',
  monoText:
    'block font-["IBM_Plex_Mono",monospace] text-[clamp(0.65rem,1vw,0.75rem)] font-normal tracking-[0.02em] uppercase opacity-55',
  rows: 'grid grid-cols-2 gap-4 max-sm:grid-cols-1',
  roles: 'proj-info-row flex flex-col',
  names: 'proj-info-row flex flex-col',
  scopeList: 'proj-info-row flex flex-col',
  metaValue:
    'proj-info-row font-["Space_Grotesk",system-ui,sans-serif] text-[clamp(0.9rem,1.3vw,1.05rem)] text-[var(--text)] opacity-75',
  tagsWrapper: 'proj-info-row flex flex-wrap gap-1.5 mt-1',
  tag:
    'inline-flex items-center font-["IBM_Plex_Mono",monospace] text-[0.62rem] tracking-[0.06em] uppercase border border-black/30 dark:border-white/30 rounded-full px-3 py-1 text-[var(--text)] opacity-65',
} as const;
