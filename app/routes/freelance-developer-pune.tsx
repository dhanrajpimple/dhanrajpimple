import { motion } from "framer-motion";
import { CheckCircle2, MapPin, ArrowRight, Star, Code2, Globe, Bot } from "lucide-react";
import { NavLink, type MetaFunction } from "react-router";
import { buildPageMeta, SITE_AUTHOR, SITE_URL } from "~/lib/seo";

export const meta: MetaFunction = () => [
    ...buildPageMeta({
        title: "Freelance Developer Pune | Full-Stack, AI & DevOps Engineer Maharashtra - Dhanraj Pimple",
        description:
            "Hire Dhanraj Pimple, a freelance full-stack developer and DevOps engineer serving Pune startups and businesses. Expert in AI SaaS, FastAPI, Next.js, CI/CD pipelines, and cloud infrastructure. Local developer near Pune, Maharashtra.",
        path: "/freelance-developer-pune",
        keywords:
            "freelance developer Pune, web developer Pune, AI developer Pune, DevOps engineer Pune, full-stack developer Pune, SaaS developer Pune, mobile app developer Pune, hire developer Pune, software developer Maharashtra",
    }),
    {
        "script:ld+json": {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Dhanraj Pimple - Freelance Developer",
            description: "Freelance full-stack developer and DevOps engineer serving Pune, Maharashtra with AI, web, mobile, and cloud development services.",
            url: SITE_URL,
            areaServed: [{ "@type": "City", name: "Pune", sameAs: "https://en.wikipedia.org/wiki/Pune" }, { "@type": "State", name: "Maharashtra" }],
            address: { "@type": "PostalAddress", addressLocality: "Satara", addressRegion: "Maharashtra", addressCountry: "IN" },
            provider: { "@type": "Person", name: SITE_AUTHOR },
            serviceType: ["Web Development", "AI Development", "DevOps", "Full-Stack Development", "Mobile App Development"],
        },
    },
    {
        "script:ld+json": {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
                { "@type": "Question", name: "Are you available for in-person meetings in Pune?", acceptedAnswer: { "@type": "Answer", text: "I am based in Satara, Maharashtra and am available for in-person meetings in Pune on prior scheduling. I also work fully remotely with async communication via Slack, WhatsApp, or email for all project updates." } },
                { "@type": "Question", name: "Do you work with Pune tech startups?", acceptedAnswer: { "@type": "Answer", text: "Yes. I work with funded and bootstrapped startups in Pune's thriving tech ecosystem. From SaaS MVPs and AI integrations to DevOps automation and mobile apps — I serve as a startup tech partner you can rely on for direct execution." } },
                { "@type": "Question", name: "What types of Pune businesses do you serve?", acceptedAnswer: { "@type": "Answer", text: "Pune IT startups, SaaS companies, e-commerce businesses, manufacturing firms needing digital tools, educational institutions, and marketing agencies looking for a reliable freelance developer to extend capacity." } },
            ],
        },
    },
];

const services = [
    { icon: <Globe className="w-6 h-6 text-brand-blue" />, title: "Web Development for Pune Businesses", desc: "Fast, SEO-optimized websites and landing pages for Pune startups, local businesses, and service companies that need high Google rankings.", href: "/services/website" },
    { icon: <Code2 className="w-6 h-6 text-brand-blue" />, title: "SaaS & Full-Stack Development", desc: "Full-stack SaaS platforms, admin dashboards, and APIs built for Pune tech companies and funded startups.", href: "/services/software" },
    { icon: <Bot className="w-6 h-6 text-brand-blue" />, title: "AI & Automation for Pune Teams", desc: "AI agents, LangChain workflows, chatbots, and business automation for Pune enterprises and IT companies.", href: "/ai-saas-development" },
];

const faqs = [
    { q: "Are you available for in-person meetings in Pune?", a: "I am based in Satara, Maharashtra and available for in-person meetings in Pune on prior scheduling. I also work fully remotely for all Pune clients." },
    { q: "Do you work with Pune tech startups?", a: "Yes. I work with funded and bootstrapped Pune startups — SaaS MVPs, AI integrations, DevOps automation, and mobile apps." },
    { q: "What types of Pune businesses do you serve?", a: "Pune IT startups, SaaS companies, e-commerce businesses, manufacturing firms, educational institutions, and marketing agencies." },
    { q: "Can you help a Pune startup build a technical MVP?", a: "Yes. I serve as a startup tech partner for Pune founders who need a developer to build their first MVP — web app, mobile app, or AI SaaS product — with direct communication and no agency overhead." },
    { q: "What is your response time for Pune clients?", a: "I respond within 2–4 hours during IST business hours (10 AM – 7 PM). For urgent Pune projects, I'm also available on WhatsApp." },
];

