/**
 * JSON-LD Schema Generators for Technical SEO.
 * Generates Person, WebSite, Service, ProfessionalService,
 * BreadcrumbList, FAQPage, and CreativeWork schemas.
 */

import { siteConfig } from '@/data/site';
import type { FaqItem, ServiceDetail, ProjectItem } from '@/data/types';

export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    jobTitle: siteConfig.role,
    url: siteConfig.domain,
    image: `${siteConfig.domain}/profile.png`,
    sameAs: [
      siteConfig.socialLinks.github,
      siteConfig.socialLinks.linkedin,
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tétouan',
      addressCountry: 'MA',
    },
    knowsAbout: [
      'Full-Stack Web Development',
      'React',
      'Next.js',
      'TypeScript',
      'Flutter Mobile Development',
      'Django & Python',
      'PostgreSQL',
      'Docker',
      'n8n Workflow Automation',
      'WordPress Development',
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.domain,
    author: {
      '@type': 'Person',
      name: siteConfig.name,
    },
    inLanguage: siteConfig.language,
  };
}

export function generateBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.domain}${item.path}`,
    })),
  };
}

export function generateFaqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateServiceSchema(service: ServiceDetail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    name: service.title,
    description: service.shortDescription,
    provider: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.domain,
    },
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.deliverables.title,
      itemListElement: service.deliverables.items.map((del) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: del.title,
          description: del.description,
        },
      })),
    },
  };
}

export function generateProfessionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `${siteConfig.name} - ${siteConfig.role}`,
    url: siteConfig.domain,
    image: `${siteConfig.domain}/images/icon.png`,
    email: siteConfig.email,
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tétouan',
      addressCountry: 'Morocco',
    },
  };
}

export function generateProjectSchema(project: ProjectItem) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    headline: project.tagline,
    description: project.overview || project.description,
    applicationCategory: project.category,
    author: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.domain,
    },
    image: `${siteConfig.domain}${project.coverImage.src}`,
    url: project.website || `${siteConfig.domain}/work/${project.slug}`,
  };
}

export function generateAboutPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Outman Elbouhali',
    description:
      'Learn about Outman Elbouhali: background in software engineering (1337 / 42 Network), expertise across React, Flutter, Django, and production infrastructure.',
    url: `${siteConfig.domain}/about`,
    mainEntity: generatePersonSchema(),
  };
}

export function generateCollectionPageSchema(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url: `${siteConfig.domain}${path}`,
  };
}
