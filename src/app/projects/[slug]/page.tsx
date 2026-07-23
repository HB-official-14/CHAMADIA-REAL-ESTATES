import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPin, Check, ArrowLeft, Calendar } from "lucide-react";
import { PageLayout } from "@/components/layout/page-layout";
import { Section } from "@/components/layout/section";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/data/projects";
import { ProjectDetailInquire } from "@/components/projects/project-detail-inquire";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { getProjectImages } from "@/lib/project-images";

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

function parseUnitBedrooms(unit: string): string | null {
  const match = unit.match(/(\d+)\s*Bed/);
  return match ? `${match[1]} Bedroom` : null;
}

function parseUnitSize(unit: string): string | null {
  const match = unit.match(/([\d,]+)\s*Sq\.?Ft/i);
  return match ? `${match[1]} Sq.Ft` : null;
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const projectImages = getProjectImages(project.name);

  return (
    <PageLayout>
      <Section dark className="pt-32 pb-16 md:pb-24">
        <Link href="/projects" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{project.name}</h1>
          <p className="flex items-center gap-2 text-white/70 text-lg">
            <MapPin className="w-5 h-5 text-gold-500" />
            {project.location}
          </p>
        </div>
      </Section>

      <Section className="-mt-16 md:-mt-24 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <ProjectGallery
            images={projectImages}
            projectName={project.name}
          />

          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">About This Project</h2>
            <p className="text-gray-600 leading-relaxed">{project.description}</p>
          </div>

          {project.units.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-6">Available Apartment Types</h2>
              <div className="space-y-3">
                {project.units.map((unit) => {
                  const bedrooms = parseUnitBedrooms(unit);
                  const size = parseUnitSize(unit);
                  return (
                    <div key={unit} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                      <Check className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-navy-900">
                          {bedrooms || unit}
                        </p>
                        {size && (
                          <p className="text-gray-500 text-sm mt-0.5">Available Size: {size}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="bg-navy-50 rounded-xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-3">
              <Calendar className="w-5 h-5 text-gold-500" />
              <h2 className="text-xl font-bold text-navy-900">Possession Period</h2>
            </div>
            {project.possession ? (
              <p className="text-gray-600">{project.possession}</p>
            ) : (
              <div>
                <p className="text-gray-600">Contact Us for Latest Availability</p>
                <p className="text-gray-500 text-sm mt-1">
                  Speak with our team for the most up-to-date possession schedule
                </p>
              </div>
            )}
          </div>

          {(project.features.length > 0 || project.amenities.length > 0) && (
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-6">Luxury Features &amp; Amenities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-navy-900 uppercase tracking-wider mb-3">Features</h3>
                  <div className="space-y-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-gray-600">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-navy-900 uppercase tracking-wider mb-3">Amenities</h3>
                  <div className="space-y-2">
                    {project.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center gap-2 text-gray-600">
                        <Check className="w-4 h-4 text-gold-500 flex-shrink-0" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="bg-gold-50 rounded-xl p-6 md:p-8 text-center">
            <h2 className="text-xl font-bold text-navy-900 mb-2">Interested in this project?</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Contact us for more information or to book a site visit.
            </p>
            <ProjectDetailInquire />
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
