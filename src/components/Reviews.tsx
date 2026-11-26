import React from 'react';
import { Star } from 'lucide-react';
import { PROJECTS } from '../data/siteData';

const REVIEW_TILTS = [-2, 1, -1, 2, -1.5, 1.5];

const FEATURED_REVIEW_IDS = [
  'circlo',
  'yaozay-zu',
  'qaza-tracker',
  'alpha-physiotherapy',
  'oscill',
  'sissy',
];

export const Reviews: React.FC = () => {
  const featuredReviews = FEATURED_REVIEW_IDS.map((id) =>
    PROJECTS.find((p) => p.id === id)
  ).filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section className="site-section" id="reviews">
      <div className="container-wide">
        <div className="section-header">
          <h2 className="section-heading">What clients say about HASH.</h2>
          <p className="section-sub">
            Direct feedback from founders and teams we have shipped production software for.
          </p>
        </div>

        <div className="reviews-grid">
          {featuredReviews.map((project, idx) => {
            const tiltDeg = REVIEW_TILTS[idx % REVIEW_TILTS.length];
            const primaryTag =
              project.category === 'm'
                ? 'Mobile App'
                : project.category === 'w'
                  ? 'Web Platform'
                  : 'AI & Data';

            return (
              <article
                key={project.id}
                className="review-tilt-card"
                style={{ '--tilt': `${tiltDeg}deg` } as React.CSSProperties}
              >
                <div className="review-card-top">
                  <div className="review-stars" aria-label="5 out of 5 stars">
                    {[0, 1, 2, 3, 4].map((starIdx) => (
                      <Star
                        key={starIdx}
                        size={14}
                        fill="currentColor"
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>
                  <span className="review-project-pill mono">{primaryTag}</span>
                </div>

                <blockquote className="review-quote">
                  "{project.review.quote}"
                </blockquote>

                <div className="review-author-row">
                  <div className="review-author-info">
                    <strong className="review-author-name">{project.review.author}</strong>
                    <span className="review-author-role">
                      {project.review.role}, {project.review.company}
                    </span>
                  </div>
                  <span className="review-project-name mono">{project.title}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
