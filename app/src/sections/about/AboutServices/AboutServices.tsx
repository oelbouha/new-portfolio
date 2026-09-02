import { motion } from 'framer-motion';
import { aboutData } from '@/data/about.data';
import { aboutServicesStyles } from './AboutServices.styles';
import type { AboutServicesProps } from './AboutServices.types';

export function AboutServices({ className = '' }: AboutServicesProps) {
  return (
    <section className={`${aboutServicesStyles.section} ${className}`}>
      <div className={aboutServicesStyles.container}>
        <div className={aboutServicesStyles.layoutRow}>
          {/* Sticky Left Label */}
          <motion.div
            className={aboutServicesStyles.stickyCol}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={aboutServicesStyles.tag}>{aboutData.services.tag}</span>
            <h2 className={aboutServicesStyles.title}>{aboutData.services.title}</h2>
          </motion.div>

          {/* Service Items */}
          <div className={aboutServicesStyles.listWrapper}>
            {aboutData.services.items.map((service, index) => (
              <motion.div
                key={service.title}
                className={aboutServicesStyles.itemCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className={aboutServicesStyles.itemHeader}>
                  <h3 className={aboutServicesStyles.itemTitle}>{service.title}</h3>
                  <span className={aboutServicesStyles.itemBadge}>{service.level}</span>
                </div>
                <p className={aboutServicesStyles.itemDesc}>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
