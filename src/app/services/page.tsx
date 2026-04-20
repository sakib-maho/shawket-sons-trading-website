import type { Metadata } from "next";
import { ServicesView } from "./View";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Sourcing, import/export coordination, supplier matching, quality checks, logistics and long-term trade partnership for B2B buyers and producers."
};

export default function ServicesPage() {
  return <ServicesView />;
}
