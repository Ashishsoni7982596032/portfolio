import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/Certifications.css";

gsap.registerPlugin(ScrollTrigger);

const Certifications = () => {
  useGSAP(() => {
    gsap.from(".cert-box", {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".certifications-section",
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
    });

    gsap.from(".cert-title", {
      x: -50,
      opacity: 0,
      scrollTrigger: {
        trigger: ".certifications-section",
        start: "top 90%",
        end: "top 60%",
        scrub: 1,
      },
    });
  });

  return (
    <div className="certifications-section section-container" id="certifications">
      <div className="cert-container">
        <h2 className="cert-title">
          My <span>Certifications</span>
        </h2>

        <div className="cert-grid">
          <div className="cert-box">
            <h3>AWS Certified Solutions Architect</h3>
            <h4>Professional</h4>
            <div className="cert-icon">☁️</div>
          </div>
          <div className="cert-box">
            <h3>AWS Certified Solutions Architect</h3>
            <h4>Associate</h4>
            <div className="cert-icon">☁️</div>
          </div>
          <div className="cert-box">
            <h3>Certified Kubernetes Administrator</h3>
            <h4>(CKA)</h4>
            <div className="cert-icon">⚙️</div>
          </div>
          <div className="cert-box">
            <h3>HashiCorp Certified Terraform</h3>
            <h4>Associate</h4>
            <div className="cert-icon">🏗️</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
