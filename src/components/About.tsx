import React from 'react';

const ABOUT_COLUMNS = [
  {
    title: 'Who we are',
    body: 'HASH Software Consultants (Private) Limited is an independent engineering consultancy founded in Islamabad. We are a focused team of software engineers and system designers who build production applications directly for founders and growing businesses.',
  },
  {
    title: 'Our mission',
    body: 'We eliminate technical debt before it starts. Our goal is to engineer reliable custom software, cross-platform apps, and automated AI systems that deliver immediate operational value without bloated retainers or unnecessary complexity.',
  },
  {
    title: 'How we operate',
    body: 'Direct engineer access, weekly working software releases, and fixed technical milestones. You test your product every single week on staging environments, and you retain complete ownership of your intellectual property and source code.',
  },
];

export const About: React.FC = () => {
  return (
    <section className="site-section container-wide" id="about">
      <div className="section-header">
        <span className="section-eyebrow mono">About HASH</span>
        <h2 className="section-heading">Custom software engineered with discipline.</h2>
        <p className="section-sub">
          An Islamabad-based team delivering production-grade engineering for startups and scaling businesses worldwide.
        </p>
      </div>

      <div className="about-editorial-grid">
        {ABOUT_COLUMNS.map((col, idx) => (
          <div key={col.title} className="about-col">
            <span className="about-col-num mono">0{idx + 1}</span>
            <h3 className="about-col-title">{col.title}</h3>
            <p className="about-col-body">{col.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
