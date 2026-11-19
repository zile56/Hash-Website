import React, { useState } from 'react';
import { FAQS } from '../data/siteData';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="site-section" id="faq">
      <h2 className="section-heading">Questions, answered.</h2>

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
                <span>{faq.question}</span>
                <span className="faq-icon" aria-hidden="true">+</span>
              </button>

              <div className="faq-body">
                <div className="faq-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
