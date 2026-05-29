"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navSections } from "@/data/sections";
import ThemeToggle from "./ThemeToggle";

export default function SiteHeader() {
  const [active, setActive] = useState<string>("introduction");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const ids = navSections.map((s) => s.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 80,
        backdropFilter: "blur(10px)",
        background: scrolled ? "color-mix(in srgb, var(--bg) 82%, transparent)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div
        className="shell"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          height: 62,
          justifyContent: "space-between",
        }}
      >
        <a
          href="#top"
          className="font-display focus-ring"
          style={{
            fontWeight: 700,
            fontSize: "1.05rem",
            textDecoration: "none",
            color: "var(--ink)",
            whiteSpace: "nowrap",
            letterSpacing: "0.01em",
          }}
        >
          <span style={{ color: "var(--accent)" }}>Rizal</span> · Shaping of a Hero
        </a>

        <nav
          className="no-scrollbar font-sans"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.15rem",
            overflowX: "auto",
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          {navSections.map((s) => {
            const isActive = active === s.id;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="focus-ring"
                style={{
                  position: "relative",
                  padding: "0.4rem 0.6rem",
                  fontSize: "0.8rem",
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? "var(--accent)" : "var(--ink-soft)",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  transition: "color 0.2s ease",
                }}
              >
                {s.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    style={{
                      position: "absolute",
                      left: 8,
                      right: 8,
                      bottom: 2,
                      height: 2,
                      borderRadius: 2,
                      background: "var(--accent)",
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
