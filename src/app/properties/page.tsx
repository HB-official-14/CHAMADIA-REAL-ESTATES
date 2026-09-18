import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section } from "@/components/layout/section";
import { PropertySearch } from "@/components/shared/property-search";
import { getProjectCoverImages } from "@/lib/project-images";

export const metadata: Metadata = {
  title: "Properties",
  description:
    "Browse premium properties and projects for sale and rent by Chamadia Real Estates in Callachi Cooperative Housing Society and HMR Waterfront, Karachi. Find apartments, plots, and residential developments.",
  alternates: {
    canonical: "https://chamadiarealestates.com/properties",
  },
  openGraph: {
    title: "Properties | Chamadia Real Estates",
    description:
      "Browse premium properties and projects for sale and rent by Chamadia Real Estates in Callachi Cooperative Housing Society and HMR Waterfront, Karachi.",
    url: "https://chamadiarealestates.com/properties",
  },
  twitter: {
    title: "Properties | Chamadia Real Estates",
    description:
      "Browse premium properties and projects for sale and rent by Chamadia Real Estates.",
  },
};

export default function PropertiesPage() {
  const projectImages = getProjectCoverImages();

  return (
    <PageLayout>
      <Section dark className="pt-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Properties</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Search available properties and projects across our featured locations
          </p>
        </div>
      </Section>

      <PropertySearch
        projectImages={projectImages}
        showResultsInitially
        className="relative -mt-16 z-20 pb-20"
        panelClassName="shadow-lg border border-gray-100"
      />
    </PageLayout>
  );
}