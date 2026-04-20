"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";

export function AboutView() {
  const { t } = useLanguage();
  return (
    <>
      <PageHero
        eyebrow={t.about.hero.eyebrow}
        title={t.about.hero.title}
        subtitle={t.about.hero.subtitle}
      />

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="card h-full">
              <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                {t.about.overview.title}
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">{t.about.overview.body}</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card h-full">
              <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                {t.about.approach.title}
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">{t.about.approach.body}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section border-t border-ink/5 bg-brand-50/40">
        <div className="container grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="card h-full border-l-4 !border-l-brand-700">
              <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                {t.about.mission.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{t.about.mission.body}</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card h-full border-l-4 !border-l-brand-700">
              <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                {t.about.vision.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{t.about.vision.body}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">{t.about.hero.eyebrow}</span>
            <h2 className="heading-lg mt-4 max-w-3xl">{t.about.markets.title}</h2>
          </Reveal>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {t.about.markets.items.map((item, i) => (
              <Reveal key={item} delay={i * 80}>
                <li className="card flex items-start gap-4">
                  <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-brand-50 font-display text-lg font-semibold text-brand-700">
                    {i + 1}
                  </span>
                  <p className="leading-relaxed text-ink">{item}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </>
  );
}
