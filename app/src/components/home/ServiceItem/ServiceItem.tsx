import { serviceItemStyles } from './ServiceItem.styles';

interface ServiceItemData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  previewImage?: string;
}

interface ServiceItemProps {
  service: ServiceItemData;
  index: number;
}

export function ServiceItem({ service, index }: ServiceItemProps) {
  const formattedIndex = String(index + 1).padStart(2, '0');

  return (
    <div className={serviceItemStyles.item}>
      <div className={serviceItemStyles.leftGroup}>
        <span className={serviceItemStyles.index}>/{formattedIndex}</span>
        <div className={serviceItemStyles.titleGroup}>
          <h3 className={serviceItemStyles.title}>{service.title}</h3>
          <span className={serviceItemStyles.subtitle}>{service.subtitle}</span>
        </div>
      </div>
      <p className={serviceItemStyles.description}>{service.description}</p>
    </div>
  );
}
