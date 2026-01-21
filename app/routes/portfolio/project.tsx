import { useParams, NavLink, type MetaFunction } from "react-router";
import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Server, Layout, Cpu } from "lucide-react";

export const meta: MetaFunction = ({ params }) => {
    const project = projects.find(p => p.id === params.id);
    const title = project ? `${project.title} | Case Study | Dhanraj Pimple` : "Project Not Found";
    const description = project ? `${project.description} Built with ${project.techStack.join(", ")}.` : "Project not found.";
    const keywords = project ? `${project.title}, ${project.category}, ${project.techStack.join(", ")}, Dhanraj Pimple Portfolio` : "DevOps Project, Full Stack Case Study";

    return [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: keywords },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
    ];
};

export default function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    if (!project) return (
        <div className="pt-40 text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <NavLink to="/portfolio" className="text-brand-blue hover:underline">Back to Portfolio</NavLink>
        </div>
    );

    return (
        <main className="pb-32">
            {/* Hero Header */}
            <section className="relative h-[60vh] overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-brand-navy via-brand-navy/60 to-transparent" />
                <div className="absolute inset-0 container mx-auto px-6 flex flex-col justify-end pb-12">
                    <NavLink to="/portfolio" className="flex items-center gap-2 text-brand-offwhite/60 hover:text-brand-blue transition-colors mb-6 text-sm font-bold">
                        <ArrowLeft size={16} /> Back to Portfolio
                    </NavLink>
                    <span className="text-brand-blue font-bold uppercase tracking-widest text-sm mb-4">{project.category}</span>
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">{project.title}</h1>
                    <div className="flex flex-wrap gap-4">
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noreferrer" className="px-6 py-3 bg-brand-blue text-brand-navy font-bold rounded-xl flex items-center gap-2 hover:bg-brand-coral hover:text-white transition-all shadow-xl shadow-brand-blue/20">
                                Live Preview <ExternalLink size={18} />
                            </a>
                        )}
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noreferrer" className="px-6 py-3 glass rounded-xl flex items-center gap-2 hover:bg-white/10 transition-all font-bold">
                                Source Code <Github size={18} />
                            </a>
                        )}
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-6 mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-16">
                        <section>
                            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Overview</h2>
                            <p className="text-brand-gray text-lg leading-relaxed">{project.longDescription}</p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8">Key Features</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {project.features.map(feature => (
                                    <div key={feature} className="flex gap-4 p-6 bg-white/5 rounded-2xl border border-white/5">
                                        <CheckCircle2 className="text-brand-green shrink-0" size={20} />
                                        <span className="text-sm text-brand-offwhite/90 leading-relaxed">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Results & Impact</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {project.results.map((result, i) => (
                                    <div key={i} className="glass p-8 rounded-2xl text-center border border-white/5">
                                        <p className="text-sm text-brand-gray font-medium leading-relaxed">{result}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar Info */}
                    <aside className="lg:col-span-1">
                        <div className="glass p-8 rounded-3xl sticky top-32 space-y-10">
                            <div>
                                <h3 className="font-bold mb-6 flex items-center gap-2 text-brand-blue">
                                    <Cpu size={18} /> Tech Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="px-3 py-1.5 bg-white/5 rounded-lg text-xs text-brand-gray border border-white/10">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="font-bold mb-4 flex items-center gap-2 text-brand-blue">
                                    <Layout size={18} /> Role
                                </h3>
                                <p className="text-sm text-brand-gray">Lead Full Stack & DevOps Architect</p>
                            </div>

                            <div className="pt-6 border-t border-white/10">
                                <h4 className="font-bold text-sm mb-4">Interested in similar results?</h4>
                                <NavLink to="/contact" className="w-full py-4 bg-brand-blue text-brand-navy font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-brand-coral hover:text-white transition-all">
                                    Let's Discuss <ArrowLeft className="rotate-180" size={18} />
                                </NavLink>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
