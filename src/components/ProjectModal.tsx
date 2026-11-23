import React, { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, Award } from 'lucide-react';
import { ProjectItem } from '../data/siteData';
import { ProjectPreview } from './ProjectPreview';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    // Body & HTML scroll lock
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // Keyboard listener for Escape
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="project-modal-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="project-modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close project modal"
        >
          <X size={20} />
        </button>

        <div className="modal-scroll-body">
          {/* Modal Header */}
          <div className="modal-header">
            <div className="modal-meta-row">
              <span className="modal-client-meta mono">{project.clientMeta}</span>
              <span className="modal-metric-badge mono">{project.metricsBadge}</span>
            </div>
            <h2 id="modal-project-title" className="modal-title">
              {project.title}
            </h2>
            <div className="modal-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tech-tag mono">{tag}</span>
              ))}
            </div>
          </div>

          {/* Interactive Preview Canvas */}
          <div className="modal-preview-wrapper">
            <ProjectPreview type={project.previewType} />
          </div>

          {/* Engineering Overview */}
          <div className="modal-section">
            <h3 className="modal-section-title">Engineering Overview</h3>
            <p className="modal-desc">{project.fullDesc}</p>
          </div>

          {/* Technical Scope & Architecture */}
          <div className="modal-section">
            <h3 className="modal-section-title">Technical Scope &amp; Architecture</h3>
            <ul className="modal-scope-list">
              {project.scope.map((item, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={16} className="scope-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Measurable Production Outcomes */}
          <div className="modal-section">
            <h3 className="modal-section-title">Production Outcomes</h3>
            <div className="modal-outcomes-grid">
              {project.outcomes.map((outcome, idx) => (
                <div key={idx} className="outcome-card">
                  <Award size={16} className="outcome-icon" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Sticky Note Client Review */}
          <div className="modal-review-section">
            <div
              className="sticky-note-slip modal-sticky-slip"
              style={{ '--tilt': `${project.review.tilt}deg` } as React.CSSProperties}
            >
              <div className="sticky-tape-strip" aria-hidden="true" />
              <p className="sticky-quote-text">"{project.review.quote}"</p>

              <div className="sticky-meta-footer">
                <div className="sticky-meta-info">
                  <strong className="sticky-author-name">{project.review.author}</strong>
                  <span className="sticky-author-role">{project.review.role}, {project.review.company}</span>
                  <span className="sticky-verified-tag mono">VERIFIED CLIENT REVIEW</span>
                </div>
                <div className="sticky-founder-signature hw">
                  {project.review.signature}
                </div>
              </div>
            </div>
          </div>

          {/* Modal Action CTA */}
          <div className="modal-footer-actions">
            <a
              href="#contact"
              className="btn-primary modal-cta-btn"
              onClick={onClose}
            >
              Discuss a project like this <ArrowUpRight size={16} />
            </a>
            <button
              type="button"
              className="btn-secondary modal-secondary-btn"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
