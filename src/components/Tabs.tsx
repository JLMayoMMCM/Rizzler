"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cite from "./Cite";
import { asset } from "@/lib/asset";
import type { Tab } from "@/data/content";

export default function Tabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0].key);
  const current = tabs.find((t) => t.key === active) ?? tabs[0];

  return (
    <div className="card" style={{ padding: "0.5rem", overflow: "hidden" }}>
      <div
        className="no-scrollbar font-sans"
        role="tablist"
        style={{ display: "flex", gap: "0.25rem", overflowX: "auto", padding: "0.35rem" }}
      >
        {tabs.map((t) => {
          const isActive = t.key === active;
          return (
            <button
              key={t.key}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(t.key)}
              className="focus-ring"
              style={{
                position: "relative",
                isolation: "isolate",
                border: "none",
                background: "transparent",
                cursor: "pointer",
                padding: "0.6rem 1rem",
                borderRadius: 999,
                fontSize: "0.82rem",
                fontWeight: isActive ? 700 : 500,
                color: isActive ? "var(--on-accent)" : "var(--ink-soft)",
                whiteSpace: "nowrap",
                transition: "color 0.2s ease",
              }}
            >
              {isActive && (
                <motion.span
                  layoutId="tab-pill"
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: 999,
                    background: "var(--accent-bg)",
                    zIndex: 0,
                  }}
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span style={{ position: "relative", zIndex: 1 }}>{t.label}</span>
            </button>
          );
        })}
      </div>

      <div style={{ padding: "1.1rem 1.2rem 1.4rem" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current.key}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-display" style={{ marginTop: 0, marginBottom: "0.7rem", fontSize: "1.4rem" }}>
              {current.heading}
            </h3>
            <div style={{ display: "flex", gap: "1.4rem", flexWrap: "wrap", alignItems: "flex-start" }}>
              <div style={{ flex: "1 1 280px", minWidth: 0 }}>
                {current.body.map((para, i) => (
                  <p
                    key={i}
                    style={{ margin: "0 0 0.9rem", color: "var(--ink-soft)", fontSize: "1rem", lineHeight: 1.7 }}
                  >
                    {para}
                    {i === current.body.length - 1 && current.cite && (
                      <>
                        {" "}
                        <Cite ids={current.cite} />
                      </>
                    )}
                  </p>
                ))}
              </div>

              {current.images && current.images.length > 0 && (
                <div
                  style={{
                    flex: "0 1 auto",
                    display: "flex",
                    gap: "0.8rem",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  {current.images.map((img) => (
                    <figure
                      key={img.src}
                      className="thumb-frame"
                      style={{ margin: 0, width: current.images!.length > 1 ? 118 : 168 }}
                    >
                      <div style={{ aspectRatio: "3 / 4", overflow: "hidden" }}>
                        <img className="media-img" src={asset(img.src)} alt={img.alt} loading="lazy" />
                      </div>
                      <figcaption
                        className="font-sans"
                        style={{
                          fontSize: "0.68rem",
                          lineHeight: 1.35,
                          color: "var(--ink-faint)",
                          padding: "0.4rem 0.5rem 0.5rem",
                          textAlign: "center",
                        }}
                      >
                        {img.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
