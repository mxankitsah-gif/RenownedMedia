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
import ProjectDetailModal from './components/ProjectDetailModal';
import QuoteRequestModal from './components/QuoteRequestModal';
import { ActiveTab, ProjectItem } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  // Auto-scroll to top when screen tab changes for consistent user experience
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab]);

  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
  };

  const handleSelectServiceForQuote = (serviceId: string) => {
    setPreselectedService(serviceId);
    setIsQuoteOpen(true);
  };

  const handleRequestQuoteGeneral = () => {
    setPreselectedService(undefined);
    setIsQuoteOpen(true);
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

      {/* Interactive Quotation Form Modal */}
      <AnimatePresence>
        {isQuoteOpen && (
          <QuoteRequestModal
            isOpen={isQuoteOpen}
            onClose={() => setIsQuoteOpen(false)}
            preselectedServiceId={preselectedService}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
