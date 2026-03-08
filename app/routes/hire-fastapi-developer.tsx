import { motion } from "framer-motion";
import { CheckCircle2, Zap, Server, Database, Shield, ArrowRight, Code2, Clock, Star } from "lucide-react";
import { NavLink, type MetaFunction } from "react-router";
import { buildPageMeta, SITE_AUTHOR, SITE_URL } from "~/lib/seo";

export const meta: MetaFunction = () => [
    ...buildPageMeta({
        title: "Hire FastAPI Developer India | Expert Python Backend Services - Dhanraj Pimple",
        description:
            "Hire an expert FastAPI developer in India for high-performance Python backend systems. REST APIs, async endpoints, PostgreSQL/Redis integration, JWT auth, and Dockerized deployments. Serving startups in Pune, Maharashtra & globally.",
        path: "/hire-fastapi-developer",
        keywords:
            "hire FastAPI developer, FastAPI developer India, Python backend developer India, FastAPI REST API, FastAPI PostgreSQL, FastAPI async, hire Python developer India, FastAPI Docker, backend developer India",
    }),
    {
        "script:ld+json": {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is FastAPI and why should I use it for my backend?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "FastAPI is a modern, high-performance Python web framework for building APIs. It is one of the fastest Python frameworks available, on par with NodeJS and Go, thanks to async/await support. It auto-generates OpenAPI documentation and offers built-in data validation, making it ideal for production SaaS backends.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How much does it cost to hire a FastAPI developer in India?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "FastAPI backend projects start at Rs. 9,999 for a basic REST API and scale based on scope—database integrations, authentication systems, third-party APIs, and deployment complexity. I provide fixed-price quotes after a free discovery call so there are no surprises.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can you build a FastAPI backend with database integration?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. I work with PostgreSQL (via SQLAlchemy or Tortoise ORM), MongoDB, Redis for caching, and Supabase. I design normalized schemas, set up migrations with Alembic, and ensure queries are optimized for production traffic.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Do you deploy FastAPI apps to AWS or other cloud providers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. I deploy FastAPI applications using Docker containers on AWS EC2, ECS, or Lambda (serverless). I also set up CI/CD pipelines with GitHub Actions for automated testing and deployment, and configure Nginx as a reverse proxy.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How long does it take to build a FastAPI backend?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "A basic CRUD API with authentication can be delivered in 1–2 weeks. Full-featured backends with payment integration, file uploads, background tasks, and WebSocket support typically take 3–6 weeks depending on scope.",
                    },
                },
            ],
        },
    },
    {
        "script:ld+json": {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "FastAPI Backend Development",
            provider: { "@type": "Person", name: SITE_AUTHOR, url: SITE_URL },
            serviceType: "Software Development",
            description:
                "High-performance FastAPI backend development for startups and SaaS platforms. REST APIs, async endpoints, database integration, auth systems, and cloud deployment.",
            areaServed: ["India", "Pune", "Satara", "Maharashtra"],
            offers: {
                "@type": "Offer",
                price: "9999",
                priceCurrency: "INR",
                description: "Starting price for FastAPI backend development",
            },
        },
    },
];

const highlights = [
    {
        icon: <Zap className="w-7 h-7 text-brand-blue" />,
        title: "High-Performance Async APIs",
        desc: "FastAPI's async/await model handles thousands of concurrent requests — perfect for SaaS, AI backends, and data-heavy applications.",
    },
    {
        icon: <Shield className="w-7 h-7 text-brand-blue" />,
        title: "Secure by Default",
        desc: "JWT authentication, OAuth2 flows, rate limiting, CORS configuration, and input validation handled from day one.",
    },
    {
        icon: <Database className="w-7 h-7 text-brand-blue" />,
        title: "Database Integration",
        desc: "PostgreSQL, MySQL, MongoDB, Redis, and Supabase — with proper ORM setup, migrations, and connection pooling.",
    },
    {
        icon: <Server className="w-7 h-7 text-brand-blue" />,
        title: "Production-Ready Deployment",
        desc: "Dockerized apps deployed on AWS EC2, ECS, or Railway — with CI/CD pipelines, health checks, and Nginx reverse proxy.",
    },
    {
        icon: <Code2 className="w-7 h-7 text-brand-blue" />,
        title: "Auto-Generated OpenAPI Docs",
        desc: "Every endpoint is automatically documented with Swagger UI and ReDoc, so your frontend team can integrate immediately.",
    },
    {
        icon: <Clock className="w-7 h-7 text-brand-blue" />,
        title: "Background Tasks & Queues",
        desc: "Celery, ARQ, or FastAPI's built-in BackgroundTasks for async email sending, file processing, and scheduled jobs.",
    },
];

