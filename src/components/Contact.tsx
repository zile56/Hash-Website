import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, MapPin, Clock, Share2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Development',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        service: 'Web Development',
        message: '',
      });
    }, 400);
  };

  return (
    <section className="site-section container-wide" id="contact">
      <div className="section-header">
        <h2 className="section-heading">Let's build your software.</h2>
        <p className="section-sub">
          Book a free 30-minute technical consultation. Speak directly with our engineering team in Islamabad.
        </p>
      </div>

      <div className="contact-split-grid">
        {/* Contact Info Column */}
        <div className="contact-info-col">
          <div className="contact-meta-card">
            <div className="contact-meta-item">
              <div className="contact-meta-icon">
                <MapPin size={18} />
              </div>
              <div className="contact-meta-content">
                <span className="contact-meta-label mono">Office Location</span>
                <span className="contact-meta-val">F-6/1, Islamabad, Pakistan</span>
              </div>
            </div>

            <div className="contact-meta-item">
              <div className="contact-meta-icon">
                <Clock size={18} />
              </div>
              <div className="contact-meta-content">
                <span className="contact-meta-label mono">Working Hours</span>
                <span className="contact-meta-val">Mon to Sat, 9:00 AM to 9:00 PM PKT</span>
              </div>
            </div>

            <div className="contact-meta-item">
              <div className="contact-meta-icon">
                <Mail size={18} />
              </div>
              <div className="contact-meta-content">
                <span className="contact-meta-label mono">Direct Email</span>
                <a href="mailto:contact@hash.org" className="contact-email-link">
                  contact@hash.org
                </a>
              </div>
            </div>

            <div className="contact-meta-item">
              <div className="contact-meta-icon">
                <Share2 size={18} />
              </div>
              <div className="contact-meta-content">
                <span className="contact-meta-label mono">Verified Profiles</span>
                <div className="contact-social-links">
                  <a
                    href="https://www.linkedin.com/company/hashconsultants"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-tag mono"
                  >
                    LinkedIn @hashconsultants
                  </a>
                  <a
                    href="https://github.com/hashconsultants"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-tag mono"
                  >
                    GitHub @hashconsultants
                  </a>
                  <a
                    href="https://instagram.com/hashsoftware"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-tag mono"
                  >
                    Instagram @hashsoftware
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="contact-form-col">
          <form className="contact-form-card" onSubmit={handleSubmit}>
            <div className="form-row-2">
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label mono">Your Name *</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="e.g. Sarah Jenkins"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label mono">Work Email *</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="e.g. sarah@company.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-service" className="form-label mono">Service Category</label>
              <select
                id="contact-service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="form-select"
              >
                <option value="Web Development">Web Development (React / Next.js)</option>
                <option value="Mobile Development">Mobile Apps (Flutter iOS &amp; Android)</option>
                <option value="AI & Automation">AI Agents &amp; Workflow Automation</option>
                <option value="Data & Analytics">Data Pipelines &amp; Live Dashboards</option>
                <option value="Full-Stack Engineering">Full-Stack Cloud Engineering</option>
                <option value="UI/UX Design">UI/UX Product Design &amp; Prototypes</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="contact-message" className="form-label mono">Project Details</label>
              <textarea
                id="contact-message"
                rows={4}
                placeholder="Briefly describe what you are building, timeline goals, or technical requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="form-textarea"
              />
            </div>

            <button
              className="btn-primary"
              type="submit"
              disabled={isSubmitting}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              {isSubmitting ? 'Submitting...' : 'Send message'} <Send size={16} />
            </button>

            {submitted && (
              <div className="form-success-banner" role="status">
                <CheckCircle2 size={18} />
                <span>Thank you. Your message has been received. Our engineering lead will respond within 24 hours.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
