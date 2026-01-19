import {
  isRouteErrorResponse,
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Github, Linkedin, Mail, Cpu, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
  },
];

const SITE_URL = "https://dhanrajpimple.vercel.app";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      subLinks: [
        { name: "DevOps Automation", href: "/services/devops" },
        { name: "Software Development", href: "/services/software" },
        { name: "Web Development", href: "/services/website" },
      ]
    },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass-dark py-3" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Terminal className="text-brand-navy w-6 h-6" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">
            DHANRAJ<span className="text-brand-blue">.PIMPLE</span>
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-brand-blue ${isActive ? "text-brand-blue" : "text-brand-offwhite/80"}`
                }
              >
                {link.name}
              </NavLink>
              {link.subLinks && (
                <div className="absolute top-full left-0 mt-2 w-48 glass-dark opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2 rounded-xl shadow-premium">
                  {link.subLinks.map((sub) => (
                    <NavLink
                      key={sub.name}
                      to={sub.href}
                      className="block px-4 py-2 text-xs hover:bg-white/10 rounded-lg transition-colors"
                    >
                      {sub.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
          <NavLink
            to="/contact"
            className="px-6 py-2.5 bg-brand-blue text-brand-navy font-bold rounded-full hover:bg-brand-coral hover:text-white transition-all shadow-lg shadow-brand-blue/20"
          >
            Hire Me
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-offwhite" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass-dark p-6 md:hidden border-b border-white/10"
          >
            <div className="flex flex-col gap-4 text-center">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium py-2"
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-6 py-3 bg-brand-blue text-brand-navy font-bold rounded-full"
              >
                Hire Me
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

    if (!supabaseKey || !supabaseUrl) {
      console.error("Supabase environment variables are missing");
      setStatus("error");
      return;
    }

    try {
      const response = await fetch(`${supabaseUrl}/rest/v1/rpc/subscribe_email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": supabaseKey,
          "Authorization": `Bearer ${supabaseKey}`
        },
        body: JSON.stringify({
          p_email: email
        })
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      setStatus("error");
    }
  };

  return (
    <footer className="mt-20 border-t border-white/5 py-20 relative overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-20 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Terminal className="text-brand-blue w-8 h-8" />
              <span className="font-display font-bold text-2xl">
                DHANRAJ<span className="text-brand-blue text-lg">_PIMPLE</span>
              </span>
            </div>
            <p className="text-brand-gray max-w-sm mb-8">
              DevOps Automation Engineer & Full-Stack Developer specializing in CI/CD pipelines, cloud infrastructure, and AI-driven platforms.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/dhanrajpimple" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-brand-blue hover:text-brand-navy transition-all">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/dhanrajpimple" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-brand-blue hover:text-brand-navy transition-all">
                <Linkedin size={20} />
              </a>
              <a href="mailto:dhanrajpimple16@gmail.com" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-brand-blue hover:text-brand-navy transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold mb-6 text-brand-offwhite">Services</h4>
            <ul className="space-y-4 text-brand-gray">
              <li><NavLink to="/services/devops" className="hover:text-brand-blue transition-colors">DevOps Automation</NavLink></li>
              <li><NavLink to="/services/software" className="hover:text-brand-blue transition-colors">Software Development</NavLink></li>
              <li><NavLink to="/services/website" className="hover:text-brand-blue transition-colors">Website Development</NavLink></li>
              <li><NavLink to="/blog" className="hover:text-brand-blue transition-colors">Technical Blog</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-6 text-brand-offwhite">Newsletter</h4>
            <p className="text-sm text-brand-gray mb-4">Get the latest DevOps tips and tech insights.</p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-brand-blue w-full"
                />
                <button
                  disabled={status === "loading"}
                  type="submit"
                  className="bg-brand-blue text-brand-navy px-4 py-2 rounded-lg font-bold text-sm disabled:opacity-50"
                >
                  {status === "loading" ? "..." : "Join"}
                </button>
              </div>
              {status === "success" && <p className="text-brand-green text-[10px] font-bold">Successfully subscribed!</p>}
              {status === "error" && <p className="text-red-400 text-[10px] font-bold">Error. Try again.</p>}
            </form>
          </div>
        </div>


        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-gray">
          <p>© {new Date().getFullYear()} Dhanraj Pimple. Built with Remix & Tailwind v4.</p>
          <div className="flex gap-8">
            <NavLink to="/privacy" className="hover:text-white transition-colors">Privacy Policy</NavLink>
            <NavLink to="/terms" className="hover:text-white transition-colors">Terms of Service</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const canonicalUrl = `${SITE_URL}${location.pathname === "/" ? "" : location.pathname}`;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonicalUrl} />
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Dhanraj Pimple",
                "jobTitle": "DevOps Engineer & Full-Stack Developer",
                "url": "https://dhanrajpimple.vercel.app/",
                "image": "https://dhanrajpimple.vercel.app/assets/og-image.png",
                "description":
                  "Expert DevOps engineer, SEO Specialist, and Full-Stack Software Developer specializing in CI/CD pipelines, cloud infrastructure (AWS/K8s), AI-driven chatbot platforms, and high-performance websites for businesses in Pune, Satara, and beyond.",
                "sameAs": [
                  "https://www.linkedin.com/in/dhanrajpimple/",
                  "https://github.com/dhanrajpimple",
                ],
                "knowsAbout": [
                  "DevOps Automation",
                  "SEO Strategy & Implementation",
                  "Cloud Infrastructure (AWS, Azure, GCP)",
                  "Infrastructure as Code (Terraform, Ansible)",
                  "CI/CD Pipelines (Jenkins, GitHub Actions, GitLab CI)",
                  "Kubernetes (EKS, GKE, K8s)",
                  "Docker & Containerization",
                  "AI & LLM Integration (OpenAI, LangChain)",
                  "Full-Stack Development (React, Remix, Next.js)",
                  "Backend Development (Node.js, FastAPI, Python, Go)",
                  "Mobile App Development",
                  "Database Design (PostgreSQL, MongoDB, Supabase)",
                  "Technical SEO & Performance Optimization",
                  "Chatbot Development"
                ],
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Satara",
                  "addressRegion": "Maharashtra",
                  "addressCountry": "IN"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "name": "Dhanraj Pimple - Freelance Web Developer & SEO Expert",
                "image": "https://dhanrajpimple.vercel.app/assets/og-image.png",
                "@id": "https://dhanrajpimple.vercel.app/",
                "url": "https://dhanrajpimple.vercel.app/",
                "telephone": "+91-91468-90521",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Satara",
                  "addressLocality": "Satara",
                  "addressRegion": "MH",
                  "postalCode": "415001",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 17.6805,
                  "longitude": 73.9803
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  "opens": "09:00",
                  "closes": "21:00"
                },
                "sameAs": [
                  "https://www.linkedin.com/in/dhanrajpimple/",
                  "https://github.com/dhanrajpimple"
                ],
                "areaServed": [
                  { "@type": "City", "name": "Satara" },
                  { "@type": "City", "name": "Pune" },
                  { "@type": "City", "name": "Kolhapur" },
                  { "@type": "City", "name": "Sangli" },
                  { "@type": "City", "name": "Solapur" },
                  { "@type": "Country", "name": "India" }
                ],
                "priceRange": "$$$"
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": location.pathname.split("/").filter(Boolean).map((path, index, array) => ({
                  "@type": "ListItem",
                  "position": index + 1,
                  "name": path.charAt(0).toUpperCase() + path.slice(1),
                  "item": `${SITE_URL}/${array.slice(0, index + 1).join("/")}`
                }))
              },
              {
                "@context": "https://schema.org",
                "@type": "SiteNavigationElement",
                "name": ["Home", "About", "Services", "Portfolio", "Blog", "Contact"],
                "url": [
                  `${SITE_URL}/`,
                  `${SITE_URL}/about`,
                  `${SITE_URL}/services`,
                  `${SITE_URL}/portfolio`,
                  `${SITE_URL}/blog`,
                  `${SITE_URL}/contact`
                ]
              },
              {
                "@context": "https://schema.org",
                "@id": "https://dhanrajpimple.vercel.app/#service",
                "@type": "Service",
                "serviceType": "DevOps Consulting, SEO Optimization, & Full-Stack Development",
                "provider": {
                  "@type": "Person",
                  "name": "Dhanraj Pimple"
                },
                "areaServed": "Global",
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "DevOps, SEO & Development Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "DevOps Automation & CI/CD Pipelines"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Custom Software & SaaS Development"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Technical SEO & Web Performance Optimization"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "AI Chatbot & LLM Integration"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Mobile App Development (React Native, Flutter)"
                      }
                    }
                  ]
                }
              }
            ]),
          }}
        />
      </head>
      <body>
        <Navigation />
        <div className="pt-24 min-h-[calc(100vh-80px)]">
          {children}
        </div>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
