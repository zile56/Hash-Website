import React, { useState, useCallback } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { PROJECTS, WORK_FILTERS, ProjectItem } from '../data/siteData';
import { ProjectModal } from './ProjectModal';
import { navigateTo } from '../utils/navigation';

export const WorkPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('*');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const filteredProjects =
    activeFilter === '*'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  const getCategoryLabel = (cat: ProjectItem['category']) => {
    if (cat === 'm') return 'Mobile Apps';
    if (cat === 'w') return 'Web Platforms';
    return 'AI & Data';
  };

  return (
    <div className="subpage-shell">
      <section className="subpage-hero container-wide">
        <a href="/" className="back-home-link mono" onClick={(e) => navigateTo('/', e)}>
          <ArrowLeft size={15} /> Back to home
        </a>

        <h1 className="subpage-title">Selected work.</h1>
        <p className="subpage-lead">
          Real production systems shipped for startups and growing businesses across mobile apps, AI workflows, and custom web platforms.
        </p>
      </section>

      <section className="container-wide subpage-body">
        {/* Category Filter Pills */}
        <div className="work-filters" role="tablist" aria-label="Filter projects by category">
          {WORK_FILTERS.map((filter) => (
            <button
              key={filter.key}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Full Showcase Grid */}
        <div className="work-showcase-grid">
          {filteredProjects.map((project: ProjectItem) => (
            <article
              key={project.id}
              className="work-showcase-card"
              onClick={() => setSelectedProject(project)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              aria-label={`Inspect ${project.title} case study`}
            >
              <div className="work-showcase-top">
                <div className="work-showcase-meta">
                  <span className="work-category-pill mono">
                    {getCategoryLabel(project.category)}
                  </span>
                  <span className="work-metrics-badge mono">{project.metricsBadge}</span>
                </div>
                <div className="compact-card-action" aria-hidden="true">
                  <ArrowUpRight size={18} className="compact-card-arrow" />
                </div>
              </div>

              <div className="work-showcase-content">
                <h2 className="work-showcase-title">{project.title}</h2>
                <p className="work-showcase-subtitle">{project.subtitle}</p>
                <p className="work-showcase-desc">{project.desc}</p>
              </div>

              <div className="work-showcase-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="work-tag-pill mono">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA Band */}
        <div className="work-bottom-cta">
          <div className="work-bottom-cta-copy">
            <h2 className="work-bottom-cta-title">Have a project in mind?</h2>
            <p className="work-bottom-cta-sub">
              Tell us what you are building. We will map the architecture, timeline, and delivery milestones together.
            </p>
          </div>
          <div className="work-bottom-cta-actions">
            <a
              href="/book"
              className="btn-primary"
              onClick={(e) => navigateTo('/book', e)}
            >
              Book a 30-min call <ArrowUpRight size={16} />
            </a>
            <a
              href="/contact"
              className="btn-secondary"
              onClick={(e) => navigateTo('/contact', e)}
            >
              Start a project
            </a>
          </div>
        </div>
      </section>

      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </div>
  );
};
