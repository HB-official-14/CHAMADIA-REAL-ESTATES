import type { Metadata } from "next";
import { Building2, ShieldCheck, MapPin, TrendingUp } from "lucide-react";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader } from "@/components/layout/section";

export const metadata: Metadata = {
  title: "About Us | Chamadia Real Estates",
  description: "Learn about Chamadia Real Estates - our mission, vision, and team of expert real estate professionals.",
};

const features = [
  { icon: Building2, title: "Premium Projects", subtitle: "Luxury & Affordable Living" },
  { icon: ShieldCheck, title: "Trusted Guidance", subtitle: "Honest Property Consultation" },
  { icon: MapPin, title: "Prime Location", subtitle: "Callachi Society, Karachi" },
  { icon: TrendingUp, title: "Investment Focused", subtitle: "Smart Property Opportunities" },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <Section dark className="pt-32">
        <SectionHeader title="About Us" subtitle="Learn about our journey and commitment to excellence" light />
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Chamadia Real Estates has been at the forefront of Pakistan&apos;s real estate industry,
              providing premium property solutions to discerning clients. Our journey began with a vision
              to transform the real estate experience through transparency, expertise, and exceptional service.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Today, we are recognized as one of the most trusted real estate firms in the country,
              with a portfolio spanning residential, commercial, and investment properties across
              all major cities.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team of experienced professionals brings deep market knowledge, legal expertise,
              and a client-first approach to every transaction.
            </p>
          </div>
          <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl p-8 text-white h-[400px] flex items-center justify-center">
            <p className="text-2xl font-bold text-center">Your Trusted Real Estate Partner</p>
          </div>
        </div>
      </Section>

      <Section gold>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-6 text-center shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-navy-900 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-500 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-gold-500 group-hover:text-navy-900 transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-1">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader title="Our Mission" subtitle="What drives us every day" />
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-600 leading-relaxed">
            To provide exceptional real estate services that exceed client expectations,
            deliver outstanding investment opportunities, and set new standards of excellence
            in the Pakistani real estate market.
          </p>
        </div>
      </Section>
    </PageLayout>
  );
}
