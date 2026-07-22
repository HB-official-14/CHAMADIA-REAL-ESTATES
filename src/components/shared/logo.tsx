"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "navbar" | "footer" | "hero";
  className?: string;
}

const sizes = {
  navbar: { box: "w-14 h-14 md:w-16 md:h-16", text: "text-base md:text-lg" },
  footer: { box: "w-14 h-14", text: "text-lg" },
  hero: { box: "w-28 h-28", text: "text-4xl" },
};

export function Logo({ variant = "navbar", className }: LogoProps) {
  const size = sizes[variant];

  return (
    <motion.div
      initial={variant === "hero" ? { opacity: 0, scale: 0.5 } : undefined}
      animate={variant === "hero" ? { opacity: 1, scale: 1 } : undefined}
      transition={variant === "hero" ? { duration: 0.8, ease: "easeOut" } : undefined}
      className={cn("flex items-center gap-3 md:gap-4", className)}
    >
      <motion.div
        className={cn(
          "relative flex-shrink-0",
          size.box,
          variant === "footer" && "bg-white/15 backdrop-blur-sm p-2 rounded-2xl shadow-lg shadow-black/30 cursor-pointer",
          variant !== "footer" && "rounded-xl overflow-hidden",
          variant === "hero" && "shadow-2xl shadow-gold-500/30"
        )}
        whileHover={
          variant === "footer"
            ? { scale: 1.05, y: -4, boxShadow: "0 20px 40px rgba(245,197,24,0.25)" }
            : variant !== "hero"
              ? { scale: 1.05 }
              : undefined
        }
        animate={
          variant === "hero"
            ? {
                boxShadow: [
                  "0 0 20px rgba(245,197,24,0.3)",
                  "0 0 50px rgba(245,197,24,0.5)",
                  "0 0 20px rgba(245,197,24,0.3)",
                ],
              }
            : undefined
        }
        transition={
          variant === "footer"
            ? { duration: 0.3, ease: "easeOut" }
            : variant === "hero"
              ? { boxShadow: { duration: 2.5, repeat: Infinity } }
              : { type: "spring", stiffness: 300 }
        }
      >
        <Image
          src="/images/logo.png"
          alt="Chamadia Real Estate"
          fill
          className="object-contain"
          sizes={variant === "footer" ? "56px" : "(max-width: 768px) 56px, 64px"}
          priority={variant !== "footer"}
        />
      </motion.div>

      <div className="flex flex-col leading-none">
        <span
          className={cn(
            "font-bold tracking-wide",
            variant === "navbar" && "text-navy-900 text-sm md:text-base",
            variant === "footer" && "text-white",
            variant === "hero" && "text-white text-5xl md:text-6xl"
          )}
        >
          CHAMADIA
        </span>
        <span
          className={cn(
            "font-light tracking-wider",
            variant === "navbar" && "text-gray-500 text-xs md:text-sm -mt-0.5",
            variant === "footer" && "text-gray-400",
            variant === "hero" && "text-gold-500 text-3xl md:text-4xl"
          )}
        >
          REAL ESTATE
        </span>
      </div>
    </motion.div>
  );
}
