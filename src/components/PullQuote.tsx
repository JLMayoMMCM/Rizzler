"use client";

import { motion } from "framer-motion";

export default function PullQuote({
  quote,
  attribution,
}: {
  quote: string;
  attribution?: string;
}) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      style={{
        margin: "2.5rem auto",
        maxWidth: 760,
        textAlign: "center",
        position: "relative",
        padding: "0 1rem",
      }}
    >
      <span
        aria-hidden
        className="font-display"
        style={{
          position: "absolute",
          top: -34,
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "5rem",
          lineHeight: 1,
          color: "var(--gold)",
          opacity: 0.45,
        }}
      >
        &ldquo;
      </span>
      <p
        className="font-display"
        style={{
          fontSize: "clamp(1.3rem, 3.4vw, 2rem)",
          lineHeight: 1.35,
          fontStyle: "italic",
          color: "var(--ink)",
          margin: "0 0 1rem",
        }}
      >
        {quote}
      </p>
      {attribution && (
        <footer
          className="font-sans"
          style={{ fontSize: "0.82rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)" }}
        >
          — {attribution}
        </footer>
      )}
    </motion.blockquote>
  );
}
