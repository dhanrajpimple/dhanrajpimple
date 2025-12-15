import type { LoaderFunctionArgs } from "react-router";

const SITE_URL = "https://dhanrajpimple.vercel.app";

export async function loader(_args: LoaderFunctionArgs) {
  const urls = [
    {
      loc: SITE_URL,
      changefreq: "weekly",
      priority: "1.0",
    },
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


