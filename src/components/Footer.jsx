import { Link, useLocation } from "react-router-dom";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Logo from "./Logo";
import { CALENDLY, EMAIL, NAV, SOCIAL, scrollToId } from "../site";
import "../css/footer.css";

const CAPABILITIES = [
  "AI & Agentic Systems",
  "Data Engineering & Analytics",
  "Full-Stack Web Applications",
  "Native & Cross-Platform Mobile",
  "Distributed Infrastructure",
  "Technical Architecture Audits",
];

export default function Footer() {
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  const goHash = (e, href) => {
    if (!onHome) return;
    e.preventDefault();
    scrollToId(href);
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
        <div className="foot__cta">
          <div>
            <h2 className="display foot__headline">
              Ready to engineer your next critical platform?
            </h2>
            <p className="foot__sub">
              Senior engineers from day one. Direct technical advisory without agency bloat.
            </p>
          </div>
          <div className="foot__cta-actions">
            {onHome ? (
              <a href="#inquiry" className="btn btn--primary" onClick={(e) => goHash(e, "#inquiry")}>
                Consult Engineers <FiArrowUpRight aria-hidden />
              </a>
            ) : (
              <Link to="/#inquiry" className="btn btn--primary">
                Consult Engineers <FiArrowUpRight aria-hidden />
              </Link>
            )}
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
              Schedule Technical Discovery
            </a>
          </div>
        </div>

        {/* Engineering Performance Metrics Strip: Stacked labels & 1px vertical ink dividers */}
        <div className="foot__metrics">
          <div className="foot__metric-col">
            <div className="foot__metric-val mono">&lt;650ms</div>
            <div className="foot__metric-lbl mono">p95 Turn Latency</div>
          </div>
          <div className="foot__metric-col">
            <div className="foot__metric-val mono">99.98%</div>
            <div className="foot__metric-lbl mono">Daily DAG SLA</div>
          </div>
          <div className="foot__metric-col">
            <div className="foot__metric-val mono">100%</div>
            <div className="foot__metric-lbl mono">SCD Type 2 Lineage</div>
          </div>
          <div className="foot__metric-col">
            <div className="foot__metric-val mono">0</div>
            <div className="foot__metric-lbl mono">Schema Hallucination</div>
          </div>
        </div>

        <div className="foot__cols">
          <div className="foot__brand">
            <Logo className="foot__logo" />
            <p className="foot__blurb">
              Engineering-led technical consulting specializing in AI systems, resilient data pipelines, and scalable multi-platform applications.
            </p>
            <a href={`mailto:${EMAIL}`} className="foot__mail">
              <FiMail aria-hidden /> {EMAIL}
            </a>
          </div>

          <nav className="foot__col" aria-label="Capabilities">
            <h3 className="foot__col-title">Capabilities</h3>
            <ul>
              {CAPABILITIES.map((s) => (
                <li key={s}>{hashLink("#capabilities", s, s)}</li>
              ))}
            </ul>
          </nav>

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
