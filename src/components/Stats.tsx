import React, { useEffect, useRef, useState } from 'react';

interface StatItem {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
  detail: string;
}

const STATS_DATA: StatItem[] = [
  { target: 12, suffix: '+', label: 'Projects shipped', detail: 'Production web, mobile & AI apps' },
  { target: 10, suffix: '+', label: 'Clients', detail: 'Founders & scaling teams' },
  { target: 8, label: 'Core services', detail: 'End-to-end technical capabilities' },
  { target: 24, suffix: 'h', label: 'Average response time', detail: 'Direct engineering Slack & calls' },
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
    const duration = 1200;

    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      setCounts(
        STATS_DATA.map((item) => Math.round(item.target * ease))
      );

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <section className="stats-section band-neon" id="stats" ref={sectionRef}>
      <div className="container-wide">
        <div className="stats-strip-bar">
          {STATS_DATA.map((stat, idx) => (
            <div key={stat.label} className="stat-col">
              <div className="stat-number-wrap">
                <span className="stat-number">{counts[idx]}</span>
                {stat.suffix && <span className="stat-suffix">{stat.suffix}</span>}
              </div>
              <div className="stat-text">
                <h4 className="stat-label">{stat.label}</h4>
                <p className="stat-detail">{stat.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
