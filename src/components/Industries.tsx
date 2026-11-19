import React from 'react';
import { INDUSTRIES, SOLUTIONS } from '../data/siteData';

export const Industries: React.FC = () => {
  const industriesDoubled = [...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES];
  const solutionsDoubled = [...SOLUTIONS, ...SOLUTIONS, ...SOLUTIONS, ...SOLUTIONS];

  return (
    <section className="site-section" id="industries">
      <h2 className="section-heading">Industries we build for.</h2>
      <p className="section-sub">
        The same engineering, tuned to how your sector actually works.
      </p>

      <div className="industries-marquees-wrap" aria-hidden="true">
        <div className="marquee-container" style={{ marginTop: '34px' }}>
          <div className="marquee-track">
            {industriesDoubled.map((ind, idx) => (
              <span key={`ind-${ind}-${idx}`}>
                <span style={{ color: 'var(--sv)', marginRight: '8px' }}>◈</span>
                {ind}
              </span>
            ))}
          </div>
        </div>

        <div className="marquee-container reverse">
          <div className="marquee-track">
            {solutionsDoubled.map((sol, idx) => (
              <span key={`sol-${sol}-${idx}`}>
                {sol}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
