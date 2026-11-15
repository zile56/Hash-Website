import Hero from "../components/Hero";
import Manifesto from "../components/Manifesto";
import ArchitectureBlueprint from "../components/ArchitectureBlueprint";
import Capabilities from "../components/Capabilities";
import CaseStudies from "../components/CaseStudies";
import Engagement from "../components/Engagement";

/**
 * DAQ-Inspired Immersive Homepage for Hash
 * 1. Hero with interactive architecture console
 * 2. Manifesto with scroll-scrubbed word illumination (#9A9892 -> #111113)
 * 3. Architecture Blueprint on Dark Obsidian contrast board (4-stage inspection)
 * 4. 4 Core Consulting Pillars (Bento Grid)
 * 5. Architecture Case Studies
 * 6. Engagement Models & Interactive Scope Builder
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <ArchitectureBlueprint />
      <Capabilities />
      <CaseStudies />
      <Engagement />
    </>
  );
}
