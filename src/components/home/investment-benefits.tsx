"use client";

import { motion } from "framer-motion";
import { TrendingUp, DollarSign, ShieldCheck, BarChart3 } from "lucide-react";
import { Section, SectionHeader } from "@/components/layout/section";

const benefits = [
  {
    icon: TrendingUp,
    title: "High ROI Potential",
    description: "Real estate investments in prime locations offer exceptional returns on investment.",
  },
  {
    icon: DollarSign,
    title: "Flexible Payment Plans",
    description: "Affordable and flexible payment options designed to suit your budget.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Investment",
    description: "All properties are legally verified with clear titles and approvals.",
  },
  {
    icon: BarChart3,
    title: "Appreciation Growth",
    description: "Properties in developing areas show consistent value appreciation over time.",
  },
];

export function InvestmentBenefits() {
  return (
    <Section>
      <SectionHeader
        title="Investment Benefits"
        subtitle="Why investing in real estate with us is a smart financial decision"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex gap-6 p-8 rounded-xl bg-gradient-to-br from-navy-900 to-navy-800 text-white"
          >
            <div className="w-14 h-14 bg-gold-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <benefit.icon className="w-7 h-7 text-gold-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-white/70">{benefit.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
