import React, { useEffect, useRef, useState } from 'react';

interface StatItem {
  target: number;
  suffix?: string;
  label: string;
}

const STATS_DATA: StatItem[] = [
  { target: 12, suffix: '+', label: 'Projects shipped' },
  { target: 10, label: 'Happy clients' },
  { target: 8, label: 'Core services' },
  { target: 24, suffix: 'h', label: 'Average response time' },
];

export const Stats: React.FC = () => {
  const [counts, setCounts] = useState<number[]>(STATS_DATA.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);
  const animatedRef = useRef<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            animateNumbers();
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

  const animateNumbers = () => {
    const startTime = performance.now();
    const duration = 1600;

    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      // easeOutCubic
      const ease = 1 - Math.pow(1 - progress, 3);

      setCounts(
        STATS_DATA.map((item) => {
          return Math.round(item.target * ease);
        })
      );

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <section className="site-section" id="stats" ref={sectionRef}>
      <div className="cards-grid">
        {STATS_DATA.map((stat, idx) => (
          <div
            key={stat.label}
            className="spotlight-card"
            style={{ '--d': `${idx * 0.1}s` } as React.CSSProperties}
          >
            <div className="big-stat-number">
              {counts[idx]}
              {stat.suffix && <span style={{ color: 'var(--sv)', fontSize: '0.85em' }}>{stat.suffix}</span>}
            </div>
            <p style={{ marginTop: '8px' }}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
