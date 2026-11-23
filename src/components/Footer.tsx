import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer-centered">
      <div className="container-wide">
        <a href="#top" className="footer-centered-logo-link" aria-label="HASH Home">
          <img
            src="/hash-logo.png"
            alt="HASH"
            className="footer-centered-logo"
            width="40"
            height="40"
          />
        </a>
        <p className="footer-centered-copy">
          &copy; 2026 HASH Software Consultants (Private) Limited.
        </p>
      </div>
    </footer>
  );
};
