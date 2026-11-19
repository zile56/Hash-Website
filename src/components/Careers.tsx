import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CAREER_ROLES } from '../data/siteData';

export const Careers: React.FC = () => {
  return (
    <section className="site-section" id="careers">
      <div className="spotlight-card" style={{ padding: 'clamp(28px, 4vw, 48px)' }}>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 800, letterSpacing: '-0.03em' }}>
          We’re hiring.
        </h2>
        <p className="section-sub" style={{ margin: '10px 0 20px' }}>
          Join an agile team shipping production systems for global founders. Open roles:
        </p>

        <div className="tag-pills" style={{ margin: '0 0 26px' }}>
          {CAREER_ROLES.map((role) => (
            <span key={role}>{role}</span>
          ))}
        </div>

        <p style={{ color: 'var(--mut)', marginBottom: '24px', fontSize: '16px' }}>
          We look for curious minds who care about craft, clean architectures, and disciplined delivery. Remote-friendly, Islamabad-based.
        </p>

        <a className="btn-primary" href="#contact">
          Send your portfolio or GitHub <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
};
