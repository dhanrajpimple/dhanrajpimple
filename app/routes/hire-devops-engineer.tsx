import { motion } from "framer-motion";
import { CheckCircle2, Zap, Server, Shield, GitBranch, Cloud, ArrowRight, Star, Terminal } from "lucide-react";
import { NavLink, type MetaFunction } from "react-router";
import { buildPageMeta, SITE_AUTHOR, SITE_URL } from "~/lib/seo";

export const meta: MetaFunction = () => [
    ...buildPageMeta({
        title: "Hire Freelance DevOps Engineer India | CI/CD & Cloud Infrastructure Expert - Dhanraj Pimple",
        description:
            "Hire a freelance DevOps engineer in India for CI/CD pipeline setup, Docker, Kubernetes, Terraform, AWS infrastructure, and cloud automation. Serving startups in Pune, Maharashtra & globally. Fixed-price, direct execution.",
        path: "/hire-devops-engineer",
        keywords:
            "hire DevOps engineer India, freelance DevOps engineer India, CI/CD pipeline expert, Docker Kubernetes expert India, AWS infrastructure engineer, cloud automation expert, Terraform India, DevOps consultant India, DevOps engineer Pune",
    }),
    {
        "script:ld+json": {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Freelance DevOps Engineering",
            provider: { "@type": "Person", name: SITE_AUTHOR, url: SITE_URL },
            serviceType: "DevOps & Cloud Infrastructure",
            description:
                "End-to-end DevOps services: CI/CD pipelines, Docker & Kubernetes, Terraform IaC, AWS/GCP setup, monitoring with Prometheus/Grafana, and cloud automation.",
            areaServed: ["India", "Pune", "Satara", "Maharashtra"],
            offers: {
                "@type": "Offer",
                price: "14999",
                priceCurrency: "INR",
                description: "Starting price for DevOps project engagement",
            },
        },
    },
    {
        "script:ld+json": {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What DevOps services do you offer as a freelance DevOps engineer in India?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "I offer CI/CD pipeline design (GitHub Actions, GitLab CI, Jenkins), Docker containerization, Kubernetes orchestration (EKS, GKE), Infrastructure as Code with Terraform, cloud setup on AWS/GCP, monitoring with Prometheus and Grafana, and GitOps with ArgoCD.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How much does it cost to hire a DevOps engineer in India?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "DevOps engagement costs depend on scope. A basic CI/CD pipeline setup starts at Rs. 14,999. Full cloud infrastructure with Kubernetes, IaC, and monitoring is scoped per project, typically Rs. 30,000–1,00,000. I offer fixed-price quotes after a discovery call.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can you set up a CI/CD pipeline for my startup?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. I design and implement CI/CD pipelines using GitHub Actions, GitLab CI/CD, or Jenkins tailored to your tech stack. This includes automated testing, Docker build and push, staging and production deployment, and rollback strategies.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Do you work with AWS, GCP, and Azure?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Primarily AWS and GCP. Services I configure include EC2, ECS, EKS, S3, RDS, VPC, Lambda, IAM, CloudFront, and managed Kubernetes. I also work with Vercel, Railway, and DigitalOcean for simpler deployments.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is Terraform and can you help with Infrastructure as Code?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Terraform is a tool for managing cloud infrastructure through code files rather than manual configuration. I write modular Terraform configs for VPC, compute, databases, and networking — ensuring your infrastructure is reproducible, versioned, and audit-ready.",
                    },
                },
            ],
        },
    },
];

const highlights = [
    {
        icon: <GitBranch className="w-7 h-7 text-brand-blue" />,
        title: "CI/CD Pipeline Design",
        desc: "Automated pipelines with GitHub Actions, GitLab CI, or Jenkins — covering build, test, staging, and production deployment with rollback strategies.",
    },
    {
        icon: <Terminal className="w-7 h-7 text-brand-blue" />,
        title: "Infrastructure as Code",
        desc: "Terraform modules for VPC, EC2, ECS, EKS, RDS, and networking. Reproducible, versioned cloud infrastructure you can audit and modify anytime.",
    },
    {
        icon: <Cloud className="w-7 h-7 text-brand-blue" />,
        title: "Docker & Kubernetes",
        desc: "Multi-stage Docker builds, Docker Compose for local dev, and Kubernetes (EKS/GKE) for auto-scaling, self-healing microservice deployments.",
    },
    {
        icon: <Server className="w-7 h-7 text-brand-blue" />,
        title: "Cloud Infrastructure (AWS/GCP)",
        desc: "EC2, ECS, Lambda, S3, RDS, CloudFront, VPC, IAM policies, Route53 — entire production cloud architecture designed for your scale.",
    },
    {
        icon: <Zap className="w-7 h-7 text-brand-blue" />,
        title: "Monitoring & Observability",
        desc: "Prometheus + Grafana dashboards, Loki for centralized logging, Alertmanager with Slack/PagerDuty integration, and custom SLI/SLO tracking.",
    },
    {
        icon: <Shield className="w-7 h-7 text-brand-blue" />,
        title: "Security & Compliance",
        desc: "IAM least-privilege policies, secret management with AWS Secrets Manager, network security groups, vulnerability scanning in CI pipelines.",
    },
];

