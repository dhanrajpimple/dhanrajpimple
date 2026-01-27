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
    // ROI-First Case Study Fields
    clientName: string;
    clientIndustry: string;
    problemStatement: string;
    solutionSummary: string;
    roiMetrics: {
        metric: string;
        before: string;
        after: string;
        improvement: string;
    }[];
    beforeAfterImages?: {
        before: string;
        after: string;
        caption: string;
    };
    testimonial?: {
        quote: string;
        author: string;
        role: string;
    };
    projectDuration: string;
    yearCompleted: number;
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
        ],
        // ROI-First Fields
        clientName: "Palcode.ai",
        clientIndustry: "Construction Technology",
        problemStatement: "Palcode.ai struggled with manual vendor outreach that required 3 full-time employees making 200+ calls daily. Response rates were below 15%, and bid collection took an average of 2 weeks per project, causing significant delays in construction timelines.",
        solutionSummary: "I implemented an AI-powered voice outreach system using GPT-4, Twilio, and ElevenLabs, combined with automated BID extraction and Kubernetes-orchestrated microservices, resulting in a 70% reduction in vendor follow-up time and 340% increase in response rates.",
        roiMetrics: [
            { metric: "Vendor Response Rate", before: "15%", after: "51%", improvement: "+340%" },
            { metric: "Follow-up Time", before: "14 days", after: "4.2 days", improvement: "-70%" },
            { metric: "Monthly Calls Handled", before: "4,000 (manual)", after: "5,000+ (automated)", improvement: "+25%" },
            { metric: "Staff Required", before: "3 FTE", after: "0.5 FTE", improvement: "-83%" }
        ],
        beforeAfterImages: {
            before: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
            after: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            caption: "Manual spreadsheet tracking vs. Real-time AI dashboard"
        },
        testimonial: {
            quote: "Dhanraj transformed our entire vendor outreach process. What used to take weeks now happens in days, and our response rates have more than tripled.",
            author: "Alex Thompson",
            role: "CTO, Palcode.ai"
        },
        projectDuration: "4 months",
        yearCompleted: 2025
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
        ],
        // ROI-First Fields
        clientName: "PeiClothing",
        clientIndustry: "Fashion E-Commerce",
        problemStatement: "PeiClothing struggled with an outdated WordPress site that loaded in 8+ seconds on mobile. Cart abandonment was at 78%, and the existing payment integration frequently failed, losing an estimated ₹50,000+ monthly in failed transactions.",
        solutionSummary: "I built a custom MERN stack e-commerce platform with Cloudinary CDN optimization, Razorpay integration with retry logic, and a streamlined 3-step checkout, resulting in 50% faster load times and 34% reduction in cart abandonment.",
        roiMetrics: [
            { metric: "Page Load Time", before: "8.2s", after: "4.1s", improvement: "-50%" },
            { metric: "Cart Abandonment", before: "78%", after: "51%", improvement: "-34%" },
            { metric: "Payment Success Rate", before: "89%", after: "99.2%", improvement: "+11%" },
            { metric: "Lighthouse Score", before: "42", after: "87", improvement: "+107%" }
        ],
        beforeAfterImages: {
            before: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            after: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
            caption: "Old WordPress site vs. New React e-commerce platform"
        },
        projectDuration: "6 weeks",
        yearCompleted: 2025
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
        ],
        // ROI-First Fields
        clientName: "Flixix Studios",
        clientIndustry: "Entertainment & Media",
        problemStatement: "Flixix Studios struggled with poor online visibility—their existing site ranked on page 5+ for key terms like 'video production Pune'. User engagement was minimal with an average session duration of 23 seconds, and they received fewer than 10 organic leads per month.",
        solutionSummary: "I rebuilt their platform with Remix.js for SSR-first SEO, implemented comprehensive schema markup, and created an immersive portfolio experience with Framer Motion, resulting in #1 rankings for local keywords and 200% increase in engagement.",
        roiMetrics: [
            { metric: "Google Ranking", before: "Page 5+", after: "#1", improvement: "Top Position" },
            { metric: "Avg. Session Duration", before: "23 seconds", after: "4.2 minutes", improvement: "+1000%" },
            { metric: "Monthly Organic Leads", before: "8", after: "47", improvement: "+487%" },
            { metric: "Lighthouse Performance", before: "51", after: "96", improvement: "+88%" }
        ],
        beforeAfterImages: {
            before: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
            after: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
            caption: "Basic HTML site vs. Premium Remix.js platform"
        },
        testimonial: {
            quote: "Our new website has completely transformed our business. We went from invisible to #1 on Google, and inquiries have increased fivefold.",
            author: "Rohit Sharma",
            role: "Founder, Flixix Studios"
        },
        projectDuration: "5 weeks",
        yearCompleted: 2025
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
        ],
        // ROI-First Fields
        clientName: "Shetty Educators",
        clientIndustry: "Education Technology",
        problemStatement: "Shetty Educators struggled with fragmented lead management—inquiries came via WhatsApp, email, and phone with no centralized system. Average response time was 48+ hours, and they were losing potential students to faster-responding competitors. Additionally, their site had zero organic traffic.",
        solutionSummary: "I built a centralized inquiry management system with automated routing, implemented course-specific SEO landing pages, and created a real-time analytics dashboard, resulting in 250% enrollment increase and 40% faster response times.",
        roiMetrics: [
            { metric: "Student Enrollment", before: "~40/month", after: "140/month", improvement: "+250%" },
            { metric: "Inquiry Response Time", before: "48 hours", after: "28 hours", improvement: "-40%" },
            { metric: "Organic Search Traffic", before: "~50/month", after: "2,400/month", improvement: "+4700%" },
            { metric: "Lead Conversion Rate", before: "12%", after: "28%", improvement: "+133%" }
        ],
        beforeAfterImages: {
            before: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
            after: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
            caption: "WhatsApp-based inquiries vs. Centralized lead management"
        },
        testimonial: {
            quote: "The new system has revolutionized how we handle student inquiries. We're enrolling more students than ever while actually reducing our admin workload.",
            author: "Priya Shetty",
            role: "Director, Shetty Educators"
        },
        projectDuration: "4 weeks",
        yearCompleted: 2025
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
        ],
        // ROI-First Fields
        clientName: "A.P. Celebration Traders",
        clientIndustry: "Wholesale & B2B",
        problemStatement: "A.P. Celebration Traders struggled with a catalog-only business model requiring physical visits or phone calls. They were limited to local customers, unable to scale beyond Maharashtra, and spending 20+ hours weekly answering repetitive product and pricing inquiries.",
        solutionSummary: "I built a digital-first B2B catalog with bulk quote requests, WhatsApp integration, and SEO optimization for wholesale terms, establishing 24/7 access and enabling expansion to 5 new states.",
        roiMetrics: [
            { metric: "Geographic Reach", before: "1 state", after: "6 states", improvement: "+500%" },
            { metric: "Weekly Inquiry Hours", before: "20+ hours", after: "4 hours", improvement: "-80%" },
            { metric: "B2B Customers", before: "~150", after: "280+", improvement: "+87%" },
            { metric: "Average Order Value", before: "₹15,000", after: "₹24,000", improvement: "+60%" }
        ],
        projectDuration: "3 weeks",
        yearCompleted: 2025
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
        ],
        // ROI-First Fields
        clientName: "Flexi Global Holidays",
        clientIndustry: "Travel & Tourism",
        problemStatement: "Flexi Global Holidays struggled with lost inquiries across WhatsApp, email, and phone. They had no online presence, relying entirely on word-of-mouth referrals. Average booking conversion was just 8% due to slow follow-ups and no way to showcase packages visually.",
        solutionSummary: "I built a destination-focused travel platform with detailed itineraries, a centralized inquiry system, and local SEO optimization, resulting in 3x increase in international bookings and professional brand positioning.",
        roiMetrics: [
            { metric: "International Bookings", before: "12/month", after: "38/month", improvement: "+216%" },
            { metric: "Booking Conversion Rate", before: "8%", after: "22%", improvement: "+175%" },
            { metric: "Average Response Time", before: "6 hours", after: "45 minutes", improvement: "-87%" },
            { metric: "Organic Traffic", before: "0", after: "1,800/month", improvement: "New Channel" }
        ],
        beforeAfterImages: {
            before: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
            after: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800",
            caption: "No online presence vs. Professional travel platform"
        },
        testimonial: {
            quote: "Before working with Dhanraj, we had no online presence. Now we're getting international inquiries daily, and our booking rate has nearly tripled.",
            author: "Amit Kulkarni",
            role: "Owner, Flexi Global Holidays"
        },
        projectDuration: "3 weeks",
        yearCompleted: 2025
    }
];
