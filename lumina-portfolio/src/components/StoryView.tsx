import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Shield, Users, Award, ExternalLink, Cpu } from 'lucide-react';

interface Principle {
  id: string;
  title: string;
  tagline: string;
  description: string;
  extended: string;
  color: string;
}

export default function StoryView() {
  const [selectedPrinciple, setSelectedPrinciple] = useState<string | null>('prin-1');

  const principles: Principle[] = [
    {
      id: 'prin-1',
      title: 'Architectural Honesty',
      tagline: 'Eliminating clutter to elevate premium aesthetics',
      description: 'True elegance is found in subtractive design. We build layouts with generous negative space, allowing display typography and elite imagery to stand unburdened by distracting container borders or technical noise.',
      extended: 'By prioritizing high-contrast visual rhythm and clear hierarchies, our systems guide user focus with effortless confidence. We strictly reject decorative clutter and unnecessary status indicators in favor of raw, humble, human content structures.',
      color: 'border-l-primary',
    },
    {
      id: 'prin-2',
      title: 'Empathic Performance',
      tagline: 'Optimization is a primary design gesture',
      description: 'A slow interface destroys the designer’s hard work. We believe load times and frame rates are structural design decisions that directly impact user psychological comfort and conversions.',
      extended: 'Every microservice, serverless asset pipe, and reactive state cycle is optimized with extreme care. Achieving 120fps animations and sub-second paint milestones is an act of deep respect for the user’s cognitive load and bandwidth.',
      color: 'border-l-tertiary',
    },
    {
      id: 'prin-3',
      title: 'Fluid & Purposeful Motion',
      tagline: 'Animations are structural, never decorative',
      description: 'Motion shouldn’t simply surprise; it should guide. We use choreography to illustrate layouts, explain routing transitions, and bridge state shifts smoothly, easing navigation.',
      extended: 'Every easing curve is hand-calibrated using real-world physics references (spring tension, friction) to feel responsive and delightful. Transition states become reassuring guidance, preventing spatial disorientation.',
      color: 'border-l-secondary',
    },
    {
      id: 'prin-4',
      title: 'Tokenized Consistency',
      tagline: 'Fusing Figma variables with typed codebases',
      description: 'A design system is only as strong as its weakest link. We build end-to-end continuous loops where Figma variables compile directly into typed CSS properties and robust React components.',
      extended: 'This unified single-source-of-truth eliminates rendering discrepancies and speeds up iterative shipping. Designers and engineers speak the exact same semantic language, guaranteeing pixel-perfection across releases.',
      color: 'border-l-primary',
    },
  ];

  return (
    <div className="relative pt-12">
      <div className="ambient-glow-2"></div>

      {/* Page Header */}
      <header className="mb-16 max-w-3xl">
        <h1 className="font-headline text-5xl md:text-6xl font-bold text-primary mb-6" id="story-header">
          The Story of Lumina
        </h1>
        <p className="font-sans text-lg text-on-surface-variant leading-relaxed">
          Bridging high-end product aesthetics with bulletproof technical engineering. Our philosophy is rooted in the belief that software should be as beautiful on the inside as it is on the outside.
        </p>
      </header>

      {/* Core Philosophy Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-24">
        <div className="md:col-span-6 flex flex-col gap-6">
          <h2 className="font-headline text-3xl font-semibold text-on-surface">
            A Union of Art & Logic
          </h2>
          <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
            Lumina was founded by a multi-disciplinary technical designer who grew weary of the traditional handoff friction between design teams and developers. Designs would get approved, only to lose their fluid transitions, precise spacing, and visual depth during full engineering implementations.
          </p>
          <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
            By mastering both the creative architecture and the lower-level runtime engines, we eliminated the translation layers entirely. Every product is conceptualized, prototyped, and engineered by a single cohesive vision—bringing unparalleled polish and performance to the modern web.
          </p>
        </div>

        <div className="md:col-span-6 glass-card rounded-xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <BookOpen size={200} />
          </div>
          <h3 className="font-headline text-xl text-primary font-bold mb-4">
            Our Mission
          </h3>
          <p className="font-sans text-sm text-on-surface-variant leading-relaxed italic mb-6">
            "To prove that hyper-modern performance and high-density technical functionality can coexist with luxury aesthetics, spacious editorial layout, and soulful design detail."
          </p>
          <div className="flex gap-4 items-center pt-4 border-t border-white/5 text-xs font-mono text-tertiary">
            <div className="flex items-center gap-1">
              <Cpu size={14} />
              <span>120Hz Fluid Rendering</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <div>
              <span>100% Web Accessibility</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles Interactive Section */}
      <section className="mb-12">
        <h2 className="font-headline text-3xl font-semibold text-primary mb-12">
          Design Principles
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* List of Principles */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {principles.map((prin) => (
              <button
                key={prin.id}
                onClick={() => setSelectedPrinciple(prin.id)}
                className={`text-left w-full p-6 rounded-xl border-l-4 border-y border-r transition-all duration-300 cursor-pointer ${
                  selectedPrinciple === prin.id
                    ? `glass-card ${prin.color} bg-white/[0.02]`
                    : 'border-white/5 hover:border-white/10 hover:bg-white/[0.01] border-l-white/20'
                }`}
                id={`principle-btn-${prin.id}`}
              >
                <h3 className="font-headline text-lg font-bold text-on-surface mb-1">
                  {prin.title}
                </h3>
                <h4 className="font-sans text-xs text-on-surface-variant font-medium">
                  {prin.tagline}
                </h4>
              </button>
            ))}
          </div>

          {/* Principle Detail Display */}
          <div className="lg:col-span-6 bg-[#080f17]/50 rounded-xl p-8 border border-white/5 min-h-[300px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {selectedPrinciple ? (
                (() => {
                  const p = principles.find((x) => x.id === selectedPrinciple)!;
                  return (
                    <motion.div
                      key={p.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-4"
                      id={`principle-detail-${p.id}`}
                    >
                      <span className="font-mono text-xs text-primary uppercase tracking-widest font-bold">
                        Core Value
                      </span>
                      <h3 className="font-headline text-2xl font-bold text-on-surface">
                        {p.title}
                      </h3>
                      <p className="font-sans text-sm text-on-surface font-medium leading-relaxed italic border-l-2 border-primary/40 pl-4 py-1">
                        {p.tagline}
                      </p>
                      <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                        {p.description}
                      </p>
                      <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                        {p.extended}
                      </p>
                    </motion.div>
                  );
                })()
              ) : (
                <div className="text-center py-12 text-on-surface-variant font-sans text-sm">
                  Select a principle on the left to explore our visual blueprint.
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
