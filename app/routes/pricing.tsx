import type { MetaFunction } from "react-router";
import { motion } from "framer-motion";
import { Check, Zap, Smartphone, Globe, Bot, BarChart3, Clock, ShieldCheck, Mail, ArrowRight } from "lucide-react";
import { NavLink } from "react-router";

export const meta: MetaFunction = () => {
    const siteTitle = "Website Development Pricing India | Affordable Web & App Cost - Dhanraj Pimple";
    const siteDescription = "Get the best website development price in India. Static website design starts at ₹5,999, full-stack software at ₹9,999, and mobile apps at ₹14,999. Expert freelance developer in Satara, Pune, and globally. 100% SEO optimized.";
    const siteKeywords = "website development price India, mobile app development cost Pune, affordable website design Satara, freelance developer rates Maharashtra, business website packages, hire full stack developer cost, static website pricing India, ecommerce website cost, AI chatbot price for website, web developer Pune pricing, app development cost India 2024, small business website cost, hire website developer for startup";

    return [
        { title: siteTitle },
        { name: "description", content: siteDescription },
        { name: "keywords", content: siteKeywords },
        { property: "og:title", content: siteTitle },
        { property: "og:description", content: siteDescription },
        { property: "og:type", content: "website" },
        { property: "og:image", content: "https://github.com/dhanrajpimple.png" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: siteTitle },
        { name: "twitter:description", content: siteDescription },
        { name: "geo.region", content: "IN-MH" },
        { name: "geo.placename", content: "Satara, Pune" },
        { name: "robots", content: "index, follow, max-image-preview:large" },
    ];
};

const PricingCard = ({
    title,
    price,
    originalPrice,
    description,
    features,
    isPopular,
    icon: Icon,
    delay = 0
}: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className={`relative p-8 rounded-3xl border transition-all duration-300 h-full flex flex-col ${isPopular
                ? "bg-brand-blue/5 border-brand-blue shadow-2xl shadow-brand-blue/10 transform scale-105 z-10"
                : "bg-white/[0.02] border-white/10 hover:border-white/20"
                }`}
        >
            {isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-blue text-brand-navy text-xs font-bold rounded-full uppercase tracking-widest">
                    Most Popular
                </div>
            )}

            <div className="mb-8">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${isPopular ? "bg-brand-blue text-brand-navy" : "bg-white/5 text-brand-blue"}`}>
                    <Icon size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed mb-6">{description}</p>

                <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-display font-bold text-white">₹{price}</span>
                    {originalPrice && (
                        <span className="text-brand-gray line-through text-lg">₹{originalPrice}</span>
                    )}
                </div>
            </div>

            <div className="space-y-4 mb-10 flex-1">
                {features.map((feature: string, i: number) => (
                    <div key={i} className="flex gap-3 text-sm">
                        <Check size={18} className="text-brand-blue shrink-0" />
                        <span className="text-brand-offwhite/80">{feature}</span>
                    </div>
                ))}
            </div>

            <NavLink
                to="/contact"
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${isPopular
                    ? "bg-brand-blue text-brand-navy hover:bg-brand-coral hover:text-white"
                    : "button-glass text-white hover:bg-white/10"
                    }`}
            >
                Get Started <ArrowRight size={18} />
            </NavLink>
        </motion.div>
    );
};

