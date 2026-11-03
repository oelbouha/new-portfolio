/**
 * Reusable SEO Head component using react-helmet-async.
 * Injects meta tags, canonical links, OpenGraph, Twitter, and JSON-LD schemas
 * into the document <head>.
 */

import { Helmet } from 'react-helmet-async';
import { siteConfig } from '@/data/site';
import type { SeoData } from '@/data/types';

interface SeoHeadProps {
  seo: SeoData;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

export function SeoHead({ seo, jsonLd }: SeoHeadProps) {
  const canonicalUrl = `${siteConfig.domain}${seo.path.startsWith('/') ? seo.path : `/${seo.path}`}`;
  const ogImage = seo.ogImage.startsWith('http')
    ? seo.ogImage
    : `${siteConfig.domain}${seo.ogImage}`;

  const schemas = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta
        name="robots"
        content={seo.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'}
      />

      {/* Open Graph */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content={siteConfig.twitterHandle} />

      {/* Structured JSON-LD */}
      {schemas.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
        >
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
