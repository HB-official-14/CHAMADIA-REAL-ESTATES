export interface PlotData {
  title: string;
  slug: string;
  size: string;
  location: string;
  description: string;
  image: string;
  community: string;
  highlights: string[];
  amenities: string[];
}

export const plots: PlotData[] = [
  {
    title: "240 Square Yards Residential Plot",
    slug: "240-square-yards",
    size: "240 Sq.Yd",
    location: "Callachi Society, Karachi",
    description:
      "Build your dream home on this premium 240 Square Yards residential plot located in the heart of Callachi Society. Ideal for families looking for a peaceful, secure, and well-connected neighborhood. A perfect opportunity to invest in your future and create a beautiful home for generations to come.",
    image: "/plots/240 Sq yd.png",
    community:
      "Callachi Society is a prestigious residential community in Gulshan-e-Iqbal, Block 10-A, Karachi. Known for its peaceful environment, well-planned infrastructure, and close proximity to schools, hospitals, and shopping centers, it offers an ideal setting for modern family living.",
    highlights: [
      "Prime location in Gulshan-e-Iqbal, Block 10-A",
      "Peaceful and secure neighborhood",
      "Well-connected to major city routes",
      "Close to schools, hospitals, and markets",
      "Ideal for building your dream home",
      "Excellent long-term investment potential",
    ],
    amenities: [
      "24/7 security",
      "Wide paved roads",
      "Underground utilities",
      "Street lighting",
      "Drainage system",
      "Nearby parks and green spaces",
    ],
  },
  {
    title: "600 Square Yards Residential Plot",
    slug: "600-square-yards",
    size: "600 Sq.Yd",
    location: "Callachi Society, Karachi",
    description:
      "An exceptional 600 Square Yards residential plot in one of Karachi's most desirable communities. Perfect for constructing a spacious luxury home with landscaped gardens and premium living spaces. An excellent long-term investment in a prestigious location.",
    image: "/plots/600 Sq yd.png",
    community:
      "Callachi Society is a prestigious residential community in Gulshan-e-Iqbal, Block 10-A, Karachi. Known for its peaceful environment, well-planned infrastructure, and close proximity to schools, hospitals, and shopping centers, it offers an ideal setting for modern family living.",
    highlights: [
      "Expansive 600 Sq.Yd plot for luxury living",
      "Located in prestigious Callachi Society",
      "Perfect for large family home with garden",
      "Quiet tree-lined streets",
      "Premium investment opportunity",
      "High appreciation potential",
    ],
    amenities: [
      "24/7 security",
      "Wide paved roads",
      "Underground utilities",
      "Street lighting",
      "Drainage system",
      "Nearby parks and green spaces",
    ],
  },
];

export function getPlotBySlug(slug: string): PlotData | undefined {
  return plots.find((p) => p.slug === slug);
}
