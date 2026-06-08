/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Award, Zap, Sparkles, Clock, Globe, ArrowRight, Coins, Flame, TrendingUp, Headset } from 'lucide-react';
import { motion } from 'motion/react';
import { AGENCY_DETAILS } from '../data';

export default function AboutView() {
  const [selectedCoreValue, setSelectedCoreValue] = useState<number | null>(null);

  const stats = [
    { value: '150+', label: 'Brands Propelled', desc: 'From local startups to venture-backed global enterprises.' },
    { value: '75M+', label: 'Video Audiences reached', desc: 'Cinematic reels, YouTube shorts, and TikTok virality.' },
    { value: '180%', label: 'Average SEO Increase Rate', desc: 'Calculated organic search traffic surge over 6 months.' },
    { value: '12+', label: 'Creative Engineers', desc: 'An elite squad of designers, video artists, & developers.' },
  ];

  const coreValues = [
    {
      icon: <Sparkles className="w-5 h-5 text-[#D4AF37]" />,
      title: 'Craftsmanship over Defaults',
      details: 'We reject standard templates and automated presets. Every custom frame, typography layout, and line of code is manually polished to command maximum optical focus.',
    },
    {
      icon: <Zap className="w-5 h-5 text-[#F5D76E]" />,
      title: 'High-Vibrancy Energy',
      details: 'Digital media is not static. Our concepts are clinical, bright, and aggressively tailored to pierce through typical screen scrolling fatigue.',
    },
    {
      icon: <Award className="w-5 h-5 text-[#D4AF37]" />,
      title: 'Durable Authority',
      details: 'We build digital properties that retain search equity and high content recall for years. True marketing converts instant hype into long-term organic leverage.',
    },
  ];

  const milestones = [
    { year: '2021', title: 'Agency Blueprint', text: 'Founded with a tight core of 3 artists targeting precision video editing & technical search auditing.' },
    { year: '2023', title: 'Scalable Production Expansion', text: 'Moved into custom studio shooting layouts. Developed the proprietary "Renowned Velocity" search ranking program.' },
    { year: '2025', title: 'Global Campaign Execution', text: 'Secured high-concept branding and content production mandates across North America, Europe, and Asia.' },
  ];

  return (
    <div className="py-12 space-y-20 max-w-7xl mx-auto px-6">
      {/* Introduction Hero Block */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="font-mono text-xs font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Who We Are
          </span>
          <h2 className="font-sans text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
            We synthesize strategy, <span className="text-[#D4AF37]">aesthetics</span>, and high-performance search execution.
          </h2>
          <p className="font-sans text-body-lg text-[#BFB9AF] max-w-2xl leading-relaxed">
            {AGENCY_DETAILS.fullSummary} We operate at the intersection of cinematic video production and empirical SEO engineering. Our mission is direct: construct high-authority identities that capture instant user trust.
          </p>
        </div>
        <div className="lg:col-span-5 bg-white/[0.02] backdrop-blur-md border border-[#D4AF37]/15 rounded-xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-36 h-36 bg-[#D4AF37]/5 rounded-full blur-2xl" />
          <h3 className="font-sans font-bold text-lg text-white mb-4">Our Operations Headquarters</h3>
          <p className="font-sans text-sm text-[#BFB9AF] leading-relaxed mb-6">
            Establishing our creative hub in Ghaziabad, we service brands globally with continuous high-volume digital assets.
          </p>
          <div className="space-y-3 font-mono text-xs text-white">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>{AGENCY_DETAILS.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>Standard Operations: 09:00 - 18:00 IST</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Board */}
      <section className="bg-white/[0.01] backdrop-blur-md rounded-xl border border-[#D4AF37]/15 p-8 md:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              whileHover={{ y: -5, boxShadow: '0 0 20px rgba(212, 175, 55, 0.15)', borderColor: 'rgba(212, 175, 55, 0.45)' }}
              key={idx}
              className="space-y-2 bg-white/[0.02] rounded-lg p-6 border border-[#D4AF37]/10 transition-all duration-300 shadow-sm"
            >
              <h4 className="font-sans text-3xl font-extrabold text-[#D4AF37] tracking-tight">
                {stat.value}
              </h4>
              <p className="font-sans font-bold text-sm text-white leading-snug">
                {stat.label}
              </p>
              <p className="font-sans text-xs text-[#BFB9AF] leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy & Values */}
      <section className="space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <h3 className="font-sans text-2xl font-extrabold text-white">Core Values Built To Scale</h3>
          <p className="text-sm text-[#BFB9AF]">We align behind high-fidelity protocols designed to yield direct business leverage.</p>
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
                    ? 'bg-[#D4AF37] text-[#0A0A0A] border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.25)]' 
                    : 'bg-white/[0.02] hover:bg-white/[0.05] border-[#D4AF37]/15 hover:border-[#D4AF37]/50'
                }`}
                id={`core-value-${idx}`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                  active ? 'bg-black/10 text-on-primary-container' : 'bg-white/[0.04]'
                }`}>
                  {val.icon}
                </div>
                <h4 className="font-sans font-bold text-base mb-2">{val.title}</h4>
                <p className={`font-sans text-xs leading-relaxed ${active ? 'text-[#0A0A0A]/90' : 'text-[#BFB9AF]'}`}>
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
          <h3 className="font-sans text-2xl font-extrabold text-white">Historic Evolution</h3>
        </div>

        <div className="relative border-l border-[#D4AF37]/20 ml-4 md:ml-32 md:space-y-8 space-y-12">
          {milestones.map((ml, idx) => (
            <div key={idx} className="relative pl-8 md:pl-16">
              {/* Year marker box for large screen */}
              <div className="hidden md:flex absolute right-full mr-8 top-1 items-center justify-end w-24">
                <span className="font-mono text-sm font-bold text-[#D4AF37]">{ml.year}</span>
              </div>
              
              {/* Node dot */}
              <div className="absolute left-0 top-1.5 -translate-x-1/2 w-4.5 h-4.5 rounded-full border-4 border-[#0a0a0a] bg-[#D4AF37] shadow-sm" />

              <div className="space-y-1.5 max-w-xl">
                <span className="md:hidden font-mono text-xs font-bold text-[#D4AF37] block">
                  {ml.year}
                </span>
                <h4 className="font-sans font-extrabold text-base text-white leading-tight">
                  {ml.title}
                </h4>
                <p className="font-sans text-xs text-[#BFB9AF] leading-relaxed">
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
          <h3 className="font-sans text-2xl font-extrabold text-white">Why Choose Renowned Media</h3>
          <p className="text-sm text-[#BFB9AF]">
            We engineer premier growth and content experiences tailored for leading Indian creators, startups, local businesses, and SMEs.
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
              id={`about-why-choose-card-${idx}`}
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
      </section>
    </div>
  );
}
