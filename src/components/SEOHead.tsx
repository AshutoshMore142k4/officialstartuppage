import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  noIndex?: boolean;
}

const SITE_NAME = '11startups.tech';
const BASE_URL = 'https://11startups.tech';
const DEFAULT_DESCRIPTION =
  '11startups.tech specializes in agentic AI and LLM integration — strategy, rapid prototyping, workflow automation, data analytics, compliance, and ongoing support.';

export function SEOHead({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  ogType = 'website',
  noIndex = false,
}: SEOHeadProps) {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — Agentic AI & LLM Integration`;
  const url = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={`${BASE_URL}/favicon.png`} />
      <meta property="og:image:width" content="180" />
      <meta property="og:image:height" content="180" />
      <meta property="og:image:alt" content="11startups.tech logo" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${BASE_URL}/favicon.png`} />
    </Helmet>
  );
}
