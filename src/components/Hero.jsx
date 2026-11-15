import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { scrollToId } from "../site";
import "../css/hero.css";

const HERO_TRACTION = [
  {
    num: "01",
    tag: "PROVEN TRACK RECORD",
    value: "10+",
    accentType: "underline",
    metricLabel: "Projects Shipped",
    desc: "Autonomous agent pipelines, distributed backends, and high-concurrency web platforms.",
  },
  {
    num: "02",
    tag: "GLOBAL CLIENT FOOTPRINT",
    value: "10+",
    accentType: "circle",
    metricLabel: "Clients Worldwide",
    desc: "Partnering with founders and engineering leaders across US, Europe, and APAC.",
  },
  {
    num: "03",
    tag: "RAPID TIME-TO-VALUE",
    value: "~4 wks",
    accentType: "wave",
    metricLabel: "To First Release",
    desc: "Agile sprints from architectural blueprint to functional production deployment.",
  },
];

export default function Hero() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    scrollToId(href);
  };

  return (
    <section className="hero-section" id="hero">
      <div className="shell">
        <div className="hero-editorial">
          {/* Eyebrow */}
          <div className="eyebrow hero-eyebrow">
            SYSTEMS &amp; AI ENGINEERING CONSULTANCY
          </div>

          {/* Signature 3-Stop Gradient Headline */}
          <h1 className="hero-title editorial-gradient-heading">
            Production AI, Data Architecture &amp; Full-Stack Systems.
          </h1>

          {/* Crisp, Scannable Lede Narrative */}
          <p className="hero-lede">
            Senior technical architects designing deterministic AI agents, resilient data engines, and full-stack platforms.
          </p>

          {/* CTAs */}
          <div className="hero-actions">
            <a
              href="#inquiry"
              className="btn btn--primary hero-btn-primary"
              onClick={(e) => handleNavClick(e, "#inquiry")}
            >
              Start a Project <FiArrowUpRight aria-hidden="true" />
            </a>
            <a
              href="#capabilities"
              className="btn btn--secondary hero-btn-secondary"
              onClick={(e) => handleNavClick(e, "#capabilities")}
            >
              Explore 11 Services
            </a>
          </div>

          {/* Real Traction Metrics Strip with Handcrafted Editorial Accents */}
          <div className="hero-matrix">
            {HERO_TRACTION.map((item, idx) => (
              <motion.div
                key={item.num}
                className="hero-matrix-col"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="matrix-top mono">
                  <span className="matrix-tag">{item.tag}</span>
                </div>

                {/* Metric value with handcrafted SVG accent */}
                <div className="matrix-stat-block">
                  {item.accentType === "underline" && (
                    <span className="metric-accent-wrap">
                      <span className="matrix-value mono">{item.value}</span>
                      <svg className="metric-accent-svg" viewBox="0 0 72 8" fill="none" aria-hidden="true">
                        <path d="M2 5.5C24 2.5 48 2.5 70 5" stroke="#E6481E" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  )}

                  {item.accentType === "circle" && (
                    <span className="metric-accent-circle-wrap">
                      <span className="matrix-value mono">{item.value}</span>
                      <svg className="metric-accent-circle" viewBox="0 0 76 44" fill="none" preserveAspectRatio="none" aria-hidden="true">
                        <ellipse cx="38" cy="22" rx="34" ry="18" stroke="#E6481E" strokeWidth="2" />
                      </svg>
                    </span>
                  )}

                  {item.accentType === "wave" && (
                    <span className="metric-accent-wrap">
                      <span className="matrix-value mono">{item.value}</span>
                      <svg className="metric-accent-wave" viewBox="0 0 72 10" fill="none" aria-hidden="true">
                        <path d="M2 5C12 1 18 9 28 5C38 1 44 9 54 5C60 2 66 6 70 5" stroke="#E6481E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  )}

                  <div className="matrix-metric-label mono">{item.metricLabel}</div>
                </div>

                <p className="matrix-desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
