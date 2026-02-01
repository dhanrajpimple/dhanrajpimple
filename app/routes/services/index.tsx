import { motion } from "framer-motion";
import { Layers, Code2, Globe, CheckCircle2 } from "lucide-react";
import { NavLink, type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
    return [
        { title: "Hire Freelance Website & Mobile App Developer | DevOps & AI Services India" },
        { name: "description", content: "I want to build a website for my business? Hire freelance website developer and mobile app developer for small business. Custom mobile app development, AI chatbot for business, DevOps automation, and end-to-end tech solutions. Remote developer for hire in India." },
        { name: "keywords", content: "freelance website developer, mobile app developer for business, hire website developer, affordable website design for business, custom mobile app development, build AI chatbot for website, devops engineer for hire, website developer in India, mobile app developer India, automation developer freelancer, hire full stack developer, website development for startup, business automation services, end to end tech development, startup technology partner" },
    ];
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
            description: "Custom mobile app development for Android and iOS. Hire mobile app developer for business—affordable app development, scalable apps, and startup-ready solutions.",
            href: "/services/software",
            icon: <Code2 className="text-brand-blue" size={32} />,
            features: ["Android & iOS Apps", "API Development", "Microservices", "App Maintenance"]
        },
        {
            title: "AI Chatbot & Automation",
            description: "Build AI chatbot for website and WhatsApp. Business automation services, workflow automation for small business, and automate business processes with AI tools.",
            href: "/services/devops",
            icon: <Layers className="text-brand-blue" size={32} />,
            features: ["AI Chatbot Development", "Business Process Automation", "CI/CD Pipelines", "Cloud Deployment"]
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
