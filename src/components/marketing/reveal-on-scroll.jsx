"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function RevealOnScroll({
  children,
  className = "",
  delay = 0.1,
  duration = 0.6,
  yOffset = 24,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
