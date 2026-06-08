/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Mail, Phone, MapPin, HelpCircle, ChevronDown, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AGENCY_DETAILS } from '../data';

export default function ContactView() {
  // FAQ states
  const [expandedFaqIdx, setExpandedFaqIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do you host on-site production shoots?',
      a: 'Yes, absolutely. We coordinate on-site and in-studio multi-camera shoots. Fred Buster, our Director of Operations, handles complete logistics including set layout, lighting, acoustic rigs, and raw asset collection.'
    },
    {
      q: 'What is the standard onboarding timeline?',
      a: 'Typically, we can formalize a strategy blueprint, agree on asset cadences, and launch search engineering optimization workflows within 5-7 business days of booking confirmation.'
    },
    {
      q: 'Are your SEO strategies monthly or lump sum?',
      a: 'Continuous organic search authority requires monthly execution (on-page updates, crawl logging, pillar construction). Therefore, we offer transparent standard or velocity-scale monthly retainers.'
    }
  ];

  return (
    <div className="py-12 space-y-20 max-w-7xl mx-auto px-6">
      {/* Intro Header */}
      <section className="text-center max-w-2xl mx-auto space-y-4">
        <span className="font-sans text-xs font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-4 py-1.5 rounded-full uppercase tracking-widest">
          Get In Touch
        </span>
        <h2 className="font-sans text-4xl font-extrabold text-white tracking-tight">
          Initiate Your Growth Routine
        </h2>
        <p className="font-sans text-base text-[#BFB9AF] leading-relaxed">
          Ready to elevate your digital presence, coordinate premium photography shoots, or establish organic search authority? We partner with leading Indian creators, startups, coaches, local businesses, and SMEs to orchestrate elite digital growth channels.
        </p>
      </section>

      {/* Main Form & details blocks */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact details & Map block */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-[#111111] border border-[#D4AF37]/15 rounded-xl p-8 space-y-6">
            <h3 className="font-sans font-extrabold text-lg text-white">Direct Inquiry Channels</h3>
            
            <div className="space-y-4 text-xs font-sans">
              {/* Mail */}
              <div className="flex items-start gap-4 p-4 bg-black/60 rounded border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-colors">
                <Mail className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <div className="space-y-1">
                  <span className="font-sans font-bold text-[9px] text-[#BFB9AF] uppercase block tracking-wider">Mail Address</span>
                  <a href={`mailto:${AGENCY_DETAILS.email}`} className="text-xs font-semibold text-[#D4AF37] hover:text-[#F5D76E] hover:underline">
                    {AGENCY_DETAILS.email}
                  </a>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-start gap-4 p-4 bg-black/60 rounded border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-colors">
                <Phone className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <div className="space-y-1">
                  <span className="font-sans font-bold text-[9px] text-[#BFB9AF] uppercase block tracking-wider">Operations Phone</span>
                  <div className="space-y-1">
                    <a href={`tel:${AGENCY_DETAILS.phone1}`} className="text-xs font-semibold text-[#D4AF37] hover:text-[#F5D76E] hover:underline block">
                      {AGENCY_DETAILS.phone1}
                    </a>
                    <a href={`tel:${AGENCY_DETAILS.phone2}`} className="text-xs font-semibold text-[#D4AF37] hover:text-[#F5D76E] hover:underline block">
                      {AGENCY_DETAILS.phone2}
                    </a>
                  </div>
                </div>
              </div>

              {/* Headquarters Location */}
              <div className="flex items-start gap-4 p-4 bg-black/60 rounded border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-colors">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <div className="space-y-1">
                  <span className="font-sans font-bold text-[9px] text-[#BFB9AF] uppercase block tracking-wider">Headquarters Location</span>
                  <span className="text-[#BFB9AF] font-semibold block leading-relaxed">
                    {AGENCY_DETAILS.address}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Luxury Office Representation Layout without simulated terminal larp */}
          <div className="bg-[#111111] border border-[#D4AF37]/15 rounded-xl p-6 text-center space-y-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#D4AF37]/5 select-none pointer-events-none" />
            <div className="relative space-y-2">
              <span className="font-sans text-[10px] text-[#D4AF37] font-bold uppercase tracking-widest block">
                Global Operations Hub
              </span>
              <h4 className="font-sans font-bold text-base text-white">Ghaziabad, Uttar Pradesh</h4>
              <p className="font-sans text-xs text-[#BFB9AF] max-w-sm mx-auto leading-relaxed">
                Coordinating high-end digital authority, search strategy, and premium digital assets for corporate sectors internationally.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form block */}
        <div className="lg:col-span-7 bg-[#111111] border border-[#D4AF37]/15 rounded-xl p-6 sm:p-8 shadow-xl space-y-6">
          
          {/* Form Header */}
          <div className="border-b border-[#D4AF37]/10 pb-5 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-sans font-extrabold text-lg text-white">
                Secure Strategic Intake
              </h3>
              <p className="text-[11px] text-[#BFB9AF] mt-1">
                Complete and submit our secure strategic specifications questionnaire directly inside the portal below.
              </p>
            </div>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfPnoUEiAsg5aaFFP7J0BkSpcRD-dDV3Eg4Ur3kMWIuGk1jdw/viewform?usp=header" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[10.5px] text-[#D4AF37] hover:text-[#F5D76E] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 underline shrink-0 cursor-pointer"
            >
              Open Form <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Secure embedded Google Form */}
          <div className="relative w-full bg-[#111111] border border-[#D4AF37]/10 rounded-lg overflow-hidden h-[820px] sm:h-[900px]">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSfPnoUEiAsg5aaFFP7J0BkSpcRD-dDV3Eg4Ur3kMWIuGk1jdw/viewform?embedded=true"
              className="w-full h-full bg-[#111111] border-none"
              title="Secure Strategic Intake Questionnaire"
              referrerPolicy="no-referrer"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>

      {/* Structured FAQ accordion section */}
      <section className="space-y-8 border-t border-[#D4AF37]/15 pt-16">
        <div className="text-center max-w-md mx-auto space-y-2">
          <h3 className="font-sans text-2xl font-extrabold text-white">Frequently Queried Parameters</h3>
          <p className="text-xs text-[#BFB9AF]">Review standard operational methodologies prior to blueprint validation.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3" id="faq-accordions">
          {faqs.map((faq, idx) => {
            const isFaqExpanded = expandedFaqIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#111111] border border-[#D4AF37]/15 rounded-lg overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setExpandedFaqIdx(isFaqExpanded ? null : idx)}
                  className="w-full text-left p-4 flex items-center justify-between text-sm font-sans font-bold text-white hover:bg-white/[0.02] transition-colors cursor-pointer focus:outline-none"
                  id={`faq-trigger-${idx}`}
                >
                  <div className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>{faq.q}</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-[#BFB9AF] transition-transform ${isFaqExpanded ? 'rotate-180 text-[#D4AF37]' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isFaqExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-11 pb-4 pt-1 text-xs text-[#BFB9AF] font-sans leading-relaxed border-t border-[#D4AF37]/10">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
