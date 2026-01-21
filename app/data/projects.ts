export interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    longDescription: string;
    image: string;
    tags: string[];
    techStack: string[];
    link?: string;
    github?: string;
    results: string[];
    features: string[];
}

export const projects: Project[] = [
    {
        id: "ai-con-vendor",
        title: "AI Vendor Outreach Platform",
        category: "DevOps / AI / SaaS",
        description: "An AI-driven platform for construction bidding automation using FastAPI and AWS.",
        longDescription: "Built a complex multi-role SaaS platform for Palcode.ai that automates vendor calling, bidding, and document handling. The system architecture leverages FastAPI for high-performance API endpoints and AWS for scalable infrastructure. We integrated Twilio and ElevenLabs for automated AI-driven voice outreach, allowing the system to handle thousands of vendor calls simultaneously. The BID extraction engine uses GPT-4 to intelligently parse incoming proposals, extracting key data points and populating the database automatically. This centralized workflow significantly reduced manual overhead for the construction management team, allowing them to focus on decision-making rather than data entry.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
        tags: ["DevOps", "AI", "SaaS"],
        techStack: ["React", "FastAPI", "PostgreSQL", "AWS (SQS, EventBridge)", "K8s", "OpenAI"],
        link: "https://project.palcode.ai",
        results: [
            "Reduced vendor follow-up time by 70%",
            "Automated over 5,000+ bidding calls per month",
            "Achieved 99.9% uptime for AI microservices"
        ],
        features: [
            "AI-driven automated calling (Twilio + ElevenLabs)",
            "Smart BID extraction using GPT-4",
            "Automated contract generation with DocuSign",
            "Real-time analytics dashboard for vendors and admins"
        ]
    },
    {
        id: "pei-clothing",
        title: "PeiClothing E-Commerce",
        category: "Full Stack Dev",
        description: "Modern e-commerce platform with product catalog and secure payment integration.",
        longDescription: "A full-stack e-commerce solution built with the MERN stack (MongoDB, Express, React, Node.js). It features a robust product management system with a custom admin dashboard for inventory tracking and order fulfillment. We implemented secure JWT-based authentication to protect user data and integrated the Razorpay payment gateway for seamless, secure transactions. To optimize performance, we utilized an image CDN (Cloudinary) to serve high-quality product images in WebP format, reducing load times by 50%. The frontend uses Redux for efficient state management, ensuring a smooth and responsive shopping experience even as the product catalog grows.",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1200",
        tags: ["MERN", "Payments"],
        techStack: ["React", "Node.js", "Express", "MongoDB", "Razorpay", "Redux"],
        github: "https://github.com/dhanrajpimple/pie-clothings",
        results: [
            "Optimized load times by 50% using image CDN",
            "Implemented secure JWT authentication",
            "Built a custom admin dashboard for inventory"
        ],
        features: [
            "Real-time cart and inventory sync",
            "Razorpay payment gateway integration",
            "Multi-stage checkout process",
            "Dynamic search and filtering"
        ]
    },
    {
        id: "flixix-studios",
        title: "Flixix Studios",
        category: "Web Dev / Entertainment",
        description: "Modern entertainment platform with seamless UX and advanced streaming capabilities.",
        longDescription: "A visually stunning entertainment platform for Flixix Studios built with Remix.js. This project prioritized a seamless user experience and advanced media capabilities. We leveraged Remix's server-side rendering to achieve lightning-fast initial load times and exceptional SEO performance. The backend is powered by a combination of Node.js and MongoDB, with Supabase handling real-time data needs. We used Tailwind CSS for a modern, responsive design and Framer Motion for high-end micro-animations. The result is a high-engagement platform that consistently scores 95+ on Lighthouse audits and has significantly increased user retention for the client.",
        image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80&w=1200",
        tags: ["Remix", "Streaming", "SEO"],
        techStack: ["Remix", "Node.js", "MongoDB", "Supabase", "Tailwind CSS", "SEO", "Cloudinary"],
        link: "https://www.flixixstudios.in/",
        results: [
            "User engagement increased by 200%",
            "Averaged 95+ Lighthouse scores",
            "Ranked #1 for local studio keywords"
        ],
        features: [
            "Advanced streaming capabilities",
            "Dynamic gallery management",
            "SEO-first architecture",
            "Smooth page transitions"
        ]
    },
    {
        id: "shetty-educators",
        title: "Shetty Educators",
        category: "Web Dev / EdTech",
        description: "Comprehensive educational platform connecting students with quality learning resources.",
        longDescription: "A comprehensive education portal designed for Shetty Educators to streamline their enrollment process. Built with Remix.js to handle large volumes of student inquiries, the site connects students with quality learning resources efficiently. We implemented a searchable course database and an automated inquiry routing system that sends leads directly to the appropriate counselor. The backend uses Supabase for reliable data storage and authentication. We focused heavily on technical SEO for course-specific search terms, resulting in a 250% increase in student enrollment within the first few months of launch. The lead management panel provides real-time analytics on student conversion rates.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200",
        tags: ["EdTech", "Remix", "SEO"],
        techStack: ["Remix.js", "Tailwind CSS", "SEO", "Supabase"],
        link: "https://shettyeducators.in/",
        results: [
            "Student enrollment up 250%",
            "Reduced inquiry response time by 40%",
            "SEO optimized for course-specific search terms"
        ],
        features: [
            "Searchable course database",
            "Automated inquiry routing",
            "Lead management panel",
            "Resource download system"
        ]
    },
    {
        id: "ap-celebration",
        title: "A.P. Celebration Traders",
        category: "Web Dev / Wholesale",
        description: "Wholesale celebration materials platform offering party supplies and decorative items.",
        longDescription: "A specialized B2B wholesale platform for A.P. Celebration Traders. This digital catalog allows wholesale customers to browse party supplies and decorative items at competitive rates. Built with Remix.js and Tailwind CSS, the platform provides a professional interface that reflects the scale of the business. We integrated interactive product displays and a streamlined inquiry process that allows B2B customers to request bulk quotes directly through the site. Using Framer Motion, we created a smooth, engaging browsing experience that works perfectly across mobile and desktop devices. This transition to a digital-first approach established 24/7 access for their global client base and significantly boosted wholesale sales.",
        image: "https://media.istockphoto.com/id/2150795471/vector/fireworks-background-for-the-4th-of-july-or-bastille-day.jpg?s=612x612&w=0&k=20&c=vfAIdGgSQknrDE-0PQZlK1ZQ-EJ8-qiHKk9ctSd-t_c=",
        tags: ["Wholesale", "B2B", "Remix"],
        techStack: ["Remix.js", "Tailwind CSS", "Framer Motion"],
        link: "https://apcelebrationtraders.in/",
        results: [
            "Increased sales significantly",
            "Established 24/7 digital catalog access",
            "Streamlined wholesale inquiry process"
        ],
        features: [
            "Comprehensive product catalog",
            "Wholesale pricing management",
            "Interactive product displays",
            "Mobile-friendly interface"
        ]
    },
    {
        id: "flexi-global",
        title: "Flexi Global Holidays",
        category: "Web Dev / Travel",
        description: "Travel agency website with tour packages and an inquiry-based booking system.",
        longDescription: "A professional travel agency website for Flexi Global Holidays, showcasing comprehensive tour packages and international destinations. The site features an inquiry-based booking system that replaces fragmented email chains with a centralized, professional workflow. Built with Remix.js, the architecture is designed for speed and discoverability. Each destination has a dedicated, SEO-optimized landing page featuring dynamic galleries and detailed itineraries. We focused on local SEO for the Maharashtra region, which led to a marked increase in both domestic and international booking inquiries. The system's automated lead tracking ensures that the Flexi Global team can respond to customer requests within record time.",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200",
        tags: ["Travel", "Booking", "Remix"],
        techStack: ["Remix.js", "Tailwind CSS", "Framer Motion"],
        link: "https://flexiglobalholidays.in/",
        results: [
            "Established a professional online presence",
            "Streamlined customer inquiries via centralized workflow",
            "Increased international booking inquiries"
        ],
        features: [
            "Tour package showcase",
            "Centralized booking request workflow",
            "Dynamic destination pages",
            "SEO optimized for travel keywords"
        ]
    }
];
