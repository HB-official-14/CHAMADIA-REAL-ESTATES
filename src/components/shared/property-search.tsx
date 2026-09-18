"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Building2, MapPin, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { ProjectCardActions } from "@/components/projects/project-card-actions";
import { openContactPopup } from "@/components/layout/page-layout";
import { PROPERTY_TYPES, PURPOSE_OPTIONS } from "@/config/site";
import { projects } from "@/data/projects";
import { LOCATIONS, getLocationByKey } from "@/data/locations";

interface PropertySearchProps {
  projectImages?: Record<string, string | null>;
  showResultsInitially?: boolean;
  enableFocusEvent?: boolean;
  className?: string;
  panelClassName?: string;
}

interface ResultCardProps {
  name: string;
  slug: string;
  location: string;
  description: string;
  image: string | null;
}

function ResultCard({ name, slug, location, description, image }: ResultCardProps) {
  return (
    <Card hover className="flex flex-col">
      <div className="px-6 pt-6 pb-3">
        <h4 className="text-xl font-bold text-navy-900">{name}</h4>
        <p className="flex items-center gap-1.5 text-gray-500 text-xs mt-1">
          <MapPin className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
          {location}
        </p>
      </div>
      <div className="relative h-48 overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
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
          {description}
        </p>
        <ProjectCardActions slug={slug} />
      </div>
    </Card>
  );
}

export function PropertySearch({
  projectImages = {},
  showResultsInitially = false,
  enableFocusEvent = false,
  className,
  panelClassName,
}: PropertySearchProps) {
  const router = useRouter();
  const sectionRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const purposeRef = useRef<HTMLSelectElement>(null);

  const [location, setLocation] = useState("");
  const [project, setProject] = useState("");
  const [purpose, setPurpose] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [showResults, setShowResults] = useState(showResultsInitially);
  const [highlighted, setHighlighted] = useState(false);

  useEffect(() => {
    if (!enableFocusEvent) return;
    const handler = () => {
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      setTimeout(() => {
        purposeRef.current?.focus();
        setHighlighted(true);
        setTimeout(() => setHighlighted(false), 2000);
      }, 600);
    };
    window.addEventListener("focus-search", handler);
    return () => window.removeEventListener("focus-search", handler);
  }, [enableFocusEvent]);

  const projectOptions = useMemo(() => {
    if (!location) return [];
    return projects.filter((p) => p.locationKey === location);
  }, [location]);

  const results = useMemo(
    () =>
      projects.filter(
        (p) =>
          (!location || p.locationKey === location) &&
          (!project || p.name === project)
      ),
    [location, project]
  );

  const selectedLocation = location ? getLocationByKey(location) : undefined;

  const handleSearch = () => {
    if (purpose === "Sell") {
      router.push("/sell");
      return;
    }
    if (purpose === "Rent") {
      router.push("/rent");
      return;
    }
    if (propertyType === "Plot") {
      router.push("/plots");
      return;
    }
    setShowResults(true);
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div ref={sectionRef} className={className}>
      <Container>
        <div
          className={cn(
            "bg-white rounded-2xl p-6 md:p-8 transition-all duration-700 shadow-2xl",
            panelClassName,
            highlighted &&
              "shadow-[0_0_0_4px_rgba(212,175,55,0.3),0_20px_60px_-12px_rgba(0,0,0,0.3)] ring-2 ring-gold-500/50 scale-[1.01]"
          )}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <select
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                  setProject("");
                }}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-navy-900/50 focus:border-navy-900 bg-white"
              >
                <option value="">All Locations</option>
                {LOCATIONS.map((loc) => (
                  <option key={loc.key} value={loc.key}>
                    {loc.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Project</label>
              <select
                value={project}
                onChange={(e) => setProject(e.target.value)}
                disabled={!location}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-navy-900/50 focus:border-navy-900 bg-white disabled:bg-gray-50 disabled:text-gray-400"
              >
                <option value="">
                  {location ? "All Projects" : "Select location first"}
                </option>
                {projectOptions.map((p) => (
                  <option key={p.slug} value={p.name}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Purpose</label>
              <select
                ref={purposeRef}
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-navy-900/50 focus:border-navy-900 bg-white"
              >
                <option value="">Select Purpose</option>
                {PURPOSE_OPTIONS.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-navy-900/50 focus:border-navy-900 bg-white"
              >
                <option value="">Select Type</option>
                {PROPERTY_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <Button variant="primary" size="md" className="flex-1" onClick={handleSearch}>
                <Search className="w-4 h-4" />
                Search
              </Button>
            </div>
          </div>
        </div>

        {showResults && (
          <div ref={resultsRef} id="property-search-results" className="mt-10 md:mt-12">
            {selectedLocation ? (
              <div className="relative rounded-2xl overflow-hidden mb-8 shadow-lg shadow-black/5">
                <div className="relative h-44 md:h-56">
                  <Image
                    src={selectedLocation.image}
                    alt={selectedLocation.name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/30 to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
                    <div>
                      <h3 className="text-white text-2xl font-bold">{selectedLocation.name}</h3>
                      {selectedLocation.description && (
                        <p className="text-white/80 text-sm mt-1 max-w-xl">
                          {selectedLocation.description}
                        </p>
                      )}
                    </div>
                    <span className="text-sm font-semibold text-white bg-white/15 backdrop-blur px-3 py-1 rounded-full w-fit">
                      {results.length} {results.length === 1 ? "property" : "properties"}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between gap-4 mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-navy-900">
                  {project || "Available Properties"}
                </h3>
                <span className="text-sm text-gray-500 whitespace-nowrap">
                  {results.length} {results.length === 1 ? "property" : "properties"}
                </span>
              </div>
            )}

            {results.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {results.map((project) => (
                  <ResultCard
                    key={project.slug}
                    name={project.name}
                    slug={project.slug}
                    location={project.location}
                    description={project.description}
                    image={projectImages[project.name] ?? null}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-navy-50/50 border border-navy-100 rounded-2xl p-10 text-center">
                <div className="w-14 h-14 bg-navy-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-7 h-7 text-gold-500" />
                </div>
                <h4 className="text-lg font-bold text-navy-900 mb-2">
                  No properties match your search
                </h4>
                <p className="text-gray-600 max-w-md mx-auto mb-6">
                  Please contact Chamadia Real Estates for the latest availability and upcoming
                  projects.
                </p>
                <Button variant="secondary" onClick={openContactPopup}>
                  Contact Us
                </Button>
              </div>
            )}
          </div>
        )}
      </Container>
    </div>
  );
}