import { useEffect, useRef } from "react";
import "../css/ambience.css";

/**
 * Ambience — Volumetric Golden Silk Ribbon Simulation
 * Inspired by DAQ Consulting fluid silk aesthetic over Warm Ivory (#F6F4EF).
 *
 * Implements filled, overlapping translucent bezier silk ribbon bands (45px to 120px wide)
 * sweeping diagonally from bottom-left to top-right with soft metallic champagne-gold gradients,
 * 1px golden-bronze edge strokes, and 45px cursor magnetic deflection.
 */
export default function Ambience() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId = null;
    let isVisible = true;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Mouse coordinates with spring-like lerp interpolation
    const mouse = {
      x: -2000,
      y: -2000,
      targetX: -2000,
      targetY: -2000,
      radius: 240,
      strength: 45, // 45px displacement
    };

    let scrollY = window.scrollY;
    let scrollVelocity = 0;
    let lastScrollY = window.scrollY;
    let time = 0;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 10 overlapping volumetric silk ribbon bands
    const BAND_COUNT = 10;
    const STEP_X = 32; // Spatial resolution for fluid bezier interpolation

    // Precomputed parameters for volumetric ribbons
    const ribbons = Array.from({ length: BAND_COUNT }, (_, i) => {
      const norm = i / (BAND_COUNT - 1); // 0 to 1
      return {
        norm,
        width: 48 + (i % 4) * 22 + (i % 3) * 12, // 48px to 114px wide volumetric folds
        speed: 0.75 + (i % 3) * 0.15,
        phase1: norm * 3.2 + (i % 5) * 0.7,
        phase2: norm * -2.2 + (i % 3) * 0.9,
        phase3: (i % 4) * 1.1,
        waveAmp1: 34 + (i % 3) * 8,
        waveAmp2: 20 + (i % 4) * 6,
        diagonalSlope: -0.38 - (norm - 0.5) * 0.12, // bottom-left to top-right sweep
      };
    });

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      if (prefersReducedMotion) {
        renderFrame(0);
      }
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -2000;
      mouse.targetY = -2000;
    };

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      scrollVelocity = (currentScroll - lastScrollY) * 0.05;
      lastScrollY = currentScroll;
      scrollY = currentScroll;

      // Clean fade out into the Dark Obsidian Blueprint section (#0D0E10)
      const blueprint = document.getElementById("blueprint");
      if (blueprint) {
        const rect = blueprint.getBoundingClientRect();
        const fadeStart = height * 0.9;
        const fadeEnd = height * 0.15;
        if (rect.top <= fadeStart) {
          const fade = Math.max(0, Math.min(1, (rect.top - fadeEnd) / (fadeStart - fadeEnd)));
          container.style.opacity = `${fade}`;
        } else {
          container.style.opacity = "1";
        }
      }
    };

    const handleVisibilityChange = () => {
      isVisible = document.visibilityState === "visible";
      if (isVisible && !prefersReducedMotion && !animId) {
        animId = requestAnimationFrame(loop);
      } else if (!isVisible && animId) {
        cancelAnimationFrame(animId);
        animId = null;
      }
    };

    // Calculate vertical position of a wave point
    const calculateY = (x, baseY, ribbon, dynamicTime, isBottomEdge) => {
      const nx = x * 0.0013;
      const diagonalShift = (x - width * 0.5) * ribbon.diagonalSlope;

      // Primary and secondary harmonic waves
      const w1 = Math.sin(nx * 2.0 + dynamicTime * 0.48 * ribbon.speed + ribbon.phase1) * ribbon.waveAmp1;
      const w2 = Math.cos(nx * 1.2 - dynamicTime * 0.35 * ribbon.speed + ribbon.phase2) * ribbon.waveAmp2;
      const w3 = Math.sin(nx * 3.4 + dynamicTime * 0.65 + ribbon.phase3) * 10;
      const w4 = Math.cos(nx * 0.55 + dynamicTime * 0.22) * 14;

      // Slight natural taper / width modulation along the fold
      const foldVariation = isBottomEdge ? ribbon.width * (0.85 + Math.sin(nx * 1.5 + dynamicTime * 0.3) * 0.18) : 0;

      let y = baseY + diagonalShift + w1 + w2 + w3 + w4 + foldVariation;

      // Cursor magnetic bending with 45px displacement
      const dx = x - mouse.x;
      const dy = y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < mouse.radius) {
        const influence = 1 - dist / mouse.radius;
        // Cubic smoothstep easing
        const smoothEase = influence * influence * (3 - 2 * influence);
        const dirY = dy === 0 ? 1 : dy / dist;
        y += dirY * smoothEase * mouse.strength;
      }

      return y;
    };

    // Render single frame of volumetric golden silk folds
    const renderFrame = (t) => {
      ctx.clearRect(0, 0, width, height);

      // Spring-eased mouse coordinates
      mouse.x += (mouse.targetX - mouse.x) * 0.07;
      mouse.y += (mouse.targetY - mouse.y) * 0.07;

      // Smooth decay of scroll velocity
      scrollVelocity *= 0.92;

      // Scroll parallax and wave phase modulation
      const scrollFactor = (scrollY * 0.0004 + scrollVelocity * 0.015) % (Math.PI * 2);
      const dynamicTime = t + scrollFactor * 0.6;

      const centerY = height * 0.52;
      const spreadY = height * 0.54;

      // Render overlapping translucent volumetric silk ribbons
      for (let i = 0; i < BAND_COUNT; i++) {
        const ribbon = ribbons[i];
        const ribbonBaseY = centerY + (ribbon.norm - 0.5) * spreadY;

        // Collect upper and lower curve node coordinates
        const upperNodes = [];
        const lowerNodes = [];

        for (let x = -STEP_X; x <= width + STEP_X; x += STEP_X) {
          const yTop = calculateY(x, ribbonBaseY, ribbon, dynamicTime, false);
          const yBottom = calculateY(x, ribbonBaseY, ribbon, dynamicTime, true);
          upperNodes.push({ x, y: yTop });
          lowerNodes.push({ x, y: yBottom });
        }

        // 1. Fill Volumetric Translucent Ribbon Fold
        ctx.beginPath();
        if (upperNodes.length > 0) {
          ctx.moveTo(upperNodes[0].x, upperNodes[0].y);

          // Trace upper edge forward with quadratic curves
          for (let k = 0; k < upperNodes.length - 1; k++) {
            const p1 = upperNodes[k];
            const p2 = upperNodes[k + 1];
            const midX = (p1.x + p2.x) * 0.5;
            const midY = (p1.y + p2.y) * 0.5;
            ctx.quadraticCurveTo(p1.x, p1.y, midX, midY);
          }
          const lastUpper = upperNodes[upperNodes.length - 1];
          ctx.lineTo(lastUpper.x, lastUpper.y);

          // Connect to lower edge
          const lastLower = lowerNodes[lowerNodes.length - 1];
          ctx.lineTo(lastLower.x, lastLower.y);

          // Trace lower edge backward with quadratic curves
          for (let k = lowerNodes.length - 1; k > 0; k--) {
            const p1 = lowerNodes[k];
            const p2 = lowerNodes[k - 1];
            const midX = (p1.x + p2.x) * 0.5;
            const midY = (p1.y + p2.y) * 0.5;
            ctx.quadraticCurveTo(p1.x, p1.y, midX, midY);
          }
          ctx.lineTo(lowerNodes[0].x, lowerNodes[0].y);
          ctx.closePath();
        }

        // Soft metallic champagne, burnished gold, and soft bronze fill gradient
        const fillGrad = ctx.createLinearGradient(0, ribbonBaseY - 80, width, ribbonBaseY + 80);
        if (i % 3 === 0) {
          fillGrad.addColorStop(0, "rgba(164, 108, 38, 0.04)");   // Soft bronze edge
          fillGrad.addColorStop(0.22, "rgba(246, 198, 92, 0.22)"); // Champagne
          fillGrad.addColorStop(0.52, "rgba(255, 250, 235, 0.54)"); // Specular highlight sheen
          fillGrad.addColorStop(0.78, "rgba(229, 154, 36, 0.20)"); // Burnished gold
          fillGrad.addColorStop(1, "rgba(164, 108, 38, 0.03)");
        } else if (i % 3 === 1) {
          fillGrad.addColorStop(0, "rgba(229, 154, 36, 0.04)");
          fillGrad.addColorStop(0.28, "rgba(229, 154, 36, 0.18)"); // Burnished gold
          fillGrad.addColorStop(0.56, "rgba(255, 248, 228, 0.46)"); // Champagne luster
          fillGrad.addColorStop(0.82, "rgba(180, 118, 42, 0.22)"); // Soft bronze
          fillGrad.addColorStop(1, "rgba(246, 198, 92, 0.04)");
        } else {
          fillGrad.addColorStop(0, "rgba(148, 93, 22, 0.04)");    // Soft bronze
          fillGrad.addColorStop(0.32, "rgba(246, 198, 92, 0.25)"); // Champagne
          fillGrad.addColorStop(0.60, "rgba(255, 252, 242, 0.58)"); // Specular highlight
          fillGrad.addColorStop(0.85, "rgba(229, 154, 36, 0.18)"); // Burnished gold
          fillGrad.addColorStop(1, "rgba(148, 93, 22, 0.03)");
        }

        ctx.fillStyle = fillGrad;
        ctx.fill();

        // 2. Stroke delicate 1px golden-bronze edges (top and bottom borders)
        ctx.strokeStyle = "rgba(176, 114, 34, 0.22)";
        ctx.lineWidth = 1.0;

        // Top edge stroke
        ctx.beginPath();
        ctx.moveTo(upperNodes[0].x, upperNodes[0].y);
        for (let k = 0; k < upperNodes.length - 1; k++) {
          const p1 = upperNodes[k];
          const p2 = upperNodes[k + 1];
          const midX = (p1.x + p2.x) * 0.5;
          const midY = (p1.y + p2.y) * 0.5;
          ctx.quadraticCurveTo(p1.x, p1.y, midX, midY);
        }
        ctx.stroke();

        // Bottom edge stroke
        ctx.beginPath();
        ctx.moveTo(lowerNodes[0].x, lowerNodes[0].y);
        for (let k = 0; k < lowerNodes.length - 1; k++) {
          const p1 = lowerNodes[k];
          const p2 = lowerNodes[k + 1];
          const midX = (p1.x + p2.x) * 0.5;
          const midY = (p1.y + p2.y) * 0.5;
          ctx.quadraticCurveTo(p1.x, p1.y, midX, midY);
        }
        ctx.stroke();

        // 3. Soft specular highlight ridge running through central crest of the ribbon fold
        ctx.beginPath();
        if (upperNodes.length > 0) {
          const mid0X = (upperNodes[0].x + lowerNodes[0].x) * 0.5;
          const mid0Y = (upperNodes[0].y + lowerNodes[0].y) * 0.5;
          ctx.moveTo(mid0X, mid0Y);

          for (let k = 0; k < upperNodes.length - 1; k++) {
            const p1X = (upperNodes[k].x + lowerNodes[k].x) * 0.5;
            const p1Y = (upperNodes[k].y + lowerNodes[k].y) * 0.5;
            const p2X = (upperNodes[k + 1].x + lowerNodes[k + 1].x) * 0.5;
            const p2Y = (upperNodes[k + 1].y + lowerNodes[k + 1].y) * 0.5;
            const mX = (p1X + p2X) * 0.5;
            const mY = (p1Y + p2Y) * 0.5;
            ctx.quadraticCurveTo(p1X, p1Y, mX, mY);
          }
          ctx.strokeStyle = "rgba(255, 252, 242, 0.45)";
          ctx.lineWidth = 1.0;
          ctx.stroke();
        }
      }
    };

    // 60fps render loop
    const loop = (timestamp) => {
      if (!isVisible) {
        animId = null;
        return;
      }

      time = timestamp * 0.001;
      renderFrame(time);
      animId = requestAnimationFrame(loop);
    };

    // Intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && animId) {
            cancelAnimationFrame(animId);
            animId = null;
          } else if (entry.isIntersecting && !prefersReducedMotion && !animId) {
            animId = requestAnimationFrame(loop);
          }
        });
      },
      { threshold: 0.05 }
    );

    const heroSection = document.getElementById("hero");
    if (heroSection) {
      observer.observe(heroSection);
    }

    // Event listeners
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    resize();
    handleScroll();

    if (!prefersReducedMotion) {
      animId = requestAnimationFrame(loop);
    }

    return () => {
      if (animId) cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div ref={containerRef} className="ambience-backdrop" aria-hidden="true">
      <div className="ambience-wash" />
      <canvas ref={canvasRef} className="ambience-canvas" />
      <div className="ambience-vignette" />
    </div>
  );
}
