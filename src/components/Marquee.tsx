import React from 'react';
import { CLIENTS, TECH_STACK } from '../data/siteData';

export const Marquee: React.FC = () => {
  // Repeat items to provide seamless infinite looping
  const clientsDoubled = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS];
  const techDoubled = [...TECH_STACK, ...TECH_STACK, ...TECH_STACK, ...TECH_STACK];

  return (
    <div className="marquee-wrapper" aria-hidden="true">
      <div className="marquee-container">
        <div className="marquee-track">
          <span style={{ color: 'var(--mut)', marginRight: '20px' }}>Trusted by</span>
          {clientsDoubled.map((client, idx) => (
            <span key={`client-${client}-${idx}`}>
              <span style={{ color: 'var(--sv)', marginRight: '10px' }}>⬡</span>
              {client}
            </span>
          ))}
        </div>
      </div>

      <div className="marquee-container reverse">
        <div className="marquee-track">
          {techDoubled.map((tech, idx) => (
            <span key={`tech-${tech}-${idx}`}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
