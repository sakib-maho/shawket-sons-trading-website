"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Logo } from "./Logo";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const links: Array<{ href: string; label: string }> = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/products", label: t.nav.products },
    { href: "/services", label: t.nav.services },
    { href: "/why-choose-us", label: t.nav.whyUs },
    { href: "/contact", label: t.nav.contact }
  ];

  return (
    <footer className="border-t border-ink/5 bg-brand-950 text-white/80">
      <div className="container grid gap-12 py-14 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo invert />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">{t.footer.about}</p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
            {t.footer.quickLinks}
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-white/70 transition hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
            {t.footer.contact}
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            <li>
              <span className="block text-xs uppercase tracking-wider text-white/50">
                {t.contact.info.emailLabel}
              </span>
              <a className="hover:text-white" href={`mailto:${t.contact.info.emailValue}`}>
                {t.contact.info.emailValue}
              </a>
            </li>
            <li>
              <span className="block text-xs uppercase tracking-wider text-white/50">
                {t.contact.info.whatsappLabel}
              </span>
              {t.contact.info.whatsappValue}
            </li>
            <li>
              <span className="block text-xs uppercase tracking-wider text-white/50">
                {t.contact.info.japanOfficeLabel}
              </span>
              {t.contact.info.japanOfficeValue}
            </li>
            <li>
              <span className="block text-xs uppercase tracking-wider text-white/50">
                {t.contact.info.bangladeshOfficeLabel}
              </span>
              {t.contact.info.bangladeshOfficeValue}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/50 sm:flex-row">
          <p>
            &copy; {year} Shawket &amp; Son&apos;s Trading. {t.footer.rights}
          </p>
          <p>{t.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
