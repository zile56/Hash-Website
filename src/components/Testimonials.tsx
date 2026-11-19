import React, { useEffect, useState } from 'react';
import { TESTIMONIALS } from '../data/siteData';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null;

    const startTimer = () => {
      if (timer || document.hidden) return;
      timer = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
      }, 6000);
    };

    const stopTimer = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };

    startTimer();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopTimer();
      } else {
        startTimer();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      stopTimer();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <section className="site-section" id="testimonials">
      <h2 className="section-heading">Clients say it best.</h2>
      <p className="section-sub">
        Trusted by ambitious founders and product teams shipping real software.
      </p>

      <div className="testimonial-slider-wrap">
        <div className="testimonial-carousel">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              className={`testimonial-slide ${idx === activeIndex ? 'active' : ''}`}
            >
              <p className="testimonial-quote-text">“{t.quote}”</p>
              <cite className="testimonial-author">
                {t.author}
                <em>{t.role}, {t.company}</em>
              </cite>
            </div>
          ))}
        </div>

        {/* Bar Indicators */}
        <div className="carousel-dots" role="tablist" aria-label="Testimonial Navigation">
          {TESTIMONIALS.map((t, idx) => (
            <button
              key={t.id}
              role="tab"
              aria-label={`Go to slide ${idx + 1}`}
              aria-selected={idx === activeIndex}
              className={`carousel-dot-bar ${idx === activeIndex ? 'on' : ''}`}
              onClick={() => setActiveIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
