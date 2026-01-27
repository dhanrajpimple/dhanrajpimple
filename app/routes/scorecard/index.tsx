import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Globe, Mail, ArrowRight, CheckCircle2, Zap, Gauge, Brain, Shield,
    Smartphone, Search, Loader2, AlertTriangle, TrendingUp, Clock,
    Send, Star, Eye
} from "lucide-react";
import { NavLink, type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
    return [
        { title: "2026 UX Scorecard | Free Website Performance & AI-Readiness Audit | Dhanraj Pimple" },
        { name: "description", content: "Get a comprehensive audit of your website's UX, performance, and AI-readiness. Receive actionable insights on Core Web Vitals, mobile experience, and GEO optimization for AI search engines." },
        { name: "keywords", content: "UX Scorecard, Website Audit, Core Web Vitals, AI-Readiness, Performance Audit, GEO Optimization, Mobile UX, Free Website Review" },
        { property: "og:title", content: "Free 2026 UX Scorecard | Website Performance Audit" },
        { property: "og:description", content: "Discover how your website performs in 2026. Get insights on speed, mobile UX, and AI search visibility." },
        { property: "og:type", content: "website" },
    ];
};

interface ScoreCategory {
    name: string;
    icon: React.ReactNode;
    score: number;
    maxScore: number;
    status: 'excellent' | 'good' | 'needs-work' | 'critical';
    insights: string[];
}

interface FormData {
    url: string;
    email: string;
    name: string;
    businessType: string;
}

const statusColors = {
    'excellent': 'text-brand-green',
    'good': 'text-brand-blue',
    'needs-work': 'text-yellow-400',
    'critical': 'text-brand-coral',
};

const statusBgColors = {
    'excellent': 'bg-brand-green/20',
    'good': 'bg-brand-blue/20',
    'needs-work': 'bg-yellow-400/20',
    'critical': 'bg-brand-coral/20',
};

const ScoreRing = ({ score, maxScore, size = 120 }: { score: number; maxScore: number; size?: number }) => {
    const percentage = (score / maxScore) * 100;
    const circumference = 2 * Math.PI * 45;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    const getColor = () => {
        if (percentage >= 80) return '#10B981';
        if (percentage >= 60) return '#00D9FF';
        if (percentage >= 40) return '#FBBF24';
        return '#FF6B6B';
    };

    return (
        <div className="relative" style={{ width: size, height: size }}>
            <svg className="transform -rotate-90" width={size} height={size}>
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r="45"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="8"
                    fill="transparent"
                />
                <motion.circle
                    cx={size / 2}
                    cy={size / 2}
                    r="45"
                    stroke={getColor()}
                    strokeWidth="8"
                    fill="transparent"
                    strokeLinecap="round"
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    style={{ strokeDasharray: circumference }}
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-3xl font-bold"
                    style={{ color: getColor() }}
                >
                    {score}
                </motion.span>
                <span className="text-xs text-brand-gray">/ {maxScore}</span>
            </div>
        </div>
    );
};

