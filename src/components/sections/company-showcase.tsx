import { siteCopy } from "@/content/site-copy";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

const showcaseTransition =
  "transition-[opacity,transform,filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

export function CompanyShowcase() {
  const { items } = siteConfig.companyShowcase;

  return (
    <section
      id="company"
      className="relative flex w-full flex-col items-center justify-center gap-8 px-4 py-10 pt-16 sm:gap-10 sm:px-6 sm:pt-20"
    >
      <p className="max-w-md px-1 text-center text-sm font-medium leading-snug text-balance text-muted-foreground sm:max-w-lg sm:px-2 sm:text-base">
        {siteCopy.companyShowcase.label}
      </p>
      <div className="z-20 grid w-full max-w-7xl grid-cols-3 divide-x divide-y divide-border border-y border-border lg:grid-cols-6 lg:divide-y-0">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className={cn(
                "group relative flex min-h-[4.5rem] items-center justify-center p-2 sm:min-h-24 sm:p-3 lg:min-h-28 lg:p-4",
                "lg:before:absolute lg:before:-left-px lg:before:top-0 lg:before:z-10 lg:before:h-full lg:before:w-px lg:before:bg-border lg:before:content-[''] lg:first:before:hidden",
              )}
            >
              <div className="grid size-full place-items-center">
                <Icon
                  aria-hidden
                  className={cn(
                    "col-start-1 row-start-1 size-6 text-foreground sm:size-8 lg:size-10",
                    showcaseTransition,
                    "group-hover:scale-90 group-hover:opacity-0 group-hover:blur-[3px]",
                  )}
                />
                <span className="sr-only">{item.name}</span>
                <p
                  className={cn(
                    "col-start-1 row-start-1 max-w-full scale-95 px-1 text-center text-[0.625rem] font-medium leading-snug text-foreground opacity-0 sm:max-w-[9rem] sm:px-2 sm:text-xs lg:max-w-[11rem] lg:text-sm",
                    showcaseTransition,
                    "group-hover:scale-100 group-hover:opacity-100",
                  )}
                >
                  {item.hoverText}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
