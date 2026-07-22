"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, MessageSquare, User, X } from "lucide-react";
import { PageLayout } from "@/components/layout/page-layout";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getWhatsAppUrl } from "@/lib/utils";

const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Callachi+Society+Gulshan-e-Iqbal+Block+10-A+Karachi+Pakistan";

const contacts = [
  { name: "Hamza Chamadia", role: "CEO & Founder", phone: "03000262592" },
  { name: "Mustafa Chamadia", role: "CEO & Founder", phone: "03352266358" },
];

function buildMessage(data: { name: string; phone: string; email: string; subject: string; message: string }) {
  return [
    "New Website Inquiry",
    "",
    `Name:`,
    data.name,
    "",
    `Phone:`,
    data.phone,
    "",
    `Email:`,
    data.email,
    "",
    `Subject:`,
    data.subject,
    "",
    `Message:`,
    data.message,
  ].join("\n");
}

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", subject: "", message: "" });
  const [popup, setPopup] = useState<"closed" | "choose">("closed");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) return;
    setPopup("choose");
  }

  function openWhatsApp(phone: string) {
    const msg = buildMessage(formData);
    window.open(getWhatsAppUrl(phone, msg), "_blank");
    setPopup("closed");
  }

  return (
    <PageLayout>
      <Section dark className="pt-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Have a question or ready to find your dream property? We are here to help.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-navy-900">Get in Touch</h2>
            <p className="text-gray-600">
              Reach out directly to our team or visit our office.
            </p>

            <div className="space-y-4">
              {contacts.map((contact) => (
                <a
                  key={contact.name}
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-navy-50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                    <User className="w-5 h-5 text-gold-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">{contact.role}</p>
                    <p className="font-medium text-navy-900">{contact.name}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gold-600">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm font-medium">{contact.phone}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="space-y-4">
              <a
                href="mailto:chamadiarealestates@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-navy-50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Us</p>
                  <p className="font-medium text-navy-900">chamadiarealestates@gmail.com</p>
                </div>
              </a>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-navy-50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                  <MapPin className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Office Location</p>
                  <p className="font-medium text-navy-900">
                    Callachi Society,<br />
                    Gulshan-e-Iqbal,<br />
                    Block 10-A,<br />
                    Karachi, Pakistan
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-navy-900 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input label="Full Name" id="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} />
              <Input label="Phone Number" id="phone" type="tel" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} />
              <Input label="Email Address" id="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
              <Input label="Subject" id="subject" placeholder="Enter subject" value={formData.subject} onChange={handleChange} />
              <Textarea label="Message" id="message" placeholder="How can we help you?" value={formData.message} onChange={handleChange} />
              <Button variant="primary" size="lg" className="w-full" type="submit">
                <MessageSquare className="w-5 h-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </Section>

      <AnimatePresence>
        {popup === "choose" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative"
            >
              <button
                onClick={() => setPopup("closed")}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-navy-900 mb-2">Choose who you&apos;d like to contact.</h3>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => openWhatsApp("03000262592")}
                  className="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition-all duration-200 shadow-lg shadow-green-500/25"
                >
                  <MessageSquare className="w-5 h-5" />
                  Contact Hamza on WhatsApp
                </button>
                <button
                  onClick={() => openWhatsApp("03352266358")}
                  className="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition-all duration-200 shadow-lg shadow-green-500/25"
                >
                  <MessageSquare className="w-5 h-5" />
                  Contact Mustafa on WhatsApp
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
}