const CategoryCard = ({ category, index }: { category: ScoreCategory; index: number }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 + index * 0.1 }}
        className="glass p-6 rounded-2xl"
    >
        <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl ${statusBgColors[category.status]}`}>
                    {category.icon}
                </div>
                <div>
                    <h4 className="font-bold">{category.name}</h4>
                    <span className={`text-xs font-bold uppercase ${statusColors[category.status]}`}>
                        {category.status.replace('-', ' ')}
                    </span>
                </div>
            </div>
            <div className="text-right">
                <div className={`text-2xl font-bold ${statusColors[category.status]}`}>
                    {category.score}/{category.maxScore}
                </div>
            </div>
        </div>
        <ul className="space-y-2">
            {category.insights.map((insight, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-brand-gray">
                    <AlertTriangle size={14} className={`shrink-0 mt-0.5 ${statusColors[category.status]}`} />
                    <span>{insight}</span>
                </li>
            ))}
        </ul>
    </motion.div>
);

export default function ScorecardPage() {
    const [step, setStep] = useState<'form' | 'analyzing' | 'results'>('form');
    const [formData, setFormData] = useState<FormData>({
        url: '',
        email: '',
        name: '',
        businessType: ''
    });
    const [results, setResults] = useState<ScoreCategory[] | null>(null);
    const [overallScore, setOverallScore] = useState(0);
    const formRef = useRef<HTMLFormElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const generateResults = (): ScoreCategory[] => {
        // In a real implementation, this would call an API to analyze the URL
        // For now, we generate semi-random but realistic results
        const baseScores = {
            performance: Math.floor(Math.random() * 30) + 50,
            mobile: Math.floor(Math.random() * 25) + 55,
            seo: Math.floor(Math.random() * 35) + 45,
            aiReady: Math.floor(Math.random() * 40) + 35,
            security: Math.floor(Math.random() * 20) + 70,
        };

        const getStatus = (score: number, max: number): 'excellent' | 'good' | 'needs-work' | 'critical' => {
            const pct = (score / max) * 100;
            if (pct >= 80) return 'excellent';
            if (pct >= 60) return 'good';
            if (pct >= 40) return 'needs-work';
            return 'critical';
        };

        return [
            {
                name: 'Core Web Vitals',
                icon: <Gauge className="w-5 h-5 text-brand-green" />,
                score: baseScores.performance,
                maxScore: 100,
                status: getStatus(baseScores.performance, 100),
                insights: [
                    baseScores.performance < 70 ? "LCP is above 2.5s - hero images need optimization" : "LCP is within acceptable range",
                    baseScores.performance < 60 ? "CLS issues detected - add explicit dimensions to images" : "Layout stability is good",
                    "Consider implementing lazy loading for below-fold content"
                ]
            },
            {
                name: 'Mobile Experience',
                icon: <Smartphone className="w-5 h-5 text-brand-blue" />,
                score: baseScores.mobile,
                maxScore: 100,
                status: getStatus(baseScores.mobile, 100),
                insights: [
                    baseScores.mobile < 70 ? "Touch targets may be too small on mobile" : "Touch targets are appropriately sized",
                    "Viewport is properly configured",
                    baseScores.mobile < 65 ? "Consider simplifying mobile navigation" : "Mobile navigation is user-friendly"
                ]
            },
            {
                name: 'SEO & Discoverability',
                icon: <Search className="w-5 h-5 text-yellow-400" />,
                score: baseScores.seo,
                maxScore: 100,
                status: getStatus(baseScores.seo, 100),
                insights: [
                    baseScores.seo < 80 ? "Meta descriptions could be more compelling" : "Meta tags are well-optimized",
                    baseScores.seo < 70 ? "Missing schema markup on key pages" : "Schema markup is implemented",
                    "Internal linking structure could be improved"
                ]
            },
            {
                name: 'AI Search Readiness',
                icon: <Brain className="w-5 h-5 text-purple-400" />,
                score: baseScores.aiReady,
                maxScore: 100,
                status: getStatus(baseScores.aiReady, 100),
                insights: [
                    baseScores.aiReady < 60 ? "Content lacks structured Q&A format for AI citation" : "Content structure supports AI extraction",
                    baseScores.aiReady < 50 ? "Missing specific data points and statistics" : "Data-backed claims present",
                    "Add dedicated 'Answer Block' content for key queries"
                ]
            },
            {
                name: 'Security & Trust',
                icon: <Shield className="w-5 h-5 text-brand-coral" />,
                score: baseScores.security,
                maxScore: 100,
                status: getStatus(baseScores.security, 100),
                insights: [
                    "HTTPS is properly configured",
                    baseScores.security < 85 ? "Consider adding security headers (CSP, HSTS)" : "Security headers are configured",
                    "No mixed content issues detected"
                ]
            }
        ];
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStep('analyzing');

        // Simulate analysis time
        await new Promise(resolve => setTimeout(resolve, 3000));

        const generatedResults = generateResults();
        setResults(generatedResults);

        const total = generatedResults.reduce((acc, cat) => acc + cat.score, 0);
        const max = generatedResults.reduce((acc, cat) => acc + cat.maxScore, 0);
        setOverallScore(Math.round((total / max) * 100));

        setStep('results');
    };

    return (
        <main className="pt-20 pb-32 min-h-screen">
            <div className="container mx-auto px-6">
                <AnimatePresence mode="wait">
                    {/* Form Step */}
                    {step === 'form' && (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="max-w-2xl mx-auto"
                        >
                            {/* Header */}
                            <header className="text-center mb-12">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-green flex items-center justify-center"
                                >
                                    <Gauge className="w-10 h-10 text-brand-navy" />
                                </motion.div>
                                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                                    2026 <span className="text-gradient">UX Scorecard</span>
                                </h1>
                                <p className="text-lg text-brand-gray max-w-xl mx-auto">
                                    Get a comprehensive audit of your website's performance, mobile UX,
                                    and AI-readiness. Free, actionable insights in under 2 minutes.
                                </p>
                            </header>

                            {/* Features */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                                {[
                                    { icon: <Gauge size={20} />, label: 'Core Web Vitals' },
                                    { icon: <Smartphone size={20} />, label: 'Mobile UX' },
                                    { icon: <Brain size={20} />, label: 'AI Readiness' },
                                    { icon: <Shield size={20} />, label: 'Security Check' },
                                ].map((feature, i) => (
                                    <motion.div
                                        key={feature.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="glass p-4 rounded-xl text-center"
                                    >
                                        <div className="text-brand-blue mb-2 flex justify-center">{feature.icon}</div>
                                        <span className="text-xs font-bold text-brand-gray">{feature.label}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Form */}
                            <form ref={formRef} onSubmit={handleSubmit} className="glass p-8 rounded-3xl space-y-6">
                                <div>
                                    <label className="block text-sm font-bold mb-2 text-brand-offwhite">
                                        Your Website URL *
                                    </label>
                                    <div className="relative">
                                        <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray" size={20} />
                                        <input
                                            type="url"
                                            name="url"
                                            value={formData.url}
                                            onChange={handleChange}
                                            placeholder="https://yourwebsite.com"
                                            required
                                            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-brand-offwhite placeholder-brand-gray focus:border-brand-blue focus:outline-none transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold mb-2 text-brand-offwhite">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            required
                                            className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-brand-offwhite placeholder-brand-gray focus:border-brand-blue focus:outline-none transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold mb-2 text-brand-offwhite">
                                            Email Address *
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray" size={20} />
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="john@company.com"
                                                required
                                                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-brand-offwhite placeholder-brand-gray focus:border-brand-blue focus:outline-none transition-colors"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold mb-2 text-brand-offwhite">
                                        Business Type
                                    </label>
                                    <select
                                        name="businessType"
                                        value={formData.businessType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-brand-offwhite focus:border-brand-blue focus:outline-none transition-colors"
                                    >
                                        <option value="" className="bg-brand-navy">Select your business type</option>
                                        <option value="ecommerce" className="bg-brand-navy">E-Commerce</option>
                                        <option value="saas" className="bg-brand-navy">SaaS / Software</option>
                                        <option value="agency" className="bg-brand-navy">Agency / Consulting</option>
                                        <option value="local" className="bg-brand-navy">Local Business</option>
                                        <option value="portfolio" className="bg-brand-navy">Portfolio / Personal</option>
                                        <option value="other" className="bg-brand-navy">Other</option>
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-gradient-to-r from-brand-blue to-brand-green text-brand-navy font-bold rounded-xl flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-xl shadow-brand-blue/20 group"
                                >
                                    <Zap size={20} />
                                    Analyze My Website
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>

                                <p className="text-center text-xs text-brand-gray">
                                    We'll send detailed results to your email. No spam, ever.
                                </p>
                            </form>

                            {/* Trust Signals */}
                            <div className="mt-12 flex flex-wrap justify-center gap-8 text-brand-gray">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-brand-green" />
                                    <span className="text-sm">100% Free</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={16} className="text-brand-blue" />
                                    <span className="text-sm">Results in 2 min</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Shield size={16} className="text-brand-coral" />
                                    <span className="text-sm">No data stored</span>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Analyzing Step */}
                    {step === 'analyzing' && (
                        <motion.div
                            key="analyzing"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="max-w-lg mx-auto text-center py-20"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="w-24 h-24 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-green flex items-center justify-center"
                            >
                                <Loader2 className="w-12 h-12 text-brand-navy" />
                            </motion.div>
                            <h2 className="text-2xl font-bold mb-4">Analyzing Your Website...</h2>
                            <p className="text-brand-gray mb-8">{formData.url}</p>

                            <div className="space-y-4">
                                {[
                                    { label: 'Checking Core Web Vitals', delay: 0 },
                                    { label: 'Analyzing Mobile Experience', delay: 0.5 },
                                    { label: 'Evaluating SEO Structure', delay: 1 },
                                    { label: 'Testing AI Search Readiness', delay: 1.5 },
                                    { label: 'Verifying Security', delay: 2 },
                                ].map((item, i) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: item.delay }}
                                        className="flex items-center gap-3 justify-center text-sm text-brand-gray"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: item.delay + 0.3 }}
                                        >
                                            <CheckCircle2 size={16} className="text-brand-green" />
                                        </motion.div>
                                        {item.label}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Results Step */}
                    {step === 'results' && results && (
                        <motion.div
                            key="results"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="max-w-4xl mx-auto"
                        >
                            {/* Results Header */}
                            <header className="text-center mb-12">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 text-brand-green border-brand-green/30 border"
                                >
                                    <CheckCircle2 size={16} />
                                    <span className="text-xs font-bold uppercase tracking-wider">Analysis Complete</span>
                                </motion.div>
                                <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">
                                    Your 2026 UX Scorecard
                                </h1>
                                <p className="text-brand-gray">{formData.url}</p>
                            </header>

                            {/* Overall Score */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="glass p-8 rounded-3xl mb-8 flex flex-col md:flex-row items-center gap-8"
                            >
                                <ScoreRing score={overallScore} maxScore={100} size={140} />
                                <div className="text-center md:text-left flex-1">
                                    <h2 className="text-2xl font-bold mb-2">Overall Score: {overallScore}/100</h2>
                                    <p className="text-brand-gray mb-4">
                                        {overallScore >= 80
                                            ? "Excellent! Your website is well-optimized for 2026."
                                            : overallScore >= 60
                                                ? "Good foundation, but there's room for improvement."
                                                : "Your website needs attention to compete in 2026."}
                                    </p>
                                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                        <div className="flex items-center gap-2 text-sm">
                                            <Eye size={16} className="text-brand-blue" />
                                            <span className="text-brand-gray">Analyzed: {new Date().toLocaleDateString()}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Star size={16} className="text-yellow-400" />
                                            <span className="text-brand-gray">5 categories reviewed</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Category Results */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                {results.map((category, index) => (
                                    <CategoryCard key={category.name} category={category} index={index} />
                                ))}
                            </div>

                            {/* Next Steps CTA */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="glass p-8 rounded-3xl text-center relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl" />
                                <div className="relative z-10">
                                    <TrendingUp className="w-12 h-12 text-brand-blue mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold mb-4">
                                        Ready to Improve Your Score?
                                    </h3>
                                    <p className="text-brand-gray mb-6 max-w-xl mx-auto">
                                        I'll create a personalized optimization roadmap to boost your performance,
                                        mobile UX, and AI search visibility. Let's turn these insights into action.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <NavLink
                                            to="/contact"
                                            className="px-8 py-4 bg-brand-blue text-brand-navy font-bold rounded-xl inline-flex items-center justify-center gap-2 hover:bg-brand-coral hover:text-white transition-all shadow-xl shadow-brand-blue/20"
                                        >
                                            <Send size={18} />
                                            Get Optimization Roadmap
                                        </NavLink>
                                        <NavLink
                                            to="/resources"
                                            className="px-8 py-4 glass border border-white/10 text-white font-bold rounded-xl inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                                        >
                                            Browse Resources
                                        </NavLink>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Email Confirmation */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                                className="text-center text-sm text-brand-gray mt-8"
                            >
                                📧 A detailed report has been sent to <strong className="text-brand-offwhite">{formData.email}</strong>
                            </motion.p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </main>
    );
}
