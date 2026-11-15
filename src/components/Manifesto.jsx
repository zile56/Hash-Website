import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../css/manifesto.css";

const MANIFESTO_TEXT =
  "We reject brittle data pipelines and speculative AI prototypes. Hash architects sovereign, high-throughput systems that perform under load without degradation.";

function WordIlluminator({ word, index, total, progress }) {
  const start = index / total;
  const end = Math.min(1, start + 0.12);

  // Pure Deep Editorial Ink illumination from #9A9892 to #111113
  const color = useTransform(progress, [start, end], ["#9A9892", "#111113"]);
  const opacity = useTransform(progress, [start, end], [0.38, 1]);

  return (
    <motion.span
      className="manifesto-word"
      style={{ color, opacity }}
    >
      {word}{" "}
    </motion.span>
  );
}

export default function Manifesto() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 35%"],
  });

  const words = MANIFESTO_TEXT.split(" ");

  return (
    <section className="band manifesto-section" id="manifesto" ref={sectionRef}>
      <div className="shell">
        {/* Section Header */}
        <div className="manifesto-header">
          <div className="eyebrow manifesto-eyebrow">
            01 // THE ENGINEERING MANIFESTO
          </div>
          <div className="manifesto-meta mono">
            <span>DISCIPLINE OVER SPECULATION</span>
            <span className="meta-sep">//</span>
            <span>SYSTEM INVARIANTS</span>
          </div>
        </div>

        {/* Primary H2 Display Heading with Editorial Gradient */}
        <h2 className="display h2 manifesto-title editorial-gradient-heading">
          Discipline Over Speculation. Verified In Production.
        </h2>

        {/* De-Boxed: Sits directly over golden silk between top & bottom 1px hairlines */}
        <div className="manifesto-deboxed">
          <p className="manifesto-statement">
            {words.map((word, i) => (
              <WordIlluminator
                key={`${word}-${i}`}
                word={word}
                index={i}
                total={words.length}
                progress={scrollYProgress}
              />
            ))}
          </p>

          <div className="manifesto-deboxed-footer">
            <span className="mono footer-tag">VERIFIED IN PRODUCTION</span>
            <span className="mono footer-coord">100% PRODUCTION RUNBOOKS · SYSTEM INVARIANTS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
