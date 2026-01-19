import { useParams, NavLink, type MetaFunction } from "react-router";
import { motion } from "framer-motion";
import { blogPosts } from "../../data/blog";
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, Github, Twitter, Linkedin, MessageSquare, ArrowRight } from "lucide-react";

export const meta: MetaFunction = ({ params }) => {
    const post = blogPosts.find(p => p.id === params.id);
    const title = post ? `${post.title} | Dhanraj Pimple Blog` : "Article Not Found";
    const description = post ? post.excerpt : "Article not found.";
    const keywords = post ? `${post.category}, ${post.tags.join(", ")}, Dhanraj Pimple Blog, Technical Guide` : "DevOps, Software Development, technical blog";

    return [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: keywords },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
    ];
};

export default function BlogPostDetail() {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === id);

    if (!post) return (
        <div className="pt-40 text-center">
            <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
            <NavLink to="/blog" className="text-brand-blue hover:underline">Back to Blog</NavLink>
        </div>
    );

    return (
        <main className="pb-32">
            <article>
                {/* Post Header (Text-Focused) */}
                <header className="pt-24 pb-20 border-b border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/5 blur-[120px] rounded-full -translate-y-1/2" />
                    <div className="container mx-auto px-6 max-w-4xl relative z-10">
                        <NavLink to="/blog" className="flex items-center gap-2 text-brand-gray hover:text-brand-blue transition-colors mb-12 text-sm font-bold w-fit">
                            <ArrowLeft size={16} /> Back to Insights
                        </NavLink>
                        <div className="flex items-center gap-4 mb-8">
                            <span className="px-4 py-1.5 bg-brand-blue/10 text-brand-blue rounded-lg text-xs font-bold uppercase tracking-wider border border-brand-blue/20">{post.category}</span>
                            <div className="flex items-center gap-6 text-xs text-brand-gray">
                                <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                                <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display font-bold mb-10 leading-[1.1]">{post.title}</h1>

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 py-10 border-t border-white/10">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-blue/30 p-0.5">
                                    <img src="https://github.com/dhanrajpimple.png" alt="Dhanraj Pimple" className="w-full h-full object-cover rounded-full" />
                                </div>
                                <div>
                                    <div className="font-bold text-lg">Dhanraj Pimple</div>
                                    <div className="text-xs text-brand-gray uppercase tracking-widest font-medium">DevOps & Full-Stack Specialist</div>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <button className="flex items-center gap-2 px-4 py-2 glass rounded-xl text-brand-gray hover:text-brand-blue transition-all text-sm font-bold border border-white/5">
                                    <Share2 size={18} /> Share
                                </button>
                                <button className="p-2.5 glass rounded-xl text-brand-gray hover:text-brand-blue transition-all border border-white/5">
                                    <Bookmark size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Post Content */}
                <section className="py-20">
                    <div className="container mx-auto px-6 max-w-3xl">
                        <div className="prose prose-invert prose-lg max-w-none text-brand-offwhite/80 leading-[1.8] space-y-12">
                            <p className="text-2xl text-brand-blue/90 font-medium leading-relaxed border-l-4 border-brand-blue pl-8 py-4 bg-brand-blue/5 rounded-r-2xl italic">
                                {post.excerpt}
                            </p>

                            <div className="content space-y-10 whitespace-pre-wrap">
                                {post.content}

                                <h2 className="text-3xl font-display font-bold text-white mt-16 mb-8">Strategic Implementation</h2>
                                <p>Establishing a robust workflow is paramount in 2026. As the gap between development and operations continues to shrink, the tools we choose must facilitate speed WITHOUT sacrificing security or stability.</p>

                                <div className="glass p-10 rounded-[2rem] border border-brand-blue/20 my-16 bg-linear-to-br from-white/5 to-transparent relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-10"><MessageSquare size={80} /></div>
                                    <h4 className="text-xl font-bold text-brand-blue mb-6">Expert Perspective</h4>
                                    <p className="text-lg italic leading-relaxed text-brand-offwhite/90">"The true cost of deployment is not measured in compute hours, but in developer cognitive load. Simplify the pipeline, and you empower the creator."</p>
                                </div>

                                <p>We'll continue exploring these advanced patterns in our upcoming technical deep-dives. Stay tuned for more insights into scaling infrastructure and optimizing software delivery pipelines.</p>
                            </div>

                            {/* Tags */}
                            <div className="pt-16 flex flex-wrap gap-3 border-t border-white/5">
                                {post.tags.map(tag => (
                                    <span key={tag} className="px-4 py-2 bg-white/5 rounded-xl text-xs font-bold text-brand-gray border border-white/5 hover:border-brand-blue/50 transition-all cursor-pointer">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Author Card */}
                        <div className="mt-32 p-12 glass rounded-[2.5rem] flex flex-col md:flex-row gap-10 items-center border border-white/5 bg-linear-to-br from-brand-blue/5 to-transparent">
                            <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-brand-blue shadow-2xl shadow-brand-blue/20 shrink-0">
                                <img src="https://github.com/dhanrajpimple.png" alt="Dhanraj Pimple" className="w-full h-full object-cover" />
                            </div>
                            <div className="text-center md:text-left">
                                <h4 className="text-2xl font-bold mb-3">Written by Dhanraj Pimple</h4>
                                <p className="text-brand-gray mb-8 leading-relaxed">I help companies bridge the gap between complex code and scalable infrastructure. With a focus on automation and user-centric design, I build systems that work for you.</p>
                                <div className="flex justify-center md:justify-start gap-6">
                                    <a href="#" className="text-brand-gray hover:text-brand-blue transition-all flex items-center gap-2 font-bold text-sm"><Twitter size={20} /> Twitter</a>
                                    <a href="#" className="text-brand-gray hover:text-brand-blue transition-all flex items-center gap-2 font-bold text-sm"><Linkedin size={20} /> LinkedIn</a>
                                    <a href="#" className="text-brand-gray hover:text-brand-blue transition-all flex items-center gap-2 font-bold text-sm"><Github size={20} /> GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </article>

            {/* Recommended Reading */}
            <section className="py-32 bg-white/[0.02] border-t border-white/5">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="flex items-center justify-between mb-16">
                        <h3 className="text-3xl font-display font-bold">Recommended <span className="text-gradient">Reading</span></h3>
                        <NavLink to="/blog" className="text-brand-blue font-bold flex items-center gap-2 hover:gap-4 transition-all">View All Posts <ArrowRight size={20} /></NavLink>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {blogPosts.filter(p => p.id !== id).slice(0, 2).map(p => (
                            <NavLink key={p.id} to={`/blog/${p.id}`} className="glass p-10 rounded-[2rem] group border border-white/5 hover:border-brand-blue/20 transition-all h-full flex flex-col">
                                <span className="text-[11px] font-bold text-brand-blue uppercase tracking-widest mb-4 inline-block">{p.category}</span>
                                <h4 className="text-xl font-bold mb-6 group-hover:text-brand-blue transition-colors line-clamp-2 leading-tight flex-1">{p.title}</h4>
                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                                    <span className="text-[10px] text-brand-gray font-bold tracking-widest">{p.date}</span>
                                    <ArrowRight size={20} className="text-brand-gray group-hover:text-brand-blue group-hover:translate-x-2 transition-all" />
                                </div>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
