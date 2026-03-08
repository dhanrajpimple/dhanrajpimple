import { motion } from "framer-motion";
import { GitBranch, CheckCircle2, ArrowRight, Star, Zap, Shield, Clock } from "lucide-react";
import { NavLink, type MetaFunction } from "react-router";
import { buildPageMeta, SITE_AUTHOR, SITE_URL } from "~/lib/seo";

export const meta: MetaFunction = () => [
    ...buildPageMeta({
        title: "CI/CD Pipeline Expert India | GitHub Actions, GitLab CI & Jenkins - Dhanraj Pimple",
        description:
            "Hire a CI/CD pipeline expert in India for automated testing, Docker builds, staging/production deployments, and zero-downtime strategies. GitHub Actions, GitLab CI, Jenkins, and AWS CodePipeline specialist.",
        path: "/ci-cd-pipeline-expert",
        keywords:
            "CI/CD pipeline expert India, GitHub Actions setup India, GitLab CI expert, Jenkins pipeline developer, automated deployment India, DevOps pipeline India, CI/CD consultant India, continuous integration expert",
    }),
    { "script:ld+json": { "@context": "https://schema.org", "@type": "Service", name: "CI/CD Pipeline Engineering", provider: { "@type": "Person", name: SITE_AUTHOR, url: SITE_URL }, serviceType: "DevOps Automation", description: "CI/CD pipeline design and implementation using GitHub Actions, GitLab CI, Jenkins for automated testing and zero-downtime deployments.", areaServed: ["India", "Global"] } },
];

const faqs = [
    { q: "What CI/CD tools do you work with?", a: "GitHub Actions, GitLab CI/CD, Jenkins, and AWS CodePipeline. I choose the right tool based on your existing stack and team preferences." },
    { q: "What does a typical CI/CD pipeline include?", a: "Code linting, unit & integration testing, Docker build & push to ECR/GCR, staging deployment with smoke tests, and production deployment with blue/green or canary strategies." },
    { q: "How long does it take to set up a CI/CD pipeline?", a: "A basic CI/CD pipeline (test → build → deploy) takes 3–5 days. Complex pipelines with multi-environment, approval gates, and rollback strategies take 1–2 weeks." },
    { q: "Can you set up CI/CD for a monorepo?", a: "Yes. I configure path-based triggers in GitHub Actions or GitLab CI to only run relevant pipeline jobs when specific services in a monorepo are changed, saving significant CI time." },
];

export default function CiCdPipelineExpert() {
    return (
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container mx-auto px-6 py-16 space-y-24 max-w-6xl">
            <section className="glass p-10 md:p-16 rounded-3xl relative overflow-hidden border border-brand-blue/20">
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-blue/20 text-brand-blue mb-6">
                    <GitBranch size={16} />
                    <span className="text-xs font-bold uppercase tracking-wider">GitHub Actions · GitLab CI · Jenkins · Zero-Downtime</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                    CI/CD Pipeline Expert <span className="text-gradient">for Startups & Scale-Ups</span>
                </h1>
                <p className="text-lg text-brand-gray mb-4 max-w-3xl leading-relaxed">
                    Eliminate manual deployments and shipping anxiety with a dedicated CI/CD pipeline expert in India. I design and
                    implement fully automated pipelines using GitHub Actions, GitLab CI, or Jenkins — covering automated testing,
                    Docker builds, staging deployments, and zero-downtime production releases.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <NavLink to="/contact" className="px-8 py-4 bg-brand-blue text-brand-navy font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-brand-coral hover:text-white transition-all shadow-xl shadow-brand-blue/20">
                        Get Your Pipeline Set Up <ArrowRight size={20} />
                    </NavLink>
                    <NavLink to="/hire-devops-engineer" className="px-8 py-4 glass border border-white/10 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                        Hire DevOps Engineer
                    </NavLink>
                </div>
            </section>

            <section>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-10">CI/CD Pipeline Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { icon: <Zap />, title: "Pipeline Design & Implementation", desc: "End-to-end CI/CD pipeline from code commit to production — automated testing, Docker build, registry push, and deployment." },
                        { icon: <Shield />, title: "Zero-Downtime Deployment Strategies", desc: "Blue/green, canary, and rolling deployments with automatic rollback on health check failure." },
                        { icon: <Clock />, title: "Multi-Environment Pipelines", desc: "Dev → Staging → Production pipelines with approval gates, environment-specific configs, and secret management." },
                        { icon: <GitBranch />, title: "Pipeline Optimization", desc: "Cache dependencies, parallelize test jobs, optimize Docker layer caching — reduce CI build times by 50–70%." },
                    ].map((item) => (
                        <div key={item.title} className="flex gap-4 p-6 bg-white/5 rounded-2xl border border-white/5">
                            <div className="text-brand-blue shrink-0 mt-1">{item.icon}</div>
                            <div>
                                <h3 className="font-bold mb-2 text-brand-offwhite">{item.title}</h3>
                                <p className="text-xs text-brand-gray leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-center">FAQ — CI/CD Pipeline Expert</h2>
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
                <h2 className="text-2xl font-display font-bold mb-6">Stop Deploying Manually. Automate Everything.</h2>
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {["GitHub Actions expert", "Zero-downtime deployment", "Setup in days", "Fixed-price"].map((t) => (
                        <span key={t} className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm border border-white/10"><Star size={14} className="text-brand-blue" /> {t}</span>
                    ))}
                </div>
                <NavLink to="/contact" className="px-10 py-4 bg-brand-blue text-brand-navy font-bold rounded-xl inline-flex items-center gap-2 hover:bg-brand-coral hover:text-white transition-all">
                    Start Automating Your Deployments <ArrowRight size={20} />
                </NavLink>
            </section>

            <section className="border-t border-white/5 pt-12">
                <h2 className="text-xl font-bold mb-6">Related Services</h2>
                <div className="flex flex-wrap gap-4">
                    <NavLink to="/hire-devops-engineer" className="px-6 py-3 glass rounded-xl text-sm font-bold hover:border-brand-blue/40 border border-white/10 transition-all">Hire DevOps Engineer →</NavLink>
                    <NavLink to="/cloud-infrastructure-engineer" className="px-6 py-3 glass rounded-xl text-sm font-bold hover:border-brand-blue/40 border border-white/10 transition-all">Cloud Infrastructure Engineer →</NavLink>
                    <NavLink to="/services/devops" className="px-6 py-3 glass rounded-xl text-sm font-bold hover:border-brand-blue/40 border border-white/10 transition-all">DevOps Services →</NavLink>
                </div>
            </section>
        </motion.main>
    );
}
