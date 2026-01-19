import type { LoaderFunctionArgs } from "react-router";

const SITE_URL = "https://dhanrajpimple.vercel.app";

export async function loader(_args: LoaderFunctionArgs) {
  const urls = [
    { loc: SITE_URL, changefreq: "daily", priority: "1.0" },
    { loc: `${SITE_URL}/about`, changefreq: "monthly", priority: "0.8" },
    { loc: `${SITE_URL}/contact`, changefreq: "monthly", priority: "0.9" },
    { loc: `${SITE_URL}/portfolio`, changefreq: "weekly", priority: "0.9" },
    { loc: `${SITE_URL}/blog`, changefreq: "weekly", priority: "0.8" },
    { loc: `${SITE_URL}/services`, changefreq: "monthly", priority: "0.8" },
    { loc: `${SITE_URL}/services/devops`, changefreq: "monthly", priority: "0.9" },
    { loc: `${SITE_URL}/services/software`, changefreq: "monthly", priority: "0.9" },
    { loc: `${SITE_URL}/services/website`, changefreq: "monthly", priority: "0.9" },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
      .map(
        (url) => `  <url>
    <loc>${url.loc}</loc>
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


