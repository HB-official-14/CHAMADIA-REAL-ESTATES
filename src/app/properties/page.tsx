import type { Metadata } from "next";
import { Search, SlidersHorizontal } from "lucide-react";
import { PageLayout } from "@/components/layout/page-layout";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { PROPERTY_TYPES, PROPERTY_STATUSES } from "@/config/site";

export const metadata: Metadata = {
  title: "Properties | Chamadia Real Estates",
  description: "Browse our collection of premium properties for sale across Pakistan.",
};

export default function PropertiesPage() {
  return (
    <PageLayout>
      <Section dark className="pt-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Properties</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Browse our collection of premium properties for sale
          </p>
        </div>
      </Section>

      <Container className="py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 -mt-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input
                type="text"
                placeholder="Search location..."
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-navy-900/50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
              <select className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-navy-900/50 bg-white">
                <option value="">All Types</option>
                {PROPERTY_TYPES.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-navy-900/50 bg-white">
                <option value="">All Status</option>
                {PROPERTY_STATUSES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Budget</label>
              <select className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-navy-900/50 bg-white">
                <option value="">Any Budget</option>
                <option value="0-5000000">Under 50 Lakh</option>
                <option value="5000000-10000000">50 Lakh - 1 Crore</option>
                <option value="10000000-20000000">1 - 2 Crore</option>
                <option value="20000000-50000000">2 - 5 Crore</option>
                <option value="50000000+">5 Crore+</option>
              </select>
            </div>
            <div className="flex items-end gap-2">
              <Button variant="primary" size="md" className="flex-1">
                <Search className="w-4 h-4" />
                Search
              </Button>
              <button className="p-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors" aria-label="More filters">
                <SlidersHorizontal className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </Container>

      <Section>
        <div className="text-center py-20">
          <h3 className="text-2xl font-bold text-navy-900 mb-4">Properties Coming Soon</h3>
          <p className="text-gray-600 max-w-md mx-auto">
            Our property listings are being updated. Please check back soon or contact us for available properties.
          </p>
        </div>
      </Section>
    </PageLayout>
  );
}
