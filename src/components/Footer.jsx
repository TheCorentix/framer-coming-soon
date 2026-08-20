import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">

        <hr className="footer-divider" aria-hidden="true" />

        {/* Single row: brand | copyright | legal */}
        <div className="footer-bottom">
          <div className="footer-brand">
            <span className="brand-logo">Corentix</span>
            <p className="brand-tagline">Innovate Integrate Elevate.</p>
            <a href="mailto:hello@corentix.com" className="brand-email">hello@corentix.com</a>
          </div>

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
