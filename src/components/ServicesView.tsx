/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Play, CheckCircle, Calculator, ChevronRight, Sparkles, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data';
import { ServiceItem } from '../types';
import ServiceIcon from './ServiceIcon';

interface ServicesViewProps {
  onSelectServiceForQuote: (serviceId: string) => void;
}

export default function ServicesView({ onSelectServiceForQuote }: ServicesViewProps) {
  const [activeExpandedId, setActiveExpandedId] = useState<string | null>(null);

  // Calculator interactive state
  const [calcChannels, setCalcChannels] = useState<string[]>(['digital-marketing']);
  const [calcTier, setCalcTier] = useState<'standard' | 'high-velocity'>('standard');
  const [calcScale, setCalcScale] = useState<number>(3); // 1 to 10 scale of content size

  const handleCalcToggleChannel = (id: string) => {
    if (calcChannels.includes(id)) {
      if (calcChannels.length > 1) {
        setCalcChannels(calcChannels.filter((c) => c !== id));
      }
    } else {
      setCalcChannels([...calcChannels, id]);
    }
  };

  // Calculate recommendation metrics in INR
  // Starter Projects: ₹5,000 - ₹15,000
  // Medium Projects: ₹15,000 - ₹25,000
  // Advanced Projects: ₹25,000 - ₹50,000
  // Maximum budget should not exceed ₹50,000/month.
  const calculatedHours = (calcChannels.length * 12 * calcScale * (calcTier === 'high-velocity' ? 1.3 : 1.0)).toFixed(0);
  
  // Custom localized calculation targeting a max of ₹50,000
  const baseEstimate = 3500 + (calcChannels.length * 1100 * calcScale * (calcTier === 'high-velocity' ? 1.25 : 1.0));
  const calculatedPriceEstimate = Math.min(Math.max(Math.round(baseEstimate / 500) * 500, 5000), 50000);

  let projectAllocationName = 'Starter Projects';
  let projectAllocationRange = '₹5,000 - ₹15,000';
  if (calculatedPriceEstimate > 25000) {
    projectAllocationName = 'Advanced Projects';
    projectAllocationRange = '₹25,000 - ₹50,000';
  } else if (calculatedPriceEstimate > 15000) {
    projectAllocationName = 'Medium Projects';
    projectAllocationRange = '₹15,000 - ₹25,000';
  }

  const formattedPriceEstimate = `₹${calculatedPriceEstimate.toLocaleString('en-IN')}`;

  return (
    <div className="py-12 space-y-20 max-w-7xl mx-auto px-6">
      {/* Intro Header */}
      <section className="text-center max-w-2xl mx-auto space-y-4">
        <span className="font-mono text-xs font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          Our Capabilities
        </span>
        <h2 className="font-sans text-4xl font-extrabold text-white tracking-tight">
          Services That Build Direct <span className="text-[#D4AF37]">Leverage</span>
        </h2>
        <p className="font-sans text-body-lg text-[#BFB9AF] leading-relaxed">
          We do not deliver superficial vanity stats. Our systems are engineered to help Indian creators, startups, local businesses, coaches, consultants, and SMEs capture consumer focus, secure high-recall mindshare, and transform digital presence into recurring growth assets.
        </p>
      </section>

      {/* Structured Services Grid / Accordions */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="font-sans font-extrabold text-xl text-white mb-2 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#D4AF37]" />
            Interactive Capabilities Playbook
          </h3>
          <p className="font-sans text-xs text-[#BFB9AF] max-w-md leading-relaxed mb-6">
            Click on any discipline to review core deliverables, standard turnaround parameters, and initiate targeted operational pipelines.
          </p>

          <div className="space-y-3.5" id="services-playbook">
            {SERVICES.map((srv) => {
              const isExpanded = activeExpandedId === srv.id;
              const isFeatured = srv.id === 'digital-marketing';
              return (
                <motion.div
                  key={srv.id}
                  whileHover={{
                    scale: 1.008,
                    borderColor: isFeatured ? '#D4AF37' : 'rgba(212, 175, 55, 0.4)',
                    boxShadow: isFeatured ? '0 8px 25px -8px rgba(212, 175, 55, 0.2)' : '0 4px 15px -8px rgba(212, 175, 55, 0.1)'
                  }}
                  whileTap={{ scale: 0.998 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                  className={`border rounded-xl transition-all overflow-hidden ${
                    isExpanded 
                      ? 'border-[#D4AF37] bg-white/[0.03] ring-1 ring-[#D4AF37]/20 shadow-[0_0_20px_rgba(212,175,55,0.08)]' 
                      : 'border-[#D4AF37]/15 bg-white/[0.01]'
                  }`}
                  id={`service-block-${srv.id}`}
                >
                  {/* Handle trigger */}
                  <button
                    onClick={() => setActiveExpandedId(isExpanded ? null : srv.id)}
                    className="w-full p-5 text-left flex items-center justify-between cursor-pointer focus:outline-none"
                    id={`service-trigger-${srv.id}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all border ${
                        isExpanded 
                          ? 'bg-[#D4AF37] text-[#0A0A0A] border-[#D4AF37] scale-110 shadow-[0_0_15px_rgba(212,175,55,0.3)]' 
                          : 'bg-white/[0.04] text-[#D4AF37] border-[#D4AF37]/25'
                      }`}>
                        <ServiceIcon id={srv.id} className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-base text-white leading-tight">
                          {srv.title}
                        </h4>
                        <p className="text-xs text-[#BFB9AF] mt-0.5 line-clamp-1 max-w-sm">
                          {srv.description}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className={`w-5 h-5 text-on-surface-variant transition-transform duration-300 ${isExpanded ? 'rotate-90 text-[#D4AF37]' : ''}`} />
                  </button>

                  {/* Expanded Content with AnimatePresence */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-5 pb-5 pt-1 border-t border-[#D4AF37]/10 space-y-4 text-xs font-sans">
                          {/* Deliverables lists */}
                          <div className="space-y-2">
                            <span className="font-mono text-[9px] text-[#D4AF37] font-bold tracking-wider uppercase block">
                              Key Deliverables & Sub-Services
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {srv.deliverables.map((deliv, dIdx) => (
                                <div key={dIdx} className="flex items-center gap-2 text-[#BFB9AF]">
                                  <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                                  <span>{deliv}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Logistics metrics */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-3 border-t border-[#D4AF37]/10 text-[11px] font-mono gap-3">
                            <div className="text-[#BFB9AF]">
                              Estimated Turnaround: <strong className="text-white font-bold">{srv.duration}</strong>
                            </div>
                            <button
                              onClick={() => onSelectServiceForQuote(srv.id)}
                              className="px-4 py-2 bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black border border-[#D4AF37]/30 hover:border-[#D4AF37] rounded font-mono text-[10px] font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer inline-flex items-center gap-1.5 self-start sm:self-auto"
                              id={`quote-link-${srv.id}`}
                            >
                              Request Quote
                              <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Calculator Blueprint on the right */}
        <div className="bg-white/[0.02] backdrop-blur-md border border-[#D4AF37]/15 rounded-xl p-6 md:p-8 space-y-6 flex flex-col justify-between h-full hover:shadow-[0_0_20px_rgba(212,175,55,0.06)] transition-all duration-300" id="service-estimator">
          <div className="space-y-4">
            <div className="flex items-center gap-2 block">
              <span className="p-2 bg-[#D4AF37]/10 text-[#D4AF37] rounded inline-block mr-2">
                <Calculator className="w-5 h-5 font-bold" />
              </span>
              <div>
                <h4 className="font-sans font-bold text-lg text-white">Campaign Budget Estimator</h4>
                <p className="text-xs text-[#BFB9AF]">Blueprint customized deliverables to map raw project costs.</p>
              </div>
            </div>

            <hr className="border-[#D4AF37]/10 my-2" />

            {/* Config Step 1: Channels */}
            <div className="space-y-2">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#BFB9AF]">
                1. Target Channels
              </label>
              <div className="flex flex-wrap gap-1.5">
                {SERVICES.map((srv) => {
                  const check = calcChannels.includes(srv.id);
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => handleCalcToggleChannel(srv.id)}
                      className={`px-3 py-1.5 rounded text-[11px] font-sans font-medium transition-all cursor-pointer ${
                        check
                          ? 'bg-[#D4AF37] text-[#0A0A0A] shadow shadow-[#D4AF37]/20 border border-[#D4AF37]'
                          : 'bg-white/[0.04] text-[#BFB9AF] border border-[#D4AF37]/15 hover:border-[#D4AF37]/45'
                      }`}
                      id={`calc-channel-${srv.id}`}
                    >
                      {srv.title}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Config Step 2: Content Scale */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-[10px] font-bold uppercase text-[#BFB9AF]">
                <span>2. Deliverables Volume scale ({calcScale}x)</span>
                <span className="text-[#D4AF37] font-mono">{calcScale * 2} assets / mo</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={calcScale}
                onChange={(e) => setCalcScale(Number(e.target.value))}
                className="w-full h-2 rounded-lg cursor-pointer bg-white/[0.05] accent-[#D4AF37] border border-white/[0.05] hover:accent-[#F5D76E]"
                id="calc-assets-range"
              />
              <div className="flex justify-between text-[9px] font-mono text-[#BFB9AF]">
                <span>Micro Campaign (2 assets)</span>
                <span>Dominion Level (20 assets)</span>
              </div>
            </div>

            {/* Config Step 3: Intensity Tier */}
            <div className="space-y-2">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#BFB9AF] flex items-center gap-1">
                3. Campaign Velocity Pace
                <HelpCircle className="w-3 h-3 text-[#BFB9AF]/40" title="Velocity of iterations, feedback cycles, and campaign speed." />
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setCalcTier('standard')}
                  className={`p-3 rounded-lg border text-left cursor-pointer transition-all ${
                    calcTier === 'standard'
                      ? 'border-[#D4AF37] bg-[#D4AF37]/5 text-[#D4AF37] font-bold'
                      : 'border-[#D4AF37]/15 bg-white/[0.01] hover:bg-white/[0.03] text-[#BFB9AF]'
                  }`}
                  id="calc-tier-standard"
                >
                  <span className="font-sans text-xs block font-extrabold">Standard Retainer</span>
                  <span className="text-[9px] leading-tight block text-[#BFB9AF] mt-0.5">Continuous pace with steady monthly output adjustments.</span>
                </button>

                <button
                  type="button"
                  onClick={() => setCalcTier('high-velocity')}
                  className={`p-3 rounded-lg border text-left cursor-pointer transition-all ${
                    calcTier === 'high-velocity'
                      ? 'border-[#F5D76E] bg-[#F5D76E]/5 text-[#F5D76E] font-bold shadow-[0_0_15px_rgba(245,215,110,0.15)]'
                      : 'border-[#D4AF37]/15 bg-[#0A0A0A] hover:bg-white/[0.03] text-[#BFB9AF]'
                  }`}
                  id="calc-tier-velocity"
                >
                  <span className="font-sans text-xs block font-extrabold">High Velocity Rush</span>
                  <span className="text-[9px] leading-tight block text-[#BFB9AF] mt-0.5">Expedited timelines, prioritized focus slots, and maximum execution push.</span>
                </button>
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="bg-[#0A0A0A]/60 rounded-lg p-5 border border-[#D4AF37]/15 shadow-sm space-y-4 mt-6">
            <div className="text-center space-y-1 pb-1 border-b border-[#D4AF37]/10">
              <span className="font-mono text-[9px] text-[#BFB9AF] uppercase tracking-widest font-bold block">
                ESTIMATED PROJECT ALLOCATION
              </span>
              <span className="font-sans text-xs text-[#D4AF37] font-bold block uppercase tracking-wide">
                {projectAllocationName} List ({projectAllocationRange})
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center divide-x divide-[#D4AF37]/15">
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight font-mono">{calculatedHours} hrs</span>
                <p className="text-[9px] font-sans text-[#BFB9AF] uppercase block mt-1">Operational Hours</p>
              </div>
              <div>
                <span className="text-xl font-extrabold text-[#D4AF37] tracking-tight font-mono">{formattedPriceEstimate}</span>
                <p className="text-[10px] font-sans text-[#BFB9AF] uppercase block mt-1">Est. Retainer / mo</p>
              </div>
            </div>
            
            <p className="text-[10px] text-justify text-[#BFB9AF] leading-relaxed font-sans bg-white/[0.01] p-2.5 rounded border border-[#D4AF37]/10">
              *Disclaimer: This calculator yields estimations of cost based on average agency work scales. Submit a formal query to get certified campaign pricing models.
            </p>

            <button
               onClick={() => onSelectServiceForQuote(calcChannels[0] || '')}
               className="w-full py-3.5 bg-white hover:bg-[#D4AF37] text-[#0A0A0A] hover:text-[#0A0A0A] border border-[#D4AF37]/30 hover:border-[#D4AF37] font-mono text-[11px] font-bold uppercase tracking-wider rounded flex items-center justify-center gap-1.5 transition-all shadow-[0_4px_20px_rgba(212,175,55,0.15)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.35)] cursor-pointer"
               id="calc-submit-quote-btn"
            >
              Order This Custom Campaign Blueprint <Play className="w-3 h-3 fill-current text-current" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
