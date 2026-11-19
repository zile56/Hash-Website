import React, { useEffect, useRef, useState } from 'react';

const METRICS = [
  { label: 'Manual reporting time reduction', percent: '62%' },
  { label: 'Faster decision turnaround', percent: '84%' },
  { label: 'Automated monitoring coverage', percent: '100%' },
];

export const CaseStudy: React.FC = () => {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="site-section" id="cases" ref={sectionRef}>
      <h2 className="section-heading">Case study: Alpha.</h2>

      <div className="case-study-grid" style={{ marginTop: '24px' }}>
        <div>
          <p className="section-sub" style={{ margin: '14px 0 24px' }}>
            Tayyab’s team spent every morning pulling numbers from five separate operational sources. We built an autonomous AI engine that reads live data streams, flags anomalous metrics, and dispatches an executive summary before market open.
          </p>

          <div className="tag-pills">
            <span>AI/ML</span>
            <span>Data pipelines</span>
            <span>Dashboard</span>
            <span>Alerts</span>
          </div>
        </div>

        <div className="spotlight-card">
          {METRICS.map((metric) => (
            <div key={metric.label}>
              <p style={{ fontSize: '14px', color: 'var(--mut)', marginBottom: '4px' }}>
                {metric.label}
              </p>
              <div className={`metric-bar-track ${animated ? 'animated' : ''}`}>
                <span
                  className="metric-bar-fill"
                  style={{ '--v': metric.percent } as React.CSSProperties}
                  aria-label={`${metric.label}: ${metric.percent}`}
                />
              </div>
            </div>
          ))}

          <div className="big-stat-number" style={{ marginTop: '20px' }}>
            −62%
          </div>
          <p style={{ color: 'var(--sv)', fontWeight: 500 }}>
            less time spent on manual reporting
          </p>
        </div>
      </div>
    </section>
  );
};
