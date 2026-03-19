import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Concealed Coalition & American Service Pets",
    category: "E-Commerce / SAAS",
    description: "Built, deployed, and managed cloud-based solutions using the latest technologies including AWS EKS, GitOps, Terraform, ArgoCD, Prometheus, and Grafana.",
    tools: "AWS Cloud, Kubernetes, ECS, Docker, Terraform, GitOps, ArgoCD, Grafana and Prometheus, DataDog, UptimeRobot, etc.",
    image: "/images/americanservicepets.png?v=2",
  },
  {
    title: "HDFC Mutual Fund",
    category: "Financial Services",
    description: "Built, deployed, and managed cloud-based solutions using the latest technologies including AWS EKS, GitOps, Terraform, ArgoCD, Prometheus, and Grafana.",
    tools: "AWS & Azure Cloud (Hybrid), Amazon Elastic Kubernetes Service (Amazon EKS) and Azure Kubernetes Service (AKS), ECS, Docker, Site24X7, BMC Remedy, etc.",
    image: "/images/hdfc.png?v=3",
  },
  {
    title: "Kotak Mahindra Bank",
    category: "Enterprise Banking",
    description: "Built, deployed, and managed cloud-based solutions using the latest technologies including AWS EKS, GitOps, Terraform, ArgoCD, Prometheus, and Grafana.",
    tools: "AWS & Azure Cloud (Hybrid), Amazon Elastic Kubernetes Service (Amazon EKS) and Azure Kubernetes Service (AKS), ECS, Docker, Site24X7, BMC Remedy, etc.",
    image: "/images/kotak.png?v=3",
  },
  {
    title: "Tata Motors",
    category: "Automotive Enterprise",
    description: "Built, deployed, and managed cloud-based solutions using the latest technologies including AWS EKS, GitOps, Terraform, ArgoCD, Prometheus, and Grafana.",
    tools: "AWS & Azure Cloud (Hybrid), Amazon Elastic Kubernetes Service (Amazon EKS) and Azure Kubernetes Service (AKS), ECS, Docker, Site24X7, BMC Remedy, etc.",
    image: "/images/tata.png?v=3",
  },
  {
    title: "Growthsource",
    category: "Fintech Platform",
    description: "Built, deployed, and managed cloud-based solutions using the latest technologies including AWS EKS, GitOps, Terraform, ArgoCD, Prometheus, and Grafana.",
    tools: "AWS Cloud, ECS, EC2, Jenkins, Site24X7",
    image: "/images/growthsource.png?v=3",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <p style={{ marginTop: '15px', color: '#d1d1d1', fontSize: '15.5px', fontWeight: 300, lineHeight: 1.6 }}>
                          {project.description}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Technologies</span>
                          <p style={{ lineHeight: 1.5 }}>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
