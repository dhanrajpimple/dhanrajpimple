import type { MetaFunction } from "react-router";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MessageSquare, Send, CheckCircle2 } from "lucide-react";

export const meta: MetaFunction = () => {
    return [
        { title: "Contact Dhanraj Pimple | Hire a DevOps & Software Expert" },
        { name: "description", content: "Ready to automate your future? Get in touch with Dhanraj Pimple for fixed-price projects or retainer-based DevOps consulting." },
    ];
};

const ContactMethod = ({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href: string }) => (
    <a href={href} className="flex gap-6 p-6 glass rounded-2xl border border-white/5 hover:border-brand-blue/30 transition-all group">
        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-brand-navy transition-all">
            {icon}
        </div>
        <div>
            <div className="text-xs text-brand-gray uppercase tracking-widest font-bold mb-1">{label}</div>
            <div className="text-lg font-bold">{value}</div>
        </div>
    </a>
);

export default function Contact() {
    return (
        <main className="pt-20 pb-32">
            <div className="container mx-auto px-6">
                <header className="mb-20 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-display font-bold mb-6"
                    >
                        Let's Build <span className="text-gradient">Something Great</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-brand-gray max-w-2xl mx-auto"
                    >
                        Whether you have a specific project in mind or just want to discuss automation possibilities, I'm always open to new collaborations.
                    </motion.p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <ContactMethod
                                icon={<Mail size={24} />}
                                label="Email"
                                value="dhanrajpimple16@gmail.com"
                                href="mailto:dhanrajpimple16@gmail.com"
                            />
                            <ContactMethod
                                icon={<Phone size={24} />}
                                label="Phone"
                                value="+91 91468 90521"
                                href="tel:+919146890521"
                            />
                            <ContactMethod
                                icon={<Linkedin size={24} />}
                                label="LinkedIn"
                                value="in/dhanrajpimple"
                                href="https://linkedin.com/in/dhanrajpimple"
                            />
                        </div>

                        <div className="glass p-10 rounded-3xl border border-white/5 space-y-6">
                            <h3 className="text-xl font-bold font-display border-b border-white/5 pb-4">Availability Status</h3>
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-brand-green rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                                <span className="font-bold">Currently Booking for February 2026</span>
                            </div>
                            <ul className="space-y-4 text-sm text-brand-gray">
                                <li className="flex gap-3">
                                    <CheckCircle2 size={18} className="text-brand-green shrink-0" />
                                    <span>Free Initial Consultation (30 mins)</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 size={18} className="text-brand-green shrink-0" />
                                    <span>Estimated Response Time: &lt; 24 Hours</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="glass p-10 md:p-16 rounded-3xl border border-white/5"
                    >
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-brand-gray">Full Name</label>
                                    <input type="text" id="name" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-blue transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-brand-gray">Email Address</label>
                                    <input type="email" id="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-blue transition-all" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="service" className="text-xs font-bold uppercase tracking-wider text-brand-gray">Interested Service</label>
                                <select id="service" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-blue transition-all appearance-none">
                                    <option value="devops" className="bg-brand-navy">DevOps Automation</option>
                                    <option value="software" className="bg-brand-navy">Software Development</option>
                                    <option value="website" className="bg-brand-navy">Website Development</option>
                                    <option value="other" className="bg-brand-navy">Other / Consultation</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-brand-gray">Project Details</label>
                                <textarea id="message" rows={6} className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-blue transition-all" placeholder="Tell me about your project..."></textarea>
                            </div>

                            <button className="w-full py-5 bg-brand-blue text-brand-navy font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white hover:scale-[1.02] transition-all shadow-2xl shadow-brand-blue/20 text-lg">
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
