import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat("en-PK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export function formatDateShort(date: Date | string): string {
  return new Intl.DateTimeFormat("en-PK", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.substring(0, length).trim() + "...";
}

export function getWhatsAppUrl(phone: string, message?: string): string {
  const base = `https://wa.me/${phone.replace(/[^0-9]/g, "")}`;
  if (message) return `${base}?text=${encodeURIComponent(message)}`;
  return base;
}

export function getPhoneUrl(phone: string): string {
  return `tel:${phone.replace(/[^0-9]/g, "")}`;
}

export function getEmailUrl(email: string, subject?: string): string {
  if (subject) return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  return `mailto:${email}`;
}
