import type { Metadata } from "next";
import FaqContent from "@/components/faq/FaqContent";
import { FAQS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Questions & answers | TeddyPups U.A.E.",
  description:
    "Answers about TeddyPups puppies: health checks and vaccinations, meeting local puppies, imported teacup breeds and delivery.",
  alternates: {
    canonical: "https://puppy.instabizweb.com/faq",
  },
  openGraph: {
    title: "Questions & answers | TeddyPups U.A.E.",
    description:
      "Answers about TeddyPups puppies: health checks and vaccinations, meeting local puppies, imported teacup breeds and delivery.",
    url: "https://puppy.instabizweb.com/faq",
    siteName: "TeddyPups U.A.E.",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Questions & answers | TeddyPups U.A.E.",
    description:
      "Answers about TeddyPups puppies: health checks and vaccinations, meeting local puppies, imported teacup breeds and delivery.",
  },
};

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqContent />
    </>
  );
}
