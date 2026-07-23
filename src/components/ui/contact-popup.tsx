"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone } from "lucide-react";

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.3 }}
            className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Contact us"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-4 h-4 text-white" />
            </button>

            <div className="bg-gradient-to-br from-navy-900 to-navy-800 p-8 text-center">
              <div className="w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-gold-500" />
              </div>
              <h3 className="text-white font-bold text-xl">Contact Us</h3>
              <p className="text-white/60 text-sm mt-1.5 max-w-[220px] mx-auto">
                Speak directly with our team
              </p>
            </div>

            <div className="p-6 space-y-3">
              <a
                href="tel:03000262592"
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-gold-500/50 hover:bg-gold-50/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-navy-900 rounded-full flex items-center justify-center group-hover:bg-gold-500 transition-colors duration-300 flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm">Hamza Chamadia</p>
                  <p className="text-gray-400 text-xs mt-0.5">Call Now — 03000262592</p>
                </div>
              </a>

              <a
                href="tel:03352266358"
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-gold-500/50 hover:bg-gold-50/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-navy-900 rounded-full flex items-center justify-center group-hover:bg-gold-500 transition-colors duration-300 flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm">Mustafa Chamadia</p>
                  <p className="text-gray-400 text-xs mt-0.5">Call Now — 03352266358</p>
                </div>
              </a>
            </div>

            <div className="px-6 pb-6">
              <button
                onClick={onClose}
                className="w-full py-3 rounded-xl text-sm font-medium text-gray-400 hover:text-navy-900 hover:bg-gray-50 transition-all duration-200"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
