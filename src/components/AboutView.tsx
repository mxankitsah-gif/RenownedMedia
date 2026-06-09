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
    { year: '2021', title: 'Agency Blueprint', text: 'Founded with a tight core of 3 artists targeting precision video editing & technical search auditing.' },
    { year: '2023', title: 'Scalable Production Expansion', text: 'Moved into custom studio shooting layouts. Developed the proprietary "Renowned Velocity" search ranking program.' },
    { year: '2025', title: 'Global Campaign Execution', text: 'Secured high-concept branding and content production mandates across North America, Europe, and Asia.' },
  ];

  return (
    <div className="py-12 space-y-20 max-w-7xl mx-auto px-6">
      {/* Introduction Hero Block */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="font-mono text-xs font-bold text-[#1d4ed8] bg-[#1d4ed8]/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Who We Are
          </span>
          <h1 className="font-sans text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
            We synthesize strategy, <span className="text-[#1d4ed8]">aesthetics</span>, and high-performance search execution.
          </h1>
          <p className="font-sans text-body-lg text-slate-600 max-w-2xl leading-relaxed">
            {AGENCY_DETAILS.fullSummary} We operate at the intersection of cinematic video production and empirical SEO engineering. Our mission is direct: construct high-authority identities that capture instant user trust.
          </p>
        </div>
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200/60 rounded-xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
          <h3 className="font-sans font-bold text-lg text-slate-900 mb-4">Our Operations Headquarters</h3>
          <p className="font-sans text-sm text-slate-600 leading-relaxed mb-6">
            Establishing our creative hub in Ghaziabad, we service brands globally with continuous high-volume digital assets.
          </p>
          <div className="space-y-3 font-mono text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#1d4ed8] shrink-0" />
              <span>{AGENCY_DETAILS.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#1d4ed8] shrink-0" />
              <span>Standard Operations: 09:00 - 18:00 IST</span>
            </div>
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
              id={`about-why-choose-card-${idx}`}
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="font-sans font-extrabold text-base text-slate-900">{item.title}</h4>
                <p className="font-sans text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
