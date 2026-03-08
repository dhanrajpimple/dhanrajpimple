import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Brain,
  Briefcase,
  Cloud,
  Code2,
  Cpu,
  Globe,
  HardDrive,
  Languages,
  MapPin,
  Server,
  Smartphone,
  Workflow,
  Zap,
} from "lucide-react";
import type { LinksFunction, MetaFunction } from "react-router";
import { NavLink } from "react-router";

import portrait from "~/assets/dp.png";
import { blogPosts } from "~/data/blog";
import {
  GUJARATI_SEO_KEYWORDS,
  HINDI_SEO_KEYWORDS,
  LANGUAGES_I_SERVE,
  MARATHI_SEO_KEYWORDS,
  PRIMARY_SEO_KEYWORDS,
} from "~/data/regionalSeoKeywords";
import { projects } from "~/data/projects";
import {
  buildPageMeta,
  SERVICE_AREAS,
  SITE_AUTHOR,
  SITE_IMAGE,
  SITE_URL,
  SOCIAL_LINKS,
} from "~/lib/seo";

export const links: LinksFunction = () => [{ rel: "preload", as: "image", href: portrait }];

const homepageServices = [
  {
    name: "Web Development",
    title: "Web Development for Growth",
    description:
      "I work as a web developer India businesses trust for fast, SEO-ready builds, landing pages, and websites that help small companies turn traffic into leads.",
    href: "/services/website",
    icon: <Globe className="w-8 h-8 text-brand-blue" />,
    keywordTags: [
      "Web developer India",
      "Affordable web developer India",
      "Website developer for small business India",
    ],
  },
  {
    name: "SaaS and Backend Systems",
    title: "Full-Stack SaaS Systems",
    description:
      "From admin panels to APIs and billing logic, I build product foundations for founders who need a full stack developer India and SaaS developer India partner.",
    href: "/services/software",
    icon: <Code2 className="w-8 h-8 text-brand-blue" />,
    keywordTags: [
      "Full stack developer India",
      "SaaS developer India",
      "Chatbot developer India",
      "WhatsApp chatbot developer",
    ],
  },
  {
    name: "Mobile Apps",
    title: "Mobile App Development",
    description:
      "Android and iOS products built for launch, retention, and business workflows with clean UX, robust APIs, and measurable delivery.",
    href: "/services/software",
    icon: <Smartphone className="w-8 h-8 text-brand-blue" />,
    keywordTags: ["Mobile app developer India"],
  },
  {
    name: "Desktop Apps",
    title: "Desktop App Development",
    description:
      "Windows, macOS, and Linux apps built with Electron, Python, or Tauri for internal tools, operations software, and modern cross-platform products.",
    href: "/services/software",
    icon: <HardDrive className="w-8 h-8 text-brand-blue" />,
    keywordTags: ["Desktop app developer India"],
  },
  {
    name: "AI Agents",
    title: "AI Agent Development",
    description:
      "I design autonomous systems for support, research, and operations as an AI agent developer and agentic AI workflow developer for startup and enterprise teams.",
    href: "/services/software",
    icon: <Workflow className="w-8 h-8 text-brand-blue" />,
    keywordTags: [
      "AI agent developer",
      "Agentic AI workflow developer",
      "LangChain developer India",
      "CrewAI developer",
      "AutoGen developer",
    ],
  },
  {
    name: "AI and ML Integration",
    title: "AI/ML Integration",
    description:
      "OpenAI, Gemini, and HuggingFace integrations for web and mobile apps, copilots, analytics, recommendation flows, and workflow automation.",
    href: "/services/software",
    icon: <Brain className="w-8 h-8 text-brand-blue" />,
    keywordTags: ["AI ML integration developer", "Machine learning developer India"],
  },
  {
    name: "Deployment and Cloud",
    title: "Deployment & Cloud",
    description:
      "Production deployments on AWS, GCP, and Vercel with Docker, Kubernetes, CI/CD, observability, and release pipelines that stay maintainable.",
    href: "/services/devops",
    icon: <Cloud className="w-8 h-8 text-brand-blue" />,
    keywordTags: ["DevOps engineer India", "Cloud deployment expert"],
  },
] as const;

