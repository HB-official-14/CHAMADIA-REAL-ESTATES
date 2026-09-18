import { projects } from "./projects";

export type LocationKey =
  | "callachi-cooperative-housing-society"
  | "hmr-waterfront";

export interface LocationData {
  key: LocationKey;
  name: string;
  shortName?: string;
  image: string;
  objectPosition?: string;
  description?: string;
}

export const LOCATIONS: LocationData[] = [
  {
    key: "callachi-cooperative-housing-society",
    name: "Callachi Cooperative Housing Society",
    shortName: "CCHS",
    image: "/images/callachi society.jpg",
    objectPosition: "center 25%",
    description:
      "A prestigious residential community in Gulshan-e-Iqbal, Block 10-A, Karachi, known for its premium apartment projects and plots.",
  },
  {
    key: "hmr-waterfront",
    name: "HMR Waterfront",
    image: "/images/hmr waterfront.jpg",
    objectPosition: "center center",
    description:
      "A premium waterfront location featuring exclusive residential developments by Chamadia Real Estates.",
  },
];

export function getLocationByKey(key: string): LocationData | undefined {
  return LOCATIONS.find((location) => location.key === key);
}

export function getProjectsForLocation(locationKey: string) {
  return projects.filter((project) => project.locationKey === locationKey);
}