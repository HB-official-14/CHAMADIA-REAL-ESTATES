import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { AIAssistantWrapper } from "@/components/ai/ai-assistant-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chamadia Real Estates | Premium Real Estate Solutions",
  description: "Discover luxury properties and premium real estate investments with Chamadia Real Estates. Expert guidance for your property journey in Pakistan.",
  keywords: "real estate, properties, luxury homes, Pakistan real estate, property investment, Chamadia",
  openGraph: {
    title: "Chamadia Real Estates | Premium Real Estate Solutions",
    description: "Discover luxury properties and premium real estate investments with Chamadia Real Estates.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        {children}
        <AIAssistantWrapper />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