const developerAnswers = [
  {
    question: "Who is Dhanraj Pimple?",
    answer:
      "Dhanraj Pimple is a freelance full-stack developer and AI agent developer based in Satara, Maharashtra, India. He builds web apps, mobile apps, desktop apps, AI agents using LangChain and CrewAI, and integrates ML models for startups and businesses across India.",
  },
  {
    question: "What services does Dhanraj Pimple offer?",
    answer:
      "He offers website development, SaaS and backend engineering, desktop app development, mobile app development, AI agent development, AI/ML integration, chatbot development, DevOps automation, and cloud deployment support.",
  },
  {
    question: "How much does Dhanraj Pimple charge?",
    answer:
      "Website projects generally start at Rs. 5,999, full-stack builds start at Rs. 9,999, and mobile apps start at Rs. 14,999. Final pricing depends on scope, integrations, and delivery timeline.",
  },
  {
    question: "Where is Dhanraj Pimple located?",
    answer:
      "He is based in Satara, Maharashtra, India, and works remotely with clients across Pune, Maharashtra, India, and international markets.",
  },
  {
    question: "Does Dhanraj Pimple work with startups and small businesses?",
    answer:
      "Yes. He works as a startup tech partner India founders can rely on, and he also builds websites, apps, and automation systems for small businesses that need direct execution without agency overhead.",
  },
  {
    question: "Can Dhanraj Pimple build AI agents and automation workflows?",
    answer:
      "Yes. He builds AI agents, LangChain workflows, CrewAI systems, AutoGen-based assistants, and business automations that connect LLMs with real operational tools.",
  },
  {
    question: "Does Dhanraj Pimple handle cloud deployment and DevOps?",
    answer:
      "Yes. He sets up CI/CD pipelines, Docker and Kubernetes workloads, monitoring, infrastructure automation, and production deployments on AWS, GCP, and Vercel.",
  },
  {
    question: "Can Dhanraj Pimple build web, mobile, and desktop apps?",
    answer:
      "Yes. He delivers cross-platform product systems that span websites, internal dashboards, Android and iOS apps, and desktop applications for Windows, macOS, and Linux.",
  },
  {
    question: "Does Dhanraj Pimple work remotely?",
    answer:
      "Yes. He works as a remote developer India companies can hire for retained delivery, project-based execution, and ongoing technical partnership.",
  },
] as const;

const faqItems = [
  {
    question: "How do I hire an AI developer in India for my startup or small business?",
    answer:
      "If you want to hire AI developer India talent with direct communication, I handle discovery, build, deployment, and iteration myself. That makes it easier for startups and small businesses to move quickly without agency layers.",
  },
  {
    question: "Can you build AI agents, LangChain workflows, or CrewAI systems?",
    answer:
      "Yes. I work as an AI agent developer and agentic AI workflow developer, building LangChain, CrewAI, and AutoGen systems for research, support, lead qualification, and internal process automation.",
  },
  {
    question: "Do you develop WhatsApp chatbots and website chatbots?",
    answer:
      "Yes. I work as a chatbot developer India teams use for customer support, lead capture, and operations. I also ship WhatsApp chatbot developer workflows that connect with CRMs, forms, and backend systems.",
  },
  {
    question: "Can you build web, mobile, and desktop apps together?",
    answer:
      "Yes. I regularly work as a web developer India companies trust, a mobile app developer India founders hire, and a desktop app developer India teams use when they need one product experience across devices.",
  },
  {
    question: "What does a typical project cost?",
    answer:
      "Most business website work starts at Rs. 5,999, full-stack and SaaS development starts at Rs. 9,999, and mobile apps start at Rs. 14,999. AI and DevOps work is scoped based on integrations, workflows, and infrastructure needs.",
  },
  {
    question: "Do you work remotely or only in Maharashtra?",
    answer:
      "I am a freelance developer Satara businesses can meet locally, a freelance developer Pune teams can hire for collaboration, and a remote developer India and global clients can work with asynchronously.",
  },
  {
    question: "Can you help after launch with cloud deployment and DevOps?",
    answer:
      "Yes. I stay involved as a DevOps engineer India companies hire for release pipelines, observability, Docker, Kubernetes, and post-launch cloud support as a practical cloud deployment expert.",
  },
] as const;

