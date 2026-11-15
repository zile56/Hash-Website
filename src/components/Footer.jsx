import { Link, useLocation } from "react-router-dom";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Logo from "./Logo";
import { CALENDLY, EMAIL, NAV, SOCIAL, scrollToId, selectAndScrollToService } from "../site";
import "../css/footer.css";

const SERVICES_COL_1 = [
  "AI automation",
  "AI voice agents",
  "n8n & integrations",
  "Web design & development",
  "Mobile apps",
];

const SERVICES_COL_2 = [
  "Full-stack development",
  "Cloud, data & DevOps",
  "Game development",
  "POS systems",
  "SEO",
  "Digital advertising",
];

export default function Footer() {
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  const goHash = (e, href) => {
    if (!onHome) return;
    e.preventDefault();
    scrollToId(href);
  };

  const handleServiceClick = (service) => {
    selectAndScrollToService(service);
  };

  const hashLink = (href, children, key) =>
    onHome ? (
      <a key={key} href={href} onClick={(e) => goHash(e, href)}>
        {children}
      </a>
    ) : (
      <Link key={key} to={`/${href}`}>
        {children}
      </Link>
    );

  return (
    <footer className="foot">
      <div className="shell">
        {/* Closing CTA Banner */}
        <div className="foot__cta">
          <div>
            <h2 className="display foot__headline editorial-gradient-heading">
              Ready to engineer your next critical platform?
            </h2>
            <p className="foot__sub">
              Senior engineers from day one. Direct technical advisory without agency bloat.
            </p>
          </div>
          <div className="foot__cta-actions">
            {onHome ? (
              <a href="#inquiry" className="btn btn--primary" onClick={(e) => goHash(e, "#inquiry")}>
                Consult Engineers <FiArrowUpRight aria-hidden="true" />
              </a>
            ) : (
              <Link to="/#inquiry" className="btn btn--primary">
                Consult Engineers <FiArrowUpRight aria-hidden="true" />
              </Link>
            )}
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
              Schedule Technical Discovery
            </a>
          </div>
        </div>

        {/* Real Traction Metrics Strip with Editorial SVG Accents */}
        <div className="foot__metrics">
          <div className="foot__metric-col">
            <div className="foot__metric-val-wrap">
              <span className="metric-accent-wrap">
                <span className="foot__metric-val mono">10+</span>
                <svg className="metric-accent-svg" viewBox="0 0 72 8" fill="none" aria-hidden="true">
                  <path d="M2 5.5C24 2.5 48 2.5 70 5" stroke="#E6481E" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
            </div>
            <div className="foot__metric-lbl mono">Projects Shipped</div>
          </div>

          <div className="foot__metric-col">
            <div className="foot__metric-val-wrap">
              <span className="metric-accent-circle-wrap">
                <span className="foot__metric-val mono">10+</span>
                <svg className="metric-accent-circle" viewBox="0 0 76 44" fill="none" aria-hidden="true">
                  <ellipse cx="38" cy="22" rx="34" ry="18" stroke="#E6481E" strokeWidth="1.8" strokeDasharray="3 2" opacity="0.9" />
                </svg>
              </span>
            </div>
            <div className="foot__metric-lbl mono">Clients Worldwide</div>
          </div>

          <div className="foot__metric-col">
            <div className="foot__metric-val-wrap">
              <span className="metric-accent-wrap">
                <span className="foot__metric-val mono">~4 wks</span>
                <svg className="metric-accent-wave" viewBox="0 0 72 10" fill="none" aria-hidden="true">
                  <path d="M2 5C12 1 18 9 28 5C38 1 44 9 54 5C60 2 66 6 70 5" stroke="#E6481E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
            <div className="foot__metric-lbl mono">To First Release</div>
          </div>

          <div className="foot__metric-col">
            <div className="foot__metric-val mono">100%</div>
            <div className="foot__metric-lbl mono">Direct Code Ownership</div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="foot__cols">
          {/* Brand Col */}
          <div className="foot__brand">
            <Logo className="foot__logo" />
            <p className="foot__blurb">
              Engineering-led technical consulting specializing in AI systems, resilient data pipelines, and scalable multi-platform applications.
            </p>
            <a href={`mailto:${EMAIL}`} className="foot__mail">
              <FiMail aria-hidden="true" /> {EMAIL}
            </a>
          </div>

          {/* 2-Column Services Index */}
          <nav className="foot__col foot__services-col" aria-label="11 Core Services">
            <h3 className="foot__col-title">Services // 11 Practice Areas</h3>
            <div className="foot__services-grid">
              <ul className="foot__services-subcol">
                {SERVICES_COL_1.map((s) => (
                  <li key={s}>
                    <button
                      type="button"
                      className="foot__service-btn"
                      onClick={() => handleServiceClick(s)}
                    >
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
              <ul className="foot__services-subcol">
                {SERVICES_COL_2.map((s) => (
                  <li key={s}>
                    <button
                      type="button"
                      className="foot__service-btn"
                      onClick={() => handleServiceClick(s)}
                    >
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Site Navigation Col */}
          <nav className="foot__col" aria-label="Navigation">
            <h3 className="foot__col-title">Navigation</h3>
            <ul>
              {NAV.map((n) => (
                <li key={n.href}>
                  {n.kind === "route" ? (
                    <Link to={n.href}>{n.label}</Link>
                  ) : (
                    hashLink(n.href, n.label, n.href)
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="foot__bar">
          <p className="foot__legal">
            © {new Date().getFullYear()} Hash. All rights reserved.
          </p>
          <div className="foot__social">
            <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
