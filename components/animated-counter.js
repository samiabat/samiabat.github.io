"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedCounter({ value, suffix = "", label }) {
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) {
      return undefined;
    }

    let frameId;
    const duration = 1200;
    const startedAt = performance.now();

    const tick = (timestamp) => {
      const progress = Math.min((timestamp - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));
      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, [started, value]);

  return (
    <article className="stat-card" ref={ref}>
      <span className="stat-card__value">
        {displayValue}
        {suffix}
      </span>
      <span className="stat-card__label">{label}</span>
    </article>
  );
}
