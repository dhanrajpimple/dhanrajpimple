import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("services", "routes/services/layout.tsx", [
        index("routes/services/index.tsx"),
        route("devops", "routes/services/devops.tsx"),
        route("software", "routes/services/software.tsx"),
        route("website", "routes/services/website.tsx"),
    ]),
    route("portfolio", "routes/portfolio/index.tsx"),
    route("portfolio/:id", "routes/portfolio/project.tsx"),
    route("blog", "routes/blog/index.tsx"),
    route("blog/:id", "routes/blog/post.tsx"),
    route("contact", "routes/contact.tsx"),
    route("privacy", "routes/privacy.tsx"),
    route("terms", "routes/terms.tsx"),
    route("resources", "routes/resources/index.tsx"),
    route("scorecard", "routes/scorecard/index.tsx"),
    route("pricing", "routes/pricing.tsx"),
    route("api/contact", "routes/api.contact.tsx"),

    // ── High-Intent Service Pages ──────────────────────────
    route("hire-fastapi-developer", "routes/hire-fastapi-developer.tsx"),
    route("hire-devops-engineer", "routes/hire-devops-engineer.tsx"),
    route("hire-nextjs-developer", "routes/hire-nextjs-developer.tsx"),
    route("ai-saas-development", "routes/ai-saas-development.tsx"),
    route("backend-api-development", "routes/backend-api-development.tsx"),
    route("ci-cd-pipeline-expert", "routes/ci-cd-pipeline-expert.tsx"),
    route("cloud-infrastructure-engineer", "routes/cloud-infrastructure-engineer.tsx"),

    // ── Local SEO Landing Pages ────────────────────────────
    route("freelance-developer-pune", "routes/freelance-developer-pune.tsx"),
    route("web-developer-satara", "routes/web-developer-satara.tsx"),
    route("software-developer-kolhapur", "routes/software-developer-kolhapur.tsx"),
    route("devops-engineer-india", "routes/devops-engineer-india.tsx"),
] satisfies RouteConfig;
