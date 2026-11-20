import React, { useState, useEffect, useRef, useCallback } from 'react';

export const LogoIntro: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isDocking, setIsDocking] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const flyerRef = useRef<HTMLDivElement>(null);
  const dockTriggeredRef = useRef(false);

  const triggerDock = useCallback(() => {
    if (dockTriggeredRef.current) return;
    dockTriggeredRef.current = true;

    // Immediately restore scrolling on the body so interaction is never blocked
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

      // GPU-composited hardware transform into target position
      flyer.style.transform = `translate(calc(-50% + ${dx.toFixed(2)}px), calc(-50% + ${dy.toFixed(2)}px)) scale(${scale.toFixed(4)})`;
      flyer.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
    }

    setIsDocking(true);

    // After docking flight concludes, reveal the permanent navbar logo and unmount
    setTimeout(() => {
      document.body.classList.remove('intro-active');
      if (target) {
        target.style.opacity = '1';
      }
      setIsHidden(true);
    }, 520);
  }, []);

  useEffect(() => {
    // Respect prefers-reduced-motion: reduce
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.body.classList.remove('intro-active');
      const target = document.querySelector('.brand-logo-img') as HTMLElement | null;
      if (target) target.style.opacity = '1';
      setIsHidden(true);
      return;
    }

    document.body.classList.add('intro-active');

    // Video fast playback to keep the shard assembly snappy (~0.9s)
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.4;
      videoRef.current.play().catch(() => {});
    }

    // Trigger docking automatically when logo finishes assembly (~0.95s)
    const dockTimer = setTimeout(() => {
      triggerDock();
    }, 950);

    // Keyboard shortcuts & click anywhere to skip/dock immediately
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        triggerDock();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(dockTimer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('intro-active');
      document.body.style.overflow = '';
    };
  }, [triggerDock]);

  if (isHidden) {
    return null;
  }

  return (
    <div
      className="logo-intro-root"
      onClick={triggerDock}
      aria-hidden="true"
    >
      <div
        className={`logo-intro-backdrop ${isDocking ? 'logo-intro-backdrop--fading' : ''}`}
      />

      <div
        ref={flyerRef}
        className={`logo-intro-flyer ${isDocking ? 'logo-intro-flyer--docking' : ''}`}
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
            onError={triggerDock}
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
      </div>
    </div>
  );
};
