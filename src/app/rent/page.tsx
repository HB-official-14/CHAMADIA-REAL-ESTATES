"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Send,
  Phone,
  ChevronDown,
  Home,
  User,
  Maximize,
  FileText,
  Hash,
  Layers,
  Calendar,
  DollarSign,
  MapPin,
  ArrowLeft,
  CheckCircle,
  Bed,
  Compass,
} from "lucide-react";
import { PageLayout } from "@/components/layout/page-layout";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { openContactPopup } from "@/components/layout/page-layout";
import { cn, getWhatsAppUrl } from "@/lib/utils";
import { PROPERTY_TYPES } from "@/config/site";

type RentMode = "rent" | "rent-out" | null;
type RentOutType = "apartment" | "villa" | null;

const HAMZA = "923000262592";
const MUSTAFA = "923352266358";

const BEDROOM_OPTIONS = ["1", "2", "3", "4", "5+"];
const FACING_OPTIONS = ["North", "South", "East", "West"];
const BLOCK_OPTIONS = ["A", "B", "C"];

interface RentForm {
  propertyType: string;
  projectName: string;
  preferredSize: string;
  bedrooms: string;
  budget: string;
  preferredFloor: string;
  moveInDate: string;
  name: string;
  phone: string;
  requirements: string;
}

interface RentOutApartmentForm {
  projectName: string;
  series: string;
  floor: string;
  size: string;
  facing: string;
  ownerName: string;
  phone: string;
  details: string;
}

interface RentOutVillaForm {
  size: string;
  floors: string;
  block: string;
  number: string;
  ownerName: string;
  phone: string;
  details: string;
}

const initialRent: RentForm = {
  propertyType: "",
  projectName: "",
  preferredSize: "",
  bedrooms: "",
  budget: "",
  preferredFloor: "",
  moveInDate: "",
  name: "",
  phone: "",
  requirements: "",
};

const initialApartment: RentOutApartmentForm = {
  projectName: "",
  series: "",
  floor: "",
  size: "",
  facing: "",
  ownerName: "",
  phone: "",
  details: "",
};

const initialVilla: RentOutVillaForm = {
  size: "",
  floors: "",
  block: "",
  number: "",
  ownerName: "",
  phone: "",
  details: "",
};

function buildRentMessage(data: RentForm): string {
  return [
    "Hello Chamadia Real Estates,",
    "",
    "I am looking for a property on rent.",
    "",
    ...(data.propertyType ? [`Property Type: ${data.propertyType}`] : []),
    ...(data.projectName ? [`Project: ${data.projectName}`] : []),
    ...(data.preferredSize ? [`Preferred Size: ${data.preferredSize}`] : []),
    ...(data.bedrooms ? [`Bedrooms: ${data.bedrooms}`] : []),
    ...(data.budget ? [`Budget: ${data.budget}`] : []),
    ...(data.preferredFloor ? [`Preferred Floor: ${data.preferredFloor}`] : []),
    ...(data.moveInDate ? [`Move-in Date: ${data.moveInDate}`] : []),
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    ...(data.requirements ? [`Additional Requirements: ${data.requirements}`] : []),
    "",
    "Please contact me with available options.",
  ].join("\n");
}

function buildApartmentMessage(data: RentOutApartmentForm): string {
  return [
    "Hello Chamadia Real Estates,",
    "",
    "I would like to rent out my apartment.",
    "",
    `Project: ${data.projectName}`,
    `Series: ${data.series}`,
    `Floor: ${data.floor}`,
    `Size: ${data.size} Sq. Ft.`,
    `Facing: ${data.facing}`,
    `Owner Name: ${data.ownerName}`,
    `Phone: ${data.phone}`,
    ...(data.details ? [`Additional Details: ${data.details}`] : []),
    "",
    "Please contact me regarding this rental property.",
  ].join("\n");
}

