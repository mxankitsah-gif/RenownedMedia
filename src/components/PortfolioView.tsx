/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data';
import { ProjectItem } from '../types';

interface PortfolioViewProps {
  onSelectProject: (project: ProjectItem) => void;
}

export default function PortfolioView({ onSelectProject }: PortfolioViewProps) {
  return (
    <div className="py-16 max-w-7xl mx-auto px-6">
      {/* Intro Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <span className="font-mono text-xs font-bold text-[#1d4ed8] bg-[#1d4ed8]/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider block w-fit mx-auto">
          Our Showcase
        </span>
        <h1 className="font-sans text-4xl font-extrabold text-slate-900 tracking-tight">
          Client Success & <span className="text-[#1d4ed8]">Case Studies</span>
        </h1>
        <p className="font-sans text-sm text-slate-600 leading-relaxed">
          Explore our tactical organic achievements, cinematic campaigns, and conversion-engineered digital properties.
        </p>
      </div>

      {/* Projects Grid with Smooth Animations */}
      <motion.section 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {PROJECTS.map((proj) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -6 }}
              key={proj.id}
              onClick={() => onSelectProject(proj)}
              className="group relative rounded-xl overflow-hidden border border-slate-200/80 hover:border-blue-500 hover:shadow-[0_12px_25px_rgba(29,78,216,0.06)] transition-all cursor-pointer bg-white flex flex-col justify-between"
              id={`portfolio-card-${proj.id}`}
              style={{ height: '520px' }}
            >
              {/* Image Section with Overlay */}
              <div className="relative h-48 overflow-hidden shrink-0">
                <img
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={proj.img}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#1d4ed8] border border-blue-100 text-[9px] font-mono font-bold uppercase py-1 px-3 rounded-full shadow-md">
                  {proj.category}
                </span>
              </div>

              {/* Content Space */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2 text-left">
                  {/* Industry */}
                  <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest block">
                    {proj.clientIndustry || 'B2B Enterprise'}
                  </span>
                  
                  {/* Title */}
                  <h3 className="font-sans text-base font-extrabold text-slate-900 leading-snug tracking-tight group-hover:text-[#1d4ed8] transition-colors duration-200 line-clamp-2">
                    {proj.title}
                  </h3>

                  {/* Brief description */}
                  <p className="font-sans text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Services Delivered */}
                  {proj.servicesDelivered && proj.servicesDelivered.length > 0 && (
                    <div className="space-y-1 pt-1">
                      <span className="text-[9px] font-mono text-[#1d4ed8]/70 uppercase tracking-wider block">Services Delivered:</span>
                      <div className="flex flex-wrap gap-1 leading-none">
                        {proj.servicesDelivered.slice(0, 3).map((sd, sIdx) => (
                          <span key={sIdx} className="bg-blue-50/50 border border-blue-100/30 text-slate-600 text-[9px] px-1.5 py-0.5 rounded">
                            {sd}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Performance metric and CTA tag */}
                <div className="space-y-3 pt-3 border-t border-slate-100 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono text-slate-500 uppercase">Key Results</span>
                    <span className="bg-red-50 text-[#dc2626] border border-red-100 font-mono text-[10px] font-extrabold px-2 py-0.5 rounded">
                      {proj.metrics}
                    </span>
                  </div>

                  <div 
                    className="w-full text-center bg-[#1d4ed8] group-hover:bg-[#dc2626] text-white py-2.5 rounded font-mono text-[10px] font-bold uppercase tracking-widest transition-all duration-300 inline-flex items-center justify-center gap-1.5"
                  >
                    View Case Study <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.section>
    </div>
  );
}
