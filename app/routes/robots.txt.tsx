import type { LoaderFunctionArgs } from "react-router";

const SITE_URL = "https://dhanrajpimple.vercel.app";

export async function loader(_args: LoaderFunctionArgs) {
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    "Sitemap: https://dhanrajpimple.vercel.app/sitemap.xml",
    "Host: dhanrajpimple.vercel.app",
    "",
    "# SEO-focused notes:",
    "# Primary target: best freelance software developer, hire freelance web developer, AI chatbot freelancer, full-stack freelancer in Satara, Pune, Kolhapur, Sangli, Maharashtra, India.",
  ].join("\n");

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}


