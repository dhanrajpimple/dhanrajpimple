import type { MetaFunction } from "react-router";
import { motion } from "framer-motion";

export const meta: MetaFunction = () => {
    return [
        { title: "Privacy Policy | Dhanraj Pimple" },
        { name: "description", content: "Privacy policy for Dhanraj Pimple's portfolio website. Learn how we handle your data." },
    ];
};

export default function Privacy() {
    return (
        <main className="pt-20 pb-32">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-display font-bold mb-12"
                >
                    Privacy <span className="text-gradient">Policy</span>
                </motion.h1>
                <div className="prose prose-invert max-w-none text-brand-gray space-y-6">
                    <p>Last updated: January 21, 2026</p>
                    <h2 className="text-2xl font-bold text-white mt-8">1. Introduction</h2>
                    <p>Welcome to the portfolio website of Dhanraj Pimple. We are committed to protecting your personal information and your right to privacy.</p>
                    <h2 className="text-2xl font-bold text-white mt-8">2. Information We Collect</h2>
                    <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our services, when you participate in activities on the website (such as by filling out a contact form or subscribing to a newsletter) or otherwise when you contact us.</p>
                    <h2 className="text-2xl font-bold text-white mt-8">3. How We Use Your Information</h2>
                    <p>We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
                    <h2 className="text-2xl font-bold text-white mt-8">4. Sharing Your Information</h2>
                    <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>
                </div>
            </div>
        </main>
    );
}
