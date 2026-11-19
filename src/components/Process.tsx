import React, { useEffect, useRef, useState } from 'react';
import { PROCESS_STEPS } from '../data/siteData';

export const Process: React.FC = () => {
  const [lineActive, setLineActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLineActive(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="site-section" id="process">
      <h2 className="section-heading">How we work.</h2>
      <p className="section-sub">
        Five clear steps, with you in the loop at every one.
      </p>

      <div ref={containerRef}>
        <div className={`process-line ${lineActive ? 'animated' : ''}`} aria-hidden="true" />

        <div className="process-grid">
          {PROCESS_STEPS.map((step) => (
            <div key={step.stepNumber} className="spotlight-card">
              <div
                className="service-icon-box mono"
                style={{ fontSize: '18px', fontWeight: 700 }}
              >
                0{step.stepNumber}
              </div>
              <h3 style={{ fontSize: '19px' }}>{step.title}</h3>
              <p style={{ marginTop: '8px' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
