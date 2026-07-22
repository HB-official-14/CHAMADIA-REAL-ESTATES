"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
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
                onClick={() => setOpen(false)}
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

function MobileNavItem({ item, pathname, onNav }: { item: NavItem; pathname: string; onNav: () => void }) {
  const [expanded, setExpanded] = useState(false);

  if (!item.children) {
    const isActive = pathname === item.href;
    return (
      <Link
        key={item.href}
        href={item.href!}
        onClick={onNav}
        className={cn(
          "text-2xl font-medium transition-all duration-300 py-3",
          isActive ? "text-navy-900" : "text-gray-400 hover:text-navy-900"
        )}
      >
        {item.label}
      </Link>
    );
  }

  const isChildActive = item.children.some((child) => pathname === child.href);

  return (
    <div className="w-full max-w-xs">
      <button
        onClick={() => setExpanded(!expanded)}
        className={cn(
          "w-full flex items-center justify-center gap-2 text-2xl font-medium transition-all duration-300 py-3",
          isChildActive ? "text-navy-900" : "text-gray-400"
        )}
      >
        {item.label}
        <ChevronDown className={cn("w-5 h-5 transition-transform duration-200", expanded && "rotate-180")} />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 flex flex-col items-center",
          expanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        {item.children.map((child) => {
          const isActive = pathname === child.href;
          return (
            <Link
              key={child.href}
              href={child.href}
              onClick={onNav}
              className={cn(
                "text-lg font-medium py-2 transition-colors duration-200",
                isActive ? "text-navy-900" : "text-gray-400 hover:text-navy-900"
              )}
            >
              {child.label}
            </Link>
          );
        })}
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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5"
          : "bg-white/60 backdrop-blur-md"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Left — Brand */}
          <Link href="/" className="flex-shrink-0">
            <Logo variant="navbar" />
          </Link>

          {/* Center — Navigation */}
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

          {/* Right — Actions */}
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
                ChamadiaZ AI
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

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-50 p-2.5 rounded-full border border-navy-900/10 hover:bg-navy-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5 text-navy-900" /> : <Menu className="w-5 h-5 text-navy-900" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transition-all duration-500",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-2 px-6">
          {NAV_ITEMS.map((item, i) => (
            <div key={item.label} style={{ transitionDelay: `${i * 50}ms` }} className="w-full flex flex-col items-center">
              <MobileNavItem item={item} pathname={pathname} onNav={() => setIsOpen(false)} />
            </div>
          ))}
          <div className="mt-8 flex flex-col items-center gap-4 w-full max-w-xs">
            <button
              onClick={() => { window.dispatchEvent(new CustomEvent("toggle-ai-assistant")); setIsOpen(false); }}
              className="w-full py-3 rounded-full border-2 border-navy-900/20 text-navy-900 font-semibold text-sm text-center hover:bg-navy-50 transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect x="3" y="3" width="18" height="14" rx="2" />
                  <path d="M21 9H3" />
                  <path d="M9 21h6" />
                  <path d="M12 17v4" />
                </svg>
                ChamadiaZ AI
              </span>
            </button>
            <a
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full py-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-semibold text-sm text-center shadow-lg shadow-gold-500/25"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