const faqs = [
    {
        q: "What is FastAPI and why should I use it for my backend?",
        a: "FastAPI is a modern, high-performance Python web framework. It's one of the fastest frameworks available — on par with Node.js and Go — thanks to async/await support. It auto-generates API documentation and offers built-in data validation, making it ideal for production SaaS backends.",
    },
    {
        q: "How much does it cost to hire a FastAPI developer in India?",
        a: "FastAPI backend projects start at Rs. 9,999 for a basic REST API. Full-featured backends with auth, payments, and deployment typically range from Rs. 25,000–60,000 based on scope. I provide a fixed-price quote after a free discovery call.",
    },
    {
        q: "Can you build a FastAPI backend with PostgreSQL or MongoDB?",
        a: "Yes. I integrate PostgreSQL (SQLAlchemy/Tortoise ORM), MongoDB (Motor), Redis for caching, and Supabase. I design normalized schemas, set up Alembic migrations, and optimize queries for production traffic.",
    },
    {
        q: "Do you deploy FastAPI apps to AWS or other cloud providers?",
        a: "Yes. I deploy FastAPI applications using Docker on AWS EC2, ECS, or Lambda. I set up CI/CD pipelines with GitHub Actions and configure Nginx as a reverse proxy with SSL.",
    },
    {
        q: "How long does it take to build a FastAPI backend?",
        a: "A basic CRUD API with auth takes 1–2 weeks. Full-featured backends with payments, file uploads, background tasks, and WebSocket support typically take 3–6 weeks.",
    },
];

