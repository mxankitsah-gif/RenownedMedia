/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ActiveTab = 'home' | 'about' | 'services' | 'portfolio' | 'contact';

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
