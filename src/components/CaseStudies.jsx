import { motion } from "framer-motion";
import "../css/casestudies.css";

const CASE_STUDIES = [
  {
    id: "01",
    tag: "Autonomous Agent Systems",
    title: "Sub-650ms Voice & Agentic Triage Engine",
    clientType: "Healthcare & Clinical Operations",
    problem:
      "Inbound call center volume overwhelmed clinical receptionists with 14-minute average hold times, a 32% abandonment rate, and frequent manual data errors when syncing patient symptoms into legacy EHR systems.",
    architecture:
      "Engineered an asynchronous, full-duplex WebSocket audio streaming pipeline pairing ultra-low-latency Deepgram Nova-2 diarization with localized Llama-3 intent routing and strict JSON Schema tool calling directly into secure EHR endpoints.",
    stack: ["Python", "FastAPI", "Deepgram Nova-2", "Llama-3", "PostgreSQL", "Twilio SIP"],
    metrics: [
      { value: "-74%", label: "Manual Call Handling", note: "Routine triage fully automated" },
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
      "Data fragmented across 14+ operational systems (PostgreSQL, Kafka, Stripe, Salesforce) resulted in brittle nightly batch scripts, 8-hour reporting delays, and zero historical auditability for compliance regulators.",
    architecture:
      "Architected a unified Medallion Lakehouse on AWS. Automated Airflow DAGs ingest raw payloads into Bronze with strict schema enforcement, Silver conformed models track Slowly Changing Dimensions (SCD Type 2), and dbt manages Gold analytical marts.",
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
      "Field engineers inspecting subterranean utility networks suffered frequent cellular blackouts, causing dropped inspection sessions, sync collisions, and days of manual administrative recovery.",
    architecture:
      "Built a local-first mobile architecture on Kotlin Multiplatform with embedded SQLite. Implemented deterministic Conflict-Free Replicated Data Type (CRDT) delta synchronization that queues state offline and auto-reconciles without merge conflicts upon cellular reconnect.",
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
        {/* Section Header (Zero orange text bleed) */}
        <div className="section-head">
          <div className="eyebrow casestudies-eyebrow">
            PROVEN ARCHITECTURAL IMPACT
          </div>
          <div className="section-head-grid">
            <h2 className="display h2 section-title">
              Measured Performance in Production Environments.
            </h2>
            <p className="lede section-desc">
              Every system we build is instrumented for deterministic reliability, verifiable throughput,
              and concrete business ROI. Review our recent engineering deployments below.
            </p>
          </div>
        </div>

        {/* Clean 1px Ink-Hairline Case Study Rows (Zero Heavy Rounded Cards) */}
        <div className="casestudies-rows">
          {CASE_STUDIES.map((study, idx) => (
            <motion.article
              key={study.id}
              className="casestudy-row"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Row Header: Meta in Muted Slate */}
              <div className="study-row-header">
                <div className="study-row-meta mono">
                  <span className="study-num">CASE {study.id} //</span>
                  <span className="study-tag">{study.tag}</span>
                </div>
                <div className="study-client mono">{study.clientType}</div>
              </div>

              {/* Title & Oversized Metrics Grid */}
              <div className="study-hero-grid">
                <h3 className="study-row-title">{study.title}</h3>

                {/* Oversized Space Grotesk Metrics in #111113 (60-30-10 Squint Test) */}
                <div className="study-metrics-strip">
                  {study.metrics.map((m) => (
                    <div key={m.label} className="study-metric-item">
                      <div className="study-metric-val mono">{m.value}</div>
                      <div className="study-metric-lbl mono">{m.label}</div>
                      <div className="study-metric-note">{m.note}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenge & Deployed Architecture (Clean Unboxed Grid) */}
              <div className="study-breakdown-grid">
                <div className="study-breakdown-col">
                  <div className="breakdown-tag mono">01 // THE SYSTEM CHALLENGE</div>
                  <p className="breakdown-body">{study.problem}</p>
                </div>
                <div className="study-breakdown-col">
                  <div className="breakdown-tag mono">02 // DEPLOYED ARCHITECTURE</div>
                  <p className="breakdown-body">{study.architecture}</p>
                </div>
              </div>

              {/* Deployed Technologies Row */}
              <div className="study-stack-row">
                <span className="stack-label mono">DEPLOYED STACK:</span>
                <div className="stack-chips-list">
                  {study.stack.map((item) => (
                    <span key={item} className="hairline-chip mono">
                      {item}
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
