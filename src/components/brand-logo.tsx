import { Icons } from "@/components/icons";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import Image from "next/image";

type BrandLogoProps = {
  className?: string;
};

export function BrandLogo({ className }: BrandLogoProps) {
  const { brand } = siteConfig;

  if (!brand.hasLogo) {
    return null;
  }

  if (brand.logoSrc) {
    return (
      <Image
        src={brand.logoSrc}
        alt=""
        aria-hidden
        width={40}
        height={40}
        className={cn("size-7 shrink-0 object-contain md:size-9", className)}
      />
    );
  }

  return <Icons.logo className={cn("size-7 shrink-0 md:size-9", className)} />;
}
