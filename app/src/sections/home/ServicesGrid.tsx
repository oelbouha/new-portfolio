import { motion } from 'framer-motion';

const services = [
  {
    category: 'WEB DEVELOPMENT',
    title: 'Building Modern Web Applications with React',
    description: 'Full-stack web development using React.js, JavaScript, and modern frameworks to create responsive, high-performance applications.'
  },
  {
    category: 'WORDPRESS DEVELOPMENT',
    title: 'Custom WordPress Websites and Solutions',
    description: 'Professional WordPress websites tailored to your needs, from simple blogs to complex e-commerce platforms with custom themes and plugins.'
  },
  {
    category: 'AUTOMATION & INTEGRATION',
    title: 'Workflow Automation with n8n and Make',
    description: 'Streamline your business processes with powerful automation workflows using n8n and Make, connecting your tools and eliminating repetitive tasks.'
  },
  {
    category: 'MOBILE DEVELOPMENT',
    title: 'Cross-Platform Mobile Apps with Flutter',
    description: 'Native mobile applications built with Flutter (Dart) for iOS and Android, delivering seamless user experiences across platforms.'
  },
  {
    category: 'BACKEND & INFRASTRUCTURE',
    title: 'Scalable Backend Systems and DevOps',
    description: 'Building robust backend systems with Docker, NGINX, MariaDB, MongoDB, and WebSocket for real-time applications.'
  },
  {
    category: 'SYSTEM PROGRAMMING',
    title: 'Low-Level Programming and Network Solutions',
    description: 'Custom HTTP servers, network programming, and system-level applications using C/C++ with focus on performance and efficiency.'
  }
];

export function ServicesGrid() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Label with line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4">
            <span className="text-xs font-medium tracking-wider text-foreground-secondary uppercase">Our Services</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>
        </motion.div>

        {/* 3-Column Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Sticky Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-20 lg:self-start"
          >
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-3xl p-8 sm:p-10 lg:p-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-2">
                Our Approach to
              </h2>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent">
                Design and Build
              </h2>
            </div>
          </motion.div>

          {/* Right Two Columns - Service Cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-2 grid md:grid-cols-2 gap-6"
          >
            {services.map((service) => (
              <motion.div
                key={service.category}
                variants={item}
                className="group relative bg-card border border-border rounded-2xl p-8 sm:p-10 hover:border-accent/50 transition-all duration-300"
              >
                {/* Category Label */}
                <p className="text-xs font-medium tracking-wider text-foreground-secondary uppercase mb-4">
                  {service.category}
                </p>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-foreground-secondary text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
