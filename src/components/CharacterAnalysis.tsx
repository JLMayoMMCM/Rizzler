"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cite from "./Cite";
import { virtues, weaknesses, evolution } from "@/data/content";

function TraitList({ traits, accent }: { traits: typeof virtues; accent: string }) {
  return (
    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: "0.7rem" }}>
      {traits.map((t, i) => (
        <motion.li
          key={t.name}
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, delay: i * 0.07 }}
          style={{ display: "flex", gap: "0.7rem", alignItems: "flex-start" }}
        >
          <span
            style={{
              flex: "0 0 auto",
              marginTop: 7,
              width: 9,
              height: 9,
              borderRadius: 999,
              background: accent,
            }}
          />
          <span style={{ lineHeight: 1.55 }}>
            <strong className="font-sans" style={{ color: "var(--ink)", fontSize: "0.95rem" }}>
              {t.name}.
            </strong>{" "}
            <span style={{ color: "var(--ink-soft)", fontSize: "0.95rem" }}>
              {t.text}
              {t.cite && (
                <>
                  {" "}
                  <Cite ids={t.cite} />
                </>
              )}
            </span>
          </span>
        </motion.li>
      ))}
    </ul>
  );
}

export default function CharacterAnalysis() {
  const [view, setView] = useState<"virtues" | "weaknesses">("virtues");
  const [step, setStep] = useState(0);

  return (
    <div style={{ display: "grid", gap: "1.6rem" }}>
      {/* virtues / weaknesses toggle */}
      <div className="card" style={{ padding: "1.3rem 1.4rem 1.5rem" }}>
        <div
          className="font-sans"
          style={{ display: "inline-flex", gap: "0.25rem", padding: 4, borderRadius: 999, border: "1px solid var(--line-strong)", marginBottom: "1.2rem" }}
        >
          {(["virtues", "weaknesses"] as const).map((v) => {
            const isActive = view === v;
            return (
              <button
                key={v}
                onClick={() => setView(v)}
                className="focus-ring"
                style={{
                  position: "relative",
                  isolation: "isolate",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  padding: "0.45rem 1.1rem",
                  borderRadius: 999,
                  fontSize: "0.82rem",
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? "var(--on-accent)" : "var(--ink-soft)",
                }}
              >
                {isActive && (
                  <motion.span
                    layoutId="trait-pill"
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: 999,
                      background: v === "virtues" ? "var(--accent-bg)" : "var(--ink-soft)",
                      zIndex: 0,
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span style={{ position: "relative", zIndex: 1 }}>
                  {v === "virtues" ? "Strengths" : "Shortcomings"}
                </span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {view === "virtues" ? (
              <TraitList traits={virtues} accent="var(--accent)" />
            ) : (
              <TraitList traits={weaknesses} accent="var(--ink-faint)" />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* evolution stepper */}
      <div className="card" style={{ padding: "1.3rem 1.4rem 1.5rem" }}>
        <h4
          className="font-sans"
          style={{ margin: "0 0 1rem", textTransform: "uppercase", letterSpacing: "0.14em", fontSize: "0.78rem", color: "var(--accent)" }}
        >
          Evolution of character over time
        </h4>

        <div style={{ position: "relative", height: 4, background: "var(--line-strong)", borderRadius: 4, margin: "0 0 1.3rem" }}>
          <motion.div
            animate={{ width: `${(step / (evolution.length - 1)) * 100}%` }}
            transition={{ type: "spring", stiffness: 200, damping: 28 }}
            style={{ position: "absolute", top: 0, left: 0, height: "100%", borderRadius: 4, background: "linear-gradient(90deg, var(--accent), var(--gold))" }}
          />
        </div>

        <div className="no-scrollbar font-sans" style={{ display: "flex", gap: "0.4rem", overflowX: "auto", marginBottom: "1.2rem" }}>
          {evolution.map((e, i) => {
            const isActive = i === step;
            const isDone = i < step;
            return (
              <button
                key={e.phase}
                onClick={() => setStep(i)}
                className="focus-ring"
                style={{
                  flex: "1 0 auto",
                  border: "1px solid",
                  borderColor: isActive ? "var(--accent)" : "var(--line-strong)",
                  background: isActive ? "var(--accent-bg)" : isDone ? "color-mix(in srgb, var(--accent) 14%, transparent)" : "transparent",
                  color: isActive ? "var(--on-accent)" : "var(--ink-soft)",
                  cursor: "pointer",
                  borderRadius: 10,
                  padding: "0.5rem 0.8rem",
                  fontSize: "0.78rem",
                  fontWeight: isActive ? 700 : 500,
                  whiteSpace: "nowrap",
                }}
              >
                {i + 1}. {e.phase}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            style={{ minHeight: "8.5rem" }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: "0.7rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
              <h5 className="font-display" style={{ margin: 0, fontSize: "1.25rem", color: "var(--ink)" }}>
                {evolution[step].phase}
              </h5>
              <span className="chip">{evolution[step].years}</span>
            </div>
            <p style={{ margin: 0, color: "var(--ink-soft)", lineHeight: 1.7 }}>
              {evolution[step].text}
              {evolution[step].cite && (
                <>
                  {" "}
                  <Cite ids={evolution[step].cite!} />
                </>
              )}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
