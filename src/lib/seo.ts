import { faqs } from '@/data/faqs';
import { products } from '@/data/products';

export const SITE = {
  name: '11Startups',
  domain: '11startups.tech',
  // Must match the primary domain in Vercel (currently www; the apex redirects to it).
  url: 'https://www.11startups.tech',
  locale: 'en_US',
  twitter: '@11startups',
  description:
    '11Startups is an applied AI company. We develop and fine-tune language models, build products on top of them, and offer AI consulting to ambitious teams.',
  sameAs: [
    'https://www.linkedin.com/company/11startups/',
    'https://github.com/11Startups/',
    'https://www.producthunt.com/@11startups',
  ],
  supportEmail: 'support@11startups.tech',
} as const;

export const ORG_ID = `${SITE.url}/#organization`;
export const WEBSITE_ID = `${SITE.url}/#website`;

export const DEFAULT_TITLE = '11Startups — Applied AI Research, LLMs & Developer Tools';
export const DEFAULT_IMAGE = `${SITE.url}/og-image.png`;

// Every real route, in sitemap order. Keep in sync with <Routes> in src/App.tsx.
export const ROUTES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/products', changefreq: 'monthly', priority: '0.9' },
  { path: '/docs', changefreq: 'monthly', priority: '0.9' },
  { path: '/services', changefreq: 'monthly', priority: '0.8' },
  { path: '/about', changefreq: 'monthly', priority: '0.7' },
  { path: '/support', changefreq: 'monthly', priority: '0.6' },
  { path: '/privacy-policy', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms', changefreq: 'yearly', priority: '0.3' },
  { path: '/disclaimer', changefreq: 'yearly', priority: '0.3' },
] as const;

type Node = Record<string, unknown>;

const abs = (path: string) => `${SITE.url}${path === '/' ? '/' : path}`;

export const organization = (): Node => ({
  '@type': 'Organization',
  '@id': ORG_ID,
  name: SITE.name,
  alternateName: [SITE.domain, '11 Startups'],
  url: SITE.url,
  logo: `${SITE.url}/apple-touch-icon.png`,
  description: SITE.description,
  knowsAbout: ['Large language models', 'Applied AI research', 'Developer tools', 'AI consulting'],
  contactPoint: [
    { '@type': 'ContactPoint', email: SITE.supportEmail, contactType: 'customer support', availableLanguage: ['English'] },
  ],
  sameAs: SITE.sameAs,
});

export const website = (): Node => ({
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: SITE.name,
  alternateName: SITE.domain,
  url: SITE.url,
  inLanguage: 'en',
  publisher: { '@id': ORG_ID },
});

export const breadcrumbs = (path: string, name: string): Node => ({
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: abs('/') },
    { '@type': 'ListItem', position: 2, name, item: abs(path) },
  ],
});

export const webPage = (
  type: 'WebPage' | 'AboutPage' | 'ContactPage' | 'TechArticle',
  path: string,
  name: string,
  description: string,
  extra: Node = {},
): Node => ({
  '@type': type,
  '@id': `${abs(path)}#webpage`,
  url: abs(path),
  name,
  description,
  inLanguage: 'en',
  isPartOf: { '@id': WEBSITE_ID },
  publisher: { '@id': ORG_ID },
  ...extra,
});

export const faqPage = (): Node => ({
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
});

// Schema.org detail that isn't shown on the product cards, keyed by product name.
const PRODUCT_SCHEMA: Record<string, Node> = {
  CodeReportCard: {
    '@type': 'SoftwareApplication',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any (Node.js 18+)',
    url: 'https://www.npmjs.com/package/codereportcard',
    sameAs: ['https://github.com/AshutoshMore142k4/codereportcard'],
    license: 'https://opensource.org/licenses/MIT',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
  'Pebble mk1 (100k Params)': {
    '@type': 'WebApplication',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any (web browser)',
  },
  GrindSDE: {
    '@type': 'WebApplication',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Any (web browser)',
  },
};

export const productList = (): Node => ({
  '@type': 'ItemList',
  name: '11Startups products',
  itemListElement: products.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      name: p.name,
      description: p.description,
      url: p.href,
      author: { '@id': ORG_ID },
      ...PRODUCT_SCHEMA[p.name],
    },
  })),
});

const SERVICES = [
  ['AI Strategy Consulting', 'Identify the highest-impact AI opportunities and create a clear roadmap to implementation.'],
  ['Rapid Prototyping', 'Go from concept to working AI prototype in weeks, not months.'],
  ['Workflow Automation', 'Automate repetitive tasks with intelligent AI agents that learn and adapt.'],
  ['Data Analytics & Insights', 'Advanced ML models that unlock hidden patterns and drive smarter decisions.'],
  ['AI Safety & Compliance', 'Governance frameworks, bias auditing, and regulatory compliance support.'],
  ['Ongoing Support & Optimisation', 'Monitoring, optimisation, and scaling support for your AI solutions.'],
] as const;

export const serviceList = (): Node => ({
  '@type': 'ItemList',
  name: 'AI consulting services',
  itemListElement: SERVICES.map(([name, description], i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: { '@type': 'Service', name, description, provider: { '@id': ORG_ID } },
  })),
});
