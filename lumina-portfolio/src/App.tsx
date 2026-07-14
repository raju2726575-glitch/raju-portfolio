import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WorkView from './components/WorkView';
import ExpertiseView from './components/ExpertiseView';
import ProcessView from './components/ProcessView';
import StoryView from './components/StoryView';
import ContactModal from './components/ContactModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<'work' | 'expertise' | 'process' | 'story'>('work');
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#dce3f0] flex flex-col font-sans selection:bg-primary selection:text-on-primary">
      {/* Decorative top ambient lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none" />

      {/* Navigation */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onContactClick={() => setIsContactOpen(true)} 
      />

      {/* Main Content Area */}
      <main className="flex-grow pt-28 pb-16 w-full max-w-7xl mx-auto px-6 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {activeTab === 'work' && (
              <WorkView onContactClick={() => setIsContactOpen(true)} />
            )}
            {activeTab === 'expertise' && (
              <ExpertiseView onPortfolioClick={() => setActiveTab('work')} />
            )}
            {activeTab === 'process' && (
              <ProcessView />
            )}
            {activeTab === 'story' && (
              <StoryView />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Contact Overlay Modal */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
}
