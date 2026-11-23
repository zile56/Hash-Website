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
        <h2 className="section-heading">Built in Islamabad. Shipped everywhere.</h2>
        <p className="section-sub">
          An independent software and AI team working directly with founders and product leads.
        </p>
      </div>

      <div className="about-editorial-grid">
        {ABOUT_COLUMNS.map((col) => (
          <div key={col.title} className="about-col">
            <h3 className="about-col-title">{col.title}</h3>
            <p className="about-col-body">{col.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
