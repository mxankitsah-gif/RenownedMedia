/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import PortfolioView from './components/PortfolioView';
import ContactView from './components/ContactView';
import BlogView from './components/BlogView';
import ProjectDetailModal from './components/ProjectDetailModal';
import { ActiveTab, ProjectItem } from './types';
import { initGA, trackPageView, trackQuoteClick } from './lib/analytics';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Load Google Analytics 4 tag script globally on mount
  useEffect(() => {
    initGA();
  }, []);

  // Auto-scroll to top, track SPA page views, and update SEO metadata when activeTab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    trackPageView(activeTab);

    // Dynamic SEO metadata mapping
    const seoMeta: Record<ActiveTab, { title: string; description: string }> = {
      home: {
        title: 'Renowned Media | Digital Marketing, SEO & Content Production Agency',
        description: 'Premium digital marketing, SEO, video production, social media growth and branding services.',
      },
      about: {
        title: 'About Renowned Media',
        description: "Learn about Renowned Media's expertise in SEO, branding, content production and growth strategy.",
      },
      services: {
        title: 'Digital Marketing Services | Renowned Media',
        description: 'SEO, social media marketing, video production, website development, branding and advertising solutions.',
      },
      portfolio: {
        title: 'Portfolio | Renowned Media',
        description: 'Explore our client success stories, campaigns and digital growth projects.',
      },
      contact: {
        title: 'Contact Renowned Media',
        description: 'Connect with our team for SEO, branding, content production and digital growth solutions.',
      },
      blog: {
        title: 'Digital Marketing Blog | Renowned Media',
        description: 'SEO guides, marketing insights, content strategy and digital growth resources.',
      },
    };

    const pageSeo = seoMeta[activeTab] || seoMeta.home;
    document.title = pageSeo.title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', pageSeo.description);
  }, [activeTab]);

  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
  };

  const handleSelectServiceForQuote = (serviceId: string) => {
    trackQuoteClick(`service_request_${serviceId}`);
    setActiveTab('contact');
  };

  const handleRequestQuoteGeneral = () => {
    trackQuoteClick('general_cta');
    setActiveTab('contact');
  };

  // Select view renderer
  const renderActiveView = () => {
    switch (activeTab) {
      case 'about':
        return (
          <motion.div
            key="about-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="pt-24 min-h-[80vh]"
          >
            <AboutView />
          </motion.div>
        );
      case 'services':
        return (
          <motion.div
            key="services-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="pt-24 min-h-[80vh]"
          >
            <ServicesView onSelectServiceForQuote={handleSelectServiceForQuote} />
          </motion.div>
        );
      case 'portfolio':
        return (
          <motion.div
            key="portfolio-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="pt-24 min-h-[80vh]"
          >
            <PortfolioView onSelectProject={setSelectedProject} />
          </motion.div>
        );
      case 'contact':
        return (
          <motion.div
            key="contact-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="pt-24 min-h-[80vh]"
          >
            <ContactView />
          </motion.div>
        );
      case 'blog':
        return (
          <motion.div
            key="blog-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="pt-24 min-h-[80vh]"
          >
            <BlogView onTabChange={handleTabChange} onRequestQuote={handleRequestQuoteGeneral} />
          </motion.div>
        );
      case 'home':
      default:
        return (
          <motion.div
            key="home-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="min-h-[90vh]"
          >
            <HomeView
              onTabChange={handleTabChange}
              onSelectProject={setSelectedProject}
              onRequestQuote={handleRequestQuoteGeneral}
            />
          </motion.div>
        );
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-background font-sans selection:bg-primary-container selection:text-on-primary-container" id="renowned-app-root">
      
      {/* Global Header Navigation */}
      <Header
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onRequestQuote={handleRequestQuoteGeneral}
      />

      {/* Dynamic Main View Screen Section with AnimatePresence */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {renderActiveView()}
        </AnimatePresence>
      </main>

      {/* Shared Global Page Footer */}
      <Footer onTabChange={handleTabChange} />

      {/* Project Detail Dialog Box */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
