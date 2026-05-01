"use client";

import Image from "next/image";
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

      <section className="section border-t border-ink/5">
        <div className="container">
          <Reveal>
            <span className="eyebrow">{t.founder.eyebrow}</span>
            <h2 className="heading-lg mt-4 max-w-2xl">{t.founder.title}</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10 flex flex-col gap-8 rounded-2xl border border-ink/5 bg-white p-8 shadow-card sm:flex-row sm:items-start sm:gap-10">
              <div className="flex-shrink-0">
                <div className="relative h-32 w-32 overflow-hidden rounded-2xl sm:h-40 sm:w-40">
                  <Image
                    src="/images/team/sakib.jpg"
                    alt={t.founder.name}
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">
                  {t.founder.location}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
                  {t.founder.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-ink-soft">{t.founder.role}</p>
                <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">{t.founder.bio}</p>
                <blockquote className="mt-5 border-l-2 border-brand-700 pl-4 font-display text-[15px] italic leading-relaxed text-ink">
                  &ldquo;{t.founder.quote}&rdquo;
                </blockquote>
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-ink-muted">
                    {t.founder.languages}
                  </p>
                  <a
                    href="https://linkedin.com/in/msakib162004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700 hover:underline"
                  >
                    <LinkedInIcon className="h-3.5 w-3.5" />
                    {t.founder.linkedinLabel}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section border-t border-ink/5">
        <div className="container">
          <Reveal>
            <h2 className="heading-lg max-w-3xl">{t.about.markets.title}</h2>
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

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
