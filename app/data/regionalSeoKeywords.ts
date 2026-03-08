export const PRIMARY_SEO_KEYWORDS = [
  // Core positioning
  "Freelance Full Stack Developer India",
  "Freelance developer India",
  "Full stack developer India",
  "Backend developer India",
  "Hire developer India",

  // AI & SaaS
  "Hire AI developer India",
  "AI SaaS developer India",
  "AI agent developer",
  "Agentic AI workflow developer",
  "LangChain developer India",
  "CrewAI developer",
  "AutoGen developer",
  "AI ML integration developer",
  "Machine learning developer India",
  "SaaS developer India",

  // Service-specific technical
  "FastAPI developer India",
  "Hire FastAPI developer",
  "FastAPI backend developer",
  "Python backend developer India",
  "Next.js developer India",
  "Hire Next.js developer",
  "React developer India",
  "Chatbot developer India",
  "WhatsApp chatbot developer",

  // DevOps & Cloud
  "DevOps engineer India",
  "Freelance DevOps engineer India",
  "CI/CD pipeline expert India",
  "Cloud infrastructure engineer India",
  "Automation engineer India",
  "Docker Kubernetes expert India",
  "AWS developer India",
  "Cloud deployment expert",

  // App types
  "Desktop app developer India",
  "Mobile app developer India",
  "Web developer India",

  // Business audience
  "Affordable web developer India",
  "Website developer for small business India",
  "Startup tech partner India",
  "Remote developer India",

  // Local
  "Freelance developer Pune",
  "Freelance developer Satara",
  "Freelance developer Maharashtra",
  "Web developer Kolhapur",
  "Software developer Maharashtra",
  "DevOps engineer Pune",
] as const;

export const MARATHI_SEO_KEYWORDS = [
  "वेबसाइट डेव्हलपर महाराष्ट्र",
  "मोबाइल अॅप डेव्हलपर पुणे",
  "फ्रीलान्स डेव्हलपर सातारा",
  "AI एजंट डेव्हलपर भारत",
  "स्वस्त वेबसाइट बनवणे",
  "व्यवसायासाठी वेबसाइट",
  "सातारा वेब डिझाइन",
  "पुणे फ्रीलान्स डेव्हलपर",
  "महाराष्ट्र सॉफ्टवेअर डेव्हलपर",
  "AI चॅटबॉट मराठी",
] as const;

export const HINDI_SEO_KEYWORDS = [
  "फ्रीलांस वेब डेवलपर इंडिया",
  "मोबाइल ऐप डेवलपर भारत",
  "AI एजेंट डेवलपर",
  "सस्ती वेबसाइट बनाना",
  "बिजनेस वेबसाइट डेवलपमेंट",
  "छोटे व्यवसाय के लिए वेबसाइट",
  "पुणे फ्रीलांस डेवलपर",
  "महाराष्ट्र सॉफ्टवेयर डेवलपर",
  "AI चैटबॉट डेवलपर इंडिया",
  "वेब डिज़ाइन महाराष्ट्र",
] as const;

export const GUJARATI_SEO_KEYWORDS = [
  "ફ્રીલાન્સ વેબ ડેવલપર ઇન્ડિયા",
  "મોબાઇલ એપ ડેવલપર ભારત",
  "AI એજન્ટ ડેવલપર",
  "સસ્તી વેબસાઇટ બનાવો",
  "બિઝનેસ વેબસાઇટ ડેવલપમેન્ટ",
  "ગુજરાત સોફ્ટવેર ડેવલપર",
  "AI ચેટબોટ ડેવલપર ઇન્ડિયા",
] as const;

export const LANGUAGES_I_SERVE = ["English", "Marathi", "Hindi", "Gujarati"] as const;

export const REGIONAL_SEO_KEYWORDS = [
  ...PRIMARY_SEO_KEYWORDS,
  ...MARATHI_SEO_KEYWORDS,
  ...HINDI_SEO_KEYWORDS,
  ...GUJARATI_SEO_KEYWORDS,
];

export const REGIONAL_SEO_KEYWORDS_META_CONTENT = [...new Set(REGIONAL_SEO_KEYWORDS)].join(", ");
