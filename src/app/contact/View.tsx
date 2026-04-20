"use client";

import { Suspense } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { PageHero } from "@/components/PageHero";
import { InquiryForm } from "@/components/InquiryForm";
import { Reveal } from "@/components/Reveal";

export function ContactView() {
  const { t } = useLanguage();
  const rawWhatsApp = t.contact.info.whatsappValue;
  const waDigits = rawWhatsApp.replace(/[^0-9]/g, "");
  const waHref = waDigits
    ? `https://wa.me/${waDigits}`
    : `https://wa.me/?text=${encodeURIComponent("Hello Shawket & Son's Trading")}`;

  return (
    <>
      <PageHero
        eyebrow={t.contact.hero.eyebrow}
        title={t.contact.hero.title}
        subtitle={t.contact.hero.subtitle}
      />

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="card">
                <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                  {t.contact.info.heading}
                </h2>
                <dl className="mt-6 space-y-5 text-sm">
                  <InfoRow
                    label={t.contact.info.emailLabel}
                    value={t.contact.info.emailValue}
                    href={`mailto:${t.contact.info.emailValue}`}
                  />
                  <InfoRow
                    label={t.contact.info.phoneLabel}
                    value={t.contact.info.phoneValue}
                    href={`tel:${t.contact.info.phoneValue.replace(/\s/g, "")}`}
                  />
                  <InfoRow
                    label={t.contact.info.whatsappLabel}
                    value={t.contact.info.whatsappValue}
                    href={waHref}
                  />
                  <InfoRow
                    label={t.contact.info.japanOfficeLabel}
                    value={t.contact.info.japanOfficeValue}
                  />
                  <InfoRow
                    label={t.contact.info.bangladeshOfficeLabel}
                    value={t.contact.info.bangladeshOfficeValue}
                  />
                  <InfoRow
                    label={t.contact.info.hoursLabel}
                    value={t.contact.info.hoursValue}
                  />
                </dl>

                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-8 w-full bg-[#25D366] text-white !ring-0 hover:!bg-[#1ebe5d]"
                >
                  {t.common.whatsapp}
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={80}>
              <Suspense fallback={<div className="card h-64 animate-pulse" />}>
                <InquiryForm />
              </Suspense>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoRow({
  label,
  value,
  href
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex flex-col gap-1 border-b border-ink/5 pb-4 last:border-none last:pb-0">
      <dt className="text-[11px] font-semibold uppercase tracking-widest text-brand-700">
        {label}
      </dt>
      <dd className="font-medium text-ink">
        {href ? (
          <a href={href} className="hover:text-brand-700">
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}
