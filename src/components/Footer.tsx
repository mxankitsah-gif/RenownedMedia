/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AGENCY_DETAILS } from '../data';
import { ActiveTab } from '../types';
import RenownedLogo from './RenownedLogo';
import { Instagram, Youtube, Facebook, BookOpen, MapPin } from 'lucide-react';

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

  const socialLinks = [
    {
      name: 'Instagram',
      url: '#',
      icon: Instagram,
    },
    {
      name: 'YouTube',
      url: '#',
      icon: Youtube,
    },
    {
      name: 'Facebook',
      url: '#',
      icon: Facebook,
    },
    {
      name: 'Blog',
      url: 'https://renownedmedia.blogspot.com',
      icon: BookOpen,
    },
  ];

  return (
    <footer className="bg-[#0a0a0a] w-full py-16 border-t border-[#D4AF37]/15" id="global-footer">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Info */}
        <div className="space-y-4">
          <button
            onClick={() => onTabChange('home')}
            className="flex items-center justify-start cursor-pointer transition-all hover:opacity-80 pb-2"
            id="footer-logo-btn"
          >
            <RenownedLogo className="h-10 w-auto text-white" />
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

        {/* Follow Us */}
        <div className="space-y-4">
          <h4 className="font-sans font-extrabold text-xs text-white uppercase tracking-wider">
            Follow Us
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith('http') ? '_blank' : undefined}
                  rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center justify-center gap-2.5 h-12 w-full rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37] text-[#BFB9AF] hover:text-[#D4AF37] bg-white/[0.01] hover:bg-[#D4AF37]/10 transition-all transform hover:-translate-y-0.5 shadow-sm duration-300"
                  id={`footer-social-${social.name.toLowerCase()}`}
                >
                  <Icon className="w-4 h-4 stroke-[1.5] text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-mono text-[9px] uppercase tracking-wider font-semibold">{social.name}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Get In Touch */}
        <div className="space-y-4">
          <h4 className="font-sans font-extrabold text-xs text-white uppercase tracking-wider">
            Get In Touch
          </h4>
          <address className="font-sans text-xs text-[#BFB9AF] not-italic space-y-3.5">
            <a
              href="https://maps.google.com/?q=887+Nitikhand-1+Indirapuram+Ghaziabad+201014"
              target="_blank"
              rel="noopener noreferrer"
              className="group/loc flex flex-col gap-1.5 p-3.5 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37] bg-white/[0.01] hover:bg-[#D4AF37]/5 transition-all duration-300 block text-left cursor-pointer"
              id="footer-location-card"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider font-bold">Office Address</span>
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] group-hover/loc:scale-110 transition-transform duration-300 stroke-[2]" />
              </div>
              <p className="leading-relaxed font-sans text-xs text-[#BFB9AF] group-hover/loc:text-white transition-colors">
                887, Nitikhand-1, Indirapuram,<br />
                Ghaziabad, Uttar Pradesh 201014
              </p>
            </a>
            
            <div className="space-y-2 pt-1">
              <p className="block">
                <a
                  href={`mailto:${AGENCY_DETAILS.email}`}
                  className="text-[#D4AF37] hover:text-[#F1E0A8] transition-all font-bold block"
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
            </div>
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
