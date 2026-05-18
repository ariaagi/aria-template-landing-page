import { siteCopy } from "@/content/site-copy";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

const showcaseTransition =
  "transition-[opacity,transform,filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

/** Matches layout guide rails (`left-6` / `right-6` in root layout). */
const CONTENT_RAIL_CLASS = "mx-6";

export function CompanyShowcase() {
  const { items } = siteConfig.companyShowcase;

  return (
    <section
      id="company"
      className="relative flex w-full flex-col justify-center gap-8 py-10 pt-16 sm:gap-10 sm:pt-20"
    >
      <p
        className={cn(
          "max-w-md text-center text-sm font-medium leading-snug text-balance text-muted-foreground sm:max-w-lg sm:text-base",
          CONTENT_RAIL_CLASS,
        )}
      >
        {siteCopy.companyShowcase.label}
      </p>
      <div
        className={cn(
          CONTENT_RAIL_CLASS,
          "grid grid-cols-3 gap-px bg-border p-px lg:grid-cols-6",
        )}
      >
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="group relative flex min-h-[4.5rem] items-center justify-center bg-background p-2 sm:min-h-24 sm:p-3 lg:min-h-28 lg:p-4"
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
