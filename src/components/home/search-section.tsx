"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { openContactPopup } from "@/components/layout/page-layout";
import { PROPERTY_TYPES, PURPOSE_OPTIONS } from "@/config/site";

const BUY_NAVIGATION: Record<string, string> = {
  Apartment: "projects",
  Plot: "plots",
};

function askToContact(type: string): boolean {
  return !BUY_NAVIGATION[type] && type !== "";
}

export function SearchSection() {
  const router = useRouter();
  const sectionRef = useRef<HTMLDivElement>(null);
  const purposeRef = useRef<HTMLSelectElement>(null);
  const [purpose, setPurpose] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [contactBanner, setContactBanner] = useState(false);
  const [highlighted, setHighlighted] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      setTimeout(() => {
        purposeRef.current?.focus();
        setHighlighted(true);
        setTimeout(() => setHighlighted(false), 2000);
      }, 600);
    };
    window.addEventListener("focus-search", handler);
    return () => window.removeEventListener("focus-search", handler);
  }, []);

  const handleSearch = () => {
    if (purpose === "Buy") {
      const target = BUY_NAVIGATION[propertyType];
      if (target === "projects") {
        const el = document.getElementById("featured-projects");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else if (target === "plots") {
        router.push("/plots");
      } else if (askToContact(propertyType)) {
        setContactBanner(true);
      }
    } else if (purpose === "Sell") {
      router.push("/sell");
    } else if (purpose === "Rent") {
      router.push("/rent");
    }
  };

  return (
    <section ref={sectionRef} className="relative -mt-16 z-20 pb-16">
      <Container>
        <div
          className={`bg-white rounded-2xl p-6 md:p-8 transition-all duration-700 ${
            highlighted
              ? "shadow-[0_0_0_4px_rgba(212,175,55,0.3),0_20px_60px_-12px_rgba(0,0,0,0.3)] ring-2 ring-gold-500/50 scale-[1.01]"
              : "shadow-2xl"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <div className="w-full rounded-lg border border-gray-300 px-4 py-3 bg-gray-50 text-gray-700 text-sm flex items-center">
                Callachi Cooperative Housing Society (CCHS)
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Purpose</label>
              <select
                ref={purposeRef}
                value={purpose}
                onChange={(e) => { setPurpose(e.target.value); setPropertyType(""); }}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-navy-900/50 focus:border-navy-900 bg-white"
              >
                <option value="">Select Purpose</option>
                {PURPOSE_OPTIONS.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-navy-900/50 focus:border-navy-900 bg-white"
              >
                <option value="">Select Type</option>
                {PROPERTY_TYPES.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <Button
                variant="primary"
                size="md"
                className="flex-1"
                onClick={handleSearch}
                disabled={!purpose}
              >
                <Search className="w-4 h-4" />
                Search
              </Button>
            </div>
          </div>

          {contactBanner && (
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-amber-600" />
                </div>
                <p className="text-sm text-amber-800">
                  Please contact Chamadia Real Estates for the latest availability on <strong>{propertyType}</strong>.
                </p>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); openContactPopup(); }}
                className="flex items-center gap-2 px-5 py-2.5 bg-navy-900 text-white rounded-xl text-sm font-semibold hover:bg-navy-800 transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                Contact Us
              </button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
