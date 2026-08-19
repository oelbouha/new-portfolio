export type ViewMode = '4-col' | '3-col' | '2-col';

export interface ProjectItem {
  id: number;
  slug: string;
  name: string;
  image: string;
  category: string;
  height: string;
  description: string;
  tech: string;
}

export interface PortfolioCarouselProps {}
