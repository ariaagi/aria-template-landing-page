import { siteCopy } from "@/content/site-copy";

export const siteConfig = {
  name: siteCopy.meta.siteName,
  url:
    process.env.NEXT_PUBLIC_APP_URL ||
    siteCopy.links.site ||
    "http://localhost:3000",
  description: siteCopy.meta.description,
  templateDescription: siteCopy.meta.templateDescription,
  links: {
    twitter: siteCopy.links.twitterMetadata,
    github: siteCopy.links.githubMetadata,
  },
};

export type SiteConfig = typeof siteConfig;
