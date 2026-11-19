import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="site-section" id="about">
      <h2 className="section-heading">A new company with a clear job.</h2>

      <div className="cards-grid" style={{ marginTop: '34px' }}>
        <div className="spotlight-card">
          <h3 style={{ fontSize: '20px' }}>Who we are</h3>
          <p style={{ marginTop: '8px' }}>
            HASH Software Consultants (Private) Limited started in 2026 in Islamabad. We are an agile, dedicated team of software architects and designers who treat every client product as our own.
          </p>
        </div>

        <div className="spotlight-card" style={{ '--d': '0.1s' } as React.CSSProperties}>
          <h3 style={{ fontSize: '20px' }}>Mission</h3>
          <p style={{ marginTop: '8px' }}>
            Make advanced technology intuitive, cost-effective, and immediately impactful for ambitious businesses of every scale.
          </p>
        </div>

        <div className="spotlight-card" style={{ '--d': '0.2s' } as React.CSSProperties}>
          <h3 style={{ fontSize: '20px' }}>What we value</h3>
          <p style={{ marginTop: '8px' }}>
            Direct communication, realistic milestone commitments, maintainable clean code, and engineering that scales effortlessly in production.
          </p>
        </div>
      </div>
    </section>
  );
};
