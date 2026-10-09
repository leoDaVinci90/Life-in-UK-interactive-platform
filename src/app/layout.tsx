import type { Metadata } from "next";
import { Inter, Metamorphous } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const metamorphous = Metamorphous({
  variable: "--font-metamorphous",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "Life in the UK: Study Edition", template: "%s · Life in the UK" },
  description: "A personal, interactive study edition of Life in the UK: A Guide for New Residents (3rd edition).",
};

// Applies a saved light/dark choice before paint to avoid a flash.
const themeScript = `try{var t=localStorage.getItem('lituk.theme');if(t)document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${metamorphous.variable} ${inter.variable} antialiased min-h-screen`}>
        <SiteHeader />
        <main>{children}</main>
        <footer className="mt-24 bg-night text-night-ink/70">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-14 sm:px-8 md:grid-cols-[auto_minmax(0,1fr)] md:items-end md:gap-16">
            <p className="font-display text-[1.6rem] uppercase leading-none tracking-[0.04em] text-night-ink">
              Life in
              <br />
              the UK
            </p>
            <p className="max-w-2xl text-sm leading-relaxed">
              A personal study edition of <em>Life in the UK: A Guide for New Residents</em>, 3rd edition. The handbook is
              the primary source; practice questions on this site are written from it and are not official test
              questions.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
