export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tagline?: string;            // short bold tagline shown below hero
  overview?: string;
  conclusion?: string;
  thumbnail: string;
  heroImage: string;
  coverImage?: string;         // optional full-bleed cover image (separate from hero)
  images: string[];
  services: string[];
  client?: string;
  website?: string;
  tags?: string[]
  link?: string;
  quote?: string;              // client/project quote
  quoteAuthor?: string;        // quote attribution name
  quoteRole?: string;          // quote attribution role
  credits?: { role: string; name: string }[];  // credits list
}