export default function FreelanceDeveloperPune() {
    return (
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container mx-auto px-6 py-16 space-y-24 max-w-6xl">
            <section className="glass p-10 md:p-16 rounded-3xl relative overflow-hidden border border-brand-blue/20">
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-blue/20 text-brand-blue mb-6">
                    <MapPin size={16} />
                    <span className="text-xs font-bold uppercase tracking-wider">Serving Pune · Maharashtra · India</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                    Freelance Developer <span className="text-gradient">in Pune</span> — Full-Stack, AI & DevOps
                </h1>
                <p className="text-lg text-brand-gray mb-4 max-w-3xl leading-relaxed">
                    Dhanraj Pimple is a freelance full-stack developer and DevOps engineer serving Pune startups, IT companies, and
                    local businesses. I deliver AI SaaS products, FastAPI backends, Next.js web apps, CI/CD pipelines, and cloud
                    infrastructure with direct communication and fixed-price delivery.
                </p>
                <p className="text-base text-brand-gray/90 mb-10 max-w-3xl">
                    If you're a Pune-based startup looking to build your MVP, an IT company that needs DevOps automation, or a local
                    business that needs a modern website — I am the freelance developer Pune teams hire for fast, quality execution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <NavLink to="/contact" className="px-8 py-4 bg-brand-blue text-brand-navy font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-brand-coral hover:text-white transition-all shadow-xl shadow-brand-blue/20">
                        Hire Me for Your Pune Project <ArrowRight size={20} />
                    </NavLink>
                    <NavLink to="/pricing" className="px-8 py-4 glass border border-white/10 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                        View Pricing
                    </NavLink>
                </div>
            </section>

            <section>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">Services for Pune Businesses & Startups</h2>
                <p className="text-brand-gray text-center max-w-2xl mx-auto mb-12">Web Development · AI SaaS · DevOps · Mobile Apps · Cloud Infrastructure</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }} viewport={{ once: true }}
                            className="glass p-8 rounded-3xl border border-white/5 hover:border-brand-blue/30 transition-all">
                            <div className="mb-5">{s.icon}</div>
                            <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                            <p className="text-brand-gray text-sm leading-relaxed mb-5">{s.desc}</p>
                            <NavLink to={s.href} className="inline-flex items-center gap-2 text-brand-blue font-bold text-sm hover:gap-3 transition-all">
                                Learn More <ArrowRight size={16} />
                            </NavLink>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="glass p-10 rounded-3xl border border-brand-blue/20 text-center">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Why Pune Startups & Businesses Hire Me</h2>
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {["Local developer — Pune accessible", "Direct WhatsApp communication", "No agency overhead", "Fixed-price quotes", "IST timezone alignment"].map((t) => (
                        <span key={t} className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm border border-white/10">
                            <Star size={14} className="text-brand-blue" /> {t}
                        </span>
                    ))}
                </div>
                <NavLink to="/contact" className="px-10 py-4 bg-brand-blue text-brand-navy font-bold rounded-xl inline-flex items-center gap-2 hover:bg-brand-coral hover:text-white transition-all shadow-xl shadow-brand-blue/20">
                    Start Your Pune Project <ArrowRight size={20} />
                </NavLink>
            </section>

            <section>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-center">FAQ — Freelance Developer Pune</h2>
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
                <h2 className="text-xl font-bold mb-6">Other Local Pages</h2>
                <div className="flex flex-wrap gap-4">
                    <NavLink to="/web-developer-satara" className="px-6 py-3 glass rounded-xl text-sm font-bold hover:border-brand-blue/40 border border-white/10 transition-all">Web Developer Satara →</NavLink>
                    <NavLink to="/software-developer-kolhapur" className="px-6 py-3 glass rounded-xl text-sm font-bold hover:border-brand-blue/40 border border-white/10 transition-all">Software Developer Kolhapur →</NavLink>
                    <NavLink to="/devops-engineer-india" className="px-6 py-3 glass rounded-xl text-sm font-bold hover:border-brand-blue/40 border border-white/10 transition-all">DevOps Engineer India →</NavLink>
                    <NavLink to="/contact" className="px-6 py-3 glass rounded-xl text-sm font-bold hover:border-brand-blue/40 border border-white/10 transition-all">Hire Me →</NavLink>
                </div>
            </section>
        </motion.main>
    );
}
