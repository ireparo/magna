"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Editorial custom cursor: small dot that grows + softens on interactive elements.
 * Hidden on touch devices and when prefers-reduced-motion.
 */
export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 380, damping: 30, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 380, damping: 30, mass: 0.4 });

  const [hovered, setHovered] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only enable on devices with fine pointer (mouse) and no reduced motion
    const mq = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    setEnabled(mq.matches);
    const onChange = () => setEnabled(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    function move(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
    }

    function over(e: MouseEvent) {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const isInteractive = !!t.closest(
        "a, button, [role='button'], input, textarea, select, summary, [data-cursor='hover']"
      );
      setHovered(isInteractive);
    }

    document.body.classList.add("cursor-none-on-fine");
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      document.body.classList.remove("cursor-none-on-fine");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      <style>{`
        @media (pointer: fine) and (prefers-reduced-motion: no-preference) {
          body.cursor-none-on-fine, body.cursor-none-on-fine * { cursor: none !important; }
        }
      `}</style>
      {/* Outer ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-multiply"
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: hovered ? 56 : 12,
            height: hovered ? 56 : 12,
            opacity: hovered ? 0.18 : 0.55,
            backgroundColor: "var(--primary-deep)",
          }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          style={{ borderRadius: 9999 }}
        />
      </motion.div>
      {/* Inner dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
          width: 4,
          height: 4,
          borderRadius: 9999,
          backgroundColor: "var(--primary-deep)",
        }}
      />
    </>
  );
}
