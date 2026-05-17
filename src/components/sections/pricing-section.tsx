"use client";

import { SectionHeader } from "@/components/section-header";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function PricingSection() {
  const tier = siteConfig.pricing.pricingItems[0];

  return (
    <section
      id="pricing"
      className="relative flex w-full flex-col items-center justify-center gap-10 pb-10"
    >
      <SectionHeader>
        <h2 className="text-balance text-center text-3xl font-medium tracking-tighter md:text-4xl">
          {siteConfig.pricing.title}
        </h2>
        <p className="text-balance text-center font-medium text-muted-foreground">
          {siteConfig.pricing.description}
        </p>
      </SectionHeader>

      <div className="mx-auto w-full max-w-md px-6">
        <div
          className={cn(
            "relative grid h-fit grid-rows-[auto_auto_1fr] rounded-xl",
            "bg-accent md:shadow-[0px_61px_24px_-10px_rgba(0,0,0,0.01),0px_34px_20px_-8px_rgba(0,0,0,0.05),0px_15px_15px_-6px_rgba(0,0,0,0.09),0px_4px_8px_-2px_rgba(0,0,0,0.10),0px_0px_0px_1px_rgba(0,0,0,0.08)]",
          )}
        >
          <div className="flex flex-col gap-4 p-4">
            <p className="text-sm">
              {tier.name}
              {tier.isPopular && (
                <span className="ml-2 inline-flex h-6 w-fit items-center justify-center rounded-full bg-primary px-2 text-sm text-primary-foreground">
                  {siteConfig.pricing.popularBadge}
                </span>
              )}
            </p>
            <div className="mt-2 flex items-baseline">
              <span className="text-4xl font-semibold">{tier.price}</span>
              <span className="ml-2">{siteConfig.pricing.periodSuffix}</span>
            </div>
            <p className="mt-2 text-sm">{tier.description}</p>
          </div>

          <div className="flex flex-col gap-2 p-4">
            <Link
              href={tier.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex h-10 w-full cursor-pointer items-center justify-center rounded-lg px-4 text-sm font-normal tracking-wide transition-all ease-out active:scale-95",
                tier.buttonColor,
                "shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)]",
              )}
            >
              {tier.buttonText}
            </Link>
          </div>

          <hr className="border-border" />

          <div className="p-4">
            <ul className="space-y-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <div className="flex size-5 items-center justify-center rounded-full border border-border bg-muted-foreground/40">
                    <div className="flex size-3 items-center justify-center">
                      <svg
                        width="8"
                        height="7"
                        viewBox="0 0 8 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden
                      >
                        <path
                          d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                          stroke="#101828"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

