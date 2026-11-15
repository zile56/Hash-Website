import { motion } from "framer-motion";
import "../css/casestudies.css";

const CASE_STUDIES = [
  {
    id: "01",
    tag: "Autonomous Agent Systems",
    title: "Sub-650ms Voice & Agentic Triage Engine",
    clientType: "Healthcare & Clinical Operations",
    problem:
      "Inbound call volume overwhelmed receptionists with 14-min hold times, 32% abandonment, and EHR sync errors.",
    architecture:
      "Full-duplex WebSocket audio pipeline pairing Deepgram Nova-2 with strict JSON Schema tool calling into secure EHR endpoints.",
    stack: ["Python", "FastAPI", "Deepgram Nova-2", "Llama-3", "PostgreSQL", "Twilio SIP"],
    metrics: [
      { value: "-74%", label: "Manual Call Handling", note: "Routine triage automated" },
      { value: "0", label: "Schema Hallucinations", note: "1.2M+ production evaluations" },
      { value: "<620ms", label: "p95 Voice Latency", note: "Turnaround response time" },
    ],
  },
  {
    id: "02",
    tag: "Distributed Data Engineering",
    title: "Enterprise Medallion Data Platform",
    clientType: "Fintech & High-Volume Payments",
    problem:
      "Data fragmented across 14+ operational databases causing brittle nightly ETL failures and zero compliance auditability.",
    architecture:
      "AWS Medallion Lakehouse with Airflow DAGs, SCD Type 2 dimension tracking, and dbt Gold analytical marts.",
    stack: ["Apache Airflow", "PySpark", "Delta Lake", "dbt Core", "AWS Redshift", "Great Expectations"],
    metrics: [
      { value: "99.98%", label: "Daily DAG SLA", note: "Zero silent batch failures" },
      { value: "12x", label: "Query Acceleration", note: "Sub-second executive reporting" },
      { value: "100%", label: "SCD Type 2 Audit", note: "Complete historical lineage" },
    ],
  },
  {
    id: "03",
    tag: "Native & Local-First Systems",
    title: "Offline-First Field Operations Suite",
    clientType: "Critical Infrastructure & Logistics",
    problem:
      "Field inspections failing during cellular blackouts, losing survey state and creating days of manual recovery.",
    architecture:
      "Local-first Kotlin Multiplatform mobile engine with embedded SQLite and deterministic CRDT delta synchronization.",
    stack: ["Kotlin Multiplatform", "SwiftUI", "Jetpack Compose", "Go", "SQLite", "PostgreSQL"],
    metrics: [
      { value: "0ms", label: "Local UI Latency", note: "Instant optimistic state updates" },
      { value: "100%", label: "Zero Data Loss", note: "Zero lost field inspection logs" },
      { value: "<1.4s", label: "Delta Sync Time", note: "Automated network re-handshake" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section className="band casestudies-section" id="case-studies">
      <div className="shell">
        {/* Section Header */}
        <div className="section-head">
          <div className="eyebrow casestudies-eyebrow">
            PROVEN ARCHITECTURAL IMPACT
          </div>
          <div className="section-head-grid">
            <h2 className="display h2 section-title editorial-gradient-heading">
              Measured Performance in Production Environments.
            </h2>
            <p className="lede section-desc">
              Zero vanity metrics. Concrete throughput, latency, and operational outcomes from production deployments.
            </p>
          </div>
        </div>

        {/* Clean Editorial Card Containers with Generous Breathing Room */}
        <div className="casestudies-cards">
          {CASE_STUDIES.map((study, idx) => (
            <motion.article
              key={study.id}
              className="casestudy-card"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Row Header: Clean Tag in Muted Slate (No Noisy '01 //' Prefixes) */}
              <div className="study-card-header">
                <span className="study-tag mono">{study.tag}</span>
                <span className="study-client mono">{study.clientType}</span>
              </div>

              {/* Title & Oversized Metrics Grid */}
              <div className="study-hero-grid">
                <h3 className="study-row-title">{study.title}</h3>

                {/* KPI Metrics Box with Generous Padding */}
                <div className="study-metrics-strip">
                  {study.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="study-metric-item">
                      <div className="study-metric-val mono">{m.value}</div>
                      <div className="study-metric-lbl mono">{m.label}</div>
                      <div className="study-metric-note">{m.note}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Detail Columns with Generous Separation */}
              <div className="study-details-grid">
                <div className="study-detail-col">
                  <span className="detail-tag mono">CHALLENGE &amp; CONTEXT</span>
                  <p className="detail-body">{study.problem}</p>
                </div>

                <div className="study-detail-col">
                  <span className="detail-tag mono">ENGINEERING ARCHITECTURE</span>
                  <p className="detail-body">{study.architecture}</p>
                </div>
              </div>

              {/* Deployed Stack Tags as Individual Inline-Flex Pills */}
              <div className="study-stack-row">
                <span className="stack-row-tag mono">DEPLOYED STACK:</span>
                <div className="study-tech-tags">
                  {study.stack.map((t) => (
                    <span key={t} className="study-tech-tag mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