const cityCoverage = [
  {
    city: "Satara",
    keywords: "Web developer Satara, Mobile app developer Satara, AI chatbot Satara",
    description:
      "Local product delivery for businesses that need fast web launches, app modernization, and AI chatbot rollouts in Satara.",
  },
  {
    city: "Pune",
    keywords: "Freelance developer Pune, AI agent developer Pune, SaaS developer Pune",
    description:
      "Ideal for startups, funded teams, and service businesses that want an execution-focused freelance partner in Pune.",
  },
  {
    city: "Kolhapur",
    keywords: "Website developer Kolhapur, App developer Kolhapur",
    description:
      "Conversion-focused websites and practical business apps for growing brands and operational teams in Kolhapur.",
  },
  {
    city: "Sangli",
    keywords: "Web design Sangli, Developer Sangli",
    description:
      "Modern design systems, responsive marketing sites, and software support for Sangli-based companies.",
  },
  {
    city: "Solapur",
    keywords: "Website development Solapur",
    description:
      "SEO-ready websites, lead-generation funnels, and dependable technical delivery for Solapur businesses.",
  },
  {
    city: "Mumbai",
    keywords: "Freelance developer Mumbai, AI developer Mumbai",
    description:
      "Remote product execution for agencies, startup teams, and brands that need AI and software shipping capacity in Mumbai.",
  },
  {
    city: "Nashik",
    keywords: "Web developer Nashik",
    description:
      "Fast marketing websites, product launches, and performance optimization for Nashik businesses.",
  },
  {
    city: "Aurangabad",
    keywords: "Developer Aurangabad",
    description:
      "Custom software and growth-focused websites for manufacturers, service providers, and local brands in Aurangabad.",
  },
  {
    city: "India",
    keywords: "Hire developer India, AI ML developer India",
    description:
      "Nationwide remote delivery for startups and established businesses that need product engineering, automation, and AI integration.",
  },
] as const;

const languageSections = [
  {
    heading: "Marathi / मराठी",
    body:
      "मी वेबसाइट डेव्हलपर महाराष्ट्र म्हणून व्यवसायासाठी वेबसाइट, स्वस्त वेबसाइट बनवणे, सातारा वेब डिझाइन, मोबाइल अॅप डेव्हलपर पुणे, फ्रीलान्स डेव्हलपर सातारा, पुणे फ्रीलान्स डेव्हलपर, महाराष्ट्र सॉफ्टवेअर डेव्हलपर, AI एजंट डेव्हलपर भारत, आणि AI चॅटबॉट मराठी सोल्यूशन्स देतो.",
    keywords: MARATHI_SEO_KEYWORDS,
  },
  {
    heading: "Hindi / हिंदी",
    body:
      "मैं फ्रीलांस वेब डेवलपर इंडिया सेवाओं के साथ मोबाइल ऐप डेवलपर भारत, AI एजेंट डेवलपर, सस्ती वेबसाइट बनाना, बिजनेस वेबसाइट डेवलपमेंट, छोटे व्यवसाय के लिए वेबसाइट, पुणे फ्रीलांस डेवलपर, महाराष्ट्र सॉफ्टवेयर डेवलपर, AI चैटबॉट डेवलपर इंडिया, और वेब डिज़ाइन महाराष्ट्र जैसी जरूरतें पूरा करता हूं.",
    keywords: HINDI_SEO_KEYWORDS,
  },
  {
    heading: "Gujarati / ગુજરાતી",
    body:
      "હું ફ્રીલાન્સ વેબ ડેવલપર ઇન્ડિયા તરીકે મોબાઇલ એપ ડેવલપર ભારત, AI એજન્ટ ડેવલપર, સસ્તી વેબસાઇટ બનાવો, બિઝનેસ વેબસાઇટ ડેવલપમેન્ટ, ગુજરાત સોફ્ટવેર ડેવલપર, અને AI ચેટબોટ ડેવલપર ઇન્ડિયા માટે પ્રોડક્શન-રેડી સોલ્યુશન્સ આપું છું.",
    keywords: GUJARATI_SEO_KEYWORDS,
  },
] as const;

