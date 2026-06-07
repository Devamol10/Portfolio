import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { FiMenu, FiX } from "react-icons/fi";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        // Allow default behavior for mobile, or manually handle scrolling
        const link = e.currentTarget as HTMLAnchorElement;
        const sectionId = link.getAttribute("data-href");
        
        if (window.innerWidth <= 1024) {
           setIsOpen(false);
        }

        if (sectionId) {
          e.preventDefault();
          const section = document.querySelector(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      });
    });
  }, []);

  return (
    <>
      <div className="header">
        <div className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>
        <ul className={isOpen ? "nav-links open" : "nav-links"}>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
