import type { LoaderFunctionArgs } from "react-router";
import { SITE_URL } from "~/lib/seo";

export async function loader(_args: LoaderFunctionArgs) {
  const urls = [
    { loc: SITE_URL, changefreq: "weekly", priority: "1.0" },
    { loc: `${SITE_URL}/about`, changefreq: "monthly", priority: "0.7" },
    { loc: `${SITE_URL}/services`, changefreq: "weekly", priority: "0.8" },
    { loc: `${SITE_URL}/services/devops`, changefreq: "weekly", priority: "0.8" },
    { loc: `${SITE_URL}/services/software`, changefreq: "weekly", priority: "0.8" },
    { loc: `${SITE_URL}/services/website`, changefreq: "weekly", priority: "0.8" },
    { loc: `${SITE_URL}/portfolio`, changefreq: "weekly", priority: "0.7" },
    { loc: `${SITE_URL}/pricing`, changefreq: "monthly", priority: "0.7" },
    { loc: `${SITE_URL}/resources`, changefreq: "weekly", priority: "0.6" },
    { loc: `${SITE_URL}/blog`, changefreq: "weekly", priority: "0.7" },
    { loc: `${SITE_URL}/contact`, changefreq: "monthly", priority: "0.9" },

    // High-Intent Service Pages (priority 0.9)
    { loc: `${SITE_URL}/hire-fastapi-developer`, changefreq: "monthly", priority: "0.9" },
    { loc: `${SITE_URL}/hire-devops-engineer`, changefreq: "monthly", priority: "0.9" },
    { loc: `${SITE_URL}/hire-nextjs-developer`, changefreq: "monthly", priority: "0.9" },
    { loc: `${SITE_URL}/ai-saas-development`, changefreq: "monthly", priority: "0.9" },
    { loc: `${SITE_URL}/backend-api-development`, changefreq: "monthly", priority: "0.9" },
    { loc: `${SITE_URL}/ci-cd-pipeline-expert`, changefreq: "monthly", priority: "0.9" },
    { loc: `${SITE_URL}/cloud-infrastructure-engineer`, changefreq: "monthly", priority: "0.9" },

    // Local SEO Landing Pages (priority 0.8)
    { loc: `${SITE_URL}/freelance-developer-pune`, changefreq: "monthly", priority: "0.8" },
    { loc: `${SITE_URL}/web-developer-satara`, changefreq: "monthly", priority: "0.8" },
    { loc: `${SITE_URL}/software-developer-kolhapur`, changefreq: "monthly", priority: "0.8" },
    { loc: `${SITE_URL}/devops-engineer-india`, changefreq: "monthly", priority: "0.8" },
  ];

  const today = new Date().toISOString().split("T")[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
      .map(
        (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${today}</lastmod>
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
