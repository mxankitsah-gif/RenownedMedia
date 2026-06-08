/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowUpRight, BookOpen, ExternalLink, HelpCircle, ArrowLeft, RefreshCw, AlertTriangle } from 'lucide-react';
import { ActiveTab } from '../types';

interface BlogViewProps {
  onTabChange: (tab: ActiveTab) => void;
  onRequestQuote: () => void;
}

export default function BlogView({ onTabChange, onRequestQuote }: BlogViewProps) {
  
  // Custom navigation handler to go to blogger directly
  const handleOpenDirectly = () => {
    window.location.href = "https://renownedmedia.blogspot.com";
  };

  return (
    <div className="py-12 space-y-10 max-w-7xl mx-auto px-6 text-on-surface">
      
      {/* 1. ELEGANT HEADER HUD */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-[#D4AF37]/15 pb-6">
        <div className="space-y-1.5 text-left">
          <span className="font-mono text-xs font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" /> LIVE BLOGGER STREAM
          </span>
          <h2 className="font-sans text-3xl font-extrabold text-white">
            Renowned <span className="text-[#D4AF37]">Official Blog</span>
          </h2>
          <p className="font-sans text-xs text-[#BFB9AF] leading-relaxed">
            Consolidated growth strategies, SEO playbooks, and creative storytelling hosted live on Blogger.
          </p>
        </div>

        {/* HUDfallback controls */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => onTabChange('home')}
            className="px-4 py-2 bg-white/[0.02] border border-[#BFB9AF]/20 hover:border-white text-white hover:bg-white/[0.04] transition-all rounded text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-1.5 cursor-pointer"
            id="back-to-home-btn"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Home
          </button>
          <button
            onClick={handleOpenDirectly}
            className="px-5 py-2 bg-[#D4AF37] text-black hover:bg-[#F5D76E] shadow-[0_2px_15px_rgba(212,175,55,0.15)] transition-all rounded text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-1.5 cursor-pointer"
            id="open-blogger-direct-btn"
          >
            Read Our Blog <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 2. LIVE EMEDED CONTAINER WITH FALLBACK ADVISORY */}
      <div className="space-y-6 text-left">
        
        {/* Transparent alert alerting about iFrame status / how to load */}
        <div className="bg-[#12110f] border border-[#D4AF37]/20 rounded-xl p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex gap-3 items-start">
            <RefreshCw className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5 animate-spin-slow" />
            <div className="space-y-1">
              <h4 className="font-sans font-bold text-sm text-white">Seamless Blogger Integration</h4>
              <p className="font-sans text-xs text-[#BFB9AF] leading-relaxed max-w-2xl">
                The feed below is rendered live from <a href="https://renownedmedia.blogspot.com" className="text-[#D4AF37] underline hover:text-[#F5D76E]">https://renownedmedia.blogspot.com</a>. If the workspace blocks inline loading due to strict cookie privacy parameters, click the gold button to launch the stream directly in this tab.
              </p>
            </div>
          </div>
          <button
            onClick={handleOpenDirectly}
            className="bg-white/5 hover:bg-white/10 text-[#D4AF37] border border-[#D4AF37]/30 hover:border-[#D4AF37] px-4 py-2 rounded font-mono text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer inline-flex items-center gap-1.5 shrink-0 self-start sm:self-auto"
            id="fallback-button-opener"
          >
            Open Blogger in Current Tab <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* The Live Interactive Iframe window */}
        <div className="relative bg-[#050505] rounded-2xl border border-[#D4AF37]/15 overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.08)] bg-gradient-to-b from-black/20 to-black/60">
          
          {/* Subtle decoration frame bar */}
          <div className="h-10 bg-[#0c0c0c] border-b border-[#D4AF37]/10 px-4 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
            </div>
            <div className="font-mono text-[10px] text-[#BFB9AF] select-none tracking-wide text-center">
              renownedmedia.blogspot.com
            </div>
            <button
              onClick={handleOpenDirectly}
              className="text-[#D4AF37] hover:text-white"
              title="Open full page"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Actual IFrame integration */}
          <iframe 
            src="https://renownedmedia.blogspot.com" 
            className="w-full h-[780px] bg-[#0c0c0c] border-none"
            title="Renowned Media Blog Live Feed"
            referrerPolicy="no-referrer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            id="blogger-embed-iframe"
          />

        </div>

      </div>

      {/* 3. CTA SUPPORTING FOOTER FOR CAMPAIGN SETUPS */}
      <div className="bg-gradient-to-r from-white/[0.012] to-[#D4AF37]/[0.02] border border-[#D4AF37]/15 rounded-xl p-8 text-center space-y-6">
        <h3 className="font-sans text-xl font-extrabold text-white">Need Customized Technical Content for Your SME?</h3>
        <p className="font-sans text-xs text-[#BFB9AF] max-w-xl mx-auto leading-relaxed">
          We draft custom high-retention stories, execute rigorous visual shoots, and target strategic keywords. Get localized growth results with flexible plans fitting ₹5,000 to ₹50,000/mo guidelines.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onRequestQuote}
            className="bg-white hover:bg-[#D4AF37] text-black pr-6 pl-6 py-3.5 rounded font-mono text-[10px] font-bold uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer"
            id="quote-program-blog-btn"
          >
            Consult Authority Blueprint
          </button>
          <button
            onClick={handleOpenDirectly}
            className="bg-transparent hover:bg-white/[0.03] text-white border border-[#D4AF37]/40 hover:border-[#D4AF37] px-6 py-3.5 rounded font-mono text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer"
            id="read-our-blog-cta-bottom"
          >
            Read Our Blog directly
          </button>
        </div>
      </div>

    </div>
  );
}
