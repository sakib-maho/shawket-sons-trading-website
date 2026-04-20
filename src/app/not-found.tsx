"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <section className="section">
      <div className="container max-w-xl text-center">
        <span className="eyebrow mx-auto">{t.notFound.eyebrow}</span>
        <h1 className="heading-lg mt-5">{t.notFound.title}</h1>
        <p className="lead mt-4">{t.notFound.body}</p>
        <Link href="/" className="btn-primary mt-8">
          {t.notFound.back}
        </Link>
      </div>
    </section>
  );
}
