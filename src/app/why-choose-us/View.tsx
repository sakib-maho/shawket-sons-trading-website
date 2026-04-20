"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";

export function WhyView() {
  const { t } = useLanguage();
  return (
    <>
      <PageHero
        eyebrow={t.why.hero.eyebrow}
        title={t.why.hero.title}
        subtitle={t.why.hero.subtitle}
      />

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="sticky top-24 rounded-3xl bg-brand-900 p-8 text-white shadow-card-hover sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                  {t.why.hero.eyebrow}
                </p>
                <p className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                  {t.why.hero.title}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-white/75">{t.why.hero.subtitle}</p>
              </div>
            </Reveal>
          </div>

          <ol className="space-y-5 lg:col-span-7">
            {t.why.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <li className="card">
                  <div className="flex items-start gap-4">
                    <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-brand-50 font-display text-base font-semibold text-brand-800">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 leading-relaxed text-ink-soft">{item.desc}</p>
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <Testimonials />
      <CTASection />
    </>
  );
}
