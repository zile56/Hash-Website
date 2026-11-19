import React, { useState } from 'react';
import { PROJECTS, WORK_FILTERS, ProjectItem } from '../data/siteData';
import { ProjectPreview } from './ProjectPreview';
import { StickyNoteReview } from './StickyNoteReview';

export const Work: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('*');

  const filteredProjects = activeFilter === '*'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section className="site-section" id="work">
      <h2 className="section-heading">Work we’re proud of.</h2>
      <p className="section-sub">
        Apps, platforms and systems built for founders and teams who needed them yesterday.
      </p>

      {/* Filter Tabs */}
      <div className="work-filters" role="tablist" aria-label="Project Categories">
        {WORK_FILTERS.map((filter) => (
          <button
            key={filter.key}
            role="tab"
            aria-selected={activeFilter === filter.key}
            className={activeFilter === filter.key ? 'active' : ''}
            onClick={() => setActiveFilter(filter.key)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Project Cards with Sticky-Note Reviews */}
      <div className="work-grid-container">
        {filteredProjects.map((project: ProjectItem) => (
          <div
            key={project.id}
            className="project-pair-wrapper"
            data-category={project.category}
          >
            <div className="spotlight-card project-card">
              <ProjectPreview type={project.previewType} />

              <div className="project-body-content">
                <div className="project-top-meta">
                  <small className="project-client-name">for {project.client}</small>
                  <span className="project-metric-pill mono">{project.metricsBadge}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>

                <div className="tag-pills">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Tactile Sticky Note Review directly paired underneath */}
            <StickyNoteReview review={project.review} />
          </div>
        ))}
      </div>
    </section>
  );
};
