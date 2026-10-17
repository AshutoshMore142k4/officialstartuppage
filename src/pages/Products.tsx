import { ArrowUpRight, Package } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { products } from '@/data/products';
import { SiteHeader } from '@/components/SiteHeader';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { breadcrumbs, productList, webPage } from '@/lib/seo';

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Products: CodeReportCard, Pebble mk1 & GrindSDE"
        description="Products built by 11Startups: CodeReportCard (a code-quality CLI on npm), Pebble mk1 (a 100k-parameter language model you train in your browser) and GrindSDE."
        canonical="/products"
        jsonLd={[
          webPage('WebPage', '/products', 'Products', 'Products built by 11Startups.'),
          breadcrumbs('/products', 'Products'),
          productList(),
        ]}
      />
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-20 md:px-8 md:pb-24 md:pt-28">
        <div className="mb-10 max-w-2xl md:mb-16">
          <p className="mb-3 text-eyebrow uppercase text-muted-foreground">Shipped by the lab</p>
          <h1 className="text-title text-foreground">Products we&apos;ve built</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We build our own models and tools, then put them in people&apos;s hands. Try them yourself.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.a
              key={product.name}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              className="group glass-card relative flex flex-col rounded-2xl p-4 transition-shadow duration-300 hover:shadow-xl"
            >
              <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} />
              <div className="mb-4 aspect-[16/10] overflow-hidden rounded-xl border border-border bg-muted">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={`${product.name} screenshot`}
                    width={960}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <Package className="h-10 w-10 text-muted-foreground" aria-hidden="true" />
                  </div>
                )}
              </div>
              <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1.5 px-2">
                <h3 className="text-subheading text-foreground">{product.name}</h3>
                {product.stat && <Badge variant="secondary" className="shrink-0 whitespace-nowrap">{product.stat}</Badge>}
              </div>
              <p className="mt-2 px-2 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 px-2 pb-2 text-sm font-medium text-foreground">
                Try it
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </motion.a>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
