"use client";

import { useEffect, useMemo, useState } from "react";

const terminalFrames = [
  "$ boot ai-system --profile samuel",
  "> loading rag pipelines, embeddings, and backend services",
  "> optimizing latency from 30s to <300ms",
  "> status: production-ready",
];

export function HeroVisual() {
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => ({
        id: index,
        top: `${8 + (index % 6) * 14}%`,
        left: `${4 + ((index * 11) % 88)}%`,
        delay: `${(index % 7) * 0.35}s`,
        duration: `${5 + (index % 5)}s`,
      })),
    []
  );

  const [lineIndex, setLineIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const currentLine = terminalFrames[lineIndex];
    if (!currentLine) {
      return undefined;
    }

    if (typedText.length < currentLine.length) {
      const timeout = window.setTimeout(() => {
        setTypedText(currentLine.slice(0, typedText.length + 1));
      }, 24);
      return () => window.clearTimeout(timeout);
    }

    const timeout = window.setTimeout(() => {
      setLineIndex((previous) => (previous + 1) % terminalFrames.length);
      setTypedText("");
    }, 1500);

    return () => window.clearTimeout(timeout);
  }, [lineIndex, typedText]);

  return (
    <div className="hero-visual">
      <div className="hero-visual__glow"></div>
      <div className="hero-visual__grid"></div>
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="particle"
          style={{
            top: particle.top,
            left: particle.left,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}

      <div className="network-graph">
        <span className="network-graph__node node-a"></span>
        <span className="network-graph__node node-b"></span>
        <span className="network-graph__node node-c"></span>
        <span className="network-graph__node node-d"></span>
        <span className="network-graph__edge edge-ab"></span>
        <span className="network-graph__edge edge-bc"></span>
        <span className="network-graph__edge edge-cd"></span>
        <span className="network-graph__edge edge-ad"></span>
      </div>

      <div className="terminal-card">
        <div className="terminal-card__header">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p className="terminal-card__line">{typedText}</p>
      </div>
    </div>
  );
}
