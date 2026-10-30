import type { Metadata } from "next";
import HowItWorksContent from "@/components/how-it-works/HowItWorksContent";

export const metadata: Metadata = {
  title: "How it works | TeddyPups U.A.E.",
  description:
    "Meet a local puppy in our Downtown Dubai showroom or reserve a premium teacup breed imported for you — every step, from choosing to coming home.",
  alternates: {
    canonical: "https://puppy.instabizweb.com/how-it-works",
  },
  openGraph: {
    title: "How it works | TeddyPups U.A.E.",
    description:
      "Meet a local puppy in our Downtown Dubai showroom or reserve a premium teacup breed imported for you — every step, from choosing to coming home.",
    url: "https://puppy.instabizweb.com/how-it-works",
    siteName: "TeddyPups U.A.E.",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How it works | TeddyPups U.A.E.",
    description:
      "Meet a local puppy in our Downtown Dubai showroom or reserve a premium teacup breed imported for you — every step, from choosing to coming home.",
  },
};

export default function HowItWorksPage() {
  return <HowItWorksContent />;
}
