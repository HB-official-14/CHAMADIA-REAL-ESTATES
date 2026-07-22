"use client";

import { motion } from "framer-motion";
import { Phone, Mail, User } from "lucide-react";
import { Section, SectionHeader } from "@/components/layout/section";

const leaders = [
  {
    name: "Hamza Chamadia",
    role: "CEO & Founder",
    phone: "03000262592",
    email: "hamza.alpha14@gmail.com",
  },
  {
    name: "Mustafa Chamadia",
    role: "CEO & Founder",
    phone: "03352266358",
    email: "mustafachamadia@gmail.com",
  },
];

export function Leadership() {
  return (
    <Section gold>
      <SectionHeader
        title="Meet Our Leadership"
        subtitle="Our experienced team dedicated to providing exceptional real estate services"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {leaders.map((leader, index) => (
          <motion.div
            key={leader.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center bg-white rounded-2xl p-8 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all duration-300"
          >
            <div className="w-32 h-32 bg-gradient-to-br from-navy-800 to-navy-900 rounded-full mx-auto mb-6 flex items-center justify-center">
              <User className="w-12 h-12 text-gold-500" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-1">{leader.name}</h3>
            <p className="text-gold-600 font-semibold mb-6">{leader.role}</p>
            <div className="flex justify-center gap-4">
              <a
                href={`tel:${leader.phone}`}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy-900/5 text-navy-900 hover:bg-navy-900 hover:text-white transition-all duration-300 text-sm font-medium"
              >
                <Phone className="w-4 h-4" />
                {leader.phone}
              </a>
              <a
                href={`mailto:${leader.email}`}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-500/10 text-navy-900 hover:bg-gold-500 hover:text-navy-900 transition-all duration-300 text-sm font-medium"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
