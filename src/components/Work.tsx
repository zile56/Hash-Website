import React, { useState, useCallback } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, WORK_FILTERS, ProjectItem } from '../data/siteData';
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
        <span className="section-eyebrow mono">Featured Work</span>
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

      {/* Compact Minimal 2-Column Project Grid */}
      <div className="compact-project-grid">
        {filteredProjects.map((project: ProjectItem) => {
          const categoryLabel = project.category === 'm' ? 'Mobile App' : project.category === 'w' ? 'Web Platform' : 'AI & Data';
          return (
            <article
              key={project.id}
              className="compact-project-card"
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
              aria-label={`View ${project.title} project details`}
            >
              <div className="compact-card-body">
                <span className="compact-card-category mono">{categoryLabel}</span>
                <h3 className="compact-card-title">{project.title}</h3>
              </div>

              <div className="compact-card-action">
                <ArrowUpRight size={18} className="compact-card-arrow" />
              </div>
            </article>
          );
        })}
      </div>

      {/* On-Click Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={handleCloseModal}
      />
    </section>
  );
};
