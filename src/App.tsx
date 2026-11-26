import React, { useEffect, useState } from 'react';
import { Background } from './components/Background';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Services } from './components/Services';
import { Stats } from './components/Stats';
import { Work } from './components/Work';
import { Reviews } from './components/Reviews';
import { Process } from './components/Process';
import { Industries } from './components/Industries';
import { About } from './components/About';
import { Team } from './components/Team';
import { Careers } from './components/Careers';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LogoIntro } from './components/LogoIntro';

export const App: React.FC = () => {
  const [showUp, setShowUp] = useState(false);

  useEffect(() => {
    const reducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Frame-batched scroll listener with cached maxScroll (zero layout thrashing)
    let scrollFrame = 0;
    let maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    let lastShowUp = false;
    const bg = document.querySelector('.bg') as HTMLElement | null;

    const updateMaxScroll = () => {
      maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    };

    const updateScroll = () => {
      const y = window.scrollY;
      if (!reducedMotion && bg) {
        const progress = Math.min(1, Math.max(0, y / maxScroll));
        bg.style.setProperty('--p', progress.toFixed(4));
      }
      const shouldShow = y > 600;
      if (shouldShow !== lastShowUp) {
        lastShowUp = shouldShow;
        setShowUp(shouldShow);
      }
      scrollFrame = 0;
    };

    const queueScrollUpdate = () => {
      if (!scrollFrame) {
        scrollFrame = requestAnimationFrame(updateScroll);
      }
    };

    const handleResize = () => {
      updateMaxScroll();
      queueScrollUpdate();
    };

    window.addEventListener('scroll', queueScrollUpdate, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    queueScrollUpdate();

    // Subtle intersection observer for below-the-fold reveals
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    const elements = document.querySelectorAll('.site-section');
    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', queueScrollUpdate);
      window.removeEventListener('resize', handleResize);
      if (scrollFrame) cancelAnimationFrame(scrollFrame);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="site-wrapper">
      <LogoIntro />
      <Background />
      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <Services />
        <Stats />
        <Work />
        <Reviews />
        <Process />
        <Industries />
        <About />
        <Team />
        <Careers />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      {/* Circular Scroll-Up Button (#up) */}
      <button
        id="up"
        className={showUp ? 'v' : ''}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  );
};

export default App;
