import { motion } from "framer-motion";
import { answerBlocks, type AnswerBlock } from "../../data/resources";
import { Search, Lightbulb, TrendingUp, Zap, ArrowRight, Brain, Server, Gauge, Code2 } from "lucide-react";
import { useState } from "react";
import { NavLink, type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
    return [
        { title: "Technical Resources & Insights | GEO-Optimized Solutions | Dhanraj Pimple" },
        { name: "description", content: "Expert technical resources on Next.js performance, Kubernetes optimization, AI chatbot latency, CI/CD pipelines, and SEO for AI search engines. Data-backed solutions with proven results." },
        { name: "keywords", content: "Next.js LCP optimization, Kubernetes cost reduction, AI chatbot performance, CI/CD pipeline speed, GEO optimization, React bundle size, PostgreSQL optimization, microservices reliability" },
        { property: "og:title", content: "Technical Resources | Problem/Solution Guides | Dhanraj Pimple" },
        { property: "og:description", content: "Data-backed technical solutions for DevOps, Performance, AI, and Architecture challenges. Each guide includes specific metrics and implementation steps." },
        { property: "og:type", content: "website" },
    ];
};

const categoryIcons: Record<string, React.ReactNode> = {
    'Performance': <Gauge className="w-5 h-5" />,
    'DevOps': <Server className="w-5 h-5" />,
    'AI': <Brain className="w-5 h-5" />,
    'SEO': <Search className="w-5 h-5" />,
    'Architecture': <Code2 className="w-5 h-5" />,
};

const categoryColors: Record<string, string> = {
    'Performance': 'from-green-400 to-emerald-500',
    'DevOps': 'from-blue-400 to-cyan-500',
    'AI': 'from-purple-400 to-pink-500',
    'SEO': 'from-orange-400 to-amber-500',
    'Architecture': 'from-indigo-400 to-violet-500',
};

