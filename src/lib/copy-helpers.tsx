import type { siteCopy } from "@/content/site-copy";
import { Highlight } from "@/lib/highlight";

type UseCaseCopyItem = (typeof siteCopy.useCasesSection.items)[number];

export function buildUseCaseDescription(item: UseCaseCopyItem) {
  return (
    <p>
      {item.bodyBefore}
      <Highlight>{item.highlight}</Highlight>
    </p>
  );
}
