/**
 * 404 Not Found page copy and SEO definition (noindex).
 */

import type { NotFoundPage } from '../types';
import { siteConfig } from '../site';
import { keywords } from '../keywords';

export const notFound: NotFoundPage = {
  seo: {
    title: '404 - Page Not Found | Outman Elbouhali',
    description: 'The requested page could not be found.',
    path: '/404',
    ogImage: siteConfig.defaultOgImage,
    primaryKeyword: keywords.notFound.primary,
    secondaryKeywords: keywords.notFound.secondary,
    schemaType: 'WebSite',
    noindex: true,
  },
  code: '404',
  badge: 'Page not found',
  message: 'The page you were looking for does not exist or has been relocated.',
  backHomeText: 'Back home',
};
