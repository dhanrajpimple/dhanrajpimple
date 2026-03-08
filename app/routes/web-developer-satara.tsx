import { motion } from "framer-motion";
import { CheckCircle2, MapPin, ArrowRight, Star, Code2, Globe, Server } from "lucide-react";
import { NavLink, type MetaFunction } from "react-router";
import { buildPageMeta, SITE_AUTHOR, SITE_URL } from "~/lib/seo";

export const meta: MetaFunction = () => [
    ...buildPageMeta({
        title: "Web Developer Satara | Freelance Full-Stack Developer Maharashtra - Dhanraj Pimple",
        description:
            "Dhanraj Pimple is a web developer based in Satara, Maharashtra offering website development, mobile apps, AI chatbots, and SaaS development for local businesses and startups. Affordable local developer in Satara.",
        path: "/web-developer-satara",
        keywords:
            "web developer Satara, freelance developer Satara, website developer Satara, AI developer Satara, mobile app developer Satara, software developer Satara, developer Maharashtra, web design Satara",
    }),
    {
        "script:ld+json": {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Dhanraj Pimple - Web Developer Satara",
            url: SITE_URL,
            address: { "@type": "PostalAddress", addressLocality: "Satara", addressRegion: "Maharashtra", addressCountry: "IN" },
            areaServed: [{ "@type": "City", name: "Satara" }, { "@type": "State", name: "Maharashtra" }],
            provider: { "@type": "Person", name: SITE_AUTHOR },
        },
    },
];

const faqs = [
    { q: "Are you really based in Satara, Maharashtra?", a: "Yes. Dhanraj Pimple is based in Satara, Maharashtra. I serve local Satara businesses with web development, app development, and AI solutions, and work remotely with clients across India." },
    { q: "What services do you offer for Satara businesses?", a: "Website development, e-commerce stores, mobile apps (Android/iOS), business automation, AI chatbots, SaaS development, and DevOps support for businesses in Satara and nearby areas." },
    { q: "What is the cost of website development in Satara?", a: "Website projects in Satara start at Rs. 5,999 for a business site. E-commerce and custom web apps start at Rs. 9,999. I offer affordable, quality web development for Satara-based businesses." },
    { q: "Do you offer support after the website goes live?", a: "Yes. I provide 1 month of free support post-launch and offer ongoing maintenance packages for hosting, updates, and security for Satara businesses." },
];

export default function WebDeveloperSatara() {
    return (
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container mx-auto px-6 py-16 space-y-24 max-w-6xl">
            <section className="glass p-10 md:p-16 rounded-3xl relative overflow-hidden border border-brand-blue/20">
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-blue/20 text-brand-blue mb-6">
                    <MapPin size={16} />
                    <span className="text-xs font-bold uppercase tracking-wider">Based in Satara, Maharashtra</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                    Web Developer <span className="text-gradient">in Satara</span>, Maharashtra
                </h1>
                <p className="text-lg text-brand-gray mb-4 max-w-3xl leading-relaxed">
                    I am Dhanraj Pimple, a web developer and full-stack engineer based in Satara, Maharashtra. I build websites,
                    mobile apps, AI chatbots, and SaaS platforms for Satara businesses, startups, and entrepreneurs — affordable,
                    quality digital solutions delivered from your own backyard.
                </p>
                <p className="text-base text-brand-gray/90 mb-10 max-w-3xl">
                    Whether you need a modern website for your local business in Satara, an e-commerce store, a mobile app, or an
                    AI-powered chatbot — I deliver complete digital solutions with direct communication and fast turnaround.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <NavLink to="/contact" className="px-8 py-4 bg-brand-blue text-brand-navy font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-brand-coral hover:text-white transition-all shadow-xl shadow-brand-blue/20">
                        Get a Free Website Quote <ArrowRight size={20} />
                    </NavLink>
                    <NavLink to="/pricing" className="px-8 py-4 glass border border-white/10 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                        View Pricing
                    </NavLink>
                </div>
            </section>

            <section>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">Digital Services for Satara Businesses</h2>
                <p className="text-brand-gray text-center max-w-2xl mx-auto mb-12">Website Development · Mobile Apps · AI Chatbots · E-commerce · SaaS Platforms</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: <Globe className="w-6 h-6 text-brand-blue" />, title: "Business Website Development", desc: "Professional, mobile-responsive websites for Satara shops, clinics, schools, and businesses. SEO-optimized and fast-loading.", href: "/services/website" },
                        { icon: <Code2 className="w-6 h-6 text-brand-blue" />, title: "E-commerce & Online Stores", desc: "Sell online with a complete e-commerce website with product management, payments, and order tracking.", href: "/services/software" },
                        { icon: <Server className="w-6 h-6 text-brand-blue" />, title: "Mobile App Development", desc: "Android and iOS apps for Satara businesses to connect with customers and streamline operations.", href: "/services/software" },
                    ].map((s, i) => (
                        <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }} viewport={{ once: true }}
                            className="glass p-8 rounded-3xl border border-white/5 hover:border-brand-blue/30 transition-all">
                            <div className="mb-5">{s.icon}</div>
                            <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                            <p className="text-brand-gray text-sm leading-relaxed mb-5">{s.desc}</p>
                            <NavLink to={s.href} className="inline-flex items-center gap-2 text-brand-blue font-bold text-sm">Learn More <ArrowRight size={16} /></NavLink>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-center">FAQ — Web Developer Satara</h2>
                <div className="space-y-6 max-w-3xl mx-auto">
                    {faqs.map((faq, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} viewport={{ once: true }}
                            className="glass p-8 rounded-2xl border border-white/5">
                            <p className="font-bold text-brand-offwhite mb-3">{faq.q}</p>
                            <p className="text-brand-gray text-sm leading-relaxed">{faq.a}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="glass p-10 rounded-3xl border border-brand-blue/20 text-center">
                <h2 className="text-2xl font-display font-bold mb-6">Get a Free Quote for Your Satara Project</h2>
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {["Satara-based, local meetings possible", "Affordable pricing", "Fast delivery", "Post-launch support"].map((t) => (
                        <span key={t} className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm border border-white/10"><Star size={14} className="text-brand-blue" /> {t}</span>
                    ))}
                </div>
                <NavLink to="/contact" className="px-10 py-4 bg-brand-blue text-brand-navy font-bold rounded-xl inline-flex items-center gap-2 hover:bg-brand-coral hover:text-white transition-all">
                    Contact Me <ArrowRight size={20} />
                </NavLink>
            </section>

            <section className="border-t border-white/5 pt-12">
                <h2 className="text-xl font-bold mb-6">Other Local Pages</h2>
                <div className="flex flex-wrap gap-4">
                    <NavLink to="/freelance-developer-pune" className="px-6 py-3 glass rounded-xl text-sm font-bold hover:border-brand-blue/40 border border-white/10 transition-all">Freelance Developer Pune →</NavLink>
                    <NavLink to="/software-developer-kolhapur" className="px-6 py-3 glass rounded-xl text-sm font-bold hover:border-brand-blue/40 border border-white/10 transition-all">Software Developer Kolhapur →</NavLink>
                    <NavLink to="/devops-engineer-india" className="px-6 py-3 glass rounded-xl text-sm font-bold hover:border-brand-blue/40 border border-white/10 transition-all">DevOps Engineer India →</NavLink>
                </div>
            </section>
        </motion.main>
    );
}
