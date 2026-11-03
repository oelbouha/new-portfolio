/**
 * Reusable SEO Head component with native React 19 metadata support
 * and dynamic client-side updates.
 * Injects meta tags, canonical links, OpenGraph, Twitter, and JSON-LD schemas.
 */

import { useEffect } from 'react';
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

  useEffect(() => {
    if (typeof document === 'undefined') return;

    // Update document title
    document.title = seo.title;

    // Helper to create or update meta tag
    const setMeta = (nameOrProperty: string, key: 'name' | 'property', value: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[${key}="${nameOrProperty}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(key, nameOrProperty);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    setMeta('description', 'name', seo.description);
    setMeta('robots', 'name', seo.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large');
    setMeta('og:title', 'property', seo.title);
    setMeta('og:description', 'property', seo.description);
    setMeta('og:url', 'property', canonicalUrl);
    setMeta('og:image', 'property', ogImage);
    setMeta('twitter:title', 'name', seo.title);
    setMeta('twitter:description', 'name', seo.description);
    setMeta('twitter:image', 'name', ogImage);

    // Canonical link
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
  }, [seo, canonicalUrl, ogImage]);

  return (
    <>
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
