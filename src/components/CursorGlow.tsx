import React, { useEffect, useRef } from 'react';

export const CursorGlow: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion: reduce
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let rafId = 0;
    let pendingX = -1000;
    let pendingY = -1000;
    let pendingTarget: HTMLElement | null = null;

    const flushPointer = () => {
      rafId = 0;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${pendingX}px, ${pendingY}px, 0)`;
      }

      if (pendingTarget) {
        const card = pendingTarget.closest('.spotlight-card') as HTMLElement | null;
        if (card) {
          const rect = card.getBoundingClientRect();
          card.style.setProperty('--mx', `${(pendingX - rect.left).toFixed(1)}px`);
          card.style.setProperty('--my', `${(pendingY - rect.top).toFixed(1)}px`);
        }
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      pendingX = e.clientX;
      pendingY = e.clientY;
      pendingTarget = e.target as HTMLElement | null;

      if (!rafId) {
        rafId = requestAnimationFrame(flushPointer);
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return <div id="cursor-glow" ref={glowRef} aria-hidden="true" />;
};
