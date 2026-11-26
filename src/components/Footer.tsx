import React from 'react';
import { navigateTo } from '../utils/navigation';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer-centered">
      <div className="container-wide">
        <a
          href="/"
          className="footer-centered-logo-link"
          aria-label="HASH Home"
          onClick={(e) => navigateTo('/', e)}
        >
          <img
            src="/hash-logo.png"
            alt="HASH"
            className="footer-centered-logo"
            width="40"
            height="40"
          />
        </a>
        <p className="footer-centered-copy">
          &copy; 2026 HASH Software Consultants (Private) Limited ·{' '}
          <a href="mailto:contact@hashtech.tech" className="footer-email-link">
            contact@hashtech.tech
          </a>
        </p>
      </div>
    </footer>
  );
};
