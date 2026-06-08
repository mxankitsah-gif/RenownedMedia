/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ArrowRight, Filter, Search, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data';
import { ProjectItem } from '../types';

interface PortfolioViewProps {
  onSelectProject: (project: ProjectItem) => void;
}

export default function PortfolioView({ onSelectProject }: PortfolioViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Extract list of unique categories plus 'All'
  const categories = ['All', 'SEO & Marketing', 'Social Media', 'Branding', 'Video Production'];

  const filteredProjects = PROJECTS.filter((proj) => {
    const categoryMatch = selectedCategory === 'All' || proj.category === selectedCategory;
    const searchMatch = 
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.category.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-6">
      {/* Search and Category Filter Toolbar */}
      <section className="space-y-6 md:space-y-0 md:flex md:items-center md:justify-between border-b border-[#D4AF37]/15 pb-8">
        <div className="space-y-2">
          <h2 className="font-sans text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
            <Sparkles className="text-[#D4AF37] w-6 h-6" />
            Featured Client <span className="text-[#D4AF37]">Major Campaigns</span>
          </h2>
          <p className="text-xs text-[#BFB9AF] max-w-sm">
            Explore cinematic content reels, high-end identity systems, and tactical search growth.
          </p>
        </div>

        {/* Toolbar controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
          {/* Custom Search bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-[#BFB9AF] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter campaigns, keywords..."
              className="pl-10 pr-4 py-2 border border-[#D4AF37]/15 focus:border-[#D4AF37] rounded-lg text-xs font-sans focus:outline-none w-full sm:w-60 bg-white/[0.02] text-white"
            />
          </div>

          {/* Core Categories list */}
          <div className="flex flex-wrap gap-1.5 items-center">
            <Filter className="w-3.5 h-3.5 text-[#D4AF37] hidden lg:inline mr-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded text-[11px] font-sans font-medium transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#D4AF37] text-[#0A0A0A] shadow shadow-[#D4AF37]/20 border border-[#D4AF37] font-bold'
                    : 'bg-white/[0.04] text-[#BFB9AF] border border-[#D4AF37]/15 hover:border-[#D4AF37]/45'
                }`}
                id={`filter-category-${cat.replace(/\s+/g, '-').toLowerCase()}`}
              >
                {cat === 'All' ? 'All Channels' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid with Smooth Animations */}
      <motion.section 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((proj) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                key={proj.id}
                onClick={() => onSelectProject(proj)}
                className="group relative rounded-xl overflow-hidden border border-[#D4AF37]/15 aspect-[0.67] hover:border-[#D4AF37]/60 hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] transition-all cursor-pointer bg-white/[0.01]"
                id={`portfolio-card-${proj.id}`}
              >
                {/* Lazy-loaded standard back image to ensure frame security */}
                <img
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={proj.img}
                  referrerPolicy="no-referrer"
                />

                {/* Dark rich gradient bottom fade for clinical look */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent opacity-95 group-hover:opacity-100 transition-opacity" />

                {/* Overlaid details positioned exactly */}
                <div className="absolute bottom-0 left-0 p-6 w-full space-y-2">
                  <span className="font-mono text-[10px] text-[#D4AF37] font-bold uppercase tracking-wider block">
                    {proj.category}
                  </span>
                  <h3 className="font-sans text-lg font-extrabold text-white leading-snug group-hover:text-[#D4AF37] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="font-sans text-xs text-[#BFB9AF] line-clamp-2 leading-relaxed">
                    {proj.description}
                  </p>
                  
                  {/* Performance metric tag */}
                  <div className="inline-flex items-center gap-1 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 font-mono text-[10px] font-bold px-2 py-0.5 rounded mt-2">
                    {proj.metrics}
                  </div>

                  <div className="pt-2 flex items-center gap-1 text-[11px] font-mono text-[#D4AF37] font-bold group-hover:underline">
                    View Project <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-16 text-center space-y-3 bg-white/[0.01] rounded-xl border border-dashed border-[#D4AF37]/35 max-w-lg mx-auto w-full">
              <p className="text-sm font-semibold text-white">No matching campaigns found</p>
              <p className="text-xs text-[#BFB9AF] max-w-xs mx-auto">
                No campaigns match "{searchQuery}" under the category "{selectedCategory}". Clear parameters to view all.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-4 py-2 rounded bg-white hover:bg-[#D4AF37] text-[#0A0A0A] hover:text-[#0A0A0A] border border-[#D4AF37]/30 font-mono text-[10px] uppercase font-bold tracking-wider transition-colors cursor-pointer"
                id="reset-portfolio-filters-btn"
              >
                Clear all filters
              </button>
            </div>
          )}
        </AnimatePresence>
      </motion.section>
    </div>
  );
}
