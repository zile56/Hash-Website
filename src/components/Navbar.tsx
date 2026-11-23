import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
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
      setScrolled(window.scrollY > 20);
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
      { rootMargin: '-30% 0px -60% 0px' }
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
      <div className="header-inner container-wide">
        <a className="brand-logo-link" href="#top" aria-label="HASH Home">
          <img
            src="/hash-logo.png"
            alt="HASH Logo"
            className="brand-logo-img"
            width="38"
            height="38"
          />
        </a>

        <nav className="desktop-nav" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a href="#contact" className="btn-cta-nav">
            Start a project <ArrowUpRight size={15} />
          </a>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer" role="dialog" aria-label="Mobile Navigation">
          <div className="mobile-nav-links">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`mobile-nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', marginTop: '12px' }}
              onClick={handleLinkClick}
            >
              Start a project <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
