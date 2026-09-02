export const layoutData = {
  nav: {
    columns: [
      {
        title: 'Pages',
        links: [
          { label: 'Home', href: '/' },
          { label: 'Work', href: '/work' },
          { label: 'Services', href: '/#services' },
          { label: 'About', href: '/about' },
        ],
      },
      {
        title: 'Social',
        links: [
          { label: 'GitHub ↗', href: 'https://github.com/oelbouha', external: true },
          { label: 'LinkedIn ↗', href: '#', external: true },
          { label: 'Dribbble ↗', href: '#', external: true },
          { label: 'Instagram ↗', href: '#', external: true },
        ],
      },
      {
        title: 'Studio',
        links: [
          { label: 'Based in Morocco', href: '#' },
          { label: 'Available worldwide', href: '#' },
        ],
      },
      {
        title: 'Contact',
        links: [
          { label: 'outmanelbouhali5@gmail.com', href: 'mailto:outmanelbouhali5@gmail.com', external: true },
        ],
      },
      {
        title: '',
        links: [
          { label: 'Legal', href: '#' },
          { label: '©2025 All rights reserved', href: '#' },
        ],
      },
    ],
  },
  contactOverlay: {
    badge: '// GET IN TOUCH',
    headingLine1: 'HAVE A PROJECT',
    headingLine2: 'IN MIND?',
    subtitle: "Feel free to reach out for collaborations, project inquiries, or just to say hello. I'll get back to you within 24 hours.",
    emailLabel: 'Direct Email',
    emailValue: 'outmanelbouhali5@gmail.com',
    locationLabel: 'Location',
    locationValue: 'Morocco (Remote Worldwide)',
    statusLabel: 'Status',
    statusValue: 'Available for Q3/Q4 2026',
    form: {
      namePlaceholder: 'Your Name *',
      emailPlaceholder: 'Your Email *',
      messagePlaceholder: 'Tell me about your project... *',
      submitButton: 'Send Message',
    },
  },
};
