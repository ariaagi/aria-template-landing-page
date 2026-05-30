import { siteCopy } from "@/content/site-copy";
import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";

const { meta } = siteCopy;
const metaKeywords = meta.metadataKeywords;
const seoKeywords = meta.keywords;

const showFooterSocial = Boolean(siteCopy.brand.showFooterSocial);
const twitterCreatorHandle = showFooterSocial
  ? meta.twitter.creator.replace(/^@/, "")
  : "";

function normalizePublicAssetPath(path: string): string {
  const trimmed = path.trim();
  if (!trimmed) return "";
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}

function mimeFromAssetPath(path: string): string | undefined {
  const lower = path.toLowerCase();
  if (lower.endsWith(".svg")) return "image/svg+xml";
  if (lower.endsWith(".png")) return "image/png";
  if (lower.endsWith(".webp")) return "image/webp";
  if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) return "image/jpeg";
  if (lower.endsWith(".gif")) return "image/gif";
  return undefined;
}

/** ARIA build sets `brand.hasLogo` + `brand.logoSrc` (e.g. `/header-logo.png`). */
const brandLogoPath =
  Boolean(siteCopy.brand.hasLogo) && siteCopy.brand.logoSrc.trim()
    ? normalizePublicAssetPath(siteCopy.brand.logoSrc)
    : "";
const brandLogoMime = brandLogoPath
  ? mimeFromAssetPath(brandLogoPath)
  : undefined;

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    seoKeywords.keyword1,
    seoKeywords.keyword2,
    seoKeywords.keyword3,
    seoKeywords.keyword4,
    metaKeywords.brand,
    metaKeywords.ai,
    metaKeywords.agent,
    metaKeywords.magicUi,
    metaKeywords.freelancer,
    metaKeywords.uiUx,
    metaKeywords.developer,
    metaKeywords.reactTemplate,
    metaKeywords.nextTemplate,
    metaKeywords.tailwind,
    metaKeywords.shadcn,
    metaKeywords.tailwindV4,
  ],
  authors: [
    {
      name: meta.author.name,
      url: meta.author.url,
    },
  ],
  ...(twitterCreatorHandle ? { creator: twitterCreatorHandle } : {}),
  ...(brandLogoPath
    ? {
        icons: {
          icon: brandLogoMime
            ? [{ url: brandLogoPath, type: brandLogoMime }]
            : brandLogoPath,
          apple: [
            {
              url: brandLogoPath,
              sizes: "180x180",
              ...(brandLogoMime ? { type: brandLogoMime } : {}),
            },
          ],
        },
      }
    : {}),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    ...(showFooterSocial && meta.twitter.creator.trim()
      ? { creator: meta.twitter.creator }
      : {}),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
