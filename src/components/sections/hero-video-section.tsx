import { siteConfig } from "@/lib/config";
import { heroVisualRadialGradientClass } from "@/lib/hero-styles";

export function HeroVideoSection() {
  const { phrase, alt } = siteConfig.hero.visual;

  return (
    <div className="relative mt-10 px-6">
      <div
        role="img"
        aria-label={alt}
        className={`relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl p-6 sm:p-10 ${heroVisualRadialGradientClass}`}
      >
        <p className="max-w-lg text-balance text-center text-2xl font-semibold tracking-tight text-primary sm:text-3xl md:text-4xl">
          {phrase}
        </p>
      </div>
    </div>
  );
}
