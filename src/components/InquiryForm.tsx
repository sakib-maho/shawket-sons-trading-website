"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/i18n/LanguageProvider";

/**
 * Business inquiry form.
 *
 * The front-end is fully wired. Submission currently simulates success —
 * replace the `onSubmit` handler with a POST to your preferred backend
 * (Resend, SendGrid, a Next.js route handler, Formspree, etc.).
 */
export function InquiryForm() {
  const { t } = useLanguage();
  const search = useSearchParams();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    type: "buyer" as "buyer" | "supplier" | "other",
    product: "",
    message: "",
    consent: false
  });

  // Pre-fill "product" and "type" from URL params (e.g. /contact?product=betel-nut).
  useEffect(() => {
    const productParam = search?.get("product");
    const typeParam = search?.get("type");
    setForm((f) => ({
      ...f,
      product: productParam ? prettifyProduct(productParam) : f.product,
      type:
        typeParam === "buyer" || typeParam === "supplier" || typeParam === "other"
          ? typeParam
          : f.type
    }));
  }, [search]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      // TODO: replace with a real API call, e.g.:
      // await fetch("/api/inquiries", { method: "POST", body: JSON.stringify(form) });
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
      setForm((f) => ({ ...f, message: "", consent: false }));
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card border-brand-200 bg-brand-50/40">
        <div className="flex items-start gap-3">
          <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-brand-700 text-white">
            <CheckIcon className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-display text-xl font-semibold text-ink">
              {t.contact.form.successTitle}
            </h3>
            <p className="mt-1 text-sm text-ink-soft">{t.contact.form.successBody}</p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="btn-ghost mt-4 !px-3 !py-1.5"
            >
              ← {t.common.getInTouch}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-5">
      <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
        {t.contact.form.heading}
      </h3>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t.contact.form.name} required>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="field-input"
            autoComplete="name"
          />
        </Field>
        <Field label={t.contact.form.company}>
          <input
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="field-input"
            autoComplete="organization"
          />
        </Field>
        <Field label={t.contact.form.email} required>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="field-input"
            autoComplete="email"
          />
        </Field>
        <Field label={t.contact.form.phone}>
          <input
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="field-input"
            autoComplete="tel"
            inputMode="tel"
          />
        </Field>
        <Field label={t.contact.form.country}>
          <input
            value={form.country}
            onChange={(e) => setForm({ ...form, country: e.target.value })}
            className="field-input"
            autoComplete="country-name"
          />
        </Field>
        <Field label={t.contact.form.type}>
          <select
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value as typeof form.type })}
            className="field-input"
          >
            <option value="buyer">{t.contact.form.typeBuyer}</option>
            <option value="supplier">{t.contact.form.typeSupplier}</option>
            <option value="other">{t.contact.form.typeOther}</option>
          </select>
        </Field>
      </div>

      <Field label={t.contact.form.product}>
        <input
          value={form.product}
          onChange={(e) => setForm({ ...form, product: e.target.value })}
          placeholder={t.contact.form.productPlaceholder}
          className="field-input"
        />
      </Field>

      <Field label={t.contact.form.message} required>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder={t.contact.form.messagePlaceholder}
          className="field-input resize-y"
        />
      </Field>

      <label className="flex items-start gap-3 text-sm text-ink-soft">
        <input
          required
          type="checkbox"
          checked={form.consent}
          onChange={(e) => setForm({ ...form, consent: e.target.checked })}
          className="mt-0.5 h-4 w-4 rounded border-ink/20 text-brand-700 focus:ring-brand-700"
        />
        <span>{t.contact.form.consent}</span>
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full sm:w-auto"
      >
        {status === "loading" ? t.common.sending : t.common.submit}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600">{t.contact.form.errorMessage}</p>
      )}
    </form>
  );
}

function Field({
  label,
  required,
  children
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="field-label">
        {label}
        {required && <span className="ml-1 text-brand-700">*</span>}
      </span>
      {children}
    </label>
  );
}

function prettifyProduct(slug: string) {
  return slug
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}

function CheckIcon(p: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...p}>
      <path d="M5 12l4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
