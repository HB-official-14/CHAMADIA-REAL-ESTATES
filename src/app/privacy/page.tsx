import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = {
  title: "Privacy Policy | Chamadia Real Estates",
  description: "Privacy Policy for Chamadia Real Estates. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <PageLayout>
      <Section dark className="pt-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-white/70 text-lg">Last updated: January 2025</p>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto prose prose-gray">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">1. Introduction</h2>
          <p className="text-gray-600 mb-6">
            Chamadia Real Estates (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mb-4">2. Information We Collect</h2>
          <p className="text-gray-600 mb-4">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Personal identification information (Name, email address, phone number)</li>
            <li>Property preferences and search history</li>
            <li>Communication data from forms and chat interactions</li>
            <li>Usage data and analytics</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy-900 mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">We use collected information for:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Providing and improving our services</li>
            <li>Responding to inquiries and appointment requests</li>
            <li>Sending property recommendations and updates</li>
            <li>Analytics and website optimization</li>
            <li>Legal compliance and fraud prevention</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy-900 mb-4">4. Information Sharing</h2>
          <p className="text-gray-600 mb-6">
            We do not sell your personal information. We may share information with trusted partners
            who assist in operating our website and conducting our business, subject to confidentiality agreements.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mb-4">5. Data Security</h2>
          <p className="text-gray-600 mb-6">
            We implement appropriate security measures to protect your personal information.
            However, no method of transmission over the Internet is 100% secure.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mb-4">6. Your Rights</h2>
          <p className="text-gray-600 mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Access your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy-900 mb-4">7. Contact Us</h2>
          <p className="text-gray-600 mb-6">
            If you have questions about this Privacy Policy, please contact us at:
            info@chamadiarealestates.com
          </p>
        </div>
      </Section>
    </PageLayout>
  );
}
