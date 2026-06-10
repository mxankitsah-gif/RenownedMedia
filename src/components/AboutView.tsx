/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Award, Zap, Sparkles, Clock, Globe, ArrowRight, Coins, Flame, TrendingUp, Headset, Megaphone, Search } from 'lucide-react';
import { motion } from 'motion/react';
import { AGENCY_DETAILS } from '../data';

const WHY_CHOOSE_ITEMS = [
  {
    title: 'Fast Delivery',
    icon: Clock,
    desc: 'Rapid execution with professional quality while maintaining strict delivery timelines.',
  },
  {
    title: 'Affordable Pricing',
    icon: Coins,
    desc: 'Flexible and transparent pricing models suitable for creators, startups, businesses and public figures.',
  },
  {
    title: 'Strategy Before Execution',
    icon: TrendingUp,
    desc: 'Every project begins with audience research, planning and platform-specific strategy before implementation.',
  },
  {
    title: 'Content That Performs',
    icon: Flame,
    desc: 'Content designed for reach, engagement, retention and measurable business outcomes.',
  },
  {
    title: 'PR & Media Understanding',
    icon: Megaphone,
    desc: 'Strong expertise in media visibility, reputation management, public relations and communication strategy.',
  },
  {
    title: 'SEO Focus',
    icon: Search,
    desc: 'Technical SEO, content optimization and search visibility strategies designed for long-term organic growth.',
  },
  {
    title: 'Direct Client Support',
    icon: Headset,
    desc: 'Dedicated communication and regular project updates throughout the engagement.',
  },
  {
    title: 'End-to-End Execution',
    icon: Award,
    desc: 'From planning and production to publishing, promotion and reporting — everything managed under one roof.',
  },
];

