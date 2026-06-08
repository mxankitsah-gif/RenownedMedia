/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, ProjectItem, TeamMember, TestimonialItem } from './types';

export const HERO_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuCWJLef5fVy7vHZ1E-eIdQ6UwhZkeN3-gLFg4J0IuH31XvANDjVvwLD8kIdBYuqF6vzB9lZ8wQ4ikKkMDugpdwk7usGvM_Jo4eUNdO1SswzBh8Bf0eZ3TczCEUX39273s3QDMwHoFhWoxWQ_sK5ZRXeJ8G_pkVJK_3bRJMAM9HxbRGaRsxvR-enHoBgBBy_M4_RHlxAMJDaStdAhc6QlXRU-E5T7QxpGxSNTycDGwNMHTZS_wvL784yP3wvWgkjL-UpR7tWQZrE9A";

export const SERVICES: ServiceItem[] = [
  {
    id: 'video-editing',
    title: 'Video Editing',
    description: 'High-quality edits, reels, shorts and cinematic content designed for maximum engagement.',
    iconName: 'movie_edit',
    deliverables: ['Custom color grading', 'Sound design & mixing', 'Dynamic subtitling', 'Platform formatting (9:16 & 16:9)'],
    duration: '2-4 business days'
  },
  {
    id: 'seo-strategy',
    title: 'SEO Strategy',
    description: 'Boost search visibility with modern SEO strategies, keyword optimization and content ranking.',
    iconName: 'troubleshoot',
    isWide: true,
    deliverables: ['On-page auditing', 'Keyword gap analysis', 'Technical SEO configuration', 'Monthly rank tracking'],
    duration: 'Continuous / Monthly'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Performance-driven campaigns that help brands reach the right audience faster.',
    iconName: 'campaign',
    deliverables: ['Paid advertising strategy', 'Funnel mapping', 'PPC management', 'A/B landing page testing'],
    duration: 'Ongoing campaign setup'
  },
  {
    id: 'social-media',
    title: 'Social Media Growth',
    description: 'Content strategies built to increase reach, followers and audience engagement.',
    iconName: 'trending_up',
    deliverables: ['Profile optimization', 'Daily engagement workflows', 'Content calendar curation', 'Audience growth analysis'],
    duration: 'Monthly management'
  },
  {
    id: 'content-production',
    title: 'Content Production',
    description: 'Professional shooting, studio production and branded content creation for modern platforms.',
    iconName: 'videocam',
    deliverables: ['Studio camera shoots', 'Creative direction', 'Script & storyboard generation', 'Asset organization'],
    duration: 'By project roadmap'
  },
  {
    id: 'brand-strategy',
    title: 'Brand Strategy',
    description: 'Build a strong digital identity with modern branding, positioning and creative direction.',
    iconName: 'lightbulb',
    deliverables: ['Brand positioning playbook', 'Logo & color palette system', 'Typography hierarchy guidelines', 'Voice and tone statement'],
    duration: '2-3 weeks core phase'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'product-shoot',
    title: 'Product Shoot Campaign',
    description: 'Full production, shooting and editing for a product launch campaign.',
    category: 'Video Production',
    img: 'https://lh3.googleusercontent.com/aida/AP1WRLsJQiKymeJ9sY42aLaBfyiI5LC4Bq5WYkfP5Q7nZIPvxpwAUQ_JLGekjCYvQaZQGWKRzjyt7_CuRjp1800szvG3926IZLlvcStUbx-q18-_wzzBVnTNc8n0CvBbmUPyzbgOt30CPoWt5Ebb2qbZR_sYEOGw29CWOCV1_Kc4PU0fO7DjbKv2vAwZTHapj-D_a97qSeyEJz4jt9E2weyx1xZeaKODPBWhgMKhL6lFu2dHxSR9ER_0TUNc',
    client: 'Velo Apparel',
    year: '2025',
    metrics: '+240% Engagement',
    challenge: 'Velo Apparel needed to launch their premium street line with an aesthetic that resonated with urban runners and enthusiasts, but faced a compressed timeline and a lack of authentic lookbooks.',
    solution: 'We ran an intense 2-day on-site production shoot focusing on high-speed kinetic filming, followed by a cinematic color grade and high-energy motion graphics tailored specifically for Reels, Shorts, and premium web displays.'
  },
  {
    id: 'instagram-growth',
    title: 'Instagram Growth Strategy',
    description: 'Social media strategy and content planning that increased engagement by 300%.',
    category: 'Social Media',
    img: 'https://lh3.googleusercontent.com/aida/AP1WRLsVMklzr4YbGtbKKW6VHkhnXi3zULnY4vth09XEGkxn4F4D5c9nMlJNEZ94pjTCY0Pdt1gE_nVYsq28FQL5pYYCepivQp3b4fsTlZVax42s1jVNZ2TpnBjb5Fb2c5ymefQDfvJehR3U85aSkV4ElvwhZFGn0SyC9HaSuxwLfHyjs82tErPW3_lodmpm0LVqNivmmxtkwRCLMKxrn2Qg02KY9kwdQLu83v5-pe7Jdnx-z8tHz6s2cuJRdw',
    client: 'Aurora Tech',
    year: '2025',
    metrics: '+300% Engagement',
    challenge: 'Aurora Tech had high-end consumer hardware but low-key community engagement. Their Instagram layout looked static, like a stock library with little interaction.',
    solution: 'We reconstructed their account with interactive educational reels, bold custom product mockups, and structured carousels highlighting micro-features, while driving organic community conversations.'
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity Design',
    description: 'Complete brand identity design including logo, guidelines and brand assets.',
    category: 'Branding',
    img: 'https://lh3.googleusercontent.com/aida/AP1WRLti6zxr2ib0PJQnYKU6qmzGY5Hvxnvim6mHYM4SnBCVN8U8s5SZ4JgxdSzUpwEgER3TTMm9EmU6WE4NdEm8XAkAo_ZlD0cacBKFY3mJy8IksktL0EDtzgXpjWVfrsmLK4I8iZNc3_EPQChVzMcl9regg2CVMFGoSrvgNc9GQVflMH3svEsnZBMHVv6f8j4XL60ac3M2Cp0f9s7XOcbKenuO1GaiOOf-jJKFgNopu3x9SfMsMtQTK0eAfw',
    client: 'Aurora Space',
    year: '2024',
    metrics: 'Brand Launch Ready',
    challenge: 'Aurora Space wanted a powerful identity that communicates futuristic deep-tech aerospace solutions, while maintaining developer-friendly warmth and modern simplicity.',
    solution: 'We designed a complete system with an iconic monogram logo, a bright luminous accent theme with cosmic slate deep tones, custom typography rules, and interactive slide templates.'
  },
  {
    id: 'seo-optimization',
    title: 'SEO Optimization Campaign',
    description: 'Advanced SEO strategy that improved search rankings and organic traffic by 180%.',
    category: 'SEO & Marketing',
    img: 'https://lh3.googleusercontent.com/aida/AP1WRLv5Ct_cZ44BpohgN_uOtPiYl5Usn4U0rcLE2TekG2WwpNebex9xLMKhloKyVKNACUn4E-rP7QE_nu6b_887IfCb3IWWmj5W4XuPCregxta_e8sdPzDNqwAhuuqQ5uJnJBKpCRk3X5DgEaQSX6DtLuNY4Ok3Uxb41i6anNweAaBcMNmA3_JJd4IoDOEqWkItK8kcwWzchNTYPlLbUVtFTw30UKZ7xpYL9zqpQobNULLRA47CvepTxKzEAg',
    client: 'FinSphere',
    year: '2024',
    metrics: '+180% Traffic Growth',
    challenge: 'FinSphere is a fast-growing fintech company, but they relied almost entirely on costly search Ads for customer acquisition, lacking organic discoverability.',
    solution: 'We optimized 45 of their primary high-intent landing pages, solved deep technical crawling bottlenecks, structured key-term pillar clusters, and captured featured snippet positions.'
  }
];

export const TESTIMONIAL: TestimonialItem = {
  quote: "Nam at congue diam. Etiam erat lectus, finibus eget commodo quis, tincidunt eget leo. Nullam quis vulputate orci, ac accumsan quam. Morbi fringilla congue libero, ac malesuada vulputate pharetra.",
  author: "John Doe",
  role: "CEO, ACME INC.",
  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7NztPGqoHiVTpmS0p_Qj4jCitZhzC6wbcWukzOj01RKp4EsmlDcftcpQHe61VxaIta3r86nDnJ1OCumDUnBGSWNBDcoazHOIxDk2AcwaOq8Ij6SdhdZdPizifxs9iKeBu7c1BK78VjITVMqPZi_DWi9jKZA02fN6Zk59D_iCcfDHthyb17BCqVb-72MT-2Jcc8_Q_uvqMhth_zg596ueRCt1PjaEonPYjgKym43hz4y9G30KkRNDQcdEkGNQuBli3l6oyc3z2aQ"
};

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
