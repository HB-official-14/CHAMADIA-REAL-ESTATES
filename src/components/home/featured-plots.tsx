"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Section, SectionHeader } from "@/components/layout/section";
import { plots } from "@/data/plots";

export function FeaturedPlots() {
  return (
    <Section gold id="featured-plots">
      <SectionHeader
        title="Featured Plots"
        subtitle="Explore prime residential plots in Callachi Society, Karachi"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {plots.map((plot, index) => (
          <motion.div
            key={plot.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link href={`/plots/${plot.slug}`} className="block group">
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-500">
                <div className="relative h-56">
                  <Image
                    src={plot.image}
                    alt={plot.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 bg-gold-500 text-navy-900 text-sm font-bold rounded-full">
                      {plot.size}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{plot.title}</h3>
                  <p className="flex items-center gap-1.5 text-gray-500 text-sm mb-4">
                    <MapPin className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
                    {plot.location}
                  </p>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">{plot.description}</p>
                  <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm group-hover:gap-3 transition-all">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link href="/plots">
          <span className="relative overflow-hidden group inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-bold text-lg shadow-xl shadow-gold-500/30 hover:shadow-2xl hover:shadow-gold-500/40 transition-all duration-300 cursor-pointer">
            <span className="relative z-10">View All Plots</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            <span className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
          </span>
        </Link>
      </div>
    </Section>
  );
}
