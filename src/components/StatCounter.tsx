"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import Cite from "./Cite";
import { stats } from "@/data/content";

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, mv]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function StatCounter() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
        gap: "1rem",
      }}
    >
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          whileHover={{ y: -4 }}
          style={{ padding: "1.3rem 1.2rem" }}
        >
          <div
            className="font-display"
            style={{ fontSize: "2.6rem", lineHeight: 1, color: "var(--accent)", fontWeight: 800 }}
          >
            <Counter value={s.value} suffix={s.suffix} />
          </div>
          <div
            className="font-sans"
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              fontSize: "0.72rem",
              fontWeight: 700,
              color: "var(--ink)",
              margin: "0.5rem 0 0.4rem",
            }}
          >
            {s.label}
          </div>
          <p style={{ fontSize: "0.86rem", lineHeight: 1.5, color: "var(--ink-soft)", margin: 0 }}>
            {s.blurb}
            {s.cite && (
              <>
                {" "}
                <Cite ids={s.cite} />
              </>
            )}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
