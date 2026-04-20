import type { Metadata } from "next";
import { ContactView } from "./View";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Shawket & Son's Trading — submit a business inquiry, request a quote, or start a supplier/buyer conversation with our trade desk."
};

export default function ContactPage() {
  return <ContactView />;
}
