"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current = (document.documentElement.getAttribute("data-theme") as Theme) || "light";
    setTheme(current);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("rizal-theme", next);
    } catch {
      /* ignore */
    }
  };

  return (
    <button
      onClick={toggle}
      className="btn focus-ring"
      aria-label="Toggle colour theme"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.5rem 0.9rem",
        minWidth: 132,
        justifyContent: "flex-start",
      }}
    >
      <span style={{ position: "relative", width: 18, height: 18, display: "inline-block", flex: "0 0 auto" }}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={mounted ? theme : "init"}
            initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.25 }}
            style={{ position: "absolute", inset: 0, fontSize: 16, lineHeight: "18px" }}
          >
            {theme === "light" ? "☾" : "☀"}
          </motion.span>
        </AnimatePresence>
      </span>
      <span className="font-sans" style={{ fontSize: "0.8rem" }}>
        {theme === "light" ? "Midnight" : "Parchment"}
      </span>
    </button>
  );
}
