import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rent a Property",
  description: "Find your perfect rental home or list your property for rent with Chamadia Real Estates. Premium rental properties in Callachi Society, Karachi.",
  alternates: {
    canonical: "https://chamadiarealestates.com/rent",
  },
  openGraph: {
    title: "Rent a Property | Chamadia Real Estates",
    description: "Find your perfect rental home or list your property for rent with Chamadia Real Estates. Premium rental properties in Callachi Society, Karachi.",
    url: "https://chamadiarealestates.com/rent",
  },
  twitter: {
    title: "Rent a Property | Chamadia Real Estates",
    description: "Find your perfect rental home or list your property for rent with Chamadia Real Estates. Premium rental properties in Callachi Society, Karachi.",
  },
};

export default function RentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
