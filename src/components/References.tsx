"use client";

import { motion } from "framer-motion";
import { references } from "@/data/references";

export default function References() {
  return (
    <ol style={{ listStyle: "none", margin: 0, padding: 0 }}>
      {references.map((ref, i) => (
        <motion.li
          key={ref.id}
          id={`ref-${ref.id}`}
          className="ref-item"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.3) }}
          style={{
            display: "grid",
            gridTemplateColumns: "2.4rem 1fr",
            gap: "0.6rem",
            padding: "0.85rem 0.9rem",
            borderBottom: "1px solid var(--line)",
            alignItems: "start",
          }}
        >
          <span
            className="font-sans"
            style={{ color: "var(--accent)", fontWeight: 700, fontVariantNumeric: "tabular-nums" }}
          >
            [{ref.id}]
          </span>
          <span style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
            <span style={{ color: "var(--ink-soft)" }}>{ref.ieee}</span>{" "}
            {ref.url && (
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans focus-ring"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--ring)",
                }}
              >
                Available: {ref.source} ↗
              </a>
            )}
          </span>
        </motion.li>
      ))}
    </ol>
  );
}
