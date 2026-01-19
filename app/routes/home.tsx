import type { MetaFunction } from "react-router";
import { motion } from "framer-motion";
import { Terminal, Cpu, Code2, Globe, ArrowRight, Zap, Layers, Server, Activity, ArrowUpRight } from "lucide-react";
import { NavLink } from "react-router";
import { projects } from "../data/projects";
import { blogPosts } from "../data/blog";

export const meta: MetaFunction = () => {
  const siteTitle = "Dhanraj Pimple | Freelance Web Developer & SEO Expert | Pune, Satara, Kolhapur";
  const siteDescription = "Leading Freelance Web Developer, SEO Expert & Software Automation Specialist serving Pune, Satara, Kolhapur, Sangli, and Solapur. Expert in AI Chatbots, DevOps, App Development & Backend Systems.";
  const siteKeywords = "Dhanraj Pimple, Freelance Web Developer Satara, SEO Expert Pune, Software Developer Kolhapur, Automation Expert Sangli, Chatbot Specialist Solapur, Mobile App Developer Maharashtra, Backend Developer India, DevOps Automation, CI/CD Pipeline, AWS Expert, Kubernetes Consultant, AI Chatbot Developer, Technical SEO Rural India, Performance Optimization";

  return [
    { title: siteTitle },
    { name: "description", content: siteDescription },
    { name: "keywords", content: siteKeywords },
    { property: "og:title", content: siteTitle },
    { property: "og:description", content: siteDescription },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://dhanrajpimple.vercel.app/assets/og-image.png" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: siteTitle },
    { name: "twitter:description", content: siteDescription },
    { name: "geo.region", content: "IN-MH" },
    { name: "geo.placename", content: "Satara, Pune, Kolhapur, Sangli, Solapur" },
  ];
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-32">
      <div className="bg-grid absolute inset-0 opacity-20 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 text-brand-blue border-brand-blue/30 border animate-pulse">
              <Zap size={16} />
              <span className="text-xs font-bold uppercase tracking-wider">Available for new projects</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Building <span className="text-gradient">Automated</span> Solutions & Scalable Systems
            </h1>
            <p className="text-lg md:text-xl text-brand-gray mb-10 max-w-xl leading-relaxed">
              DevOps Engineer & Full-Stack Developer specializing in CI/CD pipelines, cloud infrastructure, and performance-optimized software. I help businesses scale with precision and speed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <NavLink
                to="/portfolio"
                className="px-8 py-4 bg-brand-blue text-brand-navy font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-brand-coral hover:text-white transition-all shadow-xl shadow-brand-blue/20"
              >
                View My Work <ArrowRight size={20} />
              </NavLink>
              <NavLink
                to="/contact"
                className="px-8 py-4 glass border border-white/10 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
              >
                Let's Talk
              </NavLink>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-blue/20 blur-3xl rounded-full" />
              <div className="glass-dark border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-white/5 px-4 py-3 flex gap-2 border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  <div className="ml-4 text-[10px] text-brand-gray font-mono">deploy_production.sh</div>
                </div>
                <div className="p-6 font-mono text-sm leading-relaxed text-brand-offwhite/80">
                  <div className="flex gap-4 mb-2">
                    <span className="text-brand-green">$</span>
                    <span>terraform plan -out=main.tfplan</span>
                  </div>
                  <div className="text-brand-gray flex flex-col mb-4">
                    <span>Plan: 12 to add, 0 to change, 0 to destroy.</span>
                    <span className="text-brand-blue">... initializing cloud providers</span>
                  </div>
                  <div className="flex gap-4 mb-2">
                    <span className="text-brand-green">$</span>
                    <span>kubectl get pods -n production</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs text-brand-gray/60 mb-4">
                    <span>API-SERVICE</span>
                    <span className="text-brand-green">RUNNING</span>
                    <span>2/2</span>
                    <span>AUTH-WORKER</span>
                    <span className="text-brand-green">RUNNING</span>
                    <span>1/1</span>
                    <span>DATA-PIPELINE</span>
                    <span className="text-brand-green">RUNNING</span>
                    <span>3/3</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-brand-green">$</span>
                    <span className="inline-block animate-[pulse_1s_infinite]">_</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServicesGrid = () => {
  const services = [
    {
      icon: <Layers className="w-8 h-8 text-brand-blue" />,
      title: "DevOps Automation",
      description: "End-to-end CI/CD pipelines, IaC with Terraform, and container orchestration with K8s.",
      link: "/services/devops"
    },
    {
      icon: <Code2 className="w-8 h-8 text-brand-blue" />,
      title: "Software Development",
      description: "Custom SaaS platforms, AI-driven applications, and robust backend microservices.",
      link: "/services/software"
    },
    {
      icon: <Globe className="w-8 h-8 text-brand-blue" />,
      title: "Web Development & SEO",
      description: "High-performance websites built with Remix/Next.js and technical SEO at the core.",
      link: "/services/website"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Expertise That Scales</h2>
          <p className="text-brand-gray max-w-2xl mx-auto">From infrastructure automation to SEO-first frontend systems, I provide systematic solutions for modern digital challenges.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-2xl hover:border-brand-blue/50 transition-all group cursor-pointer"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-brand-gray mb-8 leading-relaxed">{service.description}</p>
              <NavLink
                to={service.link}
                aria-label={`Learn more about ${service.title}`}
                className="inline-flex items-center gap-2 text-brand-blue font-bold text-sm hover:gap-4 transition-all"
              >
                Learn More <ArrowRight size={16} />
              </NavLink>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedProjects = () => {
  // Show the latest 4 projects
  const featured = projects.slice(0, 4);

  return (
    <section className="py-24 bg-white/5">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Featured Work</h2>
            <p className="text-brand-gray max-w-xl">A selection of production systems and client websites I've architected and built.</p>
          </div>
          <NavLink to="/portfolio" className="hidden md:flex items-center gap-2 text-brand-blue font-bold group">
            View All Projects <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </NavLink>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl aspect-video cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                width="1200"
                height="675"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-navy via-brand-navy/60 to-transparent opacity-90" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="text-brand-blue text-xs font-bold uppercase mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                <p className="text-brand-gray text-xs mb-4 max-w-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap overflow-hidden text-ellipsis">{project.description}</p>
                <div className="flex gap-4 items-center">
                  <NavLink
                    to={`/portfolio/${project.id}`}
                    aria-label={`View case study for ${project.title}`}
                    className="text-xs font-bold text-white flex items-center gap-1 hover:text-brand-blue transition-colors"
                  >
                    Case Study <ArrowRight size={14} />
                  </NavLink>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit live site for ${project.title}`}
                      className="text-xs font-bold text-brand-blue flex items-center gap-1"
                    >
                      Live Site <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LatestInsights = () => {
  const latestBlogs = blogPosts.slice(0, 3);

  return (
    <section className="py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Technical Insights</h2>
            <p className="text-brand-gray max-w-xl">Deep dives into DevOps, software architecture, and performance optimization.</p>
          </div>
          <NavLink to="/blog" className="hidden md:flex items-center gap-2 text-brand-blue font-bold group">
            Read All Articles <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </NavLink>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestBlogs.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl group h-full flex flex-col border border-white/5 hover:border-brand-blue/20 transition-all"
            >
              <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest mb-4 inline-block">{post.category}</span>
              <h3 className="text-xl font-bold mb-4 group-hover:text-brand-blue transition-colors flex-1">{post.title}</h3>
              <NavLink
                to={`/blog/${post.id}`}
                aria-label={`Read article: ${post.title}`}
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-brand-offwhite hover:gap-3 transition-all"
              >
                Read Article <ArrowRight size={14} />
              </NavLink>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesGrid />
      <FeaturedProjects />
      <LatestInsights />

      {/* Social Proof / Stats */}
      <section className="py-24 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-display font-bold text-brand-blue mb-2">50+</div>
              <p className="text-xs text-brand-gray uppercase tracking-widest">Pipelines Automated</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-display font-bold text-brand-blue mb-2">15+</div>
              <p className="text-xs text-brand-gray uppercase tracking-widest">SaaS Platforms Built</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-display font-bold text-brand-blue mb-2">99.9%</div>
              <p className="text-xs text-brand-gray uppercase tracking-widest">Uptime Achieved</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-display font-bold text-brand-blue mb-2">100%</div>
              <p className="text-xs text-brand-gray uppercase tracking-widest">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Expertise Section */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Serving Businesses Across <span className="text-gradient">Maharashtra</span></h2>
            <p className="text-brand-gray text-lg mb-12">
              As a premier **Freelance Web Developer & SEO Expert**, I provide high-performance digital solutions tailored for the growing markets of **Pune**, **Satara**, **Kolhapur**, **Sangli**, and **Solapur**. From rural automation to urban SaaS platforms, I help businesses across India scale their digital presence.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {['Satara', 'Pune', 'Kolhapur', 'Sangli', 'Solapur'].map((city) => (
                <div key={city} className="glass py-4 rounded-xl border border-white/5 hover:border-brand-blue/30 transition-all">
                  <span className="font-bold text-sm">{city}</span>
                </div>
              ))}
            </div>
            <p className="mt-12 text-sm text-brand-gray/60 italic">
              Specializing in App Development, Backend Systems, Chatbot Integration, and Automation for rural & urban India.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 blur-3xl rounded-full" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready to <span className="text-gradient">Automate</span> Your Future?</h2>
          <p className="text-lg text-brand-gray mb-12 max-w-2xl mx-auto">Let's build something exceptional together. Whether you need a robust pipeline, a secure backend, or a high-ranking website, I'm here to help.</p>
          <NavLink
            to="/contact"
            className="px-10 py-5 bg-brand-blue text-brand-navy font-bold rounded-xl inline-flex items-center gap-2 hover:bg-brand-coral hover:text-white transition-all shadow-2xl shadow-brand-blue/40 text-lg"
          >
            Start Your Project <ArrowRight size={24} />
          </NavLink>
        </div>
      </section>
    </main>
  );
}
