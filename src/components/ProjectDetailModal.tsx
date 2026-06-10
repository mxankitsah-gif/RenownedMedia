/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { X, Target, Sparkles, Building2, Layers, Trophy } from 'lucide-react';
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
        className="fixed inset-0 bg-slate-900/45 backdrop-blur-md cursor-zoom-out"
        id="project-modal-backdrop"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        transition={{ type: 'spring', damping: 26, stiffness: 320 }}
        className="relative bg-white text-slate-800 rounded-2xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col z-10 border border-slate-200/80"
        id={`project-modal-${project.id}`}
      >
        {/* Sticky Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-slate-100 bg-white sticky top-0 z-20">
          <div className="space-y-1 text-left">
            <span className="font-mono text-[10px] text-[#1d4ed8] font-bold tracking-widest uppercase bg-blue-50/80 border border-blue-100/50 px-2.5 py-1 rounded">
              {project.clientIndustry || project.category}
            </span>
            <h3 className="font-sans text-xl md:text-2xl font-extrabold text-slate-900 leading-tight">
              {project.client}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-800 cursor-pointer shrink-0 ml-4"
            id="close-project-modal-btn"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto overflow-x-hidden flex-1 scrollbar-thin scrollbar-thumb-slate-200">
          {/* Cover Image */}
          <div className="relative aspect-[21/9] w-full bg-slate-100 overflow-hidden border-b border-slate-100">
            <img
              src={project.img}
              alt={project.client}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
          </div>

          {/* Details Content */}
          <div className="p-6 md:p-8 space-y-8 text-left">
            {/* Project Overview */}
            <div className="space-y-3">
              <h4 className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#1d4ed8] flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#1d4ed8]" />
                Project Overview
              </h4>
              <p className="font-sans text-sm md:text-base text-slate-600 leading-relaxed font-normal">
                {project.description}
              </p>
            </div>

            {/* Services Delivered */}
            {project.servicesDelivered && project.servicesDelivered.length > 0 && (
              <div className="space-y-3">
                <h4 className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#1d4ed8] flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#1d4ed8]" />
                  Services Delivered
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.servicesDelivered.map((service, sIdx) => (
                    <span
                      key={sIdx}
                      className="font-mono text-xs text-slate-600 bg-slate-50 border border-slate-200/50 px-3 py-1.5 rounded-lg font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <hr className="border-slate-100" />

            {/* Split Challenge & Strategy & Execution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
              <div className="space-y-3">
                <h4 className="font-sans text-[11px] font-bold uppercase tracking-wider text-red-500 flex items-center gap-2">
                  <Target className="w-4 h-4 text-red-500" />
                  Challenge
                </h4>
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-sans text-[11px] font-bold uppercase tracking-wider text-emerald-600 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  Strategy & Execution
                </h4>
                <p className="font-sans text-sm text-slate-600 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            <hr className="border-slate-100" />

            {/* Results & Outcomes */}
            <div className="bg-blue-50/40 border border-blue-100/50 rounded-xl p-6 space-y-4">
              <h4 className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#1d4ed8] flex items-center gap-2">
                <Trophy className="w-4 h-4 text-[#1d4ed8]" />
                Results & Outcomes
              </h4>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="bg-[#1d4ed8] text-white font-mono text-xs font-black px-4 py-2 rounded-lg tracking-wide uppercase shadow-sm shrink-0 inline-block text-center select-none">
                  {project.metrics}
                </div>
                <p className="font-sans text-sm text-slate-700 font-medium leading-relaxed">
                  Successfully implemented end-to-end strategic workflows to fulfill key delivery criteria and maximize operational impact.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex justify-end gap-3 sticky bottom-0 z-20">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded bg-[#1d4ed8] hover:bg-blue-700 text-white font-mono text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-[0_4px_12px_rgba(29,78,216,0.12)]"
            id="close-project-modal-bottom-btn"
          >
            Close Details
          </button>
        </div>
      </motion.div>
    </div>
  );
}
