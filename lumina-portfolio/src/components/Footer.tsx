import React from 'react';

interface FooterProps {
  setActiveTab: (tab: 'work' | 'expertise' | 'process' | 'story') => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080f17] border-t border-[#4a4455]/20 w-full py-16 md:py-24 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-6 max-w-7xl mx-auto">
        {/* Brand */}
        <button
          onClick={() => {
            setActiveTab('work');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-headline text-2xl font-bold text-primary mb-4 md:mb-0 hover:opacity-80 transition-opacity"
          id="footer-logo"
        >
          LUMINA
        </button>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-on-surface-variant hover:text-tertiary transition-colors duration-300"
            id="footer-social-linkedin"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-on-surface-variant hover:text-tertiary transition-colors duration-300"
            id="footer-social-github"
          >
            GitHub
          </a>
          <a
            href="https://read.cv"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-on-surface-variant hover:text-tertiary transition-colors duration-300"
            id="footer-social-readcv"
          >
            Read.cv
          </a>
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-on-surface-variant hover:text-tertiary transition-colors duration-300"
            id="footer-social-dribbble"
          >
            Dribbble
          </a>
        </div>

        {/* Copyright */}
        <p className="font-sans text-sm text-tertiary text-center md:text-right" id="footer-copyright">
          &copy; {currentYear} Lumina Design. Crafted with Technical Elegance.
        </p>
      </div>
    </footer>
  );
}
