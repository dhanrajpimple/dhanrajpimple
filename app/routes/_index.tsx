import { useState, useEffect } from "react";
import Contact from "~/Component/Contact";
import Footer from "~/Component/Footer";
import Hero from "~/Component/Hero";
import Navbar from "~/Component/Navbar";
import OurServices from "~/Component/OurService";
import Projects from "~/Component/Projects";
import Skills from "~/Component/Skills";
import { MetaFunction } from "@remix-run/react";



export let meta: MetaFunction = () => {
  const placeholderDomain = "https://dhanrajpimple.netlify.app"; // Placeholder domain

  return [
    // General Meta Tags
    { title: "Dhanraj | Full-Stack Developer " },
    { name: "description", content: "Experienced full-stack developer offering bespoke web solutions. Open to full-time roles and freelance projects. Let's build something great together!" },
    { name: "keywords", content: "full-stack developer, freelance web developer, web development, software engineer, hire developer, portfolio, React developer, Golang developer, mobile app developer, SaaS product development, scalable applications" },

    // Open Graph (OG) Tags
    { property: "og:title", content: "Dhanraj | Full-Stack Developer " },
    { property: "og:description", content: "Explore my portfolio showcasing diverse projects in web and mobile development. Available for hire and freelance opportunities." },
    { property: "og:image", content: `${placeholderDomain}/assests/favicon.png` },
    { property: "og:url", content: placeholderDomain },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "John Doe Portfolio" },

    // Twitter Card Tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Dhanraj | Full-Stack Developer" },
    { name: "twitter:description", content: "Discover my work in full-stack development. Open to new opportunities and collaborations." },
    { name: "twitter:image", content: `${placeholderDomain}/assests/favicon.png` },

    // Additional SEO Meta Tags
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Dhanraj" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: "theme-color", content: "#4F46E5" }, // Custom theme color
    { name: "application-name", content: "Dhanraj Portfolio" },

    // Schema.org Structured Data (JSON-LD)
    { name: "jsonld", content: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Dhanraj",
        "jobTitle": "Full-Stack Developer",
        "url": placeholderDomain,
        "sameAs": [
          "https://www.linkedin.com/in/dhanraj-pimple-1b802a274/",
          "https://github.com/dhanrajpimple",
          
        ],
        "image": `${placeholderDomain}/assests/favicon.png`,
        "description": "Experienced full-stack developer offering bespoke web solutions. Open to full-time roles and freelance projects."
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
        <Contact  />
      </main>
      <Footer />
    </div>
  );
}
