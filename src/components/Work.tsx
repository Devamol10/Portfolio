import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdLaunch } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    num: "01",
    name: "CampusCart",
    category: "AI-Powered Student Marketplace",
    description: "AI-powered campus marketplace with real-time messaging, OAuth authentication, and intelligent product discovery.",
    tech: "React.js, Node.js, Express.js, MongoDB, Socket.io, Tailwind CSS, JWT",
    image: "/images/placeholder.webp",
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
    image: "/images/placeholder.webp",
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
    image: "/images/placeholder.webp",
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
    image: "/images/placeholder.webp",
    link: "https://url-shortener-lovat-gamma.vercel.app/",
    liveLink: "https://url-shortener-lovat-gamma.vercel.app/",
    githubLink: "https://github.com/Devamol10/url-shortener",
    isFeatured: false,
  },
];

const Work = () => {
  // Grid layout - no horizontal scroll animation
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div 
              className={`work-box ${project.isFeatured ? "work-box-featured" : ""}`} 
              key={index}
            >
              {project.isFeatured && (
                <div className="featured-badge">Featured Project</div>
              )}
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.num}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p className="tech-p">{project.tech}</p>
                <p className="desc-p">{project.description}</p>
                <div className="work-cta">
                  <a
                    href={project.liveLink}
                    className="work-button work-button-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo <MdLaunch />
                  </a>
                  <a
                    href={project.githubLink}
                    className="work-button work-button-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
              <WorkImage image={project.image} alt={project.name} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
