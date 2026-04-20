import type { Metadata } from "next";
import { WhyView } from "./View";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "Reliable sourcing, quality-focused approach, competitive pricing, long-term partnership mindset and a multi-market trading vision."
};

export default function WhyPage() {
  return <WhyView />;
}
