import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

export interface UseCaseCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  category: string;
  description: React.ReactNode;
  className?: string;
}

export function UseCaseCard({
  description,
  title,
  category,
  className,
  ...props
}: UseCaseCardProps) {
  const categoryInitial = category.trim().charAt(0).toUpperCase();

  return (
    <div
      className={cn(
        "flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4 bg-accent",
        "shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_8px_12px_-4px_rgba(15,12,12,0.08),0px_1px_2px_0px_rgba(15,12,12,0.10)]",
        className,
      )}
      {...props}
    >
      <div className="w-full select-none text-primary/90 leading-relaxed font-normal">
        {description}
      </div>

      <div className="flex w-full select-none items-center justify-start gap-3.5">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-black text-xs font-medium text-white">
          {categoryInitial}
        </div>
        <div>
          <p className="text-sm font-medium leading-snug text-primary/90 sm:text-base">
            {title}
          </p>
          <p className="text-[11px] font-normal text-primary/50 sm:text-xs">
            {category}
          </p>
        </div>
      </div>
    </div>
  );
}

interface UseCase {
  id: string;
  title: string;
  category: string;
  description: React.ReactNode;
}

/** Max visual columns at xl — must match `xl:grid-cols-*` below. */
const USE_CASE_COLUMN_COUNT = 3;

export function UseCaseGrid({ items }: { items: UseCase[] }) {
  const perColumn = Math.ceil(items.length / USE_CASE_COLUMN_COUNT);

  return (
    <div className="h-full">
      <div className="px-10">
        <div className="relative max-h-[750px] overflow-hidden">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: USE_CASE_COLUMN_COUNT }, (_, i) => {
              const columnItems = items.slice(i * perColumn, (i + 1) * perColumn);
              if (columnItems.length === 0) return null;

              return (
                <Marquee
                  vertical
                  key={i}
                  className={cn({
                    "[--duration:60s]": i === 1,
                    "[--duration:30s]": i === 2,
                    "[--duration:70s]": i === 3,
                  })}
                >
                  {columnItems.map((card) => (
                    <UseCaseCard {...card} key={card.id} />
                  ))}
                </Marquee>
              );
            })}
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/6 w-full bg-gradient-to-t from-background from-20% md:h-1/5" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/6 w-full bg-gradient-to-b from-background from-20% md:h-1/5" />
        </div>
      </div>
    </div>
  );
}
