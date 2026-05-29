"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cite from "./Cite";
import { timeline } from "@/data/content";

export default function Timeline() {
  const [selected, setSelected] = useState(0);
  const event = timeline[selected];

  return (
    <div>
      {/* year rail */}
      <div
        className="no-scrollbar"
        style={{
          position: "relative",
          overflowX: "auto",
          overflowY: "visible",
          paddingTop: "0.85rem",
          paddingBottom: "0.65rem",
          marginBottom: "2.25rem",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 21,
            left: 0,
            right: 0,
            height: 2,
            background: "var(--line-strong)",
          }}
        />
        <div
          className="font-sans"
          role="tablist"
          style={{ display: "flex", gap: "0.5rem", minWidth: "min-content", position: "relative" }}
        >
          {timeline.map((t, i) => {
            const isActive = i === selected;
            return (
              <button
                key={t.year}
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelected(i)}
                className="focus-ring"
                style={{
                  flex: "1 0 auto",
                  minWidth: 120,
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.45rem",
                  padding: "0 0.4rem",
                }}
              >
                <motion.span
                  animate={{
                    scale: isActive ? 1.25 : 1,
                    backgroundColor: isActive ? "var(--accent-bg)" : "var(--paper)",
                  }}
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: 999,
                    border: "2px solid var(--accent)",
                    display: "block",
                    boxShadow: isActive ? "0 0 0 5px var(--ring)" : "none",
                  }}
                />
                <span
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: isActive ? 800 : 600,
                    color: isActive ? "var(--accent)" : "var(--ink-faint)",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  {t.year}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* detail panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          className="card"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          style={{ padding: "1.75rem 1.6rem 1.8rem" }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: "0.8rem", flexWrap: "wrap" }}>
            <span
              className="font-display"
              style={{ fontSize: "2rem", fontWeight: 800, color: "var(--accent)", lineHeight: 1 }}
            >
              {event.year}
            </span>
            <span className="chip">{event.place}</span>
          </div>
          <h3 className="font-display" style={{ fontSize: "1.5rem", margin: "0.7rem 0 0.6rem" }}>
            {event.title}
          </h3>
          <p style={{ margin: 0, color: "var(--ink-soft)", lineHeight: 1.7 }}>
            {event.body}
            {event.cite && (
              <>
                {" "}
                <Cite ids={event.cite} />
              </>
            )}
          </p>

          <div className="font-sans" style={{ display: "flex", gap: "0.5rem", marginTop: "1.3rem" }}>
            <button
              className="btn focus-ring"
              onClick={() => setSelected((s) => Math.max(0, s - 1))}
              disabled={selected === 0}
              style={{ opacity: selected === 0 ? 0.4 : 1 }}
            >
              ← Earlier
            </button>
            <button
              className="btn focus-ring"
              onClick={() => setSelected((s) => Math.min(timeline.length - 1, s + 1))}
              disabled={selected === timeline.length - 1}
              style={{ opacity: selected === timeline.length - 1 ? 0.4 : 1 }}
            >
              Later →
            </button>
            <span style={{ marginLeft: "auto", alignSelf: "center", color: "var(--ink-faint)", fontSize: "0.8rem" }}>
              {selected + 1} / {timeline.length}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
