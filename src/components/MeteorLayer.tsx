import { useEffect, useState } from "react";
import { Meteors } from "./Meteors";

/**
 * Wraps the global Meteors canvas and fades it in once the user
 * scrolls past the hero (~80vh). Stays visible until the page bottom.
 */
export function MeteorLayer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.6;
      setVisible(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 opacity-100"
    >
      <Meteors />
    </div>
  );
}
