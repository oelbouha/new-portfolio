import { useState } from 'react';
import { motion } from 'framer-motion';
import { ThemeToggle } from '@/components/ThemeToggle';
import { FullscreenMenu } from '@/components/layout/FullscreenMenu';
import { Footer } from '@/components/layout/Footer';
import { BsArrowRight } from 'react-icons/bs';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }),
};

const fadeSlideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
};

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

const experience = [
  {
    company: 'FREELANCE',
    location: 'REMOTE',
    role: 'FULL STACK DEVELOPER',
    period: '2026',
    description:
      'Skatys — a freelance full-stack web app built with Next.js and Django, backed by PostgreSQL and deployed on a VPS with Docker and NGINX.',
  },
  {
    company: 'REVO ADVERTISING AGENCY',
    location: 'MOROCCO',
    role: 'WEB DEVELOPER INTERN',
    period: '2025',
    description:
      'Assisted in building and maintaining client websites. Worked on frontend implementation and UI improvements. Collaborated with design and marketing teams to deliver real-world agency projects.',
  },
  {
    company: '1337 (42 NETWORK)',
    location: 'MOROCCO',
    role: 'SOFTWARE ENGINEERING STUDENT',
    period: '2022 — PRESENT',
    description:
      'Intensive peer-to-peer learning program covering systems programming, algorithms, networking, and full-stack development in C, C++, and modern web technologies. Built projects like Webserv (HTTP server), Inception (Docker), and multiplayer Pong.',
  },
];

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* ====== TOP BAR (same as Home hero-topbar with same padding) ====== */}
        <div style={{ padding: '24px 40px' }} className="max-md:!px-5 max-md:!py-4">
          <motion.div
            className="hero-topbar"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0.3}
          >
            <div className="hero-topbar-left">
              <a href="/" className="hero-local-label" style={{ textDecoration: 'none' }}>
                TÉTOUAN, MOROCCO
              </a>
            </div>

            <button
              className="hero-menu-dots"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </button>

            <div className="hero-topbar-right">
              <ThemeToggle />
            </div>
          </motion.div>
        </div>

        {/* ====== HERO SECTION ====== */}
        <section className="relative flex flex-col items-center justify-center pt-10 pb-16 px-4 overflow-hidden">
          <motion.h1
            className="hero-headline text-center"
            variants={fadeSlideUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <span className="hero-line">WAIT.</span>
            <span className="hero-line">WHO THIS GUY?</span>
          </motion.h1>

          {/* Oval Profile Photo — like bdsn.club reference */}
          <motion.div
            className="mt-8 w-52 h-80 sm:w-64 sm:h-96 md:w-72 md:h-[28rem] overflow-hidden rounded-[8rem]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="/profile.png"
              alt="Outman Elbouhali"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </section>

        {/* ====== BIO SECTION ====== */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground uppercase leading-snug tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              BASED IN MOROCCO, I'M A FULL STACK DEVELOPER BUILDING CLEAN, SCALABLE WEB AND MOBILE APPLICATIONS. I WORK ACROSS THE FULL STACK — FROM UI DESIGN TO BACKEND ARCHITECTURE AND DEPLOYMENT — WITH REACT, NEXT.JS, DJANGO, AND MORE.
            </motion.p>

            <motion.p
              className="mt-8 text-sm sm:text-base text-foreground-secondary max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              With a strong foundation from 1337 (42 Network), I approach development with a systems mindset: clean architecture, performance awareness, and maintainable code. Whether it's a web platform, a mobile app, or an automation workflow, I build solutions that are ready for production.
            </motion.p>

            <motion.a
              href="/resume.pdf"
              className="inline-flex items-center gap-3 mt-10 px-6 py-3 border border-foreground/20 rounded-full text-sm font-medium text-foreground hover:bg-foreground/5 transition-colors uppercase tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Download Resume
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </section>

        {/* ====== STUFF I DO SECTION ====== */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
              {/* Sticky Left Label */}
              <motion.div
                className="lg:sticky lg:top-28 lg:self-start lg:w-56 flex-shrink-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl font-black text-foreground uppercase tracking-tight">
                  STUFF I DO
                </h2>
              </motion.div>

              {/* Service Items */}
              <div className="flex-1">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    className="py-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                  >
                    {/* Title + line divider in one row */}
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-lg sm:text-xl font-bold tracking-wider text-foreground uppercase whitespace-nowrap">
                        {service.title}
                      </h3>
                      <div className="flex-1 h-px bg-border"></div>
                    </div>
                    <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* ====== EXPERIENCE & EDUCATION SECTION ====== */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
              {/* Sticky Left Label */}
              <motion.div
                className="lg:sticky lg:top-28 lg:self-start lg:w-56 flex-shrink-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl font-black text-foreground uppercase tracking-tight leading-tight">
                  EXPERIENCE &<br />EDUCATION
                </h2>
              </motion.div>

              {/* Experience Items */}
              <div className="flex-1">
                {experience.map((exp, index) => (
                  <motion.div
                    key={exp.company}
                    className="py-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Company + role + line divider in one row */}
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-lg sm:text-xl font-bold tracking-wider text-foreground uppercase whitespace-nowrap">
                        {exp.company}
                      </h3>
                      <span className="text-sm font-medium tracking-wider text-foreground-secondary uppercase whitespace-nowrap">
                        {exp.role}
                      </span>
                      <div className="flex-1 h-px bg-border"></div>
                    </div>
                    <p className="text-xs text-foreground-secondary uppercase tracking-wider mb-4">
                      {exp.period}
                    </p>
                    <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed whitespace-pre-line">
                      {exp.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ====== BOLD STATEMENT + CTA (like Footer) ====== */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.p
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase leading-tight tracking-tight mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              BEYOND WRITING CODE, I FOCUS ON BUILDING PRODUCTS
              THAT ARE STRUCTURED, RELIABLE, AND READY FOR REAL USERS.
            </motion.p>

            <motion.p
              className="text-xl sm:text-2xl text-foreground-secondary mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Ready to bring your ideas to life?
            </motion.p>

            <motion.p
              className="text-3xl sm:text-4xl font-medium text-accent mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get In Touch
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="mailto:outmanelbouhali5@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-primary-foreground font-semibold rounded-full transition-all duration-300 hover:brightness-110 group"
              >
                <span className="inline-flex items-center gap-3">
                  Contact Me
                  <BsArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>

      <FullscreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
