import { siteConfig } from "@/lib/config";

export function QuoteSection() {
  const { quoteSection } = siteConfig;

  return (
    <section
      id="quote"
      className="relative z-20 flex w-full flex-col items-center justify-center bg-accent px-6 py-12 sm:px-10 sm:py-16 md:py-20"
    >
      <figure className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 text-center">
        <blockquote className="w-full">
          <p
            className="text-pretty text-xl font-medium leading-relaxed tracking-tight text-primary sm:text-2xl sm:leading-relaxed md:text-3xl md:leading-snug"
            aria-label="Product quote"
          >
            <span className="text-primary/30" aria-hidden>
              &ldquo;
            </span>
            {quoteSection.quote}
            <span className="text-primary/30" aria-hidden>
              &rdquo;
            </span>
          </p>
        </blockquote>
      </figure>
    </section>
  );
}
