import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, UploadCloud, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { CAREER_ROLES } from '../data/siteData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ROLE_OPTIONS = [...CAREER_ROLES, 'Other'];

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState(ROLE_OPTIONS[0]);
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

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
  }, [isOpen, onClose]);

  const handleClose = () => {
    setErrorMsg('');
    onClose();
  };

  if (!isOpen) return null;

  const validateAndSetFile = (file: File | undefined) => {
    if (!file) return;
    const ext = file.name.toLowerCase();
    if (!ext.endsWith('.pdf') && !ext.endsWith('.doc') && !ext.endsWith('.docx')) {
      setErrorMsg('Please upload a PDF, DOC, or DOCX file.');
      return;
    }
    setErrorMsg('');
    setCvFile(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    validateAndSetFile(e.target.files?.[0]);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    validateAndSetFile(e.dataTransfer.files?.[0]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!cvFile) {
      setErrorMsg('Please attach your CV (PDF, DOC, or DOCX).');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setFullName('');
    setEmail('');
    setRole(ROLE_OPTIONS[0]);
    setPortfolioUrl('');
    setCvFile(null);
    setErrorMsg('');
    setSubmitted(false);
  };

  return createPortal(
    <div
      className="project-modal-backdrop"
      onClick={handleClose}
      role="presentation"
    >
      <div
        className="project-modal-dialog cv-modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={handleClose}
          aria-label="Close CV upload modal"
        >
          <X size={20} />
        </button>

        <div className="modal-scroll-body">
          <div className="modal-header">
            <span className="modal-client-meta mono">Careers at HASH</span>
            <h2 id="cv-modal-title" className="modal-title" style={{ marginTop: '6px' }}>
              Send your CV
            </h2>
            <p className="modal-desc" style={{ fontSize: '14.5px' }}>
              Share your background, engineering work, and resume directly with our team.
            </p>
          </div>

          {submitted ? (
            <div className="cv-success-card" role="status">
              <CheckCircle2 size={28} className="cv-success-icon" />
              <p className="cv-success-text">
                Application received. We will review your CV and get back to you.
              </p>
              <div className="cv-success-actions">
                <button type="button" className="btn-primary" onClick={handleClose}>
                  Done
                </button>
                <button type="button" className="btn-secondary" onClick={handleReset}>
                  Submit another
                </button>
              </div>
            </div>
          ) : (
            <form className="cv-modal-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="cv-full-name" className="form-label mono">Full Name *</label>
                  <input
                    id="cv-full-name"
                    type="text"
                    placeholder="Your name"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cv-email" className="form-label mono">Email *</label>
                  <input
                    id="cv-email"
                    type="email"
                    placeholder="you@company.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="cv-role" className="form-label mono">Role</label>
                  <select
                    id="cv-role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="form-select"
                  >
                    {ROLE_OPTIONS.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="cv-portfolio" className="form-label mono">Portfolio / LinkedIn URL</label>
                  <input
                    id="cv-portfolio"
                    type="url"
                    placeholder="https://linkedin.com/in/yourprofile"
                    value={portfolioUrl}
                    onChange={(e) => setPortfolioUrl(e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label mono">CV / Resume (PDF, DOC, DOCX) *</label>
                <div
                  className={`cv-dropzone ${isDragging ? 'dragging' : ''} ${cvFile ? 'has-file' : ''}`}
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                  }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      fileInputRef.current?.click();
                    }
                  }}
                  aria-label="Upload CV file dropzone"
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                    aria-hidden="true"
                  />

                  {cvFile ? (
                    <div className="cv-file-selected">
                      <FileText size={20} className="cv-file-icon" />
                      <div className="cv-file-meta">
                        <span className="cv-file-name">{cvFile.name}</span>
                        <span className="cv-file-size mono">{formatFileSize(cvFile.size)}</span>
                      </div>
                      <span className="cv-file-change mono">Replace</span>
                    </div>
                  ) : (
                    <div className="cv-dropzone-empty">
                      <UploadCloud size={22} className="cv-upload-icon" />
                      <span className="cv-dropzone-title">Click to browse or drag and drop your CV</span>
                      <span className="cv-dropzone-hint mono">Accepted formats: .pdf, .doc, .docx</span>
                    </div>
                  )}
                </div>
              </div>

              {errorMsg && (
                <div className="cv-error-banner" role="alert">
                  <AlertCircle size={16} />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="modal-footer-actions" style={{ borderTop: 'none', paddingTop: '4px' }}>
                <button type="submit" className="btn-primary modal-cta-btn">
                  Submit application
                </button>
                <button type="button" className="btn-secondary modal-secondary-btn" onClick={handleClose}>
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};
