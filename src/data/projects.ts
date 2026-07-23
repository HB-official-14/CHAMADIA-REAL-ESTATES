export interface ProjectData {
  name: string;
  slug: string;
  location: string;
  units: string[];
  description: string;
  features: string[];
  amenities: string[];
  possession?: string;
}

export const projects: ProjectData[] = [
  {
    name: "AA Residencia",
    slug: "aa-residencia",
    location: "Callachi Society, Karachi, Pakistan",
    units: [
      "2 Bed DD \u2014 1130 Sq.Ft",
      "3 Bed DD \u2014 1558 Sq.Ft",
    ],
    description:
      "AA Residencia offers a perfect balance of affordable luxury and modern family living. Designed with spacious layouts and contemporary architecture, it provides comfort, security, and long-term investment value in the heart of Callachi Society, Karachi.",
    features: [
      "Contemporary architectural design",
      "Spacious living areas",
      "Modern kitchen finishes",
      "24/7 security system",
      "Power backup",
      "Covered parking",
    ],
    amenities: [
      "Community garden",
      "Children\u2019s play area",
      "Jogging track",
      "Community hall",
      "Prayer area",
      "Visitor parking",
    ],
  },
  {
    name: "AA Beverly",
    slug: "aa-beverly",
    location: "Callachi Society, Karachi, Pakistan",
    units: [
      "3 Bed DD \u2014 1900 Sq.Ft",
      "4 Bed DD \u2014 2200 Sq.Ft",
    ],
    description:
      "AA Beverly is a premium residential destination featuring elegant interiors, generous living spaces, and a refined lifestyle. Built for families seeking luxury, comfort, and an exceptional living experience.",
    features: [
      "Elegant interior finishes",
      "Spacious room layouts",
      "Premium flooring",
      "Double-glazed windows",
      "Centralized gas supply",
      "Security staff",
    ],
    amenities: [
      "Swimming pool",
      "Fitness center",
      "Landscaped gardens",
      "Community lounge",
      "Kids\u2019 play zone",
      "Backup generator",
    ],
  },
  {
    name: "AA Enclave",
    slug: "aa-enclave",
    location: "Callachi Society, Karachi, Pakistan",
    units: [
      "3 Bed DD \u2014 1560 Sq.Ft",
      "4 Bed DD \u2014 1900 Sq.Ft",
    ],
    description:
      "AA Enclave combines modern architecture with peaceful surroundings to create an exclusive residential community. Every apartment is designed to maximize space, natural light, and everyday convenience.",
    features: [
      "Modern architectural design",
      "Maximized natural light",
      "Open floor plans",
      "Energy-efficient fixtures",
      "Wide corridors",
      "Service elevator",
    ],
    amenities: [
      "Parks and green spaces",
      "Walking trails",
      "Community center",
      "Sports court",
      "Mosque",
      "24/7 maintenance",
    ],
  },
  {
    name: "AA Boulevard",
    slug: "aa-boulevard",
    location: "Callachi Society, Karachi, Pakistan",
    units: [
      "3 Bed DD \u2014 1800 Sq.Ft",
      "4 Bed DD \u2014 2100 Sq.Ft",
    ],
    description:
      "AA Boulevard delivers premium urban living with spacious apartments, sophisticated design, and excellent accessibility. An ideal address for families looking for luxury and long-term value.",
    features: [
      "Sophisticated interior design",
      "Expansive living spaces",
      "High-quality finishes",
      "Modern bathrooms",
      "Storage areas",
      "Visitor parking",
    ],
    amenities: [
      "Rooftop terrace",
      "Community hall",
      "Children\u2019s pool",
      "Landscaped courtyard",
      "BBQ area",
      "Security cameras",
    ],
  },
  {
    name: "The Court Heights",
    slug: "the-court-heights",
    location: "Callachi Society, Karachi, Pakistan",
    units: [
      "2 Bed DD \u2014 956 Sq.Ft",
      "2 Bed DD \u2014 1170 Sq.Ft",
      "2 Bed DD + Maid Room \u2014 1284 Sq.Ft",
      "3 Bed DD + Maid Room \u2014 1580 Sq.Ft",
      "3 Bed DD + Maid Room \u2014 1846 Sq.Ft",
      "3 Bed DD + Maid Room \u2014 1873 Sq.Ft",
      "4 Bed DD \u2014 2500 Sq.Ft",
    ],
    description:
      "The Court Heights is designed for those who appreciate spacious layouts, premium finishes, and elegant living. From compact family apartments to expansive residences, every home offers comfort, functionality, and prestige.",
    features: [
      "Multiple layout options",
      "Premium finishes",
      "Maid rooms available",
      "Expansive balconies",
      "High-speed elevators",
      "Video door security",
    ],
    amenities: [
      "Grand lobby",
      "Swimming pool",
      "Gymnasium",
      "Community hall",
      "Children\u2019s play area",
      "Concierge service",
    ],
  },
  {
    name: "Shayan Iconic Palace",
    slug: "shayan-iconic-palace",
    location: "Callachi Society, Karachi, Pakistan",
    units: [
      "2 Bed DD \u2014 1232 Sq.Ft",
      "3 Bed DD \u2014 1665 Sq.Ft",
      "4 Bed DD \u2014 1975 Sq.Ft",
    ],
    description:
      "Shayan Iconic Palace reflects timeless elegance with premium construction, luxurious interiors, and thoughtfully planned living spaces. A prestigious address for modern families seeking refined living.",
    features: [
      "Premium construction quality",
      "Luxurious interiors",
      "Thoughtful floor plans",
      "Italian marble flooring",
      "Imported fittings",
      "Smart home pre-wiring",
    ],
    amenities: [
      "Infinity pool",
      "Steam and sauna",
      "Gymnasium",
      "Party hall",
      "Landscaped garden",
      "Valet parking",
    ],
  },
  {
    name: "Titan One",
    slug: "titan-one",
    location: "Callachi Society, Karachi, Pakistan",
    units: [
      "2 Bed DD \u2014 1132 Sq.Ft",
      "3 Bed DD \u2014 1502 Sq.Ft",
      "3 Bed DD \u2014 1632 Sq.Ft",
      "4 Bed DD Penthouse with Roof \u2014 3278 Sq.Ft",
      "4 Bed DD Duplex \u2014 2113 Sq.Ft",
      "5 Bed DD Duplex \u2014 2790 Sq.Ft",
      "5 Bed DD Penthouse with Roof \u2014 4280 Sq.Ft",
    ],
    description:
      "Titan One represents the highest standard of luxury living with premium apartments, duplexes, and exclusive penthouses. Exceptional architecture, expansive layouts, and world-class design create a truly iconic residential experience.",
    features: [
      "Exclusive penthouses and duplexes",
      "Panoramic city views",
      "Private roof terraces",
      "Expansive layouts up to 4280 Sq.Ft",
      "Private elevator access",
      "Premium imported fixtures",
    ],
    amenities: [
      "Sky lounge",
      "Infinity pool",
      "State-of-the-art gym",
      "Spa and wellness center",
      "Private cinema",
      "24/7 concierge",
    ],
  },
  {
    name: "Centric Tower",
    slug: "centric-tower",
    location: "Callachi Society, Karachi, Pakistan",
    units: [
      "2 Bed DD \u2014 1300 Sq.Ft",
      "3 Bed DD \u2014 1772 Sq.Ft",
    ],
    description:
      "Centric Tower is crafted for modern lifestyles, offering elegant apartments with efficient layouts, premium finishes, and a convenient location. Ideal for both homeowners and investors seeking long-term value.",
    features: [
      "Efficient space planning",
      "Premium finishes",
      "Modern kitchen design",
      "Built-in wardrobes",
      "Service elevator",
      "24/7 security",
    ],
    amenities: [
      "Rooftop garden",
      "Community lounge",
      "Fitness area",
      "Children\u2019s playroom",
      "Business center",
      "Visitor parking",
    ],
  },
  {
    name: "Centric Elite",
    slug: "centric-elite",
    location: "Callachi Society, Karachi, Pakistan",
    units: [
      "3 Bed DD \u2014 1900 Sq.Ft",
      "4 Bed DD \u2014 2410 Sq.Ft",
      "4 Bed DD with Private Lift \u2014 2785 Sq.Ft",
      "5 Bed DD with Private Lift \u2014 3233 Sq.Ft",
    ],
    description:
      "Centric Elite offers a distinguished lifestyle with expansive residences, private lift options, and premium craftsmanship. Every detail reflects luxury, exclusivity, and superior comfort.",
    features: [
      "Private lift access",
      "Expansive residence sizes",
      "Premium craftsmanship",
      "Designer interiors",
      "Wine cellar",
      "Home automation ready",
    ],
    amenities: [
      "Private terrace garden",
      "Jacuzzi",
      "Sauna room",
      "Library lounge",
      "Game room",
      "Dedicated parking",
    ],
  },
  {
    name: "Victoria Residency",
    slug: "victoria-residency",
    location: "Callachi Society, Karachi, Pakistan",
    units: [
      "2 Bed DD \u2014 1250 Sq.Ft",
      "3 Bed DD \u2014 1650 Sq.Ft",
      "4 Bed DD \u2014 2000 Sq.Ft",
    ],
    description:
      "Victoria Residency is a premium family-oriented development featuring beautifully planned apartments, contemporary architecture, and a peaceful community atmosphere for comfortable everyday living.",
    features: [
      "Beautifully planned layouts",
      "Contemporary architecture",
      "Quality construction",
      "Spacious balconies",
      "Modern kitchen fittings",
      "Ample storage",
    ],
    amenities: [
      "Community park",
      "Kids\u2019 play area",
      "Jogging track",
      "Community hall",
      "Security system",
      "Guest parking",
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find((p) => p.slug === slug);
}
