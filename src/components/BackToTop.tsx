"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 12 }}
          whileHover={{ y: -3 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="focus-ring"
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            zIndex: 70,
            width: 48,
            height: 48,
            borderRadius: 999,
            border: "1px solid var(--line-strong)",
            background: "var(--accent-bg)",
            color: "var(--on-accent)",
            cursor: "pointer",
            fontSize: "1.2rem",
            boxShadow: "0 12px 30px -12px var(--shadow)",
          }}
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}
