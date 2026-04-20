"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Reveal } from "./Reveal";

export function CTASection() {
  const { t } = useLanguage();
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-brand-900 px-8 py-14 text-white shadow-card-hover sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(70%_60%_at_90%_10%,rgba(255,255,255,0.12),transparent_60%),radial-gradient(60%_55%_at_10%_90%,rgba(255,255,255,0.08),transparent_60%)]"
            />
            <div className="relative max-w-3xl">
              <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                {t.cta.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/75 sm:text-lg">
                {t.cta.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-900 shadow-sm transition hover:bg-brand-50"
                >
                  {t.cta.primary}
                </Link>
                <Link
                  href={{ pathname: "/contact", query: { type: "supplier" } }}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  {t.cta.secondary}
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
