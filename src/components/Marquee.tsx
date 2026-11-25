import React from 'react';

const TECH_STACK_STRIP = [
  'React',
  'Next.js',
  'TypeScript',
  'Flutter',
  'Kotlin',
  'Python',
  'Node.js',
  'PostgreSQL',
  'AWS',
  'Docker',
  'OpenAI',
  'Figma',
  'Tailwind CSS',
  'Firebase',
];

export const Marquee: React.FC = () => {
  return (
    <div className="mq-wrapper" aria-label="Technology Stack">
      <div className="mq" aria-label="Technologies We Ship">
        <div className="mq-track">
          {[0, 1].map((copyIndex) => (
            <div key={copyIndex} className="mq-group" aria-hidden={copyIndex === 1}>
              {TECH_STACK_STRIP.map((tech) => (
                <span key={`${copyIndex}-${tech}`} className="mq-item">
                  <span className="mq-item-icon" aria-hidden="true">⬡</span>
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
