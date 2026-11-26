import React, { useEffect, useRef } from 'react';

interface ParticleNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

export const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let nodes: ParticleNode[] = [];
    let raf: number | null = null;
    const mouse = { x: -9999, y: -9999, on: false };

    const size = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(38, Math.max(14, w / 36)));
      nodes = [];
      for (let i = 0; i < n; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          r: Math.random() * 1.6 + 0.8,
        });
      }
    };

    const frame = () => {
      if (document.hidden) {
        raf = null;
        return;
      }
      ctx.clearRect(0, 0, w, h);
      const maxD = Math.min(150, Math.max(90, w / 8));

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < -10) a.x = w + 10;
        else if (a.x > w + 10) a.x = -10;
        if (a.y < -10) a.y = h + 10;
        else if (a.y > h + 10) a.y = -10;
        if (mouse.on) {
          const dx = mouse.x - a.x;
          const dy = mouse.y - a.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 190) {
            a.x += dx * 0.0035;
            a.y += dy * 0.0035;
          }
        }
      }

      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < maxD) {
            const al = (1 - d / maxD) * 0.2;
            ctx.strokeStyle = `rgba(203, 209, 220, ${al.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        if (mouse.on) {
          const dx = mouse.x - a.x;
          const dy = mouse.y - a.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 190) {
            const al = (1 - d / 190) * 0.45;
            ctx.strokeStyle = `rgba(244, 245, 248, ${al.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
        ctx.fillStyle = 'rgba(203, 209, 220, 0.65)';
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (!raf && !document.hidden) {
        raf = requestAnimationFrame(frame);
      }
    };

    size();
    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    const onResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(size, 200);
    };
    const onPointerMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      mouse.on = e.pointerType !== 'touch';
    };
    const onPointerLeave = () => {
      mouse.on = false;
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('pointerleave', onPointerLeave);
    document.addEventListener('visibilitychange', start);
    start();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      if (resizeTimer) clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerleave', onPointerLeave);
      document.removeEventListener('visibilitychange', start);
    };
  }, []);

  return (
    <div className="bg" aria-hidden="true">
      <div className="aurora">
        <i />
        <i />
      </div>
      <div className="sh" />
      <canvas ref={canvasRef} id="net" className="bg-net-canvas" aria-hidden="true" />
      <svg
        className="bg-flow"
        viewBox="0 0 1200 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="circuitLine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#9ba2ae" stopOpacity=".02" />
            <stop offset=".5" stopColor="#cbd1dc" stopOpacity=".22" />
            <stop offset="1" stopColor="#f4f5f8" stopOpacity=".04" />
          </linearGradient>
          <linearGradient id="circuitPulse" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#f4f5f8" stopOpacity="0" />
            <stop offset=".5" stopColor="#f4f5f8" stopOpacity=".92" />
            <stop offset="1" stopColor="#cbd1dc" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="nodeGlow">
            <stop offset="0" stopColor="#f4f5f8" stopOpacity=".32" />
            <stop offset="1" stopColor="#f4f5f8" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g className="circuit-base">
          <path d="M-100 145 H125 L205 65 H390 L470 145 H655 L735 65 H930 L1010 145 H1300" />
          <path d="M-100 390 H160 L245 305 H430 L510 390 H700 L785 305 H970 L1055 390 H1300" />
          <path d="M-100 650 H120 L220 550 H410 L500 640 H690 L790 540 H970 L1060 630 H1300" />
          <path d="M110 -100 V100 L205 195 V355 L300 450 V610 L395 705 V1000" />
          <path d="M1080 -100 V110 L980 210 V370 L880 470 V630 L780 730 V1000" />
          <path d="M440 -100 V70 L520 150 V270 L600 350 V510 L680 590 V1000" />
        </g>
        <g className="circuit-runners">
          <path d="M-100 145 H125 L205 65 H390 L470 145 H655 L735 65 H930 L1010 145 H1300" />
          <path d="M-100 390 H160 L245 305 H430 L510 390 H700 L785 305 H970 L1055 390 H1300" />
          <path d="M-100 650 H120 L220 550 H410 L500 640 H690 L790 540 H970 L1060 630 H1300" />
          <path d="M110 -100 V100 L205 195 V355 L300 450 V610 L395 705 V1000" />
          <path d="M1080 -100 V110 L980 210 V370 L880 470 V630 L780 730 V1000" />
          <path d="M440 -100 V70 L520 150 V270 L600 350 V510 L680 590 V1000" />
        </g>
        <g className="circuit-nodes">
          <circle cx="125" cy="145" r="5" />
          <circle cx="390" cy="65" r="4" />
          <circle cx="655" cy="145" r="5" />
          <circle cx="930" cy="65" r="4" />
          <circle cx="160" cy="390" r="5" />
          <circle cx="430" cy="305" r="4" />
          <circle cx="700" cy="390" r="5" />
          <circle cx="970" cy="305" r="4" />
          <circle cx="120" cy="650" r="4" />
          <circle cx="410" cy="550" r="5" />
          <circle cx="690" cy="640" r="4" />
          <circle cx="970" cy="540" r="5" />
          <circle cx="205" cy="195" r="4" />
          <circle cx="300" cy="450" r="5" />
          <circle cx="980" cy="210" r="4" />
          <circle cx="880" cy="470" r="5" />
          <circle cx="520" cy="150" r="4" />
          <circle cx="600" cy="350" r="5" />
        </g>
      </svg>
      <i className="pl" style={{ top: '105%', '--t': '13s', '--dl': '0s', '--o': 0.6 } as React.CSSProperties} />
      <i className="pl" style={{ top: '88%', '--t': '17s', '--dl': '4s', '--o': 0.45 } as React.CSSProperties} />
      <i className="pl" style={{ top: '120%', '--t': '15s', '--dl': '8s', '--o': 0.55 } as React.CSSProperties} />
      <i className="pl" style={{ top: '70%', '--t': '19s', '--dl': '11s', '--o': 0.4 } as React.CSSProperties} />
      <i className="pl" style={{ top: '135%', '--t': '12s', '--dl': '2s', '--o': 0.5 } as React.CSSProperties} />
    </div>
  );
};
