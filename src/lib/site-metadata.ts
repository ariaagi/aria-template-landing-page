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
