import { useState, useEffect } from "react";
import Contact from "~/Component/Contact";
import Footer from "~/Component/Footer";
import Hero from "~/Component/Hero";
import Navbar from "~/Component/Navbar";
import OurServices from "~/Component/OurService";
// import Projects from "~/Component/Projects";
import Skills from "~/Component/Skills";
import { MetaFunction } from "@remix-run/react";

// Meta tags with improved SEO focus
export let meta: MetaFunction = () => {
  const placeholderDomain = "https://dhanrajpimple.vercel.app/"; // Placeholder domain

  return [
    // General Meta Tags
    { title: "Dhanraj Pimple | Best Freelancer & Full-Stack Developer" },
    { name: "description", content: "Dhanraj Pimple: Best freelancer offering affordable website and software development services. Expertise in scalable backends, mobile apps, and SaaS solutions." },
    { name: "keywords", content: "Dhanraj Pimple, best freelancer, cheap website developer, best website developer freelancer, software developer, full-stack developer, Golang developer, React developer, mobile app developer, SaaS development" },

    // Open Graph (OG) Tags
    { property: "og:title", content: "Dhanraj Pimple | Best Freelancer & Full-Stack Developer" },
    { property: "og:description", content: "Hire Dhanraj Pimple for top-notch website development services. Affordable and scalable solutions tailored to your needs." },
    { property: "og:image", content: `${placeholderDomain}/assets/favicon.png` },
    // { property: "og:url", content: placeholderDomain },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Dhanraj Portfolio" },
    { property: "google-site-verification", content: "DQ_IXno1gDKyvpbZc8wNcM5xGsh-ofKRlbAi7oAPetE" },

    // Twitter Card Tags
    { name: "twitter:card", content: "summary_large" },
    { name: "twitter:title", content: "Dhanraj Pimple | Best Freelancer & Full-Stack Developer" },
    { name: "twitter:description", content: "Affordable freelance website development by Dhanraj Pimple. Expertise in scalable and modern web solutions." },
    // { name: "twitter:image", content: `${placeholderDomain}/assets/favicon.png` },

    // Additional SEO Meta Tags
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Dhanraj Pimple" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: "theme-color", content: "#4F46E5" },
    { name: "application-name", content: "Dhanraj Portfolio" },

    // Canonical Link
    { rel: "canonical", href: placeholderDomain },

    // Structured Data (JSON-LD)
    { name: "jsonld", content: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Dhanraj Pimple",
        "jobTitle": "Full-Stack Developer",
        "url": placeholderDomain,
        "sameAs": [
          "https://www.linkedin.com/in/dhanraj-pimple-1b802a274/",
          "https://github.com/dhanrajpimple"
        ],
        // "image": `${placeholderDomain}/assets/favicon.png`,
        "description": "Dhanraj Pimple: Best freelancer offering affordable website and software development services."
      })
    }
  ];
};
export default function Index() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Ensure we are in the browser before accessing localStorage
    if (typeof window !== "undefined") {
      // Check localStorage for saved theme preference
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setDarkMode(savedTheme === "dark");
      } else {
        // If no saved preference, use system preference
        setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Save the theme to localStorage whenever it changes
      localStorage.setItem("theme", darkMode ? "dark" : "light");

      // Apply dark mode class to the document
      if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <Skills />
        <OurServices />
        {/* <Projects /> Added Projects Section */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
