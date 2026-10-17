import { Helmet } from 'react-helmet-async';
import { DEFAULT_IMAGE, DEFAULT_TITLE, SITE, organization, website } from '@/lib/seo';

interface SEOHeadProps {
  /** Page title; the brand is appended. Omit on the home page to use DEFAULT_TITLE. */
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  noIndex?: boolean;
  /** Page-specific schema.org nodes, merged with Organization + WebSite into one @graph. */
  jsonLd?: Record<string, unknown>[];
}

export function SEOHead({
  title,
  description = SITE.description,
  canonical,
  ogType = 'website',
  noIndex = false,
  jsonLd = [],
}: SEOHeadProps) {
  const fullTitle = title ? `${title} | ${SITE.name}` : DEFAULT_TITLE;
  const url = canonical ? `${SITE.url}${canonical === '/' ? '/' : canonical}` : `${SITE.url}/`;
  const graph = JSON.stringify({ '@context': 'https://schema.org', '@graph': [organization(), website(), ...jsonLd] });

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={noIndex ? 'noindex,nofollow' : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'}
      />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content={SITE.locale} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="11Startups — applied AI research, language models and developer tools" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE.twitter} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />

      <script type="application/ld+json">{graph}</script>
    </Helmet>
  );
}
