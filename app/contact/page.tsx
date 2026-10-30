import type { Metadata } from "next";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Visit & contact | TeddyPups U.A.E.",
  description:
    "Visit TeddyPups in Downtown Dubai or get in touch on WhatsApp, by phone or email.",
  alternates: {
    canonical: "https://puppy.instabizweb.com/contact",
  },
  openGraph: {
    title: "Visit & contact | TeddyPups U.A.E.",
    description:
      "Visit TeddyPups in Downtown Dubai or get in touch on WhatsApp, by phone or email.",
    url: "https://puppy.instabizweb.com/contact",
    siteName: "TeddyPups U.A.E.",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visit & contact | TeddyPups U.A.E.",
    description:
      "Visit TeddyPups in Downtown Dubai or get in touch on WhatsApp, by phone or email.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
