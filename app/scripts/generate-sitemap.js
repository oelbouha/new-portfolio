/**
 * Dynamic Sitemap Generator.
 * Automatically generates sitemap.xml for both /public and /dist
 * from the central services registry and projects registry.
 */

import { writeFileSync, existsSync, readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const DOMAIN = 'https://www.outmanelbouhali.online';
const TODAY = new Date().toISOString().split('T')[0];

const coreRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/services', priority: '0.9', changefreq: 'weekly' },
  { path: '/work', priority: '0.9', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
];

const serviceSlugs = [
  'web-application-development',
  'flutter-app-development',
  'django-python-development',
  'n8n-automation',
  'wordpress-development',
];

const projectsDataPath = resolve(ROOT, 'src', 'data', 'projects', 'projects.data.ts');
const projectsData = readFileSync(projectsDataPath, 'utf-8');
const projectSlugs = [...projectsData.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map(
  ([, slug]) => slug
);

const urls = [
  '<!-- Core Pages -->',
  ...coreRoutes.map(
    (r) => `  <url>
    <loc>${DOMAIN}${r.path}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  ),
  '',
  '<!-- Service Pages -->',
  ...serviceSlugs.map(
    (slug) => `  <url>
    <loc>${DOMAIN}/services/${slug}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`
  ),
  '',
  '<!-- Projects / Case Studies -->',
  ...projectSlugs.map(
    (slug) => `  <url>
    <loc>${DOMAIN}/work/${slug}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
  ),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

// Write to public/
const publicPath = resolve(ROOT, 'public', 'sitemap.xml');
writeFileSync(publicPath, xml, 'utf-8');
console.log(`[sitemap] Wrote ${publicPath}`);

// Write to dist/ if dist exists
const distDir = resolve(ROOT, 'dist');
if (existsSync(distDir)) {
  const distPath = resolve(distDir, 'sitemap.xml');
  writeFileSync(distPath, xml, 'utf-8');
  console.log(`[sitemap] Wrote ${distPath}`);
}
