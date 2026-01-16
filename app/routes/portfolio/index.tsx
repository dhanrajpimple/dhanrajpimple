import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../data/projects";
import { ArrowRight, ExternalLink, Github, Filter } from "lucide-react";
import { NavLink, type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
    return [
        { title: "Portfolio | Dhanraj Pimple | DevOps & Software Projects" },
        { name: "description", content: "Explore a curated selection of DevOps automation pipelines, SaaS platforms, and AI-driven applications built by Dhanraj Pimple." },
    ];
};

export default function PortfolioIndex() {
    const [filter, setFilter] = useState("All");
    const categories = ["All", "DevOps", "AI", "SaaS", "Full Stack Dev", "Web Dev"];

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.category.includes(filter) || p.tags.includes(filter));

    return (
        <main className="pt-20 pb-32">
            <div className="container mx-auto px-6">
                <header className="mb-20 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-display font-bold mb-6"
                    >
                        Proof of <span className="text-gradient">Performance</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-brand-gray max-w-2xl mx-auto"
                    >
                        A curated selection of systems I've architected, from automated pipelines to AI-driven products.
                    </motion.p>
                </header>

                {/* Filter Bar */}
                <div className="flex flex-wrap justify-center gap-2 mb-16">
                    <div className="flex items-center gap-2 mr-4 text-brand-gray text-sm">
                        <Filter size={16} /> Filter by:
                    </div>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full text-xs font-bold transition-all border ${filter === cat
                                ? "bg-brand-blue text-brand-navy border-brand-blue shadow-lg shadow-brand-blue/20"
                                : "glass border-white/5 text-brand-gray hover:border-brand-blue/30"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-10"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group glass rounded-3xl overflow-hidden hover:border-brand-blue/30 transition-all cursor-pointer"
                            >
                                <div className="aspect-video relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                        <NavLink
                                            to={`/portfolio/${project.id}`}
                                            className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-brand-navy hover:scale-110 transition-transform"
                                        >
                                            <ArrowRight size={24} />
                                        </NavLink>
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">{project.category}</span>
                                        <div className="flex gap-4">
                                            {project.github && <a href={project.github} className="text-brand-gray hover:text-white transition-colors"><Github size={18} /></a>}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                    <p className="text-sm text-brand-gray mb-6 leading-relaxed line-clamp-2">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.slice(0, 4).map(tech => (
                                            <span key={tech} className="px-3 py-1 bg-white/5 rounded-lg text-[10px] text-brand-gray border border-white/5">{tech}</span>
                                        ))}
                                        {project.techStack.length > 4 && <span className="text-[10px] text-brand-gray self-center">+{project.techStack.length - 4} more</span>}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </main>
    );
}
