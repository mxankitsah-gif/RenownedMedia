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
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  if (!isOpen) return null;

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter((s) => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setIsSubmitting(true);
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setCompany('');
    setBudget('medium');
    setMessage('');
    setSelectedServices([]);
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
        className="fixed inset-0 bg-inverse-surface/85 backdrop-blur-md cursor-zoom-out"
        id="quote-modal-backdrop"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
        className="relative bg-surface-container text-on-surface rounded-xl overflow-hidden shadow-2xl max-w-2xl w-full max-h-[92vh] flex flex-col z-10 border border-outline-variant/30"
        id="quote-request-modal"
      >
        {/* Sticky Header */}
        <div className="flex justify-between items-center px-6 py-4.5 border-b border-outline-variant/20 bg-surface-container-low sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-primary/10 text-primary rounded">
              <FileText className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-sans text-lg font-extrabold text-on-surface leading-tight">
                Request Consultation & Quote
              </h3>
              <p className="text-xs text-on-surface-variant">Let's blueprint your growth formula.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-surface-container-high transition-colors text-on-surface-variant hover:text-on-surface cursor-pointer"
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
                  <label className="block text-xs font-bold uppercase tracking-wider text-primary">
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
                              ? 'border-primary bg-primary/5 text-primary ring-2 ring-primary/20'
                              : 'border-outline-variant/40 hover:border-outline hover:bg-surface-container-low'
                          }`}
                          id={`service-select-${srv.id}`}
                        >
                          <div className="font-bold flex items-center justify-between w-full">
                            <span>{srv.title}</span>
                            <span className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                              selected ? 'bg-primary border-primary text-white scale-110' : 'border-outline-variant'
                            }`}>
                              {selected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                            </span>
                          </div>
                          <span className="text-[10px] text-on-surface-variant group-hover:text-on-surface truncate w-full">
                            {srv.description}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Contact Info */}
                <div className="space-y-4">
                  <label className="block text-xs font-bold uppercase tracking-wider text-primary">
                    2. Primary Details
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="quote-name-input" className="block text-xs font-bold text-on-surface-variant mb-1">
                        Your Name *
                      </label>
                      <input
                        id="quote-name-input"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Joanne Carter"
                        className="w-full px-3 py-2 border border-outline-variant rounded focus:outline-none focus:border-primary text-sm font-sans bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="quote-email-input" className="block text-xs font-bold text-on-surface-variant mb-1">
                        Professional Email *
                      </label>
                      <input
                        id="quote-email-input"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. joanne@company.com"
                        className="w-full px-3 py-2 border border-outline-variant rounded focus:outline-none focus:border-primary text-sm font-sans bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="quote-company-input" className="block text-xs font-bold text-on-surface-variant mb-1">
                        Company Name
                      </label>
                      <input
                        id="quote-company-input"
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Acme Tech Inc"
                        className="w-full px-3 py-2 border border-outline-variant rounded focus:outline-none focus:border-primary text-sm font-sans bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="quote-budget-input" className="block text-xs font-bold text-on-surface-variant mb-1">
                        Estimated Budget Scale
                      </label>
                      <select
                        id="quote-budget-input"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-3 py-2.5 border border-outline-variant rounded focus:outline-none focus:border-primary text-sm font-sans bg-background text-on-surface"
                      >
                        <option value="low" className="bg-background text-on-surface">Growth Phase ($1K - $3K / mo)</option>
                        <option value="medium" className="bg-background text-on-surface">Standard Retainer ($3K - $7K / mo)</option>
                        <option value="premium" className="bg-background text-on-surface">Enterprise Authority ($7K - $15K / mo)</option>
                        <option value="enterprise" className="bg-background text-on-surface">Custom Multi-Channel Campaign</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Step 3: Message / Scope */}
                <div className="space-y-2">
                  <label htmlFor="quote-message-input" className="block text-xs font-bold uppercase tracking-wider text-primary">
                    3. Project Summary & Parameters
                  </label>
                  <textarea
                    id="quote-message-input"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your current targets, hurdles, and desired timelines..."
                    className="w-full px-3 py-2 border border-outline-variant rounded focus:outline-none focus:border-primary text-sm font-sans bg-background"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting || !name.trim() || !email.trim()}
                  className="w-full py-3.5 px-6 rounded bg-primary text-on-primary font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-primary/95 transition-colors cursor-pointer shadow-lg hover:shadow-primary/20 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
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
                <div className="w-16 h-16 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mx-auto shadow-lg shadow-primary-container/20">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-sans text-2xl font-extrabold text-on-surface">
                    Proposal Receipt Logged!
                  </h4>
                  <p className="text-on-surface-variant text-sm max-w-md mx-auto">
                    Excellent choice, <strong>{name}</strong>! We have received your parameters and will compile our digital authority roadmap for you within 12 hours.
                  </p>
                </div>

                {/* Estimate summary layout */}
                <div className="bg-surface-container-low border border-outline-variant/30 rounded-lg p-5 max-w-md mx-auto text-left text-xs font-sans space-y-3">
                  <div className="font-bold text-on-surface text-center border-b border-outline-variant/20 pb-2 flex items-center justify-center gap-1.5">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    INQUIRY TICKET OVERVIEW
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Client Name:</span>
                    <span className="font-semibold text-on-surface">{name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Selected Channels:</span>
                    <span className="font-semibold text-on-surface">
                      {selectedServices.length > 0 
                        ? selectedServices.map(id => SERVICES.find(s => s.id === id)?.title).join(', ')
                        : 'General Inquiry'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Scope Tier:</span>
                    <span className="font-semibold text-primary capitalize">{budget} Scale</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Contact Response:</span>
                    <span className="font-semibold text-on-surface">{email}</span>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <p className="text-[11px] text-on-surface-variant uppercase font-mono tracking-widest">
                    OR REACH US DIRECTLY AT
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold">
                    <a href={`tel:${AGENCY_DETAILS.phone1}`} className="flex items-center gap-1.5 text-primary hover:underline">
                      <Phone className="w-4 h-4" />
                      {AGENCY_DETAILS.phone1}
                    </a>
                    <a href={`mailto:${AGENCY_DETAILS.email}`} className="flex items-center gap-1.5 text-primary hover:underline">
                      <Send className="w-4 h-4" />
                      {AGENCY_DETAILS.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded bg-primary text-on-primary hover:bg-primary/90 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer"
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
