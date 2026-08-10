export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  overview?: string;
  conclusion?: string;
  thumbnail: string;
  heroImage: string;
  images: string[];
  services: string[];
  client?: string;
  website?: string;
  tags?: string[];
  link?: string;
}
