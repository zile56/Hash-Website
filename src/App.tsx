import React, { useEffect } from 'react';
import { Background } from './components/Background';
import { CursorGlow } from './components/CursorGlow';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Services } from './components/Services';
import { Stats } from './components/Stats';
import { Work } from './components/Work';
import { CaseStudy } from './components/CaseStudy';
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
  useEffect(() => {
    const reducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Frame-batched scroll listener for background parallax
    let scrollFrame = 0;
    const bg = document.querySelector('.bg') as HTMLElement | null;
    const updateScroll = () => {
      if (!reducedMotion && bg) {
        const y = window.scrollY;
        const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        const progress = Math.min(1, Math.max(0, y / max));
        bg.style.setProperty('--p', progress.toFixed(4));
      }
      scrollFrame = 0;
    };

    const queueScrollUpdate = () => {
      if (!scrollFrame) {
        scrollFrame = requestAnimationFrame(updateScroll);
      }
    };

    window.addEventListener('scroll', queueScrollUpdate, { passive: true });
    window.addEventListener('resize', queueScrollUpdate, { passive: true });
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
      window.removeEventListener('resize', queueScrollUpdate);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="site-wrapper">
      <LogoIntro />
      <Background />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <Services />
        <Stats />
        <Work />
        <CaseStudy />
        <Process />
        <Industries />
        <About />
        <Team />
        <Careers />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
