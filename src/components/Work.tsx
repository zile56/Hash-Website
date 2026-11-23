import React, { useState, useCallback } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, WORK_FILTERS, ProjectItem } from '../data/siteData';
import { ProjectPreview } from './ProjectPreview';
import { ProjectModal } from './ProjectModal';

export const Work: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('*');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const filteredProjects = activeFilter === '*'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section className="site-section container-wide" id="work">
      <div className="section-header">
        <div className="section-eyebrow-row">
          <span className="section-eyebrow mono">Featured Work</span>
          <span className="hw section-annotation">// 8 production systems shipped</span>
        </div>
        <h2 className="section-heading">Production systems shipped for clients.</h2>
        <p className="section-sub">
          Cross-platform mobile apps, web applications, and AI pipelines engineered for founders and scaling teams. Click any project to inspect technical architecture, scope, and verified reviews.
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

      {/* Concise 2-Column Showcase Grid */}
      <div className="showcase-grid">
        {filteredProjects.map((project: ProjectItem) => (
          <article
            key={project.id}
            className="showcase-card concise-card"
            data-category={project.category}
            onClick={() => setSelectedProject(project)}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedProject(project);
              }
            }}
            aria-label={`Inspect ${project.title} project details and client review`}
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

              <div className="card-action-row">
                <span className="view-case-cue mono">
                  View architecture &amp; review <ArrowUpRight size={14} className="cue-icon" />
                </span>
                <span className="hw card-sketch-note">// click to inspect</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* On-Click Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={handleCloseModal}
      />
    </section>
  );
};
