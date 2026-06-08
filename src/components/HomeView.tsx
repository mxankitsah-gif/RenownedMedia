/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, Quote, Sparkles, Award, Star, Trophy, Clock, Coins, Flame, TrendingUp, Headset, BookOpen, ExternalLink, Calendar, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES, PROJECTS, TESTIMONIAL, HERO_IMAGE } from '../data';
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
  // - Content Production (col-span-1)
  // - Brand Strategy (col-span-3, flex row list style)
  const getBentoClasses = (id: string) => {
    switch (id) {
      case 'seo-strategy':
        return 'md:col-span-2';
      case 'brand-strategy':
        return 'md:col-span-3 flex flex-col md:flex-row items-start md:items-center gap-8';
      default:
        return 'col-span-1';
    }
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
              const isSpecialBrand = srv.id === 'brand-strategy';

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
              Featured Client <span className="text-[#D4AF37]">Major Campaigns</span>
            </h2>
            <p className="font-sans text-sm text-[#BFB9AF] leading-relaxed">
              A curated selection of pristine campaign roadmaps, high-energy productions, and SEO conquests designed for premium visibility.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECTS.map((proj) => (
              <div
                key={proj.id}
                onClick={() => onSelectProject(proj)}
                className="group relative rounded-xl overflow-hidden border border-[#D4AF37]/15 aspect-[0.67] hover:border-[#D4AF37]/60 hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] transition-all duration-500 ease-out cursor-pointer bg-white/[0.01]"
                id={`home-project-card-${proj.id}`}
              >
                <img
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={proj.img}
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual shade gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 p-6 w-full space-y-2 text-left">
                  <span className="font-mono text-[9px] text-[#D4AF37] block font-bold uppercase tracking-widest">
                    {proj.category}
                  </span>
                  <h3 className="font-sans text-base font-extrabold text-white leading-tight group-hover:text-[#D4AF37] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="font-sans text-xs text-[#BFB9AF] line-clamp-2 leading-relaxed">
                    {proj.description}
                  </p>
                  <button
                    className="inline-flex items-center text-[#D4AF37] text-xs font-bold gap-1 mt-1 group-hover:underline cursor-pointer"
                    id={`view-project-label-${proj.id}`}
                  >
                    View Project <ArrowRight className="w-3 h-3 ml-1" />
                  </button>
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
              Explore More
            </button>
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIAL SECTION */}
      <section className="py-24 bg-[#0f0f0f] border-y border-[#D4AF37]/15" id="home-quote-section">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <Quote className="w-12 h-12 text-[#D4AF37] mx-auto opacity-70" />
          
          <h3 className="font-sans text-2xl sm:text-3xl font-light italic text-white tracking-normal max-w-2xl mx-auto leading-relaxed">
            "{TESTIMONIAL.quote}"
          </h3>

          <div className="flex flex-col items-center justify-center">
            <img
              alt={TESTIMONIAL.author}
              className="w-16 h-16 rounded-full border-2 border-[#D4AF37]/50 shadow-lg mb-4 object-cover"
              src={TESTIMONIAL.img}
              referrerPolicy="no-referrer"
            />
            <h5 className="font-sans font-bold text-base text-white tracking-wide">
              {TESTIMONIAL.author}
            </h5>
            <p className="font-mono text-[9px] text-[#D4AF37] uppercase mt-1 tracking-widest font-semibold bg-[#D4AF37]/10 px-2.5 py-0.5 rounded">
              {TESTIMONIAL.role}
            </p>
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

      {/* 5.5 NEW LATEST ARTICLES FROM BLOGGER SECTION */}
      <section className="py-24 bg-[#0a0a0a] border-t border-[#D4AF37]/10" id="home-latest-articles">
        <div className="max-w-7xl mx-auto px-6 space-y-16 animate-fade-in">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-2">
            <div className="text-left space-y-4 max-w-2xl">
              <span className="font-mono text-[9px] font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1">
                <BookOpen className="w-3 h-3" /> OFFICIAL CHANNELS STREAM
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Latest Articles <span className="text-[#D4AF37]">& Case Studies</span>
              </h2>
              <p className="font-sans text-sm text-[#BFB9AF] leading-relaxed">
                Direct updates and authoritative insight campaigns broadcasted live from our official Blogger timeline for local businesses and builders in India.
              </p>
            </div>
            
            <button
              onClick={() => onTabChange('blog')}
              className="bg-white hover:bg-[#D4AF37] text-black border border-[#D4AF37]/30 hover:border-[#D4AF37] px-6 py-3 rounded font-mono text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer inline-flex items-center gap-1.5 self-start md:self-auto shadow-sm"
              id="home-view-more-blog-btn"
            >
              Read Our Blog <ArrowUpRight className="w-4 h-4 text-[#0A0A0A]" />
            </button>
          </div>

          {/* Core articles showcase cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'How Indian Creators are Unlocking Dynamic Reach with Micro-Reels',
                desc: 'Vertical formatting, immediate visual triggers, and localized hooks tailored to capture mass audience cohorts in Delhi NCR, Bangalore, and Mumbai.',
                date: 'June 01, 2026',
                category: 'Content Strategy',
                img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80',
              },
              {
                title: 'Ghaziabad & Delhi NCR Local SEO Guide for SME Growth',
                desc: 'Optimize maps ranking directories, eliminate keyphrase siloing, and maximize Google Maps visibility parameters to land customers with active intent without massive ad spend.',
                date: 'June 05, 2026',
                category: 'Local SEO',
                img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
              },
              {
                title: 'Leveraging WhatsApp Automation for Indian Storefront Conversions',
                desc: 'Switch from inactive email protocols to real-time webhook chatbots and catalogs that capture consumer curiosity instantly and drive 90%+ immediate read benchmarks.',
                date: 'June 07, 2026',
                category: 'Growth Marketing',
                img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80',
              }
            ].map((art, idx) => (
              <div
                key={idx}
                onClick={() => onTabChange('blog')}
                className="bg-white/[0.012] hover:bg-white/[0.02] backdrop-blur-md rounded-xl border border-[#D4AF37]/15 hover:border-[#D4AF37]/50 p-0 overflow-hidden transition-all duration-300 group flex flex-col justify-between cursor-pointer text-left"
                id={`article-card-${idx}`}
              >
                <div className="relative h-44 overflow-hidden bg-[#121212]">
                  <img
                    src={art.img}
                    alt={art.title}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#0a0a0a]/90 text-[#D4AF37] border border-[#D4AF37]/35 text-[9px] font-mono px-2.5 py-0.5 rounded tracking-wider uppercase font-bold">
                    {art.category}
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 font-mono text-[10px] text-[#BFB9AF]/70">
                      <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{art.date}</span>
                      <span>·</span>
                      <span className="text-white">Admin</span>
                    </div>
                    <h4 className="font-sans font-extrabold text-[#D4AF37] text-base group-hover:text-white transition-colors duration-200 line-clamp-2 leading-snug">
                      {art.title}
                    </h4>
                    <p className="font-sans text-xs text-[#BFB9AF] leading-relaxed line-clamp-3">
                      {art.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#D4AF37]/10 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#D4AF37] group-hover:underline flex items-center gap-1">
                      Read on Blogger <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
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
