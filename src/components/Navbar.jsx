import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';
import logo from '../assets/logo.jpeg';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="site-header-inner wrap">
        <a href="/" className="brand">
          <span className="brand-mark">
            <img src={logo} alt="Corentix logo" width={28} height={28} />
          </span>
          <span className="brand-name">Corentix <span className="brand-labs"></span></span>
        </a>

        <div className="header-cta">
          <button className="btn btn-ghost">Launching Soon</button>
        </div>
        <button 
          className={`menu-btn ${isOpen ? 'is-open' : ''}`}
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <button className="btn btn-primary" onClick={() => setIsOpen(false)}>Launching Soon</button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
