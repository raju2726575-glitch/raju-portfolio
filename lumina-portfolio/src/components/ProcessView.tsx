import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Eye, Code, Zap, RefreshCw, Layers, CheckCircle2, Sliders } from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}

export default function ProcessView() {
  const [activeStep, setActiveStep] = useState(0);

  // Playground States
  const [borderRadius, setBorderRadius] = useState(12);
  const [glowSize, setGlowSize] = useState(15);
  const [glowColor, setGlowColor] = useState('#d3bbff'); // Primary
  const [isHovered, setIsHovered] = useState(false);

  const steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Discovery & Product Strategy',
      subtitle: 'Aligning business metrics with user desires',
      description: 'Understanding constraints, user profiles, and key business KPIs is our primary baseline. Each project begins with research, leading to highly structured user flows and high-fidelity strategy briefs.',
      icon: <Sparkles className="text-primary" size={24} />,
    },
    {
      number: '02',
      title: 'High-Fidelity UI Design',
      subtitle: 'Premium styling, typography, and visual depth',
      description: 'Crafting brand languages from scratch. Using Bricolage Grotesque display pairings, custom palettes, and extensive layout rhythm to establish eye-pleasing, elite digital experiences.',
      icon: <Eye className="text-tertiary" size={24} />,
    },
    {
      number: '03',
      title: 'Technical UX Engineering',
      subtitle: 'Component-driven production-ready code',
      description: 'Fusing beautiful interfaces with modular, clean React/Vue and TypeScript. We test interactions in code playgrounds early to build design tokens and smooth animations that run at 120Hz.',
      icon: <Code className="text-secondary" size={24} />,
    },
    {
      number: '04',
      title: 'Performance & Architecture',
      subtitle: 'Sub-second load times & search indexing',
      description: 'Minimizing layout shift (CLS), optimization of image assets, code-splitting bundles, and leveraging lightning-fast SSR/SSG. We deliver digital solutions that perform beautifully and scale endlessly.',
      icon: <Zap className="text-primary" size={24} />,
    },
  ];

  const colors = [
    { name: 'Lavender', hex: '#d3bbff' },
    { name: 'Sky Blue', hex: '#7bd0ff' },
    { name: 'Elegance Purple', hex: '#6d28d9' },
    { name: 'Deep Sage', hex: '#a7f3d0' },
  ];

  return (
    <div className="relative pt-12">
      <div className="ambient-glow-1"></div>
      
      {/* Page Header */}
      <header className="mb-16 max-w-3xl">
        <h1 className="font-headline text-5xl md:text-6xl font-bold text-primary mb-6" id="process-header">
          The Design-to-Code Pipeline
        </h1>
        <p className="font-sans text-lg text-on-surface-variant leading-relaxed">
          How we transform bold visions into high-performance web products. An integrated pipeline of rigorous analysis, pixel-perfect design systems, and state-of-the-art engineering.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
        {/* Step Selector & Details */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`text-left w-full p-6 rounded-xl border transition-all duration-300 flex items-start gap-4 cursor-pointer ${
                  isActive
                    ? 'glass-card border-primary/40 bg-white/[0.02]'
                    : 'border-white/5 hover:border-white/10 hover:bg-white/[0.01]'
                }`}
                id={`step-btn-${idx}`}
              >
                <span className={`font-mono text-xs font-bold px-2.5 py-1 rounded-md ${
                  isActive ? 'bg-primary/20 text-primary' : 'bg-white/5 text-on-surface-variant'
                }`}>
                  {step.number}
                </span>
                
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className={`font-headline text-lg font-bold ${isActive ? 'text-primary' : 'text-on-surface'}`}>
                      {step.title}
                    </h3>
                    <div className="opacity-80">{step.icon}</div>
                  </div>
                  <h4 className="font-sans text-xs text-on-surface-variant font-medium mb-3 uppercase tracking-wider">
                    {step.subtitle}
                  </h4>
                  
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="font-sans text-sm text-on-surface-variant leading-relaxed mt-2"
                    >
                      {step.description}
                    </motion.p>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Workspace Widget (Demonstrates Step 03: UX Engineering) */}
        <div className="lg:col-span-5 glass-card rounded-xl p-8 sticky top-28">
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/5">
            <Sliders className="text-secondary" size={20} />
            <h3 className="font-headline text-lg font-bold text-on-surface">
              UX Code Playground
            </h3>
          </div>

          <p className="font-sans text-xs text-on-surface-variant mb-6 leading-relaxed">
            Step 3 in action: Adjust live design variables to see how real-time micro-interactions and styling react instantly to CSS custom variables in our design systems.
          </p>

          {/* Variables Controls */}
          <div className="flex flex-col gap-5 mb-8">
            {/* Corner Radius */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-2">
                <span className="text-on-surface-variant">Corner Radius</span>
                <span className="text-secondary font-bold">{borderRadius}px</span>
              </div>
              <input
                type="range"
                min="0"
                max="32"
                value={borderRadius}
                onChange={(e) => setBorderRadius(Number(e.target.value))}
                className="w-full accent-primary bg-white/10 h-1 rounded-full appearance-none cursor-pointer"
                id="playground-radius-slider"
              />
            </div>

            {/* Glow spread */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-2">
                <span className="text-on-surface-variant">Hover Glow Spread</span>
                <span className="text-secondary font-bold">{glowSize}px</span>
              </div>
              <input
                type="range"
                min="0"
                max="40"
                value={glowSize}
                onChange={(e) => setGlowSize(Number(e.target.value))}
                className="w-full accent-primary bg-white/10 h-1 rounded-full appearance-none cursor-pointer"
                id="playground-glow-slider"
              />
            </div>

            {/* Glow Color Selector */}
            <div>
              <span className="text-xs font-mono text-on-surface-variant block mb-3">Accent Glow Color</span>
              <div className="flex gap-3">
                {colors.map((c) => (
                  <button
                    key={c.hex}
                    onClick={() => setGlowColor(c.hex)}
                    style={{ backgroundColor: c.hex }}
                    className={`w-6 h-6 rounded-full transition-transform duration-200 cursor-pointer ${
                      glowColor === c.hex ? 'scale-125 ring-2 ring-white' : 'hover:scale-110'
                    }`}
                    title={c.name}
                    id={`playground-color-${c.name.toLowerCase()}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Render Target Component */}
          <div className="bg-[#080f17]/50 rounded-lg p-10 flex items-center justify-center border border-white/5 relative overflow-hidden min-h-[220px]">
            <div className="absolute inset-0 z-0 bg-radial-gradient from-transparent to-[#080f17]" />
            
            <motion.div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                borderRadius: `${borderRadius}px`,
                boxShadow: isHovered
                  ? `0 0 ${glowSize}px ${glowColor}50`
                  : '0 4px 20px -5px rgba(0,0,0,0.5)',
                border: isHovered
                  ? `1px solid ${glowColor}80`
                  : '1px solid rgba(196, 181, 253, 0.15)',
              }}
              className="w-full max-w-[260px] bg-[#1E293B] p-6 text-center cursor-pointer relative z-10 transition-all duration-300 ease-out"
              id="playground-target-card"
            >
              <div className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center bg-white/5">
                <RefreshCw 
                  className={`text-on-surface transition-transform duration-1000 ${isHovered ? 'rotate-180' : ''}`} 
                  size={18} 
                  style={{ color: isHovered ? glowColor : '#dce3f0' }}
                />
              </div>
              <h4 className="font-headline font-semibold text-sm mb-1 text-on-surface" style={{ color: isHovered ? glowColor : '#dce3f0' }}>
                Interactive Element
              </h4>
              <p className="font-sans text-[11px] text-on-surface-variant leading-relaxed">
                Hover over me to witness your design configurations.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
