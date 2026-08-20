import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

// Custom inline SVG icons for brand channels
const XIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const DribbbleIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.49-11.05 1-11.6 8.56" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const socials = [
    { name: "Twitter", icon: XIcon, href: "https://twitter.com" },
    { name: "GitHub", icon: GithubIcon, href: "https://github.com" },
    { name: "Dribbble", icon: DribbbleIcon, href: "https://dribbble.com" },
    { name: "LinkedIn", icon: LinkedinIcon, href: "https://linkedin.com" }
  ];

  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        
        {/* Top Info row */}
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand-logo">Corentix</span>
            <p className="brand-tagline">Built for what's next.</p>
          </div>
          
          <div className="footer-socials">
            {socials.map((soc, idx) => {
              const Icon = soc.icon;
              return (
                <motion.a 
                  key={idx}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  aria-label={soc.name}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Horizontal Divider Line */}
        <hr className="footer-divider" aria-hidden="true" />

        {/* Bottom copyright row */}
        <div className="footer-bottom">
          <p className="footer-copy">© 2026 Corentix. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#privacy" className="legal-link">Privacy Policy</a>
            <a href="#terms" className="legal-link">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
