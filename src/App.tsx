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

export const App: React.FC = () => {
  useEffect(() => {
    // Subtle, fast intersection observer for scroll reveals
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.site-section');
    elements.forEach((el) => observer.observe(el));

    return () => {
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
