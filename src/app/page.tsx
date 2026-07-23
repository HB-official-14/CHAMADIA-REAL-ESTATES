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

const featuredProjectImages: Record<string, string | null> = {
  "AA Beverly": getProjectCoverImage("AA Beverly"),
  "The Court Heights": getProjectCoverImage("The Court Heights"),
  "Centric Elite": getProjectCoverImage("Centric Elite"),
};

export default function Home() {
  return (
    <PageLayout>
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