const faqs = [
    {
        q: "What DevOps services do you offer as a freelance DevOps engineer in India?",
        a: "CI/CD pipeline design (GitHub Actions, GitLab CI, Jenkins), Docker containerization, Kubernetes orchestration (EKS, GKE), Infrastructure as Code with Terraform, AWS/GCP cloud setup, monitoring with Prometheus and Grafana, and GitOps with ArgoCD.",
    },
    {
        q: "How much does it cost to hire a DevOps engineer in India?",
        a: "A basic CI/CD pipeline setup starts at Rs. 14,999. Full cloud infrastructure with Kubernetes, IaC, and monitoring is scoped per project, typically Rs. 30,000–1,00,000. I provide fixed-price quotes after a free discovery call.",
    },
    {
        q: "Can you set up a CI/CD pipeline for my startup?",
        a: "Yes. I design and implement CI/CD pipelines using GitHub Actions, GitLab CI/CD, or Jenkins — automated testing, Docker build/push to registry, staging and production deployment, and rollback strategies.",
    },
    {
        q: "Do you work with AWS, GCP, and Azure?",
        a: "Primarily AWS and GCP. I configure EC2, ECS, EKS, S3, RDS, VPC, Lambda, IAM, CloudFront, and managed Kubernetes. I also support Vercel, Railway, and DigitalOcean.",
    },
    {
        q: "What is Infrastructure as Code (IaC) and how does it benefit my startup?",
        a: "IaC means your cloud infrastructure is defined in version-controlled code files (Terraform). This ensures your environments are reproducible, prevents configuration drift between staging and production, and makes disaster recovery fast and reliable.",
    },
];

