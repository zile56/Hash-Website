import React, { useEffect, useRef } from 'react';
import {
  ArrowUpRight,
  Brain,
  BarChart3,
  Globe,
  Smartphone,
  Layers,
  Server,
  Palette,
  Layout,
} from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/siteData';

const iconMap = {
  Brain: Brain,
  BarChart3: BarChart3,
  Globe: Globe,
  Smartphone: Smartphone,
  Layers: Layers,
  Server: Server,
  Palette: Palette,
  Layout: Layout,
};

export const Services: React.FC = () => {
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stack = stackRef.current;
    if (!stack) return;

    const reducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const cards = Array.from(stack.querySelectorAll<HTMLElement>('.svc-card'));
    if (cards.length < 2) return;

    let rafId = 0;

    const updateScales = () => {
      rafId = 0;
      const vh = window.innerHeight || 900;
      const startY = vh * 0.82;
      const endY = vh * 0.22;
      const span = Math.max(1, startY - endY);

      for (let i = 0; i < cards.length - 1; i++) {
        const nextTop = cards[i + 1].getBoundingClientRect().top;
        const progress = Math.min(1, Math.max(0, (startY - nextTop) / span));
        const scale = 1 - progress * 0.06;
        cards[i].style.transform = `scale(${scale.toFixed(4)})`;
      }
    };

    const onScroll = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(updateScales);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateScales();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="site-section" id="services">
      <div className="container-wide svc-grid">
        <div className="svc-left">
          <h2 className="section-heading">What we build.</h2>
          <p className="section-sub">
            From first wireframe to production deployment, our team handles the full stack.
          </p>
          <div className="svc-cta-wrap">
            <a className="btn-primary" href="#contact">
              Start a project <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="svc-stack" ref={stackRef}>
          {SERVICES.map((service: ServiceItem, idx: number) => {
            const IconComponent = iconMap[service.iconName];
            const cardTone = idx % 2 === 1 ? 'svc-card--alt' : 'svc-card--dark';
            return (
              <article
                key={service.title}
                className={`svc-card ${cardTone}`}
                style={{ '--t': `${96 + idx * 12}px` } as React.CSSProperties}
              >
                <div className="svc-card-top">
                  <div className="svc-card-icon">
                    <IconComponent size={22} strokeWidth={1.75} />
                  </div>
                </div>
                <h3 className="svc-card-title">{service.title}</h3>
                <p className="svc-card-desc">{service.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
