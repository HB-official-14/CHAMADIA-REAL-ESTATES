import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const adminPassword = await bcrypt.hash("admin123", 12);

  const admin = await prisma.admin.upsert({
    where: { email: "admin@chamadiarealestates.com" },
    update: {},
    create: {
      name: "Admin",
      email: "admin@chamadiarealestates.com",
      password: adminPassword,
      role: "super_admin",
    },
  });

  console.log("Admin created:", admin.email);

  const developer = await prisma.developer.upsert({
    where: { slug: "chamadia-developments" },
    update: {},
    create: {
      name: "Chamadia Developments",
      slug: "chamadia-developments",
      logo: "/images/logo.png",
      description: "Premium real estate developer with a track record of excellence.",
    },
  });

  console.log("Developer created:", developer.name);

  const projects = [
    {
      title: "Gulberg Residency",
      slug: "gulberg-residency",
      description: "Luxury residential apartments in the heart of Lahore with modern amenities and premium finishes.",
      location: "Gulberg III, Lahore",
      status: "Ongoing",
      features: ["Modern architectural design", "Spacious floor plans", "High-quality finishes", "24/7 security"],
      amenities: ["Swimming pool", "Fitness center", "Community hall", "Children's play area", "Landscaped gardens"],
      developerId: developer.id,
    },
    {
      title: "Lake View Heights",
      slug: "lake-view-heights",
      description: "Premium waterfront living experience with breathtaking views and world-class amenities.",
      location: "Defence, Karachi",
      status: "Completed",
      features: ["Waterfront location", "Panoramic views", "Premium fixtures", "24/7 concierge"],
      amenities: ["Private beach access", "Spa and sauna", "Tennis courts", "Restaurant", "Infinity pool"],
      developerId: developer.id,
    },
    {
      title: "Barakah Enclave",
      slug: "barakah-enclave",
      description: "Affordable luxury housing project with flexible payment plans for modern families.",
      location: "Islamabad Highway",
      status: "New Launch",
      features: ["Contemporary design", "Energy efficient", "Quality construction", "Gated community"],
      amenities: ["Community park", "Shopping center", "School", "Medical center", "Sports facilities"],
      developerId: developer.id,
    },
  ];

  for (const project of projects) {
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: {},
      create: project,
    });
  }

  console.log("Projects seeded:", projects.length);

  const siteContents = [
    { key: "hero_title", value: "Discover Your Dream Property", section: "home" },
    { key: "hero_subtitle", value: "Explore premium properties and exclusive real estate investments.", section: "home" },
    { key: "about_mission", value: "To provide exceptional real estate services that exceed client expectations.", section: "about" },
    { key: "contact_email", value: "info@chamadiarealestates.com", section: "contact" },
    { key: "contact_phone", value: "+92 300 1234567", section: "contact" },
    { key: "contact_address", value: "Main Boulevard, Gulberg III, Lahore, Pakistan", section: "contact" },
  ];

  for (const content of siteContents) {
    const existing = await prisma.siteContent.findFirst({ where: { key: content.key } });
    if (existing) {
      await prisma.siteContent.update({ where: { id: existing.id }, data: { value: content.value } });
    } else {
      await prisma.siteContent.create({ data: content });
    }
  }

  console.log("Site content seeded");
  console.log("Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
