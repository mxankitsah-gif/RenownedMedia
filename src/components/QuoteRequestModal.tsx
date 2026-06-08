/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { X, Check, ArrowRight, Loader2, FileText, Send, Phone, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES, AGENCY_DETAILS } from '../data';

interface QuoteRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export default function QuoteRequestModal({ isOpen, onClose, preselectedServiceId }: QuoteRequestModalProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>(
    preselectedServiceId ? [preselectedServiceId] : []
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [budget, setBudget] = useState('medium'); // low | medium | premium | enterprise
  const [message, setMessage] = useState('');

  const getBudgetLabel = (b: string) => {
    switch (b) {
      case 'low': return 'Starter Growth (₹5,000 - ₹15,000 / mo)';
      case 'medium': return 'Growth Package (₹15,000 - ₹25,000 / mo)';
      case 'premium': return 'Business Package (₹25,000 - ₹50,000 / mo)';
      case 'enterprise': return 'Custom Quote (Contact for pricing)';
      default: return b;
    }
  };
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter((s) => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!name.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/renownedmedia@outlook.in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          company: company.trim(),
          budget: budget,
          budgetLabel: getBudgetLabel(budget),
          selectedServices: selectedServices.length > 0 
            ? selectedServices.map(id => SERVICES.find(s => s.id === id)?.title || id).join(', ')
            : 'None Selected (General Consultation)',
          message: message.trim() || 'No custom message provided.',
        }),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setSubmitSuccess(true);
      } else {
        const data = await response.json().catch(() => ({}));
        setIsSubmitting(false);
        setError(data.error || 'Failed to submit proposal request. Please review your details and try again.');
      }
    } catch (err) {
      setIsSubmitting(false);
      setError('A connection error occurred. Please check your network and try again.');
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setCompany('');
    setBudget('medium');
    setMessage('');
    setSelectedServices([]);
    setError(null);
    setSubmitSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/90 backdrop-blur-md cursor-zoom-out"
        id="quote-modal-backdrop"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
        className="relative bg-[#0d0d0d] text-white rounded-xl overflow-hidden shadow-2xl max-w-2xl w-full max-h-[92vh] flex flex-col z-10 border border-[#D4AF37]/25"
        id="quote-request-modal"
      >
        {/* Sticky Header */}
        <div className="flex justify-between items-center px-6 py-4.5 border-b border-[#D4AF37]/15 bg-[#141414] sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-[#D4AF37]/10 text-[#D4AF37] rounded">
              <FileText className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-sans text-lg font-extrabold text-white leading-tight">
                Request Consultation & Quote
              </h3>
              <p className="text-xs text-[#BFB9AF]">Let's blueprint your growth formula.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/[0.05] transition-colors text-[#BFB9AF] hover:text-white cursor-pointer"
            id="close-quote-modal-btn"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Container */}
        <div className="overflow-y-auto overflow-x-hidden flex-1 p-6 md:p-8">
          <AnimatePresence mode="wait">
            {!submitSuccess ? (
              <motion.form
                key="quote-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Step 1: Select Services */}
                <div className="space-y-3">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                    1. Select Target Service Channels
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {SERVICES.map((srv) => {
                      const selected = selectedServices.includes(srv.id);
                      return (
                        <button
                          key={srv.id}
                          type="button"
                          onClick={() => toggleService(srv.id)}
                          className={`p-3 text-left border rounded-lg transition-all text-xs font-sans flex flex-col justify-between h-20 relative cursor-pointer group ${
                            selected
                              ? 'border-[#D4AF37] bg-[#D4AF37]/5 text-[#D4AF37] ring-2 ring-[#D4AF37]/20 font-bold shadow-[0_0_15px_rgba(212,175,55,0.08)]'
                              : 'border-[#D4AF37]/15 bg-white/[0.01] text-[#BFB9AF] hover:border-[#D4AF37]/45 hover:bg-white/[0.03]'
                          }`}
                          id={`service-select-${srv.id}`}
                        >
                          <div className="font-bold flex items-center justify-between w-full">
                            <span>{srv.title}</span>
                            <span className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                              selected ? 'bg-[#D4AF37] border-[#D4AF37] text-[#0a0a0a] scale-110' : 'border-[#D4AF37]/20 bg-transparent'
                            }`}>
                              {selected && <Check className="w-2.5 h-2.5 stroke-[3] text-[#0a0a0a]" />}
                            </span>
                          </div>
                          <span className="text-[10px] text-[#BFB9AF] group-hover:text-white truncate w-full">
                            {srv.description}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Contact Info */}
                <div className="space-y-4">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                    2. Primary Details
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="quote-name-input" className="block text-xs font-bold text-[#BFB9AF] mb-1">
                        Your Name *
                      </label>
                      <input
                        id="quote-name-input"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Joanne Carter"
                        className="w-full px-3 py-2 border border-[#D4AF37]/15 focus:border-[#D4AF37] rounded focus:outline-none text-sm font-sans bg-[#0d0d0d] text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="quote-email-input" className="block text-xs font-bold text-[#BFB9AF] mb-1">
                        Professional Email *
                      </label>
                      <input
                        id="quote-email-input"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. joanne@company.com"
                        className="w-full px-3 py-2 border border-[#D4AF37]/15 focus:border-[#D4AF37] rounded focus:outline-none text-sm font-sans bg-[#0d0d0d] text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="quote-company-input" className="block text-xs font-bold text-[#BFB9AF] mb-1">
                        Company Name
                      </label>
                      <input
                        id="quote-company-input"
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Acme Tech Inc"
                        className="w-full px-3 py-2 border border-[#D4AF37]/15 focus:border-[#D4AF37] rounded focus:outline-none text-sm font-sans bg-[#0d0d0d] text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="quote-budget-input" className="block text-xs font-bold text-[#BFB9AF] mb-1">
                        Estimated Budget Scale
                      </label>
                      <select
                        id="quote-budget-input"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-3 py-2.5 border border-[#D4AF37]/15 focus:border-[#D4AF37] rounded focus:outline-none text-sm font-sans bg-[#0d0d0d] text-white"
                      >
                        <option value="low" className="bg-[#0d0d0d] text-white">Starter Growth (₹5,000 - ₹15,000 / mo)</option>
                        <option value="medium" className="bg-[#0d0d0d] text-white">Growth Package (₹15,000 - ₹25,000 / mo)</option>
                        <option value="premium" className="bg-[#0d0d0d] text-white">Business Package (₹25,000 - ₹50,000 / mo)</option>
                        <option value="enterprise" className="bg-[#0d0d0d] text-white">Custom Quote (Contact for pricing)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Step 3: Message / Scope */}
                <div className="space-y-2">
                  <label htmlFor="quote-message-input" className="block text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                    3. Project Summary & Parameters
                  </label>
                  <textarea
                    id="quote-message-input"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your current targets, hurdles, and desired timelines..."
                    className="w-full px-3 py-2 border border-[#D4AF37]/15 focus:border-[#D4AF37] rounded focus:outline-none text-sm font-sans bg-[#0d0d0d] text-white"
                  />
                </div>

                {error && (
                  <div className="p-3 bg-red-950/20 border border-red-500/20 text-red-300 rounded text-xs font-sans text-left" id="quote-form-error-banner">
                    <strong className="text-red-400">Submission Error:</strong> {error}
                  </div>
                )}

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting || !name.trim() || !email.trim()}
                  className="w-full py-3.5 px-6 rounded bg-white hover:bg-[#D4AF37] text-[#0A0A0A] hover:text-[#0A0A0A] border border-[#D4AF37]/30 hover:border-[#D4AF37] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-[0_4px_25px_rgba(212,175,55,0.25)] transition-colors cursor-pointer shadow-lg active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                  id="submit-quote-request-btn"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      COMPUTING FORMULA...
                    </>
                  ) : (
                    <>
                      SUBMIT REQUEST <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="quote-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 md:py-8 space-y-6"
                id="quote-success-state"
              >
                <div className="w-16 h-16 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-[#D4AF37]/10">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-sans text-2xl font-extrabold text-white">
                    Proposal Receipt Logged!
                  </h4>
                  <p className="text-[#BFB9AF] text-sm max-w-md mx-auto">
                    Excellent choice, <strong>{name}</strong>! We have received your parameters and will compile our digital authority roadmap for you within 12 hours.
                  </p>
                </div>

                {/* Estimate summary layout */}
                <div className="bg-white/[0.02] border border-[#D4AF37]/15 rounded-lg p-5 max-w-md mx-auto text-left text-xs font-sans space-y-3">
                  <div className="font-bold text-white text-center border-b border-[#D4AF37]/10 pb-2 flex items-center justify-center gap-1.5 font-mono">
                    <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
                    INQUIRY TICKET OVERVIEW
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#BFB9AF]">Client Name:</span>
                    <span className="font-semibold text-white">{name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#BFB9AF]">Selected Channels:</span>
                    <span className="font-semibold text-white">
                      {selectedServices.length > 0 
                        ? selectedServices.map(id => SERVICES.find(s => s.id === id)?.title).join(', ')
                        : 'General Inquiry'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#BFB9AF]">Scope Tier:</span>
                    <span className="font-semibold text-[#D4AF37]">{getBudgetLabel(budget)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#BFB9AF]">Contact Response:</span>
                    <span className="font-semibold text-white">{email}</span>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <p className="text-[11px] text-[#BFB9AF] uppercase font-mono tracking-widest">
                    OR REACH US DIRECTLY AT
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold">
                    <a href={`tel:${AGENCY_DETAILS.phone1}`} className="flex items-center gap-1.5 text-[#D4AF37] hover:text-[#F5D76E] hover:underline">
                      <Phone className="w-4 h-4" />
                      {AGENCY_DETAILS.phone1}
                    </a>
                    <a href={`mailto:${AGENCY_DETAILS.email}`} className="flex items-center gap-1.5 text-[#D4AF37] hover:text-[#F5D76E] hover:underline">
                      <Send className="w-4 h-4" />
                      {AGENCY_DETAILS.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded bg-white hover:bg-[#D4AF37] text-[#0A0A0A] border border-[#D4AF37]/25 hover:border-[#D4AF37] text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer"
                  id="quote-success-close-btn"
                >
                  Return to Site
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
