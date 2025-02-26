import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";

// Define links for fonts and styles
export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Meta /> {/* Ensures Remix handles metadata properly */}
        <Links />

        {/* SEO Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Dhanraj Pimple is a top-rated software developer, AI chatbot builder, and website creator offering services in Satara, Pune, Kolhapur, and Sangli."
        />
        <meta name="author" content="Dhanraj Pimple" />
        <meta
          name="keywords"
          content="Dhanraj Pimple, Software Developer, Website Builder, AI Chatbot Developer, Full-Stack Developer, Golang, Node.js, React.js, Mobile App Development, SaaS, SEO Optimization, Satara, Pune, Kolhapur, Sangli"
        />
        <meta name="google-site-verification" content="feeQ3QtYEX2lJuVM1BEos3tM5qiBNtQh6JoG87it2ZQ" />

        {/* JSON-LD Structured Data (Now Dynamic) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Dhanraj Pimple",
              "jobTitle": "Software Developer & Website Builder",
              "url": "https://dhanrajpimple.vercel.app/",
              "image": "https://dhanrajpimple.vercel.app/assets/favicon.png",
              "description":
                "Dhanraj Pimple is a top-rated software developer, AI chatbot builder, and website creator offering services in Satara, Pune, Kolhapur, and Sangli.",
              "sameAs": [
                "https://www.linkedin.com/in/dhanraj-pimple-1b802a274/",
                "https://github.com/dhanrajpimple",
              ],
              "knowsAbout": [
                "Software Development",
                "Full-Stack Development",
                "AI Chatbot Development",
                "Golang",
                "Node.js",
                "React.js",
                "Mobile App Development",
                "SaaS Solutions",
                "Website Design",
                "SEO Optimization",
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Satara",
                "addressRegion": "Maharashtra",
                "addressCountry": "India",
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "dhanraj.webdev@gmail.com",
                "telephone": "+91-7219111601",
                "availableLanguage": ["English", "Hindi", "Marathi"],
              },
            }),
          }}
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
