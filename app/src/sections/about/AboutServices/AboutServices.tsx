import { motion } from 'framer-motion';
import { aboutServicesStyles } from './AboutServices.styles';
import type { AboutServicesProps } from './AboutServices.types';

const services = [
  {
    title: 'WEB DEVELOPMENT',
    level: 'PRO',
    description:
      'High-performance web applications built with modern technologies. Fast, responsive, and structured for scalability from day one.',
  },
  {
    title: 'MOBILE APP DEVELOPMENT',
    level: 'PRO',
    description:
      'Cross-platform mobile applications built with Flutter, delivering smooth performance and clean architecture for both iOS and Android.',
  },
  {
    title: 'MVP DEVELOPMENT',
    level: 'PRO',
    description:
      'Launch-ready MVPs focused on validation and scalability. Built cleanly so your product can grow without being rebuilt.',
  },
  {
    title: 'AUTOMATION & WORKFLOWS',
    level: 'PRO',
    description:
      'Smart automation systems using APIs and workflow tools to eliminate repetitive tasks and connect your stack efficiently.',
  },
  {
    title: 'WORDPRESS & CMS',
    level: 'NOOB',
    description:
      'Custom WordPress and CMS solutions that are clean, manageable, and built with performance in mind.',
  },
];

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
            <span className={aboutServicesStyles.tag}>[ SERVICES ]</span>
            <h2 className={aboutServicesStyles.title}>STUFF I DO</h2>
          </motion.div>

          {/* Service Items — NO full-width divider lines */}
          <div className={aboutServicesStyles.listWrapper}>
            {services.map((service, index) => (
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
