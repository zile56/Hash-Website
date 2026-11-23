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
        <h2 className="section-heading">What we build.</h2>
        <p className="section-sub">
          From first wireframe to production deployment, our team handles the full stack.
        </p>
      </div>

      <div className="services-editorial-grid">
        {SERVICES.map((service: ServiceItem) => {
          const IconComponent = iconMap[service.iconName];
          return (
            <div key={service.title} className="service-editorial-item">
              <div className="service-item-top">
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
