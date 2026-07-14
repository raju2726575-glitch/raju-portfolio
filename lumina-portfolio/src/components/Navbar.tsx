import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeTab: 'work' | 'expertise' | 'process' | 'story';
  setActiveTab: (tab: 'work' | 'expertise' | 'process' | 'story') => void;
  onContactClick: () => void;
}

export default function Navbar({ activeTab, setActiveTab, onContactClick }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'work' as const, label: 'Work' },
    { id: 'expertise' as const, label: 'Expertise' },
    { id: 'process' as const, label: 'Process' },
    { id: 'story' as const, label: 'Story' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A]/60 backdrop-blur-xl border-b border-white/10 shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center w-full px-6 h-20 max-w-7xl mx-auto">
        {/* Brand */}
        <button 
          onClick={() => {
            setActiveTab('work');
            setIsMobileMenuOpen(false);
          }}
          className="font-headline text-2xl font-bold text-primary tracking-tighter hover:opacity-80 transition-opacity"
          id="nav-logo"
        >
          LUMINA
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`font-sans text-sm tracking-wider uppercase transition-all duration-300 px-3 py-2 rounded ${
                  isActive
                    ? 'text-primary font-bold border-b-2 border-primary pb-1 scale-95'
                    : 'text-on-surface-variant hover:text-primary hover:bg-white/5'
                }`}
                id={`nav-${item.id}`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button
            onClick={onContactClick}
            className="btn-primary-gradient px-6 py-3 rounded-full font-bold transition-all duration-300 active:scale-95 text-sm uppercase tracking-wider"
            id="nav-cta-desktop"
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-primary hover:opacity-80 transition-opacity p-2"
          id="nav-mobile-toggle"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0D141D] border-b border-white/10 px-6 py-6 flex flex-col gap-4 animate-fadeIn">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left text-lg font-sans tracking-wide py-2 border-b border-white/5 transition-colors ${
                  isActive ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'
                }`}
                id={`nav-mobile-${item.id}`}
              >
                {item.label}
              </button>
            );
          })}
          <button
            onClick={() => {
              onContactClick();
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-center btn-primary-gradient py-4 rounded-full font-bold text-sm uppercase tracking-wider mt-4"
            id="nav-cta-mobile"
          >
            Get in Touch
          </button>
        </div>
      )}
    </nav>
  );
}
