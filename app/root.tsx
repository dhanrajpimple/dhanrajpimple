import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Hire Dhanraj Pimple – top-rated freelance software developer, AI chatbot builder, and high-performance website creator serving Satara, Pune, Kolhapur, and Sangli, Maharashtra, India."
        />
        <meta name="author" content="Dhanraj Pimple" />
        <meta
          name="keywords"
          content="Dhanraj Pimple, freelance software developer, freelance web developer, hire freelance developer, hire freelance programmer, hire freelance software engineer, best freelance developer India, best freelance developer Maharashtra, best freelance developer Pune, best freelance developer Satara, best freelance developer Kolhapur, best freelance developer Sangli, Software Developer, Website Builder, AI Chatbot Developer, Full-Stack Developer, Golang, Node.js, React.js, Mobile App Development, SaaS, SEO Optimization, Satara, Pune, Kolhapur, Sangli"
        />
        <meta name="google-site-verification" content="feeQ3QtYEX2lJuVM1BEos3tM5qiBNtQh6JoG87it2ZQ" />
        <Links />
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
