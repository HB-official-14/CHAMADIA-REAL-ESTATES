import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

export const leadFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email"),
  interestedProject: z.string().optional(),
  budget: z.number().positive("Budget must be positive").optional(),
  source: z.string().default("website"),
});

export const appointmentFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email"),
  preferredDate: z.string().min(1, "Please select a date"),
  preferredTime: z.string().min(1, "Please select a time"),
  interestedProject: z.string().optional(),
  notes: z.string().max(500).optional(),
});

export const adminLoginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const propertyFormSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  price: z.number().positive("Price must be positive"),
  location: z.string().min(2, "Location is required"),
  area: z.number().positive("Area must be positive"),
  bedrooms: z.number().int().min(0),
  bathrooms: z.number().int().min(0),
  propertyType: z.string().min(1, "Property type is required"),
  status: z.string().min(1, "Status is required"),
  developerId: z.string().min(1, "Developer is required"),
  projectId: z.string().optional(),
  amenities: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  images: z.array(z.string()).default([]),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type LeadFormData = z.infer<typeof leadFormSchema>;
export type AppointmentFormData = z.infer<typeof appointmentFormSchema>;
export type AdminLoginData = z.infer<typeof adminLoginSchema>;
export type PropertyFormData = z.infer<typeof propertyFormSchema>;
