import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { HeroSection } from "@/components/home/hero";
import { SearchSection } from "@/components/home/search-section";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { InvestmentBenefits } from "@/components/home/investment-benefits";
import { FeaturedLocations } from "@/components/home/featured-locations";
import { FeaturedPlots } from "@/components/home/featured-plots";
import { Testimonials } from "@/components/home/testimonials";
import { Leadership } from "@/components/home/leadership";
import { HomeFAQ } from "@/components/home/home-faq";
import { HomeContact } from "@/components/home/contact-section";
import { getProjectCoverImage } from "@/lib/project-images";
import { breadcrumbStructuredData } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Chamadia Real Estates | Premium Real Estate Solutions",
  description: "Discover luxury properties and premium real estate investments with Chamadia Real Estates. Expert guidance for your property journey in Pakistan.",
  alternates: {
    canonical: "https://chamadiarealestates.com",
  },
  openGraph: {
    title: "Chamadia Real Estates | Premium Real Estate Solutions",
    description: "Discover luxury properties and premium real estate investments with Chamadia Real Estates. Expert guidance for your property journey in Pakistan.",
    url: "https://chamadiarealestates.com",
  },
  twitter: {
    title: "Chamadia Real Estates | Premium Real Estate Solutions",
    description: "Discover luxury properties and premium real estate investments with Chamadia Real Estates. Expert guidance for your property journey in Pakistan.",
  },
};

const featuredProjectImages: Record<string, string | null> = {
  "AA Beverly": getProjectCoverImage("AA Beverly"),
  "The Court Heights": getProjectCoverImage("The Court Heights"),
  "Centric Elite": getProjectCoverImage("Centric Elite"),
};

const homeBreadcrumb = breadcrumbStructuredData([
  { name: "Home", url: "https://chamadiarealestates.com" },
]);

export default function Home() {
  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: homeBreadcrumb }}
      />
      <HeroSection />
      <SearchSection />
      <FeaturedProjects projectImages={featuredProjectImages} />
      <WhyChooseUs />
      <InvestmentBenefits />
      <FeaturedLocations />
      <FeaturedPlots />
      <Testimonials />
      <Leadership />
      <HomeFAQ />
      <HomeContact />
    </PageLayout>
  );
}
