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
  const siteUrl = "https://dhanrajpimple.vercel.app/"; // Update with your actual domain
  const siteTitle = "Dhanraj Pimple | Best Software Developer & Website Builder in Satara, Pune, Kolhapur, Sangli";
  const siteDescription = "Looking for a top software developer and website builder in Satara, Pune, Kolhapur, or Sangli? Dhanraj Pimple specializes in full-stack development, AI chatbot creation, website design, mobile app development, and scalable SaaS solutions.";
  const keywords = "Dhanraj Pimple, software developer Pune, best website developer Pune, AI chatbot builder, mobile app developer Pune, Golang developer, Node.js developer, React developer, e-commerce website builder, SaaS developer, software development services, best website builder Satara, full-stack developer Kolhapur, web app developer Sangli, custom software solutions, AI chatbot integration, digital marketing websites, portfolio website development, business website creator, AI-powered apps, SEO-optimized website, fast-loading website developer, enterprise software developer, cloud application developer, React Native expert, web scraping services, API development, machine learning integration, AI-powered chatbot, website development company Pune, custom web solutions, backend developer, scalable web apps, startup software solutions, affordable web development, CRM development, ERP software developer, fintech software developer, health-tech website builder, technology consultant, AI automation expert, software engineer Pune, hybrid mobile app development, PWAs (Progressive Web Apps), website optimization expert, freelance software engineer, AI consulting, chatbot automation services, best UI/UX web design, next-gen web solutions, professional coding services, software architect, AI-driven web apps, IT consultant Pune, cloud backend development, database optimization, DevOps consulting, fast website hosting, best SaaS website design.";
  
  return [
    // ✅ **Primary SEO Tags**
    { title: siteTitle },
    { name: "description", content: siteDescription },
    { name: "keywords", content: keywords },

    // ✅ **Open Graph (OG) Tags for Social Media**
    { property: "og:title", content: siteTitle },
    { property: "og:description", content: siteDescription },
    { property: "og:image", content: `${siteUrl}/assets/favicon.png` },
    { property: "og:url", content: siteUrl },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Dhanraj Portfolio" },

    // ✅ **Twitter Card Tags**
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: siteTitle },
    { name: "twitter:description", content: siteDescription },
    { name: "twitter:image", content: `${siteUrl}/assets/favicon.png` },

    // ✅ **Technical SEO & Verification**
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Dhanraj Pimple" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: "theme-color", content: "#4F46E5" },
    { name: "application-name", content: "Dhanraj Portfolio" },
    { name: "google-site-verification", content: "DQ_IXno1gDKyvpbZc8wNcM5xGsh-ofKRlbAi7oAPetE" },

    // ✅ **Canonical Link**
    { rel: "canonical", href: siteUrl },

    // ✅ **Schema Markup (JSON-LD) for Local SEO**
    { name: "jsonld", content: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Dhanraj Pimple",
        "jobTitle": "Freelance Full-Stack Developer",
        "url": siteUrl,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Satara, Pune, Kolhapur, Sangli",
          "addressCountry": "IN"
        },
        "sameAs": [
          "https://www.linkedin.com/in/dhanraj-pimple-1b802a274/",
          "https://github.com/dhanrajpimple"
        ],
        "image": `${siteUrl}/assets/favicon.png`,
        "description": siteDescription
      })
    }
  ];
};
export default function Index() {


  return (
    <div className={`min-h-screen`}>
      <Navbar />
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