export const meta: MetaFunction = () => [
  ...buildPageMeta({
    title:
      "Freelance Full-Stack & AI Developer in India | DevOps & SaaS Systems | Dhanraj Pimple",
    description:
      "Hire a top-rated Freelance Full-Stack Developer and DevOps Engineer in India. Expert in AI SaaS, FastAPI backend, Next.js, CI/CD pipelines, and cloud infrastructure. Serving startups in Pune, Satara, Maharashtra & globally. Book a free consultation!",
    path: "/",
    keywords: [...new Set([...PRIMARY_SEO_KEYWORDS, ...MARATHI_SEO_KEYWORDS, ...HINDI_SEO_KEYWORDS, ...GUJARATI_SEO_KEYWORDS])].join(", "),
  }),
  {
    "script:ld+json": {
      "@context": "https://schema.org",
      "@type": "Person",
      name: SITE_AUTHOR,
      jobTitle: "Freelance Full-Stack Developer, DevOps Engineer & AI SaaS Developer",
      url: SITE_URL,
      sameAs: [SOCIAL_LINKS[0], SOCIAL_LINKS[1], SOCIAL_LINKS[2]],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Satara",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      knowsAbout: [
        "Full-Stack Development",
        "AI Agents",
        "AI SaaS Development",
        "LangChain",
        "FastAPI",
        "Next.js",
        "Web Development",
        "Mobile Apps",
        "Desktop Apps",
        "DevOps",
        "CI/CD Pipelines",
        "Docker",
        "Kubernetes",
        "AWS",
        "ML Integration",
      ],
    },
  },
  {
    "script:ld+json": {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Dhanraj Pimple - Freelance Developer",
      description:
        "AI agent developer, web, mobile, and desktop app developer in Satara, Maharashtra",
      url: SITE_URL,
      image: SITE_IMAGE,
      areaServed: ["Satara", "Pune", "Kolhapur", "Sangli", "Solapur", "India"],
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Satara",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
    },
  },
  {
    "script:ld+json": {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  },
  {
    "script:ld+json": {
      "@context": "https://schema.org",
      "@graph": homepageServices.map((service) => ({
        "@type": "Service",
        name: service.title,
        serviceType: service.name,
        description: service.description,
        areaServed: SERVICE_AREAS,
        provider: {
          "@type": "Person",
          name: SITE_AUTHOR,
          url: SITE_URL,
        },
      })),
    },
  },
];

