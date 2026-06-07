import { MdArrowOutward } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:amolbudhwant2685@gmail.com" data-cursor="disable">
                amolbudhwant2685@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Phone</h4>
            <p>
              <a href="tel:+919356980979" data-cursor="disable">
                +91 93569 80979
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Devamol10"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
              aria-label="GitHub Profile"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/amol-budhwant-8a7226303/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
              aria-label="LinkedIn Profile"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://drive.google.com/file/d/1J584__nOiTakp8PkyhskSAScM0817uxS/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-resume"
              aria-label="Download Resume"
            >
              Download Resume <MdArrowOutward />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
