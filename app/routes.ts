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
] satisfies RouteConfig;
