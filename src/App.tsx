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
import { Testimonials } from './components/Testimonials';
import { CaseStudy } from './components/CaseStudy';
import { Process } from './components/Process';
import { Industries } from './components/Industries';
import { About } from './components/About';
import { Team } from './components/Team';
import { Careers } from './components/Careers';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollTop } from './components/ScrollTop';

export const App: React.FC = () => {
  useEffect(() => {
    // Frame-batched scroll listener
    let scrollFrame = 0;
    const updateScroll = () => {
      const y = window.scrollY;
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, y / max));

      const bg = document.querySelector('.bg-canvas') as HTMLElement | null;
      if (bg) {
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

    // Scroll reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.reveal-init, .spotlight-card');
    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', queueScrollUpdate);
      window.removeEventListener('resize', queueScrollUpdate);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="site-wrapper">
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
        <Testimonials />
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
      <ScrollTop />
    </div>
  );
};

export default App;
