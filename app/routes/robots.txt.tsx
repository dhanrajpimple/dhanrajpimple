import type { LoaderFunctionArgs } from "react-router";
import { SITE_URL } from "~/lib/seo";

export async function loader(_args: LoaderFunctionArgs) {
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${SITE_URL}/sitemap.xml`,
  ].join("\n");

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}


