"use client";

import Image from "next/image";
import Link from "next/link";
import logoMark from "../../public/logo-mark.png";
import { useLanguage } from "@/i18n/LanguageProvider";

type Props = {
  /** Hide the text wordmark — useful for very tight spaces. */
  iconOnly?: boolean;
  /** Render the wordmark colours for a dark surface (e.g. the footer). */
  invert?: boolean;
  /** Smaller compact form without the tagline under the wordmark. */
  compact?: boolean;
  className?: string;
};

/**
 * SST badge + "Shawket & Son's Trading" wordmark.
 *
 * The badge itself is an AI-designed premium emblem shipped as a raster
 * (`public/logo-mark.png`, 1024×1024 for retina). The wordmark is plain HTML
 * so it can stay selectable and be localised freely without re-exporting art.
 */
export function Logo({ iconOnly = false, invert = false, compact = false, className = "" }: Props) {
  const { t } = useLanguage();
  return (
    <Link
      href="/"
      aria-label="Shawket & Son's Trading — home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <LogoMark size={44} />
      {!iconOnly && (
        <span className={`flex flex-col leading-tight ${invert ? "text-white" : "text-ink"}`}>
          <span className="font-display text-lg font-semibold tracking-tight">
            Shawket &amp; Son&apos;s Trading
          </span>
          {!compact && (
            <span
              className={`text-[11px] font-medium uppercase tracking-[0.22em] ${
                invert ? "text-white/60" : "text-ink-muted"
              }`}
            >
              {t.hero.eyebrow}
            </span>
          )}
        </span>
      )}
    </Link>
  );
}

/**
 * The standalone SST emblem. Useful as an avatar, loading state, or
 * whenever the wordmark would be redundant.
 */
export function LogoMark({ size = 44, className = "" }: { size?: number; className?: string }) {
  return (
    <Image
      src={logoMark}
      alt="Shawket & Son's Trading monogram"
      width={size}
      height={size}
      priority
      className={`shrink-0 ${className}`}
      sizes={`${size}px`}
    />
  );
}
