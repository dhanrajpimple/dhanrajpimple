import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";

// Defining the links function to preconnect and load Google Fonts
export const links: LinksFunction = () => [
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

// Layout Component to wrap the entire app structure
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="DQ_IXno1gDKyvpbZc8wNcM5xGsh-ofKRlbAi7oAPetE"
        />
        <meta name="google-site-verification" content="feeQ3QtYEX2lJuVM1BEos3tM5qiBNtQh6JoG87it2ZQ" />

        <Meta />
        <Links />
      </head>
      <body>
        {children} {/* This will render child routes' content */}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

// App Component for rendering the layout and routing outlet
export default function App() {
  return <Outlet />; // Outlet renders the specific route's content
}
