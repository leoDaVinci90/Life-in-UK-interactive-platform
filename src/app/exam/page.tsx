import type { Metadata } from "next";
import { ExamClient } from "./exam-client";

export const metadata: Metadata = { title: "Practice exam" };

export default function ExamPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-8">
      <ExamClient />
    </div>
  );
}
