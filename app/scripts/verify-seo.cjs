const http = require('http');

function fetch(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ statusCode: res.statusCode, headers: res.headers, body: data }));
    }).on('error', reject);
  });
}

async function verify() {
  console.log('=== VERIFYING SERVER RESPONSES ===');
  const home = await fetch('http://127.0.0.1:3008/');
  const sitemap = await fetch('http://127.0.0.1:3008/sitemap.xml');
  const robots = await fetch('http://127.0.0.1:3008/robots.txt');

  console.log('Home status:', home.statusCode);
  console.log('Sitemap status:', sitemap.statusCode, 'Length:', sitemap.body.length);
  console.log('Robots status:', robots.statusCode, 'Body:\n' + robots.body.trim());

  const html = home.body;
  console.log('\n=== PARSING RAW HOME HTML (curl) ===');
  console.log('Raw HTML size:', html.length, 'bytes');

  // Title
  const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1] : '';
  console.log('Title (' + title.length + ' chars):', title);

  // Meta Description
  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i)
    || html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
  const desc = descMatch ? descMatch[1] : '';
  console.log('Meta Description (' + desc.length + ' chars):', desc);

  // Canonical
  const canonMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
  console.log('Canonical:', canonMatch ? canonMatch[1] : 'MISSING');

  // OG tags
  const ogTitle = (html.match(/property=["']og:title["'][^>]*content=["']([^"']*)["']/i) || [])[1];
  const ogDesc = (html.match(/property=["']og:description["'][^>]*content=["']([^"']*)["']/i) || [])[1];
  const ogImage = (html.match(/property=["']og:image["'][^>]*content=["']([^"']*)["']/i) || [])[1];
  const twitterCard = (html.match(/name=["']twitter:card["'][^>]*content=["']([^"']*)["']/i) || [])[1];
  console.log('og:title:', ogTitle);
  console.log('og:description:', ogDesc);
  console.log('og:image:', ogImage);
  console.log('twitter:card:', twitterCard);

  // JSON-LD
  const jsonLdMatches = html.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi) || [];
  console.log('\nJSON-LD scripts found:', jsonLdMatches.length);
  jsonLdMatches.forEach((s, i) => {
    const raw = s.replace(/<[^>]+>/g, '');
    try {
      const parsed = JSON.parse(raw);
      console.log('JSON-LD #' + (i+1) + ' @type:', parsed['@type'], '| name:', parsed.name);
    } catch(e) {
      console.log('JSON-LD #' + (i+1) + ' parse error:', e.message);
    }
  });

  // H1
  const h1s = (html.match(/<h1[\s\S]*?<\/h1>/gi) || []).map(h => h.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
  console.log('\nH1 count:', h1s.length);
  h1s.forEach((h, i) => console.log('  H1 #' + (i+1) + ':', h));

  // H2
  const h2s = (html.match(/<h2[\s\S]*?<\/h2>/gi) || []).map(h => h.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
  console.log('\nH2 count:', h2s.length);
  h2s.forEach((h, i) => console.log('  H2 #' + (i+1) + ':', h));

  // Paragraphs
  const ps = (html.match(/<p[\s\S]*?<\/p>/gi) || []).map(p => p.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
  console.log('\nParagraphs (<p>) count:', ps.length);
  ps.forEach((p, i) => console.log('  P #' + (i+1) + ' (' + p.split(' ').filter(Boolean).length + ' words):\n    ' + p));

  const pWordsTotal = ps.reduce((acc, p) => acc + p.split(' ').filter(Boolean).length, 0);
  console.log('\nTotal words inside <p> elements:', pWordsTotal);

  // All visible text words (excluding script/style)
  const textOnly = html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const allWords = textOnly.split(' ').filter(Boolean);
  console.log('Total visible text word count in raw HTML:', allWords.length);

  // Links
  const hrefs = (html.match(/href=["']([^"']+)["']/gi) || []).map(m => m.replace(/href=["']|["']/g, ''));
  const internal = hrefs.filter(h => h.startsWith('/') || h.startsWith('#'));
  const external = hrefs.filter(h => h.startsWith('http://') || h.startsWith('https://'));
  console.log('Internal links count:', internal.length);
  console.log('External links count:', external.length, external);
}

verify().catch(console.error);
