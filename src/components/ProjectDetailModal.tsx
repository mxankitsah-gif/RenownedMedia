/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { X, Calendar, User, TrendingUp, Info } from 'lucide-react';
import { motion } from 'motion/react';
import { ProjectItem } from '../types';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/90 backdrop-blur-md cursor-zoom-out"
        id="project-modal-backdrop"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
        className="relative bg-[#0d0d0d] text-white rounded-xl overflow-hidden shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col z-10 border border-[#D4AF37]/25"
        id={`project-modal-${project.id}`}
      >
        {/* Sticky Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#D4AF37]/15 bg-[#141414] sticky top-0 z-20">
          <div>
            <span className="font-mono text-xs text-[#D4AF37] font-semibold tracking-wider uppercase">
              {project.category}
            </span>
            <h3 className="font-sans text-xl font-extrabold text-white leading-tight mt-0.5">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/[0.05] transition-colors text-[#BFB9AF] hover:text-white cursor-pointer"
            id="close-project-modal-btn"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto overflow-x-hidden flex-1">
          {/* Cover Image */}
          <div className="relative aspect-video w-full bg-[#1c1c1c] overflow-hidden">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 flex flex-wrap gap-4 text-white">
              <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded text-xs font-mono border border-white/10">
                <User className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Client: <strong>{project.client}</strong></span>
              </div>
              <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded text-xs font-mono border border-white/10">
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Year: <strong>{project.year}</strong></span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#D4AF37] text-[#0A0A0A] backdrop-blur-md px-3 py-1.5 rounded text-xs font-mono font-bold shadow-[0_4px_15px_rgba(212,175,55,0.4)] border border-[#D4AF37]">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Result: {project.metrics}</span>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-6">
            {/* Overview / Brief */}
            <div className="bg-white/[0.02] p-5 rounded-lg border border-[#D4AF37]/15 flex items-start gap-3.5">
              <Info className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-sans font-bold text-base text-white mb-1">Campaign Essence</h4>
                <p className="font-sans text-sm text-[#BFB9AF] leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Split Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#F5D76E]">
                  The Challenge
                </h4>
                <p className="font-sans text-sm text-[#BFB9AF] leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                  The Solution
                </h4>
                <p className="font-sans text-sm text-[#BFB9AF] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#D4AF37]/15 bg-[#141414] flex justify-end gap-3 sticky bottom-0 z-20">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded bg-white hover:bg-[#D4AF37] text-[#0A0A0A] hover:text-[#0A0A0A] border border-[#D4AF37]/25 hover:border-[#D4AF37] font-mono text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-[0_4px_15px_rgba(212,175,55,0.15)]"
            id="close-project-modal-bottom-btn"
          >
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}
