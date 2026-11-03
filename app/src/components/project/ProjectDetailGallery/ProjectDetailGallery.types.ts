export interface GalleryImageItem {
  src: string;
  alt?: string;
}

export interface ProjectDetailGalleryProps {
  images: (string | GalleryImageItem)[];
  title: string;
}
