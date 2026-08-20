import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/logo.jpeg';

export default function Navbar() {
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
          <button className="btn btn-ghost">The evolution is under construction</button>
        </div>
      </div>
    </header>
  );
}