const Hero = () => {
  const keywordPills = [
    "Freelance developer India",
    "Startup tech partner India",
    "Remote developer India",
    "Freelance developer Satara",
    "Freelance developer Pune",
    "Freelance developer Maharashtra",
  ];

  return (
    <section className="relative overflow-hidden pt-20 pb-28">
      <div className="bg-grid absolute inset-0 opacity-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-brand-blue/5 blur-3xl rounded-full pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex flex-wrap items-center gap-3 px-4 py-2 rounded-full glass mb-6 border border-brand-blue/20 text-brand-blue">
              <Zap size={16} />
              <span className="text-xs font-bold uppercase tracking-wider">
                Available for AI, app, and cloud builds
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Freelance <span className="text-gradient">Full-Stack & DevOps</span> Engineer in India
            </h1>

            <p className="text-lg md:text-xl text-brand-gray mb-6 max-w-2xl leading-relaxed">
              Dhanraj Pimple is a freelance developer India teams hire for websites,
              SaaS platforms, mobile apps, desktop software, AI systems, and cloud
              delivery. I work as a full stack developer India startups trust, an
              affordable web developer India small businesses rely on, and a startup
              tech partner India founders can scale with from strategy to launch.
            </p>

            <p className="text-base text-brand-gray/90 mb-10 max-w-2xl leading-relaxed">
              If you need to hire AI developer India expertise for LangChain agents,
              product engineering, or production DevOps, I deliver as a web developer
              India, mobile app developer India, desktop app developer India, and
              remote developer India with direct execution from Satara, Maharashtra.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <NavLink
                to="/contact"
                className="px-8 py-4 bg-brand-blue text-brand-navy font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-brand-coral hover:text-white transition-all shadow-xl shadow-brand-blue/20"
              >
                Start Your Project <ArrowRight size={20} />
              </NavLink>
              <NavLink
                to="/portfolio"
                className="px-8 py-4 glass border border-white/10 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
              >
                View My Work
              </NavLink>
            </div>

            <div className="flex flex-wrap gap-3">
              {keywordPills.map((pill) => (
                <span
                  key={pill}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-bold text-brand-offwhite/80"
                >
                  {pill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <div className="relative">
              <div className="absolute -inset-6 bg-brand-blue/20 blur-3xl rounded-[2rem]" />
              <div className="relative glass-dark rounded-[2rem] border border-white/10 p-5 md:p-6 shadow-2xl">
                <div className="grid gap-6">
                  <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5">
                    <img
                      src={portrait}
                      alt="Dhanraj Pimple portrait"
                      width="560"
                      height="720"
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass rounded-2xl p-4 border border-white/5">
                      <div className="text-[11px] uppercase tracking-widest text-brand-gray mb-2">
                        Based In
                      </div>
                      <div className="font-bold flex items-center gap-2">
                        <MapPin size={16} className="text-brand-blue" />
                        Satara, Maharashtra
                      </div>
                    </div>
                    <div className="glass rounded-2xl p-4 border border-white/5">
                      <div className="text-[11px] uppercase tracking-widest text-brand-gray mb-2">
                        Focus
                      </div>
                      <div className="font-bold flex items-center gap-2">
                        <Bot size={16} className="text-brand-blue" />
                        AI + product engineering
                      </div>
                    </div>
                  </div>

                  <div className="glass rounded-2xl p-5 border border-white/5">
                    <div className="text-[11px] uppercase tracking-widest text-brand-gray mb-3">
                      Core Delivery
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm text-brand-offwhite/85">
                      <span className="flex items-center gap-2">
                        <Workflow size={16} className="text-brand-blue" />
                        AI agents
                      </span>
                      <span className="flex items-center gap-2">
                        <Smartphone size={16} className="text-brand-blue" />
                        Mobile apps
                      </span>
                      <span className="flex items-center gap-2">
                        <HardDrive size={16} className="text-brand-blue" />
                        Desktop apps
                      </span>
                      <span className="flex items-center gap-2">
                        <Server size={16} className="text-brand-blue" />
                        DevOps and cloud
                      </span>
                    </div>
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

const ServicesGrid = () => (
  <section className="py-24 relative">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          AI SaaS · DevOps · FastAPI · Next.js
        </h2>
        <p className="text-brand-gray max-w-3xl mx-auto">
          Freelance Full-Stack & DevOps engineer in India delivering AI SaaS platforms,
          FastAPI backends, Next.js web apps, CI/CD pipelines, and cloud infrastructure.
          From startup launch to enterprise scale — without agency overhead.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {homepageServices.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl hover:border-brand-blue/40 transition-all group h-full flex flex-col"
          >
            <div className="mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-brand-gray mb-6 leading-relaxed flex-1">{service.description}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {service.keywordTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-brand-gray"
                >
                  {tag}
                </span>
              ))}
            </div>
            <NavLink
              to={service.href}
              aria-label={`Learn more about ${service.title}`}
              className="inline-flex items-center gap-2 text-brand-blue font-bold text-sm hover:gap-3 transition-all"
            >
              Learn More <ArrowRight size={16} />
            </NavLink>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const AboutThisDeveloper = () => (
  <section className="py-24 bg-white/[0.02] border-y border-white/5">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-blue/20 text-brand-blue mb-6">
          <Briefcase size={16} />
          <span className="text-xs font-bold uppercase tracking-wider">About This Developer</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          Fast answers for AI engines and human buyers
        </h2>
        <p className="text-brand-gray text-lg">
          This section is written in a direct Q&A format so ChatGPT, Gemini,
          Perplexity, and search engines can extract clear facts about what I do,
          how I work, and who I serve.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {developerAnswers.map((item, index) => (
          <motion.div
            key={item.question}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl border border-white/5"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-brand-blue mb-4">
              Q: {item.question}
            </p>
            <p className="text-brand-gray leading-relaxed">
              <span className="text-brand-offwhite font-semibold">A:</span> {item.answer}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const PricingSection = () => {
  const plans = [
    {
      title: "Starter Website",
      price: "Rs. 5,999",
      description: "Business website launch with responsive UI, domain setup, and core SEO.",
      icon: <Globe className="w-6 h-6 text-brand-blue" />,
    },
    {
      title: "Full-Stack Build",
      price: "Rs. 9,999",
      description: "Product-ready web app or SaaS foundation with backend workflows and dashboards.",
      icon: <Cpu className="w-6 h-6 text-brand-blue" />,
      highlight: true,
    },
    {
      title: "Mobile App",
      price: "Rs. 14,999",
      description: "Android and iOS application delivery with API integration and launch support.",
      icon: <Smartphone className="w-6 h-6 text-brand-blue" />,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Transparent Pricing
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto">
            Clear starting points for teams that want direct delivery without bloated
            retainers or agency markup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className={`glass p-8 rounded-3xl border transition-all ${plan.highlight
                ? "border-brand-blue/50 shadow-2xl shadow-brand-blue/10"
                : "border-white/5"
                }`}
            >
              <div className="mb-6">{plan.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
              <p className="text-brand-gray text-sm mb-8">{plan.description}</p>
              <div className="text-3xl font-bold mb-8">{plan.price}</div>
              <NavLink
                to="/pricing"
                className={`w-full py-3 rounded-xl font-bold text-center inline-block transition-all ${plan.highlight
                  ? "bg-brand-blue text-brand-navy hover:bg-brand-coral hover:text-white"
                  : "button-glass hover:bg-white/10"
                  }`}
              >
                View Details
              </NavLink>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedProjects = () => {
  const featured = projects.slice(0, 4);

  return (
    <section className="py-24 bg-white/5">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Featured Work</h2>
            <p className="text-brand-gray max-w-xl">
              Production systems and client builds spanning AI, SaaS, websites, and
              operational automation.
            </p>
          </div>
          <NavLink
            to="/portfolio"
            className="hidden md:flex items-center gap-2 text-brand-blue font-bold group"
          >
            View All Projects
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </NavLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {featured.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl aspect-video"
            >
              <img
                src={project.image}
                alt={project.title}
                width="1200"
                height="675"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-navy via-brand-navy/70 to-transparent opacity-95" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="text-brand-blue text-xs font-bold uppercase mb-2">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                <p className="text-brand-gray text-sm mb-4 max-w-md opacity-0 group-hover:opacity-100 transition-opacity line-clamp-2">
                  {project.description}
                </p>
                <div className="flex gap-4 items-center">
                  <NavLink
                    to={`/portfolio/${project.id}`}
                    aria-label={`View case study for ${project.title}`}
                    className="text-sm font-bold text-white flex items-center gap-1 hover:text-brand-blue transition-colors"
                  >
                    Case Study <ArrowRight size={14} />
                  </NavLink>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit live site for ${project.title}`}
                      className="text-sm font-bold text-brand-blue flex items-center gap-1"
                    >
                      Live Site <ArrowUpRight size={14} />
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CitiesIServe = () => (
  <section className="py-24 border-t border-white/5">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          Cities I Serve
        </h2>
        <p className="text-brand-gray">
          Local understanding with remote execution across Maharashtra and India.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {cityCoverage.map((entry, index) => (
          <motion.div
            key={entry.city}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl border border-white/5"
          >
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="text-brand-blue" size={18} />
              <h3 className="text-2xl font-bold">{entry.city}</h3>
            </div>
            <p className="text-brand-blue font-semibold mb-4">{entry.keywords}</p>
            <p className="text-brand-gray leading-relaxed">{entry.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const LanguagesSection = () => (
  <section className="py-24 bg-white/[0.02] border-y border-white/5">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-blue/20 text-brand-blue mb-6">
          <Languages size={16} />
          <span className="text-xs font-bold uppercase tracking-wider">Languages I Serve</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          English-first delivery with regional support
        </h2>
        <p className="text-brand-gray">
          I work with founders and businesses in English, Marathi, Hindi, and Gujarati,
          while keeping multilingual service intent crawlable for regional search.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {LANGUAGES_I_SERVE.map((language) => (
          <span
            key={language}
            className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-brand-offwhite/85"
          >
            {language}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {languageSections.map((section) => (
          <div key={section.heading} className="glass p-8 rounded-3xl border border-white/5">
            <h3 className="text-2xl font-bold mb-4">{section.heading}</h3>
            <p className="text-sm text-brand-gray leading-7">{section.body}</p>
            <div className="sr-only">{section.keywords.join(", ")}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const LatestInsights = () => {
  const latestBlogs = blogPosts.slice(0, 3);

  return (
    <section className="py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Technical Insights
            </h2>
            <p className="text-brand-gray max-w-xl">
              Notes on DevOps, AI delivery, performance, and software architecture.
            </p>
          </div>
          <NavLink
            to="/blog"
            className="hidden md:flex items-center gap-2 text-brand-blue font-bold group"
          >
            Read All Articles
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </NavLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestBlogs.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl group h-full flex flex-col border border-white/5 hover:border-brand-blue/20 transition-all"
            >
              <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest mb-4 inline-block">
                {post.category}
              </span>
              <h3 className="text-xl font-bold mb-4 group-hover:text-brand-blue transition-colors flex-1">
                {post.title}
              </h3>
              <NavLink
                to={`/blog/${post.id}`}
                aria-label={`Read article: ${post.title}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-offwhite hover:gap-3 transition-all"
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

const StatsSection = () => (
  <section className="py-24 border-y border-white/5 bg-white/[0.02]">
    <div className="container mx-auto px-6">
      <h2 className="sr-only">Achievements and delivery stats</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        <div>
          <div className="text-4xl md:text-5xl font-display font-bold text-brand-blue mb-2">
            50+
          </div>
          <p className="text-xs text-brand-gray uppercase tracking-widest">
            Pipelines automated
          </p>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-display font-bold text-brand-blue mb-2">
            15+
          </div>
          <p className="text-xs text-brand-gray uppercase tracking-widest">
            SaaS and product systems
          </p>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-display font-bold text-brand-blue mb-2">
            99.9%
          </div>
          <p className="text-xs text-brand-gray uppercase tracking-widest">
            Uptime achieved
          </p>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-display font-bold text-brand-blue mb-2">
            100%
          </div>
          <p className="text-xs text-brand-gray uppercase tracking-widest">
            Direct communication
          </p>
        </div>
      </div>
    </div>
  </section>
);

const FAQSection = () => (
  <section className="py-24 border-t border-white/5">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-5xl font-display font-bold mb-12 text-center">
        Got Questions? Let&apos;s Answer Them
      </h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {faqItems.map((item, index) => (
          <motion.div
            key={item.question}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl border border-white/5"
          >
            <h3 className="text-xl font-bold mb-3">{item.question}</h3>
            <p className="text-brand-gray leading-relaxed">{item.answer}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-32 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 blur-3xl rounded-full" />
    <div className="container mx-auto px-6 text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
        Ready to <span className="text-gradient">Ship</span> Your Next Build?
      </h2>
      <p className="text-lg text-brand-gray mb-12 max-w-2xl mx-auto">
        Whether you need AI agents, SaaS engineering, mobile apps, desktop tooling,
        or cloud deployment, I can take the build from concept to production.
      </p>
      <NavLink
        to="/contact"
        className="px-10 py-5 bg-brand-blue text-brand-navy font-bold rounded-xl inline-flex items-center gap-2 hover:bg-brand-coral hover:text-white transition-all shadow-2xl shadow-brand-blue/40 text-lg"
      >
        Start Your Project <ArrowRight size={24} />
      </NavLink>
    </div>
  </section>
);

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesGrid />
      <AboutThisDeveloper />
      <PricingSection />
      <FeaturedProjects />
      <CitiesIServe />
      <LanguagesSection />
      <LatestInsights />
      <StatsSection />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
