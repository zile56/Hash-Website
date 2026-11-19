import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      id="back-to-top"
      className={visible ? 'visible' : ''}
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp size={22} strokeWidth={2.5} />
    </button>
  );
};
