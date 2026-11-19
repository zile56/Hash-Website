import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const TASKS = [
  'AI agent answering customer calls',
  'Leads synced to your CRM',
  'Invoice reminders sent on time',
  'Weekly report built and emailed',
  'Support emails sorted and replied',
];

const TRUST_POINTS = [
  'Free 30-min call',
  'Clear timelines',
  'You own the code',
];

export const Hero: React.FC = () => {
  const [checkedCount, setCheckedCount] = useState<number>(0);
  const padRef = useRef<HTMLDivElement>(null);

  // Auto-checking sequential loop with visibility handling
  useEffect(() => {
    let count = 0;
    let timer: ReturnType<typeof setInterval> | null = null;

    const startTimer = () => {
      if (timer || document.hidden) return;
      timer = setInterval(() => {
        count = (count + 1) % (TASKS.length + 1);
        setCheckedCount(count);
      }, 1100);
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
    if (!padRef.current) return;
    const rect = padRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    padRef.current.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
  };

  const handlePointerLeave = () => {
    if (!padRef.current) return;
    padRef.current.style.transform = '';
  };

  return (
    <section className="hero-section" id="top">
      <div>
        <h1 className="hero-title">
          <span className="word-reveal" style={{ '--d': '0.1s' } as React.CSSProperties}>Automate</span>{' '}
          <span className="word-reveal" style={{ '--d': '0.2s' } as React.CSSProperties}>the</span>{' '}
          <s className="strike-reveal word-reveal" style={{ '--d': '0.35s' } as React.CSSProperties}>
            busywork.
          </s>
          <br />
          <span className="hw word-reveal" style={{ '--d': '0.7s' } as React.CSSProperties}>
            Keep the business.
          </span>
        </h1>

        <p className="hero-lead word-reveal" style={{ '--d': '0.9s' } as React.CSSProperties}>
          We build AI, web and mobile software that takes the busywork off your team and keeps your business moving around the clock.
        </p>

        <div className="hero-cta-group word-reveal" style={{ '--d': '1.05s' } as React.CSSProperties}>
          <a className="btn-primary" href="#contact">
            Start a project <ArrowUpRight size={18} />
          </a>
          <a className="btn-secondary" href="#contact">
            Book a 30-min call
          </a>
        </div>

        <ul className="hero-trust-list word-reveal" style={{ '--d': '1.2s' } as React.CSSProperties}>
          {TRUST_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>

      <div
        className="hero-pad-wrapper word-reveal"
        style={{ '--d': '0.8s' } as React.CSSProperties}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <div className="interactive-pad" ref={padRef}>
          <span className="pad-tag live-badge">
            <span className="live-dot" aria-hidden="true" /> live
          </span>
          <h3 className="pad-heading">Automation running</h3>

          <ul className="pad-list">
            {TASKS.map((task, idx) => {
              const isDone = idx < checkedCount;
              return (
                <li key={task} className={isDone ? 'checked' : ''}>
                  <div className="pad-checkbox" aria-hidden="true" />
                  <span className="pad-task-label">{task}</span>
                  <span className={`task-status-pill ${isDone ? 'done' : 'queued'}`}>
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
                style={{ width: `${checkedCount * 20}%` }}
                aria-label={`${checkedCount * 20}% complete`}
              />
            </div>
            <span className="mono pad-counter">{checkedCount} of 5 automated</span>
          </div>
        </div>
      </div>
    </section>
  );
};
