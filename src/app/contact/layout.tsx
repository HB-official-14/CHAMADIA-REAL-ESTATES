import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Chamadia Real Estates. Call, email, or visit our office at Callachi Society, Gulshan-e-Iqbal, Block 10-A, Karachi for all your real estate needs.",
  alternates: {
    canonical: "https://chamadiarealestates.com/contact",
  },
  openGraph: {
    title: "Contact Us | Chamadia Real Estates",
    description: "Get in touch with Chamadia Real Estates. Call, email, or visit us for all your real estate needs.",
    url: "https://chamadiarealestates.com/contact",
  },
  twitter: {
    title: "Contact Us | Chamadia Real Estates",
    description: "Get in touch with Chamadia Real Estates. Call, email, or visit us for all your real estate needs.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
