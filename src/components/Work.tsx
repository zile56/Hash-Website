import React, { useState } from 'react';
import { Quote } from 'lucide-react';
import { PROJECTS, WORK_FILTERS, ProjectItem } from '../data/siteData';
import { ProjectPreview } from './ProjectPreview';

export const Work: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('*');

  const filteredProjects = activeFilter === '*'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section className="site-section container-wide" id="work">
      <div className="section-header">
        <span className="section-eyebrow mono">Featured Work</span>
        <h2 className="section-heading">Production systems shipped for clients.</h2>
        <p className="section-sub">
          Production applications, platforms, and automation systems engineered for founders and scaling teams.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="work-filters" role="tablist" aria-label="Project Categories">
        {WORK_FILTERS.map((filter) => (
          <button
            key={filter.key}
            role="tab"
            aria-selected={activeFilter === filter.key}
            className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.key)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Unified 2-Column Showcase Grid */}
      <div className="showcase-grid">
        {filteredProjects.map((project: ProjectItem) => (
          <article
            key={project.id}
            className="showcase-card"
            data-category={project.category}
          >
            <div className="showcase-preview-wrap">
              <ProjectPreview type={project.previewType} />
            </div>

            <div className="showcase-content">
              <div className="showcase-meta-row">
                <span className="showcase-client-tag">{project.clientMeta}</span>
                <span className="showcase-metric-badge mono">{project.metricsBadge}</span>
              </div>

              <h3 className="showcase-title">{project.title}</h3>
              <p className="showcase-desc">{project.desc}</p>

              <div className="showcase-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-tag mono">{tag}</span>
                ))}
              </div>

              {/* Integrated Client Quote */}
              <div className="showcase-quote-box">
                <Quote size={16} className="quote-icon" aria-hidden="true" />
                <p className="quote-text">"{project.review.quote}"</p>
                <div className="quote-author-row">
                  <span className="quote-author">{project.review.author}</span>
                  <span className="quote-sep">•</span>
                  <span className="quote-role">{project.review.role}, {project.review.company}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
