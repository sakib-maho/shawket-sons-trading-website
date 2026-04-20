"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { products, resolveProduct } from "@/lib/products";

export function ProductsView() {
  const { t } = useLanguage();
  const current = products.filter((p) => !p.upcoming);
  const upcoming = products.filter((p) => p.upcoming);

  return (
    <>
      <PageHero
        eyebrow={t.products.hero.eyebrow}
        title={t.products.hero.title}
        subtitle={t.products.hero.subtitle}
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              {t.products.categories.current}
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {current.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <ProductCard product={resolveProduct(p, t)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-ink/5 bg-brand-50/40">
        <div className="container">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              {t.products.categories.upcoming}
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <ProductCard product={resolveProduct(p, t)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
