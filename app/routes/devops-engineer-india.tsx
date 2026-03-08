import { motion } from "framer-motion";
import { Cloud, ArrowRight, Star, Shield, Zap, Terminal, CheckCircle2 } from "lucide-react";
import { NavLink, type MetaFunction } from "react-router";
import { buildPageMeta, SITE_AUTHOR, SITE_URL } from "~/lib/seo";

export const meta: MetaFunction = () => [
    ...buildPageMeta({
        title: "Freelance DevOps Engineer India | Hire Cloud & Automation Expert - Dhanraj Pimple",
        description:
            "Hire a freelance DevOps engineer in India for remote CI/CD pipeline setup, Docker, Kubernetes, AWS infrastructure, Terraform IaC, and cloud automation. Expert DevOps consultant for Indian startups and global teams.",
        path: "/devops-engineer-india",
        keywords:
            "DevOps engineer India, freelance DevOps engineer India, cloud automation engineer India, hire cloud engineer India, CI/CD expert India, Kubernetes expert India, Terraform engineer India, AWS DevOps India",
    }),
    {
        "script:ld+json": {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Freelance DevOps Engineering India",
            provider: { "@type": "Person", name: SITE_AUTHOR, url: SITE_URL },
            serviceType: "DevOps & Cloud Infrastructure",
            description: "Freelance DevOps engineering services across India: CI/CD, Docker, Kubernetes, Terraform, AWS, monitoring, and cloud automation.",
            areaServed: ["India", "Mumbai", "Bangalore", "Hyderabad", "Delhi", "Chennai", "Pune"],
        },
    },
    {
        "script:ld+json": {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
                { "@type": "Question", name: "Do you work remotely with companies across India?", acceptedAnswer: { "@type": "Answer", text: "Yes. I work as a remote DevOps engineer with startups and companies across India — Mumbai, Bangalore, Hyderabad, Delhi, Chennai, and beyond. I operate in IST timezone with async communication and weekly sync calls." } },
                { "@type": "Question", name: "What DevOps tools and cloud platforms do you work with?", acceptedAnswer: { "@type": "Answer", text: "GitHub Actions, GitLab CI, Jenkins, Docker, Kubernetes (EKS/GKE), Terraform, Ansible, AWS, GCP, Prometheus, Grafana, Loki, and ArgoCD for GitOps workflows." } },
                { "@type": "Question", name: "How can a startup in India benefit from a freelance DevOps engineer?", acceptedAnswer: { "@type": "Answer", text: "A freelance DevOps engineer gives Indian startups access to senior-level infrastructure expertise without the cost of a full-time DevOps hire. You get CI/CD pipelines, production infrastructure, and monitoring set up in weeks rather than months." } },
            ],
        },
    },
];

const faqs = [
    { q: "Do you work remotely with companies across India?", a: "Yes. I work remotely with startups and companies across India — Mumbai, Bangalore, Hyderabad, Delhi, Chennai, and beyond. IST timezone, async-first communication." },
    { q: "What DevOps tools and cloud platforms do you work with?", a: "GitHub Actions, GitLab CI, Jenkins, Docker, Kubernetes (EKS/GKE), Terraform, Ansible, AWS, GCP, Prometheus, Grafana, Loki, and ArgoCD." },
    { q: "How can an Indian startup benefit from a freelance DevOps engineer?", a: "Access senior DevOps expertise on a project basis without a full-time hire cost. Get CI/CD pipelines, Kubernetes clusters, and monitoring set up in weeks." },
    { q: "Do you offer ongoing DevOps retainer support?", a: "Yes. Monthly retainer packages starting at Rs. 15,000/month for ongoing infrastructure monitoring, pipeline maintenance, security updates, and cloud cost optimization." },
];

