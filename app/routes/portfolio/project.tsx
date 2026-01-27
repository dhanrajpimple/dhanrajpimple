import { useParams, NavLink, type MetaFunction } from "react-router";
import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import {
    ArrowLeft, ExternalLink, Github, CheckCircle2, Server, Layout, Cpu,
    TrendingUp, Clock, Building2, Target, Quote, ArrowRight, ChevronLeft,
    ChevronRight
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

export const meta: MetaFunction = ({ params }) => {
    const project = projects.find(p => p.id === params.id);
    const title = project ? `${project.title} | Case Study | Dhanraj Pimple` : "Project Not Found";
    const description = project
        ? `${project.clientName} struggled with ${project.problemStatement.slice(0, 100)}... See how I delivered ${project.roiMetrics[0]?.improvement} improvement.`
        : "Project not found.";
    const keywords = project
        ? `${project.title}, ${project.category}, ${project.techStack.join(", ")}, Case Study, ROI, ${project.clientIndustry}`
        : "DevOps Project, Full Stack Case Study";

    return [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: keywords },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
    ];
};

// Before/After Slider Component
const BeforeAfterSlider = ({
    before,
    after,
    caption
}: {
    before: string;
    after: string;
    caption: string;
}) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPosition(percentage);
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging) handleMove(e.clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        handleMove(e.touches[0].clientX);
    };

    useEffect(() => {
        const handleGlobalMouseUp = () => setIsDragging(false);
        window.addEventListener('mouseup', handleGlobalMouseUp);
        return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
    }, []);

    return (
        <div className="space-y-4">
            <div
                ref={containerRef}
                className="relative w-full aspect-video rounded-2xl overflow-hidden cursor-ew-resize select-none"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
            >
                {/* After Image (Background) */}
                <img
                    src={after}
                    alt="After"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Before Image (Clipped) */}
                <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${sliderPosition}%` }}
                >
                    <img
                        src={before}
                        alt="Before"
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ width: `${100 / (sliderPosition / 100)}%`, maxWidth: 'none' }}
                    />
                </div>

                {/* Slider Handle */}
                <div
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10"
                    style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                        <ChevronLeft className="text-brand-navy" size={18} />
                        <ChevronRight className="text-brand-navy" size={18} />
                    </div>
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-brand-coral/90 backdrop-blur-sm text-white text-xs font-bold rounded-lg">
                    BEFORE
                </div>
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-brand-green/90 backdrop-blur-sm text-white text-xs font-bold rounded-lg">
                    AFTER
                </div>
            </div>
            <p className="text-center text-sm text-brand-gray italic">{caption}</p>
        </div>
    );
};

// ROI Metric Card
const ROIMetricCard = ({
    metric,
    before,
    after,
    improvement,
    index
}: {
    metric: string;
    before: string;
    after: string;
    improvement: string;
    index: number;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        viewport={{ once: true }}
        className="glass p-6 rounded-2xl text-center relative overflow-hidden group hover:border-brand-blue/30 transition-colors"
    >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-coral via-brand-blue to-brand-green" />
        <h4 className="text-sm font-bold text-brand-gray uppercase tracking-wider mb-4">{metric}</h4>
        <div className="grid grid-cols-3 gap-2 items-center">
            <div>
                <div className="text-sm text-brand-gray mb-1">Before</div>
                <div className="text-lg font-bold text-brand-coral">{before}</div>
            </div>
            <div className="flex flex-col items-center">
                <ArrowRight className="text-brand-blue" size={20} />
            </div>
            <div>
                <div className="text-sm text-brand-gray mb-1">After</div>
                <div className="text-lg font-bold text-brand-green">{after}</div>
            </div>
        </div>
        <div className="mt-4 pt-4 border-t border-white/10">
            <span className="text-xl font-bold text-brand-blue">{improvement}</span>
        </div>
    </motion.div>
);

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
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/70 to-transparent" />
                <div className="absolute inset-0 container mx-auto px-6 flex flex-col justify-end pb-12">
                    <NavLink to="/portfolio" className="flex items-center gap-2 text-brand-offwhite/60 hover:text-brand-blue transition-colors mb-6 text-sm font-bold">
                        <ArrowLeft size={16} /> Back to Portfolio
                    </NavLink>
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="text-brand-blue font-bold uppercase tracking-widest text-sm">{project.category}</span>
                        <span className="text-brand-gray">•</span>
                        <span className="text-brand-gray text-sm">{project.projectDuration}</span>
                        <span className="text-brand-gray">•</span>
                        <span className="text-brand-gray text-sm">{project.yearCompleted}</span>
                    </div>
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
                {/* ROI Summary Banner */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass p-8 rounded-3xl mb-16 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl" />
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-xl bg-brand-blue/20">
                                <Building2 className="text-brand-blue" size={24} />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold">{project.clientName}</h2>
                                <span className="text-sm text-brand-gray">{project.clientIndustry}</span>
                            </div>
                        </div>

                        {/* Problem/Solution Summary */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <Target className="text-brand-coral" size={18} />
                                    <h3 className="font-bold text-brand-coral">The Challenge</h3>
                                </div>
                                <p className="text-brand-gray leading-relaxed">{project.problemStatement}</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <TrendingUp className="text-brand-green" size={18} />
                                    <h3 className="font-bold text-brand-green">The Solution</h3>
                                </div>
                                <p className="text-brand-gray leading-relaxed">{project.solutionSummary}</p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* ROI Metrics Grid */}
                <section className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                            Measurable <span className="text-gradient">Results</span>
                        </h2>
                        <p className="text-brand-gray max-w-xl mx-auto">
                            Real numbers from a real project. Here's exactly what changed after implementation.
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {project.roiMetrics.map((metric, i) => (
                            <ROIMetricCard key={metric.metric} {...metric} index={i} />
                        ))}
                    </div>
                </section>

                {/* Before/After Visual */}
                {project.beforeAfterImages && (
                    <section className="mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-8"
                        >
                            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                                Before vs. After
                            </h2>
                            <p className="text-brand-gray">Drag the slider to see the transformation</p>
                        </motion.div>
                        <BeforeAfterSlider {...project.beforeAfterImages} />
                    </section>
                )}

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

                        {/* Testimonial */}
                        {project.testimonial && (
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="glass p-10 rounded-3xl relative"
                            >
                                <Quote className="absolute top-6 left-6 text-brand-blue/20" size={48} />
                                <div className="relative z-10">
                                    <p className="text-xl md:text-2xl font-display leading-relaxed mb-8 text-brand-offwhite">
                                        "{project.testimonial.quote}"
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-blue to-brand-green flex items-center justify-center text-brand-navy font-bold">
                                            {project.testimonial.author.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="font-bold">{project.testimonial.author}</div>
                                            <div className="text-sm text-brand-gray">{project.testimonial.role}</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.section>
                        )}
                    </div>

                    {/* Sidebar Info */}
                    <aside className="lg:col-span-1">
                        <div className="glass p-8 rounded-3xl sticky top-32 space-y-10">
                            <div>
                                <h3 className="font-bold mb-4 flex items-center gap-2 text-brand-blue">
                                    <Clock size={18} /> Project Timeline
                                </h3>
                                <p className="text-brand-gray">{project.projectDuration}</p>
                                <p className="text-sm text-brand-gray mt-1">Completed: {project.yearCompleted}</p>
                            </div>

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
                                <h4 className="font-bold text-sm mb-4">Want similar results?</h4>
                                <NavLink to="/scorecard" className="w-full py-4 bg-brand-blue text-brand-navy font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-brand-coral hover:text-white transition-all mb-3">
                                    Get Your Free Scorecard <ArrowRight size={18} />
                                </NavLink>
                                <NavLink to="/contact" className="w-full py-4 glass text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                                    Let's Discuss
                                </NavLink>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
