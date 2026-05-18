import { siteCopy } from "@/content/site-copy";
import {
  companyShowcaseIconMap,
  DEFAULT_COMPANY_SHOWCASE_ICON,
  type CompanyShowcaseIconKey,
} from "@/lib/company-showcase-icons";
import type { ComponentType } from "react";
import { cn } from "@/lib/utils";

type OrbitIcon = ComponentType<{ className?: string }>;

function resolveOrbitIcon(key: string): OrbitIcon {
  const map = companyShowcaseIconMap as Record<string, OrbitIcon | undefined>;
  return map[key as CompanyShowcaseIconKey] ?? DEFAULT_COMPANY_SHOWCASE_ICON;
}

export function IntegrationOrbitIcon({
  icon: Icon,
  className,
}: {
  icon: OrbitIcon;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex size-full items-center justify-center rounded-full bg-background text-foreground shadow-sm ring-1 ring-border/80",
        className,
      )}
    >
      <Icon className="size-7" aria-hidden />
    </div>
  );
}

const orbit = siteCopy.bentoSection.animations.second.orbit;

export const integrationOrbitIconSets = {
  inner: [orbit.inner1, orbit.inner2, orbit.inner3].map(resolveOrbitIcon),
  middle: [orbit.middle1, orbit.middle2, orbit.middle3].map(resolveOrbitIcon),
  outer: [orbit.outer1, orbit.outer2, orbit.outer3].map(resolveOrbitIcon),
} satisfies Record<string, readonly OrbitIcon[]>;
