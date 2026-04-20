"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Testimonials() {
  const { t } = useLanguage();
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeading
          eyebrow={t.testimonials.eyebrow}
          title={t.testimonials.title}
          subtitle={t.testimonials.subtitle}
          align="center"
          className="mx-auto"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.testimonials.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 80}>
              <figure className="card flex h-full flex-col">
                <QuoteIcon className="h-7 w-7 text-brand-700" />
                <blockquote className="mt-4 text-[15px] leading-relaxed text-ink">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-ink/5 pt-4">
                  <p className="text-sm font-semibold text-ink">{item.name}</p>
                  <p className="text-xs text-ink-muted">{item.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteIcon(p: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M7.17 6A5.17 5.17 0 002 11.17V18h7v-6H5.5a2 2 0 011.67-2H7v-4zm10 0A5.17 5.17 0 0012 11.17V18h7v-6h-3.5a2 2 0 011.67-2h.17V6z" />
    </svg>
  );
}
