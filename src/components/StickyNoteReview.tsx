import React from 'react';
import { ProjectReview } from '../data/siteData';

interface StickyNoteReviewProps {
  review: ProjectReview;
}

export const StickyNoteReview: React.FC<StickyNoteReviewProps> = ({ review }) => {
  return (
    <div
      className="sticky-note-slip"
      style={{ '--tilt': `${review.tilt}deg` } as React.CSSProperties}
    >
      <div className="sticky-tape-strip" aria-hidden="true" />
      <p className="sticky-quote-text">“{review.quote}”</p>
      
      <div className="sticky-meta-footer">
        <div className="sticky-meta-info">
          <strong className="sticky-author-role">{review.role}, {review.company}</strong>
          <span className="sticky-verified-tag mono">VERIFIED CLIENT REVIEW</span>
        </div>
        <div className="sticky-founder-signature hw">
          {review.signature}
        </div>
      </div>
    </div>
  );
};
