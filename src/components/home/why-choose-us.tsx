"use client";

import { motion } from "framer-motion";
import { Shield, Users, Building2, Award, Clock, Handshake } from "lucide-react";
import { Section, SectionHeader } from "@/components/layout/section";

const features = [
  {
    icon: Shield,
    title: "Trusted & Reliable",
    description: "Years of experience in real estate with a proven track record of successful transactions.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Professional real estate experts dedicated to finding your perfect property.",
  },
  {
    icon: Building2,
    title: "Premium Properties",
    description: "Curated selection of the finest properties across prime locations.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Rigorous quality checks to ensure every property meets our high standards.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Commitment to delivering projects on time, every time.",
  },
  {
    icon: Handshake,
    title: "End-to-End Support",
    description: "Complete assistance from property selection to final acquisition.",
  },
];

export function WhyChooseUs() {
  return (
    <Section gold>
      <SectionHeader
        title="Why Choose Us"
        subtitle="We provide exceptional real estate services with a commitment to excellence"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center p-8 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 bg-navy-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <feature.icon className="w-8 h-8 text-gold-500" />
            </div>
            <h3 className="text-xl font-semibold text-navy-900 mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
