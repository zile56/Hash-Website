import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { scrollToId } from "../site";
import "../css/capabilities.css";

const PILLARS = [
  {
    index: "01",
    tag: "Autonomous Intelligence",
    title: "AI & Agentic Systems",
    description:
      "Production-grade agentic frameworks and autonomous pipelines engineered with deterministic tool execution, zero hallucination tolerance, and sub-650ms streaming response times.",
    deliverables: [
      "Multi-Agent Graph Orchestration (LangGraph / Autogen)",
      "Low-Latency Real-Time Voice Agents with Diarization",
      "Production Hybrid Vector & Semantic Retrieval (RAG)",
      "Deterministic LLM Regression & Schema Eval Harnesses",
    ],
    tech: ["Python", "LangGraph", "FastAPI", "vLLM", "pgvector", "Deepgram"],
  },
  {
    index: "02",
    tag: "Lakehouse & Analytics",
    title: "Data Engineering & Analytics",
    description:
      "Enterprise Medallion data architectures converting raw, fragmented operational streams into conformed, auditable dimensional lakes with strict SLA governance.",
    deliverables: [
      "Bronze/Silver/Gold Lakehouse Ingestion & Storage",
      "Idempotent DAG Orchestration & Automated Backfilling",
      "Slowly Changing Dimensions (SCD Type 2) Lineage Tracking",
      "Automated dbt Data Quality Assertions & SLA Alerting",
    ],
    tech: ["Apache Airflow", "PySpark", "Delta Lake", "dbt", "Redshift", "Snowflake"],
  },
  {
    index: "03",
    tag: "Enterprise SaaS & APIs",
    title: "Full-Stack Web Platforms",
    description:
      "Mission-critical web applications built for horizontal concurrency, sub-100ms p95 response latencies, multi-tenant RBAC security, and resilient microservice architectures.",
    deliverables: [
      "High-Concurrency Distributed Go & Node.js Services",
      "Enterprise Multi-Tenant Auth, RBAC & SOC2 Auditing",
      "Sub-100ms Edge-Rendered React 19 Architectures",
      "Automated Multi-Region Cloud Infrastructure & CI/CD",
    ],
    tech: ["React 19", "TypeScript", "Go", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    index: "04",
    tag: "Local-First Client Systems",
    title: "Mobile Applications",
    description:
      "Field-ready native and cross-platform mobile engineering engineered with local-first offline persistence, conflict-free delta sync, and robust battery optimization.",
    deliverables: [
      "Offline-First SQLite Architecture with Optimistic UI",
      "Conflict-Free Replicated Data Type (CRDT) Sync",
      "Native iOS (SwiftUI) & Android (Jetpack Compose) Systems",
      "Cross-Platform Core Engines via Kotlin Multiplatform",
    ],
    tech: ["Kotlin Multiplatform", "SwiftUI", "Compose", "SQLite", "React Native"],
  },
];

export default function Capabilities() {
  const handleConsultClick = (e) => {
    e.preventDefault();
    scrollToId("#inquiry");
  };

  return (
    <section className="band capabilities-section" id="capabilities">
      <div className="shell">
        {/* Section Header with Burnt-Orange Focal Emphasis */}
        <div className="section-head">
          <div className="eyebrow capabilities-eyebrow">
            CORE CONSULTING PRACTICE AREAS
          </div>
          <div className="section-head-grid">
            <h2 className="display h2 section-title">
              Disciplined Engineering{" "}
              <span className="title-accent">Across Four Critical Pillars.</span>
            </h2>
            <p className="lede section-desc">
              We do not deliver speculative prototypes or high-level slide decks. Hash deploys senior
              technical architects who design, build, and operate production-grade systems from day one.
            </p>
          </div>
        </div>

        {/* Clean 1px Ink-Hairline Horizontal Rows */}
        <div className="capabilities-rows">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.index}
              className="capability-row"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Col 1: Index & Tag (Illuminates in #E6481E on hover) */}
              <div className="row-col-index">
                <span className="row-index-num mono">{pillar.index}</span>
                <span className="row-tag mono">{pillar.tag}</span>
              </div>

              {/* Col 2: Title & Narrative */}
              <div className="row-col-main">
                <h3 className="row-title">{pillar.title}</h3>
                <p className="row-desc">{pillar.description}</p>
              </div>

              {/* Col 3: Unboxed Deliverables */}
              <div className="row-col-deliverables">
                <div className="deliverables-heading mono">SYSTEM DELIVERABLES</div>
                <ul className="deliverables-clean-list">
                  {pillar.deliverables.map((item) => (
                    <li key={item} className="deliverable-clean-item">
                      <span className="item-dash">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 4: Tech Stack & Action Link (Illuminates in #E6481E on hover) */}
              <div className="row-col-action">
                <div className="stack-chips-wrap">
                  {pillar.tech.map((t) => (
                    <span key={t} className="hairline-chip mono">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="#inquiry"
                  className="row-action-link mono"
                  onClick={handleConsultClick}
                  aria-label={`Consult on ${pillar.title}`}
                >
                  <span>Engage Practice</span>
                  <FiArrowRight className="action-arrow" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
