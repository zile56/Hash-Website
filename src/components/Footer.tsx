import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner container-wide">
        <div className="footer-grid">
          {/* Left: Brand + Islamabad Tagline */}
          <div className="footer-col-brand">
            <a href="#top" className="footer-brand-link" aria-label="HASH Home">
              <img
                src="/hash-logo.png"
                alt="HASH Logo"
                className="footer-logo-img"
                width="34"
                height="34"
              />
              <span className="footer-brand-title">HASH</span>
            </a>
            <p className="footer-tagline">
              HASH Software Consultants (Private) Limited is an independent engineering consultancy based in Islamabad, Pakistan. We design, build, and deploy custom software, cross-platform mobile apps, and autonomous AI systems.
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="footer-col-nav">
            <span className="footer-col-header mono">Navigation</span>
            <ul className="footer-links-list">
              <li><a href="#services">Services &amp; Capabilities</a></li>
              <li><a href="#work">Featured Projects</a></li>
              <li><a href="#cases">Alpha Case Study</a></li>
              <li><a href="#about">About HASH</a></li>
              <li><a href="#team">Engineering Team</a></li>
              <li><a href="#careers">Open Roles</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
              <li><a href="#contact">Start a Project</a></li>
            </ul>
          </div>

          {/* Right: Contact & Verification */}
          <div className="footer-col-contact">
            <span className="footer-col-header mono">Engineering Office</span>
            <p className="footer-office-text">
              F-6/1, Islamabad, Pakistan<br />
              Mon to Sat, 9:00 AM to 9:00 PM PKT
            </p>
            <a href="mailto:contact@hash.org" className="footer-email-link mono">
              contact@hash.org
            </a>

            <div className="footer-social-row">
              <a
                href="https://www.linkedin.com/company/hashconsultants"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn mono"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/hashconsultants"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn mono"
              >
                GitHub
              </a>
              <a
                href="https://instagram.com/hashsoftware"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn mono"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copyright mono">
            &copy; 2026 HASH Software Consultants (Private) Limited. All rights reserved.
          </p>
          <a href="#top" className="back-to-top-btn mono" aria-label="Scroll back to top">
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
};