export default function AboutView() {
  const [selectedCoreValue, setSelectedCoreValue] = useState<number | null>(null);
  const [activeWhyChooseIndex, setActiveWhyChooseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWhyChooseIndex((prev) => (prev + 1) % 8);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: '150+', label: 'Brands Propelled', desc: 'From local startups to venture-backed global enterprises.' },
    { value: '75M+', label: 'Video Audiences reached', desc: 'Cinematic reels, YouTube shorts, and TikTok virality.' },
    { value: '180%', label: 'Average SEO Increase Rate', desc: 'Calculated organic search traffic surge over 6 months.' },
    { value: '12+', label: 'Creative Engineers', desc: 'An elite squad of designers, video artists, & developers.' },
  ];

  const coreValues = [
    {
      icon: <Sparkles className="w-5 h-5 text-[#1d4ed8]" />,
      title: 'Craftsmanship over Defaults',
      details: 'We reject standard templates and automated presets. Every custom frame, typography layout, and line of code is manually polished to command maximum optical focus.',
    },
    {
      icon: <Zap className="w-5 h-5 text-[#1d4ed8]" />,
      title: 'High-Vibrancy Energy',
      details: 'Digital media is not static. Our concepts are clinical, bright, and aggressively tailored to pierce through typical screen scrolling fatigue.',
    },
    {
      icon: <Award className="w-5 h-5 text-[#1d4ed8]" />,
      title: 'Durable Authority',
      details: 'We build digital properties that retain search equity and high content recall for years. True marketing converts instant hype into long-term organic leverage.',
    },
  ];

  const milestones = [
    {
      year: '2019',
      title: 'Creative Media Services',
      text: 'Started professional work in video editing, graphic design, content production and digital media support for creators, local businesses and independent brands.'
    },
    {
      year: '2021',
      title: 'Digital Growth Expansion',
      text: 'Expanded into social media management, SEO, content strategy and audience growth campaigns across multiple industries.'
    },
    {
      year: '2023',
      title: 'PR & Media Relations',
      text: 'Added public relations, media outreach, reputation management and strategic visibility campaigns for entrepreneurs, public figures and organizations.'
    },
    {
      year: '2024',
      title: 'Political Communication & Outreach',
      text: 'Worked on political digital outreach initiatives, influencer collaborations, WhatsApp engagement campaigns, content production and online audience development.'
    },
    {
      year: '2025',
      title: 'Renowned Media',
      text: 'Unified media production, branding, PR, digital marketing, political communication and content strategy services under the Renowned Media identity.'
    },
  ];

  return (
    <div className="py-12 space-y-20 max-w-7xl mx-auto px-6">
      {/* Introduction Hero Block & Centered Content */}
      <section className="max-w-3xl mx-auto space-y-12 text-center" id="about-hero-section">
        <div className="space-y-6">
          <span className="font-mono text-xs font-bold text-[#1d4ed8] bg-[#1d4ed8]/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-block">
            ABOUT RENOWNED MEDIA
          </span>
          <h1 className="font-sans text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Elevating Brands through <span className="text-[#1d4ed8]">Creativity</span> & Strategic Growth
          </h1>
        </div>
        
        <div className="space-y-6 font-sans text-sm md:text-base text-slate-600 leading-relaxed text-left">
          <p>
            Renowned Media is a full-service media, branding and digital growth agency dedicated to helping creators, public figures, businesses and organizations build visibility, authority and audience trust in the digital era.
          </p>
          <p>
            Founded on years of practical experience in media, content production and digital communication, Renowned Media brings together strategy, creativity and execution under one roof. Our team works across content creation, social media management, public relations, SEO, political communication, personal branding and audience growth initiatives.
          </p>
          <p>
            We believe that strong brands are not built through content alone. They are built through consistent messaging, strategic positioning, meaningful audience engagement and long-term credibility. Every project we undertake is designed to strengthen brand perception, increase visibility and create measurable business impact.
          </p>
          <p>
            From entrepreneurs and creators to journalists, public figures and growing businesses, we help our clients navigate the evolving digital landscape with clarity, creativity and purpose.
          </p>
        </div>

        {/* Vision & Mission grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-200 text-left">
          <div className="space-y-3 bg-slate-50/50 rounded-xl p-6 border border-slate-200/60 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-[#1d4ed8]" />
            <h3 className="font-sans text-base font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1d4ed8]" />
              OUR VISION
            </h3>
            <p className="font-sans text-xs text-slate-600 leading-relaxed">
              To become a trusted media and digital growth partner for brands, creators and organizations seeking meaningful visibility and sustainable growth.
            </p>
          </div>
          
          <div className="space-y-3 bg-slate-50/50 rounded-xl p-6 border border-slate-200/60 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-[#1d4ed8]" />
            <h3 className="font-sans text-base font-extrabold text-[#1d4ed8] tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1d4ed8]" />
              OUR MISSION
            </h3>
            <p className="font-sans text-xs text-slate-600 leading-relaxed">
              To combine media expertise, strategic communication and creative execution to help clients build influence, expand reach and establish lasting authority across modern digital platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Board */}
      <section className="bg-slate-50/50 rounded-xl border border-slate-200/60 p-8 md:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(29, 78, 216, 0.05)', borderColor: '#1d4ed8' }}
              key={idx}
              className="space-y-2 bg-white rounded-lg p-6 border border-slate-200 transition-all duration-300 shadow-sm"
            >
              <h4 className="font-sans text-3xl font-extrabold text-[#1d4ed8] tracking-tight">
                {stat.value}
              </h4>
              <p className="font-sans font-bold text-sm text-slate-800 leading-snug">
                {stat.label}
              </p>
              <p className="font-sans text-xs text-slate-600 leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy & Values */}
      <section className="space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <h3 className="font-sans text-2xl font-extrabold text-slate-900">Core Values Built To Scale</h3>
          <p className="text-sm text-slate-600">We align behind high-fidelity protocols designed to yield direct business leverage.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coreValues.map((val, idx) => {
            const active = selectedCoreValue === idx;
            return (
              <div
                key={idx}
                onClick={() => setSelectedCoreValue(active ? null : idx)}
                className={`p-6 border rounded-xl transition-all cursor-pointer select-none ${
                  active 
                    ? 'bg-[#1d4ed8] text-white border-[#1d4ed8] shadow-[0_10px_25px_rgba(29,78,216,0.15)]' 
                    : 'bg-white hover:bg-slate-50/50 border-slate-200 hover:border-blue-300'
                }`}
                id={`core-value-${idx}`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                  active ? 'bg-white/15 text-white' : 'bg-blue-50 text-[#1d4ed8]'
                }`}>
                  {active ? <Sparkles className="w-5 h-5 text-white" /> : val.icon}
                </div>
                <h4 className="font-sans font-bold text-base mb-2">{val.title}</h4>
                <p className={`font-sans text-xs leading-relaxed ${active ? 'text-white/90' : 'text-slate-600'}`}>
                  {val.details}
                </p>
                <div className="mt-4 flex items-center justify-between text-[11px] font-bold tracking-wider uppercase font-mono">
                  <span>{active ? 'Hide details' : 'Click to highlight'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Milestones / Timeline */}
      <section className="space-y-12">
        <div className="text-center max-w-xl mx-auto">
          <h3 className="font-sans text-2xl font-extrabold text-slate-900">Historic Evolution</h3>
        </div>

        <div className="relative border-l border-slate-200 ml-4 md:ml-32 md:space-y-8 space-y-12">
          {milestones.map((ml, idx) => (
            <div key={idx} className="relative pl-8 md:pl-16">
              {/* Year marker box for large screen */}
              <div className="hidden md:flex absolute right-full mr-8 top-1 items-center justify-end w-24">
                <span className="font-mono text-sm font-bold text-[#1d4ed8]">{ml.year}</span>
              </div>
              
              {/* Node dot */}
              <div className="absolute left-0 top-1.5 -translate-x-1/2 w-4.5 h-4.5 rounded-full border-4 border-white bg-[#dc2626] shadow-sm" />

              <div className="space-y-1.5 max-w-xl">
                <span className="md:hidden font-mono text-xs font-bold text-[#1d4ed8] block">
                  {ml.year}
                </span>
                <h4 className="font-sans font-extrabold text-base text-slate-900 leading-tight">
                  {ml.title}
                </h4>
                <p className="font-sans text-xs text-slate-600 leading-relaxed">
                  {ml.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Renowned Media Section */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h3 className="font-sans text-2xl font-extrabold text-slate-900">Why Choose Renowned Media</h3>
          <p className="text-sm text-slate-600">
            We engineer premier growth and content experiences tailored for leading Indian creators, startups, local businesses, and SMEs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {WHY_CHOOSE_ITEMS.map((item, idx) => {
            const isActive = idx === activeWhyChooseIndex;
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className={`bg-white rounded-xl border p-6 flex flex-col justify-between transition-all duration-500 text-left h-full ${
                  isActive
                    ? 'border-[#1d4ed8] shadow-[0_4px_25px_rgba(29,78,216,0.12)] scale-[1.01]'
                    : 'border-slate-200/80 hover:border-[#1d4ed8]/40 shadow-sm hover:shadow-md'
                }`}
                id={`about-why-choose-card-${idx}`}
              >
                <div className="space-y-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-500 ${
                    isActive ? 'bg-[#1d4ed8] text-white border border-[#1d4ed8]' : 'bg-blue-50 text-[#1d4ed8] border border-blue-100'
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-sans font-extrabold text-base text-slate-900 leading-tight">{item.title}</h4>
                    <p className="font-sans text-xs text-slate-600 leading-relaxed min-h-[48px]">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
