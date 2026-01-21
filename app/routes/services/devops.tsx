import { motion } from "framer-motion";
import { CheckCircle2, Zap, Shield, Server, Terminal, ArrowRight } from "lucide-react";
import { NavLink, type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
    return [
        { title: "DevOps Expert & Cloud Automation Satara | AI Infrastructure Pune" },
        { name: "description", content: "Professional DevOps automation, CI/CD pipeline design, and Kubernetes consulting. Specializing in AI model deployment and scalable cloud infrastructure for global enterprises from Pune and Satara." },
        { name: "keywords", content: "DevOps Expert Satara, AI Infrastructure Pune, AWS Consultant Maharashtra, Kubernetes Specialist Kolhapur, Automation Expert Sangli, CI/CD Pipeline Pune, Cloud Migration India, MLOps Specialist" },
    ];
};

export default function DevOpsService() {
    const highlights = [
        { title: "CI/CD Pipeline Design", desc: "Automating the software delivery process from code commit to production deployment.", icon: <Zap className="text-brand-blue" /> },
        { title: "Infrastructure as Code", desc: "Managing and provisioning infrastructure through machine-readable definition files (Terraform).", icon: <Server className="text-brand-blue" /> },
        { title: "Cloud Optimization", desc: "Performance tuning and cost optimization of AWS, Azure, and GCP resources.", icon: <Shield className="text-brand-blue" /> }
    ];

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-16">
            <div className="glass p-10 md:p-16 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Streamline Your <span className="text-brand-blue">Deployment</span> Pipeline</h2>
                <p className="text-lg text-brand-gray mb-10 max-w-2xl leading-relaxed">
                    I provide end-to-end DevOps solutions that eliminate manual deployment pain, reduce downtime, and accelerate your release cycles.
                </p>
                <NavLink to="/contact" className="px-8 py-4 bg-brand-blue text-brand-navy font-bold rounded-xl inline-flex items-center gap-2 hover:bg-brand-coral hover:text-white transition-all">
                    Start Your Migration <ArrowRight size={20} />
                </NavLink>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {highlights.map(h => (
                    <div key={h.title} className="glass p-8 rounded-2xl border border-white/5">
                        <div className="mb-6">{h.icon}</div>
                        <h3 className="text-xl font-bold mb-4">{h.title}</h3>
                        <p className="text-sm text-brand-gray leading-relaxed">{h.desc}</p>
                    </div>
                ))}
            </div>

            <div className="space-y-12">
                <h3 className="text-2xl md:text-3xl font-display font-bold">What I Offer</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex gap-4 p-6 bg-white/5 rounded-2xl">
                        <CheckCircle2 className="text-brand-green shrink-0" />
                        <div>
                            <h4 className="font-bold mb-2 text-brand-offwhite">CI/CD Pipeline Setup</h4>
                            <p className="text-xs text-brand-gray">Jenkins, GitLab CI, GitHub Actions, and AWS CodePipeline optimization.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-6 bg-white/5 rounded-2xl">
                        <CheckCircle2 className="text-brand-green shrink-0" />
                        <div>
                            <h4 className="font-bold mb-2 text-brand-offwhite">Container Orchestration</h4>
                            <p className="text-xs text-brand-gray">Expertise in Docker and Kubernetes (EKS, GKE) for scalable microservices.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-6 bg-white/5 rounded-2xl">
                        <CheckCircle2 className="text-brand-green shrink-0" />
                        <div>
                            <h4 className="font-bold mb-2 text-brand-offwhite">Infrastructure as Code</h4>
                            <p className="text-xs text-brand-gray">Terraform and Ansible for reproducible and maintainable cloud environments.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-6 bg-white/5 rounded-2xl">
                        <CheckCircle2 className="text-brand-green shrink-0" />
                        <div>
                            <h4 className="font-bold mb-2 text-brand-offwhite">Monitoring & Logging</h4>
                            <p className="text-xs text-brand-gray">Prometheus, Grafana, and Datadog setup for real-time system insights.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/5 pt-16">
                <h3 className="text-2xl font-display font-bold mb-8 text-center">Tech Stack</h3>
                <div className="flex flex-wrap justify-center gap-6">
                    {["Docker", "Kubernetes", "AWS", "Terraform", "Jenkins", "GitLab CI", "Ansible", "Linux"].map(tech => (
                        <span key={tech} className="px-6 py-2 glass rounded-full text-xs font-bold text-brand-blue border-brand-blue/20 border">{tech}</span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
