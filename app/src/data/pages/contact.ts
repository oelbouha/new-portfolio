/**
 * Contact modal/page data and SEO definition.
 */

import type { ContactPage } from '../types';
import { siteConfig } from '../site';
import { keywords } from '../keywords';

export const contact: ContactPage = {
  seo: {
    title: 'Contact Outman Elbouhali | Full Stack Developer For Hire',
    description:
      'Discuss your software project, custom web application, Flutter mobile app, or n8n automation with Outman Elbouhali. Available for freelance contracts.',
    path: '/#contact',
    ogImage: siteConfig.defaultOgImage,
    primaryKeyword: keywords.contact.primary,
    secondaryKeywords: keywords.contact.secondary,
    schemaType: 'ContactPage',
  },
  title: 'HAVE A PROJECT IN MIND?',
  subtitle:
    "Whether you're building a new product from scratch, scaling backend APIs, or automating operations, let's talk.",
};
