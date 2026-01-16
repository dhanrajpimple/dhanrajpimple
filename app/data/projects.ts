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
        longDescription: "Built a complex multi-role SaaS platform for Palcode.ai that automates vendor calling, bidding, and document handling. The system uses GPT-4 to analyze vendor proposals and extract key insights, significantly reducing manual overhead.",
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
        longDescription: "A full-stack e-commerce solution built with the MERN stack. It features a robust product management system, secure checkout with Razorpay, and a personalized user experience.",
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
        longDescription: "A visually stunning entertainment platform for Flixix Studios built with Remix.js. It features a seamless user experience and advanced capabilities, leveraging a modern tech stack for high performance and engagement.",
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
        longDescription: "A comprehensive education portal for Shetty Educators. Built to handle large volumes of student inquiries and connect students with quality learning resources efficiently.",
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
        longDescription: "A specialized wholesale platform for celebration materials. It offers party supplies and decorative items at competitive rates, providing a professional digital catalog for B2B customers.",
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
        longDescription: "A professional travel agency website showcasing tour packages and destinations. It features an inquiry-based booking system that streamlines customer requests through a centralized workflow.",
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
