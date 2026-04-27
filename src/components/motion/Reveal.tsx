"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  as?: "div" | "span" | "section" | "article" | "li";
};

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  x = 0,
  scale = 1,
  duration = 0.7,
  once = true,
  className,
  as = "div",
}: Props) {
  const prefersReduced = useReducedMotion();

  const variants: Variants = prefersReduced
    ? {
        hidden: { opacity: 1, y: 0, x: 0, scale: 1 },
        show: { opacity: 1, y: 0, x: 0, scale: 1 },
      }
    : {
        hidden: { opacity: 0, y, x, scale },
        show: {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          transition: {
            duration,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-80px 0px -80px 0px" }}
    >
      {children}
    </MotionTag>
  );
}
