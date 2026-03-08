import { motion } from "framer-motion";
import { Layers, Code2, Globe, CheckCircle2 } from "lucide-react";
import { NavLink, type MetaFunction } from "react-router";
import { buildPageMeta } from "~/lib/seo";

export const meta: MetaFunction = () => {
    return buildPageMeta({
        title: "Services | AI Agent, Web, Mobile, Desktop & DevOps Developer India",
        description: "Explore Dhanraj Pimple's services for AI agents, web apps, mobile apps, desktop software, SaaS systems, chatbot automation, DevOps, and cloud deployment for startups and businesses in India.",
        path: "/services",
    });
};

export default function ServicesIndex() {
    const categories = [
        {
            title: "Website Development for Business",
            description: "Professional freelance website developer for small business and startups. Affordable website design, static website developer, business website development service, and fast website development service.",
            href: "/services/website",
            icon: <Globe className="text-brand-blue" size={32} />,
            features: ["Responsive Design", "SEO Optimization", "Headless CMS", "Website Redesign Service"]
        },
        {
            title: "Mobile App Development",
            description: "Custom mobile app development for Android and iOS with startup-ready delivery, API integrations, and scalable product architecture.",
            href: "/services/software",
            icon: <Code2 className="text-brand-blue" size={32} />,
            features: ["Android & iOS Apps", "API Development", "Microservices", "App Maintenance"]
        },
        {
            title: "Desktop App Development",
            description: "Cross-platform desktop software for Windows, macOS, and Linux using Electron, Python, or Tauri for operations and internal tooling.",
            href: "/services/software",
            icon: <Code2 className="text-brand-blue" size={32} />,
            features: ["Windows Apps", "macOS Apps", "Linux Apps", "Offline Workflows"]
        },
        {
            title: "AI Agent Development",
            description: "Build agentic AI workflows and autonomous systems with LangChain, CrewAI, and AutoGen for research, support, and automation use cases.",
            href: "/services/software",
            icon: <Layers className="text-brand-blue" size={32} />,
            features: ["LangChain", "CrewAI", "AutoGen", "Workflow Orchestration"]
        },
        {
            title: "AI/ML Integration",
            description: "Integrate OpenAI, Gemini, and HuggingFace models into web apps, mobile products, copilots, and business automation workflows.",
            href: "/services/software",
            icon: <Code2 className="text-brand-blue" size={32} />,
            features: ["OpenAI", "Gemini", "HuggingFace", "Model Integration"]
        },
        {
            title: "Deployment & Cloud",
            description: "Production-ready deployments on AWS, GCP, and Vercel with Docker, Kubernetes, CI/CD, observability, and release automation.",
            href: "/services/devops",
            icon: <Layers className="text-brand-blue" size={32} />,
            features: ["AWS & GCP", "Docker", "Kubernetes", "Deployment Pipelines"]
        },
        {
            title: "AI Chatbot & Automation",
            description: "Build AI chatbot for websites and WhatsApp, automate support, and connect lead workflows with your backend systems.",
            href: "/services/software",
            icon: <Layers className="text-brand-blue" size={32} />,
            features: ["WhatsApp Chatbots", "Website Chatbots", "Automation Flows", "Lead Capture"]
        }
    ];

    return (
        <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categories.map((cat, i) => (
                    <motion.div
                        key={cat.title}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass p-10 rounded-3xl group h-full flex flex-col"
                    >
                        <div className="mb-6">{cat.icon}</div>
                        <h2 className="text-2xl font-bold mb-4">{cat.title}</h2>
                        <p className="text-brand-gray mb-8 flex-1">{cat.description}</p>
                        <ul className="space-y-3 mb-10">
                            {cat.features.map(f => (
                                <li key={f} className="flex items-center gap-2 text-sm text-brand-offwhite/80">
                                    <CheckCircle2 className="text-brand-green" size={16} />
                                    {f}
                                </li>
                            ))}
                        </ul>
                        <NavLink
                            to={cat.href}
                            className="w-full py-4 bg-white/5 rounded-xl text-center font-bold text-sm group-hover:bg-brand-blue group-hover:text-brand-navy transition-all"
                        >
                            Explore {cat.title}
                        </NavLink>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
