import type { MetaDescriptor } from "react-router";

import { REGIONAL_SEO_KEYWORDS_META_CONTENT } from "~/data/regionalSeoKeywords";

export const SITE_URL = "https://thedpagent.online";
export const SITE_NAME = "Dhanraj Pimple";
export const SITE_AUTHOR = "Dhanraj Pimple";
export const SITE_IMAGE = "https://github.com/dhanrajpimple.png";
export const SITE_LOCATION = "Satara, Maharashtra, India";
export const SITE_REGION = "IN-MH";
export const SITE_LANGUAGES = "en, mr, hi, gu";
export const SOCIAL_LINKS = [
  "https://www.linkedin.com/in/dhanraj-pimple-1b802a274/",
  "https://github.com/dhanrajpimple/",
  "https://x.com/DhanrajPimple16",
] as const;
export const SERVICE_AREAS = [
  "Satara",
  "Pune",
  "Kolhapur",
  "Sangli",
  "Solapur",
  "Mumbai",
  "Nashik",
  "Aurangabad",
  "India",
] as const;

type PageMetaOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string;
  type?: "website" | "article";
  robots?: string;
};

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

export function buildPageMeta({
  title,
  description,
  path,
  image = SITE_IMAGE,
  keywords = REGIONAL_SEO_KEYWORDS_META_CONTENT,
  type = "website",
  robots = "index, follow",
}: PageMetaOptions): MetaDescriptor[] {
  const url = absoluteUrl(path);

  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { name: "robots", content: robots },
    { name: "author", content: SITE_AUTHOR },
    { name: "geo.region", content: SITE_REGION },
    { name: "geo.placename", content: SITE_LOCATION },
    { name: "language", content: SITE_LANGUAGES },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:image", content: image },
    { property: "og:url", content: url },
    { property: "og:site_name", content: SITE_NAME },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
    { tagName: "link", rel: "canonical", href: url },
  ];
}
