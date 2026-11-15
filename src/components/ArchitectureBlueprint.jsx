import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiActivity,
  FiDatabase,
  FiLayers,
  FiShield,
  FiCheckCircle,
} from "react-icons/fi";
import "../css/blueprint.css";

const STAGES = [
  {
    id: "ingest",
    step: "01",
    name: "Unified Ingestion Plane",
    shortName: "Ingest",
    icon: FiActivity,
    role: "High-Throughput Ingestion & Event Streaming",
    summary:
      "Captures continuous operational streams, OLTP CDC, and webhooks with sub-50ms ingestion latency and zero message loss.",
    architecture:
      "Distributed event broker clusters decouple producers while schema validators route malformed payloads to dead-letter queues.",
    guarantees: [
      "Sub-50ms streaming ingestion latency",
      "Automated dead-letter queue routing",
      "Transactional CDC with partition isolation",
      "Zero dropped payloads under spike traffic",
    ],
    stack: ["Apache Kafka", "Debezium CDC", "AWS Kinesis", "Airbyte", "FastAPI", "Vector"],
    metrics: [
      { label: "Throughput", value: "2.4M msg/s", note: "Peak streaming rate" },
      { label: "Ingestion Lag", value: "<42ms", note: "End-to-end broker latency" },
      { label: "Data Drop", value: "0.00%", note: "Zero dropped payloads" },
    ],
  },
  {
    id: "refine",
    step: "02",
    name: "Medallion Refinement Engine",
    shortName: "Refine",
    icon: FiDatabase,
    role: "Bronze-to-Silver ETL & SCD Type 2 Dimensional Modeling",
    summary:
      "Transforms polymorphic Bronze storage streams into cleansed, conformed Silver tables with historical audit tracking.",
    architecture:
      "Apache Spark and Delta Lake execute idempotent merge operations with automated SCD Type 2 dimension lineage.",
    guarantees: [
      "ACID transactional lakehouse guarantees",
      "Automated SCD Type 2 dimension tracking",
      "Idempotent batch and backfill DAGs",
      "Point-in-time state reconstruction",
    ],
    stack: ["Apache Spark", "Delta Lake", "Databricks", "Apache Airflow", "dbt Core", "PySpark"],
    metrics: [
      { label: "DAG SLA", value: "99.98%", note: "Daily pipeline reliability" },
      { label: "ACID SLA", value: "100%", note: "Zero dirty read artifacts" },
      { label: "Backfill Speed", value: "4.8x", note: "Optimized partition merges" },
    ],
  },
  {
    id: "serve",
    step: "03",
    name: "Semantic & Vector Acceleration",
    shortName: "Serve",
    icon: FiLayers,
    role: "Gold Analytical Marts & Sub-15ms Vector Retrieval",
    summary:
      "Powers sub-second business intelligence, real-time feature stores, and ultra-low-latency semantic vector retrieval.",
    architecture:
      "Columnar analytical marts with pre-materialized aggregates paired with sub-15ms hybrid vector similarity indices.",
    guarantees: [
      "Sub-15ms p95 vector similarity search",
      "Pre-aggregated columnar BI marts",
      "Multi-tenant RBAC access controls",
      "Sub-second executive analytical queries",
    ],
    stack: ["ClickHouse", "AWS Redshift", "Snowflake", "pgvector", "DuckDB", "Redis"],
    metrics: [
      { label: "Query Speedup", value: "12x", note: "Columnar cache acceleration" },
      { label: "p95 Retrieval", value: "<14ms", note: "Vector similarity lookup" },
      { label: "Concurrency", value: "50,000+", note: "Concurrent reads" },
    ],
  },
  {
    id: "govern",
    step: "04",
    name: "Agentic Loop & Governance Plane",
    shortName: "Govern",
    icon: FiShield,
    role: "Autonomous Agent Orchestration & Deterministic QA",
    summary:
      "Connects operational data to production AI agents with continuous deterministic evaluation and zero schema hallucination.",
    architecture:
      "LangGraph reasoning loops interact with sandboxed tools under strict JSON schemas with automated regression monitoring.",
    guarantees: [
      "Deterministic JSON Schema tool-calls",
      "Continuous golden dataset regressions",
      "Automated anomaly SLA telemetry",
      "Sub-620ms streaming turn responses",
    ],
    stack: ["LangGraph", "vLLM", "Deepgram", "Great Expectations", "OpenTelemetry", "Prometheus"],
    metrics: [
      { label: "Schema Regress", value: "0", note: "Zero unverified executions" },
      { label: "Eval Accuracy", value: "99.4%", note: "Strict golden dataset match" },
      { label: "Turn Latency", value: "<620ms", note: "End-to-end voice/agent turn" },
    ],
  },
];

