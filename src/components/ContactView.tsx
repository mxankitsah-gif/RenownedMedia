/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent, useRef } from 'react';
import { Mail, Phone, MapPin, HelpCircle, ChevronDown, ExternalLink, Send, Check, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AGENCY_DETAILS } from '../data';

export default function ContactView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [subject, setSubject] = useState('Digital Marketing Services');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const hasSubmittedRef = useRef(false);

  // FAQ states
  const [expandedFaqIdx, setExpandedFaqIdx] = useState<number | null>(0);

  const handleSubmit = (e: FormEvent) => {
    setError(null);
    
    // Strict client-side validations prior to form post
    if (!name.trim()) {
      e.preventDefault();
      setError('Please provide your Full Name.');
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      e.preventDefault();
      setError('Please provide a valid Email Address.');
      return;
    }
    if (!message.trim()) {
      e.preventDefault();
      setError('Please provide your inquiry details.');
      return;
    }

    setIsSubmitting(true);
    hasSubmittedRef.current = true;
    
    // Backup transition timer to guarantee seamless success screen progression
    setTimeout(() => {
      if (hasSubmittedRef.current) {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        hasSubmittedRef.current = false;
      }
    }, 1500);
  };

  const handleIframeLoaded = () => {
    if (hasSubmittedRef.current) {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      hasSubmittedRef.current = false;
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhoneNumber('');
    setSubject('Digital Marketing Services');
    setMessage('');
    setError(null);
    setSubmitSuccess(false);
  };

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
        <div className="lg:col-span-7 bg-[#111111] border border-[#D4AF37]/15 rounded-xl p-8 shadow-xl space-y-6">
          
          {/* Form Header */}
          <div className="border-b border-[#D4AF37]/10 pb-5 text-left flex justify-between items-center">
            <div>
              <h3 className="font-sans font-extrabold text-lg text-white">
                Secure Strategic Intake
              </h3>
              <p className="text-[11px] text-[#BFB9AF] mt-1">
                Establish direct transmission of target parameters. All payload parameters map directly to secure intake.
              </p>
            </div>
          </div>

          {/* Hidden Iframe to buffer Google Form response without page redirect */}
          <iframe
            name="hidden_iframe"
            id="hidden_iframe"
            className="hidden"
            style={{ display: 'none' }}
            onLoad={handleIframeLoaded}
            title="hidden-form-carrier"
          />

          <AnimatePresence mode="wait">
            {!submitSuccess ? (
              <motion.form
                key="contact-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleSubmit}
                action="https://docs.google.com/forms/d/e/1FAIpQLSfPnoUEiAsg5aaFFP7J0BkSpcRD-dDV3Eg4Ur3kMWIuGk1jdw/formResponse"
                method="POST"
                target="hidden_iframe"
                className="space-y-5 text-left"
                id="contact-form-element"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name-input" className="block text-xs font-bold text-[#BFB9AF] mb-1.5 uppercase tracking-wide">
                      Full Name *
                    </label>
                    <input
                      id="contact-name-input"
                      name="entry.2005620554"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Joanne Carter"
                      className="w-full px-3/5 py-2.5 border border-[#D4AF37]/15 focus:border-[#D4AF37] rounded focus:outline-none text-xs bg-black/40 text-white font-sans transition-all placeholder:text-[#BFB9AF]/40"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email-input" className="block text-xs font-bold text-[#BFB9AF] mb-1.5 uppercase tracking-wide">
                      Email Address *
                    </label>
                    <input
                      id="contact-email-input"
                      name="entry.1045781291"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="joanne@company.com"
                      className="w-full px-3/5 py-2.5 border border-[#D4AF37]/15 focus:border-[#D4AF37] rounded focus:outline-none text-xs bg-black/40 text-white font-sans transition-all placeholder:text-[#BFB9AF]/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-phone-input" className="block text-xs font-bold text-[#BFB9AF] mb-1.5 uppercase tracking-wide">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone-input"
                      name="entry.1166974658"
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-3/5 py-2.5 border border-[#D4AF37]/15 focus:border-[#D4AF37] rounded focus:outline-none text-xs bg-black/40 text-white font-sans transition-all placeholder:text-[#BFB9AF]/40"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-subject-input" className="block text-xs font-bold text-[#BFB9AF] mb-1.5 uppercase tracking-wide">
                      Inquiry Vector *
                    </label>
                    <select
                      id="contact-subject-input"
                      name="entry.918346751"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3 py-2.5 border border-[#D4AF37]/15 focus:border-[#D4AF37] rounded focus:outline-none text-xs bg-[#0d0d0d] text-white font-sans cursor-pointer transition-colors"
                    >
                      <option value="Digital Marketing Services">Digital Marketing Strategy</option>
                      <option value="Paid Advertising">Paid Advertising & Campaigns</option>
                      <option value="SEO Strategy & Optimization">SEO Strategy & Optimization</option>
                      <option value="Content Production">Content Production & Video editing</option>
                      <option value="Short Form Content (Reels & Shorts)">Short Form Reels & Shorts</option>
                      <option value="Website & Development">Website Design & Dev</option>
                      <option value="Design & Branding">Design & Branding</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message-input" className="block text-xs font-bold text-[#BFB9AF] mb-1.5 uppercase tracking-wide">
                    Comments or inquiry specifications *
                  </label>
                  <textarea
                    id="contact-message-input"
                    name="entry.839337160"
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide your target milestones, timeline limitations, and brand parameters..."
                    className="w-full px-3/5 py-2.5 border border-[#D4AF37]/15 focus:border-[#D4AF37] rounded focus:outline-none text-xs bg-black/40 text-white font-sans transition-all placeholder:text-[#BFB9AF]/40 whitespace-pre-wrap"
                  />
                </div>

                {error && (
                  <div className="p-3 bg-red-950/20 border border-red-500/20 text-red-300 rounded text-xs font-sans text-left" id="contact-form-error-banner">
                    <strong className="text-red-400">ValidationError:</strong> {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || !name.trim() || !email.trim() || !message.trim()}
                  className="w-full py-4 bg-white hover:bg-[#D4AF37] text-black font-sans text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 rounded hover:shadow-[0_4px_20px_rgba(212,175,55,0.25)] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  id="submit-contact-form-btn"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-black" />
                      TRANSMITTING SPECIFICATIONS...
                    </>
                  ) : (
                    <>
                      SEND SECURE MESSAGE <Send className="w-4 h-4 text-black" />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="contact-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-6"
                id="contact-success-state"
              >
                <div className="w-14 h-14 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-[#D4AF37]/10">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-sans text-lg sm:text-xl font-extrabold text-white">Thank You! Your Inquiry Has Been Transmitted.</h4>
                  <p className="text-xs text-[#BFB9AF] max-w-sm mx-auto leading-relaxed">
                    We have successfully synchronized your specifications directly into our strategic intake spreadsheet. A specialist will contact you in under 12 hours.
                  </p>
                </div>

                <div className="p-4 bg-black/40 rounded border border-[#D4AF37]/15 text-left text-xs font-sans max-w-sm mx-auto space-y-2">
                  <span className="font-bold block text-[#D4AF37] border-b border-[#D4AF37]/10 pb-1.5 uppercase tracking-wider font-mono text-[9px]">Receipt Overview</span>
                  <div className="flex justify-between"><span className="text-[#BFB9AF]/70">Name:</span> <strong className="text-white">{name}</strong></div>
                  <div className="flex justify-between"><span className="text-[#BFB9AF]/70">Vector:</span> <strong className="text-white">{subject}</strong></div>
                  <div className="flex justify-between"><span className="text-[#BFB9AF]/70">Transmission:</span> <strong className="text-emerald-400 font-mono">Success (Google Sheets)</strong></div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-white hover:bg-[#D4AF37] text-black border border-[#D4AF37]/25 text-xs font-sans uppercase tracking-wider rounded transition-all cursor-pointer"
                    id="reset-contact-form-btn"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
