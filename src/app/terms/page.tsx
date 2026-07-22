import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = {
  title: "Terms & Conditions | Chamadia Real Estates",
  description: "Terms and Conditions for using Chamadia Real Estates website and services.",
};

export default function TermsPage() {
  return (
    <PageLayout>
      <Section dark className="pt-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-white/70 text-lg">Last updated: January 2025</p>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 mb-6">
            By accessing and using this website, you accept and agree to be bound by these Terms and Conditions.
            If you do not agree with any part of these terms, you should not use our website.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mb-4">2. Services</h2>
          <p className="text-gray-600 mb-6">
            Chamadia Real Estates provides real estate brokerage, advisory, and property management services.
            All services are subject to availability and contractual agreements.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mb-4">3. Property Listings</h2>
          <p className="text-gray-600 mb-6">
            Property information displayed on our website is for informational purposes only.
            While we strive for accuracy, we recommend verifying all details through proper due diligence.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mb-4">4. User Obligations</h2>
          <p className="text-gray-600 mb-4">Users agree to:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Provide accurate and truthful information</li>
            <li>Not misuse the website or its services</li>
            <li>Not engage in fraudulent activities</li>
            <li>Respect intellectual property rights</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy-900 mb-4">5. Intellectual Property</h2>
          <p className="text-gray-600 mb-6">
            All content on this website, including text, graphics, logos, and images, is the property of
            Chamadia Real Estates and is protected by applicable intellectual property laws.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mb-4">6. Limitation of Liability</h2>
          <p className="text-gray-600 mb-6">
            Chamadia Real Estates shall not be liable for any direct, indirect, incidental, or consequential
            damages arising from the use of our website or services.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mb-4">7. Changes to Terms</h2>
          <p className="text-gray-600 mb-6">
            We reserve the right to modify these terms at any time. Changes will be effective immediately
            upon posting to the website. Continued use constitutes acceptance of modified terms.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mb-4">8. Contact</h2>
          <p className="text-gray-600 mb-6">
            For questions about these terms, contact us at info@chamadiarealestates.com.
          </p>
        </div>
      </Section>
    </PageLayout>
  );
}
