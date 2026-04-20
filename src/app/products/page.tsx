import type { Metadata } from "next";
import { ProductsView } from "./View";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Premium betel nut (whole and split) sourced from Indonesia, with upcoming lines in spices, agro commodities and general imports."
};

export default function ProductsPage() {
  return <ProductsView />;
}
