import { ServiceItem } from '@/components/home/ServiceItem/ServiceItem';
import { servicesData } from '@/components/home/ServiceItem/ServiceItem.data';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './ServicesSection.module.css';

export function ServicesSection() {
  const headerRef = useScrollReveal<HTMLDivElement>({ y: 30, duration: 0.8 });
  const listRef = useScrollReveal<HTMLDivElement>({ y: 50, duration: 1.0, delay: 0.1, stagger: 0.08 });

  return (
    <section className={styles.section} id="services">
      <div ref={headerRef} className={styles.header}>
        <div className={styles.tag}>[ OUR CAPABILITIES & SERVICES ]</div>
      </div>
      <div ref={listRef} className={styles.list}>
        {servicesData.map((service, index) => (
          <ServiceItem key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
