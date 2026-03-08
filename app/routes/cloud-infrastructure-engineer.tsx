import { motion } from "framer-motion";
import { Cloud, CheckCircle2, ArrowRight, Star, Server, Shield, Zap } from "lucide-react";
import { NavLink, type MetaFunction } from "react-router";
import { buildPageMeta, SITE_AUTHOR, SITE_URL } from "~/lib/seo";

export const meta: MetaFunction = () => [
    ...buildPageMeta({
        title: "Cloud Infrastructure Engineer India | AWS, GCP & Terraform Expert - Dhanraj Pimple",
        description:
            "Hire a cloud infrastructure engineer in India for AWS/GCP architecture design, Terraform IaC, VPC setup, Kubernetes clusters, and cloud cost optimization. Experienced cloud engineer for startups and enterprises.",
        path: "/cloud-infrastructure-engineer",
        keywords:
            "cloud infrastructure engineer India, AWS infrastructure engineer, GCP cloud architect India, Terraform engineer India, cloud architect India, Kubernetes engineer India, cloud migration engineer India, hire cloud engineer India",
    }),
    { "script:ld+json": { "@context": "https://schema.org", "@type": "Service", name: "Cloud Infrastructure Engineering", provider: { "@type": "Person", name: SITE_AUTHOR, url: SITE_URL }, serviceType: "Cloud Architecture", description: "AWS/GCP cloud architecture, Terraform IaC, Kubernetes setup, VPC design, and cloud cost optimization for startups and enterprises.", areaServed: ["India", "Global"] } },
];

const faqs = [
    { q: "What cloud providers do you work with?", a: "Primarily AWS and GCP. I design and implement VPC, EC2, ECS, EKS, S3, RDS, Lambda, CloudFront, IAM on AWS, and equivalent services on GCP." },
    { q: "What is Infrastructure as Code and why do I need it?", a: "IaC means defining your cloud infrastructure in version-controlled Terraform files. This ensures environments are reproducible, prevents configuration drift, and enables disaster recovery in minutes." },
    { q: "Can you help reduce our cloud bill?", a: "Yes. Common strategies include EC2 rightsizing, Reserved Instances for predictable workloads, S3 lifecycle policies, auto-scaling setup, and removing unused resources. Typical savings: 40–60%." },
    { q: "Do you design multi-account or multi-region AWS setups?", a: "Yes. I design AWS Organizations with separate accounts for Dev/Staging/Production, cross-account IAM roles, and multi-region architectures for disaster recovery and low-latency global deployments." },
];

export default function CloudInfrastructureEngineer() {
    return (
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container mx-auto px-6 py-16 space-y-24 max-w-6xl">
            <section className="glass p-10 md:p-16 rounded-3xl relative overflow-hidden border border-brand-blue/20">
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-blue/20 text-brand-blue mb-6">
                    <Cloud size={16} />
                    <span className="text-xs font-bold uppercase tracking-wider">AWS · GCP · Terraform · Kubernetes</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                    Cloud Infrastructure Engineer <span className="text-gradient">for Modern Startups</span>
                </h1>
                <p className="text-lg text-brand-gray mb-4 max-w-3xl leading-relaxed">
                    Design and build production-grade cloud infrastructure with a dedicated cloud infrastructure engineer in India.
                    I architect AWS and GCP environments using Terraform IaC, Kubernetes, proper VPC design, IAM least-privilege
                    security, and monitoring — built to scale from 100 to 10M users.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <NavLink to="/contact" className="px-8 py-4 bg-brand-blue text-brand-navy font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-brand-coral hover:text-white transition-all shadow-xl shadow-brand-blue/20">
                        Design My Cloud Infrastructure <ArrowRight size={20} />
                    </NavLink>
                    <NavLink to="/hire-devops-engineer" className="px-8 py-4 glass border border-white/10 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                        Hire DevOps Engineer
                    </NavLink>
                </div>
            </section>

            <section>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-10">Cloud Infrastructure Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { icon: <Server />, title: "AWS / GCP Architecture Design", desc: "Complete cloud architecture: VPC, subnets, security groups, EC2/ECS/EKS, RDS, S3, CloudFront, Lambda, and Route53." },
                        { icon: <Zap />, title: "Terraform Infrastructure as Code", desc: "Modular Terraform configs for all cloud resources, remote state in S3 + DynamoDB locking, and CI/CD integration for infrastructure changes." },
                        { icon: <Cloud />, title: "Kubernetes Cluster Engineering", desc: "EKS or GKE provisioning with Helm charts, Horizontal Pod Autoscaling, Cluster Autoscaler, ingress controllers, and namespacing." },
                        { icon: <Shield />, title: "Cloud Security & Cost Optimization", desc: "IAM least-privilege, secrets management, network security groups, compliance hardening, and cloud cost reduction strategies." },
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
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-center">FAQ — Cloud Infrastructure Engineer</h2>
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
                <h2 className="text-2xl font-display font-bold mb-6">Build Cloud Infrastructure That Scales With You</h2>
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {["Terraform IaC", "AWS & GCP certified patterns", "Fixed-price", "40–60% cost savings"].map((t) => (
                        <span key={t} className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm border border-white/10"><Star size={14} className="text-brand-blue" /> {t}</span>
                    ))}
                </div>
                <NavLink to="/contact" className="px-10 py-4 bg-brand-blue text-brand-navy font-bold rounded-xl inline-flex items-center gap-2 hover:bg-brand-coral hover:text-white transition-all">
                    Get a Cloud Architecture Review <ArrowRight size={20} />
                </NavLink>
            </section>

            <section className="border-t border-white/5 pt-12">
                <h2 className="text-xl font-bold mb-6">Related Services</h2>
                <div className="flex flex-wrap gap-4">
                    <NavLink to="/hire-devops-engineer" className="px-6 py-3 glass rounded-xl text-sm font-bold hover:border-brand-blue/40 border border-white/10 transition-all">Hire DevOps Engineer →</NavLink>
                    <NavLink to="/ci-cd-pipeline-expert" className="px-6 py-3 glass rounded-xl text-sm font-bold hover:border-brand-blue/40 border border-white/10 transition-all">CI/CD Pipeline Expert →</NavLink>
                    <NavLink to="/hire-fastapi-developer" className="px-6 py-3 glass rounded-xl text-sm font-bold hover:border-brand-blue/40 border border-white/10 transition-all">Hire FastAPI Developer →</NavLink>
                </div>
            </section>
        </motion.main>
    );
}
