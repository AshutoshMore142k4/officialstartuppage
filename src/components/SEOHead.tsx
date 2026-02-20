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
  '11startups.tech delivers end-to-end AI consulting — strategy, rapid prototyping, workflow automation, data analytics, compliance, and ongoing support.';

export function SEOHead({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  ogType = 'website',
  noIndex = false,
}: SEOHeadProps) {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — AI Consulting for Startups & Enterprises`;
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

      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
