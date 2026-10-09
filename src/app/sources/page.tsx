import type { Metadata } from "next";
import Image from "next/image";
import { SourceRef } from "@/components/ui";
import { images } from "@/content/curriculum";
import { datedInformation, examFormatNote, sourceErrors } from "@/content/flags";
import basemap from "@/content/map/basemap.json";

export const metadata: Metadata = { title: "Sources" };

export default function SourcesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-8 sm:py-20">
      <p className="kicker">Where everything comes from</p>
      <h1 className="display mt-3 text-[3rem] sm:text-[4.2rem]">Sources</h1>

      <section className="mt-12 grid gap-4">
        <h2 className="display text-[1.8rem]">The handbook</h2>
        <div className="prose-body max-w-2xl">
          <p>
            <em>Life in the UK: A guide for new residents</em>, 3rd edition, PDF version (98 pages, Crown copyright) is the
            primary source for everything on this site. Every lesson section, key fact, flashcard and question shows the
            page it comes from.
          </p>
          <p>
            Information that is not in the handbook (extra dates, background on images, memory aids) is always labelled{" "}
            <span className="font-sans text-sm font-medium">Beyond the handbook</span>, or shown in grey with a † on
            timelines.
          </p>
        </div>
        <div>
          <a href="/handbook.pdf" target="_blank" rel="noreferrer" className="font-sans text-sm font-medium text-accent hover:underline">
            Open the handbook PDF →
          </a>
          <p className="mt-1 font-sans text-xs text-muted">
            The PDF is kept on this computer only (public/handbook.pdf) and is not part of the code repository.
          </p>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="display text-[1.8rem]">Accuracy notes</h2>
        <p className="mt-2 max-w-2xl font-sans text-sm text-ink-2">
          Found while analysing the PDF. Nothing has been corrected silently: where the site differs from the PDF, the reason
          is listed here.
        </p>
        <h3 className="kicker mb-3 mt-8">Errors and inconsistencies in the PDF</h3>
        <FlagList flags={sourceErrors} />
        <h3 className="kicker mb-3 mt-8">Information that may be out of date</h3>
        <FlagList flags={datedInformation} />
        <h3 className="kicker mb-3 mt-8">Test format</h3>
        <p className="max-w-2xl font-sans text-sm leading-relaxed text-ink-2">{examFormatNote}</p>
      </section>

      <section className="mt-14">
        <h2 className="display text-[1.8rem]">Practice questions</h2>
        <p className="mt-2 max-w-2xl font-serif text-lg text-ink-2">
          All quiz and exam questions were written for this site from the handbook text. They follow the formats of the real
          test (one answer, true or false, two answers) but they are not official Life in the UK test questions.
        </p>
      </section>

      <section className="mt-14">
        <h2 className="display text-[1.8rem]">Images</h2>
        <p className="mt-2 max-w-2xl font-sans text-sm text-ink-2">
          Real photographs, artefacts and historical documents from Wikimedia Commons, used under the licences shown. No
          image on this site is AI-generated. Later depictions (such as Victorian statues) are labelled as such.
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {Object.entries(images).map(([id, img]) => (
            <li key={id} className="flex gap-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[2px] bg-paper-2">
                <Image src={img.src} alt="" fill sizes="64px" className="object-cover" />
              </div>
              <div className="grid content-start gap-0.5 font-sans text-xs">
                <a href={img.sourceUrl} target="_blank" rel="noreferrer" className="font-medium text-ink hover:underline">
                  {img.title}
                </a>
                <span className="text-muted">{img.author}</span>
                <span className="text-muted">
                  {img.licenceUrl ? (
                    <a href={img.licenceUrl} target="_blank" rel="noreferrer" className="underline underline-offset-2">
                      {img.licence}
                    </a>
                  ) : (
                    img.licence
                  )}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="display text-[1.8rem]">Maps</h2>
        <p className="mt-2 max-w-2xl font-sans text-sm text-ink-2">{basemap.source}. Simplified and projected for this site.</p>
      </section>
    </div>
  );
}

function FlagList({ flags }: { flags: { page: number; text: string }[] }) {
  return (
    <ul className="divide-y hairline border-y hairline">
      {flags.map((f) => (
        <li key={f.text} className="grid gap-1 py-3 sm:grid-cols-[6rem_minmax(0,1fr)] sm:gap-4">
          <SourceRef pages={[f.page]} />
          <span className="font-sans text-sm leading-relaxed text-ink-2">{f.text}</span>
        </li>
      ))}
    </ul>
  );
}
