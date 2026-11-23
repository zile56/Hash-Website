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
    <section className="site-section container-wide" id="services">
      <div className="section-header">
        <span className="section-eyebrow mono">Capabilities</span>
        <h2 className="section-heading">Engineered for production scale.</h2>
        <p className="section-sub">
          From first prototype to production release, our engineers cover every layer of modern software development.
        </p>
      </div>

      <div className="services-editorial-grid">
        {SERVICES.map((service: ServiceItem, idx: number) => {
          const IconComponent = iconMap[service.iconName];
          return (
            <div key={service.title} className="service-editorial-item">
              <div className="service-item-top">
                <span className="service-num mono">0{idx + 1}</span>
                <div className="service-icon-wrap">
                  <IconComponent size={20} strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
