import { Outlet, NavLink } from "react-router";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function ServicesLayout() {
    const categories = [
        { name: "DevOps Automation", href: "/services/devops" },
        { name: "Software Development", href: "/services/software" },
        { name: "Website Development", href: "/services/website" },
    ];

    return (
        <div className="pt-20 pb-32 min-h-screen">
            <div className="container mx-auto px-6">
                <header className="mb-20 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-display font-bold mb-6"
                    >
                        Specialized <span className="text-gradient">Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-brand-gray max-w-2xl mx-auto"
                    >
                        I provide systematic, high-impact solutions across the software development lifecycle.
                    </motion.p>
                </header>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar Navigation */}
                    <aside className="w-full lg:w-1/4">
                        <div className="glass p-6 rounded-2xl sticky top-32">
                            <h3 className="font-display font-bold text-lg mb-6 border-b border-white/10 pb-4">Categories</h3>
                            <nav className="flex flex-col gap-2">
                                {categories.map((cat) => (
                                    <NavLink
                                        key={cat.name}
                                        to={cat.href}
                                        end
                                        className={({ isActive }) =>
                                            `flex items-center justify-between px-4 py-3 rounded-xl transition-all ${isActive
                                                ? "bg-brand-blue text-brand-navy font-bold shadow-lg shadow-brand-blue/20"
                                                : "hover:bg-white/5 text-brand-gray"
                                            }`
                                        }
                                    >
                                        {cat.name}
                                        <ChevronRight size={16} />
                                    </NavLink>
                                ))}
                            </nav>

                            <div className="mt-12 p-6 bg-brand-navy/50 rounded-xl border border-brand-blue/20">
                                <h4 className="font-bold text-sm mb-2">Need a Custom Plan?</h4>
                                <p className="text-xs text-brand-gray mb-4">I offer tailored solutions for specific business needs.</p>
                                <NavLink to="/contact" className="text-brand-blue font-bold text-xs flex items-center gap-1 hover:gap-2 transition-all">
                                    Let's discuss <ChevronRight size={14} />
                                </NavLink>
                            </div>
                        </div>
                    </aside>

                    {/* Service Content */}
                    <section className="flex-1 min-w-0">
                        <Outlet />
                    </section>
                </div>
            </div>
        </div>
    );
}
