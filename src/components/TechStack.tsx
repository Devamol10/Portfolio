import { useEffect, useRef } from "react";
import "./styles/TechStack.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  FaReact, FaNodeJs, FaGithub, FaCloud, FaHtml5, FaCss3, FaGitAlt, FaPuzzlePiece, FaRobot, FaSitemap
} from "react-icons/fa";
import { 
  SiExpress, SiMongodb, SiTypescript, SiJavascript, SiPostman, SiVercel, SiCplusplus, SiPython
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact, color: "#61dafb", desc: "UI Library" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e", desc: "Core Language" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6", desc: "Static Typing" },
      { name: "HTML", icon: FaHtml5, color: "#e34c26", desc: "Markup" },
      { name: "CSS", icon: FaCss3, color: "#264de4", desc: "Styling" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933", desc: "Runtime" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff", desc: "Framework" },
      { name: "Python", icon: SiPython, color: "#3776ab", desc: "Scripting & AI" },
      { name: "C++", icon: SiCplusplus, color: "#00599c", desc: "System Programming" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248", desc: "Database" },
      { name: "REST APIs", icon: FaCloud, color: "#ff6c37", desc: "Architecture" },
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#f34f29", desc: "Version Control" },
      { name: "GitHub", icon: FaGithub, color: "#e2e0e5", desc: "Collaboration" },
      { name: "VS Code", icon: VscVscode, color: "#007acc", desc: "Editor" },
      { name: "Postman", icon: SiPostman, color: "#ff6c37", desc: "API Testing" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff", desc: "Deployment" },
    ]
  },
  {
    title: "Currently Learning",
    skills: [
      { name: "Data Structures & Algorithms", icon: FaPuzzlePiece, color: "#a855f7", desc: "Problem Solving" },
      { name: "AI & ML", icon: FaRobot, color: "#25c2a0", desc: "Intelligent Systems" },
      { name: "System Design", icon: FaSitemap, color: "#38bdf8", desc: "Architecture Fundamentals" },
    ]
  }
];

const TechStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll(".skill-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.05,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          }
        }
      );
    }
  }, []);

  return (
    <div className="techstack-section" id="skills" ref={containerRef}>
      <div className="techstack-container">
        <h2 className="techstack-title">
          Technical <span>Skills</span>
        </h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <div className="skill-category" key={catIndex}>
              <h3 className="category-title">{category.title}</h3>
              <div className="category-skills-list">
                {category.skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div className="skill-card" key={index} data-cursor="disable">
                      <div className="skill-icon-wrap" style={{ "--hover-color": skill.color } as React.CSSProperties}>
                        <Icon className="skill-icon" style={{ color: skill.color }} />
                      </div>
                      <div className="skill-details">
                        <h4>{skill.name}</h4>
                        <p>{skill.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
