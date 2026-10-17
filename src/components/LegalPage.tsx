import type { ReactNode } from 'react';
import { SiteHeader } from '@/components/SiteHeader';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { breadcrumbs, webPage } from '@/lib/seo';

interface LegalPageProps {
  title: string;
  description: string;
  canonical: string;
  lastUpdated: string;
  children: ReactNode;
}

export function LegalPage({ title, description, canonical, lastUpdated, children }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={title}
        description={description}
        canonical={canonical}
        jsonLd={[webPage('WebPage', canonical, title, description), breadcrumbs(canonical, title)]}
      />
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 pb-16 pt-20 md:px-8 md:pb-20 md:pt-28">
        <h1 className="mb-4 text-title text-foreground">{title}</h1>
        <p className="mb-12 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
        <div className="prose prose-neutral max-w-none dark:prose-invert prose-headings:font-medium prose-a:text-foreground prose-code:font-sans prose-code:font-medium prose-code:before:content-none prose-code:after:content-none">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
