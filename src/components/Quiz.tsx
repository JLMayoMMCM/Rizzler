"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cite from "./Cite";
import { quiz } from "@/data/content";

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = quiz[index];
  const answered = selected !== null;

  const choose = (i: number) => {
    if (answered) return;
    setSelected(i);
    if (i === q.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (index + 1 >= quiz.length) {
      setDone(true);
    } else {
      setIndex((i) => i + 1);
      setSelected(null);
    }
  };

  const restart = () => {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setDone(false);
  };

  const verdict =
    score === quiz.length
      ? "Bayani! A perfect score — Rizal would be proud."
      : score >= quiz.length - 1
        ? "Outstanding — you know your hero well."
        : score >= quiz.length / 2
          ? "A solid grasp of Rizal's life."
          : "A worthy start — scroll back and explore again.";

  return (
    <div className="card" style={{ padding: "1.5rem 1.5rem 1.7rem", maxWidth: 640, margin: "0 auto" }}>
      {!done ? (
        <>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.9rem" }}>
            <span className="font-sans" style={{ fontSize: "0.74rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-faint)" }}>
              Question {index + 1} of {quiz.length}
            </span>
            <span className="font-sans" style={{ fontSize: "0.8rem", color: "var(--accent)", fontWeight: 700 }}>
              Score {score}
            </span>
          </div>

          <div style={{ height: 4, background: "var(--line-strong)", borderRadius: 4, marginBottom: "1.3rem" }}>
            <motion.div
              animate={{ width: `${((index + (answered ? 1 : 0)) / quiz.length) * 100}%` }}
              transition={{ duration: 0.4 }}
              style={{ height: "100%", borderRadius: 4, background: "linear-gradient(90deg, var(--accent), var(--gold))" }}
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-display" style={{ fontSize: "1.3rem", margin: "0 0 1.1rem", lineHeight: 1.3 }}>
                {q.question}
              </h3>

              <div style={{ display: "grid", gap: "0.55rem" }}>
                {q.options.map((opt, i) => {
                  const isCorrect = i === q.answer;
                  const isChosen = i === selected;
                  let bg = "var(--paper)";
                  let border = "var(--line-strong)";
                  let color = "var(--ink)";
                  if (answered) {
                    if (isCorrect) {
                      bg = "color-mix(in srgb, var(--success) 18%, var(--paper))";
                      border = "var(--success)";
                    } else if (isChosen) {
                      bg = "color-mix(in srgb, var(--accent) 16%, var(--paper))";
                      border = "var(--accent)";
                    } else {
                      color = "var(--ink-faint)";
                    }
                  }
                  return (
                    <motion.button
                      key={i}
                      onClick={() => choose(i)}
                      disabled={answered}
                      whileHover={!answered ? { x: 4 } : undefined}
                      className="focus-ring font-sans"
                      style={{
                        textAlign: "left",
                        cursor: answered ? "default" : "pointer",
                        background: bg,
                        border: `1.5px solid ${border}`,
                        color,
                        borderRadius: 12,
                        padding: "0.8rem 1rem",
                        fontSize: "0.95rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.7rem",
                        transition: "background 0.25s ease, border-color 0.25s ease, color 0.25s ease",
                      }}
                    >
                      <span
                        style={{
                          flex: "0 0 auto",
                          width: 24,
                          height: 24,
                          borderRadius: 999,
                          border: `1.5px solid ${border}`,
                          display: "grid",
                          placeItems: "center",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                        }}
                      >
                        {answered && isCorrect ? "✓" : answered && isChosen ? "✕" : String.fromCharCode(65 + i)}
                      </span>
                      {opt}
                    </motion.button>
                  );
                })}
              </div>

              <AnimatePresence>
                {answered && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: "hidden" }}
                  >
                    <div
                      style={{
                        marginTop: "1.1rem",
                        padding: "0.9rem 1rem",
                        borderRadius: 12,
                        background: "color-mix(in srgb, var(--gold) 12%, transparent)",
                        borderLeft: "3px solid var(--gold)",
                      }}
                    >
                      <p style={{ margin: 0, fontSize: "0.92rem", color: "var(--ink-soft)", lineHeight: 1.6 }}>
                        <strong className="font-sans" style={{ color: selected === q.answer ? "var(--success)" : "var(--accent)" }}>
                          {selected === q.answer ? "Correct. " : "Not quite. "}
                        </strong>
                        {q.explanation}
                        {q.cite && (
                          <>
                            {" "}
                            <Cite ids={q.cite} />
                          </>
                        )}
                      </p>
                    </div>

                    <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1.1rem" }}>
                      <button onClick={next} className="btn btn-accent focus-ring">
                        {index + 1 >= quiz.length ? "See results →" : "Next question →"}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          style={{ textAlign: "center", padding: "1rem 0" }}
        >
          <div className="font-display" style={{ fontSize: "3.4rem", fontWeight: 800, color: "var(--accent)", lineHeight: 1 }}>
            {score}
            <span style={{ fontSize: "1.6rem", color: "var(--ink-faint)" }}>/{quiz.length}</span>
          </div>
          <h3 className="font-display" style={{ margin: "0.7rem 0 0.4rem", fontSize: "1.4rem" }}>
            {verdict}
          </h3>
          <p style={{ color: "var(--ink-soft)", margin: "0 0 1.4rem" }}>
            Thank you for exploring the life and character of José Rizal.
          </p>
          <button onClick={restart} className="btn focus-ring">
            ↻ Take the quiz again
          </button>
        </motion.div>
      )}
    </div>
  );
}
