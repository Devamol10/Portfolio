import { useEffect, useRef } from "react";
import "./styles/Landing.css";
import profilePhoto from "../assets/profile.png";
import gsap from "gsap";

const Landing = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Very subtle floating animation (2-3px movement)
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: -3,
        duration: 2.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }
  }, []);

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-grid-container">
        
        {/* Left Column: Text Content & Actions */}
        <div className="landing-content-left">
          <h2 className="landing-subtitle">HELLO, I'M</h2>
          <h1 className="landing-title">
            AMOL
            <br />
            <span>BUDHWANT</span>
          </h1>
          <h3 className="landing-role">Full Stack Developer</h3>
          <p className="landing-tagline">
            Building Scalable Web Applications with AI Integration
          </p>
          <div className="landing-ctas">
            <a href="#work" onClick={handleScrollToProjects} className="cta-btn cta-primary" data-cursor="disable">
              View Projects
            </a>
            <a href="https://drive.google.com/file/d/1J584__nOiTakp8PkyhskSAScM0817uxS/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="cta-btn cta-secondary" data-cursor="disable">
              Download Resume
            </a>
            <a href="https://github.com/Devamol10" target="_blank" rel="noopener noreferrer" className="cta-btn cta-tertiary" data-cursor="disable">
              GitHub
            </a>
          </div>
        </div>

        {/* Right Column: Premium Portrait Photo with Aura Glow */}
        <div className="landing-content-right">
          <div className="profile-img-wrapper" ref={imageRef}>
            <div className="profile-glow"></div>
            <img src={profilePhoto} alt="Amol Budhwant" className="profile-img" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Landing;
