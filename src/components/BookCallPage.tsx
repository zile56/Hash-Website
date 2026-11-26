import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Calendar, Clock, CheckCircle2, Mail } from 'lucide-react';
import { navigateTo } from '../utils/navigation';
import { SocialIcons } from './SocialIcons';

const AVAILABLE_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const TIME_SLOTS = [
  '10:00 AM',
  '11:30 AM',
  '2:00 PM',
  '4:00 PM',
  '6:00 PM',
  '8:00 PM',
];

export const BookCallPage: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState('Thu');
  const [selectedTime, setSelectedTime] = useState('2:00 PM');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setConfirmed(true);
  };

  return (
    <div className="subpage-shell">
      <section className="subpage-hero container-wide">
        <a href="/" className="back-home-link mono" onClick={(e) => navigateTo('/', e)}>
          <ArrowLeft size={15} /> Back to home
        </a>

        <h1 className="subpage-title">Book a 30-min call.</h1>
        <p className="subpage-lead">
          Choose a day and time that suits you. We will confirm by email with a short agenda so the call is useful from the first minute.
        </p>
      </section>

      <section className="subpage-body container-wide">
        <div className="book-split-grid">
          {/* Left Column: What happens next + Direct Channels */}
          <div className="book-info-col">
            <div className="book-steps-card">
              <h2 className="book-card-heading">What happens on the call</h2>

              <ol className="book-steps-list">
                <li>
                  <span className="book-step-num mono">1</span>
                  <span>Pick a day and time slot and tell us briefly what you are building.</span>
                </li>
                <li>
                  <span className="book-step-num mono">2</span>
                  <span>Our engineering lead prepares technical questions and architecture options beforehand.</span>
                </li>
                <li>
                  <span className="book-step-num mono">3</span>
                  <span>You leave the call with a clear roadmap, timeline estimate, and recommended next step.</span>
                </li>
              </ol>

              <div className="book-direct-footer">
                <a href="mailto:contact@hashtech.tech" className="contact-email-link">
                  <Mail size={15} style={{ display: 'inline', verticalAlign: '-2px', marginRight: '6px' }} />
                  contact@hashtech.tech
                </a>

                <div style={{ marginTop: '16px' }}>
                  <SocialIcons />
                </div>

                <a
                  href="/contact"
                  className="subpage-switch-link"
                  onClick={(e) => navigateTo('/contact', e)}
                >
                  Prefer to send a written inquiry? Go to Contact <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 30-min Scheduler */}
          <div className="book-scheduler-col">
            <div className="contact-form-card">
              <div className="scheduler-header">
                <span className="scheduler-badge mono">
                  <Calendar size={14} /> Discovery Call · 30 min (PKT)
                </span>
                <span className="scheduler-meta mono">
                  <Clock size={14} /> Free consultation
                </span>
              </div>

              {confirmed ? (
                <div className="cv-success-card" role="status">
                  <CheckCircle2 size={28} className="cv-success-icon" />
                  <p className="cv-success-text">
                    Call requested for <strong>{selectedDay} at {selectedTime} PKT</strong>. We have logged your details and will send a calendar invite to <strong>{email}</strong>.
                  </p>
                  <div className="cv-success-actions">
                    <button
                      type="button"
                      className="btn-secondary"
                      onClick={() => setConfirmed(false)}
                    >
                      Change time
                    </button>
                    <a
                      href="/"
                      className="btn-primary"
                      onClick={(e) => navigateTo('/', e)}
                    >
                      Back to home
                    </a>
                  </div>
                </div>
              ) : (
                <form className="book-form" onSubmit={handleConfirm}>
                  <div className="scheduler-section">
                    <span className="form-label mono">Select Day</span>
                    <div className="scheduler-days-row" role="radiogroup" aria-label="Select day">
                      {AVAILABLE_DAYS.map((day) => (
                        <button
                          key={day}
                          type="button"
                          role="radio"
                          aria-checked={selectedDay === day}
                          className={`slot-pill ${selectedDay === day ? 'selected' : ''}`}
                          onClick={() => setSelectedDay(day)}
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="scheduler-section">
                    <span className="form-label mono">Select Time (PKT)</span>
                    <div className="scheduler-slots-grid" role="radiogroup" aria-label="Select time slot">
                      {TIME_SLOTS.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          role="radio"
                          aria-checked={selectedTime === slot}
                          className={`slot-pill ${selectedTime === slot ? 'selected' : ''}`}
                          onClick={() => setSelectedTime(slot)}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="book-name" className="form-label mono">Your Name *</label>
                      <input
                        id="book-name"
                        type="text"
                        placeholder="Your name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="book-email" className="form-label mono">Work Email *</label>
                      <input
                        id="book-email"
                        type="email"
                        placeholder="you@company.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="book-topic" className="form-label mono">What would you like to discuss?</label>
                    <textarea
                      id="book-topic"
                      rows={3}
                      placeholder="Brief overview of your software idea, AI workflow, or cloud requirements..."
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="form-textarea"
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '8px', minHeight: '44px' }}>
                    Confirm {selectedDay} · {selectedTime} PKT <ArrowUpRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
