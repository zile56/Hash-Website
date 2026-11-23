import React from 'react';
import { PROCESS_STEPS } from '../data/siteData';

export const Process: React.FC = () => {
  return (
    <section className="site-section container-wide" id="process">
      <div className="section-header">
        <h2 className="section-heading">How we build and ship software.</h2>
        <p className="section-sub">
          A disciplined, five-step delivery cadence with weekly working builds and full transparency.
        </p>
      </div>

      <div className="process-editorial-row">
        {PROCESS_STEPS.map((step) => (
          <div key={step.stepNumber} className="process-step-col">
            <div className="process-step-top">
              <span className="process-step-num mono">0{step.stepNumber}</span>
              <span className="process-step-line" aria-hidden="true" />
            </div>
            <h3 className="process-step-title">{step.title}</h3>
            <p className="process-step-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
