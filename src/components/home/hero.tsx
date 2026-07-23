"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Search, Building2, MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const [showExplore, setShowExplore] = useState(false);

  const handleExploreClick = () => {
    setShowExplore(true);
  };

  const handleExploreChoice = (section: string) => {
    setShowExplore(false);
    if (section === "projects") {
      document.getElementById("featured-projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (section === "plots") {
      document.getElementById("featured-plots")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleAdvancedSearch = () => {
    window.dispatchEvent(new CustomEvent("focus-search"));
  };

  return (
    <section className="relative min-h-[calc(100dvh-64px)] md:min-h-[calc(100dvh-80px)] flex md:items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-navy-50/30">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-gold-50/60 via-white to-transparent pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold-100/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-navy-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-10 lg:px-16 pt-8 md:pt-0 pb-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16 items-center">
          {/* LEFT SIDE — Logo only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-center justify-center order-first"
          >
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-80 md:h-80 lg:w-96 lg:h-96">
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
              className="inline-block px-4 py-1.5 md:px-5 md:py-2 bg-navy-900/5 text-navy-900 rounded-full text-[11px] md:text-sm font-semibold tracking-widest uppercase mb-4 md:mb-8 border border-navy-900/10"
            >
              Premium Real Estate Solutions
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-navy-900 leading-snug md:leading-tight mb-3 md:mb-6"
            >
              Discover Your
              <span className="text-gold-500"> Dream Property</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-sm sm:text-base md:text-lg text-gray-500 max-w-lg leading-relaxed mb-6 md:mb-10"
            >
              Explore premium properties and exclusive real estate investments.
              Let us guide you to your perfect investment opportunity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={handleExploreClick}
                className="group bg-navy-900 hover:bg-navy-800 text-white shadow-lg shadow-navy-900/20 hover:shadow-xl hover:shadow-navy-900/30 transition-all duration-300 w-full sm:w-auto px-6 md:px-8 py-3.5 md:py-4 text-sm md:text-base min-h-[48px]"
              >
                Explore Properties
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleAdvancedSearch}
                className="border-2 border-navy-900/20 text-navy-900 hover:bg-navy-900 hover:text-white hover:border-navy-900 transition-all duration-300 w-full sm:w-auto px-6 md:px-8 py-3.5 md:py-4 text-sm md:text-base min-h-[48px]"
              >
                <Search className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Advanced Search
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showExplore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setShowExplore(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative z-50 w-full max-w-sm mx-4 bg-white rounded-2xl shadow-2xl p-6 md:p-8"
            >
              <button
                onClick={() => setShowExplore(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>

              <h3 className="text-xl md:text-2xl font-bold text-navy-900 text-center mb-1 md:mb-2">
                Explore More
              </h3>
              <p className="text-gray-500 text-sm text-center mb-6 md:mb-8">
                Choose what you would like to explore
              </p>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <button
                  onClick={() => handleExploreChoice("projects")}
                  className="group flex flex-col items-center gap-2 md:gap-3 p-4 md:p-6 rounded-xl bg-gradient-to-br from-navy-900 to-navy-800 text-white hover:from-navy-800 hover:to-navy-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Building2 className="w-7 h-7 md:w-8 md:h-8 text-gold-500" />
                  <span className="font-semibold text-base md:text-lg">Projects</span>
                  <span className="text-[10px] md:text-xs text-white/60">Premium living spaces</span>
                </button>
                <button
                  onClick={() => handleExploreChoice("plots")}
                  className="group flex flex-col items-center gap-2 md:gap-3 p-4 md:p-6 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 text-navy-900 hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <MapPin className="w-7 h-7 md:w-8 md:h-8" />
                  <span className="font-semibold text-base md:text-lg">Plots</span>
                  <span className="text-[10px] md:text-xs text-navy-900/60">Prime investment land</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
