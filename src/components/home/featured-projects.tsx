"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/layout/section";
import { projects } from "@/data/projects";

const featured = ["AA Beverly", "The Court Heights", "Centric Elite"];

export function FeaturedProjects() {
  return (
    <Section gold>
      <SectionHeader
        title="Featured Projects"
        subtitle="Discover premium living at Callachi Society, Karachi — where luxury meets comfort"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects
          .filter((p) => featured.includes(p.name))
          .map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex"
            >
              <Card hover className="flex flex-col w-full">
                <div className="h-48 bg-gradient-to-br from-navy-800 to-navy-900 relative flex items-center justify-center">
                  <span className="text-gold-500 font-bold text-2xl tracking-wider">
                    {project.name}
                  </span>
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <p className="flex items-center gap-1.5 text-gray-500 text-sm mb-4">
                    <MapPin className="w-4 h-4 text-gold-500" />
                    {project.location}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-navy-900 uppercase tracking-wider mb-2">
                      Available Apartments
                    </h4>
                    <div className="space-y-1">
                      {project.units.map((unit) => (
                        <p
                          key={unit}
                          className="text-sm text-gray-600 pl-3 border-l-2 border-gold-500/50"
                        >
                          {unit}
                        </p>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="flex gap-3 pt-4 border-t border-gray-100">
                    <Link href={`/projects/${project.slug}`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full group">
                        View Details
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <a href="/contact" className="flex-1">
                      <Button variant="secondary" size="sm" className="w-full">
                        <Phone className="w-4 h-4 mr-1" />
                        Contact Us
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/projects">
          <span className="relative overflow-hidden group inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-bold text-lg shadow-xl shadow-gold-500/30 hover:shadow-2xl hover:shadow-gold-500/40 transition-all duration-300 cursor-pointer">
            <span className="relative z-10">View All Projects</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            <span className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
          </span>
        </Link>
      </div>
    </Section>
  );
}
