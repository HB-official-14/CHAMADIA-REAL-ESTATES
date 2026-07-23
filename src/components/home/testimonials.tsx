"use client";

import { motion } from "framer-motion";
import { Shield, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/layout/section";

export function Testimonials() {
  return (
    <Section>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-500/10 mb-6">
            <Heart className="w-8 h-8 text-gold-500" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Trusted Real Estate Services
          </h2>

          <p className="text-lg text-gold-500 font-medium mb-8">
            Professional Property Guidance & Client Satisfaction
          </p>

          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
            At Chamadia Real Estates, we are committed to providing professional guidance, personalized customer support, and quality service to help you find the right property. Our team ensures a trustworthy real estate experience from start to finish.
          </p>

          <Link href="/contact">
            <span className="relative overflow-hidden group inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-bold text-lg shadow-xl shadow-gold-500/30 hover:shadow-2xl hover:shadow-gold-500/40 transition-all duration-300 cursor-pointer">
              <Shield className="relative z-10 w-5 h-5" />
              <span className="relative z-10">Book a Consultation</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              <span className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            </span>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
