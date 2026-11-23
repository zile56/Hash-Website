import React from 'react';

const CLIENTS = [
  'Northwind',
  'Lumio',
  'Kestrel Labs',
  'Orbitly',
  'Vantage',
  'Meridian',
  'Zenith Pay',
  'Foldr',
];

const TECH_STACK = [
  'Flutter',
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'TensorFlow',
  'Firebase',
  'Figma',
  'AWS',
  'PostgreSQL',
  'TypeScript',
  'Docker',
];

export const Marquee: React.FC = () => {
  return (
    <div className="mq-wrapper" aria-label="Clients and Technology Stack">
      {/* Row 1: Clients */}
      <div className="mq" aria-label="Clients">
        <div className="mq-track">
          {[0, 1].map((copyIndex) => (
            <React.Fragment key={copyIndex}>
              {CLIENTS.map((client) => (
                <span key={`${copyIndex}-${client}`} className="mq-item">
                  <span className="mq-item-icon" aria-hidden="true">⬡</span>
                  <span>{client}</span>
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Row 2: Reversed Tech Stack */}
      <div className="mq r" aria-label="Technologies We Ship">
        <div className="mq-track">
          {[0, 1].map((copyIndex) => (
            <React.Fragment key={copyIndex}>
              {TECH_STACK.map((tech) => (
                <span key={`${copyIndex}-${tech}`} className="mq-item">
                  <span>{tech}</span>
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
