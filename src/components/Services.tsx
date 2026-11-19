import React from 'react';
import {
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
  return (
    <section className="site-section" id="services">
      <h2 className="section-heading">Everything software, under one roof.</h2>
      <p className="section-sub">
        From the first idea to the last deploy, our team covers the full stack of modern technology.
      </p>

      <div className="cards-grid">
        {SERVICES.map((service: ServiceItem, idx: number) => {
          const IconComponent = iconMap[service.iconName];
          return (
            <div
              key={service.title}
              className="spotlight-card"
              style={{ '--d': `${(idx % 4) * 0.08}s` } as React.CSSProperties}
            >
              <div className="service-icon-box">
                <IconComponent size={22} strokeWidth={1.5} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
