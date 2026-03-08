import type { ComponentType } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  Clock,
  Globe,
  Mail,
  ShieldCheck,
  Smartphone,
  Zap,
} from "lucide-react";
import { NavLink, type MetaFunction } from "react-router";

import { absoluteUrl, buildPageMeta } from "~/lib/seo";

export const meta: MetaFunction = () => [
  ...buildPageMeta({
    title: "Pricing | Dhanraj Pimple - Websites, Apps, AI & DevOps India",
    description:
      "View starting prices for websites, full-stack products, mobile apps, AI chatbot integration, and automation services from Dhanraj Pimple, a freelance developer in India.",
    path: "/pricing",
  }),
  {
    "script:ld+json": {
      "@context": "https://schema.org",
      "@type": "PriceSpecification",
      name: "Web Development Services Pricing - Dhanraj Pimple",
      url: absoluteUrl("/pricing"),
      provider: {
        "@type": "Person",
        name: "Dhanraj Pimple",
        email: "dhanrajpimple16@gmail.com",
        telephone: "+91-91468-90521",
      },
      offers: [
        {
          "@type": "Offer",
          name: "Starter Static Website",
          price: "5999",
          priceCurrency: "INR",
          description:
            "8-page static website with 1 year .in domain, responsive design, SEO, and 1 month support",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Full Stack Pro Website",
          price: "9999",
          priceCurrency: "INR",
          description:
            "Dynamic website with backend CMS, admin dashboard, database, 2 year domain, and 3 months support",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Mobile Application",
          price: "14999",
          priceCurrency: "INR",
          description:
            "Cross-platform Android and iOS app with push notifications, API integration, and 3 months support",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "AI Chatbot Integration",
          price: "999",
          priceCurrency: "INR",
          description: "AI-powered chatbot for 24/7 automated customer support",
        },
        {
          "@type": "Offer",
          name: "SEO and Automation",
          price: "499",
          priceCurrency: "INR",
          description: "Advanced keyword ranking and business workflow automation",
        },
      ],
      areaServed: ["Satara", "Pune", "Mumbai", "Maharashtra", "India", "Global"],
    },
  },
];

type PricingCardProps = {
  title: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  icon: ComponentType<{ size?: number }>;
  delay?: number;
};

const PricingCard = ({
  title,
  price,
  originalPrice,
  description,
  features,
  isPopular,
  icon: Icon,
  delay = 0,
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`relative p-8 rounded-3xl border transition-all duration-300 h-full flex flex-col ${
        isPopular
          ? "bg-brand-blue/5 border-brand-blue shadow-2xl shadow-brand-blue/10 transform scale-105 z-10"
          : "bg-white/[0.02] border-white/10 hover:border-white/20"
      }`}
    >
      {isPopular ? (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-blue text-brand-navy text-xs font-bold rounded-full uppercase tracking-widest">
          Most Popular
        </div>
      ) : null}

      <div className="mb-8">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
            isPopular ? "bg-brand-blue text-brand-navy" : "bg-white/5 text-brand-blue"
          }`}
        >
          <Icon size={24} />
        </div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-brand-gray text-sm leading-relaxed mb-6">{description}</p>

        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-display font-bold text-white">{price}</span>
          {originalPrice ? (
            <span className="text-brand-gray line-through text-lg">{originalPrice}</span>
          ) : null}
        </div>
      </div>

      <div className="space-y-4 mb-10 flex-1">
        {features.map((feature) => (
          <div key={feature} className="flex gap-3 text-sm">
            <Check size={18} className="text-brand-blue shrink-0" />
            <span className="text-brand-offwhite/80">{feature}</span>
          </div>
        ))}
      </div>

      <NavLink
        to="/contact"
        className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
          isPopular
            ? "bg-brand-blue text-brand-navy hover:bg-brand-coral hover:text-white"
            : "button-glass text-white hover:bg-white/10"
        }`}
      >
        Get Started <ArrowRight size={18} />
      </NavLink>
    </motion.div>
  );
};

