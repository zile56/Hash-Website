import React, { useState, useEffect, useRef } from 'react';

export const LogoIntro: React.FC = () => {
  const [isExiting, setIsExiting] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const dismissedRef = useRef(false);

  const handleDismiss = () => {
    if (dismissedRef.current) return;
    dismissedRef.current = true;
    setIsExiting(true);

    // Immediately restore scrolling on the body so interactions are never blocked
    document.body.style.overflow = '';

    // Wait for the exit fade-out transition to finish before unmounting from DOM
    setTimeout(() => {
      setIsHidden(true);
    }, 750);
  };

  useEffect(() => {
    // Respect prefers-reduced-motion: reduce
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsHidden(true);
      return;
    }

    // Lock background scroll during splash
    document.body.style.overflow = 'hidden';

    // Start video playback
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // If browser blocks autoplay, user can tap to skip or play
      });
    }

    // Fallback safety timeout (animation is 6.67s; auto-dismiss at 7.2s)
    const fallbackTimer = setTimeout(() => {
      handleDismiss();
    }, 7200);

    // Keyboard shortcuts (Esc, Space, Enter)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleDismiss();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(fallbackTimer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const p = Math.min(1, Math.max(0, videoRef.current.currentTime / videoRef.current.duration));
      setProgress(p);
    }
  };

  if (isHidden) {
    return null;
  }

  return (
    <div
      className={`logo-intro-overlay ${isExiting ? 'logo-intro--exiting' : ''}`}
      onClick={handleDismiss}
      role="dialog"
      aria-modal="true"
      aria-label="HASH Software Consultants opening intro"
    >
      <div className="logo-intro-content" onClick={(e) => e.stopPropagation()}>
        <div className="logo-intro-media-wrapper">
          <video
            ref={videoRef}
            src="/hash-logo-animation.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleDismiss}
            onError={handleDismiss}
            className="logo-intro-video"
            aria-label="HASH Logo Animation"
          />
        </div>

        <div className="logo-intro-meta mono" aria-hidden="true">
          <span>HASH SOFTWARE CONSULTANTS</span>
          <span className="logo-intro-meta-dot">·</span>
          <span>SYSTEM INITIALIZE</span>
        </div>
      </div>

      <button
        type="button"
        className="logo-intro-skip mono"
        onClick={(e) => {
          e.stopPropagation();
          handleDismiss();
        }}
        aria-label="Skip intro animation"
      >
        <span>SKIP</span>
        <span className="logo-intro-skip-badge">[ESC]</span>
      </button>

      <div className="logo-intro-timeline" aria-hidden="true">
        <div
          className="logo-intro-timeline-fill"
          style={{ width: `${(progress * 100).toFixed(1)}%` }}
        />
      </div>
    </div>
  );
};
