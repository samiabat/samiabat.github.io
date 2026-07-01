"use client";

import { motion, useReducedMotion } from "framer-motion";

export function MotionSection({ children, className = "", delay = 0 }) {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !prefersReducedMotion;

  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={
        shouldAnimate
          ? {
              opacity: [0.92, 1],
              y: [20, 0],
            }
          : undefined
      }
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
