export interface ServiceItemData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  previewImage?: string;
}

export interface ServiceItemProps {
  service: ServiceItemData;
  index: number;
}
