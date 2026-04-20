import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Playfair_Display, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const fontDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const fontBangla = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bangla",
  display: "swap"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://shawketandsonstrading.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shawket & Son's Trading — Import, Export & Sourcing",
    template: "%s · Shawket & Son's Trading"
  },
  description:
    "Shawket & Son's Trading is an international import, export and sourcing company bridging Indonesia and Bangladesh with reliable trade in betel nut, spices and agricultural commodities.",
  keywords: [
    "Shawket & Son's Trading",
    "import export company",
    "betel nut Indonesia Bangladesh",
    "areca nut supplier",
    "sourcing company Bangladesh",
    "spices agricultural commodities trading"
  ],
  openGraph: {
    title: "Shawket & Son's Trading — Import, Export & Sourcing",
    description:
      "Trusted B2B import, export and sourcing partner connecting Indonesia, Bangladesh and beyond.",
    type: "website",
    url: siteUrl,
    siteName: "Shawket & Son's Trading"
  },
  twitter: {
    card: "summary_large_image",
    title: "Shawket & Son's Trading",
    description:
      "Trusted B2B import, export and sourcing partner connecting Indonesia, Bangladesh and beyond."
  },
  robots: { index: true, follow: true }
  // Favicon and Open Graph images are registered automatically by the files
  // at `src/app/icon.png`, `src/app/apple-icon.png` and `src/app/opengraph-image.png`.
};

export const viewport: Viewport = {
  themeColor: "#193a27",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontSans.variable} ${fontDisplay.variable} ${fontBangla.variable}`}
    >
      <body className="min-h-screen bg-white text-ink">
        <LanguageProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-brand-700 focus:px-3 focus:py-2 focus:text-sm focus:text-white"
          >
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
