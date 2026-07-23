import type { Metadata } from "next";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { ProjectCardActions } from "@/components/projects/project-card-actions";
import { projects } from "@/data/projects";
import { getProjectCoverImage } from "@/lib/project-images";

export const metadata: Metadata = {
  title: "Projects | Chamadia Real Estates",
  description: "Explore our premium real estate projects at Callachi Society, Karachi.",
};

export default function ProjectsPage() {
  return (
    <PageLayout>
      <Section dark className="pt-32">
        <SectionHeader
          title="Callachi Society Signature Projects"
          subtitle="Discover premium living at Callachi Society, Karachi — where luxury meets comfort"
          light
        />
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const coverImage = getProjectCoverImage(project.name);
            return (
              <Card key={project.slug} hover className="flex flex-col">
                <div className="px-6 pt-6 pb-3">
                  <h3 className="text-xl font-bold text-navy-900">{project.name}</h3>
                  <p className="flex items-center gap-1.5 text-gray-500 text-xs mt-1">
                    <MapPin className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
                    {project.location}
                  </p>
                </div>
                <div className="relative h-48 overflow-hidden mx-0">
                  {coverImage ? (
                    <Image
                      src={coverImage}
                      alt={project.name}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-900" />
                  )}
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1 line-clamp-3">
                    {project.description}
                  </p>

                  <ProjectCardActions slug={project.slug} />
                </div>
              </Card>
            );
          })}
        </div>
      </Section>
    </PageLayout>
  );
}
