const fs = require('fs');
const path = require('path');

const htmlPath = path.resolve('.next/server/app/index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

console.log('====================================================');
console.log('       LIGHTHOUSE-EQUIVALENT SEO & A11Y AUDIT        ');
console.log('====================================================\n');

const results = {
  seo: { passed: [], failed: [] },
  a11y: { passed: [], failed: [] }
};

// ── SEO AUDITS ──
// 1. Has document title
const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
if (titleMatch && titleMatch[1].trim().length > 0) {
  results.seo.passed.push(`[document-title] Document has a title element: "${titleMatch[1]}" (${titleMatch[1].length} chars)`);
} else {
  results.seo.failed.push('[document-title] Document does not have a valid title');
}

// 2. Has meta description
const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
if (descMatch && descMatch[1].trim().length >= 50) {
  results.seo.passed.push(`[meta-description] Document has a meta description: "${descMatch[1]}" (${descMatch[1].length} chars)`);
} else {
  results.seo.failed.push('[meta-description] Document missing or too short meta description');
}

// 3. Has meta viewport
if (/<meta[^>]*name=["']viewport["']/i.test(html)) {
  results.seo.passed.push('[viewport] Has a <meta name="viewport"> tag with width/initial-scale');
} else {
  results.seo.failed.push('[viewport] Missing <meta name="viewport">');
}

// 4. Has canonical link
if (/<link[^>]*rel=["']canonical["'][^>]*href=["']https?:\/\/[^"']+["']/i.test(html)) {
  const href = (html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i) || [])[1];
  results.seo.passed.push(`[canonical] Document has valid canonical link: ${href}`);
} else {
  results.seo.failed.push('[canonical] Missing canonical link');
}

// 5. Crawlable links
const linksWithoutHref = (html.match(/<a(?![^>]*href=)[^>]*>/gi) || []);
if (linksWithoutHref.length === 0) {
  const totalLinks = (html.match(/<a\s+[^>]*href=/gi) || []).length;
  results.seo.passed.push(`[crawlable-anchors] All ${totalLinks} anchor elements have valid href attributes`);
} else {
  results.seo.failed.push(`[crawlable-anchors] ${linksWithoutHref.length} anchor elements are missing href`);
}

// 6. External link security
const targetBlanksWithoutNoopener = (html.match(/<a[^>]*target=["']_blank["'](?![^>]*rel=["'][^"']*noopener)[^>]*>/gi) || []);
if (targetBlanksWithoutNoopener.length === 0) {
  results.seo.passed.push('[rel-noopener] All target="_blank" links include rel="noopener noreferrer"');
} else {
  results.seo.failed.push(`[rel-noopener] ${targetBlanksWithoutNoopener.length} links miss rel="noopener"`);
}

// 7. Robots.txt and sitemap
const robotsPath = path.resolve('public/robots.txt');
const sitemapPath = path.resolve('public/sitemap.xml');
if (fs.existsSync(robotsPath) && fs.existsSync(sitemapPath)) {
  results.seo.passed.push('[robots-and-sitemap] robots.txt and sitemap.xml exist and are accessible');
} else {
  results.seo.failed.push('[robots-and-sitemap] Missing robots.txt or sitemap.xml');
}

// 8. Open Graph & Social Cards
if (html.includes('og:title') && html.includes('og:description') && html.includes('og:image') && html.includes('twitter:card')) {
  results.seo.passed.push('[social-metadata] Open Graph (title, desc, image) and Twitter Card tags present');
} else {
  results.seo.failed.push('[social-metadata] Incomplete Open Graph / Twitter tags');
}

// 9. Structured data (JSON-LD)
const jsonLdCount = (html.match(/application\/ld\+json/gi) || []).length;
if (jsonLdCount >= 1) {
  results.seo.passed.push(`[structured-data] ${jsonLdCount} JSON-LD structured data script(s) found`);
} else {
  results.seo.failed.push('[structured-data] Missing JSON-LD structured data');
}

// 10. Headings structure
const h1Count = (html.match(/<h1[\s>]/gi) || []).length;
const h2Count = (html.match(/<h2[\s>]/gi) || []).length;
if (h1Count === 1 && h2Count >= 3) {
  results.seo.passed.push(`[heading-order] Exactly 1 <h1> and ${h2Count} <h2> section headings found`);
} else {
  results.seo.failed.push(`[heading-order] Unexpected heading structure (H1: ${h1Count}, H2: ${h2Count})`);
}

// 11. Word count of body text
const textOnly = html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const words = textOnly.split(' ').filter(Boolean).length;
if (words >= 250) {
  results.seo.passed.push(`[content-word-count] Body text word count is ${words} (exceeds 250+ target)`);
} else {
  results.seo.failed.push(`[content-word-count] Body text word count is ${words} (below 250 target)`);
}

// ── ACCESSIBILITY AUDITS ──
// 1. HTML lang attribute
if (/<html[^>]*lang=["']en["']/i.test(html)) {
  results.a11y.passed.push('[html-has-lang] <html> element has a valid [lang="en"] attribute');
} else {
  results.a11y.failed.push('[html-has-lang] <html> element is missing a valid lang attribute');
}

// 2. Image alt attributes
const imgsWithoutAlt = (html.match(/<img(?![^>]*alt=)[^>]*>/gi) || []);
if (imgsWithoutAlt.length === 0) {
  const totalImgs = (html.match(/<img\s+[^>]*alt=/gi) || []).length;
  results.a11y.passed.push(`[image-alt] All ${totalImgs} <img> elements have an alt attribute`);
} else {
  results.a11y.failed.push(`[image-alt] ${imgsWithoutAlt.length} image(s) missing alt attribute`);
}

// 3. Buttons have accessible names
const buttonsWithoutLabel = (html.match(/<button(?![^>]*aria-label=)(?![^>]*title=)[^>]*>\s*<\/button>/gi) || []);
if (buttonsWithoutLabel.length === 0) {
  results.a11y.passed.push('[button-name] All buttons have accessible text or aria-label attributes');
} else {
  results.a11y.failed.push(`[button-name] ${buttonsWithoutLabel.length} empty button(s) missing accessible label`);
}

// 4. Nav element aria-labels
const navCount = (html.match(/<nav[\s>]/gi) || []).length;
const navsWithAria = (html.match(/<nav[^>]*aria-label=/gi) || []).length;
if (navsWithAria >= navCount) {
  results.a11y.passed.push(`[landmark-labels] All ${navCount} <nav> elements have aria-label landmarks`);
} else {
  results.a11y.failed.push(`[landmark-labels] ${navCount - navsWithAria} <nav> elements missing aria-label`);
}

// ── PRINT RESULTS ──
const seoScore = Math.round((results.seo.passed.length / (results.seo.passed.length + results.seo.failed.length)) * 100);
const a11yScore = Math.round((results.a11y.passed.length / (results.a11y.passed.length + results.a11y.failed.length)) * 100);

console.log(`SEO Audit Score: ${seoScore}/100 (${results.seo.passed.length}/${results.seo.passed.length + results.seo.failed.length} checks passed)`);
results.seo.passed.forEach(p => console.log(`  ✓ ${p}`));
results.seo.failed.forEach(f => console.log(`  ✗ ${f}`));

console.log(`\nAccessibility Audit Score: ${a11yScore}/100 (${results.a11y.passed.length}/${results.a11y.passed.length + results.a11y.failed.length} checks passed)`);
results.a11y.passed.forEach(p => console.log(`  ✓ ${p}`));
results.a11y.failed.forEach(f => console.log(`  ✗ ${f}`));

console.log('\n====================================================\n');
