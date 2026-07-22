import type { Metadata } from "next";
import { MapPin, Building2 } from "lucide-react";
import { PageLayout } from "@/components/layout/page-layout";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = {
  title: "Plots | Chamadia Real Estates",
  description: "Premium residential and commercial plots at Callachi Society, Karachi — coming soon.",
};

export default function PlotsPage() {
  return (
    <PageLayout>
      <Section dark className="pt-32 min-h-[70vh] flex items-center">
        <div className="w-full max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold-500/10 mb-8">
            <Building2 className="w-10 h-10 text-gold-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Plots Coming Soon</h1>
          <p className="text-white/70 text-lg mb-3 max-w-xl mx-auto">
            We are preparing an exclusive selection of premium residential and commercial plots at Callachi Society, Karachi.
          </p>
          <p className="text-white/50 text-sm">
            Stay tuned for upcoming inventory.
          </p>
          <div className="mt-10 flex items-center justify-center gap-2 text-white/40 text-sm">
            <MapPin className="w-4 h-4" />
            Callachi Society, Karachi, Pakistan
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
