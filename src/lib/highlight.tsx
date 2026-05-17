import { cn } from "@/lib/utils";

export function Highlight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("p-1 py-0.5 font-semibold text-black", className)}>
      {children}
    </span>
  );
}
