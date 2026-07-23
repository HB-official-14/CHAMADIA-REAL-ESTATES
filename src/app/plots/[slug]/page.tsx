import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Ruler, Check } from "lucide-react";
import { PageLayout } from "@/components/layout/page-layout";
import { Section } from "@/components/layout/section";
import { PlotDetailContact } from "@/components/plots/plot-detail-contact";
import { plots, getPlotBySlug } from "@/data/plots";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return plots.map((plot) => ({ slug: plot.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const plot = getPlotBySlug(slug);
  if (!plot) return { title: "Plot Not Found" };
  return {
    title: `${plot.title} | Chamadia Real Estates`,
    description: plot.description,
  };
}

export default async function PlotDetailPage({ params }: Props) {
  const { slug } = await params;
  const plot = getPlotBySlug(slug);

  if (!plot) notFound();

  return (
    <PageLayout>
      <Section dark className="pt-32 pb-16 md:pb-24">
        <Link
          href="/plots"
          className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Plots
        </Link>
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {plot.title}
          </h1>
          <p className="flex items-center gap-2 text-white/70 text-lg">
            <MapPin className="w-5 h-5 text-gold-500" />
            {plot.location}
          </p>
        </div>
      </Section>

      <Section className="-mt-16 md:-mt-24 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={plot.image}
              alt={plot.title}
              width={1448}
              height={1086}
              className="w-full h-auto object-contain bg-black"
              priority
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">
              About This Plot
            </h2>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              {plot.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-navy-50 border border-navy-100">
              <div className="w-12 h-12 rounded-full bg-navy-900 flex items-center justify-center flex-shrink-0">
                <Ruler className="w-5 h-5 text-gold-500" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                  Plot Size
                </p>
                <p className="text-navy-900 font-bold text-lg">{plot.size}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-navy-50 border border-navy-100">
              <div className="w-12 h-12 rounded-full bg-navy-900 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-gold-500" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                  Location
                </p>
                <p className="text-navy-900 font-bold text-sm">{plot.location}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">
              The Community
            </h2>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              {plot.community}
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">
              Investment Highlights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {plot.highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100"
                >
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">
              Community Amenities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {plot.amenities.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100"
                >
                  <Check className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gold-50 rounded-xl p-8 md:p-10 text-center">
            <h2 className="text-2xl font-bold text-navy-900 mb-3">
              Interested in this plot?
            </h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Contact us today for pricing, availability, and to schedule a site visit.
            </p>
            <PlotDetailContact />
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