export default function Pricing() {
  const mainPlans = [
    {
      title: "Starter Static",
      price: "Rs. 5,999",
      originalPrice: "Rs. 8,999",
      description:
        "Perfect for small businesses and personal brands that need a polished online presence quickly.",
      icon: Globe,
      features: [
        "Up to 8 custom pages",
        "Modern responsive design",
        "1 year .in domain included",
        "Basic SEO setup",
        "Google Search Console integration",
        "Contact form integration",
        "High performance and speed",
        "1 month future support",
      ],
    },
    {
      title: "Full Stack Pro",
      price: "Rs. 9,999",
      originalPrice: "Rs. 14,999",
      isPopular: true,
      description:
        "Complete dynamic solution with backend workflows for startups, SaaS products, and business systems.",
      icon: Zap,
      features: [
        "Everything in Starter",
        "Custom backend CMS",
        "User authentication",
        "Database integration",
        "2 years .in domain included",
        "Advanced technical SEO",
        "Admin dashboard",
        "3 months dedicated support",
      ],
    },
    {
      title: "Mobile App",
      price: "Rs. 14,999",
      originalPrice: "Rs. 19,999",
      description:
        "Scale your business to Android and iOS with a performant cross-platform mobile application.",
      icon: Smartphone,
      features: [
        "Android and iOS support",
        "Optimized performance",
        "Push notifications",
        "Real-time data sync",
        "Play Store submission guide",
        "Intuitive user interface",
        "API integration",
        "3 months dedicated support",
      ],
    },
  ];

  const addons = [
    {
      title: "AI Chatbot",
      price: "Rs. 999",
      description: "Automate support and lead capture with a production-ready AI chatbot.",
      icon: Bot,
    },
    {
      title: "SEO and Automation",
      price: "Rs. 499",
      description: "Keyword optimization, analytics setup, and workflow automation add-ons.",
      icon: BarChart3,
    },
  ];

  return (
    <main className="pb-32">
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Invest in Your <span className="text-gradient">Digital Growth</span>
            </h1>
            <p className="text-brand-gray text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Transparent, affordable pricing for websites, software systems, mobile
              apps, and automation projects built to launch fast and scale cleanly.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {mainPlans.map((plan, index) => (
              <PricingCard key={plan.title} {...plan} delay={index * 0.1} />
            ))}
          </div>
          <p className="mt-8 text-center text-brand-gray text-sm italic">
            Starting prices only. Final quotes depend on features, integrations, and delivery scope.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Add-ons</h2>
            <p className="text-brand-gray">Optional upgrades for support, automation, and growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {addons.map((addon, index) => (
              <motion.div
                key={addon.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-3xl flex items-center gap-6 group hover:border-brand-blue/30 transition-all"
              >
                <div className="w-14 h-14 bg-brand-blue/10 text-brand-blue rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <addon.icon size={28} />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2 gap-4">
                    <h3 className="text-xl font-bold">{addon.title}</h3>
                    <span className="text-brand-blue font-bold">{addon.price}</span>
                  </div>
                  <p className="text-brand-gray text-sm">{addon.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-brand-gray">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 text-brand-blue">
                <Clock size={24} />
              </div>
              <h4 className="text-brand-offwhite font-bold mb-2">Fast Delivery</h4>
              <p className="text-sm">Quick turnaround without cutting corners on engineering quality.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 text-brand-blue">
                <ShieldCheck size={24} />
              </div>
              <h4 className="text-brand-offwhite font-bold mb-2">Dedicated Support</h4>
              <p className="text-sm">You get post-launch support so the delivery remains stable and useful.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 text-brand-blue">
                <BarChart3 size={24} />
              </div>
              <h4 className="text-brand-offwhite font-bold mb-2">SEO Ready</h4>
              <p className="text-sm">Every website build starts with technical SEO and performance basics in place.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-display font-bold mb-12 text-center text-gradient">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-2">How much does a website cost for a small business in India?</h3>
              <p className="text-brand-gray text-sm">
                A professional static website starts at Rs. 5,999, while dynamic full-stack applications start at Rs. 9,999. These packages include domain setup and foundational SEO.
              </p>
            </div>
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-2">Why hire a freelance developer instead of an agency?</h3>
              <p className="text-brand-gray text-sm">
                Direct access means faster decisions, clearer scope, lower overhead, and tighter accountability from discovery to delivery.
              </p>
            </div>
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-2">Is SEO included in the website development package?</h3>
              <p className="text-brand-gray text-sm">
                Yes. Baseline technical SEO is included in website packages, and deeper SEO or automation work can be scoped as an add-on.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="container mx-auto px-6">
          <div className="glass-dark border border-brand-blue/20 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-brand-blue to-transparent" />
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Need a Custom Quote?</h2>
            <p className="text-brand-gray mb-10 max-w-xl mx-auto">
              Have a project that spans AI, product engineering, integrations, and deployment? I can scope it with you directly.
            </p>
            <NavLink
              to="/contact"
              className="px-10 py-5 bg-brand-blue text-brand-navy font-bold rounded-xl inline-flex items-center gap-2 hover:bg-brand-coral hover:text-white transition-all shadow-2xl shadow-brand-blue/40"
            >
              Get a Free Consultation <Mail size={20} />
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  );
}
