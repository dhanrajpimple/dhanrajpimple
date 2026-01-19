import { NavLink, type MetaFunction } from "react-router";
import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, Code2, Terminal, Cpu, Cloud, Database, Globe, CheckCircle2, Layers } from "lucide-react";

export const meta: MetaFunction = () => {
    return [
        { title: "About Dhanraj Pimple | Freelance SEO Specialst & Web Developer" },
        { name: "description", content: "Dhanraj Pimple is a production-experienced Web Developer, SEO Specialist, and DevOps Engineer based in Satara, India. Expert in building AI-SaaS, high-ranking websites, and automated systems for global businesses." },
        { name: "keywords", content: "Dhanraj Pimple biography, Web Developer Satara, SEO Specialist Pune, Freelance Software Engineer Kolhapur, AI Chatbot Expert India, Best Developer Rural Maharashtra" },
    ];
};

const SkillCard = ({ title, icon, skills }: { title: string, icon: React.ReactNode, skills: string[] }) => (
    <div className="glass p-8 rounded-2xl border border-white/5 hover:border-brand-blue/30 transition-all">
        <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-brand-blue/10 rounded-xl text-brand-blue">{icon}</div>
            <h3 className="text-xl font-bold font-display">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-xs text-brand-gray border border-white/5 hover:border-brand-blue/20 transition-all">
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const TimelineItem = ({ year, title, company, description }: { year: string, title: string, company: string, description: string }) => (
    <div className="relative pl-8 pb-12 last:pb-0">
        <div className="absolute left-0 top-0 w-px h-full bg-brand-blue/20">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-brand-blue shadow-[0_0_10px_rgba(0,217,255,0.5)]" />
        </div>
        <div className="text-sm font-bold text-brand-blue mb-2">{year}</div>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <div className="text-brand-gray text-sm mb-4">{company}</div>
        <p className="text-brand-gray/80 leading-relaxed text-sm max-w-2xl">{description}</p>
    </div>
);

export default function About() {
    const devopsSkills = ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "Terraform", "Ansible", "AWS (EC2, S3, SQS)", "EventBridge", "Linux"];
    const devSkills = ["React.js", "Node.js", "FastAPI", "Python", "TypeScript", "PostgreSQL", "Supabase", "MongoDB"];
    const methodologies = ["Agile", "Microservices", "IaC", "TDD", "REST APIs", "CI/CD"];

    return (
        <main className="pt-20 pb-32">
            <div className="container mx-auto px-6">
                {/* Intro Section */}
                <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-full lg:w-1/3"
                    >
                        <div className="relative aspect-square">
                            <div className="absolute inset-0 bg-brand-blue blur-3xl opacity-20 animate-pulse" />
                            <div className="relative h-full w-full rounded-2xl overflow-hidden glass border-4 border-white/10">
                                <img src="https://github.com/dhanrajpimple.png" alt="Dhanraj Pimple" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex-1"
                    >
                        <h1 className="text-4xl md:text-6xl font-display font-bold mb-8">
                            Hi, I'm <span className="text-gradient">Dhanraj Pimple</span>
                        </h1>
                        <p className="text-xl text-brand-gray mb-6 leading-relaxed">
                            A Full Stack Developer with over a year of production experience building SaaS and AI-powered platforms. I believe in building systems that work for you, not against you.
                        </p>
                        <p className="text-lg text-brand-gray/80 mb-10">
                            My core expertise lies at the intersection of development and operations, ensuring that high-quality code is matched with robust, automated infrastructure. I've helps startups automate their bidding processes and travel agencies optimize their booking systems.
                        </p>
                        <div className="flex flex-wrap gap-4 mb-12">
                            <NavLink to="/portfolio" className="bg-brand-blue text-brand-navy px-8 py-3 rounded-xl font-bold hover:bg-brand-coral hover:text-white transition-all shadow-lg shadow-brand-blue/20">
                                View My Work
                            </NavLink>
                            <NavLink to="/contact" className="glass px-8 py-3 rounded-xl font-bold border border-white/10 hover:border-brand-blue/30 transition-all">
                                Let's Talk
                            </NavLink>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center p-4 glass rounded-xl">
                                <div className="text-3xl font-display font-bold text-brand-blue mb-1">1+</div>
                                <div className="text-[10px] uppercase tracking-wider text-brand-gray">Year Exp.</div>
                            </div>
                            <div className="text-center p-4 glass rounded-xl">
                                <div className="text-3xl font-display font-bold text-brand-blue mb-1">10+</div>
                                <div className="text-[10px] uppercase tracking-wider text-brand-gray">Projects</div>
                            </div>
                            <div className="text-center p-4 glass rounded-xl">
                                <div className="text-3xl font-display font-bold text-brand-blue mb-1">500+</div>
                                <div className="text-[10px] uppercase tracking-wider text-brand-gray">DSA Problems</div>
                            </div>
                            <div className="text-center p-4 glass rounded-xl">
                                <div className="text-3xl font-display font-bold text-brand-blue mb-1">5⭐</div>
                                <div className="text-[10px] uppercase tracking-wider text-brand-gray">Execution</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Skills Section */}
                <div className="mb-32">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center underline decoration-brand-blue/30 underline-offset-8">Technical Arsenel</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <SkillCard title="DevOps & Infrastructure" icon={<Cloud />} skills={devopsSkills} />
                        <SkillCard title="Full Stack Dev" icon={<Code2 />} skills={devSkills} />
                        <SkillCard title="Methodologies" icon={<Layers />} skills={methodologies} />
                    </div>
                </div>

                {/* Experience Timeline */}
                <div className="mb-32 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">My Career Journey</h2>
                    <div className="bg-white/5 p-10 md:p-16 rounded-3xl">
                        <TimelineItem
                            year="Jun 2025 - Jan 2026"
                            title="Full Stack Developer (Contract)"
                            company="Palcode.ai (Remote)"
                            description="Developed an AI-driven vendor outreach platform for construction businesses using FastAPI, PostgreSQL, and React. Integrated OpenAI, ElevenLabs, Twilio, and DocuSign to automate complex workflows and AI-driven bidding calls."
                        />
                        <TimelineItem
                            year="Jul 2024 - Mar 2025"
                            title="Software Developer"
                            company="ProDT Consulting Services (Pune)"
                            description="Built a real-time travel booking platform using React and Supabase. Optimized database queries improving performance by 40% and served as Scrum Master managing Agile workflows."
                        />
                        <TimelineItem
                            year="Jan 2024 - May 2025"
                            title="Freelance Developer"
                            company="Remote"
                            description="Delivered 4+ production websites including flixixstudios.in and shettyeducators.in using Remix.js and Supabase, focusing on SEO and performance optimization."
                        />
                    </div>
                </div>

                {/* Education & Certs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="glass p-10 rounded-3xl">
                        <div className="flex items-center gap-4 mb-8">
                            <GraduationCap className="text-brand-blue" size={32} />
                            <h2 className="text-2xl font-display font-bold">Education</h2>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <div className="text-brand-blue font-bold text-sm mb-1">Nov 2022 - Jun 2024</div>
                                <h4 className="font-bold">Master of Computer Applications (MCA)</h4>
                                <p className="text-brand-gray text-sm">K.K. Wagh Institute, Nashik | CGPA: 7.5/10</p>
                            </div>
                        </div>
                    </div>

                    <div className="glass p-10 rounded-3xl">
                        <div className="flex items-center gap-4 mb-8">
                            <Award className="text-brand-blue" size={32} />
                            <h2 className="text-2xl font-display font-bold">Achievements</h2>
                        </div>
                        <ul className="space-y-4 text-brand-gray/80 text-sm">
                            <li className="flex gap-3">
                                <CheckCircle2 className="text-brand-green shrink-0" size={18} />
                                <span>Solved 500+ problems on LeetCode, CodeChef, and HackerRank</span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle2 className="text-brand-green shrink-0" size={18} />
                                <span>Completed coursework in Full Stack Development and AWS fundamentals</span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle2 className="text-brand-green shrink-0" size={18} />
                                <span>Successfully managed CI/CD for high-uptime AI microservices</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Personal Touch */}
                <div className="mt-32 text-center glass p-16 rounded-3xl border-dashed border-2 border-white/10">
                    <h2 className="text-3xl font-display font-bold mb-6 italic">Beyond the Code</h2>
                    <p className="text-brand-gray text-lg max-w-2xl mx-auto leading-relaxed">
                        When I'm not automating deployments or crafting pixel-perfect interfaces, you'll find me exploring the latest in AI, diving into open-source contributions, or perhaps enjoying a quiet evening in Satara. I'm a firm believer in lifelong learning and continuous improvement.
                    </p>
                    <div className="mt-10 flex justify-center gap-8">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-blue"><Globe size={24} /></div>
                            <span className="text-xs text-brand-gray">Tech Trends</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-blue"><Cpu size={24} /></div>
                            <span className="text-xs text-brand-gray">AI Research</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-blue"><Terminal size={24} /></div>
                            <span className="text-xs text-brand-gray">Open Source</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
