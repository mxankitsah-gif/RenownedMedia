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
              className="group relative rounded-xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/80 hover:shadow-[0_12px_35px_rgba(212,175,55,0.12)] transition-all cursor-pointer bg-black/40 flex flex-col justify-between"
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] to-transparent" />
                <span className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30 text-[9px] font-mono font-bold uppercase py-1 px-3 rounded-full shadow-lg">
                  {proj.category}
                </span>
              </div>

              {/* Content Space */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2 text-left">
                  {/* Industry */}
                  <span className="font-mono text-[9px] text-[#BFB9AF]/75 uppercase tracking-widest block">
                    {proj.clientIndustry || 'B2B Enterprise'}
                  </span>
                  
                  {/* Title */}
                  <h3 className="font-sans text-base font-extrabold text-white leading-snug tracking-tight group-hover:text-[#D4AF37] transition-colors duration-200 line-clamp-2">
                    {proj.title}
                  </h3>

                  {/* Brief description */}
                  <p className="font-sans text-xs text-[#BFB9AF] line-clamp-2 leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Services Delivered */}
                  {proj.servicesDelivered && proj.servicesDelivered.length > 0 && (
                    <div className="space-y-1 pt-1">
                      <span className="text-[9px] font-mono text-[#D4AF37]/70 uppercase tracking-wider block">Services Delivered:</span>
                      <div className="flex flex-wrap gap-1 leading-none">
                        {proj.servicesDelivered.slice(0, 3).map((sd, sIdx) => (
                          <span key={sIdx} className="bg-white/[0.03] border border-[#D4AF37]/10 text-[#BFB9AF] text-[9px] px-1.5 py-0.5 rounded">
                            {sd}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Performance metric and CTA tag */}
                <div className="space-y-3 pt-3 border-t border-[#D4AF37]/10 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono text-[#BFB9AF] uppercase">Key Results</span>
                    <span className="bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 font-mono text-[10px] font-extrabold px-2 py-0.5 rounded">
                      {proj.metrics}
                    </span>
                  </div>

                  <div 
                    className="w-full text-center bg-white/[0.02] group-hover:bg-[#D4AF37] text-white group-hover:text-black border border-[#D4AF37]/30 group-hover:border-[#D4AF37] py-2.5 rounded font-mono text-[10px] font-bold uppercase tracking-widest transition-all duration-300 inline-flex items-center justify-center gap-1.5"
                  >
                    View Project <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
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
