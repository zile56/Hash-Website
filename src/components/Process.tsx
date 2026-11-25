import React from 'react';
import { PROCESS_STEPS } from '../data/siteData';

export const Process: React.FC = () => {
  return (
    <section className="site-section band-mint" id="process">
      <div className="container-wide">
        <div className="section-header">
          <h2 className="section-heading">How we work.</h2>
          <p className="section-sub">
            Five steps from idea to launch, with weekly working builds.
          </p>
        </div>

        <div className="process-editorial-row">
          {PROCESS_STEPS.map((step) => (
            <div key={step.stepNumber} className="process-step-col">
              <div className="process-step-top">
                <span className="process-step-line" aria-hidden="true" />
              </div>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
