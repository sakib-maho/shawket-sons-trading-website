"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";
import { SectionHeading } from "./SectionHeading";
import { ProductCard } from "./ProductCard";
import { Reveal } from "./Reveal";
import { products, resolveProduct } from "@/lib/products";

export function FeaturedProducts() {
  const { t } = useLanguage();
  const featured = products.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="section border-t border-ink/5 bg-brand-50/40">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow={t.featured.eyebrow}
            title={t.featured.title}
            subtitle={t.featured.subtitle}
          />
          <Reveal delay={80}>
            <Link href="/products" className="btn-secondary">
              {t.common.viewAll}
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <ProductCard product={resolveProduct(p, t)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
