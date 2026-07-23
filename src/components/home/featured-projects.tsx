"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/layout/section";
import { ProjectCardActions } from "@/components/projects/project-card-actions";
import { projects } from "@/data/projects";

const featured = ["AA Beverly", "The Court Heights", "Centric Elite"];

interface FeaturedProjectsProps {
  projectImages: Record<string, string | null>;
}

export function FeaturedProjects({ projectImages }: FeaturedProjectsProps) {
  return (
    <Section gold id="featured-projects">
      <SectionHeader
        title="Featured Projects"
        subtitle="Discover premium living at Callachi Society, Karachi — where luxury meets comfort"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects
          .filter((p) => featured.includes(p.name))
          .map((project, index) => {
            const coverImage = projectImages[project.name];
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex"
              >
                <Card hover className="flex flex-col w-full">
                  <div className="px-6 pt-6 pb-3">
                    <h3 className="text-xl font-bold text-navy-900">{project.name}</h3>
                    <p className="flex items-center gap-1.5 text-gray-500 text-xs mt-1">
                      <MapPin className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
                      {project.location}
                    </p>
                  </div>
                  <div className="relative h-48 overflow-hidden mx-0">
                    {coverImage ? (
                      <Image
                        src={coverImage}
                        alt={project.name}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-900" />
                    )}
                  </div>

                  <div className="flex flex-col flex-1 p-6">
                    <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1 line-clamp-3">
                      {project.description}
                    </p>

                    <ProjectCardActions slug={project.slug} />
                  </div>
                </Card>
              </motion.div>
            );
          })}
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
