import React from 'react';

const INDUSTRIES_BAR = [
  'Fintech',
  'Healthcare',
  'E-commerce',
  'Logistics',
  'Education',
  'Real Estate',
  'Retail',
  'Startups & SaaS',
];

const CAPABILITIES_BAR = [
  'AI Agents',
  'Custom Web Apps',
  'Flutter Mobile',
  'Data Pipelines',
  'UI/UX Design',
  'Workflow Automation',
  'Cloud & DevOps',
  'API Integrations',
];

export const Marquee: React.FC = () => {
  return (
    <div className="mq-wrapper" aria-label="Industries and Services">
      {/* Row 1: Industries */}
      <div className="mq" aria-label="Industries We Build For">
        <div className="mq-track">
          {[0, 1].map((copyIndex) => (
            <React.Fragment key={copyIndex}>
              {INDUSTRIES_BAR.map((industry) => (
                <span key={`${copyIndex}-${industry}`} className="mq-item">
                  <span className="mq-item-icon" aria-hidden="true">⬡</span>
                  <span>{industry}</span>
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Row 2: Services & Capabilities */}
      <div className="mq r" aria-label="Services and Capabilities">
        <div className="mq-track">
          {[0, 1].map((copyIndex) => (
            <React.Fragment key={copyIndex}>
              {CAPABILITIES_BAR.map((cap) => (
                <span key={`${copyIndex}-${cap}`} className="mq-item">
                  <span>{cap}</span>
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
