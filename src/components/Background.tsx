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
    </div>
  );
};
