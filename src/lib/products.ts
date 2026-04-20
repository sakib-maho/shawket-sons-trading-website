import type { Dictionary } from "@/i18n/translations";
import type { ProductCardData } from "@/components/ProductCard";

/**
 * Central product catalogue.
 *
 * Product photos use Wikimedia Commons (real photography, freely licensed).
 * To swap an image, change `imageUrl` to a direct absolute URL, or use
 * `imageId` for Unsplash photos (format: `{timestamp}-{hash}`).
 */

/** Build a cropped, optimised Unsplash URL for `next/image`. */
function unsplashPhoto(imageId: string, w = 900, h = 675) {
  return `https://images.unsplash.com/photo-${imageId}?auto=format&fit=crop&w=${w}&h=${h}&q=85`;
}

export type ProductDefinition = Omit<ProductCardData, "name" | "desc" | "imageSrc"> & {
  /** Direct absolute image URL — takes priority over imageId. */
  imageUrl?: string;
  /** Unsplash asset id only (without the `photo-` prefix). Used when imageUrl is absent. */
  imageId?: string;
  /** Translation key under t.products.items */
  translationKey: keyof Dictionary["products"]["items"];
  featured?: boolean;
};

export const products: ProductDefinition[] = [
  {
    id: "betel-nut",
    translationKey: "betelNut",
    // Fresh areca nut close-up (Wikimedia Commons, public domain)
    imageUrl: "/images/products/betel-nut.jpg",
    featured: true
  },
  {
    id: "whole-betel-nut",
    translationKey: "wholeBetelNut",
    // Whole dried betel nuts in a basket from Bangladesh (Wikimedia Commons, CC BY-SA 4.0)
    imageUrl: "/images/products/whole-betel-nut.jpg",
    featured: true
  },
  {
    id: "split-betel-nut",
    translationKey: "splitBetelNut",
    // Commercial-scale sun-drying of areca nuts (Wikimedia Commons, CC BY-SA 3.0)
    imageUrl: "/images/products/split-betel-nut.jpg",
    featured: true
  },
  {
    id: "spices",
    translationKey: "spices",
    // Indonesian spices in Bali woven baskets — cinnamon, cloves, pepper, turmeric (Wikimedia Commons, CC BY-SA 4.0)
    imageUrl: "/images/products/spices.jpg",
    upcoming: true
  },
  {
    id: "agro-commodities",
    translationKey: "agro",
    // Roasted coffee beans — Wikipedia featured picture (Wikimedia Commons, public domain)
    imageUrl: "/images/products/agro-commodities.jpg",
    upcoming: true
  },
  {
    id: "general-imports",
    translationKey: "general",
    imageUrl: "/images/products/general-imports.jpg",
    upcoming: true
  }
];

/** Hydrate a product definition with translated copy for the active locale. */
export function resolveProduct(p: ProductDefinition, t: Dictionary): ProductCardData {
  const entry = t.products.items[p.translationKey];
  const imageSrc = p.imageUrl ?? (p.imageId ? unsplashPhoto(p.imageId) : "");
  return {
    id: p.id,
    upcoming: p.upcoming,
    name: entry.name,
    desc: entry.desc,
    imageSrc
  };
}
