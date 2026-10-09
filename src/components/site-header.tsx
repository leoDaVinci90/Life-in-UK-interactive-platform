"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { allFlashcards } from "@/content/curriculum";
import { useNow, useProgress } from "@/lib/progress";
import { isDue } from "@/lib/srs";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/", label: "Dashboard" },
  { href: "/curriculum", label: "Curriculum" },
  { href: "/review", label: "Review" },
  { href: "/exam", label: "Practice exam" },
  { href: "/sources", label: "Sources" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const progress = useProgress();
  const now = useNow();
  const due = now
    ? allFlashcards.filter((c) => progress.cards[c.id] && isDue(progress.cards[c.id], now)).length +
      Object.keys(progress.mistakes).length
    : 0;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href) || (href === "/curriculum" && pathname.startsWith("/units"));

  return (
    <header className="relative z-40 bg-night text-night-ink shadow-[0_1px_0_rgba(0,0,0,0.4)] sm:sticky sm:top-0">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-1 px-4 py-3 sm:flex-nowrap sm:px-8">
        <Link href="/" className="group flex shrink-0 items-baseline gap-2">
          <span className="font-display text-[1.2rem] uppercase tracking-[0.06em] text-night-ink">Life in the UK</span>
          <span className="kicker hidden !text-night-ink/45 sm:inline">Study edition</span>
        </Link>
        <nav aria-label="Main" className="order-last -mx-2.5 flex w-[calc(100%+1.25rem)] items-center gap-1 overflow-x-auto [scrollbar-width:none] sm:order-none sm:mx-0 sm:w-auto sm:flex-1">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={isActive(n.href) ? "page" : undefined}
              className={cn(
                "relative whitespace-nowrap rounded px-2.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.12em] transition-colors",
                isActive(n.href) ? "bg-white/10 text-night-ink sm:bg-transparent" : "text-night-ink/55 hover:text-night-ink",
              )}
            >
              {n.label}
              {n.href === "/review" && due > 0 && (
                <span className="ml-1.5 rounded-full bg-accent px-1.5 py-0.5 text-[0.62rem] font-semibold tracking-normal text-night tabular-nums">
                  {due}
                </span>
              )}
              {isActive(n.href) && <span className="absolute inset-x-2.5 -bottom-[13px] hidden h-px bg-accent sm:block" />}
            </Link>
          ))}
        </nav>
        <span className="ml-auto sm:ml-0">
          <ThemeToggle />
        </span>
      </div>
    </header>
  );
}

function ThemeToggle() {
  const cycle = () => {
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const current = document.documentElement.dataset.theme ?? (systemDark ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("lituk.theme", next);
    } catch {}
  };

  return (
    <button
      onClick={cycle}
      className="shrink-0 rounded-full border border-night-ink/20 p-2 text-night-ink/60 transition-colors hover:text-night-ink"
      aria-label="Switch light or dark theme"
      title="Switch light or dark theme"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M12 3a9 9 0 1 0 9 9 7 7 0 0 1-9-9Z" />
      </svg>
    </button>
  );
}
