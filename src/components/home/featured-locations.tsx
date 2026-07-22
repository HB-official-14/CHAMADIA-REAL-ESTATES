"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight, Building2 } from "lucide-react";
import { Section, SectionHeader } from "@/components/layout/section";

export function FeaturedLocations() {
  return (
    <Section gold>
      <SectionHeader
        title="Featured Location"
        subtitle="Explore premium properties in Karachi's most sought-after society"
      />
      <div className="max-w-lg mx-auto">
        <Link href="/projects" className="block group">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-lg shadow-black/5 group-hover:shadow-xl group-hover:shadow-black/10 transition-all duration-500"
          >
            <div className="h-56 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500" />
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-gold-500" />
                </div>
                <span className="text-gold-500 font-bold text-2xl tracking-wider">
                  Callachi Society
                </span>
              </div>
            </div>
            <div className="p-6 bg-white">
              <div className="flex items-center gap-2 text-gold-500 mb-3">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium text-gray-500">Karachi</span>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-1">
                Callachi Society, Gulshan-e-Iqbal, Block 10-A
              </h3>
              <p className="text-gray-500 text-sm mb-5">
                100+ Properties
              </p>
              <div className="flex items-center gap-2 text-navy-900 font-semibold text-sm group/link">
                <span>Explore Properties</span>
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </motion.div>
        </Link>
      </div>
    </Section>
  );
}
