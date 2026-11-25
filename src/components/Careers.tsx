import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CAREER_ROLES } from '../data/siteData';
import { CVModal } from './CVModal';

export const Careers: React.FC = () => {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <section className="site-section" id="careers">
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
            <button
              type="button"
              className="btn-primary"
              onClick={() => setCvModalOpen(true)}
            >
              Send your CV <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </section>
  );
};
