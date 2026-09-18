import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader } from "@/components/layout/section";
import { ProjectsExplorer } from "@/components/projects/projects-explorer";
import { LOCATIONS } from "@/data/locations";
import { projects } from "@/data/projects";
import { getProjectCoverImages } from "@/lib/project-images";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore premium real estate projects at Callachi Cooperative Housing Society and HMR Waterfront, Karachi. Discover luxury apartments and modern living spaces by Chamadia Real Estates.",
  alternates: {
    canonical: "https://chamadiarealestates.com/projects",
  },
  openGraph: {
    title: "Projects | Chamadia Real Estates",
    description: "Explore premium real estate projects at Callachi Cooperative Housing Society and HMR Waterfront, Karachi.",
    url: "https://chamadiarealestates.com/projects",
  },
  twitter: {
    title: "Projects | Chamadia Real Estates",
    description: "Explore premium real estate projects at Callachi Cooperative Housing Society and HMR Waterfront, Karachi.",
  },
};

interface Props {
  searchParams: Promise<{ location?: string }>;
}

export default async function ProjectsPage({ searchParams }: Props) {
  const { location } = await searchParams;
  const projectImages = getProjectCoverImages();

  return (
    <PageLayout>
      <Section dark className="pt-32">
        <SectionHeader
          title="Signature Projects"
          subtitle="Discover premium living at Callachi Cooperative Housing Society and HMR Waterfront, Karachi — where luxury meets comfort"
          light
        />
      </Section>

      <Section>
        <ProjectsExplorer
          locations={LOCATIONS}
          projects={projects}
          projectImages={projectImages}
          initialLocation={location}
        />
      </Section>
    </PageLayout>
  );
}