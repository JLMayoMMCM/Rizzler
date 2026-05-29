"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Cite from "./Cite";
import { biologicalTraits } from "@/data/content";

function Card({ item, index }: { item: (typeof biologicalTraits)[number]; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      aria-pressed={flipped}
      className="focus-ring"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{
        perspective: 1200,
        border: "none",
        background: "transparent",
        padding: 0,
        cursor: "pointer",
        height: 210,
        textAlign: "left",
        font: "inherit",
      }}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        style={{ position: "relative", width: "100%", height: "100%", transformStyle: "preserve-3d" }}
      >
        {/* front */}
        <div
          className="card"
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "1.3rem",
          }}
        >
          <span style={{ fontSize: "2.2rem" }}>{item.icon}</span>
          <div>
            <h4 className="font-display" style={{ fontSize: "1.2rem", margin: "0 0 0.3rem" }}>
              {item.front}
            </h4>
            <span className="font-sans" style={{ fontSize: "0.72rem", color: "var(--ink-faint)" }}>
              Tap to reveal ↻
            </span>
          </div>
        </div>
        {/* back */}
        <div
          className="card"
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            padding: "1.3rem",
            display: "flex",
            alignItems: "center",
            background: "linear-gradient(160deg, var(--paper-2), var(--paper))",
            borderColor: "var(--ring)",
          }}
        >
          <p style={{ margin: 0, fontSize: "0.92rem", lineHeight: 1.55, color: "var(--ink)" }}>
            {item.back}
            {item.cite && (
              <>
                {" "}
                <Cite ids={item.cite} />
              </>
            )}
          </p>
        </div>
      </motion.div>
    </motion.button>
  );
}

export default function FlipCards() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "1rem",
      }}
    >
      {biologicalTraits.map((item, i) => (
        <Card key={item.front} item={item} index={i} />
      ))}
    </div>
  );
}
