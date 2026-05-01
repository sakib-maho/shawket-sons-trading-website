"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Reveal } from "./Reveal";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-brand-50/70 via-white to-white">
      {/* Decorative backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(60%_55%_at_85%_10%,rgba(42,110,68,0.12),transparent_60%),radial-gradient(45%_45%_at_10%_90%,rgba(42,110,68,0.08),transparent_60%)]"
      />
      <div className="container grid items-center gap-12 pt-16 pb-20 sm:pt-20 lg:grid-cols-12 lg:pt-28 lg:pb-28">
        <div className="lg:col-span-7">
          <Reveal>
            <span className="eyebrow">{t.hero.eyebrow}</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="heading-xl mt-5">{t.hero.title}</h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="lead mt-6 max-w-2xl">{t.hero.subtitle}</p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/products" className="btn-primary">
                {t.hero.ctaPrimary}
                <ArrowIcon className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-secondary">
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-6 border-t border-ink/10 pt-8 sm:grid-cols-4">
              {t.hero.stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl font-semibold text-brand-800">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs font-medium uppercase tracking-wider text-ink-muted">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={180} className="lg:col-span-5">
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}

function HeroVisual() {
  const { t } = useLanguage();
  const v = t.heroVisual;
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none">
      <div className="absolute inset-0 overflow-hidden rounded-[28px] shadow-card-hover">
        <Image
          src="/images/products/whole-betel-nut.jpg"
          alt={v.imageAlt}
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 40vw"
          className="object-cover"
          priority
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-900/30 to-transparent"
        />
        <div className="absolute inset-x-6 bottom-6 flex items-end justify-between text-white">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
              {v.route}
            </p>
            <p className="mt-1 font-display text-2xl font-semibold">{v.productName}</p>
          </div>
          <span className="rounded-full border border-white/40 bg-black/40 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
            {v.verified}
          </span>
        </div>
      </div>
      <div className="absolute -left-4 top-8 z-10 hidden rounded-2xl border border-ink/5 bg-white p-4 shadow-card sm:block lg:-left-10">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-700">
          {v.liveShipment}
        </p>
        <p className="mt-1 font-display text-lg font-semibold text-ink">{v.containers}</p>
        <p className="text-xs text-ink-muted">{v.origin}</p>
      </div>
      <div className="absolute -right-3 bottom-10 z-10 hidden rounded-2xl border border-ink/5 bg-white p-4 shadow-card sm:block lg:-right-8">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-700">
          {v.qualityGraded}
        </p>
        <p className="mt-1 font-display text-lg font-semibold text-ink">{v.grade}</p>
      </div>
    </div>
  );
}

function ArrowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
