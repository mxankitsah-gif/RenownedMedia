/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Play, CheckCircle, Calculator, ChevronRight, Sparkles, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data';
import { ServiceItem } from '../types';

interface ServicesViewProps {
  onSelectServiceForQuote: (serviceId: string) => void;
}

export default function ServicesView({ onSelectServiceForQuote }: ServicesViewProps) {
  const [activeExpandedId, setActiveExpandedId] = useState<string | null>(null);

  // Calculator interactive state
  const [calcChannels, setCalcChannels] = useState<string[]>(['video-editing']);
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

  // Calculate recommendation metrics
  const calculatedHours = (calcChannels.length * 15 * calcScale * (calcTier === 'high-velocity' ? 1.4 : 1.0)).toFixed(0);
  const calculatedPriceEstimate = (calcChannels.length * 450 * calcScale * (calcTier === 'high-velocity' ? 1.3 : 1.0)).toFixed(0);

  return (
    <div className="py-12 space-y-20 max-w-7xl mx-auto px-6">
      {/* Intro Header */}
      <section className="text-center max-w-2xl mx-auto space-y-4">
        <span className="font-mono text-xs font-bold text-primary bg-primary/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          Our Capabilities
        </span>
        <h2 className="font-sans text-4xl font-extrabold text-on-surface tracking-tight">
          Services That Build Direct Leverage
        </h2>
        <p className="font-sans text-body-lg text-on-surface-variant leading-relaxed">
          We do not deliver superficial vanity stats. Our systems are engineered to capture consumer focus, secure high-recall memory slots, and translate search visibility into revenue assets.
        </p>
      </section>

      {/* Structured Services Grid / Accordions */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="font-sans font-extrabold text-xl text-on-surface mb-2 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Interactive Capabilities Playbook
          </h3>
          <p className="font-sans text-xs text-on-surface-variant max-w-md leading-relaxed mb-6">
            Click on any discipline to review core deliverables, standard turnaround parameters, and initiate targeted operational pipelines.
          </p>

          <div className="space-y-3.5" id="services-playbook">
            {SERVICES.map((srv) => {
              const isExpanded = activeExpandedId === srv.id;
              const isSeo = srv.id === 'seo-strategy';
              return (
                <motion.div
                  key={srv.id}
                  whileHover={isSeo ? {
                    scale: 1.015,
                    boxShadow: '0 12px 30px -10px rgba(212, 175, 55, 0.25)',
                    borderColor: 'var(--color-primary)'
                  } : undefined}
                  whileTap={isSeo ? { scale: 0.995 } : undefined}
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                  className={`border rounded-xl transition-all overflow-hidden ${
                    isExpanded 
                      ? 'border-primary bg-primary/[0.02] ring-1 ring-primary/20' 
                      : 'border-outline-variant/40 hover:border-primary/50 bg-surface-container'
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
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                        isExpanded ? 'bg-primary text-white scale-110' : 'bg-surface-container text-primary'
                      }`}>
                        <span 
                          className="material-symbols-outlined text-xl" 
                          data-icon={srv.iconName}
                          style={isSeo ? { color: '#ffd100' } : undefined}
                        >
                          {srv.iconName}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-base text-on-surface leading-tight">
                          {srv.title}
                        </h4>
                        <p className="text-xs text-on-surface-variant mt-0.5 line-clamp-1 max-w-sm">
                          {srv.description}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className={`w-5 h-5 text-on-surface-variant transition-transform duration-300 ${isExpanded ? 'rotate-90 text-primary' : ''}`} />
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
                        <div className="px-5 pb-5 pt-1 border-t border-outline-variant/10 space-y-4 text-xs font-sans">
                          {/* Deliverables lists */}
                          <div className="space-y-2">
                            <span className="font-mono text-[9px] text-primary font-bold tracking-wider uppercase block">
                              What you get (Core Deliverables)
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {srv.deliverables.map((deliv, dIdx) => (
                                <div key={dIdx} className="flex items-center gap-2 text-on-surface-variant">
                                  <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                                  <span>{deliv}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Logistics metrics */}
                          <div className="flex items-center justify-between pt-2 border-t border-outline-variant/10 text-[11px] font-mono">
                            <div className="text-on-surface-variant">
                              Turnaround target: <strong className="text-on-surface">{srv.duration}</strong>
                            </div>
                            <button
                              onClick={() => onSelectServiceForQuote(srv.id)}
                              className="text-primary hover:text-primary-container font-extrabold flex items-center gap-1 cursor-pointer"
                              id={`quote-link-${srv.id}`}
                            >
                              Get exact quote
                              <ChevronRight className="w-3.5 h-3.5" />
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
        <div className="bg-surface-container border border-outline-variant/30 rounded-xl p-6 md:p-8 space-y-6 flex flex-col justify-between h-full" id="service-estimator">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="p-2 bg-primary/10 text-primary rounded">
                <Calculator className="w-5 h-5 font-bold" />
              </span>
              <div>
                <h4 className="font-sans font-bold text-lg text-on-surface">Campaign Budget Estimator</h4>
                <p className="text-xs text-on-surface-variant">Blueprint customized deliverables to map raw project costs.</p>
              </div>
            </div>

            <hr className="border-outline-variant/20" />

            {/* Config Step 1: Channels */}
            <div className="space-y-2">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">
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
                          ? 'bg-primary text-on-primary shadow shadow-primary/20'
                          : 'bg-surface-container-high text-on-surface-variant border border-outline-variant/30 hover:border-outline'
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
              <div className="flex justify-between items-center text-[10px] font-bold uppercase text-on-surface-variant">
                <span>2. Deliverables Volume scale ({calcScale}x)</span>
                <span className="text-primary font-mono">{calcScale * 2} assets / mo</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={calcScale}
                onChange={(e) => setCalcScale(Number(e.target.value))}
                className="w-full accent-primary bg-surface-container-high h-2 rounded-lg cursor-pointer"
                id="calc-assets-range"
              />
              <div className="flex justify-between text-[9px] font-mono text-on-surface-variant">
                <span>Micro Campaign (2 assets)</span>
                <span>Dominion Level (20 assets)</span>
              </div>
            </div>

            {/* Config Step 3: Intensity Tier */}
            <div className="space-y-2">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-1">
                3. Campaign Velocity Pace
                <HelpCircle className="w-3 h-3 text-outline" title="Velocity of iterations, feedback cycles, and campaign speed." />
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setCalcTier('standard')}
                  className={`p-3 rounded-lg border text-left cursor-pointer transition-all ${
                    calcTier === 'standard'
                      ? 'border-primary bg-primary/5 text-primary font-bold'
                      : 'border-outline-variant/30 bg-surface-container hover:bg-surface-container-low text-on-surface-variant'
                  }`}
                  id="calc-tier-standard"
                >
                  <span className="font-sans text-xs block font-extrabold">Standard Retainer</span>
                  <span className="text-[9px] leading-tight block text-on-surface-variant mt-0.5">Continuous pace with steady monthly output adjustments.</span>
                </button>

                <button
                  type="button"
                  onClick={() => setCalcTier('high-velocity')}
                  className={`p-3 rounded-lg border text-left cursor-pointer transition-all ${
                    calcTier === 'high-velocity'
                      ? 'border-tertiary bg-tertiary/5 text-tertiary font-bold'
                      : 'border-outline-variant/30 bg-surface-container hover:bg-surface-container-low text-on-surface-variant'
                  }`}
                  id="calc-tier-velocity"
                >
                  <span className="font-sans text-xs block font-extrabold">High Velocity Rush</span>
                  <span className="text-[9px] leading-tight block text-on-surface-variant mt-0.5">Expedited timelines, prioritized focus slots, and maximum execution push.</span>
                </button>
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="bg-surface-container-low rounded-lg p-5 border border-outline-variant/30 shadow-sm space-y-4 mt-6">
            <span className="font-mono text-[9px] text-on-surface-variant uppercase tracking-widest font-bold block text-center">
              ESTIMATED PROJECT ALLOCATION
            </span>
            <div className="grid grid-cols-2 gap-4 text-center divide-x divide-outline-variant/20">
              <div>
                <span className="text-xl font-extrabold text-on-surface tracking-tight font-mono">{calculatedHours} hrs</span>
                <p className="text-[9px] font-sans text-on-surface-variant uppercase block mt-1">Operational Hours</p>
              </div>
              <div>
                <span className="text-xl font-extrabold text-primary tracking-tight font-mono">${calculatedPriceEstimate}</span>
                <p className="text-[10px] font-sans text-on-surface-variant uppercase block mt-1">Est. Retainer / mo</p>
              </div>
            </div>
            
            <p className="text-[10px] text-justify text-on-surface-variant leading-relaxed font-sans bg-surface-container-low p-2.5 rounded border border-outline-variant/20">
              *Disclaimer: This calculator yields estimations of cost based on average agency work scales. Submit a formal query to get certified campaign pricing models.
            </p>

            <button
              onClick={() => onSelectServiceForQuote(calcChannels[0] || '')}
              className="w-full py-2.5 bg-primary text-on-primary font-mono text-[11px] font-semibold uppercase tracking-wider rounded flex items-center justify-center gap-1.5 hover:bg-primary/95 transition-all shadow-md cursor-pointer duration-200"
              id="calc-submit-quote-btn"
            >
              Order This Custom Campaign Blueprint <Play className="w-3 h-3 fill-on-primary text-on-primary" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
