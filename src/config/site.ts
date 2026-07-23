export const siteConfig = {
  name: "Chamadia Real Estates",
  tagline: "Premium Real Estate Solutions",
  description: "Discover luxury properties and premium real estate investments with Chamadia Real Estates. Expert guidance for your property journey.",
  url: "https://chamadiarealestates.com",
  ogImage: "/images/og-image.jpg",
  email: "info@chamadiarealestates.com",
  phone: "+92 300 1234567",
  whatsapp: "+923001234567",
  address: "Main Boulevard, Gulberg III, Lahore, Pakistan",
  social: {
    instagram: "https://www.instagram.com/chamadia_realestates?utm_source=qr",
    facebook: "https://www.facebook.com/share/1DPjfEupNf/?mibextid=wwXIfr",
    youtube: "https://youtube.com/@chamadiarealestate?si=SaiZfAJRVejPdBwq",
  },
};

export const siteFeatures = {
  enableWhatsAppNotifications: true,
  enableAIAssistant: true,
  enableAppointmentBooking: true,
  enableLeadCapture: true,
  maxImageUploads: 10,
  defaultPageSize: 12,
};

export interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Plots", href: "/plots" },
  { label: "Sell", href: "/sell" },
  { label: "Rent", href: "/rent" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const PROPERTY_TYPES = [
  "Apartment",
  "Plot",
  "Villa",
  "Penthouse",
  "Duplex",
  "Commercial",
  "Shop",
] as const;

export const PROPERTY_STATUSES = [
  "Available",
] as const;

export const PURPOSE_OPTIONS = [
  "Buy",
  "Sell",
  "Rent",
] as const;

export const PROPERTY_SORT_OPTIONS = [
  { label: "Newest First", value: "newest" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Area: Low to High", value: "area_asc" },
  { label: "Area: High to Low", value: "area_desc" },
] as const;
