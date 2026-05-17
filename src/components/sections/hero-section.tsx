import { HeroVideoSection } from "@/components/sections/hero-video-section";
import { siteConfig } from "@/lib/config";
import { heroRadialGradientClass } from "@/lib/hero-styles";
import { RiArrowRightLine } from "@remixicon/react";
import Link from "next/link";

export function HeroSection() {
  const { hero } = siteConfig;

  return (
    <section id="hero" className="relative w-full">
      <div className="relative flex w-full flex-col items-center px-6">
        <div className="absolute inset-0">
          <div
            className={`absolute inset-0 -z-10 h-[600px] w-full rounded-b-xl md:h-[800px] ${heroRadialGradientClass}`}
          />
        </div>
        <div className="relative z-10 mx-auto flex h-full w-full max-w-3xl flex-col items-center justify-center gap-10 pt-32">
          <div className="inline-flex max-w-[min(100%,20rem)] items-center justify-center gap-2 rounded-full border border-border bg-accent px-3 py-1.5 text-center text-xs leading-snug sm:max-w-none sm:px-4 sm:py-2 sm:text-sm sm:leading-normal">
            <span className="flex shrink-0 items-center" aria-hidden>
              {hero.badgeIcon}
            </span>
            <span className="text-balance">{hero.badge}</span>
          </div>
          <div className="flex w-full max-w-2xl flex-col items-center justify-center gap-5 px-1 sm:px-0">
            <h1 className="text-balance text-center text-3xl font-medium tracking-tighter text-primary sm:text-4xl lg:text-5xl xl:text-6xl">
              {hero.title}
            </h1>
            <p className="text-pretty text-center text-[0.9375rem] font-medium leading-relaxed tracking-tight text-muted-foreground sm:text-base md:text-lg md:leading-relaxed">
              {hero.description}
            </p>
          </div>
          <Link
            href={hero.cta.primary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-fit items-center justify-center gap-2 rounded-lg bg-black px-4 text-sm font-medium text-white transition-colors hover:bg-black/90 active:scale-95"
          >
            {hero.cta.primary.text}
            <RiArrowRightLine className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
      <HeroVideoSection />
    </section>
  );
}
