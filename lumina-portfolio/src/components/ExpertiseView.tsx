import React from 'react';
import { motion } from 'motion/react';
import { Download, Terminal, Layers, Cloud, Sparkles, ExternalLink, Briefcase } from 'lucide-react';
import { ExperienceItem } from '../types';

interface ExpertiseViewProps {
  onPortfolioClick: () => void;
}

export default function ExpertiseView({ onPortfolioClick }: ExpertiseViewProps) {
  const experiences: ExperienceItem[] = [
    {
      id: 'exp-1',
      role: 'Principal Engineer',
      company: 'STARLIGHT TECH',
      period: '2021 — Present',
      description: 'Led the architectural redesign of the core enterprise platform, transitioning from a monolithic legacy system to a highly decoupled micro-frontend architecture. Mentored a team of 12 senior developers and established company-wide performance budgets.',
      tags: ['Architecture', 'Leadership', 'Micro-frontends'],
    },
    {
      id: 'exp-2',
      role: 'Senior UI Developer',
      company: 'NOVA DESIGN AGENCY',
      period: '2018 — 2021',
      description: 'Spearheaded the development of a proprietary React-based design system used across 40+ client projects. Collaborated tightly with product designers to ensure pixel-perfect implementation and complex animation choreography using Framer Motion.',
      tags: ['Design Systems', 'React', 'Animation'],
    },
    {
      id: 'exp-3',
      role: 'Full Stack Developer',
      company: 'QUANTUM ANALYTICS',
      period: '2015 — 2018',
      description: 'Developed and maintained high-throughput data visualization dashboards for fintech clients. Managed full-stack feature delivery from database schema design to frontend charting logic using D3.js and early React.',
      tags: ['D3.js', 'React', 'PostgreSQL'],
    },
  ];

  const handleDownloadCV = () => {
    // Generate a simple high-end simulated PDF CV text and trigger browser printing/download
    const cvText = `
=========================================
LUMINA DESIGN & UX ENGINEERING
=========================================
Email: raju2726575@gmail.com
Portfolio: https://ais-dev-fswaa5f3yat2av4insczbj-573333908936.asia-southeast1.run.app

SUMMARY:
Senior Technical Designer specializing in the intersection of high-performance architecture
and premium user interfaces. Fusing rigorous engineering with refined aesthetic sensibilities.

EXPERIENCE:
- Principal Engineer | Starlight Tech (2021 - Present)
  Micro-frontend architecture, Team leadership, Performance budgets.
- Senior UI Developer | Nova Design Agency (2018 - 2021)
  Design systems development, Animation choreography, React systems.
- Full Stack Developer | Quantum Analytics (2015 - 2018)
  Data visualization dashboards, D3.js, full-stack development.

SKILLS:
React, TypeScript, Vue, Node.js, GraphQL, PostgreSQL, Docker, AWS, Tailwind, D3.js
    `;
    const blob = new Blob([cvText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'LUMINA_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="relative">
      <div className="ambient-glow-1"></div>
      <div className="ambient-glow-2"></div>

      {/* Hero / Personal Statement */}
      <section className="mb-24 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 flex flex-col gap-6">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="font-headline text-5xl md:text-7xl font-bold text-primary leading-tight"
              id="expertise-hero-title"
            >
              Engineering <br />
              <span className="text-on-surface">Digital Elegance.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed"
              id="expertise-hero-description"
            >
              I am a Senior Technical Designer specializing in the intersection of high-performance architecture and premium user interfaces. My approach fuses rigorous engineering principles with refined aesthetic sensibilities to build scalable, beautiful systems.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-4"
            >
              <button
                onClick={handleDownloadCV}
                className="btn-primary flex items-center gap-2 uppercase tracking-wider font-semibold text-sm cursor-pointer"
                id="btn-download-cv"
              >
                <Download size={18} />
                Download CV
              </button>
              <button
                onClick={onPortfolioClick}
                className="btn-ghost flex items-center gap-2 uppercase tracking-wider font-semibold text-sm cursor-pointer"
                id="btn-view-portfolio-nav"
              >
                View Portfolio
              </button>
            </motion.div>
          </div>

          <div className="md:col-span-5 relative">
            {/* High-end image placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="glass-card rounded-xl overflow-hidden aspect-square relative group"
            >
              <img
                className="w-full h-full object-cover filter grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuARl99BheqRjieengBsDodzT34eOHs4yclln7ySPPqpaykoc0GWNgfrsrWLe0O0hk7Utj_NO5qdrZxRrU48ZjS8GysCKo2yeUzww1O9gCd87JVXj7TDDYNncOW2h19TzqI9nt9L-ItsrLxWV_qp_9DzRoPmgyGzmO4Tw-DyJgSI6rDxqLtg1lj42Bd5TYeNcHTG8EfFFzbLtZj-mhc15jWc4T6EzGuZz6-_XinOEEmFpKcJJWkLi-Ev6Q1AUjaxq_3dfsCn2i9ugO4"
                alt="Portrait of Lumina Senior Technical Designer"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-60"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Skill Cloud (Bento Grid Style) */}
      <section className="mb-24">
        <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-12" id="technical-arsenal-header">
          Technical Arsenal
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Core Stack Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-xl md:col-span-2 flex flex-col justify-between hover:translate-y-[-2px] transition-transform duration-300"
          >
            <div>
              <h3 className="font-headline text-xl text-on-surface mb-4 flex items-center gap-2 font-bold">
                <Terminal className="text-primary animate-pulse" size={22} />
                Core Architecture
              </h3>
              <p className="font-sans text-sm text-on-surface-variant mb-6 leading-relaxed">
                Building robust, scalable foundations for enterprise-grade applications with zero layout shifting.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="tech-chip">React / Next.js</span>
              <span className="tech-chip">TypeScript</span>
              <span className="tech-chip">Node.js</span>
              <span className="tech-chip">GraphQL</span>
              <span className="tech-chip">PostgreSQL</span>
              <span className="tech-chip">Redis</span>
            </div>
          </motion.div>

          {/* Design Systems Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-8 rounded-xl flex flex-col justify-between hover:translate-y-[-2px] transition-transform duration-300"
          >
            <div>
              <h3 className="font-headline text-xl text-on-surface mb-4 flex items-center gap-2 font-bold">
                <Layers className="text-tertiary" size={22} />
                Design Systems
              </h3>
              <p className="font-sans text-sm text-on-surface-variant mb-6 leading-relaxed">
                Translating beautiful visual guidelines and micro-interactions into accessible, responsive code.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="tech-chip">Tailwind CSS</span>
              <span className="tech-chip">Figma API</span>
              <span className="tech-chip">Storybook</span>
              <span className="tech-chip">Framer Motion</span>
            </div>
          </motion.div>

          {/* Infrastructure Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-xl flex flex-col justify-between hover:translate-y-[-2px] transition-transform duration-300"
          >
            <div>
              <h3 className="font-headline text-xl text-on-surface mb-4 flex items-center gap-2 font-bold">
                <Cloud className="text-secondary" size={22} />
                Infrastructure
              </h3>
              <p className="font-sans text-sm text-on-surface-variant mb-6 leading-relaxed">
                Deploying serverless and containerized microservices at global scale.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="tech-chip">AWS (EC2, S3, RDS)</span>
              <span className="tech-chip">Docker</span>
              <span className="tech-chip">CI/CD Pipelines</span>
              <span className="tech-chip">Vercel</span>
            </div>
          </motion.div>

          {/* Performance Optimization Placeolder Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-8 rounded-xl md:col-span-2 relative overflow-hidden group hover:translate-y-[-2px] transition-transform duration-300"
          >
            <h3 className="font-headline text-xl text-on-surface mb-4 font-bold relative z-10">
              Performance Optimization
            </h3>
            <p className="font-sans text-sm text-on-surface-variant mb-6 relative z-10 max-w-md leading-relaxed">
              Deep profiling and optimization of render cycles, reactive states, and asset delivery pipelines to achieve sub-second load times on mobile devices.
            </p>
            
            {/* Animated Live Chart using SVG & CSS animations */}
            <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-30 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none flex items-end justify-end p-4">
              <svg className="w-full h-full stroke-tertiary fill-none" preserveAspectRatio="none" viewBox="0 0 100 50">
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  d="M0,40 Q10,30 20,35 T40,25 T60,15 T80,20 T100,5"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
                <motion.path
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.2 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="fill-tertiary/20 stroke-none"
                  d="M0,40 Q10,30 20,35 T40,25 T60,15 T80,20 T100,5 L100,50 L0,50 Z"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="pb-12">
        <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-12" id="professional-journey-header">
          Professional Journey
        </h2>
        
        <div className="relative pl-6 md:pl-8">
          {/* Vertical Line */}
          <div className="absolute left-[5px] md:left-[7px] top-2 bottom-0 timeline-line"></div>
          
          {experiences.map((exp, idx) => (
            <div key={exp.id} className="relative mb-12 group" id={exp.id}>
              {/* Timeline Dot */}
              <div className="absolute -left-[30px] md:-left-[32px] top-2 timeline-dot group-hover:scale-125 transition-transform duration-300"></div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-card p-6 md:p-8 rounded-xl ml-4 transition-all duration-300 border-l-2 border-l-transparent hover:border-l-primary"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2 gap-1">
                  <h3 className="font-headline text-xl text-on-surface font-bold">
                    {exp.role}
                  </h3>
                  <span className="font-mono text-xs text-tertiary font-semibold uppercase tracking-wider">
                    {exp.period}
                  </span>
                </div>
                <h4 className="font-sans text-xs text-primary font-bold tracking-widest uppercase mb-4">
                  {exp.company}
                </h4>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed mb-4">
                  {exp.description}
                </p>
                
                {exp.tags && (
                  <div className="flex gap-2 flex-wrap">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="text-xs text-on-surface-variant/70 border border-outline-variant/30 px-3 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
