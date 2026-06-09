/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Award, Star, Trophy, Clock, Coins, Flame, TrendingUp, Headset, BookOpen, ExternalLink, Calendar, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES, PROJECTS, HERO_IMAGE } from '../data';
import { ProjectItem, ActiveTab } from '../types';
import ServiceIcon from './ServiceIcon';

interface HomeViewProps {
  onTabChange: (tab: ActiveTab) => void;
  onSelectProject: (project: ProjectItem) => void;
  onRequestQuote: () => void;
}

export default function HomeView({ onTabChange, onSelectProject, onRequestQuote }: HomeViewProps) {
  
  // Tag labels for the hero section
  const heroTags = ['SEO', 'Social Media', 'Video Editing', 'Production', 'Branding'];

  // Map bento classes to services specifically matching the provided HTML:
  // - Video Editing (col-span-1)
  // - SEO Strategy (col-span-2)
  // - Digital Marketing (col-span-1)
  // - Social Media Growth (col-span-1)
  // - Symmetric modern layout for key capabilities
  const getBentoClasses = (id: string) => {
    return 'col-span-1';
  };

  return (
    <div className="space-y-0 text-on-surface">
      {/* 1. HERO SECTION */}
      <section 
        className="relative min-h-[92vh] flex items-center pt-24 pb-16 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.88), #ffffff), url(${HERO_IMAGE})`,
        }}
        id="home-hero-section"
      >
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="max-w-3xl space-y-8">
            <span className="font-serif text-xl lg:text-2xl text-[#1d4ed8] font-semibold tracking-normal italic block">
              Visibility Is The New Currency.
            </span>
            
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Grow <span className="text-[#1d4ed8] relative inline-block">Faster<span className="absolute bottom-1.5 left-0 w-full h-[3px] bg-red-600 opacity-65"></span></span> In The Digital World
            </h1>
 
            {/* Tags array */}
            <div className="flex flex-wrap gap-2.5">
              {heroTags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] font-bold bg-[#eff6ff] text-[#1d4ed8] border border-blue-100 px-4 py-1.5 rounded-full uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
 
            <div className="space-y-4">
              <p className="font-sans text-lg text-slate-800 font-bold tracking-wide">
                No compromise. Your brand deserves elite representation.
              </p>
              <p className="font-sans text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
                At Renowned Media, we combine strategy, execution, and master craftsmanship — helping modern brands dominate search, captivate audiences, and secure their digital authority with high-recall prestige.
              </p>
            </div>
 
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onRequestQuote}
                className="bg-[#dc2626] hover:bg-[#b91c1c] text-white border-none px-8 py-4.5 rounded font-mono text-[11px] font-bold uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_25px_rgba(220,38,38,0.25)] hover:shadow-[0_8px_35px_rgba(220,38,38,0.4)] cursor-pointer"
                id="hero-growing-btn"
              >
                Let's Grow Together
              </button>
              <button
                onClick={() => onTabChange('blog')}
                className="bg-transparent hover:bg-slate-50 text-[#1d4ed8] hover:text-[#1e40af] border border-[#1d4ed8]/35 hover:border-[#1d4ed8] px-8 py-4.5 rounded font-mono text-[11px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                id="hero-read-blog-btn"
              >
                Read Our Blog <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        {/* Soft bottom fade gradients */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* 2. SERVICES BENTO GRID */}
      <section className="py-24 bg-slate-50/50 border-y border-slate-100" id="home-bento-services">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="font-mono text-[10px] font-bold text-[#1d4ed8] bg-[#1d4ed8]/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Bespoke Creative Capabilities
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Services That Build <span className="text-[#1d4ed8]">Prestige</span>
            </h2>
            <p className="font-sans text-sm text-slate-600 leading-relaxed">
              From digital PR to cinematic content production, Renowned Media helps premium brands grow visibility and authority with extreme precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((srv) => {
              const bentoClass = getBentoClasses(srv.id);
              const isSpecialBrand = false;

              return (
                <div
                  key={srv.id}
                  onClick={() => onTabChange('services')}
                  className={`bg-white border border-slate-200/60 hover:border-blue-500 rounded-xl p-8 hover:-translate-y-2.5 transition-all duration-500 ease-out group cursor-pointer hover:shadow-[0_12px_30px_rgba(29,78,216,0.06)] ${bentoClass}`}
                  id={`home-service-card-${srv.id}`}
                >
                  <div className={`rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1d4ed8] group-hover:bg-[#1d4ed8] group-hover:text-white transition-all duration-300 shrink-0 ${
                    isSpecialBrand ? 'w-16 h-16' : 'w-12 h-12 mb-6'
                  }`}>
                    <ServiceIcon id={srv.id} className={isSpecialBrand ? 'w-8 h-8' : 'w-6 h-6'} />
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-sans font-extrabold text-lg text-slate-900 group-hover:text-[#1d4ed8] transition-colors duration-200">
                      {srv.title}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {srv.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* 3. FEATURED PROJECTS SECTION */}
      <section className="py-16 bg-white" id="home-projects">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-mono text-[10px] font-bold text-[#1d4ed8] bg-[#1d4ed8]/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Selected Showcase
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Client <span className="text-[#1d4ed8]">Projects & Success Stories</span>
            </h2>
            <p className="font-sans text-sm text-slate-600 leading-relaxed">
              Explore our tactical organic achievements, cinematic campaigns, and conversion-optimized systems engineered for market leaders.
            </p>
          </div>

          {/* Cards Grid containing top 3 compact cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PROJECTS.slice(0, 3).map((proj) => (
              <div
                key={proj.id}
                onClick={() => onSelectProject(proj)}
                className="group relative rounded-xl overflow-hidden border border-slate-200/80 hover:border-blue-500 hover:shadow-[0_12px_35px_rgba(29,78,216,0.06)] transition-all duration-500 ease-out cursor-pointer bg-white flex flex-col justify-between"
                id={`home-project-card-${proj.id}`}
                style={{ height: '380px' }}
              >
                {/* Image Section with Overlay */}
                <div className="relative h-40 overflow-hidden shrink-0">
                  <img
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={proj.img}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 to-transparent" />
                  <span className="absolute bottom-3 left-4 bg-white/95 backdrop-blur-sm text-[#1d4ed8] border border-blue-100 text-[9px] font-mono font-bold uppercase py-1 px-3 rounded-full shadow-md z-10">
                    {proj.category}
                  </span>
                </div>

                {/* Content Space */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-2 text-left">
                    {/* Industry */}
                    <span className="font-mono text-[9px] text-[#dc2626] uppercase tracking-widest block">
                      {proj.clientIndustry || 'B2B Enterprise'}
                    </span>
                    
                    {/* Title */}
                    <h3 className="font-sans text-sm sm:text-base font-extrabold text-slate-900 leading-snug tracking-tight group-hover:text-[#1d4ed8] transition-colors duration-200 line-clamp-2">
                      {proj.title}
                    </h3>

                    {/* Brief description */}
                    <p className="font-sans text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  {/* Services Delivered */}
                  {proj.servicesDelivered && proj.servicesDelivered.length > 0 && (
                    <div className="space-y-1.5 pt-2 border-t border-slate-100 text-left">
                      <div className="flex flex-wrap gap-1 leading-none">
                        {proj.servicesDelivered.slice(0, 3).map((sd, sIdx) => (
                          <span key={sIdx} className="bg-slate-50 border border-slate-200/50 text-slate-600 text-[9px] px-2 py-1 rounded">
                            {sd}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => onTabChange('portfolio')}
              className="bg-white hover:bg-[#dc2626] text-[#1d4ed8] hover:text-white border border-[#1d4ed8]/35 hover:border-transparent px-8 py-4 rounded font-mono text-[11px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-[0_2px_15px_rgba(29,78,216,0.05)] hover:shadow-[0_4px_25px_rgba(220,38,38,0.2)]"
              id="explore-more-projects-btn"
            >
              Explore Full Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE RENOWNED MEDIA SECTION */}
      <section className="py-24 bg-slate-50/50 border-t border-slate-100" id="home-why-choose">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="font-mono text-[10px] font-bold text-[#1d4ed8] bg-[#1d4ed8]/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Exclusive Value Proposition
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Choose <span className="text-[#1d4ed8]">Renowned Media</span>
            </h2>
            <p className="font-sans text-sm text-slate-600 leading-relaxed">
              We engineer premier growth and content experiences for leading Indian creators, startups, local businesses, and SMEs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: 'Fast Delivery',
                icon: <Clock className="w-5 h-5 text-[#1d4ed8]" />,
                desc: 'Rapid execution with cinematic quality within standard turnaround guidelines.',
              },
              {
                title: 'Affordable Pricing',
                icon: <Coins className="w-5 h-5 text-[#1d4ed8]" />,
                desc: 'Transparent localized price tiers starting scaling dynamically from ₹5,000 to ₹50,000/month.',
              },
              {
                title: 'Creative Content',
                icon: <Flame className="w-5 h-5 text-[#1d4ed8]" />,
                desc: 'Reject generic templates. Custom visual assets crafted to lock in consumer memory.',
              },
              {
                title: 'SEO Focus',
                icon: <TrendingUp className="w-5 h-5 text-[#1d4ed8]" />,
                desc: 'Rigorous technical and keyphrase audits to build resilient, compound search traffic assets.',
              },
              {
                title: 'Dedicated Support',
                icon: <Headset className="w-5 h-5 text-[#1d4ed8]" />,
                desc: 'Direct comms channel with lead campaign coordinators to supervise your strategy.',
              }
            ].map((item, idx) => (
              <motion.div
                whileHover={{ y: -5, borderColor: '#1d4ed8', boxShadow: '0 10px 25px rgba(29, 78, 216, 0.05)' }}
                key={idx}
                className="bg-white rounded-xl border border-slate-200/80 p-6 flex flex-col justify-between space-y-4 transition-all duration-300"
                id={`why-choose-card-${idx}`}
                style={{
                  width: idx === 4 ? '920px' : undefined
                }}
              >
                <div 
                  className="space-y-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h4 className="font-sans font-extrabold text-base text-slate-900">{item.title}</h4>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.5 READ OUR LATEST INSIGHTS CTA SECTION */}
      <section className="py-20 bg-white border-t border-slate-100 relative overflow-hidden" id="home-latest-insights-cta">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1d4ed8]/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-6">
          <span className="font-mono text-[10px] font-bold text-[#1d4ed8] bg-[#1d4ed8]/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" /> Direct Industry Insights
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Read Our Latest Insights
          </h2>
          <p className="font-sans text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Delve deeper into our official publications, strategic advice, and comprehensive case studies updated regularly on our official publishing stream.
          </p>
          <div className="pt-2">
            <a
              href="https://renownedmedia.blogspot.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white border-none px-8 py-4 rounded font-mono text-[11px] font-bold uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_20px_rgba(220,38,38,0.25)] hover:shadow-[0_6px_25px_rgba(220,38,38,0.4)] cursor-pointer"
              id="visit-blog-cta-btn"
            >
              Visit Our Blog <ExternalLink className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION SECTION */}
      <section className="py-24 bg-slate-50/70 border-t border-slate-100 relative overflow-hidden" id="home-cta-block">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1d4ed8]/4 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1d4ed8]/4 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-8">
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Elevate Your Brand's Digital Authority
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Partner with us to create a bespoke, high-authority digital strategy that captures target mindshare and creates long-term commercial value.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onRequestQuote}
              className="w-full sm:w-auto bg-[#dc2626] hover:bg-[#b91c1c] text-white border-none px-8 py-4.5 rounded font-mono text-[11px] font-bold uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_25px_rgba(220,38,38,0.25)] hover:shadow-[0_8px_35px_rgba(220,38,38,0.4)] cursor-pointer"
              id="cta-bottom-quote-btn"
            >
              Get a Quote
            </button>
            <button
              onClick={() => onTabChange('blog')}
              className="w-full sm:w-auto bg-transparent hover:bg-slate-100 text-[#1d4ed8] hover:text-[#1e40af] border border-[#1d4ed8]/35 hover:border-[#1d4ed8] px-8 py-4.5 rounded font-mono text-[11px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              id="cta-bottom-read-blog-btn"
            >
              Read Our Blog <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
