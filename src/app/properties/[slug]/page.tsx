import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Bed, Bath, Maximize, MapPin } from "lucide-react";
import { PageLayout } from "@/components/layout/page-layout";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.replace(/-/g, " ");
  return {
    title: `${title.charAt(0).toUpperCase() + title.slice(1)}`,
    description: `View details of ${title} in Callachi Society, Karachi. Premium real estate property by Chamadia Real Estates.`,
    alternates: {
      canonical: `https://chamadiarealestates.com/properties/${slug}`,
    },
    openGraph: {
      title: `${title.charAt(0).toUpperCase() + title.slice(1)} | Chamadia Real Estates`,
      description: `View details of ${title} in Callachi Society, Karachi.`,
      url: `https://chamadiarealestates.com/properties/${slug}`,
    },
    twitter: {
      title: `${title.charAt(0).toUpperCase() + title.slice(1)} | Chamadia Real Estates`,
      description: `View details of ${title} in Callachi Society, Karachi.`,
    },
  };
}

export default async function PropertyDetailPage({ params }: Props) {
  const { slug } = await params;

  return (
    <PageLayout>
      <Section dark className="pt-32">
        <Link href="/properties" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Properties
        </Link>
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold mb-4">Property Details</h1>
          <p className="text-white/70">Property listing coming soon</p>
        </div>
      </Section>
    </PageLayout>
  );
}
