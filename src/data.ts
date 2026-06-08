/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, ProjectItem, TeamMember } from './types';

export const HERO_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuCWJLef5fVy7vHZ1E-eIdQ6UwhZkeN3-gLFg4J0IuH31XvANDjVvwLD8kIdBYuqF6vzB9lZ8wQ4ikKkMDugpdwk7usGvM_Jo4eUNdO1SswzBh8Bf0eZ3TczCEUX39273s3QDMwHoFhWoxWQ_sK5ZRXeJ8G_pkVJK_3bRJMAM9HxbRGaRsxvR-enHoBgBBy_M4_RHlxAMJDaStdAhc6QlXRU-E5T7QxpGxSNTycDGwNMHTZS_wvL784yP3wvWgkjL-UpR7tWQZrE9A";

export const SERVICES: ServiceItem[] = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Services',
    description: 'Performance-driven marketing campaigns, brand placement, and local search systems engineered to capture direct market authority.',
    iconName: 'campaign',
    deliverables: [
      'SEO Strategy & Optimization',
      'Local SEO',
      'Google Business Profile Management',
      'Social Media Management',
      'Social Media Marketing',
      'Influencer Marketing',
      'Email Marketing',
      'WhatsApp Marketing',
      'SMS Marketing',
      'Online Reputation Management (ORM)'
    ],
    duration: 'Setup: 3-7 Business Days | Ongoing Management'
  },
  {
    id: 'content-production',
    title: 'Content Production',
    description: 'Cinematic editing, short-form creative loops, script engineering, and end-to-end studio video/audio storytelling pipelines.',
    iconName: 'videocam',
    deliverables: [
      'Video Editing',
      'Short Form Content (Reels & Shorts)',
      'Long Form Video Production',
      'Podcast Production',
      'Photography',
      'Product Shoots',
      'Content Strategy',
      'Script Writing',
      'Copywriting'
    ],
    duration: '2-5 Business Days / Asset Delivery'
  },
  {
    id: 'design-branding',
    title: 'Design & Branding',
    description: 'High-prestige visual style frameworks, core monograms, brand identities, and high-CTR custom digital banners.',
    iconName: 'lightbulb',
    deliverables: [
      'Graphic Design',
      'Logo Design',
      'Brand Identity Design',
      'Thumbnail Design'
    ],
    duration: '4-8 Business Days Core Phase'
  },
  {
    id: 'website-development',
    title: 'Website & Development',
    description: 'Speed-optimized, responsive, and custom-styled web systems designed to maximize user engagement and intake conversions.',
    iconName: 'important_devices',
    deliverables: [
      'Website Design',
      'Website Development',
      'WordPress Development',
      'Landing Page Design',
      'E-commerce Website Development',
      'Website Maintenance',
      'UI/UX Design'
    ],
    duration: '7-14 Business Days Launch Schedule'
  },
  {
    id: 'paid-advertising',
    title: 'Paid Advertising',
    description: 'Strategic multi-channel paid ad management designed to acquire high-intent users with absolute budget transparency.',
    iconName: 'analytics',
    deliverables: [
      'Google Ads Management',
      'Meta Ads Management',
      'YouTube Ads',
      'LinkedIn Ads',
      'Remarketing Campaigns'
    ],
    duration: 'Campaign Setup: 3-5 Business Days'
  },
  {
    id: 'analytics-reporting',
    title: 'Analytics & Reporting',
    description: 'Granular tracking instrumentation, visitor heat-mapping logs, and clear ROI attribution reporting models.',
    iconName: 'timeline',
    deliverables: [
      'Website Analytics',
      'SEO Reporting',
      'Social Media Analytics',
      'Campaign Performance Reports',
      'Conversion Tracking'
    ],
    duration: 'Bi-Weekly Logs & Real-Time Dashboards'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'seo-local-pack',
    title: 'Regional Dominance SEO Blueprint',
    description: 'Multi-location local SEO campaign optimizing regional search rankings and map pack dominance for leading healthcare facilities.',
    category: 'SEO & Local SEO',
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80',
    client: 'Apex Healthcare Group',
    year: '2026',
    metrics: '+245% Search Leads',
    challenge: 'Apex Healthcare operated 12 premium clinics but had low Google Map rankings and keyphrase visibility against large corporate networks.',
    solution: 'Configured optimized address directory alignments, established high-authority local citations, structured medical service content pillars, and streamlined active patient reviews funnels.',
    clientIndustry: 'Healthcare & Wellbeing',
    servicesDelivered: ['GBP Optimization', 'Local SEO Citations', 'Pillar Content Development', 'Maps Rank Tracking']
  },
  {
    id: 'luxury-ecom-web',
    title: 'Immersive E-commerce Flagship',
    description: 'A high-performance WebGL-infused luxury e-commerce platform designed to showcase bespoke jewelry collections with ultra-fluid layouts.',
    category: 'Website Design & Development',
    img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80',
    client: 'Vespera Lux',
    year: '2025',
    metrics: '+52% Conversion Rate',
    challenge: 'Vespera Lux relied on a slow Shopify template that diluted their high-end branding with choppy animations and slow load times.',
    solution: 'Engineered a headless custom architecture with Next.js and animated page states, maintaining average load speeds under 1.5 seconds worldwide.',
    clientIndustry: 'High-End Fashion & Jewelry',
    servicesDelivered: ['UI/UX Design', 'Next.js Development', 'Speed Optimization', 'Custom Checkout Flows']
  },
  {
    id: 'reels-momentum',
    title: 'Momentum High-Octane Reel Campaign',
    description: 'Cinematic micro-reels highlighting elite athletic trainers in high-motion environments engineered for immediate retention spikes.',
    category: 'Video Editing & Content Production',
    img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&auto=format&fit=crop&q=80',
    client: 'Catalyst Sports',
    year: '2026',
    metrics: '4.8M Organic Views',
    challenge: 'Catalyst Sports struggled to capture immediate viewer attention in the first 3 seconds of their vertical content.',
    solution: 'Deployed high-cadence kinetic sound hooks, bespoke cinematic color grading, and stylized motion captions with optimized algorithmic formatting.',
    clientIndustry: 'Premium Athletic Apparel',
    servicesDelivered: ['Video Editing', 'Short Form Content Curation', 'Script Engineering', 'Audio Design']
  },
  {
    id: 'executive-podcast',
    title: 'Prime Podcast Syndicate',
    description: 'End-to-end launch and production syndication of a high-tier executive podcast interviewing venture capital founders.',
    category: 'Podcast Production',
    img: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&auto=format&fit=crop&q=80',
    client: 'Founders & Builders',
    year: '2025',
    metrics: 'Top 10 Business Chart',
    challenge: 'Founders & Builders needed studio-quality audio-visual capture and a reliable multi-channel distribution model to match their high-status executive guests.',
    solution: 'Orchestrated professional microphones and cameras in a soundproofed custom studio, mastered dialogue levels, and automated clean snippet exports.',
    clientIndustry: 'Executive Venture Capital',
    servicesDelivered: ['Multi-Cam Recording', 'Dialogue Mastering', 'Distribution Setup', 'Social Snippet Crops']
  },
  {
    id: 'aesthetic-grid',
    title: 'Aesthetic Grid Supremacy',
    description: 'Visual identity and growth campaign elevating skin science and premium cosmetics to drive high-intent product sales.',
    category: 'Social Media Management',
    img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=80',
    client: 'Luminary Skincare',
    year: '2026',
    metrics: '+310% Active Reach',
    challenge: 'Luminary had premium formulas but their grid lacked visual coherence, looking disorganized and failing to convert profile visitors.',
    solution: 'Curated a pristine 3-grid editorial aesthetic style, automated localized community interaction prompts, and published weekly interactive education guides.',
    clientIndustry: 'Premium Beauty & Cosmetics',
    servicesDelivered: ['Grid Aesthetic Architecture', 'Content Calendar Planning', 'Active Community Outreach']
  },
  {
    id: 'residential-launch',
    title: 'Elite Residential Launch Network',
    description: 'High-conversion lead capture strategy leveraging automated drip campaigns and webhook instant responses for premium property sales.',
    category: 'Digital Marketing Campaigns',
    img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&auto=format&fit=crop&q=80',
    client: 'Elevate Group',
    year: '2025',
    metrics: '42 Premium Villa Sales',
    challenge: 'Elevate was generating a high volume of cold, unqualified inquiries that drained in-house sales team resources.',
    solution: 'Structured a qualifying chatbot workflow connected with real-time CRM webhooks, combined with highly targeted high-intent email newsletter drip runs.',
    clientIndustry: 'Luxury Property & Real Estate',
    servicesDelivered: ['Full-Funnel Campaign Strategy', 'WhatsApp Bot Workflows', 'Email Automation']
  },
  {
    id: 'aerospace-brand',
    title: 'Brand Identity Systems & Design Suite',
    description: 'High-prestige corporate visual guidelines and iconic monogram logo suite built for an aerospace research firm.',
    category: 'Branding & Design',
    img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=80',
    client: 'Aether Systems',
    year: '2026',
    metrics: 'Unified Brand Launch',
    challenge: 'Aether Systems was launching a major funding round but lacked a polished corporate visual signature, relying on inconsistent, basic typography.',
    solution: 'Devised a clean geometric monogram representational of orbital paths, formulated a detailed style guide, and produced presentation slide designs.',
    clientIndustry: 'Aerospace Deep Tech',
    servicesDelivered: ['Logo Design Suite', 'Brand Guidelines Manual', 'Investor Slide Designs']
  },
  {
    id: 'performance-ads',
    title: 'Performance PPC Conquests',
    description: 'High-intent pay-per-click and retargeting ads optimized to capture and nurture financial services leads.',
    category: 'Paid Advertising',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    client: 'FinNexus Wealth',
    year: '2025',
    metrics: '6.5x Ad Spend ROI',
    challenge: 'FinNexus was experiencing extremely high cost-per-lead rates on general Google search ads with low-quality submission rates.',
    solution: 'Implemented precise negative keyword siloing, restructured exact-match ad segments, and directed traffic to high-performance landing pages.',
    clientIndustry: 'Fintech & Asset Management',
    servicesDelivered: ['Google & Meta Ads Management', 'Retargeting Funnels', 'PPC Silo Architectures']
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'joanne',
    name: 'Joanne Williams',
    role: 'Founder & CEO',
    img: 'https://lh3.googleusercontent.com/aida/AP1WRLvXV8tUbpf_RAQDwnUSTe3o1M8LAbPwjP2dKtCWL25dxx5hg1nkIEEEGXmCLq2qBCo9k70HhjZVX5mvYz1gVOGsDOGyCKa6ZZLimPT7VzgBOgt6ZaoBzQ8UuZ1hPpQWm0xHkkI2Y6vhcQSmEXl4Y3wexaF-ELIUxqKe1PR5uneoKz7JzHfmuz_akRdr1T1G0IITl2vaJUYnQTxj0gtxhw3WopN2nBIHZGRlX9mEceov17_fiNjck6TDCw',
    bio: 'Joanne leads the creative paradigm at Renowned Media. With over 12 years of experience building cross-channel visibility campaigns, she ensures our clients maintain an elite digital authority.',
    specialties: ['Brand Architecture', 'Investor Pitching', 'Creative Direction']
  },
  {
    id: 'fred',
    name: 'Fred Buster',
    role: 'Director OPS',
    img: 'https://lh3.googleusercontent.com/aida/AP1WRLhouVq75X2C_gpHwzDeDpVBFFhsB1YYoMtzX77nlDk5HX7kOEsIVaPxdnxGlJxKf_ZvgOSpPn086w1Fio0DtCM0w81Y3bgDzHpegUaTMn5Bnk0w9meGyJlsxZ-Ke-UgEDVMDJLYWPgV_bzvX0DVz5O3FcFXX2hWLHKazVcEq8uGegfSJy29RtyZUg6EYjHLhHg6I6Pv3JFarNLmN-ztg416KLNxYW8r5jsPOfwB2CDtsSmLjK36UFuFg',
    bio: 'Fred keeps the engine running. He coordinates on-set production routines, manages multi-team resource pipelines, and maintains pristine deliverable timelines for all digital assets.',
    specialties: ['Resource Orchestration', 'Live Event Production', 'Agile Operations']
  },
  {
    id: 'lisa',
    name: 'Lisa Hoffman',
    role: 'Director HR',
    img: 'https://lh3.googleusercontent.com/aida/AP1WRLtYNNwO-_--Q207UyoQDhFWyQijI-k9XEGpLbZUsAHXj48QZH76TDEGQlfT4E0VaFIuk_z8iQh7Sh3F7xQBkwM-1XYK16Xq_I1dhu5p6a_6H-iLwsFUfLYKKY0zmOW22Ml-d5DLgPAWXOehe9TsciBvZe-tuDccL5VUDo47EvrJEye25uFuvwdxdBc3U6QaiO19Lp7obe0m9cXFS69JesncvpKmkOaxWBV34ECBaBDipzImvD9xpIxt',
    bio: 'Lisa cultivates a culture of passion, craftsmanship, and extreme focus. She recruits top-tier global operators, video artists, design directors, and tech-savvy marketers to our ranks.',
    specialties: ['Talent Sourcing', 'Workplace Culture', 'Continuous Growth Protocols']
  }
];

export const AGENCY_DETAILS = {
  address: '887, Nitikhand-1, Indirapuram, Ghaziabad-201014',
  email: 'renownedmedia@outlook.in',
  phone1: '+91-882-899-8296',
  phone2: '+91-983-384-9337',
  fullSummary: 'From digital PR to content production, Renowned Media helps brands grow visibility, authority and audience engagement across modern platforms.'
};
