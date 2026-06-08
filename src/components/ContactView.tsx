/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, Check, Clock, HelpCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AGENCY_DETAILS } from '../data';

export default function ContactView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Partnership');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // FAQ states
  const [expandedFaqIdx, setExpandedFaqIdx] = useState<number | null>(0);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setSubject('General Partnership');
    setMessage('');
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
        <span className="font-mono text-xs font-bold text-primary bg-primary/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          Get In Touch
        </span>
        <h2 className="font-sans text-4xl font-extrabold text-on-surface tracking-tight">
          Initiate Your Growth Routine
        </h2>
        <p className="font-sans text-body-lg text-on-surface-variant leading-relaxed">
          Have an upcoming product shoot, rebrand, or keyword authority objective? File your credentials below for continuous performance pipelines.
        </p>
      </section>

      {/* Main Form & details blocks */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact details & Map block */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-surface-container border border-outline-variant/30 rounded-xl p-8 space-y-6">
            <h3 className="font-sans font-extrabold text-lg text-on-surface">Direct Inquiry Channels</h3>
            
            <div className="space-y-4 text-xs font-sans">
              {/* Mail */}
              <div className="flex items-start gap-3 p-3 bg-background rounded border border-outline-variant/20 hover:border-primary/40 transition-colors">
                <Mail className="w-5 h-5 text-primary shrink-0 transition-transform" />
                <div className="space-y-0.5">
                  <span className="font-bold text-[9px] text-on-surface-variant uppercase block font-mono">Mail Address</span>
                  <a href={`mailto:${AGENCY_DETAILS.email}`} className="text-xs font-semibold text-primary hover:underline">
                    {AGENCY_DETAILS.email}
                  </a>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-start gap-3 p-3 bg-background rounded border border-outline-variant/20 hover:border-primary/40 transition-colors">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div className="space-y-0.5">
                  <span className="font-bold text-[9px] text-on-surface-variant uppercase block font-mono">Operations Phone</span>
                  <div className="space-y-1">
                    <a href={`tel:${AGENCY_DETAILS.phone1}`} className="text-xs font-semibold text-primary hover:underline block">
                      {AGENCY_DETAILS.phone1}
                    </a>
                    <a href={`tel:${AGENCY_DETAILS.phone2}`} className="text-xs font-semibold text-primary hover:underline block">
                      {AGENCY_DETAILS.phone2}
                    </a>
                  </div>
                </div>
              </div>

              {/* Headquarters Location */}
              <div className="flex items-start gap-3 p-3 bg-background rounded border border-outline-variant/20 hover:border-primary/40 transition-colors">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <div className="space-y-0.5">
                  <span className="font-bold text-[9px] text-on-surface-variant uppercase block font-mono">Headquarters Location</span>
                  <span className="text-on-surface font-semibold block leading-relaxed">
                    {AGENCY_DETAILS.address}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Office representation illustration */}
          <div className="bg-surface-container border border-outline-variant/30 rounded-xl p-6 text-center space-y-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 select-none pointer-events-none" />
            <div className="relative space-y-2">
              <span className="font-mono text-[9px] text-primary font-bold uppercase tracking-widest block">
                GLOBAL OPERATIONS HUB
              </span>
              <h4 className="font-sans font-bold text-sm text-on-surface">Ghaziabad, Uttar Pradesh</h4>
              <p className="font-sans text-[10px] text-on-surface-variant max-w-xs mx-auto leading-relaxed">
                Seamless digital delivery, secure server-side communications, and continuous creative output from India to global digital sectors.
              </p>
              
              {/* Fun visual placeholder representing standard coordinate ping */}
              <div className="pt-3 flex items-center justify-center gap-1.5 font-mono text-[10px] text-primary">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                <span className="font-extrabold text-[9px]">GHAZIABAD STATION_LIVE (28.6692° N, 77.4538° E)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form block */}
        <div className="lg:col-span-7 bg-surface-container border border-outline-variant/30 rounded-xl p-8 shadow-sm">
          <AnimatePresence mode="wait">
            {!submitSuccess ? (
              <motion.form
                key="contact-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-5"
                id="contact-form-element"
              >
                <h3 className="font-sans font-extrabold text-lg text-on-surface">Submit Credentials Log</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name-input" className="block text-xs font-bold text-on-surface-variant mb-1">
                      Full Name *
                    </label>
                    <input
                      id="contact-name-input"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Joanne Carter"
                      className="w-full px-3 py-2 border border-outline-variant/50 rounded focus:outline-none focus:border-primary text-sm font-sans bg-background"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email-input" className="block text-xs font-bold text-on-surface-variant mb-1">
                      Email Address *
                    </label>
                    <input
                      id="contact-email-input"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. joanne@company.com"
                      className="w-full px-3 py-2 border border-outline-variant/50 rounded focus:outline-none focus:border-primary text-sm font-sans bg-background"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject-input" className="block text-xs font-bold text-on-surface-variant mb-1">
                    Inquiry Vector
                  </label>
                  <select
                    id="contact-subject-input"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3 py-2 border border-outline-variant/50 rounded focus:outline-none focus:border-primary text-sm font-sans bg-background text-on-surface"
                  >
                    <option value="General Partnership" className="bg-background">General Business / Partnership</option>
                    <option value="Video Shoot Booking" className="bg-background">Video Shoot Production</option>
                    <option value="Technical SEO Retainer" className="bg-background">Technical SEO Auditing</option>
                    <option value="Press Visibility" className="bg-background">Digital PR & Placement</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message-input" className="block text-xs font-bold text-on-surface-variant mb-1">
                    Detailed Message & Parameters *
                  </label>
                  <textarea
                    id="contact-message-input"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide your target milestones, timeline limitations, and brand parameters..."
                    className="w-full px-3 py-2 border border-outline-variant/50 rounded focus:outline-none focus:border-primary text-sm font-sans bg-background"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !name.trim() || !email.trim() || !message.trim()}
                  className="w-full py-3 bg-primary text-on-primary font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 rounded hover:bg-primary/95 transition-colors cursor-pointer shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                  id="submit-contact-form-btn"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      SUBMITTING TRANSMISSION...
                    </>
                  ) : (
                    <>
                      SEND MESSAGE <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="contact-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-5"
                id="contact-success-state"
              >
                <div className="w-14 h-14 bg-primary text-on-primary rounded-full flex items-center justify-center mx-auto shadow-md">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                
                <div className="space-y-1.5">
                  <h4 className="font-sans text-xl font-extrabold text-on-surface">Inquiry Dispatched Successfully!</h4>
                  <p className="text-xs text-on-surface-variant max-w-sm mx-auto">
                    We will analyze your parameters and allocate the key operations squad to your ticket within 12 hours.
                  </p>
                </div>

                <div className="p-4 bg-surface-container-low rounded border border-outline-variant/20 text-left text-xs font-mono max-w-sm mx-auto space-y-1">
                  <span className="font-bold block text-primary mb-1">Ticket Reference:</span>
                  <div>Client: {name}</div>
                  <div>Subject: {subject}</div>
                  <div>Status: Processing in Pipeline</div>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2 bg-primary text-on-primary hover:bg-primary/90 text-xs font-mono uppercase tracking-wider rounded transition-colors cursor-pointer"
                  id="reset-contact-form-btn"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Structured FAQ accordion section */}
      <section className="space-y-8 border-t border-outline-variant/20 pt-16">
        <div className="text-center max-w-md mx-auto space-y-2">
          <h3 className="font-sans text-2xl font-extrabold text-on-surface">Frequently Queried Parameters</h3>
          <p className="text-xs text-on-surface-variant">Review standard operational methodologies prior to blueprint validation.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3" id="faq-accordions">
          {faqs.map((faq, idx) => {
            const isFaqExpanded = expandedFaqIdx === idx;
            return (
              <div
                key={idx}
                className="bg-surface-container border border-outline-variant/30 rounded-lg overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setExpandedFaqIdx(isFaqExpanded ? null : idx)}
                  className="w-full text-left p-4 flex items-center justify-between text-sm font-sans font-bold text-on-surface hover:bg-surface-container-low transition-colors cursor-pointer focus:outline-none"
                  id={`faq-trigger-${idx}`}
                >
                  <div className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-primary shrink-0" />
                    <span>{faq.q}</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-on-surface-variant transition-transform ${isFaqExpanded ? 'rotate-180 text-primary' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isFaqExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-11 pb-4 pt-1 text-xs text-on-surface-variant font-sans leading-relaxed border-t border-outline-variant/10">
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