export default function HireFastapiDeveloper() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container mx-auto px-6 py-16 space-y-24 max-w-6xl"
        >
            {/* Hero */}
            <section className="relative">
                <div className="bg-grid absolute inset-0 opacity-10 pointer-events-none" />
                <div className="glass p-10 md:p-16 rounded-3xl relative overflow-hidden border border-brand-blue/20">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-blue/20 text-brand-blue mb-6">
                        <Code2 size={16} />
                        <span className="text-xs font-bold uppercase tracking-wider">FastAPI Specialist · Python Backend</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                        Hire an Expert <span className="text-gradient">FastAPI Developer</span> in India
                    </h1>
                    <p className="text-lg text-brand-gray mb-4 max-w-3xl leading-relaxed">
                        Build blazing-fast, scalable Python backends with a dedicated FastAPI developer in India. I design and ship
                        production-grade REST APIs, async microservices, AI-integrated backends, and SaaS platforms — with Dockerized
                        deployment and full documentation.
                    </p>
                    <p className="text-base text-brand-gray/90 mb-10 max-w-3xl leading-relaxed">
                        Whether you need a FastAPI backend integrated with PostgreSQL, a real-time AI SaaS API, or a complete
                        backend-to-deployment setup on AWS, I deliver clean, maintainable, production-ready Python code.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <NavLink
                            to="/contact"
                            className="px-8 py-4 bg-brand-blue text-brand-navy font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-brand-coral hover:text-white transition-all shadow-xl shadow-brand-blue/20"
                        >
                            Start Your FastAPI Project <ArrowRight size={20} />
                        </NavLink>
                        <NavLink
                            to="/portfolio"
                            className="px-8 py-4 glass border border-white/10 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                        >
                            View Backend Projects
                        </NavLink>
                    </div>
                </div>
            </section>

            {/* What You Get */}
            <section>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
                    What You Get with a FastAPI Backend
                </h2>
                <p className="text-brand-gray text-center max-w-2xl mx-auto mb-12">
                    Every FastAPI project I deliver is async-first, schema-validated, documented, and ready for production traffic from day one.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {highlights.map((h, i) => (
                        <motion.div
                            key={h.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.07 }}
                            viewport={{ once: true }}
                            className="glass p-8 rounded-3xl border border-white/5 hover:border-brand-blue/30 transition-all"
                        >
                            <div className="mb-5">{h.icon}</div>
                            <h3 className="text-xl font-bold mb-3">{h.title}</h3>
                            <p className="text-brand-gray text-sm leading-relaxed">{h.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Tech Stack */}
            <section className="glass p-10 rounded-3xl border border-white/5">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">FastAPI Tech Stack</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            label: "Backend",
                            items: ["FastAPI", "Pydantic v2", "SQLAlchemy", "Alembic", "Celery", "ARQ"],
                        },
                        {
                            label: "Databases",
                            items: ["PostgreSQL", "MySQL", "MongoDB (Motor)", "Redis", "Supabase"],
                        },
                        {
                            label: "Deployment",
                            items: ["Docker", "AWS EC2 / ECS", "Nginx", "GitHub Actions", "Railway", "Uvicorn / Gunicorn"],
                        },
                    ].map((group) => (
                        <div key={group.label}>
                            <h3 className="text-brand-blue font-bold uppercase text-xs tracking-widest mb-4">{group.label}</h3>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-4 py-2 glass rounded-full text-xs font-bold text-brand-offwhite border border-white/10"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* What I Offer */}
            <section>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-10">FastAPI Development Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { title: "REST API Design & Development", desc: "CRUD endpoints, versioning, OpenAPI docs, proper HTTP status codes, and request/response schemas with Pydantic." },
                        { title: "Authentication & Authorization", desc: "JWT tokens, OAuth2 password/PKCE flows, role-based access control, refresh token rotation, and social login integration." },
                        { title: "Database Integration & ORM Setup", desc: "SQLAlchemy async sessions, Alembic migrations, connection pooling, and query optimization for production scale." },
                        { title: "AI / LLM Backend Integration", desc: "FastAPI as the backbone for AI SaaS platforms — integrating OpenAI, Gemini, LangChain, vector databases (Qdrant, Pinecone), and RAG pipelines." },
                        { title: "Background Tasks & Job Queues", desc: "Celery with Redis broker, ARQ for async queues, schedules with Cron, and real-time WebSocket endpoints." },
                        { title: "Docker & Cloud Deployment", desc: "Multi-stage Dockerfiles, CI/CD with GitHub Actions, AWS ECS or EC2 deployment, Nginx reverse proxy, and SSL setup." },
                    ].map((item) => (
                        <div key={item.title} className="flex gap-4 p-6 bg-white/5 rounded-2xl border border-white/5">
                            <CheckCircle2 className="text-brand-green shrink-0 mt-1" size={20} />
                            <div>
                                <h3 className="font-bold mb-2 text-brand-offwhite">{item.title}</h3>
                                <p className="text-xs text-brand-gray leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Trust signals */}
            <section className="glass p-10 rounded-3xl border border-brand-blue/20 text-center">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
                    Why Hire Me as Your FastAPI Developer?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    {[
                        { stat: "10+", label: "Production APIs Shipped" },
                        { stat: "5★", label: "Client Satisfaction Rating" },
                        { stat: "1–6 wks", label: "Typical Delivery Timeline" },
                    ].map((s) => (
                        <div key={s.label} className="text-center">
                            <div className="text-4xl font-bold text-brand-blue mb-2">{s.stat}</div>
                            <div className="text-brand-gray text-sm">{s.label}</div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {["Direct communication — no agency", "Fixed-price quotes", "Code delivery on GitHub", "Post-launch support included"].map((t) => (
                        <span key={t} className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm border border-white/10">
                            <Star size={14} className="text-brand-blue" /> {t}
                        </span>
                    ))}
                </div>
                <NavLink
                    to="/contact"
                    className="px-10 py-4 bg-brand-blue text-brand-navy font-bold rounded-xl inline-flex items-center gap-2 hover:bg-brand-coral hover:text-white transition-all shadow-xl shadow-brand-blue/20"
                >
                    Book a Free Discovery Call <ArrowRight size={20} />
                </NavLink>
            </section>

            {/* FAQ */}
            <section>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-center">
                    Frequently Asked Questions — FastAPI Development
                </h2>
                <div className="space-y-6 max-w-3xl mx-auto">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.06 }}
                            viewport={{ once: true }}
                            className="glass p-8 rounded-2xl border border-white/5"
                        >
                            <p className="font-bold text-brand-offwhite mb-3">{faq.q}</p>
                            <p className="text-brand-gray text-sm leading-relaxed">{faq.a}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Internal links */}
            <section className="border-t border-white/5 pt-12">
                <h2 className="text-xl font-bold mb-6">Related Services</h2>
                <div className="flex flex-wrap gap-4">
                    <NavLink to="/hire-devops-engineer" className="px-6 py-3 glass rounded-xl text-sm font-bold hover:border-brand-blue/40 border border-white/10 transition-all">Hire DevOps Engineer →</NavLink>
                    <NavLink to="/hire-nextjs-developer" className="px-6 py-3 glass rounded-xl text-sm font-bold hover:border-brand-blue/40 border border-white/10 transition-all">Hire Next.js Developer →</NavLink>
                    <NavLink to="/ai-saas-development" className="px-6 py-3 glass rounded-xl text-sm font-bold hover:border-brand-blue/40 border border-white/10 transition-all">AI SaaS Development →</NavLink>
                    <NavLink to="/backend-api-development" className="px-6 py-3 glass rounded-xl text-sm font-bold hover:border-brand-blue/40 border border-white/10 transition-all">Backend API Development →</NavLink>
                    <NavLink to="/services/devops" className="px-6 py-3 glass rounded-xl text-sm font-bold hover:border-brand-blue/40 border border-white/10 transition-all">DevOps Services →</NavLink>
                    <NavLink to="/blog" className="px-6 py-3 glass rounded-xl text-sm font-bold hover:border-brand-blue/40 border border-white/10 transition-all">Read Backend Dev Blog →</NavLink>
                </div>
            </section>
        </motion.main>
    );
}
