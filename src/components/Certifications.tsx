import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/Certifications.css";
import { FaAws } from "react-icons/fa6";
import { SiKubernetes, SiHashicorp } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

interface CertificationItem {
  title: string;
  level: string;
  icon: React.ReactNode;
  issuer?: string;
  year?: string;
  link?: string;
}

const Certifications = () => {
  const certifications: CertificationItem[] = [
    {
      title: "AWS Certified Solutions Architect",
      level: "Associate",
      icon: <FaAws />,
      issuer: "Amazon Web Services",
      year: "2021",
      link: "",
    },
    {
      title: "HashiCorp Certified: Terraform",
      level: "Associate (004)",
      icon: <SiHashicorp />,
      issuer: "HashiCorp",
      year: "September 2025",
      link: "",
    },
    {
      title: "Certified Kubernetes Administrator",
      level: "(CKA)",
      icon: <SiKubernetes />,
      issuer: "Cloud Native Computing Foundation",
      year: "February 2026",
      link: "",
    },
  ];
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
          {certifications.map((cert, index) => (
            <div key={index} className="cert-box">
              <div className="cert-icon">{cert.icon}</div>
              <h3>{cert.title}</h3>
              <h4>{cert.level}</h4>
              {cert.issuer && <p className="cert-issuer">{cert.issuer}</p>}
              {cert.year && <p className="cert-year">{cert.year}</p>}
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                  View Credential
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
