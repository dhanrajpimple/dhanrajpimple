import { motion } from "framer-motion";
import { Layers, Code2, Globe, CheckCircle2 } from "lucide-react";
import { NavLink } from "react-router";

export default function ServicesIndex() {
    const categories = [
        {
            title: "DevOps Automation",
            description: "Streamline your deployment pipeline and infrastructure with industry-standard patterns.",
            href: "/services/devops",
            icon: <Layers className="text-brand-blue" size={32} />,
            features: ["CI/CD Optimization", "Infrastructure as Code", "K8s Orchestration", "Cloud Migration"]
        },
        {
            title: "Software Development",
            description: "Build scalable backends and intelligent platforms with a focus on performance and security.",
            href: "/services/software",
            icon: <Code2 className="text-brand-blue" size={32} />,
            features: ["SaaS Architecture", "AI Integration", "API Development", "Microservices"]
        },
        {
            title: "Web Development",
            description: "Create stunning, high-performance websites that rank well and convert users.",
            href: "/services/website",
            icon: <Globe className="text-brand-blue" size={32} />,
            features: ["Remix/Next.js Expert", "SEO Optimization", "Responsive Design", "Headless CMS"]
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
