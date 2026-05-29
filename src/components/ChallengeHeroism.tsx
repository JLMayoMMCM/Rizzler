"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cite from "./Cite";
import { challenges } from "@/data/content";

export default function ChallengeHeroism() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div style={{ display: "grid", gap: "0.8rem" }}>
      {challenges.map((c, i) => {
        const isOpen = open === i;
        return (
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            style={{ overflow: "hidden" }}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="focus-ring"
              style={{
                width: "100%",
                textAlign: "left",
                border: "none",
                background: "transparent",
                cursor: "pointer",
                padding: "1.1rem 1.3rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                font: "inherit",
              }}
            >
              <span
                className="font-sans"
                style={{
                  flex: "0 0 auto",
                  width: 34,
                  height: 34,
                  borderRadius: 999,
                  display: "grid",
                  placeItems: "center",
                  background: "color-mix(in srgb, var(--accent) 14%, transparent)",
                  color: "var(--accent)",
                  fontWeight: 800,
                  fontSize: "0.9rem",
                }}
              >
                {i + 1}
              </span>
              <span style={{ flex: 1 }}>
                <span className="font-sans" style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-faint)", display: "block" }}>
                  The obstacle
                </span>
                <span className="font-display" style={{ fontSize: "1.12rem", color: "var(--ink)", fontWeight: 700 }}>
                  {c.challenge}
                </span>
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.25 }}
                style={{ fontSize: "1.6rem", color: "var(--accent)", lineHeight: 1, flex: "0 0 auto" }}
              >
                +
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                  style={{ overflow: "hidden" }}
                >
                  <div
                    style={{
                      padding: "0 1.3rem 1.3rem 4.3rem",
                      display: "flex",
                      gap: "0.7rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        marginTop: 4,
                        color: "var(--gold)",
                        fontSize: "1.1rem",
                        flex: "0 0 auto",
                      }}
                    >
                      ↳
                    </span>
                    <p style={{ margin: 0, color: "var(--ink-soft)", lineHeight: 1.7 }}>
                      <span className="font-sans" style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)", display: "block", marginBottom: 2 }}>
                        The heroic turn
                      </span>
                      {c.response}
                      {c.cite && (
                        <>
                          {" "}
                          <Cite ids={c.cite} />
                        </>
                      )}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
