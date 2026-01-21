import { motion } from "framer-motion";
import { CheckCircle2, Code2, Database, Cpu, Layout, ArrowRight } from "lucide-react";
import { NavLink, type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
    return [
        { title: "AI & Software Developer Satara | LLM Integration Pune" },
        { name: "description", content: "Custom AI software development, mobile apps, and LLM automation. Freelance software architect specializing in AI-SaaS and intelligent products for global clients." },
        { name: "keywords", content: "Software Developer Satara, LLM Integration Pune, AI SaaS Developer Maharashtra, AI Automation Expert India, Backend Architect Kolhapur, SaaS Development Satara, OpenAI Developer" },
    ];
};

export default function SoftwareService() {
    const highlights = [
        { title: "SaaS Platforms", desc: "Building scalable, multi-tenant software as a service from the ground up.", icon: <Layout className="text-brand-blue" /> },
        { title: "AI-Driven Solutions", desc: "Integrating LLMs and automation into your business workflows.", icon: <Cpu className="text-brand-blue" /> },
        { title: "Robust Backends", desc: "High-performance APIs and microservices built for heavy traffic.", icon: <Database className="text-brand-blue" /> }
    ];

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-16">
            <div className="glass p-10 md:p-16 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Custom Solutions Built for <span className="text-brand-blue">Your Business</span></h2>
                <p className="text-lg text-brand-gray mb-10 max-w-2xl leading-relaxed">
                    I architecture and build specialized digital products that solve complex business problems using the latest production-grade technologies.
                </p>
                <NavLink to="/contact" className="px-8 py-4 bg-brand-blue text-brand-navy font-bold rounded-xl inline-flex items-center gap-2 hover:bg-brand-coral hover:text-white transition-all">
                    Build Your Product <ArrowRight size={20} />
                </NavLink>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {highlights.map(h => (
                    <div key={h.title} className="glass p-8 rounded-2xl border border-white/5">
                        <div className="mb-6">{h.icon}</div>
                        <h3 className="text-xl font-bold mb-4">{h.title}</h3>
                        <p className="text-sm text-brand-gray leading-relaxed">{h.desc}</p>
                    </div>
                ))}
            </div>

            <div className="space-y-12">
                <h3 className="text-2xl md:text-3xl font-display font-bold">What I Offer</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex gap-4 p-6 bg-white/5 rounded-2xl">
                        <CheckCircle2 className="text-brand-green shrink-0" />
                        <div>
                            <h4 className="font-bold mb-2 text-brand-offwhite">Full-Stack SaaS</h4>
                            <p className="text-xs text-brand-gray">End-to-end development of web applications using React, Remix, and Node.js.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-6 bg-white/5 rounded-2xl">
                        <CheckCircle2 className="text-brand-green shrink-0" />
                        <div>
                            <h4 className="font-bold mb-2 text-brand-offwhite">AI & Automation Integrations</h4>
                            <p className="text-xs text-brand-gray">Expertise in OpenAI API, ElevenLabs, Twilio, and n8n for intelligent workflows.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-6 bg-white/5 rounded-2xl">
                        <CheckCircle2 className="text-brand-green shrink-0" />
                        <div>
                            <h4 className="font-bold mb-2 text-brand-offwhite">API & Microservices</h4>
                            <p className="text-xs text-brand-gray">Scalable REST and GraphQL APIs using FastAPI, Node.js, and Express.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-6 bg-white/5 rounded-2xl">
                        <CheckCircle2 className="text-brand-green shrink-0" />
                        <div>
                            <h4 className="font-bold mb-2 text-brand-offwhite">Database Architecture</h4>
                            <p className="text-xs text-brand-gray">Optimized schema design with PostgreSQL, Supabase, and MongoDB.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/5 pt-16">
                <h3 className="text-2xl font-display font-bold mb-8 text-center">Tech Stack</h3>
                <div className="flex flex-wrap justify-center gap-6">
                    {["React", "Node.js", "FastAPI", "Python", "TypeScript", "PostgreSQL", "Supabase", "MongoDB", "n8n"].map(tech => (
                        <span key={tech} className="px-6 py-2 glass rounded-full text-xs font-bold text-brand-blue border-brand-blue/20 border">{tech}</span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
