import { useEffect, useRef } from "react";

/**
 * Meteor shower — diagonal light streaks crossing the screen.
 * Pure canvas, GPU-cheap. Low opacity for elegance.
 * Mounted as a fixed background; parent controls vertical placement.
 */
export function Meteors() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let raf = 0;

    type Meteor = {
      x: number;
      y: number;
      len: number;
      speed: number;
      angle: number;
      life: number;
      maxLife: number;
      hue: number;
    };
    const meteors: Meteor[] = [];

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawn = () => {
      const angle = (Math.PI / 180) * (200 + Math.random() * 25); // diagonal down-left
      meteors.push({
        x: Math.random() * width * 1.2,
        y: -50 - Math.random() * 200,
        len: 80 + Math.random() * 160,
        speed: 4 + Math.random() * 6,
        angle,
        life: 0,
        maxLife: 80 + Math.random() * 60,
        hue: Math.random() > 0.5 ? 220 : 270, // neon blue / violet
      });
    };

    let acc = 0;
    const tick = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      acc += 1;
      if (acc > 18 && meteors.length < 14) {
        spawn();
        acc = 0;
      }

      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.life += 1;
        const dx = Math.cos(m.angle) * m.speed;
        const dy = Math.sin(m.angle) * m.speed;
        m.x += dx;
        m.y -= dy; // angle is below horizon → invert to go down

        const tailX = m.x - Math.cos(m.angle) * m.len;
        const tailY = m.y + Math.sin(m.angle) * m.len;

        const fade =
          m.life < 12
            ? m.life / 12
            : m.life > m.maxLife - 20
              ? Math.max(0, (m.maxLife - m.life) / 20)
              : 1;

        const grad = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
        grad.addColorStop(0, `hsla(${m.hue}, 90%, 75%, ${0.55 * fade})`);
        grad.addColorStop(1, `hsla(${m.hue}, 90%, 75%, 0)`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.1;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        if (m.life > m.maxLife || m.y > height + 100 || m.x < -200) {
          meteors.splice(i, 1);
        }
      }

      raf = requestAnimationFrame(tick);
    };

    resize();
    raf = requestAnimationFrame(tick);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 h-full w-full"
    />
  );
}
