"use client";

import { RiHomeFill } from "@remixicon/react";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

function normalizeLogoSrc(logoSrc: string): string {
  const trimmed = logoSrc.trim();
  if (!trimmed) return "";
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}

function HomeMark({
  className,
  onDark,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <RiHomeFill
      className={cn(
        "shrink-0",
        onDark ? "fill-white text-white" : "text-foreground",
        className,
      )}
      aria-hidden
    />
  );
}

function UploadedBrandImage({
  src,
  className,
  onDark,
  onBroken,
}: {
  src: string;
  className?: string;
  onDark?: boolean;
  onBroken?: "home" | "hidden";
}) {
  const [broken, setBroken] = useState(false);

  if (broken) {
    if (onBroken === "hidden") return null;
    return <HomeMark className={className} onDark={onDark} />;
  }

  return (
    <Image
      src={src}
      alt=""
      aria-hidden
      width={40}
      height={40}
      className={cn("shrink-0 object-contain", className)}
      onError={() => setBroken(true)}
    />
  );
}

type BrandLogoProps = {
  className?: string;
};

/** Nav / footer: uploaded image when `hasLogo`, otherwise hidden (name-only layout). */
export function BrandLogo({ className }: BrandLogoProps) {
  const { brand } = siteConfig;

  if (!brand.hasLogo) {
    return null;
  }

  const src = normalizeLogoSrc(brand.logoSrc ?? "");
  if (!src) {
    return null;
  }

  return (
    <UploadedBrandImage
      src={src}
      className={cn("size-7 md:size-9", className)}
      onBroken="hidden"
    />
  );
}

type BrandMarkProps = {
  className?: string;
  /** Orbit hub: dark circle behind the mark. */
  onDark?: boolean;
};

/**
 * Bento / orbit center: uploaded logo when `hasLogo`, else Remix home (never a broken img).
 */
export function BrandMark({ className, onDark }: BrandMarkProps) {
  const { brand } = siteConfig;

  if (!brand.hasLogo) {
    return <HomeMark className={className} onDark={onDark} />;
  }

  const src = normalizeLogoSrc(brand.logoSrc ?? "");
  if (!src) {
    return <HomeMark className={className} onDark={onDark} />;
  }

  return (
    <UploadedBrandImage
      src={src}
      className={className}
      onDark={onDark}
      onBroken="home"
    />
  );
}
