import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdLaunch } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

import { projects } from "../data/projectsData";
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
