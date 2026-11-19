import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <a href="#top" aria-label="Back to top">
        <img src="/hash-logo.png" alt="HASH Logo" />
      </a>
      <p style={{ marginTop: '12px' }}>
        © 2026 HASH Software Consultants (Private) Limited. All rights reserved.
      </p>
      <div
        style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          marginTop: '16px',
          fontSize: '13px',
          color: 'var(--mut)',
        }}
      >
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#cases">Case Studies</a>
        <a href="#about">About</a>
        <a href="#careers">Careers</a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  );
};
