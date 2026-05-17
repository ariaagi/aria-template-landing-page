import { SectionHeader } from "@/components/section-header";
import { UseCaseGrid } from "@/components/use-case-scroll";
import { siteConfig } from "@/lib/config";

export function UseCasesSection() {
  const { useCasesSection } = siteConfig;

  return (
    <section
      id="use-cases"
      className="flex w-full flex-col items-center justify-center"
    >
      <SectionHeader>
        <h2 className="text-balance text-center text-3xl font-medium tracking-tighter md:text-4xl">
          {useCasesSection.title}
        </h2>
        <p className="text-balance text-center font-medium text-muted-foreground">
          {useCasesSection.description}
        </p>
      </SectionHeader>
      <UseCaseGrid items={useCasesSection.items} />
    </section>
  );
}
