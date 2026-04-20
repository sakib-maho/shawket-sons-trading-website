"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

/**
 * Floating WhatsApp CTA. Uses the phone number from the active translation file
 * so it can be localised without code changes. Strips non-digits before linking.
 */
export function WhatsAppButton() {
  const { t } = useLanguage();
  const raw = t.contact.info.whatsappValue;
  const digits = raw.replace(/[^0-9]/g, "");
  const href = digits
    ? `https://wa.me/${digits}`
    : `https://wa.me/?text=${encodeURIComponent("Hello Shawket & Son's Trading")}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${t.common.whatsapp}: ${raw}`}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-card-hover ring-1 ring-black/5 transition hover:bg-[#1ebe5d] sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span className="hidden sm:inline">{t.common.whatsapp}</span>
    </a>
  );
}

function WhatsAppIcon(p: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" {...p}>
      <path d="M16 3C9.37 3 4 8.37 4 15c0 2.39.7 4.63 1.9 6.52L4 29l7.68-1.86A12 12 0 0016 27c6.63 0 12-5.37 12-12S22.63 3 16 3zm0 22c-1.94 0-3.78-.55-5.33-1.5l-.38-.23-4.56 1.1 1.12-4.43-.25-.4A9.94 9.94 0 016 15c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.47-7.47c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.8-1.49-1.78-1.67-2.08-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.64-.94-2.24-.24-.58-.5-.5-.68-.5h-.58c-.2 0-.53.07-.81.38-.28.3-1.06 1.03-1.06 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.35z" />
    </svg>
  );
}
