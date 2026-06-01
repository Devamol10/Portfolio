import { SplitText } from "gsap-trial/SplitText";
import gsap from "gsap";
import { getSmoother } from "../utils/scrollSmoother";

export function initialFX() {
  document.body.style.overflowY = "auto";
  const smoother = getSmoother();
  smoother?.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#050307", // Darker premium background
    duration: 0.5,
    delay: 0.5,
  });

  // SplitText animation for Name and Subtitle
  const splitText = new SplitText([".landing-subtitle", ".landing-title"], {
    type: "chars,lines",
    linesClass: "split-line",
  });

  gsap.fromTo(
    splitText.chars,
    { opacity: 0, y: 50, filter: "blur(3px)" },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.0,
      ease: "power4.out",
      stagger: 0.015,
      delay: 0.2,
    }
  );

  // Fade and slide-up for role and tagline
  gsap.fromTo(
    [".landing-role", ".landing-tagline"],
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 1.0,
      ease: "power3.out",
      stagger: 0.15,
      delay: 0.6,
    }
  );

  // Staggered reveal for CTA buttons
  gsap.fromTo(
    ".landing-ctas a",
    { opacity: 0, y: 15, scale: 0.95 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.2)",
      stagger: 0.1,
      delay: 1.0,
    }
  );

  // Fade-and-scale entrance for Portrait Image
  gsap.fromTo(
    ".profile-img-wrapper",
    { opacity: 0, scale: 0.92, y: 20 },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 1.4,
      ease: "power4.out",
      delay: 0.4,
    }
  );

  // Soft purple glow reveal behind photo
  gsap.fromTo(
    ".profile-glow",
    { opacity: 0, scale: 0.8 },
    {
      opacity: 0.45,
      scale: 1,
      duration: 1.8,
      ease: "power2.out",
      delay: 0.8,
    }
  );

  // Animate global headers and icons
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.0,
      ease: "power2.out",
      delay: 0.2,
    }
  );
}
