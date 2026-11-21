import React from 'react';
import { ArrowUpRight, Check, Code2, Cpu, Database, ShieldCheck } from 'lucide-react';

const DELIVERY_PILLARS = [
  {
    icon: Code2,
    title: 'Web & Mobile Apps',
    desc: 'High-performance cross-platform Flutter mobile apps and responsive React / Next.js web applications.',
    tags: ['React', 'Next.js', 'Flutter'],
  },
  {
    icon: Cpu,
    title: 'AI Agents & Automation',
    desc: 'Custom autonomous LLM agents, voice assistants, and operational workflows trained on business data.',
    tags: ['Python', 'LangChain', 'FastAPI'],
  },
  {
    icon: Database,
    title: 'Data & Cloud Systems',
    desc: 'Relational & vector databases, real-time telemetry dashboards, and scalable cloud architectures.',
    tags: ['PostgreSQL', 'AWS', 'Docker'],
  },
];

export const Hero: React.FC = () => {
  return (
    <section className="hero-section container-wide" id="top">
      <div className="hero-left">
        <div className="consultancy-badge">
          <span className="badge-dot" aria-hidden="true" />
          <span>Islamabad Software &amp; AI Engineering Consultancy</span>
        </div>

        <h1 className="hero-title">
          Custom software, mobile apps, and AI systems built for your business.
        </h1>

        <p className="hero-lead">
          HASH Software Consultants designs, builds, and deploys production software for startups and growing companies. You get direct access to our engineers, weekly working builds, and full ownership of your source code.
        </p>

        <div className="hero-cta-group">
          <a className="btn-primary" href="#contact">
            Start a project <ArrowUpRight size={17} />
          </a>
          <a className="btn-secondary" href="#work">
            View our work
          </a>
        </div>

        <div className="hero-trust-strip">
          <div className="trust-item">
            <Check size={14} className="trust-icon" />
            <span>Free 30-minute consultation</span>
          </div>
          <span className="trust-divider" aria-hidden="true">•</span>
          <div className="trust-item">
            <Check size={14} className="trust-icon" />
            <span>Weekly working builds</span>
          </div>
          <span className="trust-divider" aria-hidden="true">•</span>
          <div className="trust-item">
            <Check size={14} className="trust-icon" />
            <span>Full source code ownership</span>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="architecture-card">
          <div className="arch-header">
            <div className="arch-header-left">
              <span className="arch-status-dot" aria-hidden="true" />
              <span className="arch-title">Engineering Delivery Model</span>
            </div>
            <span className="arch-badge mono">Production Ready</span>
          </div>

          <div className="arch-pillars">
            {DELIVERY_PILLARS.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div key={pillar.title} className="arch-pillar-item">
                  <div className="pillar-icon-wrap">
                    <IconComp size={18} />
                  </div>
                  <div className="pillar-content">
                    <div className="pillar-header">
                      <h4>{pillar.title}</h4>
                    </div>
                    <p>{pillar.desc}</p>
                    <div className="pillar-tags">
                      {pillar.tags.map((tag) => (
                        <span key={tag} className="pillar-tag mono">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="arch-footer">
            <div className="arch-spec-row">
              <span className="spec-label">Core Stack:</span>
              <span className="spec-values mono">React, Next.js, Flutter, Python, AWS, PostgreSQL</span>
            </div>
            <div className="arch-guarantee-row">
              <ShieldCheck size={15} className="guarantee-icon" />
              <span>Full IP and Git repository transfer upon completion</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
