import { motion } from "framer-motion";
import { CheckCircle2, Globe, Rocket, Search, Smartphone, ArrowRight } from "lucide-react";
import { NavLink } from "react-router";

export default function WebsiteService() {
    const highlights = [
        { title: "Performance First", desc: "Ultra-fast loading times with 90+ Lighthouse scores across all metrics.", icon: <Rocket className="text-brand-blue" /> },
        { title: "SEO Strategy", desc: "Built-in search engine optimization to ensure your brand gets discovered.", icon: <Search className="text-brand-blue" /> },
        { title: "Responsive UX", desc: "Fluid, user-centric designs that work perfectly on every device screen.", icon: <Smartphone className="text-brand-blue" /> }
    ];

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-16">
            <div className="glass p-10 md:p-16 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Fast, Responsive Websites That <span className="text-brand-blue">Convert</span></h2>
                <p className="text-lg text-brand-gray mb-10 max-w-2xl leading-relaxed">
                    I build high-end personal brands and business websites using modern frameworks that prioritize speed, SEO, and user engagement.
                </p>
                <NavLink to="/contact" className="px-8 py-4 bg-brand-blue text-brand-navy font-bold rounded-xl inline-flex items-center gap-2 hover:bg-brand-coral hover:text-white transition-all">
                    Start Your Project <ArrowRight size={20} />
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
                            <h4 className="font-bold mb-2 text-brand-offwhite">Custom Portfolio Sites</h4>
                            <p className="text-xs text-brand-gray">Unique, dynamic portfolios for developers and creative professionals.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-6 bg-white/5 rounded-2xl">
                        <CheckCircle2 className="text-brand-green shrink-0" />
                        <div>
                            <h4 className="font-bold mb-2 text-brand-offwhite">Business & SaaS Landings</h4>
                            <p className="text-xs text-brand-gray">High-converting landing pages for products and corporate service providers.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-6 bg-white/5 rounded-2xl">
                        <CheckCircle2 className="text-brand-green shrink-0" />
                        <div>
                            <h4 className="font-bold mb-2 text-brand-offwhite">Headless CMS Solutions</h4>
                            <p className="text-xs text-brand-gray">Content management using Sanity, Contentful, or custom Supabase backends.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-6 bg-white/5 rounded-2xl">
                        <CheckCircle2 className="text-brand-green shrink-0" />
                        <div>
                            <h4 className="font-bold mb-2 text-brand-offwhite">Performance Audit</h4>
                            <p className="text-xs text-brand-gray">Optimization of existing sites for Core Web Vitals and SEO rankings.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/5 pt-16">
                <h3 className="text-2xl font-display font-bold mb-8 text-center">Tech Stack</h3>
                <div className="flex flex-wrap justify-center gap-6">
                    {["Remix.js", "Next.js", "React", "Tailwind CSS", "Framer Motion", "Supabase", "Vercel"].map(tech => (
                        <span key={tech} className="px-6 py-2 glass rounded-full text-xs font-bold text-brand-blue border-brand-blue/20 border">{tech}</span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
