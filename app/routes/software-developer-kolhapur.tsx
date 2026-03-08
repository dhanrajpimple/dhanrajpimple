import { motion } from "framer-motion";
import { MapPin, ArrowRight, Star, Globe, Code2 } from "lucide-react";
import { NavLink, type MetaFunction } from "react-router";
import { buildPageMeta, SITE_AUTHOR, SITE_URL } from "~/lib/seo";

export const meta: MetaFunction = () => [
    ...buildPageMeta({
        title: "Software Developer Kolhapur | Freelance Full-Stack & Web Developer - Dhanraj Pimple",
        description:
            "Hire a freelance software developer serving Kolhapur, Maharashtra. Expert in website development, web apps, mobile apps, and SaaS platforms. Affordable, quality tech delivery for Kolhapur businesses and startups.",
        path: "/software-developer-kolhapur",
        keywords:
            "software developer Kolhapur, web developer Kolhapur, app developer Kolhapur, website developer Kolhapur, freelance developer Kolhapur, IT developer Kolhapur, developer Maharashtra, affordable developer Kolhapur",
    }),
    {
        "script:ld+json": {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Dhanraj Pimple - Software Developer Kolhapur",
            url: SITE_URL,
            address: { "@type": "PostalAddress", addressLocality: "Satara", addressRegion: "Maharashtra", addressCountry: "IN" },
            areaServed: [{ "@type": "City", name: "Kolhapur" }, { "@type": "State", name: "Maharashtra" }],
            provider: { "@type": "Person", name: SITE_AUTHOR },
        },
    },
];

const faqs = [
    { q: "Do you serve clients in Kolhapur, Maharashtra?", a: "Yes. I serve Kolhapur-based businesses, startups, and entrepreneurs with web development, mobile apps, SaaS platforms, and AI/ML integrations — remotely with IST timezone alignment and Marathi communication." },
    { q: "What software development services do you offer for Kolhapur businesses?", a: "Business website development, e-commerce stores, mobile apps, SaaS platforms, AI chatbots, inventory management software, and custom business software for Kolhapur manufacturers, retailers, and service providers." },
    { q: "What is the cost of app development for Kolhapur businesses?", a: "Web development for Kolhapur businesses starts at Rs. 5,999. Mobile apps start at Rs. 14,999. Custom software is scoped per project. I offer affordable, transparent pricing with no surprise costs." },
    { q: "Do you communicate in Marathi for Kolhapur clients?", a: "Yes. I am a Marathi-speaking developer and can communicate comfortably in Marathi with Kolhapur clients. I understand local business needs and deliver practical, effective digital solutions." },
];

export default function SoftwareDeveloperKolhapur() {
    return (
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container mx-auto px-6 py-16 space-y-24 max-w-6xl">
            <section className="glass p-10 md:p-16 rounded-3xl relative overflow-hidden border border-brand-blue/20">
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-blue/20 text-brand-blue mb-6">
                    <MapPin size={16} />
                    <span className="text-xs font-bold uppercase tracking-wider">Serving Kolhapur · Maharashtra · India</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                    Software Developer <span className="text-gradient">in Kolhapur</span>, Maharashtra
                </h1>
                <p className="text-lg text-brand-gray mb-4 max-w-3xl leading-relaxed">
                    I am Dhanraj Pimple, a freelance software and web developer serving Kolhapur businesses and startups with
                    professional websites, mobile apps, e-commerce stores, and SaaS platforms. Quality digital solutions at
                    affordable prices — with Marathi communication and direct delivery.
                </p>
                <p className="text-base text-brand-gray/90 mb-10 max-w-3xl">
                    Kolhapur businesses — from textile manufacturers and retailers to educational institutions and hospitality — can
                    now access enterprise-quality software development without agency costs or long timelines.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <NavLink to="/contact" className="px-8 py-4 bg-brand-blue text-brand-navy font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-brand-coral hover:text-white transition-all shadow-xl shadow-brand-blue/20">
                        Get a Free Quote for Kolhapur <ArrowRight size={20} />
                    </NavLink>
                </div>
            </section>

            <section>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">Software & Web Services for Kolhapur</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { icon: <Globe className="w-6 h-6 text-brand-blue" />, title: "Business Website Development", desc: "Professional websites for Kolhapur shops, factories, schools, clinics, and service businesses. SEO-optimized and mobile-first." },
                        { icon: <Code2 className="w-6 h-6 text-brand-blue" />, title: "Custom Business Software", desc: "Inventory management, billing software, booking systems, and customer management tools for Kolhapur businesses." },
                    ].map((s, i) => (
                        <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }} viewport={{ once: true }}
                            className="glass p-8 rounded-3xl border border-white/5 hover:border-brand-blue/30 transition-all flex gap-6">
                            <div className="mt-1 shrink-0">{s.icon}</div>
                            <div>
                                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                                <p className="text-brand-gray text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-center">FAQ — Software Developer Kolhapur</h2>
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
                <h2 className="text-2xl font-display font-bold mb-6">Start Your Kolhapur Project Today</h2>
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {["Marathi-speaking developer", "Affordable pricing", "Fast delivery", "Remote with IST hours"].map((t) => (
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
                    <NavLink to="/web-developer-satara" className="px-6 py-3 glass rounded-xl text-sm font-bold hover:border-brand-blue/40 border border-white/10 transition-all">Web Developer Satara →</NavLink>
                    <NavLink to="/devops-engineer-india" className="px-6 py-3 glass rounded-xl text-sm font-bold hover:border-brand-blue/40 border border-white/10 transition-all">DevOps Engineer India →</NavLink>
                </div>
            </section>
        </motion.main>
    );
}
