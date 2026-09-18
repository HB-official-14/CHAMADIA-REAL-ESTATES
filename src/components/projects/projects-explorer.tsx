"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { MapPin, BedDouble, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { ProjectCardActions } from "@/components/projects/project-card-actions";
import type { LocationData, LocationKey } from "@/data/locations";
import type { ProjectData } from "@/data/projects";

interface ProjectsExplorerProps {
  locations: LocationData[];
  projects: ProjectData[];
  projectImages: Record<string, string | null>;
  initialLocation?: string;
}

interface LocationSection {
  heading: string;
  blurb: string;
}

const SECTION_META: Record<LocationKey, LocationSection> = {
  "callachi-cooperative-housing-society": {
    heading: "Callachi Signature Projects",
    blurb:
      "Premium apartment living within the prestigious Callachi Cooperative Housing Society, Gulshan-e-Iqbal, Karachi.",
  },
  "hmr-waterfront": {
    heading: "HMR Waterfront Projects",
    blurb:
      "Preferred waterfront residences presented by Chamadia Real Estates at HMR Waterfront, Karachi.",
  },
};

function ProjectCard({
  project,
  image,
}: {
  project: ProjectData;
  image: string | null;
}) {
  return (
    <Card hover className="flex flex-col">
      <div className="relative h-52 overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={project.name}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-900" />
        )}
        {project.status && (
          <span className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            {project.status}
          </span>
        )}
      </div>
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-bold text-navy-900">{project.name}</h3>
        <p className="flex items-center gap-1.5 text-gray-500 text-xs mt-1 mb-3">
          <MapPin className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
          {project.location}
        </p>
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {project.units.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {project.units.slice(0, 3).map((unit) => (
              <span
                key={unit}
                className="inline-flex items-center gap-1.5 rounded-full bg-gold-50 border border-gold-200 px-2.5 py-1 text-xs font-medium text-navy-900"
              >
                <BedDouble className="w-3.5 h-3.5 text-gold-600" />
                {unit}
              </span>
            ))}
            {project.units.length > 3 && (
              <span className="inline-flex items-center rounded-full bg-gray-100 border border-gray-200 px-2.5 py-1 text-xs font-medium text-gray-600">
                +{project.units.length - 3} more
              </span>
            )}
          </div>
        )}

        <div className="mt-auto pt-5">
          <ProjectCardActions slug={project.slug} label="View Project" />
        </div>
      </div>
    </Card>
  );
}

function LocationCard({
  location,
  projectsCount,
  active,
  onSelect,
}: {
  location: LocationData;
  projectsCount: number;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      className={cn(
        "group relative text-left w-full rounded-2xl overflow-hidden border-2 transition-all duration-300",
        active
          ? "border-gold-500 ring-2 ring-gold-500/30 shadow-xl shadow-gold-500/10"
          : "border-transparent shadow-lg shadow-black/5 hover:shadow-2xl hover:-translate-y-1"
      )}
    >
      <div className="relative h-52 sm:h-60 lg:h-64 w-full">
        <Image
          src={location.image}
          alt={location.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          style={{ objectPosition: location.objectPosition ?? "center center" }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/25 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 p-6">
          {location.shortName && (
            <p className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-1.5">
              {location.shortName}
            </p>
          )}
          <h3 className="text-white text-2xl font-bold">{location.name}</h3>
          {location.description && (
            <p className="text-white/80 text-sm mt-1.5 line-clamp-2 max-w-lg">
              {location.description}
            </p>
          )}
          <span
            className={cn(
              "inline-flex items-center gap-1.5 mt-4 rounded-full px-4 py-1.5 text-xs font-semibold transition-colors",
              active
                ? "bg-gold-500 text-navy-950"
                : "bg-white/15 backdrop-blur text-white group-hover:bg-gold-500 group-hover:text-navy-950"
            )}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            {active ? "Selected" : `${projectsCount} Projects`}
          </span>
        </div>
      </div>
    </button>
  );
}

export function ProjectsExplorer({
  locations,
  projects,
  projectImages,
  initialLocation,
}: ProjectsExplorerProps) {
  const router = useRouter();
  const isValidLocation = locations.some((loc) => loc.key === initialLocation);
  const [activeLocation, setActiveLocation] = useState<LocationKey | "">(
    isValidLocation && initialLocation ? (initialLocation as LocationKey) : ""
  );

  const locationIdsWithProjects = useMemo(
    () => [...new Set(projects.map((p) => p.locationKey))],
    [projects]
  );

  const selectLocation = (key: LocationKey) => {
    setActiveLocation(key);
    router.replace(`/projects?location=${key}`, { scroll: false });
  };

  const resetLocation = () => {
    setActiveLocation("");
    router.replace("/projects", { scroll: false });
  };

  const cards = locations.filter((loc) =>
    locationIdsWithProjects.includes(loc.key)
  );

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {cards.map((location) => (
          <LocationCard
            key={location.key}
            location={location}
            projectsCount={
              projects.filter((p) => p.locationKey === location.key).length
            }
            active={activeLocation === location.key}
            onSelect={() => selectLocation(location.key)}
          />
        ))}
      </div>

      {activeLocation && (
        <div className="flex justify-center mt-10">
          <button
            type="button"
            onClick={resetLocation}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-navy-900 transition-colors"
          >
            <span className="w-5 h-px bg-gray-300" />
            View all projects
            <span className="w-5 h-px bg-gray-300" />
          </button>
        </div>
      )}

      <div className="mt-16 md:mt-20 space-y-20">
        {cards.map((location) => {
          const meta = SECTION_META[location.key];
          const locationProjects = projects.filter(
            (p) => p.locationKey === location.key
          );
          if (
            activeLocation !== "" &&
            activeLocation !== location.key
          ) {
            return null;
          }
          return (
            <div key={location.key} id={location.key}>
              <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                  {meta.heading}
                </h2>
                <p className="text-lg text-gray-600">{meta.blurb}</p>
                <div className="w-20 h-1 bg-gold-500 mx-auto mt-6 rounded-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {locationProjects.map((project) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    image={projectImages[project.name] ?? null}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}