"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

/**
 * Wraps children with a subtle 3D tilt effect that follows the cursor.
 * On leave, smoothly returns to neutral. Disabled when reduced motion.
 */
export default function TiltCard({
  children,
  className,
  /** Max tilt in degrees */
  intensity = 6,
  /** Lift on hover in px */
  lift = 4,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
  lift?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const px = useMotionValue(0); // -1..1
  const py = useMotionValue(0); // -1..1
  const lifted = useMotionValue(0); // 0 or 1

  const rotateX = useTransform(py, [-1, 1], [intensity, -intensity]);
  const rotateY = useTransform(px, [-1, 1], [-intensity, intensity]);
  const translateY = useTransform(lifted, [0, 1], [0, -lift]);

  const sRotateX = useSpring(rotateX, { stiffness: 220, damping: 22 });
  const sRotateY = useSpring(rotateY, { stiffness: 220, damping: 22 });
  const sTranslateY = useSpring(translateY, { stiffness: 220, damping: 22 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = (e.clientX - r.left) / r.width;
    const cy = (e.clientY - r.top) / r.height;
    px.set(cx * 2 - 1);
    py.set(cy * 2 - 1);
    lifted.set(1);
  }

  function onMouseLeave() {
    px.set(0);
    py.set(0);
    lifted.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        perspective: 900,
        transformStyle: "preserve-3d",
        rotateX: sRotateX,
        rotateY: sRotateY,
        y: sTranslateY,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
