import type { ReactNode } from 'react';
import { SiteHeader } from '@/components/SiteHeader';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';

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
      <SEOHead title={title} description={description} canonical={canonical} />
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 pb-16 pt-24 md:px-8 md:pb-20 md:pt-28">
        <h1 className="mb-4 text-4xl text-foreground md:text-5xl">{title}</h1>
        <p className="mb-12 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
        <div className="prose prose-neutral max-w-none dark:prose-invert prose-headings:font-semibold prose-a:text-foreground">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
