/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES, PROJECTS, TESTIMONIAL, TEAM, HERO_IMAGE } from '../data';
import { ProjectItem } from '../types';

interface HomeViewProps {
  onTabChange: (tab: 'home' | 'about' | 'services' | 'portfolio' | 'contact') => void;
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
          backgroundImage: `linear-gradient(to bottom, rgba(5, 5, 5, 0.72), #050505), url(${HERO_IMAGE})`,
        }}
        id="home-hero-section"
      >
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="max-w-3xl space-y-8">
            <span className="font-serif text-xl lg:text-2xl text-primary font-bold tracking-normal italic block animate-pulse">
              Visibility Is The New Currency.
            </span>
            
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold text-on-surface leading-[1.1] tracking-tight">
              Grow Faster In The Digital World
            </h1>

            {/* Tags array */}
            <div className="flex flex-wrap gap-2.5">
              {heroTags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] font-bold bg-surface-container-high/90 text-primary border border-primary/20 px-3.5 py-1.5 rounded-full uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-4">
              <p className="font-sans text-body-lg text-primary font-extrabold italic">
                No cap, your brand needs to be seen.
              </p>
              <p className="font-sans text-sm sm:text-base text-on-surface-variant max-w-2xl leading-relaxed">
                At Renowned Media, we combine strategy, creativity and execution — helping modern brands dominate search, captivate audiences and grow their digital authority.
              </p>
            </div>

            <button
              onClick={onRequestQuote}
              className="bg-primary-container text-on-primary-container px-8 py-4 rounded font-mono text-[11px] font-bold uppercase tracking-widest hover:scale-105 transition-all duration-200 active:scale-95 shadow-xl hover:shadow-2xl ring-2 ring-primary-container/30 ring-offset-4 ring-offset-background cursor-pointer"
              id="hero-growing-btn"
            >
              Let's Grow Together
            </button>
          </div>
        </div>
        {/* Soft bottom fade gradients */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* 2. SERVICES BENTO GRID */}
      <section className="py-24 bg-surface-dim" id="home-bento-services">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
              Services That Build Influence
            </h2>
            <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
              From digital PR to content production, Renowned Media helps brands grow visibility, authority and audience engagement across modern platforms.
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
                  className={`bg-surface-container-low border border-outline-variant/30 rounded-xl p-8 hover:-translate-y-2 transition-all duration-300 group hover:shadow-lg hover:border-primary/30 cursor-pointer ${bentoClass}`}
                  id={`home-service-card-${srv.id}`}
                >
                  <div className={`rounded-lg bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary-container transition-all shrink-0 ${
                    isSpecialBrand ? 'w-16 h-16' : 'w-12 h-12 mb-6'
                  }`}>
                    <span className={`material-symbols-outlined ${isSpecialBrand ? 'text-4xl' : 'text-3xl'}`} data-icon={srv.iconName}>
                      {srv.iconName}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-sans font-extrabold text-lg text-on-surface">
                      {srv.title}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
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
      <section className="py-24 bg-background" id="home-projects">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
              Featured Projects
            </h2>
            <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
              A showcase of content, campaigns and digital experiences created for modern brands and creators.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECTS.map((proj) => (
              <div
                key={proj.id}
                onClick={() => onSelectProject(proj)}
                className="group relative rounded-xl overflow-hidden border border-outline-variant/30 aspect-[0.67] hover:border-primary/50 hover:shadow-xl transition-all cursor-pointer"
                id={`home-project-card-${proj.id}`}
              >
                <img
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={proj.img}
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual shade gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/80 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                <div className="absolute bottom-0 left-0 p-6 w-full space-y-2 text-left">
                  <span className="font-mono text-[9px] text-primary block font-bold uppercase tracking-wider">
                    {proj.category}
                  </span>
                  <h3 className="font-sans text-base font-extrabold text-on-surface leading-tight">
                    {proj.title}
                  </h3>
                  <p className="font-sans text-xs text-on-surface-variant line-clamp-2 leading-relaxed">
                    {proj.description}
                  </p>
                  <button
                    className="inline-flex items-center text-primary text-xs font-bold gap-1 mt-1 group-hover:underline"
                    id={`view-project-label-${proj.id}`}
                  >
                    View Project <span className="material-symbols-outlined text-xs" data-icon="arrow_forward">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onTabChange('portfolio')}
              className="bg-transparent border-2 border-primary-container text-primary px-8 py-4 rounded font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 cursor-pointer"
              id="explore-more-projects-btn"
            >
              Explore More
            </button>
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIAL SECTION */}
      <section className="py-24 bg-surface-container-low border-y border-outline-variant/20" id="home-quote-section">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <Quote className="w-12 h-12 text-primary mx-auto opacity-80" />
          
          <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight max-w-2xl mx-auto leading-snug">
            "{TESTIMONIAL.quote}"
          </h3>

          <div className="flex flex-col items-center justify-center">
            <img
              alt={TESTIMONIAL.author}
              className="w-16 h-16 rounded-full border-2 border-primary-container shadow-md mb-4 object-cover"
              src={TESTIMONIAL.img}
              referrerPolicy="no-referrer"
            />
            <h5 className="font-sans font-extrabold text-base text-on-surface">
              {TESTIMONIAL.author}
            </h5>
            <p className="font-mono text-[10px] text-on-surface-variant uppercase mt-1 tracking-widest font-bold">
              {TESTIMONIAL.role}
            </p>
          </div>
        </div>
      </section>

      {/* 5. TEAM LEADERSHIP SECTION */}
      <section className="py-24 bg-background" id="home-leadership">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
              Meet Our Leadership
            </h2>
            <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <div
                key={member.id}
                onClick={() => onTabChange('about')}
                className="bg-surface-container rounded-xl border border-outline-variant/30 overflow-hidden group hover:border-primary/30 transition-all shadow-sm hover:shadow-lg cursor-pointer"
                id={`home-team-card-${member.id}`}
              >
                <div className="aspect-square overflow-hidden bg-surface-container-high">
                  <img
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-105"
                    src={member.img}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 text-center border-t border-outline-variant/20">
                  <h4 className="font-sans font-extrabold text-lg text-on-surface mb-1">
                    {member.name}
                  </h4>
                  <p className="font-mono text-[10px] text-primary uppercase font-bold tracking-widest">
                    {member.role === 'Founder & CEO' ? 'Founder' : member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION SECTION */}
      <section className="py-24 bg-surface-container-low relative overflow-hidden" id="home-cta-block">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary-container/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-container/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-8">
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
            Would you like to start a project with us?
          </h2>
          <p className="font-sans text-sm sm:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Etiam erat lectus, finibus eget commodo quis, tincidunt eget leo. Nullam quis vulputate orci, ac accumsan quam. Morbi fringilla congue libero.
          </p>

          <button
            onClick={onRequestQuote}
            className="bg-primary-container text-on-primary-container px-8 py-4 rounded font-mono text-[11px] font-bold uppercase tracking-widest hover:scale-105 transition-all duration-200 active:scale-95 shadow-lg hover:shadow-xl ring-2 ring-primary-container/30 ring-offset-4 ring-offset-surface-container-low cursor-pointer"
            id="cta-bottom-quote-btn"
          >
            Get a Quote
          </button>
        </div>
      </section>
    </div>
  );
}