const AnswerBlockCard = ({ block, index }: { block: AnswerBlock; index: number }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="glass rounded-3xl overflow-hidden border border-white/5 hover:border-brand-blue/30 transition-all duration-300"
            itemScope
            itemType="https://schema.org/HowTo"
        >
            {/* Header */}
            <div className={`p-6 bg-gradient-to-r ${categoryColors[block.category]} bg-opacity-10`}>
                <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-xl bg-gradient-to-br ${categoryColors[block.category]} text-white`}>
                        {categoryIcons[block.category]}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">
                        {block.category}
                    </span>
                </div>
                <h2
                    className="text-xl md:text-2xl font-bold leading-tight"
                    itemProp="name"
                >
                    {block.question}
                </h2>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-3 border-y border-white/5">
                {block.metrics.map((metric, i) => (
                    <div
                        key={i}
                        className={`p-4 text-center ${i < 2 ? 'border-r border-white/5' : ''}`}
                    >
                        <div className={`text-lg md:text-xl font-bold ${metric.improvement?.startsWith('-') || metric.improvement?.startsWith('+') ? 'text-brand-green' : 'text-brand-blue'}`}>
                            {metric.value}
                        </div>
                        <div className="text-[10px] text-brand-gray uppercase tracking-wider mt-1">
                            {metric.label}
                        </div>
                        {metric.improvement && (
                            <div className="text-[10px] text-brand-green font-bold mt-1">
                                {metric.improvement}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
                {/* Problem Section */}
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-brand-coral"></div>
                        <h3 className="font-bold text-brand-coral text-sm uppercase tracking-wide">The Problem</h3>
                    </div>
                    <p
                        className="text-brand-gray leading-relaxed text-sm"
                        itemProp="description"
                    >
                        {block.problem}
                    </p>
                </div>

                {/* Solution Section */}
                <div className={`${!isExpanded ? 'max-h-32 overflow-hidden relative' : ''}`}>
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-brand-green"></div>
                        <h3 className="font-bold text-brand-green text-sm uppercase tracking-wide">The Solution</h3>
                    </div>
                    <div itemProp="step" itemScope itemType="https://schema.org/HowToStep">
                        <p
                            className="text-brand-offwhite/90 leading-relaxed text-sm"
                            itemProp="text"
                        >
                            {block.solution}
                        </p>
                    </div>
                    {!isExpanded && (
                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-brand-navy/90 to-transparent pointer-events-none"></div>
                    )}
                </div>

                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-brand-blue text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all"
                >
                    {isExpanded ? 'Show Less' : 'Read Full Solution'}
                    <ArrowRight size={14} className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                </button>

                {/* Key Takeaways */}
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="pt-4 border-t border-white/5"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <Lightbulb className="w-4 h-4 text-brand-blue" />
                            <h4 className="font-bold text-sm">Key Takeaways</h4>
                        </div>
                        <ul className="space-y-2">
                            {block.keyTakeaways.map((takeaway, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-brand-gray">
                                    <Zap size={14} className="text-brand-blue shrink-0 mt-0.5" />
                                    <span>{takeaway}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {block.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-brand-gray border border-white/5"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.article>
    );
};

export default function ResourcesPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const categories = ['All', 'Performance', 'DevOps', 'AI', 'SEO', 'Architecture'];

    const filteredBlocks = selectedCategory === 'All'
        ? answerBlocks
        : answerBlocks.filter(block => block.category === selectedCategory);

    return (
        <main className="pt-20 pb-32">
            <div className="container mx-auto px-6">
                {/* Hero Header */}
                <header className="text-center mb-16 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 text-brand-blue border-brand-blue/30 border"
                    >
                        <Brain size={16} />
                        <span className="text-xs font-bold uppercase tracking-wider">GEO Optimized for AI Search</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight"
                    >
                        Technical <span className="text-gradient">Resources</span> & Insights
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-brand-gray max-w-2xl mx-auto leading-relaxed"
                    >
                        Data-backed solutions to common DevOps, Performance, and Architecture challenges.
                        Each guide includes specific metrics, implementation steps, and proven results from real projects.
                    </motion.p>
                </header>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                >
                    <div className="glass p-6 rounded-2xl text-center">
                        <div className="text-3xl font-bold text-brand-blue mb-1">{answerBlocks.length}</div>
                        <div className="text-xs text-brand-gray uppercase tracking-wider">Solution Guides</div>
                    </div>
                    <div className="glass p-6 rounded-2xl text-center">
                        <div className="text-3xl font-bold text-brand-green mb-1">92%</div>
                        <div className="text-xs text-brand-gray uppercase tracking-wider">Avg. Improvement</div>
                    </div>
                    <div className="glass p-6 rounded-2xl text-center">
                        <div className="text-3xl font-bold text-brand-coral mb-1">5</div>
                        <div className="text-xs text-brand-gray uppercase tracking-wider">Categories</div>
                    </div>
                    <div className="glass p-6 rounded-2xl text-center">
                        <div className="text-3xl font-bold text-brand-blue mb-1">50+</div>
                        <div className="text-xs text-brand-gray uppercase tracking-wider">Key Takeaways</div>
                    </div>
                </motion.div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all border flex items-center gap-2 ${selectedCategory === cat
                                    ? "bg-brand-blue text-brand-navy border-brand-blue shadow-lg shadow-brand-blue/20"
                                    : "glass border-white/5 text-brand-gray hover:border-brand-blue/30"
                                }`}
                        >
                            {cat !== 'All' && categoryIcons[cat]}
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Answer Blocks Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {filteredBlocks.map((block, index) => (
                        <AnswerBlockCard key={block.id} block={block} index={index} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 text-center"
                >
                    <div className="glass p-12 rounded-3xl max-w-3xl mx-auto relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl"></div>
                        <div className="relative z-10">
                            <TrendingUp className="w-12 h-12 text-brand-blue mx-auto mb-6" />
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Need Help Implementing These Solutions?
                            </h2>
                            <p className="text-brand-gray mb-8 max-w-xl mx-auto">
                                Get a personalized audit of your application's performance, infrastructure, or SEO.
                                I'll identify the biggest opportunities and provide a clear optimization roadmap.
                            </p>
                            <NavLink
                                to="/scorecard"
                                className="px-8 py-4 bg-brand-blue text-brand-navy font-bold rounded-xl inline-flex items-center gap-2 hover:bg-brand-coral hover:text-white transition-all shadow-xl shadow-brand-blue/20"
                            >
                                Get Your Free UX Scorecard <ArrowRight size={20} />
                            </NavLink>
                        </div>
                    </div>
                </motion.section>
            </div>
        </main>
    );
}
