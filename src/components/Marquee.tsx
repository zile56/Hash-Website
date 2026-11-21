import React from 'react';
import { TECH_STACK } from '../data/siteData';

export const Marquee: React.FC = () => {
  return (
    <div className="tech-strip-wrapper">
      <div className="tech-strip container-wide">
        <span className="tech-strip-label mono">Technologies We Ship:</span>
        <div className="tech-strip-items">
          {TECH_STACK.map((tech, idx) => (
            <React.Fragment key={tech}>
              <span className="tech-item">{tech}</span>
              {idx < TECH_STACK.length - 1 && (
                <span className="tech-sep" aria-hidden="true">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
