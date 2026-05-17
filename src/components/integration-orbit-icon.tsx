import {
  RiBarChartBoxFill,
  RiDatabase2Fill,
  RiFigmaFill,
  RiGoogleFill,
  RiOpenaiFill,
  RiPlug2Fill,
  RiSailboatFill,
  RiTerminalBoxFill,
  RiVercelFill,
} from "@remixicon/react";
import type { ComponentType } from "react";
import { cn } from "@/lib/utils";

type OrbitIcon = ComponentType<{ className?: string }>;

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

export const integrationOrbitIconSets = {
  inner: [RiSailboatFill, RiDatabase2Fill, RiFigmaFill],
  middle: [RiPlug2Fill, RiOpenaiFill, RiGoogleFill],
  outer: [RiVercelFill, RiTerminalBoxFill, RiBarChartBoxFill],
} as const satisfies Record<string, readonly OrbitIcon[]>;
