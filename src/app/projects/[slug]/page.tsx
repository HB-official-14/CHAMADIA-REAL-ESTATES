import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPin, Check, ArrowLeft } from "lucide-react";
import { PageLayout } from "@/components/layout/page-layout";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.name} | Chamadia Real Estates`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <PageLayout>
      <Section dark className="pt-32">
        <Link href="/projects" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.name}</h1>
          <p className="flex items-center gap-2 text-white/70 text-lg">
            <MapPin className="w-5 h-5" />
            {project.location}
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-6">About This Project</h2>
            <p className="text-gray-600 leading-relaxed mb-8">{project.description}</p>

            <h3 className="text-xl font-semibold text-navy-900 mb-4">Available Apartments</h3>
            <div className="space-y-2 mb-8">
              {project.units.map((unit) => (
                <div key={unit} className="flex items-center gap-2 text-gray-600">
                  <Check className="w-4 h-4 text-gold-500 flex-shrink-0" />
                  <span>{unit}</span>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold text-navy-900 mb-4">Key Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {project.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-gray-600">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-navy-900 mb-4">Amenities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {project.amenities.map((amenity) => (
                <div key={amenity} className="flex items-center gap-2 text-gray-600">
                  <Check className="w-4 h-4 text-gold-500 flex-shrink-0" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
            <div className="bg-gold-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-navy-900 mb-2">Interested in this project?</h3>
              <p className="text-gray-600 mb-4">Contact us for more information or to book a site visit.</p>
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full">
                  Inquire Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
