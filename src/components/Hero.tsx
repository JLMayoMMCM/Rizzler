"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { asset } from "@/lib/asset";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const rise = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const titleWords = ["The", "Shaping", "of", "a", "Hero"];

  return (
    <section
      ref={ref}
      id="top"
      style={{ position: "relative", overflow: "hidden", paddingBottom: "2rem" }}
    >
      {/* decorative orbits */}
      <motion.div
        aria-hidden
        style={{
          y,
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(closest-side, color-mix(in srgb, var(--gold) 16%, transparent), transparent), radial-gradient(closest-side, color-mix(in srgb, var(--accent) 12%, transparent), transparent)",
          backgroundPosition: "75% 18%, 12% 60%",
          backgroundSize: "520px 520px, 420px 420px",
          backgroundRepeat: "no-repeat",
        }}
      />

      <motion.div
        className="shell"
        style={{
          opacity,
          position: "relative",
          paddingTop: "clamp(2.5rem, 8vw, 6rem)",
          paddingBottom: "1rem",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "clamp(1.5rem, 5vw, 3.5rem)",
        }}
      >
        {/* text column */}
        <motion.div
          style={{ flex: "1 1 420px", minWidth: 0 }}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={rise}
            className="font-sans"
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.4em",
              fontSize: "0.74rem",
              fontWeight: 600,
              color: "var(--accent)",
              marginBottom: "1.2rem",
            }}
          >
            An Interactive Essay · José Protasio Rizal · 1861–1896
          </motion.p>

          <h1
            className="font-display"
            style={{ fontSize: "clamp(2.6rem, 7vw, 5.4rem)", lineHeight: 0.98, margin: "0 0 0.4rem" }}
          >
            <span style={{ display: "flex", flexWrap: "wrap", gap: "0.25em" }}>
              {titleWords.map((w, i) => (
                <motion.span key={i} variants={rise} style={{ display: "inline-block" }}>
                  {w === "Hero" ? <span style={{ color: "var(--accent)" }}>{w}</span> : w}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.h2
            variants={rise}
            className="font-display"
            style={{
              fontSize: "clamp(1.1rem, 3.4vw, 1.9rem)",
              fontWeight: 500,
              fontStyle: "italic",
              color: "var(--ink-soft)",
              margin: "0 0 1.6rem",
            }}
          >
            José Rizal&apos;s Character Development
          </motion.h2>

          <motion.p variants={rise} className="lede" style={{ maxWidth: 560, margin: "0 0 2rem" }}>
            How does a small, sickly boy from a colonial town become the conscience of a nation?
            Scroll through the forces — biological, environmental, and lived — that forged the
            Philippines&apos; foremost hero.
          </motion.p>

          <motion.div variants={rise} style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
            <a href="#introduction" className="btn btn-accent focus-ring" style={{ textDecoration: "none" }}>
              Begin reading ↓
            </a>
            <a href="#quiz" className="btn focus-ring" style={{ textDecoration: "none" }}>
              Test your knowledge
            </a>
          </motion.div>
        </motion.div>

        {/* portrait column */}
        <motion.figure
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          style={{ flex: "0 1 290px", margin: "0 auto", maxWidth: 290, width: "100%" }}
        >
          <motion.div
            className="portrait-frame"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <div className="portrait-inner">
              <img
                className="media-img"
                src={asset("/rizal-portrait.jpg")}
                alt="Studio portrait of José Rizal"
                width={955}
                height={1358}
                style={{ filter: "none" }}
              />
            </div>
          </motion.div>
          <figcaption
            className="font-sans"
            style={{
              textAlign: "center",
              marginTop: "0.8rem",
              fontSize: "0.74rem",
              letterSpacing: "0.08em",
              color: "var(--ink-faint)",
            }}
          >
            Dr. José Rizal, c. 1890s · public domain
          </figcaption>
        </motion.figure>
      </motion.div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{ textAlign: "center", paddingBottom: "1rem" }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="font-sans"
          style={{ fontSize: "0.7rem", letterSpacing: "0.3em", color: "var(--ink-faint)" }}
        >
          SCROLL
        </motion.div>
      </motion.div>
    </section>
  );
}
