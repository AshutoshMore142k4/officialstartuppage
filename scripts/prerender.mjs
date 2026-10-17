// Build step: renders every route to static HTML so crawlers and AI agents that don't run JavaScript
// get the full page, its own <title>/description/canonical, and its structured data.
// Run after `vite build` and `vite build --ssr src/entry-server.tsx --outDir dist-ssr` (see package.json).
import { execSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');

const { render, ROUTES, SITE } = await import(pathToFileURL(resolve(root, 'dist-ssr/entry-server.js')).href);
const SITE_URL = SITE.url;
const template = readFileSync(resolve(dist, 'index.html'), 'utf8');
if (!template.includes('<!--app-html-->') || !template.includes('<!--app-head-->')) {
  throw new Error('dist/index.html is missing the <!--app-html--> / <!--app-head--> markers');
}

const fail = (route, msg) => {
  throw new Error(`prerender ${route}: ${msg}`);
};

function check(route, html) {
  const is404 = route === '/404';
  const title = html.match(/<title[^>]*>([^<]+)<\/title>/)?.[1];
  if (!title) fail(route, 'no <title>');
  if (!/<meta[^>]+name="description"[^>]+content="[^"]{40,}"/.test(html)) fail(route, 'no meta description');
  if (!/<h1[\s>]/.test(html)) fail(route, 'no <h1>');
  if (/undefined|\[object /.test(html.slice(0, html.indexOf('<body')))) fail(route, 'undefined/[object] leaked into <head>');

  const robots = html.match(/<meta[^>]+name="robots"[^>]+content="([^"]+)"/)?.[1] ?? '';
  if (is404 !== robots.startsWith('noindex')) fail(route, `unexpected robots "${robots}"`);
  if (!is404) {
    const canonical = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/)?.[1];
    const expected = SITE_URL + (route === '/' ? '/' : route);
    if (canonical !== expected) fail(route, `canonical ${canonical} != ${expected}`);
    const text = html.slice(html.indexOf('<body')).replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<[^>]+>/g, ' ');
    if (text.replace(/\s+/g, ' ').length < 400) fail(route, 'page body text is suspiciously short');
  }

  const blocks = [...html.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  if (!blocks.length) fail(route, 'no JSON-LD');
  const types = new Set();
  for (const block of blocks) {
    let data;
    try {
      data = JSON.parse(block);
    } catch (e) {
      fail(route, `JSON-LD does not parse (${e.message}): ${block.slice(0, 80)}`);
    }
    for (const node of data['@graph'] ?? [data]) types.add(node['@type']);
  }
  for (const t of ['Organization', 'WebSite']) if (!types.has(t)) fail(route, `JSON-LD missing ${t}`);
  // FAQPage markup must match visible content: only pages that actually show the FAQ.
  if (types.has('FAQPage') !== (route === '/' || route === '/support')) fail(route, 'FAQPage markup/visible-FAQ mismatch');
  return { title, types: [...types] };
}

const outFile = (route) =>
  route === '/' ? resolve(dist, 'index.html') : route === '/404' ? resolve(dist, '404.html') : resolve(dist, route.slice(1), 'index.html');

for (const route of [...ROUTES.map((r) => r.path), '/404']) {
  const { html, head } = await render(route);
  const page = template.replace('<!--app-head-->', () => head).replace('<!--app-html-->', () => html);
  const { title, types } = check(route, page);
  const file = outFile(route);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, page);
  console.log(`prerendered ${route.padEnd(16)} ${title}  [${types.join(', ')}]`);
}

// Sitemap from the same route list; lastmod = date of the last commit, else the build date.
let lastmod = new Date().toISOString().slice(0, 10);
try {
  lastmod = execSync('git log -1 --format=%cs', { cwd: root, stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim() || lastmod;
} catch {
  /* not a git checkout (e.g. a source tarball): keep the build date */
}
const urls = ROUTES.map(
  (r) =>
    `  <url>\n    <loc>${SITE_URL}${r.path === '/' ? '/' : r.path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority}</priority>\n  </url>`,
).join('\n');
writeFileSync(
  resolve(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
console.log(`sitemap.xml: ${ROUTES.length} urls, lastmod ${lastmod}`);
