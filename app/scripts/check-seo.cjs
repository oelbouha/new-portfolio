// scripts/check-seo.js
/**
 * Build-time SEO validation script.
 * Phase 1 (pre-build): Checks data-layer title (<=60) and description (120-160).
 * Phase 2 (post-build): Checks exactly one <h1> per page, no <meta name="keywords">.
 *
 * Usage:
 *   node scripts/check-seo.js pre    — runs before next build
 *   node scripts/check-seo.js post   — runs after next build
 */
const fs = require('fs');
const path = require('path');

const phase = process.argv[2] || 'pre';
let ok = true;

function fail(msg) {
  console.error(`  ✗ ${msg}`);
  ok = false;
}
function pass(msg) {
  console.log(`  ✓ ${msg}`);
}

// ── Phase 1: Data-layer metadata checks ──────────────────────
if (phase === 'pre') {
  console.log('\n── SEO Pre-Build Checks ──\n');

  const dataFiles = [
    { file: 'src/data/pages/home.ts', label: '/' },
    { file: 'src/data/pages/about.ts', label: '/about' },
    { file: 'src/data/pages/projects.ts', label: '/work' },
    { file: 'src/data/services/index.ts', label: '/services' },
    { file: 'src/data/services/web-application-development.ts', label: '/services/web-application-development' },
    { file: 'src/data/services/flutter-app-development.ts', label: '/services/flutter-app-development' },
    { file: 'src/data/services/django-python-development.ts', label: '/services/django-python-development' },
    { file: 'src/data/services/n8n-automation.ts', label: '/services/n8n-automation' },
    { file: 'src/data/services/wordpress-development.ts', label: '/services/wordpress-development' },
  ];

  for (const { file, label } of dataFiles) {
    const abs = path.resolve(file);
    if (!fs.existsSync(abs)) {
      fail(`${label}: data file not found: ${file}`);
      continue;
    }
    const content = fs.readFileSync(abs, 'utf8');

    // Extract SEO block title
    const titleMatch = content.match(/seo:\s*\{[^}]*?title:\s*['\u0060]([^'\u0060]+)['\u0060]/s);
    // Extract SEO block description (handles multiline)
    const descMatch = content.match(/seo:\s*\{[^}]*?description:\s*\n?\s*['\u0060]([^'\u0060]+)['\u0060]/s);

    if (!titleMatch) {
      fail(`${label}: could not parse seo.title from ${file}`);
    } else {
      const t = titleMatch[1].trim();
      if (t.length > 60) fail(`${label}: title is ${t.length} chars (max 60): "${t}"`);
      else pass(`${label}: title OK (${t.length} chars)`);
    }

    if (!descMatch) {
      fail(`${label}: could not parse seo.description from ${file}`);
    } else {
      const d = descMatch[1].replace(/\s+/g, ' ').trim();
      if (d.length < 120) fail(`${label}: description is ${d.length} chars (min 120): "${d}"`);
      else if (d.length > 160) fail(`${label}: description is ${d.length} chars (max 160): "${d}"`);
      else pass(`${label}: description OK (${d.length} chars)`);
    }
  }

  // Check no <meta name="keywords"> in source
  console.log('');
  function grepMetaKeywords(dir) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== '.next') {
        grepMetaKeywords(full);
      } else if (/\.(tsx?|jsx?)$/.test(entry.name)) {
        const data = fs.readFileSync(full, 'utf8');
        if (/meta\s+name\s*=\s*['"]keywords['"]/i.test(data)) {
          fail(`<meta name="keywords"> found in ${full}`);
        }
      }
    }
  }
  grepMetaKeywords(path.resolve('src'));
  pass('No <meta name="keywords"> found in source');
}

// ── Phase 2: Post-build HTML checks ──────────────────────────
if (phase === 'post') {
  console.log('\n── SEO Post-Build Checks ──\n');

  const htmlDir = path.resolve('.next/server/app');
  if (!fs.existsSync(htmlDir)) {
    fail(`.next/server/app not found — did next build run?`);
    process.exit(1);
  }

  // Skip these known non-page HTML files
  const skipFiles = new Set(['_not-found.html', 'opengraph-image.html']);

  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.name.endsWith('.html') && !skipFiles.has(entry.name)) {
        const html = fs.readFileSync(full, 'utf8');
        const h1s = (html.match(/<h1[\s>]/gi) || []);
        const rel = path.relative(htmlDir, full);

        if (h1s.length === 0) {
          fail(`${rel}: no <h1> found`);
        } else if (h1s.length > 1) {
          fail(`${rel}: ${h1s.length} <h1> tags found (expected 1)`);
        } else {
          pass(`${rel}: exactly 1 <h1>`);
        }

        // Check no keywords meta in HTML output
        if (/meta\s+name\s*=\s*['"]keywords['"]/i.test(html)) {
          fail(`${rel}: <meta name="keywords"> found in output HTML`);
        }
      }
    }
  }
  walk(htmlDir);
}

console.log('');
if (!ok) {
  console.error('SEO validation FAILED. Fix the issues above.');
  process.exit(1);
} else {
  console.log('SEO validation PASSED.');
}
