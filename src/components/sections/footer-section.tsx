"use client";

import { BrandLogo } from "@/components/brand-logo";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { useMediaQuery } from "@/hooks/use-media-query";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { RiTwitterXLine } from "@remixicon/react";
import Link from "next/link";

export function FooterSection() {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  return (
    <footer id="footer" className="w-full pb-0">
      <div className="flex items-center justify-center gap-1.5 p-10">
        <Link
          href="/"
          className={cn(
            "flex max-w-[min(32ch,80vw)] min-w-0 items-center",
            siteConfig.brand.hasLogo && "gap-2",
          )}
        >
          <BrandLogo className="size-8 md:size-8" />
          <p className="truncate text-xl font-semibold whitespace-nowrap text-primary">
            {siteConfig.brand.displayName}
          </p>
        </Link>
        {siteConfig.brand.showFooterSocial ? (
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={siteConfig.brand.footerSocialAriaLabel}
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <RiTwitterXLine className="size-6" />
          </Link>
        ) : null}
      </div>
      <div className="relative z-0 mt-8 h-56 w-full sm:h-60 md:h-64">
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-transparent from-55% to-background to-100%" />
        <div className="absolute inset-0 mx-4 sm:mx-6">
          <FlickeringGrid
            text={
              isTablet
                ? siteConfig.brand.footerGridTextMobile
                : siteConfig.brand.footerGridTextDesktop
            }
            fontSize={isMobile ? 56 : isTablet ? 68 : 90}
            className="h-full w-full"
            squareSize={2}
            gridGap={isTablet ? 2 : 3}
            color="var(--muted-foreground)"
            maxOpacity={0.3}
            flickerChance={0.1}
          />
        </div>
      </div>
    </footer>
  );
}
