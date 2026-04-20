import { useRef, type ReactNode, type MouseEvent } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Card wrapper with a soft spotlight that follows the cursor.
 * Uses CSS variables updated on mousemove — no React state, no re-renders.
 */
export function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div ref={ref} onMouseMove={onMove} className={`spotlight ${className}`}>
      {children}
    </div>
  );
}
