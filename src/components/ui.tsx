import Link from "next/link";
import type { ReactNode } from "react";
import { cn, pageLabel } from "@/lib/utils";

/** Opens the local handbook PDF at a page. */
export function SourceRef({ pages, className }: { pages: number[]; className?: string }) {
  return (
    <a
      href={`/handbook.pdf#page=${pages[0]}`}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "inline-flex items-center gap-1 whitespace-nowrap font-sans text-[0.72rem] font-medium tracking-wide text-gold underline decoration-gold/30 underline-offset-2 hover:decoration-gold",
        className,
      )}
      title="Open the handbook at this page"
    >
      Handbook {pageLabel(pages)}
      <svg width="10" height="10" viewBox="0 0 12 12" aria-hidden className="opacity-70">
        <path d="M4 2h6v6M10 2 3 9" stroke="currentColor" strokeWidth="1.3" fill="none" />
      </svg>
    </a>
  );
}

export function Kicker({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("kicker", className)}>{children}</p>;
}

export function ProgressBar({ value, className, tone = "ink" }: { value: number; className?: string; tone?: "ink" | "accent" | "sage" }) {
  const pct = Math.round(Math.max(0, Math.min(1, value)) * 100);
  return (
    <div
      className={cn("h-[3px] w-full overflow-hidden rounded-full bg-rule", className)}
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={cn("h-full rounded-full transition-[width] duration-700", tone === "ink" ? "bg-ink" : tone === "accent" ? "bg-accent" : "bg-sage")}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

const STATUS = {
  "not-started": { label: "Not started", cls: "text-muted border-rule" },
  "in-progress": { label: "In progress", cls: "text-gold border-gold/40" },
  "needs-revision": { label: "Needs revision", cls: "text-accent border-accent/40" },
  complete: { label: "Complete", cls: "text-sage border-sage/40" },
  planned: { label: "Planned", cls: "text-muted border-rule border-dashed" },
} as const;

export function StatusPill({ status }: { status: keyof typeof STATUS }) {
  const s = STATUS[status];
  return (
    <span className={cn("inline-flex items-center rounded-full border px-2 py-0.5 font-sans text-[0.7rem] font-medium", s.cls)}>
      {s.label}
    </span>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "quiet";
  className?: string;
}) {
  return (
    <Link href={href} className={cn(buttonClass(variant), className)}>
      {children}
    </Link>
  );
}

export function buttonClass(variant: "primary" | "secondary" | "quiet" = "primary") {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 font-sans text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-40",
    variant === "primary" && "bg-ink text-paper hover:bg-accent",
    variant === "secondary" && "border hairline bg-card text-ink hover:border-ink",
    variant === "quiet" && "text-ink-2 underline decoration-rule underline-offset-4 hover:text-ink hover:decoration-ink",
  );
}

export function SectionHeading({ kicker, title, children }: { kicker?: string; title: string; children?: ReactNode }) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b hairline pb-3">
      <div>
        {kicker && <Kicker className="mb-2 !text-accent">{kicker}</Kicker>}
        <h2 className="display text-[1.7rem] sm:text-[2.1rem]">{title}</h2>
      </div>
      {children}
    </div>
  );
}

export function GeneratedNotice({ className }: { className?: string }) {
  return (
    <p className={cn("font-sans text-xs text-muted", className)}>
      Practice questions written for this site from the handbook text. They are not official Life in the UK test questions.
    </p>
  );
}
