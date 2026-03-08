import { motion } from "framer-motion";
import { CheckCircle2, Bot, Brain, ArrowRight, Star, Zap, Code2 } from "lucide-react";
import { NavLink, type MetaFunction } from "react-router";
import { buildPageMeta, SITE_AUTHOR, SITE_URL } from "~/lib/seo";

export const meta: MetaFunction = () => [
    ...buildPageMeta({
        title: "AI SaaS Development India | Build AI-Powered SaaS Products - Dhanraj Pimple",
        description:
            "AI SaaS development services in India. Build LLM-powered SaaS products with LangChain, OpenAI, FastAPI backends, Next.js dashboards, vector databases, and RAG pipelines. Expert AI SaaS developer for startups.",
        path: "/ai-saas-development",
        keywords:
            "AI SaaS developer India, build AI SaaS product, LangChain developer India, OpenAI integration developer, AI agent SaaS, RAG pipeline developer, LLM SaaS development, GPT SaaS builder India",
    }),
    {
        "script:ld+json": {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "AI SaaS Development",
            provider: { "@type": "Person", name: SITE_AUTHOR, url: SITE_URL },
            serviceType: "AI Software Development",
            description: "End-to-end AI SaaS development: LLM integration, LangChain agents, RAG pipelines, vector databases, FastAPI backends, and Next.js dashboards.",
            areaServed: ["India", "Pune", "Satara", "Maharashtra", "Global"],
        },
    },
    {
        "script:ld+json": {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is AI SaaS development?",
                    acceptedAnswer: { "@type": "Answer", text: "AI SaaS development involves building software-as-a-service products powered by AI/LLM capabilities — such as document Q&A systems, AI writing assistants, customer support chatbots, automation workflows, and intelligent analytics dashboards." },
                },
                {
                    "@type": "Question",
                    name: "Which AI models and frameworks do you work with?",
                    acceptedAnswer: { "@type": "Answer", text: "I work with OpenAI (GPT-4o, o3), Anthropic Claude, Google Gemini, and open-source models via HuggingFace. For orchestration I use LangChain and CrewAI. For vector storage: Qdrant, Pinecone, or pgVector." },
                },
                {
                    "@type": "Question",
                    name: "How long does it take to build an AI SaaS product?",
                    acceptedAnswer: { "@type": "Answer", text: "A focused AI SaaS MVP (core feature + auth + payments) typically takes 4–8 weeks. More complex products with multi-agent workflows, fine-tuning, and enterprise integrations take 2–4 months." },
                },
            ],
        },
    },
];

const highlights = [
    { icon: <Brain className="w-7 h-7 text-brand-blue" />, title: "LLM Integration (OpenAI, Gemini, Claude)", desc: "Integrate GPT-4o, Claude 3.5, or Gemini into your product as an AI writing assistant, chat agent, code reviewer, or data extractor." },
    { icon: <Bot className="w-7 h-7 text-brand-blue" />, title: "LangChain & CrewAI Agents", desc: "Multi-step AI agents for research automation, lead qualification, document processing, and agentic workflows with tool use." },
    { icon: <Zap className="w-7 h-7 text-brand-blue" />, title: "RAG Pipeline Development", desc: "Retrieval-Augmented Generation pipelines for document Q&A, knowledge bases, and context-aware chatbots using Qdrant/Pinecone." },
    { icon: <Code2 className="w-7 h-7 text-brand-blue" />, title: "FastAPI + Next.js Full Stack", desc: "FastAPI async backend for AI processing and streaming, Next.js dashboard with real-time UI, Stripe billing, and user auth." },
];

const faqs = [
    { q: "What is AI SaaS development?", a: "Building SaaS products with AI capabilities — document Q&A, AI writing assistants, support chatbots, automation workflows, and intelligent analytics." },
    { q: "Which AI models and frameworks do you work with?", a: "OpenAI (GPT-4o), Anthropic Claude, Google Gemini, and HuggingFace open-source models. For orchestration: LangChain, CrewAI. Vector storage: Qdrant, Pinecone, pgVector." },
    { q: "How long does it take to build an AI SaaS MVP?", a: "A focused AI SaaS MVP (core AI feature + auth + payments) typically takes 4–8 weeks. Complex multi-agent platforms take 2–4 months." },
    { q: "How much does AI SaaS development cost in India?", a: "AI SaaS projects start at Rs. 25,000 for a focused AI integration. Full SaaS platforms with billing, auth, and multi-agent workflows range from Rs. 60,000–2,00,000 based on scope." },
    { q: "Can you help with vector databases and RAG pipelines?", a: "Yes. I design and implement RAG pipelines with chunking strategies, embedding models (OpenAI/Cohere), and vector stores (Qdrant, Pinecone, pgVector) for accurate, context-aware retrieval." },
];

