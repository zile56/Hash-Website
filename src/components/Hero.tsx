import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const TASKS = [
  'AI agent answering customer inquiries',
  'Leads synced to PostgreSQL & CRM',
  'Invoice reconciliation automated',
  'Weekly production build deployed',
  'Customer support tickets triaged',
];

const TRUST_POINTS = [
  'Free 30-min consultation',
  'Weekly working builds',
  'Full IP and code ownership',
];

export const Hero: React.FC = () => {
  const [checkedCount, setCheckedCount] = useState<number>(0);
  const padRef = useRef<HTMLDivElement>(null);

  // Auto-checking sequential loop with visibility handling
  useEffect(() => {
    const reducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      setCheckedCount(TASKS.length);
      return;
    }

    let count = 0;
    let timer: ReturnType<typeof setInterval> | null = null;

    const startTimer = () => {
      if (timer || document.hidden) return;
      timer = setInterval(() => {
        count = (count + 1) % (TASKS.length + 1);
        setCheckedCount(count);
      }, 1200);
    };

    const stopTimer = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };

    startTimer();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopTimer();
      } else {
        startTimer();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      stopTimer();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // 3D tilt interaction (desktop only)
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const reducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || !padRef.current) return;
    const rect = padRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    padRef.current.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  };

  const handlePointerLeave = () => {
    if (!padRef.current) return;
    padRef.current.style.transform = '';
  };

  return (
    <section className="hero-section container-wide" id="top">
      <div className="hero-left">
        <div className="consultancy-badge">
          <span className="badge-dot" aria-hidden="true" />
          <span>Islamabad Software &amp; AI Engineering Consultancy</span>
        </div>

        <h1 className="hero-title">
          Automate the <s className="strike-reveal">busywork.</s>
          <br />
          <span className="hw">Keep the business.</span>
        </h1>

        <p className="hero-lead">
          HASH Software Consultants designs, builds, and deploys production software for startups and growing companies. We build custom web apps, mobile systems, and AI workflows that take the busywork off your team.
        </p>

        <div className="hero-cta-group">
          <a className="btn-primary" href="#contact">
            Start a project <ArrowUpRight size={17} />
          </a>
          <a className="btn-secondary" href="#work">
            View our work
          </a>
        </div>

        <ul className="hero-trust-list">
          {TRUST_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>

      <div
        className="hero-pad-wrapper"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <div className="pad interactive-pad" ref={padRef}>
          <span className="tag pad-tag live-badge">
            <span className="live-dot" aria-hidden="true" /> live
          </span>

          <div className="pad-header-row">
            <h3 className="pad-heading">Automation running</h3>
          </div>

          <ul className="pad-list">
            {TASKS.map((task, idx) => {
              const isDone = idx < checkedCount;
              return (
                <li key={task} className={isDone ? 'checked' : ''}>
                  <div className="pad-checkbox" aria-hidden="true">
                    {isDone ? '✓' : ''}
                  </div>
                  <span className="pad-task-label">{task}</span>
                  <span className={`task-status-pill mono ${isDone ? 'done' : 'queued'}`}>
                    {isDone ? 'automated' : 'queued'}
                  </span>
                </li>
              );
            })}
          </ul>

          <div className="pad-footer">
            <div className="progress-bar-track">
              <div
                className="progress-bar-fill"
                style={{ width: `${(checkedCount / TASKS.length) * 100}%` }}
                aria-label={`${Math.round((checkedCount / TASKS.length) * 100)}% complete`}
              />
            </div>
            <div className="ft">
              <span className="mono pad-counter">{checkedCount} of {TASKS.length} automated</span>
              <div className="pen" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
