import type { MetaFunction } from "react-router";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MessageSquare, Send, CheckCircle2, Twitter } from "lucide-react";

export const meta: MetaFunction = () => {
    return [
        { title: "Hire Best Web Developer & SEO Expert in Satara, Pune | Dhanraj Pimple" },
        { name: "description", content: "Looking for a freelance web developer, app specialist, or SEO expert in Satara, Pune, or Kolhapur? Contact Dhanraj Pimple for custom software, chatbots, and automation." },
        { name: "keywords", content: "Hire Web Developer Satara, Freelancer Pune, SEO Expert Kolhapur, Chatbot Developer India, Software Consultant Sangli, App Developer Solapur, Backend Developer Maharashtra" },
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

import { useState } from "react";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "devops",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

        if (!supabaseKey || !supabaseUrl) {
            console.error("Supabase environment variables are missing");
            setStatus("error");
            return;
        }

        try {
            const response = await fetch(`${supabaseUrl}/rest/v1/rpc/create_form_inquiry`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "apikey": supabaseKey,
                    "Authorization": `Bearer ${supabaseKey}`
                },
                body: JSON.stringify({
                    p_full_name: formData.name,
                    p_email: formData.email,
                    p_interested_service: formData.service,
                    p_project_details: formData.message
                })
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", service: "devops", message: "" });
            } else {
                const error = await response.json();
                console.error("Supabase RPC error:", error);
                setStatus("error");
            }
        } catch (error) {
            console.error("Form submission error:", error);
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
                                value="dhanraj-pimple"
                                href="https://www.linkedin.com/in/dhanraj-pimple-1b802a274/"
                            />
                            <ContactMethod
                                icon={<Github size={24} />}
                                label="GitHub"
                                value="dhanrajpimple"
                                href="https://github.com/dhanrajpimple/"
                            />
                            <ContactMethod
                                icon={<Twitter size={24} />}
                                label="Twitter / X"
                                value="@DhanrajPimple16"
                                href="https://x.com/DhanrajPimple16"
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
                        {status === "success" ? (
                            <div className="text-center py-10 space-y-6">
                                <div className="w-20 h-20 bg-brand-green/20 rounded-full flex items-center justify-center mx-auto">
                                    <CheckCircle2 size={40} className="text-brand-green" />
                                </div>
                                <h3 className="text-2xl font-bold">Message Sent!</h3>
                                <p className="text-brand-gray">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="text-brand-blue font-bold hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-brand-gray">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-blue transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-brand-gray">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-blue transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="service" className="text-xs font-bold uppercase tracking-wider text-brand-gray">Interested Service</label>
                                    <select
                                        id="service"
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-blue transition-all appearance-none"
                                    >
                                        <option value="devops" className="bg-brand-navy">DevOps Automation</option>
                                        <option value="software" className="bg-brand-navy">Software Development</option>
                                        <option value="website" className="bg-brand-navy">Website Development</option>
                                        <option value="other" className="bg-brand-navy">Other / Consultation</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-brand-gray">Project Details</label>
                                    <textarea
                                        id="message"
                                        rows={6}
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-blue transition-all"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>

                                <button
                                    disabled={status === "loading"}
                                    type="submit"
                                    className="w-full py-5 bg-brand-blue text-brand-navy font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white hover:scale-[1.02] transition-all shadow-2xl shadow-brand-blue/20 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === "loading" ? "Sending..." : "Send Message"} <Send size={20} />
                                </button>

                                {status === "error" && (
                                    <p className="text-red-400 text-sm text-center">Something went wrong. Please try again or contact me directly.</p>
                                )}
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </main>
    );
}

