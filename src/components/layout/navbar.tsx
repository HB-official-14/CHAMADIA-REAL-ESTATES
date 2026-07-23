"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/shared/logo";
import { NAV_ITEMS, type NavItem } from "@/config/site";

function NavDropdown({ item, pathname, onNav }: { item: NavItem; pathname: string; onNav?: () => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isChildActive = item.children?.some((child) => pathname === child.href);

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "relative px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-1",
          isChildActive
            ? "text-navy-900 bg-navy-900/5"
            : "text-gray-500 hover:text-navy-900 hover:bg-navy-50/50"
        )}
      >
        {item.label}
        <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", open && "rotate-180")} />
        {isChildActive && (
          <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gold-500 rounded-full" />
        )}
      </button>

      <div
        className={cn(
          "absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="bg-white rounded-xl shadow-xl shadow-black/10 border border-gray-100 py-2 min-w-[180px] overflow-hidden">
          {item.children?.map((child) => {
            const isActive = pathname === child.href;
            return (
              <Link
                key={child.href}
                href={child.href}
                onClick={() => { setOpen(false); onNav?.(); }}
                className={cn(
                  "block px-5 py-2.5 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "text-navy-900 bg-navy-50"
                    : "text-gray-500 hover:text-navy-900 hover:bg-navy-50/50"
                )}
              >
                {child.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeNav = () => setIsOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-[70px] bg-white transition-shadow duration-300",
          scrolled && "shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Left — Brand */}
            <Link href="/" className="flex-shrink-0">
              <Logo variant="navbar" />
            </Link>

            {/* Center — Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                if (item.children) {
                  return <NavDropdown key={item.label} item={item} pathname={pathname} />;
                }
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href!}
                    className={cn(
                      "relative px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300",
                      isActive
                        ? "text-navy-900 bg-navy-900/5"
                        : "text-gray-500 hover:text-navy-900 hover:bg-navy-50/50"
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gold-500 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right — Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("toggle-ai-assistant"))}
                className="relative overflow-hidden group px-5 py-2.5 rounded-full border border-navy-900/20 text-navy-900 font-medium text-sm hover:bg-navy-50 hover:border-navy-900/40 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <rect x="3" y="3" width="18" height="14" rx="2" />
                    <path d="M21 9H3" />
                    <path d="M9 21h6" />
                    <path d="M12 17v4" />
                  </svg>
                  Chamadia AI
                </span>
              </button>
              <a
                href="/contact"
                className="relative overflow-hidden group px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-semibold text-sm shadow-lg shadow-gold-500/25 hover:shadow-xl hover:shadow-gold-500/30 transition-all duration-300"
              >
                <span className="relative z-10">Contact Us</span>
                <span className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-2 -mr-2 rounded-full hover:bg-gray-50 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-navy-900" />
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              onClick={closeNav}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute top-0 right-0 w-full h-full bg-white overflow-y-auto"
            >
              <div className="flex flex-col items-center justify-center min-h-full px-6 py-12">
                {/* Close Button — Top Right */}
                <button
                  onClick={closeNav}
                  className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-navy-900" />
                </button>

                {/* Logo */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="mb-10"
                >
                  <Logo variant="navbar" />
                </motion.div>

                {/* Navigation Items */}
                <nav className="flex flex-col items-center gap-2 w-full max-w-[220px]">
                  {NAV_ITEMS.map((item, i) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 + i * 0.05, duration: 0.35 }}
                        className="w-full"
                      >
                        <Link
                          href={item.href!}
                          onClick={closeNav}
                          className={cn(
                            "block w-full text-center px-6 py-3 rounded-xl text-lg font-semibold transition-all duration-200",
                            isActive
                              ? "bg-navy-900 text-white shadow-md"
                              : "text-gray-600 hover:bg-gray-50 hover:text-navy-900"
                          )}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Bottom Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + (NAV_ITEMS.length + 1) * 0.05, duration: 0.35 }}
                  className="mt-10 flex flex-col items-center gap-3 w-full max-w-[220px]"
                >
                  <button
                    onClick={() => { window.dispatchEvent(new CustomEvent("toggle-ai-assistant")); closeNav(); }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-navy-900/15 text-navy-900 font-semibold text-sm hover:bg-gray-50 transition-all duration-200"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <rect x="3" y="3" width="18" height="14" rx="2" />
                      <path d="M21 9H3" />
                      <path d="M9 21h6" />
                      <path d="M12 17v4" />
                    </svg>
                    Chamadia AI
                  </button>
                  <Link
                    href="/contact"
                    onClick={closeNav}
                    className="block w-full text-center px-6 py-3 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-semibold text-sm shadow-lg shadow-gold-500/25 hover:shadow-xl transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
