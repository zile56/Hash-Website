import React from 'react';

const INDUSTRIES_ROW = [
  'Fintech & Banking',
  'E-commerce & Retail',
  'Healthcare & MedTech',
  'Logistics & Supply Chain',
  'Real Estate & PropTech',
  'Education & EdTech',
  'Startups & SaaS',
  'Hospitality & Travel',
];

const SYSTEMS_ROW = [
  'AI Support Agents',
  'Custom CRMs & ERPs',
  'Workflow Automation',
  'Live Dashboards & Data',
  'Booking & Payments',
  'Customer Portals',
  'Mobile Applications',
  'API Integrations',
];

export const Industries: React.FC = () => {
  return (
    <section className="site-section industries-section" id="industries">
      <div className="container-wide">
        <div className="section-header">
          <h2 className="section-heading">Industries we build for.</h2>
          <p className="section-sub">
            Software built around how your business actually operates.
          </p>
        </div>
      </div>

      <div className="industries-mq-wrapper" aria-label="Industries and Systems We Build">
        {/* Row 1: Scrolls Left — Industries */}
        <div className="ind-mq" aria-label="Industries">
          <div className="ind-mq-track">
            {[0, 1].map((copyIndex) => (
              <div key={copyIndex} className="ind-mq-group" aria-hidden={copyIndex === 1}>
                {INDUSTRIES_ROW.map((item) => (
                  <div key={`${copyIndex}-${item}`} className="ind-mq-pill">
                    <span className="industry-pill-dot" aria-hidden="true" />
                    <span className="industry-pill-text">{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolls Right — Systems We Build */}
        <div className="ind-mq r" aria-label="Systems We Build">
          <div className="ind-mq-track">
            {[0, 1].map((copyIndex) => (
              <div key={copyIndex} className="ind-mq-group" aria-hidden={copyIndex === 1}>
                {SYSTEMS_ROW.map((item) => (
                  <div key={`${copyIndex}-${item}`} className="ind-mq-pill">
                    <span className="industry-pill-dot" aria-hidden="true" />
                    <span className="industry-pill-text">{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
