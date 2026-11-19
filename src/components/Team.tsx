import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { TEAM_MEMBERS, TeamMember } from '../data/siteData';

export const Team: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const row1 = [TEAM_MEMBERS[0]];
  const row2 = [TEAM_MEMBERS[1], TEAM_MEMBERS[2]];
  const row3 = [TEAM_MEMBERS[3], TEAM_MEMBERS[4]];

  const renderCard = (member: TeamMember) => (
    <div key={member.name} className="spotlight-card team-card">
      <div className="team-avatar" aria-hidden="true">
        <span className="team-avatar-inner">{member.initials}</span>
      </div>
      <h3>{member.name}</h3>
      {member.role && <p className="team-member-role">{member.role}</p>}
      <a
        className="linkedin-pill-btn"
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${member.name} LinkedIn Profile`}
      >
        <span className="pill-dot" aria-hidden="true" />
        LinkedIn <ArrowUpRight size={13} />
      </a>
    </div>
  );

  return (
    <section className="site-section" id="team">
      <h2 className="section-heading">The people behind HASH.</h2>
      <p className="section-sub">
        The team building your software.
      </p>

      <div className="team-container" style={{ marginTop: '28px' }}>
        <div className="team-row">{row1.map(renderCard)}</div>
        <div className="team-row">{row2.map(renderCard)}</div>

        {/* Expandable Section */}
        <div className={`team-more-wrapper ${expanded ? 'open' : ''}`}>
          <div className="team-row">{row3.map(renderCard)}</div>
        </div>

        {/* See More / See Less Button */}
        <button
          className={`team-expand-btn ${expanded ? 'open' : ''}`}
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          <span className="expand-line" aria-hidden="true" />
          <span className="expand-content">
            <ChevronDown
              size={20}
              className={`expand-icon ${expanded ? 'rotated' : ''}`}
            />
            <em>{expanded ? 'See less' : 'See more'}</em>
          </span>
          <span className="expand-line" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
};