export default function Pricing() {
    const mainPlans = [
        {
            title: "Starter Static",
            price: "5,999",
            originalPrice: "8,999",
            description: "Perfect for small businesses and personal portfolios needing a solid online presence.",
            icon: Globe,
            features: [
                "Up to 8 Custom Pages",
                "Modern Responsive Design",
                "1 Year .in Domain Included",
                "Basic SEO Setup",
                "Google Search Console Integration",
                "Contact Form Integration",
                "High Performance & Speed",
                "1 Month Future Support"
            ]
        },
        {
            title: "Full Stack Pro",
            price: "9,999",
            originalPrice: "14,999",
            isPopular: true,
            description: "Complete dynamic solution with a powerful backend for data-driven businesses.",
            icon: Zap,
            features: [
                "Everything in Starter",
                "Custom Backend CMS",
                "User Authentication",
                "Database Integration",
                "2 Years .in Domain Included",
                "Advanced Technical SEO",
                "Admin Dashboard",
                "3 Months Dedicated Support"
            ]
        },
        {
            title: "Mobile App",
            price: "14,999",
            originalPrice: "19,999",
            description: "Scale your business to smartphones with a native-feel mobile application.",
            icon: Smartphone,
            features: [
                "Android & iOS Support",
                "Optimized Performance",
                "Push Notifications",
                "Real-time Data Sync",
                "Play Store Submission Guide",
                "Intuitive User Interface",
                "API Integration",
                "3 Months Dedicated Support"
            ]
        }
    ];

    const addons = [
        {
            title: "AI Chatbot",
            price: "999",
            description: "Automate your customer support 24/7 with an intelligent AI chatbot.",
            icon: Bot
        },
        {
            title: "SEO & Automation",
            price: "499",
            description: "Advanced keyword ranking and workflow automation for your business.",
            icon: BarChart3
        }
    ];

    return (
        <main className="pb-32">
            {/* Hero Section */}
            <section className="relative pt-20 pb-16 overflow-hidden">
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                            Invest in Your <span className="text-gradient">Digital Success</span>
                        </h1>
                        <p className="text-brand-gray text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Transparent, affordable, and result-oriented pricing for businesses ready to scale. No hidden costs, just pure performance.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Pricing Table */}
            <section className="py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                        {mainPlans.map((plan, i) => (
                            <PricingCard key={plan.title} {...plan} delay={i * 0.1} />
                        ))}
                    </div>
                    <p className="mt-8 text-center text-brand-gray text-sm italic">
                        * All prices are starting prices and may vary based on specific custom requirements.
                    </p>
                </div>
            </section>

            {/* Add-ons Section */}
            <section className="py-24 bg-white/[0.01]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-display font-bold mb-4">Supercharge Your Website</h2>
                        <p className="text-brand-gray">Optional add-ons to enhance your digital ecosystem.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {addons.map((addon, i) => (
                            <motion.div
                                key={addon.title}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="glass p-8 rounded-3xl flex items-center gap-6 group hover:border-brand-blue/30 transition-all"
                            >
                                <div className="w-14 h-14 bg-brand-blue/10 text-brand-blue rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                    <addon.icon size={28} />
                                </div>
                                <div>
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-xl font-bold">{addon.title}</h3>
                                        <span className="text-brand-blue font-bold">₹{addon.price}</span>
                                    </div>
                                    <p className="text-brand-gray text-sm">{addon.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Badges / Why Hire Me */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-brand-gray">
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 text-brand-blue">
                                <Clock size={24} />
                            </div>
                            <h4 className="text-brand-offwhite font-bold mb-2">Fast Delivery</h4>
                            <p className="text-sm">Quick turnaround times without compromising on code quality or design.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 text-brand-blue">
                                <ShieldCheck size={24} />
                            </div>
                            <h4 className="text-brand-offwhite font-bold mb-2">3 Months Support</h4>
                            <p className="text-sm">I don't just build and leave. You get dedicated support to ensure everything runs smooth.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 text-brand-blue">
                                <BarChart3 size={24} />
                            </div>
                            <h4 className="text-brand-offwhite font-bold mb-2">SEO Optimized</h4>
                            <p className="text-sm">Every line of code is written keeping Google and AI search engines in mind.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ for SEO */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-display font-bold mb-12 text-center text-gradient">Frequently Asked Questions</h2>
                    <div className="space-y-8">
                        <div className="glass p-6 rounded-2xl">
                            <h3 className="text-lg font-bold mb-2">How much does a website cost for a small business in India?</h3>
                            <p className="text-brand-gray text-sm">A professional static website starts at ₹5,999, while dynamic full-stack applications start at ₹9,999. These packages include domain and SEO to provide the best value for startups.</p>
                        </div>
                        <div className="glass p-6 rounded-2xl">
                            <h3 className="text-lg font-bold mb-2">Why hire a freelance developer instead of an agency?</h3>
                            <p className="text-brand-gray text-sm">Hiring a freelance developer like me offers a direct line of communication, faster execution, and significantly lower costs as there is no agency overhead.</p>
                        </div>
                        <div className="glass p-6 rounded-2xl">
                            <h3 className="text-lg font-bold mb-2">Is SEO included in the website development package?</h3>
                            <p className="text-brand-gray text-sm">Yes, every website I build comes with baseline technical SEO. For more advanced keyword ranking and growth strategies, I offer an specialized SEO & Automation add-on for just ₹499.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="mt-12">
                <div className="container mx-auto px-6">
                    <div className="glass-dark border border-brand-blue/20 rounded-3xl p-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-brand-blue to-transparent" />
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Need a Custom Quote?</h2>
                        <p className="text-brand-gray mb-10 max-w-xl mx-auto">Have a complex project that doesn't fit these plans? Let's discuss your requirements and build a custom solution for you.</p>
                        <NavLink
                            to="/contact"
                            className="px-10 py-5 bg-brand-blue text-brand-navy font-bold rounded-xl inline-flex items-center gap-2 hover:bg-brand-coral hover:text-white transition-all shadow-2xl shadow-brand-blue/40"
                        >
                            Get a Free Consultation <Mail size={20} />
                        </NavLink>
                    </div>
                </div>
            </section>
        </main>
    );
}
