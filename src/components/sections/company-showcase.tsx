import { siteCopy } from "@/content/site-copy";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

const showcaseTransition =
  "transition-[opacity,transform,filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

/** Matches layout guide rails (`left-6` / `right-6` in root layout). */
const CONTENT_RAIL_CLASS = "mx-6";

const MOBILE_COLUMNS = 3;
const DESKTOP_COLUMNS = 6;

export function CompanyShowcase() {
  const { items } = siteConfig.companyShowcase;
  const mobileRowCount = Math.ceil(items.length / MOBILE_COLUMNS);

  return (
    <section
      id="company"
      className="relative z-20 flex w-full flex-col items-center gap-6 border-t-0 bg-background py-10 pt-16 sm:gap-8 sm:pt-20"
    >
      <div className={cn(CONTENT_RAIL_CLASS, "flex w-full justify-center")}>
        <p className="max-w-md text-center text-sm font-medium leading-snug text-balance text-muted-foreground sm:max-w-lg sm:text-base">
          {siteCopy.companyShowcase.label}
        </p>
      </div>
      <div
        className={cn(
          CONTENT_RAIL_CLASS,
          "w-full overflow-hidden border border-border",
        )}
      >
        <div className="grid grid-cols-3 lg:grid-cols-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            const mobileColumn = index % MOBILE_COLUMNS;
            const mobileRow = Math.floor(index / MOBILE_COLUMNS);
            const isLastMobileColumn = mobileColumn === MOBILE_COLUMNS - 1;
            const isLastMobileRow = mobileRow === mobileRowCount - 1;
            const isLastDesktopColumn =
              (index + 1) % DESKTOP_COLUMNS === 0;

            return (
              <div
                key={item.id}
                className={cn(
                  "group relative flex min-h-[4.5rem] items-center justify-center border-border bg-background p-2 sm:min-h-24 sm:p-3 lg:min-h-28 lg:p-4",
                  "border-r border-b",
                  isLastMobileColumn && "border-r-0",
                  isLastMobileRow && "border-b-0",
                  "lg:border-b-0",
                  isLastDesktopColumn && "lg:border-r-0",
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
      </div>
    </section>
  );
}