function buildVillaMessage(data: RentOutVillaForm): string {
  return [
    "Hello Chamadia Real Estates,",
    "",
    "I would like to rent out my villa.",
    "",
    `Villa Size: ${data.size} Sq. Yd.`,
    `Floors: ${data.floors}`,
    `Block: ${data.block}`,
    `Plot Number: ${data.number}`,
    `Owner Name: ${data.ownerName}`,
    `Phone: ${data.phone}`,
    ...(data.details ? [`Additional Details: ${data.details}`] : []),
    "",
    "Please contact me regarding this rental property.",
  ].join("\n");
}

export default function RentPage() {
  const [mode, setMode] = useState<RentMode>(null);
  const [rentOutType, setRentOutType] = useState<RentOutType>(null);
  const [rent, setRent] = useState<RentForm>(initialRent);
  const [apartment, setApartment] = useState<RentOutApartmentForm>(initialApartment);
  const [villa, setVilla] = useState<RentOutVillaForm>(initialVilla);
  const [submitted, setSubmitted] = useState(false);
  const [lastMessage, setLastMessage] = useState("");

  const updateRent = (field: keyof RentForm, value: string) => {
    setRent((prev) => ({ ...prev, [field]: value }));
    setSubmitted(false);
  };

  const updateApartment = (field: keyof RentOutApartmentForm, value: string) => {
    setApartment((prev) => ({ ...prev, [field]: value }));
    setSubmitted(false);
  };

  const updateVilla = (field: keyof RentOutVillaForm, value: string) => {
    setVilla((prev) => ({ ...prev, [field]: value }));
    setSubmitted(false);
  };

  const handleSubmitRent = (e: React.FormEvent) => {
    e.preventDefault();
    setLastMessage(buildRentMessage(rent));
    setSubmitted(true);
  };

  const handleSubmitApartment = (e: React.FormEvent) => {
    e.preventDefault();
    setLastMessage(buildApartmentMessage(apartment));
    setSubmitted(true);
  };

  const handleSubmitVilla = (e: React.FormEvent) => {
    e.preventDefault();
    setLastMessage(buildVillaMessage(villa));
    setSubmitted(true);
  };

  const resetMode = () => {
    setMode(null);
    setRentOutType(null);
    setSubmitted(false);
    setLastMessage("");
  };

  return (
    <PageLayout>
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,215,0,0.08),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,215,0,0.05),_transparent_50%)]" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto relative"
          >
            <div className="w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-6 ring-2 ring-gold-500/30">
              <Building2 className="w-7 h-7 text-gold-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Rent a Property
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Find your perfect rental home or list your property for rent with Chamadia Real Estates.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          {!mode ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-3">
                  What Are You Looking For?
                </h2>
                <p className="text-gray-500 max-w-lg mx-auto">
                  Choose your rental goal to get started
                </p>
                <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4 rounded-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setMode("rent")}
                  className="group relative bg-white rounded-2xl border-2 border-gray-200 p-8 text-center hover:border-gold-500 hover:shadow-xl hover:shadow-gold-500/10 transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-navy-50 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-gold-50 transition-colors duration-300">
                    <Home className="w-9 h-9 text-navy-900 group-hover:text-gold-600 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">I Want to Rent</h3>
                  <p className="text-sm text-gray-500">
                    Find the perfect property for rent
                  </p>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => { setMode("rent-out"); setRentOutType(null); }}
                  className="group relative bg-white rounded-2xl border-2 border-gray-200 p-8 text-center hover:border-gold-500 hover:shadow-xl hover:shadow-gold-500/10 transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-navy-50 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-gold-50 transition-colors duration-300">
                    <Building2 className="w-9 h-9 text-navy-900 group-hover:text-gold-600 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">I Want to Rent Out My Property</h3>
                  <p className="text-sm text-gray-500">
                    List your property for rent
                  </p>
                </motion.button>
              </div>
            </motion.div>
          ) : mode === "rent" ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <button
                onClick={resetMode}
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-navy-900 transition-colors mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Back to options
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                <div className="lg:col-span-3">
                  <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
                    <h3 className="text-xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                      <div className="w-8 h-8 bg-navy-100 rounded-lg flex items-center justify-center">
                        <Home className="w-4 h-4 text-navy-900" />
                      </div>
                      I Want to Rent
                    </h3>

                    <form onSubmit={handleSubmitRent} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormField label="Property Type" icon={Building2} required>
                          <select
                            value={rent.propertyType}
                            onChange={(e) => updateRent("propertyType", e.target.value)}
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900/50 bg-white"
                            required
                          >
                            <option value="">Select Type</option>
                            {PROPERTY_TYPES.map((t) => (
                              <option key={t} value={t}>{t}</option>
                            ))}
                          </select>
                        </FormField>
                        <FormField label="Project Name" icon={MapPin}>
                          <input
                            type="text"
                            value={rent.projectName}
                            onChange={(e) => updateRent("projectName", e.target.value)}
                            placeholder="e.g. AA Residencia"
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900/50"
                          />
                        </FormField>
                        <FormField label="Preferred Size" icon={Maximize}>
                          <input
                            type="text"
                            value={rent.preferredSize}
                            onChange={(e) => updateRent("preferredSize", e.target.value)}
                            placeholder="e.g. 1200 Sq. Ft."
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900/50"
                          />
                        </FormField>
                        <FormField label="Bedrooms" icon={Bed}>
                          <div className="grid grid-cols-5 gap-2">
                            {BEDROOM_OPTIONS.map((b) => (
                              <button
                                key={b}
                                type="button"
                                onClick={() => updateRent("bedrooms", b)}
                                className={cn(
                                  "py-3 rounded-xl text-sm font-medium border-2 transition-all duration-200",
                                  rent.bedrooms === b
                                    ? "border-navy-900 bg-navy-900 text-white shadow-md"
                                    : "border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                                )}
                              >
                                {b}
                              </button>
                            ))}
                          </div>
                        </FormField>
                        <FormField label="Budget" icon={DollarSign} required>
                          <input
                            type="text"
                            value={rent.budget}
                            onChange={(e) => updateRent("budget", e.target.value)}
                            placeholder="e.g. 50,000/month"
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900/50"
                            required
                          />
                        </FormField>
                        <FormField label="Preferred Floor" icon={ChevronDown}>
                          <input
                            type="text"
                            value={rent.preferredFloor}
                            onChange={(e) => updateRent("preferredFloor", e.target.value)}
                            placeholder="e.g. 3rd Floor"
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900/50"
                          />
                        </FormField>
                        <FormField label="Preferred Move-in Date" icon={Calendar}>
                          <input
                            type="date"
                            value={rent.moveInDate}
                            onChange={(e) => updateRent("moveInDate", e.target.value)}
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900/50"
                          />
                        </FormField>
                        <FormField label="Name" icon={User} required>
                          <input
                            type="text"
                            value={rent.name}
                            onChange={(e) => updateRent("name", e.target.value)}
                            placeholder="Full name"
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900/50"
                            required
                          />
                        </FormField>
                        <FormField label="Phone Number" icon={Phone} required>
                          <input
                            type="tel"
                            value={rent.phone}
                            onChange={(e) => updateRent("phone", e.target.value)}
                            placeholder="03XX-XXXXXXX"
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900/50"
                            required
                          />
                        </FormField>
                      </div>

                      <FormField label="Additional Requirements" icon={FileText}>
                        <textarea
                          value={rent.requirements}
                          onChange={(e) => updateRent("requirements", e.target.value)}
                          placeholder="Any specific requirements..."
                          rows={3}
                          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900/50 resize-none"
                        />
                      </FormField>

                      <div className="flex gap-3 pt-2">
                        <Button type="submit" variant="primary" size="lg" className="flex-1">
                          <Send className="w-4 h-4" />
                          Submit Request
                        </Button>
                        <Button type="button" variant="secondary" size="lg" onClick={(e) => { e.stopPropagation(); openContactPopup(); }}>
                          <Phone className="w-4 h-4" />
                          Contact Us
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-6 md:p-8 sticky top-28 text-white">
                    <h3 className="text-lg font-bold mb-1">Why Rent With Us?</h3>
                    <p className="text-white/60 text-sm mb-6">
                      We make finding your ideal rental effortless
                    </p>
                    <ul className="space-y-5">
                      {[
                        { title: "Premium Properties", desc: "Hand-picked rental properties in prime locations" },
                        { title: "Flexible Terms", desc: "Tailored rental agreements to suit your needs" },
                        { title: "Expert Guidance", desc: "Professional advice throughout the rental process" },
                        { title: "Quick Process", desc: "Fast response and streamlined rental procedures" },
                        { title: "No Hidden Costs", desc: "Complete transparency in all rental transactions" },
                      ].map((item) => (
                        <li key={item.title} className="flex gap-3">
                          <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-sm">{item.title}</p>
                            <p className="text-white/60 text-xs mt-0.5">{item.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {submitted && (
                  <SuccessCard
                    message={lastMessage}
                    onClose={() => setSubmitted(false)}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <button
                onClick={resetMode}
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-navy-900 transition-colors mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Back to options
              </button>

              {!rentOutType ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-3">
                      Select Property Type
                    </h2>
                    <p className="text-gray-500 max-w-lg mx-auto">
                      Choose the type of property you want to rent out
                    </p>
                    <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4 rounded-full" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setRentOutType("apartment")}
                      className="group relative bg-white rounded-2xl border-2 border-gray-200 p-8 text-center hover:border-gold-500 hover:shadow-xl hover:shadow-gold-500/10 transition-all duration-300"
                    >
                      <div className="w-20 h-20 bg-navy-50 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-gold-50 transition-colors duration-300">
                        <Building2 className="w-9 h-9 text-navy-900 group-hover:text-gold-600 transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-bold text-navy-900 mb-2">Apartment</h3>
                      <p className="text-sm text-gray-500">
                        Rent out your apartment in Callachi Society
                      </p>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setRentOutType("villa")}
                      className="group relative bg-white rounded-2xl border-2 border-gray-200 p-8 text-center hover:border-gold-500 hover:shadow-xl hover:shadow-gold-500/10 transition-all duration-300"
                    >
                      <div className="w-20 h-20 bg-navy-50 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-gold-50 transition-colors duration-300">
                        <Home className="w-9 h-9 text-navy-900 group-hover:text-gold-600 transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-bold text-navy-900 mb-2">Villa</h3>
                      <p className="text-sm text-gray-500">
                        Rent out your villa in Callachi Society
                      </p>
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <button
                    onClick={() => { setRentOutType(null); setSubmitted(false); }}
                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-navy-900 transition-colors mb-8 group"
                  >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    Back to property types
                  </button>

                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                    <div className="lg:col-span-3">
                      <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
                        <h3 className="text-xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                          <div className="w-8 h-8 bg-navy-100 rounded-lg flex items-center justify-center">
                            {rentOutType === "apartment" ? (
                              <Building2 className="w-4 h-4 text-navy-900" />
                            ) : (
                              <Home className="w-4 h-4 text-navy-900" />
                            )}
                          </div>
                          Rent Out {rentOutType === "apartment" ? "Apartment" : "Villa"}
                        </h3>

                        {rentOutType === "apartment" ? (
                          <form onSubmit={handleSubmitApartment} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                              <FormField label="Project Name" icon={MapPin} required>
                                <input
                                  type="text"
                                  value={apartment.projectName}
                                  onChange={(e) => updateApartment("projectName", e.target.value)}
                                  placeholder="e.g. AA Residencia"
                                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900/50"
                                  required
                                />
                              </FormField>
                              <FormField label="Apartment Series" icon={Layers} required>
                                <input
                                  type="text"
                                  value={apartment.series}
                                  onChange={(e) => updateApartment("series", e.target.value)}
                                  placeholder="e.g. A, B, C"
                                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900/50"
                                  required
                                />
                              </FormField>
                              <FormField label="Floor Number" icon={ChevronDown} required>
                                <input
                                  type="text"
                                  value={apartment.floor}
                                  onChange={(e) => updateApartment("floor", e.target.value)}
                                  placeholder="e.g. 5th Floor"
                                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900/50"
                                  required
                                />
                              </FormField>
                              <FormField label="Apartment Size (Sq. Ft.)" icon={Maximize} required>
                                <input
                                  type="text"
                                  value={apartment.size}
                                  onChange={(e) => updateApartment("size", e.target.value)}
                                  placeholder="e.g. 1200"
                                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900/50"
                                  required
                                />
                              </FormField>
                            </div>

                            <FormField label="Facing" icon={Compass} required>
                              <div className="grid grid-cols-4 gap-3">
                                {FACING_OPTIONS.map((f) => (
                                  <button
                                    key={f}
                                    type="button"
                                    onClick={() => updateApartment("facing", f)}
                                    className={cn(
                                      "py-3 rounded-xl text-sm font-medium border-2 transition-all duration-200",
                                      apartment.facing === f
                                        ? "border-navy-900 bg-navy-900 text-white shadow-md"
                                        : "border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                                    )}
                                  >
                                    {f}
                                  </button>
                                ))}
                              </div>
                            </FormField>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                              <FormField label="Owner Name" icon={User} required>
                                <input
                                  type="text"
                                  value={apartment.ownerName}
                                  onChange={(e) => updateApartment("ownerName", e.target.value)}
                                  placeholder="Full name"
                                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900/50"
                                  required
                                />
                              </FormField>
                              <FormField label="Phone Number" icon={Phone} required>
                                <input
                                  type="tel"
                                  value={apartment.phone}
                                  onChange={(e) => updateApartment("phone", e.target.value)}
                                  placeholder="03XX-XXXXXXX"
                                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900/50"
                                  required
                                />
                              </FormField>
                            </div>

                            <FormField label="Additional Details (Optional)" icon={FileText}>
                              <textarea
                                value={apartment.details}
                                onChange={(e) => updateApartment("details", e.target.value)}
                                placeholder="Any additional information..."
                                rows={3}
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900/50 resize-none"
                              />
                            </FormField>

                            <div className="flex gap-3 pt-2">
                              <Button type="submit" variant="primary" size="lg" className="flex-1">
                                <Send className="w-4 h-4" />
                                Submit Request
                              </Button>
                              <Button type="button" variant="secondary" size="lg" onClick={(e) => { e.stopPropagation(); openContactPopup(); }}>
                                <Phone className="w-4 h-4" />
                                Contact Us
                              </Button>
                            </div>
                          </form>
                        ) : (
                          <form onSubmit={handleSubmitVilla} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                              <FormField label="Villa Size (Sq. Yd.)" icon={Maximize} required>
                                <input
                                  type="text"
                                  value={villa.size}
                                  onChange={(e) => updateVilla("size", e.target.value)}
                                  placeholder="e.g. 600"
                                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900/50"
                                  required
                                />
                              </FormField>
                              <FormField label="Number of Floors" icon={Layers} required>
                                <input
                                  type="text"
                                  value={villa.floors}
                                  onChange={(e) => updateVilla("floors", e.target.value)}
                                  placeholder="e.g. 2"
                                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900/50"
                                  required
                                />
                              </FormField>
                              <FormField label="Block" icon={MapPin} required>
                                <div className="grid grid-cols-3 gap-3">
                                  {BLOCK_OPTIONS.map((b) => (
                                    <button
                                      key={b}
                                      type="button"
                                      onClick={() => updateVilla("block", b)}
                                      className={cn(
                                        "py-3 rounded-xl text-sm font-medium border-2 transition-all duration-200",
                                        villa.block === b
                                          ? "border-navy-900 bg-navy-900 text-white shadow-md"
                                          : "border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                                      )}
                                    >
                                      Block {b}
                                    </button>
                                  ))}
                                </div>
                              </FormField>
                              <FormField label="Plot Number" icon={Hash} required>
                                <input
                                  type="text"
                                  value={villa.number}
                                  onChange={(e) => updateVilla("number", e.target.value)}
                                  placeholder="e.g. 12"
                                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900/50"
                                  required
                                />
                              </FormField>
                              <FormField label="Owner Name" icon={User} required>
                                <input
                                  type="text"
                                  value={villa.ownerName}
                                  onChange={(e) => updateVilla("ownerName", e.target.value)}
                                  placeholder="Full name"
                                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900/50"
                                  required
                                />
                              </FormField>
                              <FormField label="Phone Number" icon={Phone} required>
                                <input
                                  type="tel"
                                  value={villa.phone}
                                  onChange={(e) => updateVilla("phone", e.target.value)}
                                  placeholder="03XX-XXXXXXX"
                                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900/50"
                                  required
                                />
                              </FormField>
                            </div>

                            <FormField label="Additional Details (Optional)" icon={FileText}>
                              <textarea
                                value={villa.details}
                                onChange={(e) => updateVilla("details", e.target.value)}
                                placeholder="Any additional information..."
                                rows={3}
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900/50 resize-none"
                              />
                            </FormField>

                            <div className="flex gap-3 pt-2">
                              <Button type="submit" variant="primary" size="lg" className="flex-1">
                                <Send className="w-4 h-4" />
                                Submit Request
                              </Button>
                              <Button type="button" variant="secondary" size="lg" onClick={(e) => { e.stopPropagation(); openContactPopup(); }}>
                                <Phone className="w-4 h-4" />
                                Contact Us
                              </Button>
                            </div>
                          </form>
                        )}
                      </div>
                    </div>

                    <div className="lg:col-span-2">
                      <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-6 md:p-8 sticky top-28 text-white">
                        <h3 className="text-lg font-bold mb-1">Rent Out With Us</h3>
                        <p className="text-white/60 text-sm mb-6">
                          We help you find the perfect tenant
                        </p>
                        <ul className="space-y-5">
                          {[
                            { title: "Qualified Tenants", desc: "We find reliable and vetted tenants for your property" },
                            { title: "Best Rental Rates", desc: "Optimize your rental income with market-based pricing" },
                            { title: "Property Management", desc: "Full support from listing to tenant handover" },
                            { title: "Legal Protection", desc: "Proper rental agreements and documentation" },
                            { title: "Fast Tenants", desc: "Quick turnaround with our extensive network" },
                          ].map((item) => (
                            <li key={item.title} className="flex gap-3">
                              <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="font-semibold text-sm">{item.title}</p>
                                <p className="text-white/60 text-xs mt-0.5">{item.desc}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {submitted && (
                      <SuccessCard
                        message={lastMessage}
                        onClose={() => setSubmitted(false)}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </motion.div>
          )}

        </Container>
      </section>
    </PageLayout>
  );
}

function FormField({
  label,
  required,
  icon: Icon,
  children,
}: {
  label: string;
  required?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-1.5">
        {Icon && <Icon className="w-3.5 h-3.5 text-gray-400" />}
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}

function SuccessCard({ message, onClose }: { message: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 30, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="mt-8 max-w-3xl mx-auto"
    >
      <div className="bg-green-50 border border-green-200 rounded-2xl p-6 md:p-8 text-center">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 ring-2 ring-green-200">
          <CheckCircle className="w-6 h-6 text-green-600" />
        </div>
        <h3 className="text-lg font-bold text-navy-900 mb-2">Request Submitted</h3>
        <p className="text-sm text-gray-600 mb-6">
          Send this request via WhatsApp to our team
        </p>
        <div className="bg-white rounded-xl border border-green-200 p-4 mb-6 text-left max-h-48 overflow-y-auto">
          <pre className="text-sm text-gray-700 whitespace-pre-wrap font-sans leading-relaxed">
            {message}
          </pre>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={getWhatsAppUrl(HAMZA, message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold text-sm hover:bg-green-700 shadow-lg shadow-green-600/25 hover:shadow-green-600/30 transition-all duration-200"
          >
            <Send className="w-4 h-4" />
            Send to Hamza
          </a>
          <a
            href={getWhatsAppUrl(MUSTAFA, message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold text-sm hover:bg-green-700 shadow-lg shadow-green-600/25 hover:shadow-green-600/30 transition-all duration-200"
          >
            <Send className="w-4 h-4" />
            Send to Mustafa
          </a>
        </div>
      </div>
    </motion.div>
  );
}


