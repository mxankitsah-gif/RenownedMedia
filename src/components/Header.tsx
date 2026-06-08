/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ActiveTab } from '../types';

interface HeaderProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  onRequestQuote: () => void;
}

export default function Header({ activeTab, onTabChange, onRequestQuote }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { label: string; id: ActiveTab }[] = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Contact', id: 'contact' },
    { label: 'Blog', id: 'blog' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-outline-variant/40 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo Brand */}
        <button
          onClick={() => {
            onTabChange('home');
            setIsMobileMenuOpen(false);
          }}
          className="font-serif text-2xl font-black text-[#D4AF37] hover:text-white tracking-wide cursor-pointer active:scale-95 transition-all"
          id="brand-logo-btn"
        >
          Renowned <span className="text-white font-sans font-extrabold uppercase text-[15px] tracking-widest pl-1">Media</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center" id="desktop-nav">
          {navItems.map((item) => {
            const isTabActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`font-sans text-[15px] font-medium transition-all py-1 relative cursor-pointer ${
                  isTabActive
                    ? 'text-[#D4AF37] font-bold'
                    : 'text-[#BFB9AF] hover:text-[#D4AF37]'
                }`}
                id={`nav-item-${item.id}`}
              >
                {item.label}
                {isTabActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button
            onClick={onRequestQuote}
            className="bg-white hover:bg-[#D4AF37] text-[#0A0A0A] hover:text-[#0A0A0A] border border-[#D4AF37]/30 hover:border-[#D4AF37] px-6 py-2.5 rounded font-mono text-[10px] font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_2px_15px_rgba(212,175,55,0.15)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.3)] cursor-pointer"
            id="header-quote-btn"
          >
            REQUEST QUOTE
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center justify-center text-on-surface hover:text-primary p-2 cursor-pointer"
          id="mobile-menu-trigger"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-surface-container border-b border-outline-variant/40 overflow-hidden"
            id="mobile-menu-drawer"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => {
                const isTabActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onTabChange(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-left font-sans text-base py-2 font-medium ${
                      isTabActive ? 'text-[#D4AF37] font-bold' : 'text-[#BFB9AF]'
                    }`}
                    id={`mobile-nav-${item.id}`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <hr className="border-outline-variant/20 my-1" />
              <button
                onClick={() => {
                  onRequestQuote();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-white text-[#0A0A0A] hover:bg-[#D4AF37] border border-[#D4AF37]/30 py-3 px-4 rounded font-mono text-[11px] font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 cursor-pointer transition-colors duration-300"
                id="mobile-quote-btn"
              >
                REQUEST QUOTE <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