export default function HireDevopsEngineer() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container mx-auto px-6 py-16 space-y-24 max-w-6xl"
        >
            {/* Hero */}
            <section className="relative">
                <div className="glass p-10 md:p-16 rounded-3xl relative overflow-hidden border border-brand-blue/20">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-blue/20 text-brand-blue mb-6">
                        <Cloud size={16} />
                        <span className="text-xs font-bold uppercase tracking-wider">DevOps · CI/CD · Cloud Infrastructure</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                        Hire a Freelance <span className="text-gradient">DevOps Engineer</span> in India
                    </h1>
                    <p className="text-lg text-brand-gray mb-4 max-w-3xl leading-relaxed">
                        Eliminate deployment bottlenecks and infrastructure chaos with a freelance DevOps engineer in India who delivers
                        CI/CD pipelines, Docker & Kubernetes setups, Terraform IaC, AWS cloud architecture, and production monitoring —
                        from discovery to live in weeks.
                    </p>
                    <p className="text-base text-brand-gray/90 mb-10 max-w-3xl">
                        Whether you're a startup moving from manual deploys to a fully automated pipeline, or an established product
                        needing Kubernetes migration and observability, I deliver as a CI/CD pipeline expert and cloud infrastructure
                        engineer with direct execution — no agency middlemen.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <NavLink
                            to="/contact"
                            className="px-8 py-4 bg-brand-blue text-brand-navy font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-brand-coral hover:text-white transition-all shadow-xl shadow-brand-blue/20"
                        >
                            Start Your DevOps Project <ArrowRight size={20} />
                        </NavLink>
                        <NavLink
                            to="/services/devops"
                            className="px-8 py-4 glass border border-white/10 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                        >
                            View DevOps Services
                        </NavLink>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
                    CI/CD · Docker · Kubernetes · Terraform · AWS
                </h2>
                <p className="text-brand-gray text-center max-w-2xl mx-auto mb-12">
                    End-to-end DevOps automation and cloud infrastructure for startups and scale-ups that need to ship faster
                    with fewer incidents.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {highlights.map((h, i) => (
                        <motion.div
                            key={h.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.07 }}
                            viewport={{ once: true }}
                            className="glass p-8 rounded-3xl border border-white/5 hover:border-brand-blue/30 transition-all"
                        >
                            <div className="mb-5">{h.icon}</div>
                            <h3 className="text-xl font-bold mb-3">{h.title}</h3>
                            <p className="text-brand-gray text-sm leading-relaxed">{h.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Tech Stack */}
            <section className="glass p-10 rounded-3xl border border-white/5">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">DevOps Tech Stack</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { label: "CI/CD", items: ["GitHub Actions", "GitLab CI", "Jenkins", "ArgoCD", "Flux"] },
                        { label: "Containers & Orchestration", items: ["Docker", "Docker Compose", "Kubernetes", "Helm", "AWS EKS", "GKE"] },
                        { label: "Cloud & IaC", items: ["AWS", "GCP", "Terraform", "Ansible", "Prometheus", "Grafana", "Loki"] },
                    ].map((group) => (
                        <div key={group.label}>
                            <h3 className="text-brand-blue font-bold uppercase text-xs tracking-widest mb-4">{group.label}</h3>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <span key={item} className="px-4 py-2 glass rounded-full text-xs font-bold text-brand-offwhite border border-white/10">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Deliverables */}
            <section>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-10">DevOps Deliverables</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { title: "CI/CD Pipeline Setup", desc: "Fully automated test → build → deploy pipeline. Staging environment gating, production deployments with zero-downtime strategies." },
                        { title: "Docker Containerization", desc: "Multi-stage Dockerfiles for your app stack, Docker Compose for local development, and private image registry setup on ECR/GCR." },
                        { title: "Kubernetes Cluster Setup", desc: "EKS or GKE cluster provisioning, namespace design, Helm chart creation, Horizontal Pod Autoscaling, and ingress configuration." },
                        { title: "Terraform Infrastructure", desc: "Modular Terraform for VPC, subnets, EC2/ECS, RDS, S3, IAM, and CDN. Remote state in S3 + DynamoDB locking for team workflows." },
                        { title: "Monitoring & Alerting", desc: "Prometheus metrics collection, Grafana dashboards, Loki centralized logging, and Alertmanager with Slack/PagerDuty notifications." },
                        { title: "Security Hardening", desc: "IAM least-privilege, secrets management (AWS Secrets Manager), SAST/DAST in CI pipelines, network security group rules." },
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

            {/* Trust */}
            <section className="glass p-10 rounded-3xl border border-brand-blue/20 text-center">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Why Hire Me as Your DevOps Engineer?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    {[
                        { stat: "15+", label: "DevOps Pipelines Shipped" },
                        { stat: "60%", label: "Avg Cloud Cost Reduction" },
                        { stat: "< 2wks", label: "CI/CD Setup Timeline" },
                    ].map((s) => (
                        <div key={s.label}>
                            <div className="text-4xl font-bold text-brand-blue mb-2">{s.stat}</div>
                            <div className="text-brand-gray text-sm">{s.label}</div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {["Direct communication", "Fixed-price quotes", "All config on GitHub", "Post-launch support"].map((t) => (
                        <span key={t} className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm border border-white/10">
                            <Star size={14} className="text-brand-blue" /> {t}
                        </span>
                    ))}
                </div>
                <NavLink
                    to="/contact"
                    className="px-10 py-4 bg-brand-blue text-brand-navy font-bold rounded-xl inline-flex items-center gap-2 hover:bg-brand-coral hover:text-white transition-all shadow-xl shadow-brand-blue/20"
                >
                    Get a Free DevOps Audit <ArrowRight size={20} />
                </NavLink>
            </section>

            {/* FAQ */}
            <section>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-center">
                    Frequently Asked Questions — DevOps Engineering
                </h2>
                <div className="space-y-6 max-w-3xl mx-auto">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.06 }}
                            viewport={{ once: true }}
                            className="glass p-8 rounded-2xl border border-white/5"
                        >
                            <p className="font-bold text-brand-offwhite mb-3">{faq.q}</p>
                            <p className="text-brand-gray text-sm leading-relaxed">{faq.a}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Internal links */}
            <section className="border-t border-white/5 pt-12">
                <h2 className="text-xl font-bold mb-6">Related Services</h2>
                <div className="flex flex-wrap gap-4">
                    <NavLink to="/hire-fastapi-developer" className="px-6 py-3 glass rounded-xl text-sm font-bold hover:border-brand-blue/40 border border-white/10 transition-all">Hire FastAPI Developer →</NavLink>
                    <NavLink to="/ci-cd-pipeline-expert" className="px-6 py-3 glass rounded-xl text-sm font-bold hover:border-brand-blue/40 border border-white/10 transition-all">CI/CD Pipeline Expert →</NavLink>
                    <NavLink to="/cloud-infrastructure-engineer" className="px-6 py-3 glass rounded-xl text-sm font-bold hover:border-brand-blue/40 border border-white/10 transition-all">Cloud Infrastructure →</NavLink>
                    <NavLink to="/services/devops" className="px-6 py-3 glass rounded-xl text-sm font-bold hover:border-brand-blue/40 border border-white/10 transition-all">DevOps Services →</NavLink>
                    <NavLink to="/blog" className="px-6 py-3 glass rounded-xl text-sm font-bold hover:border-brand-blue/40 border border-white/10 transition-all">Read DevOps Blog →</NavLink>
                </div>
            </section>
        </motion.main>
    );
}
