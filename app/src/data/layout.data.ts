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
          {
            label: 'GitHub ↗',
            href: 'https://github.com/oelbouha',
            external: true,
          },
          {
            label: 'LinkedIn ↗',
            href: 'https://linkedin.com/in/outman',
            external: true,
          },
        ],
      },

      {
        title: 'Stack',
        links: [
          { label: 'React / Next.js', href: '#' },
          { label: 'Django / PostgreSQL', href: '#' },
          { label: 'Flutter', href: '#' },
          { label: 'n8n / Make / Zapier', href: '#' },
        ],
      },

      {
        title: 'Contact',
        links: [
          {
            label: 'outmanelbouhali5@gmail.com',
            href: 'mailto:outmanelbouhali5@gmail.com',
            external: true,
          },
        ],
      },

      {
        title: '',
        links: [
          { label: 'Morocco · Worldwide', href: '#' },
          { label: '©2026 Outman Elbouhali', href: '#' },
        ],
      },
    ],
  },

  contactOverlay: {
    badge: '// GET IN TOUCH',

    headingLine1: 'HAVE A PROJECT',
    headingLine2: 'IN MIND?',

    subtitle:
      "Whether you're building a new product, improving an existing one, or automating a workflow, feel free to reach out. Let's talk about it.",

    emailLabel: 'Direct Email',
    emailValue: 'outmanelbouhali5@gmail.com',

    locationLabel: 'Location',
    locationValue: 'Morocco · Remote Worldwide',

    statusLabel: 'Status',
    statusValue: 'Available for projects',

    form: {
      namePlaceholder: 'Your Name *',
      emailPlaceholder: 'Your Email *',
      messagePlaceholder: 'Tell me about your project... *',
      submitButton: 'Send Message',
    },
  },
};