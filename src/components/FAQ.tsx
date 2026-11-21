import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../data/siteData';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="site-section container-wide" id="faq">
      <div className="section-header">
        <span className="section-eyebrow mono">FAQ</span>
        <h2 className="section-heading">Frequently asked questions.</h2>
        <p className="section-sub">
          Straightforward answers on timelines, code ownership, technical stacks, and post-launch maintenance.
        </p>
      </div>

      <div className="faq-list">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={faq.question}
              className={`faq-item ${isOpen ? 'open' : ''}`}
            >
              <button
                className="faq-trigger"
                onClick={() => toggleItem(idx)}
                aria-expanded={isOpen}
              >
                <span className="faq-question-text">{faq.question}</span>
                <span className="faq-toggle-icon" aria-hidden="true">
                  {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>

              {isOpen && (
                <div className="faq-body">
                  <p className="faq-answer-text">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
