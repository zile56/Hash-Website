import React, { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#cases', label: 'Cases' },
  { href: '#about', label: 'About' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <a className="brand-logo-link" href="#top" aria-label="HASH Home">
        <img
          src="/hash-logo.png"
          alt="HASH Logo"
          className="brand-logo-img"
        />
        <span className="brand-logo-sub">
          SOFTWARE<br />CONSULTANTS
        </span>
      </a>

      <nav
        className={`site-nav ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Main Navigation"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={activeSection === link.href.slice(1) ? 'active' : ''}
            onClick={handleLinkClick}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <button
        className="mobile-menu-btn"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-expanded={mobileMenuOpen}
        aria-label="Toggle navigation menu"
      >
        {mobileMenuOpen ? 'Close' : 'Menu'}
      </button>
    </header>
  );
};
