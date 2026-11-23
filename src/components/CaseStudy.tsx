import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, TrendingDown } from 'lucide-react';

const METRICS = [
  { label: 'Manual daily reporting time reduction', percent: '62%' },
  { label: 'Faster decision turnaround time', percent: '84%' },
  { label: 'Automated operational monitoring coverage', percent: '100%' },
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="site-section container-wide" id="cases" ref={sectionRef}>
      <div className="section-header">
        <div className="section-eyebrow-row">
          <span className="section-eyebrow mono">Case Study</span>
          <span className="hw section-annotation">// measurable business impact</span>
        </div>
        <h2 className="section-heading">Alpha Telemetry: Automated Market Engine.</h2>
      </div>

      <div className="case-study-split">
        {/* Left: Narrative + Architecture */}
        <div className="case-study-left">
          <div className="case-summary-block">
            <h3 className="case-subheading">The Challenge &amp; Solution</h3>
            <p className="case-narrative">
              Alpha's analysts spent three to four hours every morning manually gathering, verifying, and reconciling data across five disconnected operational feeds. Decisions were delayed until noon, and anomalies were frequently missed.
            </p>
            <p className="case-narrative">
              HASH engineered an automated telemetry pipeline in Python and FastAPI. The system continuously ingests market streams, runs automated anomaly checks, and compiles an executive intelligence brief delivered directly to leadership at 7:00 AM daily.
            </p>
          </div>

          <div className="case-tech-block">
            <span className="case-tech-label mono">Architecture &amp; Stack:</span>
            <div className="case-tags">
              <span className="tech-tag mono">Python</span>
              <span className="tech-tag mono">FastAPI</span>
              <span className="tech-tag mono">PostgreSQL</span>
              <span className="tech-tag mono">Docker</span>
              <span className="tech-tag mono">Live Telemetry</span>
              <span className="tech-tag mono">Automated Alerts</span>
            </div>
          </div>

          <div className="case-cta-wrap">
            <a href="#contact" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Build a custom system for your team <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Right: Clean Metrics & Impact */}
        <div className="case-study-right">
          <div className="metric-hero-card">
            <div className="metric-hero-top">
              <span className="metric-badge-impact mono">
                <TrendingDown size={14} /> Measured Outcome
              </span>
            </div>

            <div className="big-stat-number">-62%</div>
            <p className="metric-headline-label">
              Total reduction in manual operational reporting hours
            </p>

            <div className="metric-bars-group">
              {METRICS.map((metric) => (
                <div key={metric.label} className="metric-bar-item">
                  <div className="metric-label-row">
                    <span className="metric-name">{metric.label}</span>
                    <span className="metric-val mono">{metric.percent}</span>
                  </div>
                  <div className="metric-track">
                    <div
                      className={`metric-fill ${animated ? 'animated' : ''}`}
                      style={{ '--target-w': metric.percent } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="metric-quote-inline">
              <p>
                "What used to take four hours of manual collation now lands in our inboxes before market open. It gave our analysts their mornings back."
              </p>
              <span className="metric-quote-author">Tayyab R. • Founder, Alpha</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
