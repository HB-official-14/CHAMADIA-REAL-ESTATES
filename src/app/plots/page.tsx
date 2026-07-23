import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { PlotCardActions } from "@/components/plots/plot-card-actions";
import { plots } from "@/data/plots";

export const metadata: Metadata = {
  title: "Plots | Chamadia Real Estates",
  description: "Premium residential plots at Callachi Society, Karachi.",
};

export default function PlotsPage() {
  return (
    <PageLayout>
      <Section dark className="pt-32">
        <SectionHeader
          title="Premium Residential Plots"
          subtitle="Discover exclusive residential plots at Callachi Society, Karachi — build your dream home in a premium community"
          light
        />
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plots.map((plot) => (
            <Card key={plot.slug} hover className="flex flex-col">
              <div className="relative w-full bg-black">
                <Image
                  src={plot.image}
                  alt={plot.title}
                  width={1448}
                  height={1086}
                  className="w-full h-auto object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  {plot.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
                  {plot.description}
                </p>
                <PlotCardActions slug={plot.slug} />
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}
