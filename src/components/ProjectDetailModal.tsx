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
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm cursor-zoom-out"
        id="project-modal-backdrop"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
        className="relative bg-white text-slate-800 rounded-xl overflow-hidden shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col z-10 border border-slate-200"
        id={`project-modal-${project.id}`}
      >
        {/* Sticky Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-slate-150 bg-slate-50 sticky top-0 z-20">
          <div>
            <span className="font-mono text-xs text-[#1d4ed8] font-semibold tracking-wider uppercase">
              {project.category}
            </span>
            <h3 className="font-sans text-xl font-extrabold text-slate-900 leading-tight mt-0.5">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-200/60 transition-colors text-slate-500 hover:text-slate-900 cursor-pointer"
            id="close-project-modal-btn"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto overflow-x-hidden flex-1">
          {/* Cover Image */}
          <div className="relative aspect-video w-full bg-slate-100 overflow-hidden">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 flex flex-wrap gap-4 text-white">
              <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded text-xs font-mono border border-white/10">
                <User className="w-3.5 h-3.5 text-[#1d4ed8]" />
                <span>Client: <strong>{project.client}</strong></span>
              </div>
              <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded text-xs font-mono border border-white/10">
                <Calendar className="w-3.5 h-3.5 text-[#1d4ed8]" />
                <span>Year: <strong>{project.year}</strong></span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#dc2626] text-white backdrop-blur-md px-3 py-1.5 rounded text-xs font-mono font-bold shadow-lg border-none">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Result: {project.metrics}</span>
              </div>
            </div>
          </div>

          {/* Details Content */}
          <div className="p-6 md:p-8 space-y-6 text-left">
            {/* Overview / Brief */}
            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200/80 flex items-start gap-3.5">
              <Info className="w-5 h-5 text-[#1d4ed8] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-sans font-bold text-base text-slate-900 mb-1">Campaign Essence</h4>
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Split Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#1d4ed8]">
                  The Challenge
                </h4>
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-red-500">
                  The Solution
                </h4>
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-150 bg-slate-50 flex justify-end gap-3 sticky bottom-0 z-20">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded bg-[#1d4ed8] hover:bg-blue-700 text-white font-mono text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-[0_4px_12px_rgba(29,78,216,0.15)]"
            id="close-project-modal-bottom-btn"
          >
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}
