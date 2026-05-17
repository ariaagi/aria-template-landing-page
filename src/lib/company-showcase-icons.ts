import {
  RiBarChartBoxFill,
  RiFigmaFill,
  RiGoogleFill,
  RiOpenaiFill,
  RiPlug2Fill,
  RiVercelFill,
} from "@remixicon/react";
import type { ComponentType } from "react";

export type CompanyShowcaseIcon = ComponentType<{ className?: string }>;

export const companyShowcaseIconMap = {
  openai: RiOpenaiFill,
  google: RiGoogleFill,
  figma: RiFigmaFill,
  vercel: RiVercelFill,
  integrations: RiPlug2Fill,
  analytics: RiBarChartBoxFill,
} as const satisfies Record<string, CompanyShowcaseIcon>;

export type CompanyShowcaseIconKey = keyof typeof companyShowcaseIconMap;
