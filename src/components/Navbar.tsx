import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navigateTo } from '../utils/navigation';

const NAV_LINKS = [
  { href: '/#services', sectionId: 'services', label: 'Services' },
  { href: '/work', sectionId: 'work-page', label: 'Work' },
  { href: '/#about', sectionId: 'about', label: 'About' },
  { href: '/#faq', sectionId: 'faq', label: 'FAQ' },
  { href: '/contact', sectionId: 'contact-page', label: 'Contact' },
];

interface NavbarProps {
  currentPath: string;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath }) => {
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
    if (currentPath !== '/') {
      setActiveSection('');
      return;
    }

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
  }, [currentPath]);

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    setMobileMenuOpen(false);
    navigateTo(href, e);
  };

  const isLinkActive = (link: { href: string; sectionId: string }) => {
    if (link.href === '/contact' || link.href === '/work') return currentPath === link.href;
    return currentPath === '/' && activeSection === link.sectionId;
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner container-wide">
        <a
          className="brand-logo-link"
          href="/"
          aria-label="HASH Home"
          onClick={(e) => handleNavClick('/', e)}
        >
          <img
            src="/hash-logo.png"
            alt="HASH Logo"
            className="brand-logo-img"
          />
        </a>

        <nav className="desktop-nav" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${isLinkActive(link) ? 'active' : ''}`}
              onClick={(e) => handleNavClick(link.href, e)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a
            href="/contact"
            className="btn-cta-nav"
            onClick={(e) => handleNavClick('/contact', e)}
          >
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
                className={`mobile-nav-link ${isLinkActive(link) ? 'active' : ''}`}
                onClick={(e) => handleNavClick(link.href, e)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              className="btn-primary mobile-drawer-cta"
              style={{ width: '100%', justifyContent: 'center', marginTop: '12px' }}
              onClick={(e) => handleNavClick('/contact', e)}
            >
              Start a project <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
