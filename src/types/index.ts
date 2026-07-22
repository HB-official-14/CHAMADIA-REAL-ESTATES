export interface Property {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  location: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  propertyType: string;
  status: string;
  images: string[];
  amenities: string[];
  floorPlans: FloorPlan[];
  paymentPlan: PaymentPlan[];
  developerId: string;
  developer?: Developer;
  projectId?: string;
  project?: Project;
  featured: boolean;
  available: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface FloorPlan {
  id: string;
  title: string;
  image: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  price: number;
}

export interface PaymentPlan {
  id: string;
  title: string;
  percentage: number;
  months: number;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  location: string;
  images: string[];
  status: string;
  developerId: string;
  developer?: Developer;
  features: string[];
  amenities: string[];
  properties: Property[];
  completionDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Developer {
  id: string;
  name: string;
  slug: string;
  logo: string;
  description: string;
  website?: string;
  projects: Project[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  message?: string;
  budget?: number;
  interestedProject?: string;
  source: string;
  status: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Appointment {
  id: string;
  name: string;
  phone: string;
  email: string;
  preferredDate: Date;
  preferredTime: string;
  interestedProject?: string;
  notes?: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Admin {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SiteContent {
  id: string;
  key: string;
  value: string;
  section: string;
  createdAt: Date;
  updatedAt: Date;
}

export type LeadSource = "contact_form" | "ai_chat" | "whatsapp" | "phone" | "website";
export type LeadStatus = "new" | "contacted" | "qualified" | "converted" | "lost";
export type AppointmentStatus = "pending" | "confirmed" | "completed" | "cancelled";
export type PropertyStatus = "available" | "sold" | "reserved" | "coming_soon";
export type UserRole = "super_admin" | "admin" | "editor";
