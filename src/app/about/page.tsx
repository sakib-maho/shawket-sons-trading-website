import type { Metadata } from "next";
import { AboutView } from "./View";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Shawket & Son's Trading is an international sourcing and trading company focused on reliable B2B trade between Indonesia and Bangladesh, expanding into spices and agricultural commodities."
};

export default function AboutPage() {
  return <AboutView />;
}
