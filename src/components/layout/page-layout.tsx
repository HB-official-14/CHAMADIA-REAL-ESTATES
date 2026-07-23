"use client";

import { useState, useEffect } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { ContactPopup } from "@/components/ui/contact-popup";

const CONTACT_EVENT = "open-contact-popup";

export function openContactPopup() {
  window.dispatchEvent(new CustomEvent(CONTACT_EVENT));
}

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const handler = () => setContactOpen(true);
    window.addEventListener(CONTACT_EVENT, handler);
    return () => window.removeEventListener(CONTACT_EVENT, handler);
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <ContactPopup isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
