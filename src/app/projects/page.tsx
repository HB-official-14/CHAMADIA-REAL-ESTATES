import type { Metadata } from "next";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { projects } from "@/data/projects";

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
          {projects.map((project, index) => (
            <Card key={project.slug} hover className="flex flex-col">
              <div className="h-48 bg-gradient-to-br from-navy-800 to-navy-900 relative flex items-center justify-center">
                <span className="text-gold-500 font-bold text-xl tracking-wider">
                  {project.name}
                </span>
              </div>
              <div className="flex flex-col flex-1 p-6">
                <p className="flex items-center gap-1.5 text-gray-500 text-sm mb-4">
                  <MapPin className="w-4 h-4 text-gold-500" />
                  {project.location}
                </p>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-navy-900 uppercase tracking-wider mb-2">
                    Apartment Types
                  </h4>
                  <div className="space-y-1">
                    {project.units.map((unit) => (
                      <p
                        key={unit}
                        className="text-sm text-gray-600 pl-3 border-l-2 border-gold-500/50"
                      >
                        {unit}
                      </p>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <Link href={`/projects/${project.slug}`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full group">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <a href="/contact" className="flex-1">
                    <Button variant="secondary" size="sm" className="w-full">
                      <Phone className="w-4 h-4 mr-1" />
                      Contact Us
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}
