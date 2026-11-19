import React, { useEffect, useRef } from 'react';

export const ScrollProgress: React.FC = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!barRef.current) return;
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? scrollY / maxScroll : 0;
      barRef.current.style.transform = `scaleX(${progress})`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div id="scroll-progress" ref={barRef} aria-hidden="true" />;
};
