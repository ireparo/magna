"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  y?: number;
  duration?: number;
};

export function StaggerGroup({
  children,
  className,
  stagger = 0.08,
  delayChildren = 0,
}: Props) {
  const prefersReduced = useReducedMotion();

  const variants: Variants = {
    hidden: {},
    show: {
      transition: prefersReduced
        ? undefined
        : {
            staggerChildren: stagger,
            delayChildren,
          },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 24,
  duration = 0.6,
}: Omit<Props, "stagger" | "delayChildren">) {
  const prefersReduced = useReducedMotion();

  const variants: Variants = prefersReduced
    ? {
        hidden: { opacity: 1, y: 0 },
        show: { opacity: 1, y: 0 },
      }
    : {
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      };

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
