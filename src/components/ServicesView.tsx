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
        <span className="font-mono text-xs font-bold text-[#1d4ed8] bg-[#1d4ed8]/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider block w-fit mx-auto">
          Our Capabilities
        </span>
        <h1 className="font-sans text-4xl font-extrabold text-slate-900 tracking-tight">
          Services That Build Direct <span className="text-[#1d4ed8]">Leverage</span>
        </h1>
        <p className="font-sans text-body-lg text-slate-600 leading-relaxed">
          We do not deliver superficial vanity stats. Our systems are engineered to help Indian creators, startups, local businesses, coaches, consultants, and SMEs capture consumer focus, secure high-recall mindshare, and transform digital presence into recurring growth assets.
        </p>
      </section>

      {/* Structured Services Grid / Accordions */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="font-sans font-extrabold text-xl text-slate-900 mb-2 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#1d4ed8]" />
            Interactive Capabilities Playbook
          </h3>
          <p className="font-sans text-xs text-slate-600 max-w-md leading-relaxed mb-6">
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
                    borderColor: '#1d4ed8',
                    boxShadow: '0 8px 25px -8px rgba(29, 78, 216, 0.08)'
                  }}
                  whileTap={{ scale: 0.998 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                  className={`border rounded-xl transition-all overflow-hidden ${
                    isExpanded 
                      ? 'border-blue-500 bg-white ring-1 ring-blue-500/20 shadow-[0_10px_25px_rgba(29,78,216,0.06)]' 
                      : 'border-slate-200 bg-white'
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
                          ? 'bg-[#1d4ed8] text-white border-[#1d4ed8] scale-110 shadow-[0_4px_15px_rgba(29,78,216,0.2)]' 
                          : 'bg-blue-50 text-[#1d4ed8] border-blue-100'
                      }`}>
                        <ServiceIcon id={srv.id} className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-base text-slate-900 leading-tight">
                          {srv.title}
                        </h4>
                        <p className="text-xs text-slate-600 mt-0.5 line-clamp-1 max-w-sm">
                          {srv.description}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-90 text-[#1d4ed8]' : ''}`} />
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
                        <div className="px-5 pb-5 pt-1 border-t border-slate-100 space-y-4 text-xs font-sans">
                          {/* Deliverables lists */}
                          <div className="space-y-2">
                            <span className="font-mono text-[9px] text-[#1d4ed8] font-bold tracking-wider uppercase block">
                              Key Deliverables & Sub-Services
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {srv.deliverables.map((deliv, dIdx) => (
                                <div key={dIdx} className="flex items-center gap-2 text-slate-600">
                                  <CheckCircle className="w-3.5 h-3.5 text-[#1d4ed8] shrink-0" />
                                  <span>{deliv}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Logistics metrics */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-3 border-t border-slate-100 text-[11px] font-mono gap-3">
                            <div className="text-slate-600">
                              Estimated Turnaround: <strong className="text-slate-900 font-bold">{srv.duration}</strong>
                            </div>
                            <button
                              onClick={() => onSelectServiceForQuote(srv.id)}
                              className="px-4 py-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white border-none rounded font-mono text-[10px] font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer inline-flex items-center gap-1.5 self-start sm:self-auto shadow-[0_4px_12px_rgba(220,38,38,0.2)]"
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
        <div className="bg-white border border-slate-200/80 rounded-xl p-6 md:p-8 space-y-6 flex flex-col justify-between h-full hover:shadow-[0_12px_30px_rgba(29,78,216,0.04)] transition-all duration-300 mx-auto w-full" id="service-estimator">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="p-2 bg-blue-50 text-[#1d4ed8] border border-blue-100 rounded inline-block mr-2 shrink-0">
                <Calculator className="w-5 h-5 font-bold" />
              </span>
              <div>
                <h4 className="font-sans font-bold text-lg text-slate-900 leading-tight">Campaign Budget Estimator</h4>
                <p className="text-xs text-slate-600">Blueprint customized deliverables to map raw project costs.</p>
              </div>
            </div>

            <hr className="border-slate-100 my-2" />

            {/* Config Step 1: Channels */}
            <div className="space-y-2">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">
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
                          ? 'bg-[#1d4ed8] text-white shadow shadow-blue-500/20 border border-[#1d4ed8]'
                          : 'bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300'
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
              <div className="flex justify-between items-center text-[10px] font-bold uppercase text-slate-500">
                <span>2. Deliverables Volume scale ({calcScale}x)</span>
                <span className="text-[#1d4ed8] font-mono">{calcScale * 2} assets / mo</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={calcScale}
                onChange={(e) => setCalcScale(Number(e.target.value))}
                className="w-full h-2 rounded-lg cursor-pointer bg-slate-100 accent-[#1d4ed8] border border-slate-200 hover:accent-[#1e40af]"
                id="calc-assets-range"
              />
              <div className="flex justify-between text-[9px] font-mono text-slate-400">
                <span>Micro Campaign (2 assets)</span>
                <span>Dominion Level (20 assets)</span>
              </div>
            </div>

            {/* Config Step 3: Intensity Tier */}
            <div className="space-y-2">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                3. Campaign Velocity Pace
                <HelpCircle className="w-3 h-3 text-slate-400" title="Velocity of iterations, feedback cycles, and campaign speed." />
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setCalcTier('standard')}
                  className={`p-3 rounded-lg border text-left cursor-pointer transition-all ${
                    calcTier === 'standard'
                      ? 'border-[#1d4ed8] bg-blue-500/5 text-[#1d4ed8] font-bold'
                      : 'border-slate-200 bg-white hover:bg-slate-50/50 text-slate-700'
                  }`}
                  id="calc-tier-standard"
                >
                  <span className="font-sans text-xs block font-extrabold">Standard Retainer</span>
                  <span className="text-[9px] leading-tight block text-slate-600 mt-0.5">Continuous pace with steady monthly output adjustments.</span>
                </button>

                <button
                  type="button"
                  onClick={() => setCalcTier('high-velocity')}
                  className={`p-3 rounded-lg border text-left cursor-pointer transition-all ${
                    calcTier === 'high-velocity'
                      ? 'border-red-500 bg-red-500/5 text-[#dc2626] font-bold shadow-[0_4px_15px_rgba(220,38,38,0.1)]'
                      : 'border-slate-200 bg-white hover:bg-slate-50/50 text-slate-700'
                  }`}
                  id="calc-tier-velocity"
                >
                  <span className="font-sans text-xs block font-extrabold">High Velocity Rush</span>
                  <span className="text-[9px] leading-tight block text-slate-700 mt-0.5">Expedited timelines, prioritized focus slots, and maximum execution push.</span>
                </button>
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="bg-slate-50/90 rounded-lg p-5 border border-slate-200/80 shadow-sm space-y-4 mt-6">
            <div className="text-center space-y-1 pb-1 border-b border-slate-200">
              <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest font-bold block">
                ESTIMATED PROJECT ALLOCATION
              </span>
              <span className="font-sans text-xs text-[#1d4ed8] font-bold block uppercase tracking-wide">
                {projectAllocationName} List ({projectAllocationRange})
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center divide-x divide-slate-250">
              <div>
                <span className="text-xl font-extrabold text-slate-950 tracking-tight font-mono">{calculatedHours} hrs</span>
                <p className="text-[9px] font-sans text-slate-500 uppercase block mt-1">Operational Hours</p>
              </div>
              <div>
                <span className="text-xl font-extrabold text-[#dc2626] tracking-tight font-mono">{formattedPriceEstimate}</span>
                <p className="text-[10px] font-sans text-slate-500 uppercase block mt-1">Est. Retainer / mo</p>
              </div>
            </div>
            
            <p className="text-[10px] text-justify text-slate-500 leading-relaxed font-sans bg-white p-2.5 rounded border border-slate-200/60">
              *Disclaimer: This calculator yields estimations of cost based on average agency work scales. Submit a formal query to get certified campaign pricing models.
            </p>

            <button
               onClick={() => onSelectServiceForQuote(calcChannels[0] || '')}
               className="w-full py-3.5 bg-[#dc2626] hover:bg-[#b91c1c] text-white border-none font-mono text-[11px] font-bold uppercase tracking-wider rounded flex items-center justify-center gap-1.5 transition-all shadow-[0_4px_25px_rgba(220,38,38,0.25)] hover:shadow-[0_8px_30px_rgba(220,38,38,0.4)] cursor-pointer"
               id="calc-submit-quote-btn"
            >
              Order This Custom Campaign Blueprint <Play className="w-3 h-3 fill-current text-white" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
