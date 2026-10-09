"use client";

import { StatusPill } from "@/components/ui";
import { getUnit } from "@/content/curriculum";
import { useHydrated, useProgress } from "@/lib/progress";
import { unitStats } from "@/lib/stats";

export function UnitBadge({ unitId, planned }: { unitId: string; planned: boolean }) {
  const p = useProgress();
  const hydrated = useHydrated();
  if (planned) return <StatusPill status="planned" />;
  if (!hydrated) return null;
  return <StatusPill status={unitStats(getUnit(unitId)!, p).status} />;
}
