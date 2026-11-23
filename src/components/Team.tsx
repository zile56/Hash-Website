import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { TEAM_MEMBERS, TeamMember } from '../data/siteData';

export const Team: React.FC = () => {
  return (
    <section className="site-section container-wide" id="team">
      <div className="section-header">
        <h2 className="section-heading">The engineering team building your software.</h2>
        <p className="section-sub">
          Direct collaboration with the technical leads who architect and write your production code.
        </p>
      </div>

      <div className="team-grid">
        {TEAM_MEMBERS.map((member: TeamMember) => (
          <div key={member.name} className="team-member-card">
            <div className="team-member-top">
              <div className="team-avatar-compact mono">
                {member.initials}
              </div>
              <a
                className="linkedin-link-btn"
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} LinkedIn Profile`}
              >
                LinkedIn <ArrowUpRight size={13} />
              </a>
            </div>

            <div className="team-member-info">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role mono">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
