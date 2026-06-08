/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AGENCY_DETAILS } from '../data';
import { ActiveTab } from '../types';

interface FooterProps {
  onTabChange: (tab: ActiveTab) => void;
}

export default function Footer({ onTabChange }: FooterProps) {
  
  const companyLinks: { label: string; id: ActiveTab }[] = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ];

  const businessLinks: { label: string; id: ActiveTab }[] = [
    { label: 'Project', id: 'portfolio' },
    { label: 'Our Team', id: 'about' },
    { label: 'Facts', id: 'about' },
    { label: 'Customers', id: 'home' },
  ];

  return (
    <footer className="bg-[#0a0a0a] w-full py-16 border-t border-[#D4AF37]/15" id="global-footer">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Info */}
        <div className="space-y-4">
          <button
            onClick={() => onTabChange('home')}
            className="font-sans text-xl font-extrabold text-white tracking-tight block text-left cursor-pointer hover:text-[#D4AF37] transition-colors"
            id="footer-logo-btn"
          >
            Renowned<span className="text-[#D4AF37]">.</span>
          </button>
          <p className="font-sans text-xs text-[#BFB9AF] leading-relaxed">
            {AGENCY_DETAILS.fullSummary}
          </p>
        </div>

        {/* Company Links */}
        <div className="space-y-4">
          <h4 className="font-sans font-extrabold text-xs text-white uppercase tracking-wider">
            Company
          </h4>
          <ul className="space-y-2.5 text-xs font-sans">
            {companyLinks.map((link, idx) => (
              <li key={idx}>
                <button
                  onClick={() => onTabChange(link.id)}
                  className="text-[#BFB9AF] hover:text-[#D4AF37] transition-colors cursor-pointer text-left focus:outline-none"
                  id={`footer-company-link-${link.id}`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Business Links */}
        <div className="space-y-4">
          <h4 className="font-sans font-bold text-xs text-white uppercase tracking-wider">
            Business
          </h4>
          <ul className="space-y-2.5 text-xs font-sans">
            {businessLinks.map((link, idx) => (
              <li key={idx}>
                <button
                  onClick={() => onTabChange(link.id)}
                  className="text-[#BFB9AF] hover:text-[#D4AF37] transition-colors cursor-pointer text-left focus:outline-none"
                  id={`footer-business-link-${idx}`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Get In Touch */}
        <div className="space-y-4">
          <h4 className="font-sans font-extrabold text-xs text-white uppercase tracking-wider">
            Get In Touch
          </h4>
          <address className="font-sans text-xs text-[#BFB9AF] not-italic space-y-2.5">
            <p className="leading-relaxed font-semibold text-[#BFB9AF]">{AGENCY_DETAILS.address}</p>
            <p className="block">
              <a
                href={`mailto:${AGENCY_DETAILS.email}`}
                className="text-[#D4AF37] hover:text-[#F5D76E] transition-all font-bold"
              >
                {AGENCY_DETAILS.email}
              </a>
            </p>
            <p className="space-y-1 block">
              <a
                href={`tel:${AGENCY_DETAILS.phone1}`}
                className="hover:text-[#D4AF37] transition-colors block font-mono font-medium"
              >
                {AGENCY_DETAILS.phone1}
              </a>
              <a
                href={`tel:${AGENCY_DETAILS.phone2}`}
                className="hover:text-[#D4AF37] transition-colors block font-mono font-medium"
              >
                {AGENCY_DETAILS.phone2}
              </a>
            </p>
          </address>
        </div>

      </div>

      {/* Baseline Footers */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-[#D4AF37]/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-sans text-xs text-[#BFB9AF] text-center md:text-left">
          © 2026 Renowned Media Agency. All rights reserved.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-3.5 text-xs text-[#BFB9AF]">
          <a href="#privacy" className="hover:text-[#D4AF37] transition-all">Privacy Policy</a>
          <span className="text-[#D4AF37]/20">|</span>
          <a href="#terms" className="hover:text-[#D4AF37] transition-all">Terms of Service</a>
          <span className="text-[#D4AF37]/20">|</span>
          <a href="#cookies" className="hover:text-[#D4AF37] transition-all">Cookie Policy</a>
          <span className="text-[#D4AF37]/20">|</span>
          <a href="#sitemap" className="hover:text-[#D4AF37] transition-all">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
