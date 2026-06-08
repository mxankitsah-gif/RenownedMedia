/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ActiveTab = 'home' | 'about' | 'services' | 'portfolio' | 'contact' | 'blog';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  isWide?: boolean;
  deliverables: string[];
  duration: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  category: string;
  img: string;
  client: string;
  year: string;
  metrics: string;
  challenge: string;
  solution: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  img: string;
  bio: string;
  specialties: string[];
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  img: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  category: string;
  featuredImage: string;
  seoTitle: string;
  metaDesc: string;
  status: 'draft' | 'published';
  createdAt: string;
}

