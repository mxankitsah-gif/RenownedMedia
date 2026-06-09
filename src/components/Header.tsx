/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ActiveTab } from '../types';
import RenownedLogo from './RenownedLogo';

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
    <header className="fixed top-0 w-full z-50 bg-[#ffffff]/90 backdrop-blur-xl border-b border-slate-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo Brand */}
        <button
          onClick={() => {
            onTabChange('home');
            setIsMobileMenuOpen(false);
          }}
          className="flex items-center justify-start cursor-pointer active:scale-95 transition-all text-[#1d4ed8] hover:text-[#dc2626]"
          id="brand-logo-btn"
        >
          <RenownedLogo className="h-9 sm:h-11 w-auto" textColor="text-[#1d4ed8]" />
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
                    ? 'text-[#1d4ed8] font-bold'
                    : 'text-[#475569] hover:text-[#1d4ed8]'
                }`}
                id={`nav-item-${item.id}`}
              >
                {item.label}
                {isTabActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1d4ed8]"
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
            className="bg-[#dc2626] hover:bg-[#b91c1c] text-white border border-[#dc2626]/20 px-6 py-2.5 rounded font-mono text-[10px] font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_4px_15px_rgba(220,38,38,0.2)] hover:shadow-[0_6px_25px_rgba(220,38,38,0.35)] cursor-pointer"
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
            <div className="px-6 py-4 flex flex-col gap-4 bg-white">
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
                      isTabActive ? 'text-[#1d4ed8] font-bold' : 'text-[#475569]'
                    }`}
                    id={`mobile-nav-${item.id}`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <hr className="border-slate-100 my-1" />
              <button
                onClick={() => {
                  onRequestQuote();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-[#dc2626] text-white hover:bg-[#b91c1c] py-3 px-4 rounded font-mono text-[11px] font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 cursor-pointer transition-colors duration-300 shadow-[0_4px_15px_rgba(220,38,38,0.2)] border-none"
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
