import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function Section({
  id,
  roman,
  eyebrow,
  title,
  children,
}: {
  id: string;
  roman: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} style={{ scrollMarginTop: 80, padding: "clamp(2.5rem, 6vw, 4.5rem) 0" }}>
      <div className="shell">
        <Reveal>
          <span className="section-eyebrow">
            {eyebrow} · Part {roman}
          </span>
          <h2 className="section-title font-display">{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
