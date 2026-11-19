import React from 'react';
import { JOURNAL_ARTICLES } from '../data/siteData';

export const Journal: React.FC = () => {
  return (
    <section className="site-section" id="journal">
      <h2 className="section-heading">From the journal.</h2>
      <p className="section-sub">
        Notes on building software that earns its keep.
      </p>

      <div className="cards-grid">
        {JOURNAL_ARTICLES.map((article, idx) => (
          <div
            key={article.title}
            className="spotlight-card project-card"
            style={{ '--d': `${idx * 0.1}s` } as React.CSSProperties}
          >
            <div className="project-thumb" aria-hidden="true">
              <i />
              <b />
              <u />
            </div>

            <small className="mono" style={{ color: 'var(--mut)', fontSize: '13px' }}>
              {article.category}
            </small>
            <h3 style={{ marginTop: '8px', fontSize: '20px' }}>{article.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
