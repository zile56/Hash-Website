import React, { useState, useCallback } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, ProjectItem } from '../data/siteData';
import { ProjectModal } from './ProjectModal';
import { navigateTo } from '../utils/navigation';

const FEATURED_PROJECT_IDS = ['oscill', 'qaza-tracker', 'circlo', 'alpha-physiotherapy'];

export const Work: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const featuredProjects = FEATURED_PROJECT_IDS
    .map((id) => PROJECTS.find((p) => p.id === id))
    .filter((p): p is ProjectItem => Boolean(p));

  return (
    <section className="site-section container-wide" id="work">
      <div className="section-header">
        <h2 className="section-heading">Selected work.</h2>
        <p className="section-sub">
          Web apps, mobile products, and AI tools built for startups and growing teams.
        </p>
      </div>

      {/* 2x2 Featured Project Grid */}
      <div className="compact-project-grid">
        {featuredProjects.map((project: ProjectItem) => (
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
            <div className="compact-card-top">
              <span className="compact-card-category">
                {project.category === 'm' ? 'Mobile app' : project.category === 'w' ? 'Web platform' : 'AI and data'}
              </span>
              <div className="compact-card-action" aria-hidden="true">
                <ArrowUpRight size={18} className="compact-card-arrow" />
              </div>
            </div>

            <div className="compact-card-info">
              <h3 className="compact-card-title">{project.title}</h3>
              <p className="compact-card-subtitle">{project.subtitle}</p>
            </div>
          </article>
        ))}
      </div>

      {/* On-Click Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={handleCloseModal}
      />

      <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'flex-start' }}>
        <a
          href="/work"
          className="btn-secondary"
          onClick={(e) => navigateTo('/work', e)}
        >
          See more <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
};
