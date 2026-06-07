export interface Project {
  num: string;
  name: string;
  category: string;
  description: string;
  tech: string;
  image: string;
  link: string;
  liveLink: string;
  githubLink: string;
  isFeatured: boolean;
}

export const projects: Project[] = [
  {
    num: "01",
    name: "CampusCart",
    category: "AI-Powered Student Marketplace",
    description: "AI-powered campus marketplace with real-time messaging, OAuth authentication, and intelligent product discovery.",
    tech: "React.js, Node.js, Express.js, MongoDB, Socket.io, Tailwind CSS, JWT",
    image: "/images/campuscarthomepage.png",
    link: "https://campuscart-eta.vercel.app/",
    liveLink: "https://campuscart-eta.vercel.app/",
    githubLink: "https://github.com/Devamol10/CampusCart",
    isFeatured: true,
  },
  {
    num: "02",
    name: "EduFlow",
    category: "Full-Stack EdTech ERP",
    description: "Full-stack ERP platform with analytics dashboards, attendance management, fee tracking, and reporting.",
    tech: "React.js, Node.js, Express.js, MongoDB, JWT, Tailwind CSS",
    image: "/images/eduflow.png",
    link: "https://eduflow-tution-webpage.vercel.app/",
    liveLink: "https://eduflow-tution-webpage.vercel.app/",
    githubLink: "https://github.com/Devamol10/EduFlow",
    isFeatured: false,
  },
  {
    num: "03",
    name: "KisanAlert AI",
    category: "Smart Agricultural Monitoring",
    description: "IoT-powered agricultural alert system with real-time disease detection, weather integration, and yield prediction.",
    tech: "React.js, Node.js, Express.js, MongoDB, Machine Learning, Tailwind CSS",
    image: "/images/kisanalert.png",
    link: "https://kisanalert-ai.web.app/",
    liveLink: "https://kisanalert-ai.web.app/",
    githubLink: "https://github.com/MaheshDakulge/KisanAlert-AI",
    isFeatured: false,
  },
  {
    num: "04",
    name: "LinkMint",
    category: "SaaS / URL Redirection",
    description: "URL shortening platform with analytics, authentication, OAuth integration, and security-focused architecture.",
    tech: "React.js, TypeScript, Express.js, MongoDB, Tailwind CSS, Recharts",
    image: "/images/urlshortener.png",
    link: "https://url-shortener-lovat-gamma.vercel.app/",
    liveLink: "https://url-shortener-lovat-gamma.vercel.app/",
    githubLink: "https://github.com/Devamol10/url-shortener",
    isFeatured: false,
  },
];
