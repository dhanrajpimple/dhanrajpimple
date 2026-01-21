import type { MetaFunction } from "react-router";
import { motion } from "framer-motion";

export const meta: MetaFunction = () => {
    return [
        { title: "Terms of Service | Dhanraj Pimple" },
        { name: "description", content: "Terms of service for Dhanraj Pimple's portfolio website." },
    ];
};

export default function Terms() {
    return (
        <main className="pt-20 pb-32">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-display font-bold mb-12"
                >
                    Terms of <span className="text-gradient">Service</span>
                </motion.h1>
                <div className="prose prose-invert max-w-none text-brand-gray space-y-6">
                    <p>Last updated: January 21, 2026</p>
                    <h2 className="text-2xl font-bold text-white mt-8">1. Agreement to Terms</h2>
                    <p>By accessing our website, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
                    <h2 className="text-2xl font-bold text-white mt-8">2. Intellectual Property Rights</h2>
                    <p>Unless otherwise indicated, the website is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the website are owned or controlled by us.</p>
                    <h2 className="text-2xl font-bold text-white mt-8">3. User Representations</h2>
                    <p>By using the website, you represent and warrant that all registration information you submit will be true, accurate, current, and complete.</p>
                </div>
            </div>
        </main>
    );
}
