import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig, NAV_ITEMS } from "@/config/site";
import { Container } from "./container";
import { Logo } from "@/components/shared/logo";

const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Callachi+Society+Gulshan-e-Iqbal+Block+10-A+Karachi+Pakistan";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Logo variant="footer" className="mb-6" />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {siteConfig.description}
            </p>
            <div className="flex gap-3">
              <SocialLink href={siteConfig.social.instagram} icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                </svg>
              } />
              <SocialLink href={siteConfig.social.facebook} icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              } />
              <SocialLink href={siteConfig.social.youtube} icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect x="2" y="4" width="20" height="16" rx="4" />
                  <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
                </svg>
              } />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_ITEMS.flatMap((item) =>
                item.children
                  ? item.children
                  : item.href
                    ? [item]
                    : []
              ).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href!}
                    className="text-gray-400 hover:text-gold-500 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-400 text-sm">Property Sales</span></li>
              <li><span className="text-gray-400 text-sm">Property Rentals</span></li>
              <li><span className="text-gray-400 text-sm">Investment Advisory</span></li>
              <li><span className="text-gray-400 text-sm">Property Management</span></li>
              <li><span className="text-gray-400 text-sm">Consultation</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <p className="text-xs text-gray-500 font-medium">CEO &amp; Founder</p>
                <a href="tel:03000262592" className="flex items-center gap-3 text-gray-400 hover:text-gold-500 transition-colors text-sm">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  Hamza Chamadia — 03000262592
                </a>
              </li>
              <li>
                <p className="text-xs text-gray-500 font-medium">CEO &amp; Founder</p>
                <a href="tel:03352266358" className="flex items-center gap-3 text-gray-400 hover:text-gold-500 transition-colors text-sm">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  Mustafa Chamadia — 03352266358
                </a>
              </li>
              <li className="pt-2">
                <a href="mailto:chamadiarealestates@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-gold-500 transition-colors text-sm">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  chamadiarealestates@gmail.com
                </a>
              </li>
              <li>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-400 hover:text-gold-500 transition-colors text-sm"
                >
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>
                    Callachi Society,<br />
                    Gulshan-e-Iqbal,<br />
                    Block 10-A,<br />
                    Karachi, Pakistan
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 hover:scale-110 hover:shadow-lg hover:shadow-gold-500/30 transition-all duration-300 ease-out text-gray-400"
    >
      {icon}
    </a>
  );
}
