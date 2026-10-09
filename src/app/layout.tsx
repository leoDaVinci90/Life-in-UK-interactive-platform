import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
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
      <body className={`${newsreader.variable} ${inter.variable} antialiased min-h-screen`}>
        <SiteHeader />
        <main>{children}</main>
        <footer className="mx-auto mt-24 max-w-6xl border-t hairline px-4 py-10 text-sm text-muted sm:px-8">
          <p>
            A personal study edition of <em className="font-serif">Life in the UK: A Guide for New Residents</em>, 3rd
            edition. The handbook is the primary source; practice questions on this site are written from it and are
            not official test questions.
          </p>
        </footer>
      </body>
    </html>
  );
}
