/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Mail, Phone, MapPin, HelpCircle, ChevronDown, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AGENCY_DETAILS } from '../data';
import { trackFormSubmission } from '../lib/analytics';

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
        <span className="font-sans text-xs font-bold text-[#1d4ed8] bg-[#1d4ed8]/10 px-4 py-1.5 rounded-full uppercase tracking-widest block w-fit mx-auto">
          Get In Touch
        </span>
        <h1 className="font-sans text-4xl font-extrabold text-slate-900 tracking-tight">
          Initiate Your Growth Routine
        </h1>
        <p className="font-sans text-base text-slate-600 leading-relaxed">
          Ready to elevate your digital presence, coordinate premium photography shoots, or establish organic search authority? We partner with leading Indian creators, startups, coaches, local businesses, and SMEs to orchestrate elite digital growth channels.
        </p>
      </section>

      {/* Main Form & details blocks */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact details & Map block */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-8 space-y-6">
            <h3 className="font-sans font-extrabold text-lg text-slate-900">Direct Inquiry Channels</h3>
            
            <div className="space-y-4 text-xs font-sans">
              {/* Mail */}
              <div className="flex items-start gap-4 p-4 bg-white rounded border border-slate-150 hover:border-blue-300 transition-colors shadow-sm">
                <Mail className="w-5 h-5 text-[#1d4ed8] shrink-0" />
                <div className="space-y-1">
                  <span className="font-sans font-bold text-[9px] text-slate-500 uppercase block tracking-wider">Mail Address</span>
                  <a href={`mailto:${AGENCY_DETAILS.email}`} className="text-xs font-semibold text-[#1d4ed8] hover:text-[#1e40af] hover:underline">
                    {AGENCY_DETAILS.email}
                  </a>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-start gap-4 p-4 bg-white rounded border border-slate-150 hover:border-blue-300 transition-colors shadow-sm">
                <Phone className="w-5 h-5 text-[#1d4ed8] shrink-0" />
                <div className="space-y-1">
                  <span className="font-sans font-bold text-[9px] text-slate-500 uppercase block tracking-wider">Operations Phone</span>
                  <div className="space-y-1">
                    <a href={`tel:${AGENCY_DETAILS.phone1}`} className="text-xs font-semibold text-[#1d4ed8] hover:text-[#1e40af] hover:underline block font-sans">
                      {AGENCY_DETAILS.phone1}
                    </a>
                    <a href={`tel:${AGENCY_DETAILS.phone2}`} className="text-xs font-semibold text-[#1d4ed8] hover:text-[#1e40af] hover:underline block font-sans">
                      {AGENCY_DETAILS.phone2}
                    </a>
                  </div>
                </div>
              </div>

              {/* Headquarters Location */}
              <div className="flex items-start gap-4 p-4 bg-white rounded border border-slate-150 hover:border-blue-300 transition-colors shadow-sm">
                <MapPin className="w-5 h-5 text-[#1d4ed8] shrink-0" />
                <div className="space-y-1">
                  <span className="font-sans font-bold text-[9px] text-slate-500 uppercase block tracking-wider">Headquarters Location</span>
                  <span className="text-slate-600 font-semibold block leading-relaxed font-sans">
                    {AGENCY_DETAILS.address}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Location details card */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-6 text-center space-y-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#1d4ed8]/4 select-none pointer-events-none" />
            <div className="relative space-y-2">
              <span className="font-sans text-[10px] text-[#1d4ed8] font-bold uppercase tracking-widest block">
                Global Operations Hub
              </span>
              <h4 className="font-sans font-bold text-base text-slate-900">Ghaziabad, Uttar Pradesh</h4>
              <p className="font-sans text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                Coordinating high-end digital authority, search strategy, and premium digital assets for corporate sectors internationally.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form block */}
        <div 
          className="lg:col-span-8 bg-white border border-slate-200/80 shadow-[0_12px_35px_rgba(29,78,216,0.04)] p-6 sm:p-10 space-y-8 hover:border-blue-400 transition-colors duration-300"
          style={{ borderRadius: '20px' }}
        >
          {/* Form Header */}
          <div className="border-b border-slate-100 pb-6 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="font-sans font-extrabold text-2xl text-slate-900 tracking-tight">
                Request a Consultation
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tell us about your project and our team will get back to you.
              </p>
            </div>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfPnoUEiAsg5aaFFP7J0BkSpcRD-dDV3Eg4Ur3kMWIuGk1jdw/viewform?usp=header" 
              target="_blank" 
              rel="noreferrer" 
              onClick={() => trackFormSubmission('direct_form_link_click')}
              className="text-xs text-[#1d4ed8] hover:text-[#1e40af] font-mono font-bold uppercase tracking-widest flex items-center gap-2 underline shrink-0 cursor-pointer self-start sm:self-auto transition-colors"
            >
              Open Direct Form <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Clean website-styled contact CTA card */}
          <div 
            className="w-full bg-slate-50 border border-slate-200 py-16 px-6 text-center space-y-6 flex flex-col items-center justify-center relative overflow-hidden"
            style={{ borderRadius: '15px' }}
          >
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-50 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative space-y-4 max-w-lg mx-auto">
              <div className="w-12 h-12 bg-[#1d4ed8]/5 border border-[#1d4ed8]/10 rounded-full flex items-center justify-center mx-auto text-[#1d4ed8]">
                <ExternalLink className="w-5 h-5" />
              </div>
              
              <h4 className="font-sans font-extrabold text-xl text-slate-900 tracking-tight">
                Submit Your Project Inquiry
              </h4>
              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                Click the button below to open our secure consultation form in a new tab.
              </p>
              
              <div className="pt-2">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfPnoUEiAsg5aaFFP7J0BkSpcRD-dDV3Eg4Ur3kMWIuGk1jdw/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackFormSubmission('direct_form_button_click')}
                  className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-3.5 rounded font-mono text-[10px] font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_4px_15px_rgba(220,38,38,0.2)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.3)] cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
                >
                  Open Direct Form <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured FAQ accordion section */}
      <section className="space-y-8 border-t border-slate-100 pt-16">
        <div className="text-center max-w-md mx-auto space-y-2">
          <h3 className="font-sans text-2xl font-extrabold text-slate-900">Frequently Queried Parameters</h3>
          <p className="text-xs text-slate-600">Review standard operational methodologies prior to blueprint validation.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3" id="faq-accordions">
          {faqs.map((faq, idx) => {
            const isFaqExpanded = expandedFaqIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/85 rounded-lg overflow-hidden transition-all shadow-sm hover:border-blue-300"
              >
                <button
                  type="button"
                  onClick={() => setExpandedFaqIdx(isFaqExpanded ? null : idx)}
                  className="w-full text-left p-4 flex items-center justify-between text-sm font-sans font-bold text-slate-900 hover:bg-slate-50/50 transition-colors cursor-pointer focus:outline-none"
                  id={`faq-trigger-${idx}`}
                >
                  <div className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-[#1d4ed8] shrink-0" />
                    <span>{faq.q}</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isFaqExpanded ? 'rotate-180 text-[#1d4ed8]' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isFaqExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-11 pb-4 pt-1 text-xs text-slate-600 font-sans leading-relaxed border-t border-slate-100">
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
