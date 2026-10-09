import Image from "next/image";
import { images } from "@/content/curriculum";
import type { FigureRef } from "@/content/types";
import { cn } from "@/lib/utils";

export function Credit({ imageId, className }: { imageId: string; className?: string }) {
  const img = images[imageId];
  if (!img) return null;
  return (
    <span className={cn("font-sans text-[0.68rem] text-muted", className)}>
      {img.author} ·{" "}
      <a href={img.sourceUrl} target="_blank" rel="noreferrer" className="underline decoration-rule underline-offset-2 hover:text-ink">
        {img.licence}
      </a>
      , via Wikimedia Commons
    </span>
  );
}

export function Figure({
  figure,
  wide,
  priority,
  aspect,
}: {
  figure: FigureRef;
  wide?: boolean;
  priority?: boolean;
  aspect?: string;
}) {
  const img = images[figure.imageId];
  if (!img) return null;
  // Keep tall images (portraits, artefacts) from dominating the reading column.
  const portrait = !aspect && img.height > img.width * 1.1;
  // Pictures of places, paintings and documents hang in a gilded frame; artefacts sit on the page.
  const framed = figure.kind !== "artefact";
  return (
    <figure className={cn("my-12", wide && !portrait && "lg:-mx-24", portrait && "sm:mx-auto sm:max-w-[26rem]")}>
      <div className={cn(framed ? "painting-frame" : "rounded-[2px] shadow-[0_14px_30px_-16px_rgba(30,18,8,0.45)]")}>
        <div className={cn("relative overflow-hidden bg-paper-2", aspect)}>
          <Image
            src={img.src}
            alt={figure.caption}
            width={img.width}
            height={img.height}
            priority={priority}
            sizes={wide ? "(min-width: 1024px) 960px, 100vw" : "(min-width: 768px) 720px, 100vw"}
            className={cn("w-full", aspect ? "h-full object-cover" : "h-auto")}
          />
        </div>
      </div>
      <figcaption className="mt-5 grid gap-1 border-l-2 border-gold/50 pl-3">
        <span className="kicker !text-[0.62rem] !text-gold">{figure.kind}</span>
        <span className="font-serif text-[0.98rem] leading-snug text-ink-2">{figure.caption}</span>
        {figure.context && (
          <span className="font-sans text-[0.78rem] leading-relaxed text-muted">
            <span className="font-medium">Beyond the handbook:</span> {figure.context}
          </span>
        )}
        <Credit imageId={figure.imageId} />
      </figcaption>
    </figure>
  );
}
