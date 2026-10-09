import type { Block, Fact, Mnemonic, Place } from "@/content/types";
import { BritainMap } from "./britain-map";
import { Figure } from "./figure";
import { ExpandableCards } from "./lesson-parts";
import { SourceRef } from "./ui";

/** Renders a lesson's content blocks in order. */
export function Blocks({ blocks, places }: { blocks: Block[]; places: Place[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case "prose":
            return (
              <section key={i} className="mt-10 first:mt-0">
                {b.heading && (
                  <div className="mb-3 flex items-baseline justify-between gap-4">
                    <h2 className="display text-[1.65rem]">{b.heading}</h2>
                    <SourceRef pages={b.pages} />
                  </div>
                )}
                <div className="prose-body">
                  {b.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </section>
            );
          case "figure":
            return <Figure key={i} figure={b.figure} wide={b.wide} />;
          case "figures":
            return (
              <div key={i} className="grid gap-x-6 sm:grid-cols-2">
                {b.figures.map((f) => (
                  <Figure key={f.imageId} figure={f} aspect="aspect-[3/4]" />
                ))}
              </div>
            );
          case "cards":
            return (
              <section key={i} className="my-10">
                {b.heading && <h2 className="display mb-4 text-[1.65rem]">{b.heading}</h2>}
                <ExpandableCards cards={b.cards} />
              </section>
            );
          case "map":
            return (
              <section key={i} className="my-10">
                {b.heading && <h2 className="display mb-1 text-[1.65rem]">{b.heading}</h2>}
                <BritainMap places={places} highlight={b.placeIds} caption={b.caption} />
              </section>
            );
          case "context":
            return <ContextNote key={i} title={b.title} items={b.body.map((c) => c.text)} />;
          case "sequence":
            return (
              <section key={i} className="my-10">
                <div className="mb-4 flex items-baseline justify-between gap-4">
                  <h2 className="display text-[1.65rem]">{b.heading}</h2>
                  <SourceRef pages={[b.page]} />
                </div>
                <ol className="grid gap-px overflow-hidden rounded-[3px] border hairline bg-rule sm:grid-cols-3">
                  {b.steps.map((s, n) => (
                    <li key={s.label} className="bg-card p-5">
                      <span className="numeral text-2xl text-gold">{n + 1}</span>
                      <p className="mt-1 font-serif text-[1.25rem] text-ink">{s.label}</p>
                      <p className="mt-1 font-sans text-sm leading-relaxed text-ink-2">{s.detail}</p>
                    </li>
                  ))}
                </ol>
              </section>
            );
          case "quote":
            return (
              <blockquote key={i} className="my-10 border-l-2 border-accent pl-6">
                <p className="font-serif text-2xl italic leading-snug text-ink">{b.text}</p>
                <footer className="mt-2 font-sans text-sm text-muted">{b.attribution}</footer>
              </blockquote>
            );
        }
      })}
    </>
  );
}

export function ContextNote({ title, items }: { title: string; items: string[] }) {
  return (
    <aside className="my-10 rounded-[3px] border border-dashed border-rule px-5 py-4">
      <p className="kicker mb-2">{title}</p>
      <p className="mb-2 font-sans text-xs text-muted">Not in the handbook and not needed for the test. Added for context.</p>
      <ul className="grid gap-1.5">
        {items.map((t) => (
          <li key={t} className="font-sans text-sm leading-relaxed text-ink-2">
            {t}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function KeyFacts({ facts, title = "Key facts to remember" }: { facts: Fact[]; title?: string }) {
  return (
    <section className="my-12 rounded-[3px] bg-gold-soft px-6 py-6 sm:px-8" aria-label={title}>
      <p className="kicker mb-4 !text-gold">{title}</p>
      <ul className="grid gap-3">
        {facts.map((f) => (
          <li key={f.text} className="flex gap-4">
            <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
            <span className="flex-1 font-serif text-[1.08rem] leading-snug text-ink">
              {f.text} <span className="ml-1 whitespace-nowrap font-sans text-[0.7rem] text-gold">p. {f.page}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Mnemonics({ items }: { items: Mnemonic[] }) {
  if (!items.length) return null;
  return (
    <section className="my-12">
      <p className="kicker mb-1">Memory aids</p>
      <p className="mb-4 font-sans text-xs text-muted">Devices to help you remember. They are not from the handbook.</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((m) => (
          <div key={m.title} className="rounded-[3px] border hairline bg-card p-5">
            <p className="font-sans text-xs font-semibold uppercase tracking-wider text-accent">{m.title}</p>
            <p className="mt-2 font-serif text-[1.25rem] italic leading-snug text-ink">{m.device}</p>
            <p className="mt-2 font-sans text-sm leading-relaxed text-ink-2">{m.explanation}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
