import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web development',
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
        service: 'Web development',
        message: '',
      });
    }, 400);
  };

  return (
    <section className="site-section" id="contact">
      <h2 className="section-heading">Let’s build something.</h2>

      <div className="contact-grid">
        <dl className="contact-meta">
          <dt>Address</dt>
          <dd>F-6/1, Islamabad, Pakistan</dd>

          <dt>Hours</dt>
          <dd>Mon–Sat, 9 AM – 9 PM</dd>

          <dt>Phone</dt>
          <dd>+92 300 6969696</dd>

          <dt>Email</dt>
          <dd>
            <a href="mailto:contact@hash.org" style={{ color: 'inherit', textDecoration: 'underline' }}>
              contact@hash.org
            </a>
          </dd>

          <dt>Social</dt>
          <dd style={{ fontSize: '15px', color: 'var(--mut)', lineHeight: 1.7 }}>
            <div>LinkedIn @hashconsultants</div>
            <div>Instagram @hashsoftware</div>
            <div>GitHub @hashconsultants</div>
          </dd>
        </dl>

        <form className="spotlight-card contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            aria-label="Your name"
          />

          <input
            type="email"
            placeholder="Email address"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            aria-label="Email address"
          />

          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            aria-label="Service category"
          >
            <option value="Web development">Web development</option>
            <option value="Mobile or Flutter app">Mobile or Flutter app</option>
            <option value="AI & data">AI &amp; data systems</option>
            <option value="UI/UX & graphics">UI/UX &amp; graphics</option>
          </select>

          <textarea
            rows={4}
            placeholder="Tell us about your project"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            aria-label="Project details"
          />

          <button
            className="btn-primary"
            type="submit"
            disabled={isSubmitting}
            style={{ width: '100%' }}
          >
            {isSubmitting ? 'Sending...' : 'Send message'} <Send size={16} />
          </button>

          {submitted && (
            <div className="form-success-banner" role="status">
              <CheckCircle2 size={16} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
              Thanks. We’ll reply within one working day.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
