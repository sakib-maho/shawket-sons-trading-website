"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Reveal } from "./Reveal";

export function ContactTeaser() {
  const { t } = useLanguage();
  return (
    <section className="section border-t border-ink/5 bg-brand-50/60">
      <div className="container grid gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <span className="eyebrow">{t.contactTeaser.eyebrow}</span>
          <h2 className="heading-lg mt-4">{t.contactTeaser.title}</h2>
          <p className="lead mt-4 max-w-xl">{t.contactTeaser.subtitle}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              {t.contactTeaser.cta}
            </Link>
            <a
              href={`mailto:${t.contact.info.emailValue}`}
              className="btn-secondary"
            >
              {t.contact.info.emailValue}
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid gap-4 sm:grid-cols-2">
            <InfoCard label={t.contact.info.emailLabel} value={t.contact.info.emailValue} />
            <InfoCard label={t.contact.info.whatsappLabel} value={t.contact.info.whatsappValue} />
            <InfoCard
              label={t.contact.info.japanOfficeLabel}
              value={t.contact.info.japanOfficeValue}
            />
            <InfoCard
              label={t.contact.info.bangladeshOfficeLabel}
              value={t.contact.info.bangladeshOfficeValue}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-ink/5 bg-white p-5 shadow-card">
      <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-700">
        {label}
      </p>
      <p className="mt-2 text-sm font-medium leading-relaxed text-ink">{value}</p>
    </div>
  );
}
