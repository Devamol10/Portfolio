import "./styles/About.css";
import { FaGraduationCap, FaCode, FaCubes, FaRobot } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <div className="about-grid">
          <div className="about-text-col">
            <p className="para">
              I am a Computer Science student and Full Stack Developer focused on building scalable, high-performance web applications. I specialize in the MERN stack and modern tooling, backed by a strong foundation in Data Structures and Algorithms for effective problem-solving.
            </p>
            <p className="para">
              Driven by a continuous learning mindset, I actively integrate AI-powered features into applications to deliver clean, maintainable code and intuitive user experiences.
            </p>
          </div>

          <div className="about-edu-col">
            <div className="edu-card" data-cursor="disable">
              <div className="edu-item">
                <FaGraduationCap className="edu-icon" />
                <div>
                  <h4>Computer Science Student</h4>
                  <p>B.Sc Undergrad (Expected 2027)</p>
                </div>
              </div>
              <div className="edu-item">
                <FaCode className="edu-icon" />
                <div>
                  <h4>Full Stack Development</h4>
                  <p>Building scalable web apps</p>
                </div>
              </div>
              <div className="edu-item">
                <FaCubes className="edu-icon" />
                <div>
                  <h4>DSA & Problem Solving</h4>
                  <p>Optimized algorithms & patterns</p>
                </div>
              </div>
              <div className="edu-item">
                <FaRobot className="edu-icon" />
                <div>
                  <h4>AI & Modern Tooling</h4>
                  <p>Seamless intelligent integrations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
