"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export interface AnimatedCounterProps {
  target?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({
  target = 0,
  duration = 1800,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    // Animate up on view entry
    if (!isInView) return;

    let start = 0;
    const steps = 45;
    const stepTime = Math.max(16, Math.floor(duration / steps));
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  const formattedValue = count.toLocaleString("en-IN");

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
}
