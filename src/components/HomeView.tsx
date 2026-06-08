/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, Sparkles, Award, Star, Trophy, Clock, Coins, Flame, TrendingUp, Headset, BookOpen, ExternalLink, Calendar, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
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
          backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 10, 0.75), #0a0a0a), url(${HERO_IMAGE})`,
        }}
        id="home-hero-section"
      >
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="max-w-3xl space-y-8">
            <span className="font-serif text-xl lg:text-2xl text-[#D4AF37] font-medium tracking-normal italic block">
              Visibility Is The New Currency.
            </span>
            
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
              Grow <span className="text-[#D4AF37] relative inline-block">Faster<span className="absolute bottom-1.5 left-0 w-full h-[3px] bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] opacity-65"></span></span> In The Digital World
            </h1>

            {/* Tags array */}
            <div className="flex flex-wrap gap-2.5">
              {heroTags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[9px] font-bold bg-white/[0.04] text-[#D4AF37] border border-[#D4AF37]/35 px-4 py-1.5 rounded-full uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-4">
              <p className="font-sans text-lg text-[#F5D76E] font-medium tracking-wide">
                No compromise. Your brand deserves elite representation.
              </p>
              <p className="font-sans text-sm sm:text-base text-[#BFB9AF] max-w-2xl leading-relaxed">
                At Renowned Media, we combine strategy, execution, and master craftsmanship — helping modern brands dominate search, captivate audiences, and secure their digital authority with high-recall prestige.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onRequestQuote}
                className="bg-white hover:bg-[#D4AF37] text-[#0A0A0A] hover:text-[#0A0A0A] border border-[#D4AF37]/30 hover:border-[#D4AF37] px-8 py-4.5 rounded font-mono text-[11px] font-bold uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_25px_rgba(212,175,55,0.15)] hover:shadow-[0_8px_35px_rgba(212,175,55,0.35)] cursor-pointer animate-pulse-slow"
                id="hero-growing-btn"
              >
                Let's Grow Together
              </button>
              <button
                onClick={() => onTabChange('blog')}
                className="bg-transparent hover:bg-white/[0.04] text-[#D4AF37] hover:text-white border border-[#D4AF37]/50 hover:border-[#D4AF37] px-8 py-4.5 rounded font-mono text-[11px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                id="hero-read-blog-btn"
              >
                Read Our Blog <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        {/* Soft bottom fade gradients */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* 2. SERVICES BENTO GRID */}
      <section className="py-24 bg-[#0a0a0a]" id="home-bento-services">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="font-mono text-[9px] font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Bespoke Creative Capabilities
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Services That Build <span className="text-[#D4AF37]">Prestige</span>
            </h2>
            <p className="font-sans text-sm text-[#BFB9AF] leading-relaxed">
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
                  className={`bg-white/[0.02] backdrop-blur-md border border-[#D4AF37]/15 hover:border-[#D4AF37]/60 rounded-xl p-8 hover:-translate-y-2.5 transition-all duration-500 ease-out group cursor-pointer hover:shadow-[0_0_30px_rgba(212,175,55,0.12)] ${bentoClass}`}
                  id={`home-service-card-${srv.id}`}
                >
                  <div className={`rounded-lg bg-white/[0.04] border border-[#D4AF37]/25 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0A0A0A] transition-all duration-300 shrink-0 ${
                    isSpecialBrand ? 'w-16 h-16' : 'w-12 h-12 mb-6'
                  }`}>
                    <ServiceIcon id={srv.id} className={isSpecialBrand ? 'w-8 h-8' : 'w-6 h-6'} />
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-sans font-extrabold text-lg text-white group-hover:text-[#D4AF37] transition-colors duration-200">
                      {srv.title}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-[#BFB9AF] leading-relaxed">
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
      <section className="py-24 bg-[#0a0a0a]" id="home-projects">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="font-mono text-[9px] font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Selected Showcase
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Client <span className="text-[#D4AF37]">Projects & Success Stories</span>
            </h2>
            <p className="font-sans text-sm text-[#BFB9AF] leading-relaxed">
              Explore our tactical organic achievements, cinematic campaigns, and conversion-optimized systems engineered for market leaders.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {PROJECTS.map((proj) => (
              <div
                key={proj.id}
                onClick={() => onSelectProject(proj)}
                className="group relative rounded-xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/80 hover:shadow-[0_12px_35px_rgba(212,175,55,0.12)] transition-all duration-500 ease-out cursor-pointer bg-black/40 flex flex-col justify-between"
                id={`home-project-card-${proj.id}`}
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
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onTabChange('portfolio')}
              className="bg-transparent hover:bg-white text-white hover:text-[#0A0A0A] border border-[#D4AF37]/50 hover:border-white px-8 py-4 rounded font-mono text-[11px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-[0_2px_15px_rgba(212,175,55,0.05)] hover:shadow-[0_4px_25px_rgba(255,255,255,0.15)]"
              id="explore-more-projects-btn"
            >
              Explore Full Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE RENOWNED MEDIA SECTION */}
      <section className="py-24 bg-[#0a0a0a]" id="home-why-choose">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="font-mono text-[9px] font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Exclusive Value Proposition
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Choose <span className="text-[#D4AF37]">Renowned Media</span>
            </h2>
            <p className="font-sans text-sm text-[#BFB9AF] leading-relaxed">
              We engineer premier growth and content experiences for leading Indian creators, startups, local businesses, and SMEs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: 'Fast Delivery',
                icon: <Clock className="w-5 h-5 text-[#D4AF37]" />,
                desc: 'Rapid execution with cinematic quality within standard turnaround guidelines.',
              },
              {
                title: 'Affordable Pricing',
                icon: <Coins className="w-5 h-5 text-[#D4AF37]" />,
                desc: 'Transparent localized price tiers starting scaling dynamically from ₹5,000 to ₹50,000/month.',
              },
              {
                title: 'Creative Content',
                icon: <Flame className="w-5 h-5 text-[#D4AF37]" />,
                desc: 'Reject generic templates. Custom visual assets crafted to lock in consumer memory.',
              },
              {
                title: 'SEO Focus',
                icon: <TrendingUp className="w-5 h-5 text-[#D4AF37]" />,
                desc: 'Rigorous technical and keyphrase audits to build resilient, compound search traffic assets.',
              },
              {
                title: 'Dedicated Support',
                icon: <Headset className="w-5 h-5 text-[#D4AF37]" />,
                desc: 'Direct comms channel with lead campaign coordinators to supervise your strategy.',
              }
            ].map((item, idx) => (
              <motion.div
                whileHover={{ y: -5, borderColor: 'rgba(212, 175, 55, 0.45)', boxShadow: '0 0 25px rgba(212,175,55,0.1)' }}
                key={idx}
                className="bg-white/[0.02] backdrop-blur-md rounded-xl border border-[#D4AF37]/15 p-6 flex flex-col justify-between space-y-4 transition-all duration-300"
                id={`why-choose-card-${idx}`}
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-[#D4AF37]/25 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h4 className="font-sans font-extrabold text-base text-white">{item.title}</h4>
                  <p className="font-sans text-xs text-[#BFB9AF] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.5 READ OUR LATEST INSIGHTS CTA SECTION */}
      <section className="py-20 bg-[#0c0c0c] border-t border-[#D4AF37]/10 relative overflow-hidden" id="home-latest-insights-cta">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-6">
          <span className="font-mono text-[9px] font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" /> Direct Industry Insights
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Read Our Latest Insights
          </h2>
          <p className="font-sans text-sm text-[#BFB9AF] max-w-xl mx-auto leading-relaxed">
            Delve deeper into our official publications, strategic advice, and comprehensive case studies updated regularly on our official publishing stream.
          </p>
          <div className="pt-2">
            <a
              href="https://renownedmedia.blogspot.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#D4AF37] text-black border border-[#D4AF37]/30 hover:border-[#D4AF37] px-8 py-4 rounded font-mono text-[11px] font-bold uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_20px_rgba(255,255,255,0.05)] hover:shadow-[0_6px_25px_rgba(212,175,55,0.25)] cursor-pointer"
              id="visit-blog-cta-btn"
            >
              Visit Our Blog <ExternalLink className="w-4 h-4 text-black" />
            </a>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION SECTION */}
      <section className="py-24 bg-[#0a0a0a] border-t border-[#D4AF37]/15 relative overflow-hidden" id="home-cta-block">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-8">
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Elevate Your Brand's Digital Authority
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#BFB9AF] max-w-2xl mx-auto leading-relaxed">
            Partner with us to create a bespoke, high-authority digital strategy that captures target mindshare and creates long-term commercial value.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onRequestQuote}
              className="w-full sm:w-auto bg-white hover:bg-[#D4AF37] text-[#0A0A0A] hover:text-[#0A0A0A] border border-[#D4AF37]/35 hover:border-[#D4AF37] px-8 py-4.5 rounded font-mono text-[11px] font-bold uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_25px_rgba(212,175,55,0.15)] hover:shadow-[0_8px_35px_rgba(212,175,55,0.35)] cursor-pointer animate-pulse-slow"
              id="cta-bottom-quote-btn"
            >
              Get a Quote
            </button>
            <button
              onClick={() => onTabChange('blog')}
              className="w-full sm:w-auto bg-transparent hover:bg-white/[0.04] text-[#D4AF37] hover:text-white border border-[#D4AF37]/50 hover:border-[#D4AF37] px-8 py-4.5 rounded font-mono text-[11px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
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
