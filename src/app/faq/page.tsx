import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader } from "@/components/layout/section";

export const metadata: Metadata = {
  title: "FAQ | Chamadia Real Estates",
  description: "Frequently asked questions about Chamadia Real Estates services, properties, and investment process.",
};

const faqCategories = [
  {
    title: "General Questions",
    questions: [
      { q: "What types of properties do you offer?", a: "We offer apartments, villas, houses, penthouses, commercial spaces, and plots across prime locations in Pakistan." },
      { q: "Are you registered with relevant authorities?", a: "Yes, we are fully registered and compliant with all real estate regulations and authorities." },
      { q: "Do you provide after-sales service?", a: "Absolutely. We provide comprehensive after-sales support including documentation assistance and property management guidance." },
    ],
  },
  {
    title: "Buying Process",
    questions: [
      { q: "How do I start the property buying process?", a: "Contact us through phone, email, or our website. Our team will understand your requirements and present suitable options." },
      { q: "What documents are required for purchase?", a: "Required documents include CNIC, proof of income, and any relevant legal documents. Our team will guide you through the complete process." },
      { q: "Can I get financing assistance?", a: "Yes, we have partnerships with leading banks and financial institutions to help you secure financing for your property purchase." },
    ],
  },
  {
    title: "Payments & Plans",
    questions: [
      { q: "What payment plans are available?", a: "We offer flexible payment plans including installment plans, lump sum payments, and custom payment schedules tailored to your budget." },
      { q: "Is there a booking fee?", a: "Yes, a booking fee is required to reserve your property. The amount varies by property and will be clearly communicated." },
      { q: "What payment methods do you accept?", a: "We accept bank transfers, checks, and online payments. All transactions are processed securely through proper banking channels." },
    ],
  },
  {
    title: "Investments",
    questions: [
      { q: "Is real estate a good investment in Pakistan?", a: "Real estate in Pakistan has shown consistent growth and offers excellent long-term investment potential, especially in developing areas." },
      { q: "What is the minimum investment amount?", a: "Investment minimums vary by project. Contact our team to discuss options that match your budget." },
      { q: "Do you offer property management services?", a: "Yes, we provide property management services including rental management, maintenance coordination, and tenant handling." },
    ],
  },
];

export default function FAQPage() {
  return (
    <PageLayout>
      <Section dark className="pt-32">
        <SectionHeader title="Frequently Asked Questions" subtitle="Find answers to common questions about our services" light />
      </Section>

      {faqCategories.map((category) => (
        <Section key={category.title}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-navy-900 mb-8">{category.title}</h2>
            <div className="space-y-6">
              {category.questions.map((item) => (
                <div key={item.q} className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-navy-900 mb-3">{item.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      ))}
    </PageLayout>
  );
}
