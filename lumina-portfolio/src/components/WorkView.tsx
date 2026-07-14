import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Layers, Code, TrendingUp, Terminal, Shield, ExternalLink, Activity } from 'lucide-react';
import { Project, Discipline } from '../types';

interface WorkViewProps {
  onContactClick: () => void;
}

export default function WorkView({ onContactClick }: WorkViewProps) {
  const [showArchive, setShowArchive] = useState(false);
  const selectedWorkRef = useRef<HTMLDivElement>(null);

  const scrollToSelectedWork = () => {
    selectedWorkRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const disciplines: Discipline[] = [
    {
      id: 'disc-1',
      title: 'Systems Design',
      description: 'Scalable architectural foundations ensuring visual consistency across complex enterprise applications.',
      iconName: 'Layers',
    },
    {
      id: 'disc-2',
      title: 'UX Engineering',
      description: 'Prototyping in code to validate micro-interactions and bridge the gap between design and development.',
      iconName: 'Code',
    },
    {
      id: 'disc-3',
      title: 'Product Strategy',
      description: 'Aligning user needs with business objectives through rigorous research and data-informed iteration.',
      iconName: 'TrendingUp',
    },
  ];

  const featuredProjects: Project[] = [
    {
      id: 'proj-1',
      title: 'Nexus Trading Platform',
      category: 'Fintech SaaS',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3rfOR42c1HKmKWh0jRlSya9wbcdMqyaYF8IZS5ohRMGmrrt3M35JmBUdcOYvXsPVOexUQPl0GXiaAQxlXRB9MVN8_MUoppf3Dt0jtJvEc0oW7z5-4pbUzL-zOCV5l0EBtEKJe2-M-2-59DUlXxfc4Iqx3EdlCQjoYahGaCtIL-J9Oh433zs1hftAjQYaJgc353lqsQ9r821qby8piprBUlRT0O6M2zdql8nj-f4LRc5ISEziYjnY0PQYJfmCqLW1f1r57kWDV_24',
      description: 'Architected a real-time trading interface handling millions of WebSocket events with zero layout thrashing. Focused on high-density data visualization and instant interaction response times.',
      tech: ['React', 'TypeScript', 'D3.js', 'Tailwind'],
    },
    {
      id: 'proj-2',
      title: 'Aether Design System',
      category: 'Creative Agency',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1QWKeNMBEuvc9x_KweoBax9WAxS30rWkyDfsnF1-sS_9CB0LfWxnZ6ROJ5pNAIuMK1fZQNMJLFF9Pj-2nUJE2C5BVFabxyGbVLwln2elMG2BHT_MvuyLyQK-1p9pNvmFTe1TxiRRXF2H435GBQnfa1CPNMTo06w8sMm-kGHgIJoTUI-dowvwNOJ9GoQo9p-RnrBvX8POVQ16mebQwwGW8WZ2owFJ2iMGIlJsDnHquBO-b7tg3YhtNa85s9LwIu8mnW9l_KGT8mgQ',
      description: 'A comprehensive component library built for a luxury creative agency, emphasizing fluid typography and seamless micro-interactions.',
      tech: ['Vue 3', 'Storybook', 'Framer Motion'],
    },
    {
      id: 'proj-3',
      title: 'Vortex CLI',
      category: 'DevTool',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmsO6hxDKbC7uqk9YSYCN4K-jZ_j-eLQsmk9KW37H_JzhPgMHmF0HR5mBsZ7HSPjcxTk_pfrG8iWjxys8gN27xMRdKin9mVfGjRK9zAFmep3mXjUaQ3zWTk017iN1oM3YrKD_YW-6r9HXMxcwrWZQZUf-S133Yw1hNL6bssh-Vorvv7zmN2sShn-vmH92712NmP18IwJhgLlszaoLqPxT7byTf3od2ghIw8E2O9LLWZsgA7mfi7-xtPSvOedc4QF0ZQIKxvinKRho',
      description: 'A blazing fast scaffolding tool for modern web applications, written entirely in Rust.',
      tech: ['Rust', 'WASM'],
    },
  ];

  const archiveProjects: Project[] = [
    {
      id: 'proj-4',
      title: 'Solas Analytics',
      category: 'Web3 Platform',
      image: 'https://picsum.photos/seed/solas/800/600',
      description: 'Real-time ledger processing and staking visualizers. Built with ultra-low latency canvas integrations and smooth chart updates.',
      tech: ['TypeScript', 'WebGL', 'Rust', 'Tailwind'],
    },
    {
      id: 'proj-5',
      title: 'Hesperia Docs Engine',
      category: 'Documentation',
      image: 'https://picsum.photos/seed/hesperia/800/600',
      description: 'An ultra-fast static search engine with intelligent syntax highlighting and on-the-fly markdown parsing.',
      tech: ['Next.js', 'MDX', 'Algolia', 'Tailwind'],
    },
    {
      id: 'proj-6',
      title: 'Kyros Optimization Core',
      category: 'Server Infrastructure',
      image: 'https://picsum.photos/seed/kyros/800/600',
      description: 'Multi-threaded cloud-native media optimization running on edge workers with extreme memory efficiency.',
      tech: ['Go', 'Wasm', 'Cloudflare Workers'],
    },
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Layers': return <Layers className="text-primary text-2xl" size={24} />;
      case 'Code': return <Code className="text-tertiary text-2xl" size={24} />;
      case 'TrendingUp': return <TrendingUp className="text-secondary text-2xl" size={24} />;
      default: return <Layers className="text-primary text-2xl" size={24} />;
    }
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center justify-center min-h-[85vh] pt-12">
        <div className="hero-glow"></div>
        
        {/* Available Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="font-sans text-xs font-semibold text-secondary tracking-wider uppercase">
            Available for new opportunities
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-headline text-5xl md:text-7xl font-bold text-on-surface mb-6 max-w-4xl leading-tight"
          id="hero-title"
        >
          Crafting <span className="text-gradient">Technical Elegance</span> for the modern web.
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-sans text-lg md:text-xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed"
          id="hero-description"
        >
          Senior Product Designer bridging the gap between high-end aesthetics and rigorous engineering. Specializing in SaaS platforms, design systems, and developer tools.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={scrollToSelectedWork}
            className="btn-primary font-sans px-8 py-4 rounded-full flex items-center gap-2 group cursor-pointer"
            id="hero-cta-primary"
          >
            View Selected Work
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </button>
        </motion.div>
      </section>

      {/* Core Disciplines Section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-headline text-3xl font-semibold text-on-surface" id="disciplines-header">
            Core Disciplines
          </h2>
          <button
            onClick={onContactClick}
            className="font-sans text-sm font-semibold text-tertiary hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
            id="disciplines-explore"
          >
            Explore Services <ChevronRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {disciplines.map((disc, idx) => (
            <motion.div
              key={disc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-panel rounded-xl p-8 hover:-translate-y-2 transition-transform duration-300"
              id={disc.id}
            >
              <div className="w-12 h-12 rounded-lg bg-primary-container/20 flex items-center justify-center mb-6">
                {getIcon(disc.iconName)}
              </div>
              <h3 className="font-headline text-xl text-on-surface mb-3 font-medium">
                {disc.title}
              </h3>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                {disc.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Selected Work Grid (Bento/Asymmetric Style) */}
      <section ref={selectedWorkRef} className="py-20 max-w-7xl mx-auto px-6 scroll-mt-24">
        <header className="mb-20 max-w-3xl">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-6" id="projects-header">
            Selected Work
          </h2>
          <p className="font-sans text-lg text-on-surface-variant leading-relaxed">
            A curated showcase of high-performance interfaces and scalable systems. Crafted with technical elegance and precise attention to detail.
          </p>
        </header>

        {/* Projects Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Project 1 (Large - spans 12 cols) */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="group glass-card rounded-xl overflow-hidden col-span-1 md:col-span-12 flex flex-col md:flex-row transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(3,7,18,0.8)]"
            id={featuredProjects[0].id}
          >
            <div className="w-full md:w-3/5 h-64 md:h-[450px] overflow-hidden relative">
              <img
                className="w-full h-full object-cover project-image-filter absolute inset-0"
                src={featuredProjects[0].image}
                alt={featuredProjects[0].title}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-full md:w-2/5 p-8 md:p-10 flex flex-col justify-center">
              <span className="font-mono text-xs text-tertiary mb-3 block uppercase tracking-widest font-semibold">
                {featuredProjects[0].category}
              </span>
              <h3 className="font-headline text-2xl md:text-3xl text-on-surface mb-4 group-hover:text-primary transition-colors font-bold">
                {featuredProjects[0].title}
              </h3>
              <p className="font-sans text-sm text-on-surface-variant mb-6 leading-relaxed">
                {featuredProjects[0].description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                {featuredProjects[0].tech.map((t) => (
                  <span key={t} className="bg-primary-container/10 text-secondary text-xs px-3 py-1.5 rounded-full font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>

          {/* Project 2 (Medium - spans 7 cols) */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="group glass-card rounded-xl overflow-hidden col-span-1 md:col-span-7 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(3,7,18,0.8)]"
            id={featuredProjects[1].id}
          >
            <div className="w-full h-64 md:h-80 overflow-hidden relative">
              <img
                className="w-full h-full object-cover project-image-filter absolute inset-0"
                src={featuredProjects[1].image}
                alt={featuredProjects[1].title}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <span className="font-mono text-xs text-tertiary mb-3 block uppercase tracking-widest font-semibold">
                {featuredProjects[1].category}
              </span>
              <h3 className="font-headline text-xl md:text-2xl text-on-surface mb-3 group-hover:text-primary transition-colors font-bold">
                {featuredProjects[1].title}
              </h3>
              <p className="font-sans text-sm text-on-surface-variant mb-6 leading-relaxed flex-grow">
                {featuredProjects[1].description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                {featuredProjects[1].tech.map((t) => (
                  <span key={t} className="bg-primary-container/10 text-secondary text-xs px-3 py-1.5 rounded-full font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>

          {/* Project 3 (Medium - spans 5 cols) */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="group glass-card rounded-xl overflow-hidden col-span-1 md:col-span-5 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(3,7,18,0.8)]"
            id={featuredProjects[2].id}
          >
            <div className="w-full h-64 md:h-80 overflow-hidden relative bg-[#192029]">
              <div className="absolute inset-0 flex items-center justify-center text-primary-container/20">
                <Terminal size={100} strokeWidth={1} />
              </div>
              <img
                className="w-full h-full object-cover project-image-filter absolute inset-0 mix-blend-overlay opacity-60"
                src={featuredProjects[2].image}
                alt={featuredProjects[2].title}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <span className="font-mono text-xs text-tertiary mb-3 block uppercase tracking-widest font-semibold">
                {featuredProjects[2].category}
              </span>
              <h3 className="font-headline text-xl md:text-2xl text-on-surface mb-3 group-hover:text-primary transition-colors font-bold">
                {featuredProjects[2].title}
              </h3>
              <p className="font-sans text-sm text-on-surface-variant mb-6 leading-relaxed flex-grow">
                {featuredProjects[2].description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                {featuredProjects[2].tech.map((t) => (
                  <span key={t} className="bg-primary-container/10 text-secondary text-xs px-3 py-1.5 rounded-full font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        </div>

        {/* Archive Section - Show on Click */}
        {showArchive && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {archiveProjects.map((proj, index) => (
              <motion.article
                key={proj.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group glass-card rounded-xl overflow-hidden flex flex-col hover:-translate-y-2 transition-all duration-300"
                id={proj.id}
              >
                <div className="w-full h-48 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover project-image-filter group-hover:scale-105 transition-transform duration-500"
                    src={proj.image}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="font-mono text-xs text-tertiary mb-2 block uppercase tracking-widest">
                    {proj.category}
                  </span>
                  <h3 className="font-headline text-lg font-bold text-on-surface group-hover:text-primary transition-colors mb-2">
                    {proj.title}
                  </h3>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed mb-4 flex-grow">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {proj.tech.map((t) => (
                      <span key={t} className="bg-primary-container/10 text-secondary text-[10px] px-2 py-1 rounded-full font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* Toggle Action */}
        <div className="mt-20 flex justify-center">
          <button
            onClick={() => setShowArchive(!showArchive)}
            className="font-sans text-sm px-8 py-4 rounded-full border border-primary/20 text-secondary bg-transparent hover:bg-primary/5 transition-all duration-300 flex items-center gap-2 cursor-pointer uppercase tracking-wider font-semibold"
            id="archive-toggle"
          >
            {showArchive ? 'Collapse Archive' : 'View Archive'} <ArrowRight className={showArchive ? '-rotate-90 transition-transform' : 'transition-transform'} size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
