"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";

const icons = [SearchIcon, ShipIcon, LinkIcon, ShieldIcon, TruckIcon, HandshakeIcon];

export function ServicesView() {
  const { t } = useLanguage();
  return (
    <>
      <PageHero
        eyebrow={t.services.hero.eyebrow}
        title={t.services.hero.title}
        subtitle={t.services.hero.subtitle}
      />

      <section className="section">
        <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={item.title} delay={i * 80}>
                <article className="card h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-700 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{item.desc}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}

type IconProps = React.SVGProps<SVGSVGElement>;
function SearchIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...p}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
    </svg>
  );
}
function ShipIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} {...p}>
      <path d="M3 17c2 1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 6 0" strokeLinecap="round" />
      <path d="M4 13l8-6 8 6M6 13v-2h12v2" strokeLinejoin="round" />
    </svg>
  );
}
function LinkIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} {...p}>
      <path d="M10 14a4 4 0 015.66 0l2.83 2.83a4 4 0 11-5.66 5.66" />
      <path d="M14 10a4 4 0 00-5.66 0L5.5 12.83a4 4 0 105.66 5.66" />
    </svg>
  );
}
function ShieldIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} {...p}>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function TruckIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} {...p}>
      <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7" strokeLinejoin="round" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="17" cy="18" r="1.8" />
    </svg>
  );
}
function HandshakeIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} {...p}>
      <path d="M3 13l4-4 3 3 4-4 7 7-3 3-4-4-4 4-7-5z" strokeLinejoin="round" />
    </svg>
  );
}
