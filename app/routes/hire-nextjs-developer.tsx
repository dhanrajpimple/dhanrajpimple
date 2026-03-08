import { motion } from "framer-motion";
import { CheckCircle2, Globe, Zap, Code2, ArrowRight, Star, Cpu } from "lucide-react";
import { NavLink, type MetaFunction } from "react-router";
import { buildPageMeta, SITE_AUTHOR, SITE_URL } from "~/lib/seo";

export const meta: MetaFunction = () => [
    ...buildPageMeta({
        title: "Hire Next.js Developer India | Expert React & Full-Stack Web Development - Dhanraj Pimple",
        description:
            "Hire an expert Next.js developer in India for high-performance web apps, SaaS platforms, and SEO-optimized websites. App Router, Server Components, Vercel deployment, and API routes. Serving startups in Pune, Maharashtra & globally.",
        path: "/hire-nextjs-developer",
        keywords:
            "hire Next.js developer, Next.js developer India, React developer India, Next.js App Router, Next.js SaaS developer, hire frontend developer India, Next.js Vercel deployment, full-stack Next.js developer",
    }),
    {
        "script:ld+json": {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Next.js Web Development",
            provider: { "@type": "Person", name: SITE_AUTHOR, url: SITE_URL },
            serviceType: "Web Development",
            description: "Next.js App Router development, SaaS platforms, SEO-optimized websites, and full-stack applications with API routes and Vercel deployment.",
            areaServed: ["India", "Pune", "Satara", "Maharashtra"],
            offers: { "@type": "Offer", price: "9999", priceCurrency: "INR" },
        },
    },
    {
        "script:ld+json": {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is Next.js and why should I use it for my web app?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Next.js is a React framework that provides server-side rendering (SSR), static site generation (SSG), and the App Router with React Server Components. It is the go-to choice for SEO-optimized marketing sites, SaaS dashboards, and full-stack web applications deployed on Vercel or AWS.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can you build a full-stack SaaS app with Next.js?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. I build full-stack SaaS applications with Next.js App Router for the frontend, API routes or a separate FastAPI/Node.js backend, Supabase or PostgreSQL for the database, Stripe for payments, and Clerk or NextAuth for authentication.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Do you use the Next.js App Router or Pages Router?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "I primarily use the Next.js 14/15 App Router with React Server Components, Server Actions, and streaming. This provides better performance, SEO, and developer experience compared to the legacy Pages Router.",
                    },
                },
            ],
        },
    },
];

const highlights = [
    { icon: <Globe className="w-7 h-7 text-brand-blue" />, title: "App Router & Server Components", desc: "Next.js 14/15 App Router with React Server Components for lightning-fast page loads, SEO-friendly SSR, and efficient data fetching." },
    { icon: <Zap className="w-7 h-7 text-brand-blue" />, title: "Core Web Vitals Optimization", desc: "LCP, CLS, and FID optimized websites that score 90+ on Google PageSpeed — improving both user experience and search rankings." },
    { icon: <Cpu className="w-7 h-7 text-brand-blue" />, title: "Full-Stack SaaS Platforms", desc: "Complete SaaS applications with API routes, Stripe integration, authentication (Clerk/NextAuth), and Supabase or PostgreSQL." },
    { icon: <Code2 className="w-7 h-7 text-brand-blue" />, title: "SEO-Optimized Architecture", desc: "Metadata API, Open Graph, structured data, sitemaps, and canonical tags built into every Next.js project by default." },
];

const faqs = [
    { q: "What is Next.js and why should I use it for my web app?", a: "Next.js is a React framework with SSR, SSG, and App Router with React Server Components — the gold standard for SEO-optimized SaaS platforms and marketing sites deployed on Vercel." },
    { q: "Can you build a full-stack SaaS app with Next.js?", a: "Yes. Full-stack SaaS with Next.js App Router, API routes or FastAPI backend, Supabase/PostgreSQL, Stripe for payments, and Clerk or NextAuth for authentication." },
    { q: "Do you use the Next.js App Router?", a: "I primarily use Next.js 14/15 App Router with React Server Components, Server Actions, and streaming for better performance and SEO." },
    { q: "How much does it cost to hire a Next.js developer in India?", a: "Next.js projects start at Rs. 9,999 for landing pages and Rs. 25,000+ for full-stack SaaS platforms. I provide fixed-price quotes after a free discovery call." },
    { q: "Can you migrate my existing React app to Next.js?", a: "Yes. I migrate React CRA or Vite apps to Next.js App Router, adding SSR, improved SEO, and better performance — typically in 1–2 weeks." },
];

