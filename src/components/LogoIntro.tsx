import React, { useState, useEffect, useRef, useCallback } from 'react';

export const LogoIntro: React.FC = () => {
  const [isComplete, setIsComplete] = useState(false);
  const [isDocking, setIsDocking] = useState(false);
  const [isLocking, setIsLocking] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const flyerRef = useRef<HTMLDivElement>(null);
  const dockTriggeredRef = useRef(false);

  const triggerDock = useCallback(() => {
    if (dockTriggeredRef.current) return;
    dockTriggeredRef.current = true;

    // Immediately restore scrolling on the body so interactions are never blocked
    document.body.style.overflow = '';

    const target = document.querySelector('.brand-logo-img') as HTMLElement | null;
    const flyer = flyerRef.current;

    if (target && flyer) {
      const targetRect = target.getBoundingClientRect();
      const currentRect = flyer.getBoundingClientRect();

      const targetCenterX = targetRect.left + targetRect.width / 2;
      const targetCenterY = targetRect.top + targetRect.height / 2;
      const currentCenterX = currentRect.left + currentRect.width / 2;
      const currentCenterY = currentRect.top + currentRect.height / 2;

      const dx = targetCenterX - currentCenterX;
      const dy = targetCenterY - currentCenterY;
      const scale = targetRect.width / currentRect.width;

      // GPU-composited hardware glide to target header position (700ms)
      flyer.style.transform = `translate(calc(-50% + ${dx.toFixed(2)}px), calc(-50% + ${dy.toFixed(2)}px)) scale(${scale.toFixed(4)})`;
      flyer.style.transition = 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
    }

    setIsDocking(true);

    // Lock-in / payoff beat right when the logo arrives at the header (at 680ms)
    setTimeout(() => {
      setIsLocking(true);

      // Settle permanent logo and clean unmount (at 1000ms)
      setTimeout(() => {
        document.body.classList.remove('intro-active');
        if (target) {
          target.style.opacity = '1';
        }
        setIsComplete(true);
      }, 320);
    }, 680);
  }, []);

  useEffect(() => {
    // Respect prefers-reduced-motion: reduce
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.body.classList.remove('intro-active');
      const target = document.querySelector('.brand-logo-img') as HTMLElement | null;
      if (target) target.style.opacity = '1';
      setIsComplete(true);
      return;
    }

    document.body.classList.add('intro-active');

    // Preload crisp PNG logo
    const preloadImg = new Image();
    preloadImg.src = '/hash-logo.png';

    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      // Paced playback so shards assemble and sheen sweeps naturally without pause
      video.playbackRate = 1.35;

      const startPlayback = () => {
        const p = video.play();
        if (p !== undefined) {
          p.catch((err) => {
            console.warn('Playback pending user interaction:', err);
          });
        }
      };

      if (video.readyState >= 2) {
        startPlayback();
      } else {
        video.addEventListener('canplay', startPlayback, { once: true });
      }

      // Continuous unbroken glide: trigger as soon as HASH letters form and sheen sweeps (~4.0s video time)
      const handleTimeUpdate = () => {
        if (video.currentTime >= 4.0) {
          triggerDock();
        }
      };
      video.addEventListener('timeupdate', handleTimeUpdate);
    }

    // Safety fallback timer: in case video decoding stalls
    const safetyTimer = setTimeout(() => {
      triggerDock();
    }, 4800);

    // Escape key skips directly into header dock
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        triggerDock();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(safetyTimer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [triggerDock]);

  if (isComplete) {
    return null;
  }

  return (
    <div
      className="logo-intro-root"
      aria-hidden="true"
    >
      <div
        className={`logo-intro-backdrop ${isDocking ? 'logo-intro-backdrop--fading' : ''}`}
      />

      <div
        ref={flyerRef}
        className={`logo-intro-flyer ${isDocking ? 'logo-intro-flyer--docking' : ''} ${isLocking ? 'logo-intro-flyer--locked' : ''}`}
      >
        <div
          className="logo-intro-flyer-video-wrap"
          style={{ opacity: isDocking ? 0 : 1 }}
        >
          <video
            ref={videoRef}
            src="/hash-logo-animation.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={triggerDock}
            className="logo-intro-video"
            aria-label="HASH Logo Animation"
          />
        </div>

        <img
          src="/hash-logo.png"
          alt="HASH Logo"
          className="logo-intro-img"
          style={{ opacity: isDocking ? 1 : 0 }}
        />

        {/* Luminous lock-in accent pulse beat */}
        <div
          className={`logo-lockin-bloom ${isLocking ? 'logo-lockin-bloom--active' : ''}`}
          aria-hidden="true"
        />
      </div>
    </div>
  );
};
