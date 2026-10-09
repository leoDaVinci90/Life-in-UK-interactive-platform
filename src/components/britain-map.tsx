"use client";

import { useState } from "react";
import basemap from "@/content/map/basemap.json";
import type { Place } from "@/content/types";
import { cn } from "@/lib/utils";

const { lon0, lat0, k, cos } = basemap.projection;
const project = (lon: number, lat: number) => [(lon - lon0) * k * cos, (lat0 - lat) * k] as const;

const ERA_COLOUR: Record<string, string> = {
  "Stone Age": "var(--gold)",
  "Iron Age": "var(--gold)",
  Roman: "var(--accent)",
  "Anglo-Saxon": "var(--sage)",
  Viking: "var(--ink-2)",
  Norman: "var(--accent)",
};
const PALETTE = ["var(--accent)", "var(--sage)", "var(--gold)", "var(--wine)", "var(--ink-2)"];

/** A stable colour per category, so the same label always gets the same dot. */
function eraColour(era: string) {
  if (ERA_COLOUR[era]) return ERA_COLOUR[era];
  let h = 0;
  for (const ch of era) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return PALETTE[h % PALETTE.length];
}

/**
 * Interactive map of Britain drawn from Natural Earth outlines.
 * `places` are all markers; `highlight` (optional) dims the others.
 */
export function BritainMap({
  places,
  highlight,
  caption,
  compact,
}: {
  places: Place[];
  highlight?: string[];
  caption?: string;
  compact?: boolean;
}) {
  const shown = highlight ? places.filter((p) => highlight.includes(p.id)) : places;
  const [selected, setSelected] = useState<string | null>(shown[0]?.id ?? null);
  const sel = places.find((p) => p.id === selected);

  // Crop the view around the shown markers (with generous padding), but never tighter than ~40% of the map.
  const pts = shown.map((p) => project(p.lon, p.lat));
  const pad = 70;
  let [minX, minY, maxX, maxY] = [
    Math.min(...pts.map((p) => p[0])) - pad,
    Math.min(...pts.map((p) => p[1])) - pad,
    Math.max(...pts.map((p) => p[0])) + pad,
    Math.max(...pts.map((p) => p[1])) + pad,
  ];
  const minW = basemap.width * 0.55;
  const minH = basemap.height * 0.42;
  if (maxX - minX < minW) [minX, maxX] = [(minX + maxX - minW) / 2, (minX + maxX + minW) / 2];
  if (maxY - minY < minH) [minY, maxY] = [(minY + maxY - minH) / 2, (minY + maxY + minH) / 2];
  const viewBox = compact || !highlight ? `0 0 ${basemap.width} ${basemap.height}` : `${minX} ${minY} ${maxX - minX} ${maxY - minY}`;
  const scale = highlight && !compact ? (maxX - minX) / basemap.width : 1;

  return (
    <figure className="my-10 grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-start">
      <div className="overflow-hidden rounded-[2px] border hairline" style={{ background: "var(--sea)" }}>
        <svg viewBox={viewBox} className="block h-auto w-full" role="img" aria-label="Map of Britain showing the places in this section">
          <path d={basemap.paths.continent} fill="var(--land)" stroke="var(--rule)" strokeWidth={0.6 * scale} />
          <path d={basemap.paths.ireland} fill="var(--land)" stroke="var(--rule)" strokeWidth={0.6 * scale} />
          <path d={basemap.paths.crown} fill="var(--land)" stroke="var(--rule)" strokeWidth={0.6 * scale} />
          <path d={basemap.paths.uk} fill="var(--land-uk)" stroke="var(--muted)" strokeOpacity={0.5} strokeWidth={0.6 * scale} />
          {shown
            .filter((p) => p.line)
            .map((p) => {
              const [a, b] = p.line!.map(([lon, lat]) => project(lon, lat));
              return (
                <line
                  key={`${p.id}-line`}
                  x1={a[0]}
                  y1={a[1]}
                  x2={b[0]}
                  y2={b[1]}
                  stroke={eraColour(p.era)}
                  strokeWidth={(p.id === selected ? 4 : 3) * scale}
                  strokeLinecap="round"
                  className="cursor-pointer"
                  onClick={() => setSelected(p.id)}
                />
              );
            })}
          {shown.map((p) => {
            const [x, y] = project(p.lon, p.lat);
            const isSel = p.id === selected;
            const r = (isSel ? 7 : 5) * scale;
            const side = p.label?.side ?? "right";
            const dy = (p.label?.dy ?? 0) * scale;
            const colour = eraColour(p.era);
            return (
              <g
                key={p.id}
                role="button"
                tabIndex={0}
                aria-label={p.name}
                aria-pressed={isSel}
                onClick={() => setSelected(p.id)}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), setSelected(p.id))}
                className="cursor-pointer outline-none"
              >
                {!p.line && (
                  <>
                    {isSel && <circle cx={x} cy={y} r={r * 2.2} fill={colour} opacity={0.18} />}
                    <circle cx={x} cy={y} r={r} fill={colour} stroke="var(--paper)" strokeWidth={1.5 * scale} />
                  </>
                )}
                <text
                  x={side === "right" ? x + r + 4 * scale : x - r - 4 * scale}
                  y={y + 4 * scale + dy}
                  textAnchor={side === "right" ? "start" : "end"}
                  fontSize={12.5 * scale}
                  fontFamily="var(--font-inter)"
                  fontWeight={isSel ? 650 : 500}
                  fill="var(--ink)"
                  stroke="var(--sea)"
                  strokeWidth={3 * scale}
                  paintOrder="stroke"
                >
                  {p.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <div className="md:sticky md:top-24">
        {caption && <p className="mb-4 font-serif text-[1.02rem] leading-snug text-ink-2">{caption}</p>}
        <ul className="divide-y hairline border-y hairline">
          {shown.map((p) => (
            <li key={p.id}>
              <button
                onClick={() => setSelected(p.id)}
                className={cn("flex w-full items-start gap-3 py-3 text-left transition-colors", p.id === selected ? "text-ink" : "text-ink-2 hover:text-ink")}
                aria-expanded={p.id === selected}
              >
                <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: eraColour(p.era) }} />
                <span className="grid gap-1">
                  <span className="font-sans text-sm font-semibold">
                    {p.name} <span className="kicker ml-1 !text-[0.6rem]">{p.era}</span>
                  </span>
                  {p.id === selected && <span className="font-serif text-[0.98rem] leading-snug text-ink-2">{p.note}</span>}
                </span>
              </button>
            </li>
          ))}
        </ul>
        {sel && <p className="mt-3 font-sans text-[0.68rem] text-muted">Handbook p. {sel.page} · Map outlines: Natural Earth (public domain)</p>}
      </div>
    </figure>
  );
}
