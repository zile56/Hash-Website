import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { scrollToId } from "../site";
import "../css/hero.css";

const HERO_INVARIANTS = [
  {
    num: "01",
    tag: "DETERMINISTIC AGENTIC AI",
    value: "<650ms",
    metricLabel: "p95 Turn Latency",
    desc: "Strict schema evaluation harnesses with zero tolerance for hallucinations.",
  },
  {
    num: "02",
    tag: "MEDALLION LAKEHOUSES",
    value: "99.98%",
    metricLabel: "Daily DAG SLA",
    desc: "ACID transactional reliability and automated SCD Type 2 audit lineage.",
  },
  {
    num: "03",
    tag: "HIGH-THROUGHPUT SYSTEMS",
    value: "99.99%",
    metricLabel: "Platform Uptime",
    desc: "Local-first optimistic UI, distributed Go APIs, and resilient data sync.",
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

          {/* Massive Headline with 3-Color Gradient: #111113 -> #9A3412 -> #E6481E */}
          <h1 className="hero-title">
            Production AI, Data Architecture &amp; Full-Stack Systems.
          </h1>

          {/* Lede Narrative */}
          <p className="hero-lede">
            Hash partners with technical leaders to architect resilient data pipelines,
            autonomous agents, and high-throughput web and mobile platforms.
          </p>

          {/* CTAs: Signal Vermilion Button + Hairline Secondary */}
          <div className="hero-actions">
            <a
              href="#inquiry"
              className="btn btn--primary hero-btn-primary"
              onClick={(e) => handleNavClick(e, "#inquiry")}
            >
              Start a Project <FiArrowUpRight aria-hidden />
            </a>
            <a
              href="#blueprint"
              className="btn btn--secondary hero-btn-secondary"
              onClick={(e) => handleNavClick(e, "#blueprint")}
            >
              Inspect Architecture Blueprint
            </a>
          </div>

          {/* Clean 1px Hairline Invariant Columns with 1px Vertical Ink Dividers */}
          <div className="hero-matrix">
            {HERO_INVARIANTS.map((item, idx) => (
              <motion.div
                key={item.num}
                className="hero-matrix-col"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="matrix-top mono">
                  <span className="matrix-num">{item.num} //</span>
                  <span className="matrix-tag">{item.tag}</span>
                </div>
                {/* Metric value and stacked sub-label */}
                <div className="matrix-stat-block">
                  <div className="matrix-value mono">{item.value}</div>
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
