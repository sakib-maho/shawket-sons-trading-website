import type { Locale } from "../config";
import type { Dictionary } from "./en";
import { en } from "./en";
import { id } from "./id";
import { bn } from "./bn";

/**
 * Register every supported dictionary here.
 * When adding a new language, add it in both `src/i18n/config.ts` and this file.
 */
export const dictionaries: Record<Locale, Dictionary> = {
  en,
  id,
  bn
};

export type { Dictionary };
