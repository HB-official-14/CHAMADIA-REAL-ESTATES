"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-navy-50/30">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-gold-50/60 via-white to-transparent pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold-100/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-navy-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[75vh]">
          {/* LEFT SIDE — Logo only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-center justify-center h-full"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Soft glow behind logo */}
              <div className="absolute inset-0 bg-gold-200/10 rounded-full blur-3xl scale-150" />
              <Image
                src="/images/logo.png"
                alt="Chamadia Real Estate"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>

          {/* RIGHT SIDE — Headline + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="inline-block px-5 py-2 bg-navy-900/5 text-navy-900 rounded-full text-sm font-semibold tracking-widest uppercase mb-8 border border-navy-900/10"
            >
              Premium Real Estate Solutions
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-navy-900 leading-tight mb-6"
            >
              Discover Your
              <span className="text-gold-500"> Dream Property</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-base md:text-lg text-gray-500 max-w-lg leading-relaxed mb-10"
            >
              Explore premium properties and exclusive real estate investments.
              Let us guide you to your perfect investment opportunity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Button
                variant="primary"
                size="lg"
                className="group bg-navy-900 hover:bg-navy-800 text-white shadow-lg shadow-navy-900/20 hover:shadow-xl hover:shadow-navy-900/30 transition-all duration-300 px-8 py-4 text-base"
              >
                Explore Properties
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-navy-900/20 text-navy-900 hover:bg-navy-900 hover:text-white hover:border-navy-900 transition-all duration-300 px-8 py-4 text-base"
              >
                <Search className="w-5 h-5 mr-2" />
                Advanced Search
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
