"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Splits string into words and reveals each one with a vertical-up + opacity stagger.
 * Use for big editorial headlines.
 */
export default function TextReveal({
  text,
  className,
  italicWords = [],
  italicClassName = "font-display-italic",
  delay = 0,
  stagger = 0.06,
  duration = 1.0,
}: {
  text: string;
  className?: string;
  /** Indices (0-based) of words to render in italic */
  italicWords?: number[];
  italicClassName?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
}) {
  const reduced = useReducedMotion();
  const words = text.split(/(\s+)/); // keep whitespace tokens

  const container: Variants = {
    hidden: {},
    show: {
      transition: reduced ? undefined : { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const word: Variants = reduced
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: "100%" },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration, ease: [0.22, 1, 0.36, 1] },
        },
      };

  let wordIdx = 0;

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      animate="show"
      style={{ display: "inline-block" }}
    >
      {words.map((token, i) => {
        if (token.match(/^\s+$/)) {
          return <span key={i}>{" "}</span>;
        }
        const idx = wordIdx++;
        const isItalic = italicWords.includes(idx);
        return (
          <span
            key={i}
            style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}
          >
            <motion.span
              className={isItalic ? italicClassName : ""}
              variants={word}
              style={{ display: "inline-block" }}
            >
              {token}
            </motion.span>
          </span>
        );
      })}
    </motion.span>
  );
}

/**
 * Variant for multi-line text: pass children as separate <span> lines.
 * Each line reveals as a unit with staggered delay between lines.
 */
export function LineReveal({
  children,
  delay = 0,
  duration = 1,
  className,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <span
      className={className}
      style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}
    >
      <motion.span
        initial={reduced ? false : { y: "110%" }}
        animate={{ y: 0 }}
        transition={reduced ? { duration: 0 } : { duration, delay, ease: [0.22, 1, 0.36, 1] }}
        style={{ display: "inline-block" }}
      >
        {children}
      </motion.span>
    </span>
  );
}