export default function AiSaasDevelopment() {
    return (
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container mx-auto px-6 py-16 space-y-24 max-w-6xl">
            <section className="glass p-10 md:p-16 rounded-3xl relative overflow-hidden border border-brand-blue/20">
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-blue/20 text-brand-blue mb-6">
                    <Brain size={16} />
                    <span className="text-xs font-bold uppercase tracking-wider">AI SaaS · LLM · LangChain · RAG</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                    AI SaaS Development <span className="text-gradient">for Ambitious Founders</span>
                </h1>
                <p className="text-lg text-brand-gray mb-4 max-w-3xl leading-relaxed">
                    Build AI-powered SaaS products that give your users superpowers. From LLM-integrated document Q&A platforms and
                    AI writing assistants to multi-agent automation systems — I design, build, and ship AI SaaS products using
                    FastAPI, Next.js, LangChain, and OpenAI/Gemini APIs.
                </p>
                <p className="text-base text-brand-gray/90 mb-10 max-w-3xl">
                    As an AI SaaS developer in India, I work with early-stage founders and growth-stage startups who need a technical
                    co-founder-level partner to turn their AI product idea into a deployable, Stripe-billed, production-ready SaaS.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <NavLink to="/contact" className="px-8 py-4 bg-brand-blue text-brand-navy font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-brand-coral hover:text-white transition-all shadow-xl shadow-brand-blue/20">
                        Discuss Your AI SaaS Idea <ArrowRight size={20} />
                    </NavLink>
                    <NavLink to="/portfolio" className="px-8 py-4 glass border border-white/10 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                        View AI Projects
                    </NavLink>
                </div>
            </section>

            <section>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">AI SaaS Development Capabilities</h2>
                <p className="text-brand-gray text-center max-w-2xl mx-auto mb-12">LangChain · CrewAI · OpenAI · RAG Pipelines · Vector Databases · FastAPI · Next.js</p>
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

            <section>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-10">What I Build for AI SaaS Founders</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { title: "Document Q&A & Knowledge Bases", desc: "Upload PDFs, CSVs, or website content — users ask questions, AI answers accurately with source citations using RAG pipelines." },
                        { title: "AI Writing & Content Tools", desc: "GPT-powered writing assistants, SEO content generators, email drafters, and code documentation tools." },
                        { title: "Multi-Agent Automation Systems", desc: "CrewAI and LangChain agents that research, scrape, summarize, and execute multi-step business workflows autonomously." },
                        { title: "AI-Powered Chatbots & Copilots", desc: "Customer support chatbots with CRM integration, sales copilots with product knowledge, and internal Q&A assistants." },
                        { title: "Data Analysis & Business Intelligence", desc: "Natural language querying of databases, automated report generation, and AI-driven data insights for non-technical users." },
                        { title: "SaaS Billing & User Management", desc: "Stripe subscriptions, usage-based billing, Clerk/NextAuth user management, team workspaces, and role-based access." },
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
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Build Your AI SaaS Product with Me</h2>
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {["Technical co-founder mindset", "Startup-friendly pricing", "From idea to deployed MVP", "OpenAI / LangChain / RAG expert", "Direct communication"].map((t) => (
                        <span key={t} className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm border border-white/10">
                            <Star size={14} className="text-brand-blue" /> {t}
                        </span>
                    ))}
                </div>
                <NavLink to="/contact" className="px-10 py-4 bg-brand-blue text-brand-navy font-bold rounded-xl inline-flex items-center gap-2 hover:bg-brand-coral hover:text-white transition-all shadow-xl shadow-brand-blue/20">
                    Discuss Your AI SaaS Vision <ArrowRight size={20} />
                </NavLink>
            </section>

            <section>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-center">Frequently Asked Questions — AI SaaS Development</h2>
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
                    <NavLink to="/hire-nextjs-developer" className="px-6 py-3 glass rounded-xl text-sm font-bold hover:border-brand-blue/40 border border-white/10 transition-all">Hire Next.js Developer →</NavLink>
                    <NavLink to="/backend-api-development" className="px-6 py-3 glass rounded-xl text-sm font-bold hover:border-brand-blue/40 border border-white/10 transition-all">Backend API Development →</NavLink>
                    <NavLink to="/services/software" className="px-6 py-3 glass rounded-xl text-sm font-bold hover:border-brand-blue/40 border border-white/10 transition-all">Software Development Services →</NavLink>
                </div>
            </section>
        </motion.main>
    );
}
