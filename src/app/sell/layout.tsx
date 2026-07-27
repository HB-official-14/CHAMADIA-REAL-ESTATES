import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sell Your Property",
  description: "List your property with Chamadia Real Estates. Sell your apartment, villa, or plot in Callachi Society, Karachi. Get expert guidance and the best market price.",
  alternates: {
    canonical: "https://chamadiarealestates.com/sell",
  },
  openGraph: {
    title: "Sell Your Property | Chamadia Real Estates",
    description: "List your property with Chamadia Real Estates. Sell your apartment, villa, or plot in Callachi Society, Karachi.",
    url: "https://chamadiarealestates.com/sell",
  },
  twitter: {
    title: "Sell Your Property | Chamadia Real Estates",
    description: "List your property with Chamadia Real Estates. Sell your apartment, villa, or plot in Callachi Society, Karachi.",
  },
};

export default function SellLayout({ children }: { children: React.ReactNode }) {
  return children;
}
