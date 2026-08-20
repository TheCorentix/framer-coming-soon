import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        
        {/* Top Info row */}
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand-logo">Corentix</span>
            <p className="brand-tagline">Built for what's next.</p>
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
