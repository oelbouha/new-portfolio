export const projectDetailGalleryStyles = {
  section:
    'relative w-full py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8',
  container: 'mx-auto w-full max-w-7xl',
  fullMedia:
    'proj-img-reveal w-full overflow-hidden rounded-[4px] mb-8 lg:mb-12 last:mb-0',
  fullImg:
    'w-full h-full object-cover block transition-transform duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.03]',
  grid2:
    'grid grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-12 w-full max-sm:grid-cols-1',
  grid2Item:
    'proj-img-reveal overflow-hidden rounded-[4px] aspect-[3/4] relative bg-black/5',
  grid2Img:
    'w-full h-full object-cover block transition-transform duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.03]',
} as const;
