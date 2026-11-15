import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiActivity,
  FiDatabase,
  FiLayers,
  FiShield,
  FiTrendingUp,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";
import "../css/blueprint.css";

const STAGES = [
  {
    id: "ingest",
    step: "01",
    name: "Unified Ingestion Plane",
    shortName: "01 / Ingest",
    icon: FiActivity,
    role: "High-Throughput Ingestion & Event Streaming",
    summary:
      "Captures continuous operational streams, OLTP change-data-capture (CDC), webhooks, and IoT payloads with sub-50ms ingestion latency and zero message loss.",
    architecture:
      "Distributed event broker clusters decouple producers from consumers. Dynamic schema validation filters malformed payloads directly into dead-letter queues before reaching Bronze lake storage.",
    guarantees: [
      "Sub-50ms continuous ingestion latency",
      "Transactional CDC with Debezium & Kafka Connect",
      "Automatic schema validation & dead-letter queueing",
      "Full partition isolation across regional clusters",
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
    shortName: "02 / Refine",
    icon: FiDatabase,
    role: "Bronze-to-Silver ETL & SCD Type 2 Dimensional Modeling",
    summary:
      "Transforms unorganized, polymorphic raw data from Bronze storage into cleansed, conformed Silver tables with historical audit tracking.",
    architecture:
      "Apache Spark and Delta Lake execute idempotent merge operations. Slowly Changing Dimensions (SCD Type 2) guarantee complete lineage and point-in-time reconstruction for compliance audits.",
    guarantees: [
      "100% idempotent batch & micro-batch DAGs",
      "ACID transactional reliability on Delta Lake",
      "Automated SCD Type 2 historical dimension tracking",
      "Automated backfilling and schema evolution",
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
    shortName: "03 / Serve",
    icon: FiLayers,
    role: "Gold Analytical Marts & Sub-15ms Vector Retrieval",
    summary:
      "Powers sub-second executive business intelligence, real-time feature stores, and ultra-low-latency semantic vector retrieval for agentic workflows.",
    architecture:
      "Gold analytical marts run on columnar warehouse engines with pre-materialized aggregates. Integrated hybrid vector indices (dense + sparse BM25) serve RAG embeddings in sub-15ms.",
    guarantees: [
      "Sub-15ms p95 vector similarity search",
      "Multi-tenant analytical caching layer",
      "Sub-second executive reporting queries",
      "Strict role-based row/column access control",
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
    shortName: "04 / Govern",
    icon: FiShield,
    role: "Autonomous Agent Orchestration & Deterministic QA",
    summary:
      "Connects operational data to production AI agents. Enforces continuous deterministic evaluation, automated SLA surveillance, and zero schema hallucination.",
    architecture:
      "LangGraph reasoning loops interact with sandboxed tools under strict JSON schemas. Continuous eval harnesses test agent decisions against golden datasets with automatic alerting.",
    guarantees: [
      "Deterministic JSON Schema tool calling",
      "Continuous regression testing on golden datasets",
      "Automated anomaly detection on data contracts",
      "Sub-620ms streaming turn response times",
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
        {/* Section Header (Zero orange text bleed) */}
        <div className="blueprint-head">
          <div>
            <div className="eyebrow blueprint-eyebrow">
              03 // PLATFORM ARCHITECTURE BLUEPRINT
            </div>
            <h2 className="display h2 blueprint-title">
              The Sovereign Data &amp; AI Platform Architecture.
            </h2>
          </div>
          <p className="lede blueprint-lede">
            Inspired by high-concurrency enterprise engineering: an intricate 4-stage map bridging
            raw operational event streaming to deterministic autonomous intelligence.
          </p>
        </div>

        {/* Full-Bleed Dark Obsidian (#0D0E10) Interactive Contrast Board (Zero Fake macOS Dots) */}
        <div className="blueprint-board" role="region" aria-label="Interactive Platform Architecture Blueprint">
          {/* Top Technical Terminal Bar */}
          <div className="blueprint-terminal-head">
            <div className="terminal-slug mono">
              <code>hash::unified_platform_blueprint_v3.2.sh</code>
            </div>

            <div className="terminal-telemetry mono">
              <span className="telemetry-pulse-dot" />
              <span>LIVE CLUSTER TELEMETRY: 2.4M MSG/S</span>
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
                    <span className="stage-num">STAGE {activeStage.step}</span>
                    <span className="badge-sep">//</span>
                    <span className="stage-role">{activeStage.role}</span>
                  </div>

                  <h3 className="inspector-title">{activeStage.name}</h3>
                  <p className="inspector-summary">{activeStage.summary}</p>
                  <p className="inspector-arch">{activeStage.architecture}</p>

                  {/* System Invariants */}
                  <div className="invariants-section">
                    <div className="section-label mono">ARCHITECTURAL GUARANTEES</div>
                    <ul className="invariants-list">
                      {activeStage.guarantees.map((item) => (
                        <li key={item} className="invariant-item">
                          <FiCheckCircle className="check-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deployed Stack */}
                  <div className="blueprint-stack-section">
                    <div className="section-label mono">DEPLOYED TECHNOLOGIES</div>
                    <div className="blueprint-stack-chips">
                      {activeStage.stack.map((t) => (
                        <span key={t} className="board-chip mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Telemetry Metrics */}
                  <div className="blueprint-metrics-strip">
                    {activeStage.metrics.map((m) => (
                      <div key={m.label} className="bp-metric-cell">
                        <div className="bp-metric-val mono">{m.value}</div>
                        <div className="bp-metric-lbl">{m.label}</div>
                        <div className="bp-metric-note mono">{m.note}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Interactive 4-Stage Control & Data Plane Diagram */}
            <div className="blueprint-schematic-plane">
              <div className="schematic-subgrid-bg" aria-hidden="true" />

              <div className="schematic-header mono">
                <span>INTERACTIVE STAGE TOPOLOGY</span>
                <span className="schematic-click-hint">CLICK TO INSPECT STAGE</span>
              </div>

              {/* 4 Connected Stages on Sub-Grid */}
              <div className="schematic-stages">
                {STAGES.map((stage, idx) => {
                  const Icon = stage.icon;
                  const isCurrent = activeStageId === stage.id;
                  return (
                    <div key={stage.id} className="schematic-stage-wrapper">
                      <div
                        className={`schematic-stage-card ${isCurrent ? "is-active" : ""}`}
                        onClick={() => setActiveStageId(stage.id)}
                        role="button"
                        tabIndex={0}
                        aria-label={`Inspect ${stage.name}`}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setActiveStageId(stage.id);
                          }
                        }}
                      >
                        {isCurrent && (
                          <motion.div
                            className="stage-active-outline"
                            layoutId="stage-active-outline"
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          />
                        )}

                        <div className="stage-card-top">
                          <span className="card-stage-num mono">{stage.step}</span>
                          <span className="card-stage-status mono">
                            <span className="mini-pulse" />
                            ACTIVE
                          </span>
                        </div>

                        <div className="stage-card-main">
                          <Icon className="card-stage-icon" />
                          <div className="card-stage-name">{stage.name}</div>
                        </div>

                        <div className="stage-card-metric mono">
                          <span>{stage.metrics[0].label}:</span>
                          <strong className="metric-highlight">{stage.metrics[0].value}</strong>
                        </div>
                      </div>

                      {/* Continuous SVG Interconnect Wire with Active Signal Pulse */}
                      {idx < STAGES.length - 1 && (
                        <div className="stage-interconnect" aria-hidden="true">
                          <svg className="interconnect-wire-svg" viewBox="0 0 100 24" preserveAspectRatio="none">
                            <path className="wire-track" d="M 0 12 L 100 12" pathLength="1" />
                            <path
                              className="wire-spark"
                              d="M 0 12 L 100 12"
                              pathLength="1"
                              style={{ animationDelay: `${idx * 0.38}s` }}
                            />
                          </svg>
                          <FiArrowRight className="wire-arrow-icon" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Bottom Interactive Telemetry Heartbeat */}
              <div className="schematic-footer-telemetry">
                <div className="telemetry-badge mono">
                  <FiTrendingUp className="telemetry-icon" />
                  <span>CLUSTER HEARTBEAT: HEALTHY (SLA: 99.98%)</span>
                </div>
                <div className="telemetry-regions mono">
                  <span className="region-tag active">US-EAST-1</span>
                  <span className="region-tag active">EU-CENTRAL-1</span>
                  <span className="region-tag standby">AP-SOUTHEAST-1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
