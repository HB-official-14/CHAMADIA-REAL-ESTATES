import type { Metadata } from "next";
import { Building2, ShieldCheck, MapPin, TrendingUp, Check, Compass } from "lucide-react";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader } from "@/components/layout/section";

export const metadata: Metadata = {
  title: "About Us",
  description: "The Chamadia family and our personal real estate journey — learn how Chamadia Real Estates was founded to solve the real problems people face in Karachi's property market.",
  alternates: {
    canonical: "https://chamadiarealestates.com/about",
  },
  openGraph: {
    title: "About Us | Chamadia Real Estates",
    description: "The Chamadia family story behind Chamadia Real Estates — built from real experience in Karachi's property market.",
    url: "https://chamadiarealestates.com/about",
  },
  twitter: {
    title: "About Us | Chamadia Real Estates",
    description: "The Chamadia family story behind Chamadia Real Estates — built from real experience in Karachi's property market.",
  },
};

const features = [
  { icon: Building2, title: "Premium Projects", subtitle: "Luxury & Affordable Living" },
  { icon: ShieldCheck, title: "Trusted Guidance", subtitle: "Honest Property Consultation" },
  { icon: MapPin, title: "Prime Locations", subtitle: "Callachi Society & HMR Waterfront" },
  { icon: TrendingUp, title: "Investment Focused", subtitle: "Smart Property Opportunities" },
];

const journeyExperiences = [
  "Selling apartments",
  "Finding suitable rental options",
  "Searching for and purchasing plots",
  "Dealing with property options",
  "Comparing opportunities",
  "Understanding clients\u2019 practical concerns",
  "Navigating the difficulties of buying, selling, renting, and investing",
];

const todayServices = [
  "Find suitable homes",
  "Explore and invest in suitable projects",
  "Buy properties",
  "Sell and resell properties",
  "Find suitable real estate opportunities",
  "Improve their lifestyle through better property decisions",
];

export default function AboutPage() {
  return (
    <PageLayout>
      <Section dark className="pt-32">
        <SectionHeader title="About Us" subtitle="The story of the Chamadia family and the company we built" light />
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Roots</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Chamadia Real Estates is a family company. Our story begins with
              Muhammad Burhan Chamadia and Abdul Basit Chamadia, whose values of trust,
              honesty, and hard work laid the foundation we stand on today.
            </p>
            <p className="text-gray-600 leading-relaxed">
              It is on that foundation that Muhammad Hamza Chamadia and Muhammad Mustafa
              Chamadia established Chamadia Real Estates &mdash; a business built by family,
              guided by integrity, and driven by a genuine desire to serve every client
              the way we would serve our own.
            </p>
          </div>
          <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl p-8 text-white h-[400px] flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500/15 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-8 h-8 text-gold-500" />
              </div>
              <p className="text-2xl font-bold">Rooted in Family.</p>
              <p className="text-2xl font-bold mt-1">Built on Trust.</p>
              <p className="text-white/60 text-sm mt-6">The Chamadia family &mdash; our strongest foundation</p>
            </div>
          </div>
        </div>
      </Section>

      <Section gold>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Personal Real Estate Journey</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our experience was not only theoretical &mdash; we lived it.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Before purchasing our own plot, we had to sell our apartments. We sold
              two of them, and that process taught us what sellers truly experience.
              Then we needed a suitable rental option, so we searched for rental
              properties and went through that process ourselves. After that, we
              searched for suitable plots, compared our options, and eventually
              purchased a plot.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Through this personal journey, we experienced the real estate market from
              every side &mdash; and every step of the way, we saw how difficult, unclear,
              and tiring the process can be.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg shadow-black/5">
            <ul className="space-y-4">
              {journeyExperiences.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-navy-900" />
                  </span>
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto bg-navy-50/60 border border-navy-100 rounded-2xl p-8 md:p-12 text-center">
          <div className="w-14 h-14 bg-navy-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Compass className="w-7 h-7 text-gold-500" />
          </div>
          <h2 className="text-3xl font-bold text-navy-900 mb-4">The Problems We Experienced</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            It did not take long to realize that we were not alone. Many people across
            Karachi face the same problems &mdash; unclear information, confusing options,
            poor communication, and processes that waste time and money. We saw how
            common these struggles are in the real estate market.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 bg-gradient-to-br from-gold-500/10 via-white to-gold-500/5 rounded-2xl p-8 md:p-12 h-full flex items-center justify-center border border-gold-500/20">
            <div className="text-center">
              <p className="text-lg font-bold text-navy-900 mb-3">Our Promise</p>
              <p className="text-2xl font-bold text-navy-900 leading-snug">
                Better guidance.
                <br />
                Better options.
                <br />
                Complete transparency.
              </p>
              <p className="text-gray-500 text-sm mt-5">
                Professional service with honest communication &mdash; always.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Why We Started Chamadia Real Estates</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              That is why we started Chamadia Real Estates. We decided to build a real
              estate company focused on solving those problems &mdash; through better
              guidance, better options, transparency, honest communication, and
              professional service.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our company is not just about selling property. It is about making the
              property journey easier, safer, and clearer for every client &mdash; the way
              we wished it had been for us.
            </p>
          </div>
        </div>
      </Section>

      <Section gold>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Where We Are Today</h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Today, الحمدلله, Chamadia Real Estates is serving many satisfied customers,
              helping people across Karachi make better property decisions &mdash; whether
              they are buying their first home, investing in a project, selling a
              property, or looking for the right rental.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg shadow-black/5">
            <p className="font-semibold text-navy-900 mb-4">Helping our clients:</p>
            <ul className="space-y-4">
              {todayServices.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-navy-900" />
                  </span>
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-6 text-center shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-navy-900 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-500 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-gold-500 group-hover:text-navy-900 transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-1">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader title="Our Mission" subtitle="What drives us every day" />
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-600 leading-relaxed">
            To provide exceptional real estate services that exceed client expectations,
            deliver outstanding investment opportunities, and set new standards of excellence
            in the Pakistani real estate market &mdash; the same way we would want to be treated
            as clients ourselves.
          </p>
        </div>
      </Section>
    </PageLayout>
  );
}