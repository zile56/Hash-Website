import { motion, useScroll, useSpring } from "framer-motion";
import { scrollToId } from "../site";
import "../css/scrollrail.css";

const MILESTONES = [
  { id: "hero", number: "01", label: "HERO" },
  { id: "manifesto", number: "02", label: "MANIFESTO" },
  { id: "blueprint", number: "03", label: "BLUEPRINT" },
  { id: "capabilities", number: "04", label: "PRACTICES" },
  { id: "case-studies", number: "05", label: "EVIDENCE" },
  { id: "engagement", number: "06", label: "SCOPE" },
];

export default function ScrollRail() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 220, damping: 30, mass: 0.2 });

  return (
    <aside className="scroll-rail" aria-label="Page Architecture Milestone Rail">
      <div className="rail-track">
        {/* Continuous SVG Line that draws downwards */}
        <div className="rail-line-bg" />
        <motion.div className="rail-line-active" style={{ scaleY }} />

        {/* Milestones */}
        <div className="rail-milestones">
          {MILESTONES.map((m) => (
            <a
              key={m.id}
              href={`#${m.id}`}
              className="rail-node"
              onClick={(e) => {
                e.preventDefault();
                scrollToId(`#${m.id}`);
              }}
              aria-label={`Jump to ${m.label} section`}
            >
              <span className="rail-dot" />
              <span className="rail-label mono">
                <span className="rail-num">{m.number}</span>
                <span className="rail-text">{m.label}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