export default function ArchitectureBlueprint() {
  const [activeStageId, setActiveStageId] = useState("ingest");
  const activeStage = STAGES.find((s) => s.id === activeStageId) || STAGES[0];

  return (
    <section className="band blueprint-section" id="blueprint">
      <div className="shell">
        {/* Section Header */}
        <div className="blueprint-head">
          <div>
            <div className="eyebrow blueprint-eyebrow">
              PLATFORM ARCHITECTURE BLUEPRINT
            </div>
            <h2 className="display h2 blueprint-title editorial-gradient-heading">
              The Sovereign Data &amp; AI Platform Architecture.
            </h2>
          </div>
          <p className="lede blueprint-lede">
            An enterprise blueprint bridging raw streaming ingestion to deterministic autonomous execution.
          </p>
        </div>

        {/* Full-Bleed Dark Obsidian (#0D0E10) Interactive Contrast Board */}
        <div className="blueprint-board" role="region" aria-label="Interactive Platform Architecture Blueprint">
          {/* Top Technical Terminal Bar */}
          <div className="blueprint-terminal-head">
            <div className="terminal-slug mono">
              <code>hash::unified_platform_blueprint_v3.2.sh</code>
            </div>
          </div>

          {/* Board Navigation Tabs */}
          <div className="board-tabs" role="tablist" aria-label="Architecture Blueprint Stages">
            {STAGES.map((s) => {
              const Icon = s.icon;
              const isSelected = activeStageId === s.id;
              return (
                <button
                  key={s.id}
                  id={`stage-tab-${s.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`stage-panel-${s.id}`}
                  className={`board-tab ${isSelected ? "is-active" : ""}`}
                  onClick={() => setActiveStageId(s.id)}
                >
                  {isSelected && (
                    <motion.span
                      className="board-tab-pill"
                      layoutId="blueprint-tab"
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                  <span className="board-tab-inner">
                    <Icon className="tab-stage-icon" aria-hidden="true" />
                    <span>{s.shortName}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Main Board Content Grid */}
          <div className="board-body-grid">
            {/* Left Column: Stage Inspector & Invariants */}
            <div
              className="stage-inspector"
              role="tabpanel"
              id={`stage-panel-${activeStage.id}`}
              aria-labelledby={`stage-tab-${activeStage.id}`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="inspector-content"
                >
                  <div className="inspector-badge mono">
                    {activeStage.role}
                  </div>

                  <h3 className="inspector-title">{activeStage.name}</h3>

                  <p className="inspector-summary">{activeStage.summary}</p>

                  <div className="inspector-arch-box">
                    <span className="arch-label mono">SYSTEM ARCHITECTURE</span>
                    <p className="arch-desc">{activeStage.architecture}</p>
                  </div>

                  <div className="inspector-guarantees">
                    <span className="guarantee-label mono">ENGINEERING INVARIANTS</span>
                    <ul className="guarantee-list">
                      {activeStage.guarantees.map((g, idx) => (
                        <li key={idx} className="guarantee-item">
                          <FiCheckCircle className="guarantee-icon" aria-hidden="true" />
                          <span>{g}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Production Stack Badges */}
                  <div className="inspector-stack">
                    <span className="stack-label mono">PRODUCTION STACK</span>
                    <div className="stack-chips">
                      {activeStage.stack.map((tech) => (
                        <span key={tech} className="stack-chip mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Invariant Performance Telemetry */}
            <div className="stage-telemetry-col">
              <div className="telemetry-header">
                <span className="telemetry-title mono">INVARIANT BENCHMARKS</span>
              </div>

              <div className="telemetry-cards">
                {activeStage.metrics.map((m, idx) => (
                  <motion.div
                    key={`${activeStage.id}-${idx}`}
                    className="telemetry-card"
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="telemetry-metric-row">
                      <span className="metric-tag mono">{m.label}</span>
                      <span className="metric-val mono">{m.value}</span>
                    </div>
                    <span className="metric-note">{m.note}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
