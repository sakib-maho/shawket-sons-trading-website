"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { Reveal } from "./Reveal";

export function IntroSection() {
  const { t } = useLanguage();
  return (
    <section className="section border-t border-ink/5 bg-white">
      <div className="container grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <span className="eyebrow">{t.intro.eyebrow}</span>
          <h2 className="heading-lg mt-4">{t.intro.title}</h2>
        </Reveal>
        <div className="lg:col-span-7">
          <Reveal delay={100}>
            <p className="lead">{t.intro.body}</p>
          </Reveal>
          <Reveal delay={180}>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {t.intro.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 rounded-xl border border-ink/5 bg-brand-50/50 p-4 text-sm text-ink"
                >
                  <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-700" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CheckIcon(p: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...p}>
      <path d="M5 12l4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
