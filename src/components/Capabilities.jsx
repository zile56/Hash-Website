import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiCheck, FiArrowRight } from "react-icons/fi";
import { SERVICE_PILLARS, selectAndScrollToService } from "../site";
import "../css/capabilities.css";

export default function Capabilities() {
  const [openServiceId, setOpenServiceId] = useState("ai-automation");

  const toggleService = (id) => {
    setOpenServiceId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="band capabilities-section" id="capabilities">
      <div className="shell">
        {/* Section Header */}
        <div className="section-head">
          <div className="eyebrow capabilities-eyebrow">
            11 CORE ENGINEERING SERVICES
          </div>
          <div className="section-head-grid">
            <h2 className="display h2 section-title editorial-gradient-heading">
              Disciplined Engineering Across Three Core Pillars.
            </h2>
            <p className="lede section-desc">
              From autonomous agent loops to enterprise cloud platforms and technical search authority. Direct senior execution without agency layers.
            </p>
          </div>
        </div>

        {/* 3 Pillars: Automate, Build, Grow */}
        <div className="pillars-container">
          {SERVICE_PILLARS.map((pillar) => (
            <div key={pillar.pillarId} className="pillar-block">
              {/* Pillar Header (Clean Title without Noisy Prefixes) */}
              <div className="pillar-header">
                <div className="pillar-badge mono">
                  <span className="pillar-name">{pillar.pillarTitle}</span>
                </div>
                <div className="pillar-tagline mono">{pillar.tagline}</div>
              </div>

              {/* Accordion List for Services */}
              <div className="pillar-accordions">
                {pillar.services.map((service) => {
                  const isOpen = openServiceId === service.id;
                  return (
                    <div
                      key={service.id}
                      className={`service-accordion-item ${isOpen ? "is-open" : ""}`}
                    >
                      <button
                        type="button"
                        className="service-accordion-header"
                        onClick={() => toggleService(service.id)}
                        aria-expanded={isOpen}
                        aria-controls={`service-panel-${service.id}`}
                      >
                        <div className="service-header-left">
                          <span className="service-name">{service.name}</span>
                          <span className="service-tag mono">{service.tag}</span>
                        </div>
                        <motion.div
                          className="accordion-toggle-btn"
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          aria-hidden="true"
                        >
                          <FiPlus />
                        </motion.div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={`service-panel-${service.id}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                            className="service-accordion-content-wrapper"
                          >
                            <div className="service-accordion-body">
                              <p className="service-summary">{service.summary}</p>

                              <div className="service-bullets-grid">
                                {service.bullets.map((bullet, bIdx) => (
                                  <div key={bIdx} className="service-bullet-item">
                                    <FiCheck className="bullet-check" aria-hidden="true" />
                                    <span>{bullet}</span>
                                  </div>
                                ))}
                              </div>

                              <div className="service-action-row">
                                <button
                                  type="button"
                                  className="service-scope-btn"
                                  onClick={() => selectAndScrollToService(service.name)}
                                >
                                  Scope this service <FiArrowRight aria-hidden="true" />
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
