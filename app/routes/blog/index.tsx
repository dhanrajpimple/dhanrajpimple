import { motion } from "framer-motion";
import { blogPosts } from "../../data/blog";
import { Calendar, Clock, ArrowRight, Search, Tag, MessageSquare } from "lucide-react";
import { NavLink, type MetaFunction } from "react-router";
import { useState } from "react";

export const meta: MetaFunction = () => {
    return [
        { title: "Technical Insights | Dhanraj Pimple Blog | DevOps & Development" },
        { name: "description", content: "Expert guides on DevOps automation, CI/CD pipelines, CI/CD optimization, and modern software scaling by Dhanraj Pimple. Serving Pune, Satara, and Kolhapur." },
        { name: "keywords", content: "DevOps Blog Satara, Software Engineering Pune, Technical Guides Maharashtra, CI/CD Best Practices, Cloud Infrastructure India, Web Development Insights" },
    ];
};

export default function BlogIndex() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");

        const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

        if (!supabaseKey || !supabaseUrl) {
            console.error("Supabase environment variables are missing");
            setStatus("error");
            return;
        }

        try {
            const response = await fetch(`${supabaseUrl}/rest/v1/rpc/subscribe_email`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "apikey": supabaseKey,
                    "Authorization": `Bearer ${supabaseKey}`
                },
                body: JSON.stringify({
                    p_email: email
                })
            });

            if (response.ok) {
                setStatus("success");
                setEmail("");
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Newsletter subscription error:", error);
            setStatus("error");
        }
    };

    return (
        <main className="pt-20 pb-32">
            <div className="container mx-auto px-6">
                <header className="mb-20 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-display font-bold mb-6"
                    >
                        Technical <span className="text-gradient">Insights</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-brand-gray max-w-2xl mx-auto"
                    >
                        Deep dives into DevOps best practices, automation strategies, and modern software development.
                    </motion.p>
                </header>

                {/* Search & Categories */}
                <div className="flex flex-col md:flex-row gap-6 mb-16 items-center justify-between">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray" size={18} />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-6 py-3 focus:outline-none focus:border-brand-blue/50"
                        />
                    </div>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {["All", "DevOps", "Software Development", "Website Development", "Freelancing"].map(cat => (
                            <button key={cat} className="px-4 py-1.5 glass rounded-full text-xs font-bold text-brand-gray border border-white/5 hover:border-brand-blue/30 transition-all">
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Featured Post (Text Only) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-16 group cursor-pointer"
                >
                    <NavLink to={`/blog/${blogPosts[0].id}`} className="block relative glass p-10 md:p-16 rounded-[2rem] border border-white/10 overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="bg-brand-blue text-brand-navy px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest">{blogPosts[0].category}</span>
                                <div className="flex items-center gap-4 text-xs text-brand-gray">
                                    <span className="flex items-center gap-1"><Calendar size={14} /> {blogPosts[0].date}</span>
                                    <span className="flex items-center gap-1"><Clock size={14} /> {blogPosts[0].readTime}</span>
                                </div>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 max-w-4xl group-hover:text-brand-blue transition-colors">{blogPosts[0].title}</h2>
                            <p className="text-xl text-brand-gray max-w-2xl mb-10 leading-relaxed">{blogPosts[0].excerpt}</p>
                            <div className="inline-flex items-center gap-2 text-brand-blue font-bold group-hover:gap-4 transition-all">
                                Read Full Case Study <ArrowRight size={20} />
                            </div>
                        </div>
                    </NavLink>
                </motion.div>

                {/* Blog Grid (Text OnlyCards) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.slice(1).map((post, i) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="glass p-8 rounded-3xl group flex flex-col border border-white/5 hover:border-brand-blue/20 transition-all h-full"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-lg text-[10px] font-bold uppercase tracking-wider border border-brand-blue/20">{post.category}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4 group-hover:text-brand-blue transition-colors line-clamp-3 leading-tight">{post.title}</h3>
                            <p className="text-sm text-brand-gray mb-8 line-clamp-3 leading-relaxed flex-1">{post.excerpt}</p>
                            <div className="pt-6 border-t border-white/5 flex items-center justify-between mt-auto">
                                <div className="flex items-center gap-4 text-[10px] text-brand-gray">
                                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                                </div>
                                <NavLink to={`/blog/${post.id}`} className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-brand-gray group-hover:bg-brand-blue group-hover:text-brand-navy transition-all">
                                    <ArrowRight size={18} />
                                </NavLink>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Newsletter Section */}
                <div className="mt-32 glass p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-blue/10 blur-[100px] rounded-full" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-coral/10 blur-[100px] rounded-full" />
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Stay Ahead of the Curve</h2>
                        <p className="text-brand-gray mb-10 max-w-xl mx-auto">Join 2,000+ engineers receiving bi-weekly tips on DevOps, scaling infrastructure, and AI development.</p>
                        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-blue transition-all"
                            />
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="bg-brand-blue text-brand-navy font-bold px-8 py-4 rounded-xl hover:bg-brand-coral hover:text-white transition-all shadow-xl shadow-brand-blue/20 disabled:opacity-50"
                            >
                                {status === "loading" ? "Subscribing..." : "Subscribe"}
                            </button>
                        </form>
                        {status === "success" && <p className="text-brand-green text-sm font-bold mt-4">Successfully subscribed!</p>}
                        {status === "error" && <p className="text-red-400 text-sm font-bold mt-4">Error subscribing. Please try again.</p>}
                        <p className="text-[10px] text-brand-gray mt-6 italic">No spam, just pure technical value. Unsubscribe anytime.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
