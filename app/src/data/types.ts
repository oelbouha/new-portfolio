/**
 * TypeScript interfaces for all content and SEO data.
 * Every content file in src/data/ is strictly typed against these definitions.
 */

export interface SeoData {
  title: string;
  description: string;
  path: string;
  ogImage: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  schemaType: 'Person' | 'WebSite' | 'ProfessionalService' | 'Service' | 'CollectionPage' | 'AboutPage' | 'ContactPage';
  noindex?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface SiteConfig {
  name: string;
  legalName: string;
  role: string;
  domain: string;
  email: string;
  location: string;
  language: string;
  twitterHandle: string;
  defaultOgImage: string;
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
  };
}

export interface ClockItem {
  city: string;
  tz: string;
}

export interface NavLinkItem {
  label: string;
  href: string;
  external?: boolean;
  isServicesDropdown?: boolean;
}

export interface LayoutConfig {
  navbar: {
    brandName: string;
    brandHoverText: string;
    tickerText: string;
    clocks: ClockItem[];
    ctaLabel: string;
    ctaHoverLabel: string;
    menuLabel: string;
    menuOpenLabel: string;
    menuCloseLabel: string;
    themeDarkLabel: string;
    themeLightLabel: string;
  };
  fullscreenMenu: {
    tagline: string;
    locationName: string;
    col1: {
      label: string;
      href: string;
      img: string;
    }[];
    col2: {
      label: string;
      href: string;
      img: string;
    }[];
  };
  footer: {
    techStacks: string[];
    banner: {
      subtitle: string;
      headingLine1: string;
      headingLine2: string;
      buttonText: string;
      avatar: {
        src: string;
        alt: string;
      };
    };
    brandBadge: {
      icon: {
        src: string;
        alt: string;
      };
      symbol: string;
      text: string;
    };
    columns: {
      title: string;
      links: {
        label: string;
        href: string;
        external?: boolean;
      }[];
    }[];
    bottomRow: {
      copyright: string;
      legalNotice: string;
      location: string;
    };
  };
}

export interface UiStrings {
  buttons: {
    sayHello: string;
    letsTalk: string;
    bookCall: string;
    sendMsg: string;
    backHome: string;
    visitWebsite: string;
    openProject: string;
    continueBrowsing: string;
    allProjects: string;
    viewAllServices: string;
    exploreService: string;
  };
  labels: {
    credits: string;
    servicesScope: string;
    projectOverview: string;
    client: string;
    year: string;
    stack: string;
    nextProject: string;
    projectInfo: string;
    strategyInsight: string;
    selectedProjects: string;
    playground: string;
    portfolioBadge: string;
    servicesTag: string;
    faqTag: string;
    processTag: string;
    deliverablesTag: string;
    techStackTag: string;
    audienceTag: string;
    relatedServicesTag: string;
    relevantProjectsTag: string;
  };
  contactModal: {
    badge: string;
    headlineLine1: string;
    headlineLine2: string;
    subheadlineLine1: string;
    subheadlineLine2: string;
    spotlightImage: string;
    fields: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      interestLabel: string;
      interestOptions: string[];
      messageLabel: string;
      messagePlaceholder: string;
    };
    success: {
      title: string;
      message: string;
    };
  };
  notFound: {
    badge: string;
    code: string;
    message: string;
    button: string;
  };
  preloader: {
    portfolio: string;
    loading: string;
    status: string;
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  duration: string;
  description: string;
}

export interface DeliverableItem {
  title: string;
  description: string;
}

export interface AudienceItem {
  title: string;
  description: string;
}

export interface TechStackItem {
  category: string;
  technologies: string[];
}

export interface ServiceDetail {
  slug: string;
  title: string;
  navLabel: string;
  shortDescription: string;
  seo: SeoData;
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    ctaButton: string;
    image: {
      src: string;
      alt: string;
    };
  };
  deliverables: {
    tag: string;
    title: string;
    items: DeliverableItem[];
  };
  techStack: {
    tag: string;
    title: string;
    items: TechStackItem[];
  };
  process: {
    tag: string;
    title: string;
    steps: ProcessStep[];
  };
  relevantProjectTags: string[];
  audience: {
    tag: string;
    title: string;
    items: AudienceItem[];
  };
  faq: {
    tag: string;
    title: string;
    items: FaqItem[];
  };
  cta: {
    headline: string;
    subheadline: string;
    buttonText: string;
  };
  relatedServiceSlugs: string[];
}

export interface ServicesOverviewPage {
  seo: SeoData;
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaButton: string;
  };
  intro: {
    tag: string;
    statement: string;
  };
  faq: {
    tag: string;
    title: string;
    items: FaqItem[];
  };
  cta: {
    line1: string;
    line2: string;
    desc: string;
    buttonText: string;
  };
}

export interface HomePage {
  seo: SeoData;
  hero: {
    words: string[];
  };
  intro: {
    tag: string;
    statement: string;
  };
  video: {
    src: string;
    type: string;
  };
  playground: {
    label: string;
    title: string;
    badge: string;
    href: string;
  };
  servicesTeaser: {
    title: string;
    items: {
      slug: string;
      name: string;
      sub: string;
      image: {
        src: string;
        alt: string;
      };
    }[];
  };
  aboutTeaser: {
    label: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
  };
  cta: {
    desc: string;
    buttonText: string;
    line1: string;
    line2: string;
  };
}

export interface AboutPage {
  seo: SeoData;
  hero: {
    line1: string;
    line2: string;
    line3: string;
    image: {
      src: string;
      alt: string;
    };
  };
  bio: {
    tag: string;
    statement: string;
    paragraph: string;
  };
  services: {
    tag: string;
    title: string;
    items: {
      title: string;
      level: string;
      description: string;
    }[];
  };
  experience: {
    tag: string;
    title: string;
    items: {
      company: string;
      location: string;
      role: string;
      period: string;
      description: string;
    }[];
  };
  cta: {
    statement: string;
    subtitle: string;
    buttonText: string;
  };
}

export interface ProjectCredit {
  role: string;
  name: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectItem {
  slug: string;
  title: string;
  category: string;
  year: string;
  tagline: string;
  description: string;
  overview: string;
  conclusion: string;
  thumbnail: ProjectImage;
  heroImage: ProjectImage;
  coverImage: ProjectImage;
  images: ProjectImage[];
  services: string[];
  client: string;
  website: string;
  tags: string[];
  serviceSlugs: string[];
  link: string;
  quote?: string;
  quoteAuthor?: string;
  quoteRole?: string;
  credits?: ProjectCredit[];
}

export interface ProjectsPage {
  seo: SeoData;
  header: {
    title: string;
    badge: string;
    description: string;
  };
  projects: ProjectItem[];
}

export interface ContactPage {
  seo: SeoData;
  title: string;
  subtitle: string;
}

export interface NotFoundPage {
  seo: SeoData;
  code: string;
  badge: string;
  message: string;
  backHomeText: string;
}
