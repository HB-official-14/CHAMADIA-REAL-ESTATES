"use client";

import { PropertySearch } from "@/components/shared/property-search";

interface SearchSectionProps {
  projectImages?: Record<string, string | null>;
}

export function SearchSection({ projectImages = {} }: SearchSectionProps) {
  return (
    <PropertySearch
      projectImages={projectImages}
      enableFocusEvent
      className="relative -mt-16 z-20 pb-16"
    />
  );
}