import React from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Contact } from './Contact';
import { navigateTo } from '../utils/navigation';

export const ContactPage: React.FC = () => {
  return (
    <div className="subpage-shell">
      <section className="subpage-hero container-wide">
        <a href="/" className="back-home-link mono" onClick={(e) => navigateTo('/', e)}>
          <ArrowLeft size={15} /> Back to home
        </a>

        <h1 className="subpage-title">Start with a conversation.</h1>
        <p className="subpage-lead">
          Send a project inquiry, ask a technical question, or schedule a live 30-minute consultation with our engineering team.
        </p>

        <div style={{ marginTop: '24px' }}>
          <a
            href="/book"
            className="btn-secondary"
            onClick={(e) => navigateTo('/book', e)}
          >
            Prefer to pick a time? Book a 30-min call <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      <Contact />
    </div>
  );
};
