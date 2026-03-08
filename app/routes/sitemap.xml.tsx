import type { LoaderFunctionArgs } from "react-router";
import { SITE_URL } from "~/lib/seo";

export async function loader(_args: LoaderFunctionArgs) {
  const urls = [
    { loc: SITE_URL, changefreq: "weekly", priority: "1.0" },
    { loc: `${SITE_URL}/about`, changefreq: "weekly", priority: "0.7" },
    { loc: `${SITE_URL}/services`, changefreq: "weekly", priority: "0.8" },
    { loc: `${SITE_URL}/services/devops`, changefreq: "weekly", priority: "0.8" },
    { loc: `${SITE_URL}/services/software`, changefreq: "weekly", priority: "0.8" },
    { loc: `${SITE_URL}/services/website`, changefreq: "weekly", priority: "0.8" },
    { loc: `${SITE_URL}/portfolio`, changefreq: "weekly", priority: "0.7" },
    { loc: `${SITE_URL}/pricing`, changefreq: "weekly", priority: "0.7" },
    { loc: `${SITE_URL}/resources`, changefreq: "weekly", priority: "0.7" },
    { loc: `${SITE_URL}/blog`, changefreq: "weekly", priority: "0.6" },
    { loc: `${SITE_URL}/contact`, changefreq: "weekly", priority: "0.7" },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
      .map(
        (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>2026-03-08</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
      )
      .join("\n")}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}


