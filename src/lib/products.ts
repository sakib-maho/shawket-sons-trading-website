import type { Dictionary } from "@/i18n/translations";
import type { ProductCardData } from "@/components/ProductCard";

/**
 * Central product catalogue.
 *
 * Product photos use Unsplash (real photography, not AI-generated). Unsplash
 * License allows commercial use — replace with your own shots when ready.
 * To swap an image, change `imageId` below (format: `{timestamp}-{hash}`).
 *
 * To add a new product:
 *   1. Add a translation entry in `src/i18n/translations/en.ts` under `products.items`
 *      (and update every other language file to match).
 *   2. Add an entry in this array with a stable `id`, `imageId`, translation key, etc.
 */

/** Build a cropped, optimised Unsplash URL for `next/image`. */
function unsplashPhoto(imageId: string, w = 900, h = 675) {
  return `https://images.unsplash.com/photo-${imageId}?auto=format&fit=crop&w=${w}&h=${h}&q=85`;
}

export type ProductDefinition = Omit<ProductCardData, "name" | "desc" | "imageSrc"> & {
  /** Unsplash asset id only (without the `photo-` prefix). */
  imageId: string;
  /** Translation key under t.products.items */
  translationKey: keyof Dictionary["products"]["items"];
  featured?: boolean;
};

export const products: ProductDefinition[] = [
  {
    id: "betel-nut",
    translationKey: "betelNut",
    imageId: "1599599810769-bcde5a160d32",
    featured: true
  },
  {
    id: "whole-betel-nut",
    translationKey: "wholeBetelNut",
    imageId: "1596040033229-a9821ebd058d",
    featured: true
  },
  {
    id: "split-betel-nut",
    translationKey: "splitBetelNut",
    imageId: "1559056199-641a0ac8b55e",
    featured: true
  },
  {
    id: "spices",
    translationKey: "spices",
    imageId: "1514432324607-a09d9b4aefdd",
    upcoming: true
  },
  {
    id: "agro-commodities",
    translationKey: "agro",
    imageId: "1519681393784-d120267933ba",
    upcoming: true
  },
  {
    id: "general-imports",
    translationKey: "general",
    imageId: "1586528116311-ad8dd3c8310d",
    upcoming: true
  }
];

/** Hydrate a product definition with translated copy for the active locale. */
export function resolveProduct(p: ProductDefinition, t: Dictionary): ProductCardData {
  const entry = t.products.items[p.translationKey];
  const imageSrc = unsplashPhoto(p.imageId);
  return {
    id: p.id,
    upcoming: p.upcoming,
    name: entry.name,
    desc: entry.desc,
    imageSrc
  };
}