export default function DevopsEngineerIndia() {
    return (
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container mx-auto px-6 py-16 space-y-24 max-w-6xl">
            <section className="glass p-10 md:p-16 rounded-3xl relative overflow-hidden border border-brand-blue/20">
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-blue/20 text-brand-blue mb-6">
                    <Cloud size={16} />
                    <span className="text-xs font-bold uppercase tracking-wider">Remote · India-wide · IST Timezone</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                    Freelance DevOps Engineer <span className="text-gradient">in India</span> — Remote & Async
                </h1>
                <p className="text-lg text-brand-gray mb-4 max-w-3xl leading-relaxed">
                    Hire Dhanraj Pimple as your freelance DevOps engineer in India for CI/CD pipeline automation, Docker &
                    Kubernetes setup, AWS/GCP cloud architecture, Terraform infrastructure as code, and production monitoring —
                    fully remote with IST timezone alignment.
                </p>
                <p className="text-base text-brand-gray/90 mb-10 max-w-3xl">
                    Indian startups in Mumbai, Bangalore, Hyderabad, Delhi, Pune, and Chennai hire me as their on-demand DevOps
                    consultant for infrastructure setup, cloud cost optimization, and pipeline automation — at a fraction of the
                    cost of a full-time DevOps engineer.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <NavLink to="/contact" className="px-8 py-4 bg-brand-blue text-brand-navy font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-brand-coral hover:text-white transition-all shadow-xl shadow-brand-blue/20">
                        Hire Me as Your DevOps Engineer <ArrowRight size={20} />
                    </NavLink>
                    <NavLink to="/services/devops" className="px-8 py-4 glass border border-white/10 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                        View DevOps Services
                    </NavLink>
                </div>
            </section>

            <section>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">Remote DevOps Services for Indian Startups</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: <Zap className="w-6 h-6 text-brand-blue" />, title: "CI/CD Pipeline Automation", desc: "GitHub Actions, GitLab CI, and Jenkins pipelines for automated testing, Docker builds, and zero-downtime deployments." },
                        { icon: <Terminal className="w-6 h-6 text-brand-blue" />, title: "Cloud Infrastructure (AWS/GCP)", desc: "EC2, ECS, EKS, S3, RDS, VPC, and IAM setup with Terraform IaC for reproducible, version-controlled infrastructure." },
                        { icon: <Shield className="w-6 h-6 text-brand-blue" />, title: "Monitoring & Cost Optimization", desc: "Prometheus + Grafana monitoring, Loki logging, and AWS cost optimization — typically 40–60% cloud cost reduction." },
                    ].map((s, i) => (
                        <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }} viewport={{ once: true }}
                            className="glass p-8 rounded-3xl border border-white/5 hover:border-brand-blue/30 transition-all">
                            <div className="mb-5">{s.icon}</div>
                            <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                            <p className="text-brand-gray text-sm leading-relaxed">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="glass p-10 rounded-3xl border border-white/5">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">Cities & Companies I Serve Across India</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["Mumbai", "Bangalore", "Hyderabad", "Delhi NCR", "Pune", "Chennai", "Ahmedabad", "Kolkata"].map((city) => (
                        <div key={city} className="glass rounded-2xl p-4 text-center border border-white/5">
                            <p className="font-bold text-sm">{city}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-10">Why Indian Startups Hire a Freelance DevOps Engineer</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { title: "No Full-Time Hire Cost", desc: "Get senior DevOps expertise on-demand without a Rs. 25–40 LPA full-time hire. Pay per project or retainer." },
                        { title: "Faster Time-to-Production", desc: "Get your CI/CD pipeline, Kubernetes cluster, and monitoring live in 2–4 weeks instead of months." },
                        { title: "IST Timezone Alignment", desc: "Work with a developer who is online during Indian business hours — real-time communication, no timezone friction." },
                        { title: "Cloud Cost Savings", desc: "Proper rightsizing, reserved instances, and auto-scaling typically reduce AWS/GCP bills by 40–60%." },
                    ].map((item) => (
                        <div key={item.title} className="flex gap-4 p-6 bg-white/5 rounded-2xl border border-white/5">
                            <CheckCircle2 className="text-brand-green shrink-0 mt-1" size={20} />
                            <div>
                                <h3 className="font-bold mb-2 text-brand-offwhite">{item.title}</h3>
                                <p className="text-xs text-brand-gray leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-center">FAQ — DevOps Engineer India</h2>
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
                <h2 className="text-2xl font-display font-bold mb-6">Hire a Freelance DevOps Engineer in India Today</h2>
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {["Remote-first", "IST timezone", "Fixed-price or retainer", "Senior-level expertise"].map((t) => (
                        <span key={t} className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm border border-white/10"><Star size={14} className="text-brand-blue" /> {t}</span>
                    ))}
                </div>
                <NavLink to="/contact" className="px-10 py-4 bg-brand-blue text-brand-navy font-bold rounded-xl inline-flex items-center gap-2 hover:bg-brand-coral hover:text-white transition-all">
                    Get a Free DevOps Consultation <ArrowRight size={20} />
                </NavLink>
            </section>

            <section className="border-t border-white/5 pt-12">
                <h2 className="text-xl font-bold mb-6">Related Services</h2>
                <div className="flex flex-wrap gap-4">
                    <NavLink to="/hire-devops-engineer" className="px-6 py-3 glass rounded-xl text-sm font-bold hover:border-brand-blue/40 border border-white/10 transition-all">Hire DevOps Engineer →</NavLink>
                    <NavLink to="/ci-cd-pipeline-expert" className="px-6 py-3 glass rounded-xl text-sm font-bold hover:border-brand-blue/40 border border-white/10 transition-all">CI/CD Pipeline Expert →</NavLink>
                    <NavLink to="/cloud-infrastructure-engineer" className="px-6 py-3 glass rounded-xl text-sm font-bold hover:border-brand-blue/40 border border-white/10 transition-all">Cloud Infrastructure Engineer →</NavLink>
                    <NavLink to="/hire-fastapi-developer" className="px-6 py-3 glass rounded-xl text-sm font-bold hover:border-brand-blue/40 border border-white/10 transition-all">Hire FastAPI Developer →</NavLink>
                </div>
            </section>
        </motion.main>
    );
}