export default function HireNextjsDeveloper() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container mx-auto px-6 py-16 space-y-24 max-w-6xl"
        >
            <section className="relative">
                <div className="glass p-10 md:p-16 rounded-3xl relative overflow-hidden border border-brand-blue/20">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-blue/20 text-brand-blue mb-6">
                        <Globe size={16} />
                        <span className="text-xs font-bold uppercase tracking-wider">Next.js · React · Full-Stack</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                        Hire an Expert <span className="text-gradient">Next.js Developer</span> in India
                    </h1>
                    <p className="text-lg text-brand-gray mb-4 max-w-3xl leading-relaxed">
                        Build SEO-optimized, high-performance web applications with a dedicated Next.js developer in India. I deliver
                        SaaS platforms, marketing websites, and full-stack Next.js apps with App Router, Server Components, Stripe, and
                        Vercel deployment — ready to rank on Google and convert visitors into customers.
                    </p>
                    <p className="text-base text-brand-gray/90 mb-10 max-w-3xl">
                        Whether you need a Next.js SaaS MVP, a landing page that scores 95+ on PageSpeed, or a React app migration to
                        the App Router, I execute with direct communication and fixed-price delivery from Satara, Maharashtra.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <NavLink to="/contact" className="px-8 py-4 bg-brand-blue text-brand-navy font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-brand-coral hover:text-white transition-all shadow-xl shadow-brand-blue/20">
                            Start Your Next.js Project <ArrowRight size={20} />
                        </NavLink>
                        <NavLink to="/portfolio" className="px-8 py-4 glass border border-white/10 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                            View Web Projects
                        </NavLink>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">Next.js Development Services</h2>
                <p className="text-brand-gray text-center max-w-2xl mx-auto mb-12">
                    From performance-optimized marketing sites to full-stack SaaS platforms with payments and auth.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {highlights.map((h, i) => (
                        <motion.div key={h.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }} viewport={{ once: true }}
                            className="glass p-8 rounded-3xl border border-white/5 hover:border-brand-blue/30 transition-all flex gap-6">
                            <div className="mt-1 shrink-0">{h.icon}</div>
                            <div>
                                <h3 className="text-xl font-bold mb-3">{h.title}</h3>
                                <p className="text-brand-gray text-sm leading-relaxed">{h.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="glass p-10 rounded-3xl border border-white/5">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">Next.js Tech Stack</h2>
                <div className="flex flex-wrap justify-center gap-3">
                    {["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Prisma", "Stripe", "Clerk", "NextAuth", "Vercel", "Framer Motion", "Zod", "tRPC"].map((t) => (
                        <span key={t} className="px-4 py-2 glass rounded-full text-xs font-bold text-brand-offwhite border border-white/10">{t}</span>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-10">What I Deliver</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { title: "SaaS Platform Development", desc: "Full-stack SaaS MVP with dashboard, authentication, Stripe subscriptions, multi-tenant support, and admin panel." },
                        { title: "Landing Page & Marketing Site", desc: "Blazing-fast, SEO-optimized landing pages with 95+ PageSpeed scores, structured data, and conversion-focused copy." },
                        { title: "API Routes & Server Actions", desc: "Next.js API routes and Server Actions for full-stack functionality without a separate backend server." },
                        { title: "React App to Next.js Migration", desc: "Migrate CRA or Vite React apps to Next.js App Router with SSR, improved SEO, and better performance." },
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

            <section className="glass p-10 rounded-3xl border border-brand-blue/20 text-center">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Why Hire Me as Your Next.js Developer?</h2>
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {["App Router & Server Components expert", "95+ PageSpeed scores", "SEO-first architecture", "Fixed-price delivery", "Direct communication"].map((t) => (
                        <span key={t} className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm border border-white/10">
                            <Star size={14} className="text-brand-blue" /> {t}
                        </span>
                    ))}
                </div>
                <NavLink to="/contact" className="px-10 py-4 bg-brand-blue text-brand-navy font-bold rounded-xl inline-flex items-center gap-2 hover:bg-brand-coral hover:text-white transition-all shadow-xl shadow-brand-blue/20">
                    Book a Free Consultation <ArrowRight size={20} />
                </NavLink>
            </section>

            <section>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-center">Frequently Asked Questions — Next.js Development</h2>
                <div className="space-y-6 max-w-3xl mx-auto">
                    {faqs.map((faq, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} viewport={{ once: true }}
                            className="glass p-8 rounded-2xl border border-white/5">
                            <p className="font-bold text-brand-offwhite mb-3">{faq.q}</p>
                            <p className="text-brand-gray text-sm leading-relaxed">{faq.a}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="border-t border-white/5 pt-12">
                <h2 className="text-xl font-bold mb-6">Related Services</h2>
                <div className="flex flex-wrap gap-4">
                    <NavLink to="/hire-fastapi-developer" className="px-6 py-3 glass rounded-xl text-sm font-bold hover:border-brand-blue/40 border border-white/10 transition-all">Hire FastAPI Developer →</NavLink>
                    <NavLink to="/ai-saas-development" className="px-6 py-3 glass rounded-xl text-sm font-bold hover:border-brand-blue/40 border border-white/10 transition-all">AI SaaS Development →</NavLink>
                    <NavLink to="/services/website" className="px-6 py-3 glass rounded-xl text-sm font-bold hover:border-brand-blue/40 border border-white/10 transition-all">Web Development Services →</NavLink>
                    <NavLink to="/contact" className="px-6 py-3 glass rounded-xl text-sm font-bold hover:border-brand-blue/40 border border-white/10 transition-all">Hire Me →</NavLink>
                </div>
            </section>
        </motion.main>
    );
}
