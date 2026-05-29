import { referenceMap } from "@/data/references";

/**
 * In-text IEEE citation, e.g. [3] or [8, 9].
 * Renders clickable superscript links that jump to the reference list,
 * with an on-hover/-focus tooltip previewing the source.
 */
export default function Cite({ ids }: { ids: number[] }) {
  return (
    <span className="cite" tabIndex={0} aria-label={`Citation ${ids.join(", ")}`}>
      [
      {ids.map((id, i) => {
        const ref = referenceMap[id];
        return (
          <span key={id}>
            <a href={`#ref-${id}`} className="focus-ring">
              {id}
            </a>
            {i < ids.length - 1 ? ", " : ""}
          </span>
        );
      })}
      ]
      <span className="tooltip" role="tooltip">
        {ids.map((id) => (
          <span key={id} style={{ display: "block", marginBottom: ids.length > 1 ? 6 : 0 }}>
            <strong style={{ color: "var(--gold-soft)" }}>[{id}] </strong>
            {referenceMap[id]?.ieee}
          </span>
        ))}
      </span>
    </span>
  );
}
