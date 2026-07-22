import { PageLayout } from "@/components/layout/page-layout";
import { HeroSection } from "@/components/home/hero";
import { SearchSection } from "@/components/home/search-section";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { InvestmentBenefits } from "@/components/home/investment-benefits";
import { FeaturedLocations } from "@/components/home/featured-locations";
import { Testimonials } from "@/components/home/testimonials";
import { Leadership } from "@/components/home/leadership";
import { HomeFAQ } from "@/components/home/home-faq";
import { HomeContact } from "@/components/home/contact-section";

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <SearchSection />
      <FeaturedProjects />
      <WhyChooseUs />
      <InvestmentBenefits />
      <FeaturedLocations />
      <Testimonials />
      <Leadership />
      <HomeFAQ />
      <HomeContact />
    </PageLayout>
  );
}
