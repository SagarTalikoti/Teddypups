'use client';

import React, { useEffect, useRef, useSyncExternalStore } from 'react';

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (onStoreChange) => {
      if (typeof window === 'undefined') return () => {};
      const media = window.matchMedia('(prefers-reduced-motion: reduce)');
      media.addEventListener('change', onStoreChange);
      return () => media.removeEventListener('change', onStoreChange);
    },
    () => (typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false),
    () => false
  );
}

function getOvalPath(cx: number, cy: number, rx: number, ry: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  const pt = (x: number, y: number) =>
    `${(cx + x * cos - y * sin).toFixed(2)} ${(cy + x * sin + y * cos).toFixed(2)}`;
  return `M${pt(rx, 0)}C${pt(rx, 0.5523 * ry)} ${pt(0.5523 * rx, ry)} ${pt(0, ry)}C${pt(
    -(0.5523 * rx),
    ry
  )} ${pt(-rx, 0.5523 * ry)} ${pt(-rx, 0)}C${pt(-rx, -(0.5523 * ry))} ${pt(
    -(0.5523 * rx),
    -ry
  )} ${pt(0, -ry)}C${pt(0.5523 * rx, -ry)} ${pt(rx, -(0.5523 * ry))} ${pt(rx, 0)}Z`;
}

const PAW_PATH =
  'M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5z' +
  getOvalPath(14.6, 29.2, 5.3, 6.9, -28) +
  getOvalPath(24.2, 16.6, 5.5, 7.3, -10) +
  getOvalPath(39.8, 16.6, 5.5, 7.3, 10) +
  getOvalPath(49.4, 29.2, 5.3, 6.9, 28);

interface Step {
  x: number;
  y: number;
  angle: number;
  born: number;
}

export function PawTrailCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const path = new Path2D(PAW_PATH);
    const steps: Step[] = [];
    let dpr = 1;
    let animId = 0;
    let running = false;
    let lastX = Number.NaN;
    let lastY = Number.NaN;
    let distanceAcc = 0;
    let side = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
    };
    resize();

    const draw = (now: number) => {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = steps.length - 1; i >= 0; i--) {
        const s = steps[i];
        const age = now - s.born;
        if (age > 1000) {
          steps.splice(i, 1);
          continue;
        }
        const fade = age < 600 ? 1 : 1 - (age - 600) / 400;
        ctx.globalAlpha = 0.42 * fade * fade;
        ctx.setTransform(0.27 * dpr, 0, 0, 0.27 * dpr, s.x * dpr, s.y * dpr);
        ctx.rotate(s.angle);
        ctx.translate(-32, -34);
        ctx.fillStyle = '#c2622b';
        ctx.fill(path);
      }

      if (steps.length > 0) {
        animId = requestAnimationFrame(draw);
      } else {
        running = false;
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      if (Number.isNaN(lastX)) {
        lastX = e.clientX;
        lastY = e.clientY;
        return;
      }
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      distanceAcc += Math.hypot(dx, dy);

      if (distanceAcc >= 46) {
        distanceAcc = 0;
        const angle = Math.atan2(dy, dx) + Math.PI / 2;
        side = -side;
        const offset = 7 * side;

        steps.push({
          x: e.clientX + Math.cos(angle) * offset + 14,
          y: e.clientY + Math.sin(angle) * offset + 16,
          angle,
          born: performance.now(),
        });

        if (steps.length > 14) steps.shift();

        if (!running) {
          running = true;
          animId = requestAnimationFrame(draw);
        }
      }

      lastX = e.clientX;
      lastY = e.clientY;
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [prefersReduced]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[70] size-full"
    />
  );
}
