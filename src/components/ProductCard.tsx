"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";

export type ProductCardData = {
  /** Stable identifier used in inquiry links and analytics. */
  id: string;
  name: string;
  desc: string;
  /** Remote product photo (e.g. Unsplash — see `src/lib/products.ts`). */
  imageSrc: string;
  /** Set true for upcoming products — disables inquiry and shows a "coming soon" tag. */
  upcoming?: boolean;
};

export function ProductCard({ product }: { product: ProductCardData }) {
  const { t } = useLanguage();

  return (
    <article className="group/card card flex h-full flex-col overflow-hidden !p-0">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-100">
        <Image
          src={product.imageSrc}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 ease-out motion-safe:group-hover/card:scale-[1.03]"
          loading="lazy"
        />
        {/* Readability overlays — keeps the badge readable on any photo */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent"
        />
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-3 p-4 sm:p-5">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/95 drop-shadow-sm">
            {product.upcoming ? t.common.comingSoon : t.meta.siteName}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
        <div>
          <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            {product.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{product.desc}</p>
        </div>
        <div className="mt-auto flex items-center justify-between">
          {product.upcoming ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-800">
              {t.common.comingSoon}
            </span>
          ) : (
            <Link
              href={{ pathname: "/contact", query: { product: product.id } }}
              className="btn-secondary !px-5 !py-2.5 !text-sm"
            >
              {t.common.inquire}
              <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

function ArrowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
