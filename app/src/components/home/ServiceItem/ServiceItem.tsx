import styles from './ServiceItem.module.css';

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
    <div className={styles.item}>
      <div className={styles.leftGroup}>
        <span className={styles.index}>/{formattedIndex}</span>
        <div className={styles.titleGroup}>
          <h3 className={styles.title}>{service.title}</h3>
          <span className={styles.subtitle}>{service.subtitle}</span>
        </div>
      </div>
      <p className={styles.description}>{service.description}</p>
    </div>
  );
}
