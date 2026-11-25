import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CAREER_ROLES } from '../data/siteData';

export const Careers: React.FC = () => {
  return (
    <section className="site-section band-mint" id="careers">
      <div className="container-wide">
        <div className="careers-box">
          <div className="careers-header">
            <h2 className="section-heading">Join our engineering team.</h2>
            <p className="section-sub" style={{ margin: '12px 0 24px' }}>
              We are looking for engineers and designers who want to build and ship real software. Islamabad-based with flexible remote options.
            </p>
          </div>

          <div className="career-roles-list">
            {CAREER_ROLES.map((role) => (
              <div key={role} className="career-role-pill">
                <span className="role-dot" aria-hidden="true" />
                <span>{role}</span>
              </div>
            ))}
          </div>

          <div className="careers-cta-row">
            <a className="btn-primary" href="#contact">
              Send your CV <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
