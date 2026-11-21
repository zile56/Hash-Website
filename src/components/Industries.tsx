import React from 'react';
import { TARGET_INDUSTRIES } from '../data/siteData';

export const Industries: React.FC = () => {
  return (
    <section className="site-section container-wide" id="industries">
      <div className="section-header">
        <span className="section-eyebrow mono">Domain Expertise</span>
        <h2 className="section-heading">Industries and solutions we build for.</h2>
        <p className="section-sub">
          Proven architecture patterns adapted to the operational requirements of your sector.
        </p>
      </div>

      <div className="industries-pill-grid">
        {TARGET_INDUSTRIES.map((item) => (
          <div key={item} className="industry-pill">
            <span className="industry-pill-dot" aria-hidden="true" />
            <span className="industry-pill-text">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
