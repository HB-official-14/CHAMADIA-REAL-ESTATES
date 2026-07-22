import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Chamadia Real Estates",
  description: "Get in touch with Chamadia Real Estates. Call, email, or visit us for all your real estate needs.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
