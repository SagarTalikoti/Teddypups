import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PuppyDetailContent from "@/components/puppies/PuppyDetailContent";
import { getAllPuppySlugs, getPuppyBySlug, getNextPrevPuppies } from "@/lib/data";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllPuppySlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const puppy = getPuppyBySlug(slug);

  if (!puppy) {
    return {
      title: "Puppy Not Found | TeddyPups U.A.E.",
    };
  }

  const title = `${puppy.name}, ${puppy.breed} puppy | TeddyPups U.A.E.`;
  const description = `Meet ${puppy.name}: ${puppy.breed}, ${puppy.genderLabel || puppy.gender}, ${puppy.age} old, ${puppy.origin?.name || "imported"}. Real photos and video from TeddyPups U.A.E.`;
  const imageUrl = puppy.cover?.url ? `https://puppy.instabizweb.com${puppy.cover.url}` : undefined;

  return {
    title,
    description,
    alternates: {
      canonical: `https://puppy.instabizweb.com/puppies/${slug}`,
    },
    openGraph: {
      title: `${puppy.name}, ${puppy.breed} puppy`,
      description,
      url: `https://puppy.instabizweb.com/puppies/${slug}`,
      siteName: "TeddyPups U.A.E.",
      locale: "en_AE",
      type: "website",
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: puppy.cover?.width || 600,
              height: puppy.cover?.height || 700,
              alt: `${puppy.name}, ${puppy.breed} puppy`,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${puppy.name}, ${puppy.breed} puppy`,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default async function PuppyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const puppy = getPuppyBySlug(slug);

  if (!puppy) {
    notFound();
  }

  const { prev, next } = getNextPrevPuppies(slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Puppies",
        item: "https://puppy.instabizweb.com/puppies",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: puppy.name,
        item: `https://puppy.instabizweb.com/puppies/${puppy.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PuppyDetailContent puppy={puppy} prevPuppy={prev} nextPuppy={next} />
    </>
  );
}
