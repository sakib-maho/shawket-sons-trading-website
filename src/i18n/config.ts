/**
 * i18n configuration.
 *
 * To add a new language:
 *   1. Add it to `locales` below (e.g. "ar").
 *   2. Add a matching translation file in `src/i18n/translations/<code>.ts`.
 *   3. Register the file inside `src/i18n/translations/index.ts`.
 *   4. (Optional) add a display label and direction here.
 *
 * The translation key contract is defined by the `Dictionary` type in
 * `src/i18n/translations/en.ts` — every new language must satisfy it.
 */

export const locales = ["en", "id", "bn"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, { native: string; english: string; flag: string }> = {
  en: { native: "English", english: "English", flag: "EN" },
  id: { native: "Bahasa Indonesia", english: "Indonesian", flag: "ID" },
  bn: { native: "বাংলা", english: "Bangla", flag: "BN" }
};

/** Storage key used to persist the user's language choice. */
export const LOCALE_STORAGE_KEY = "sst-locale";
