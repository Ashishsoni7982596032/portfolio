import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cloud Operations Engineer</h4>
                <h5>cloudxchange.io</h5>
              </div>
              <h3>Feb 2020 - Apr 2021</h3>
            </div>
            <p>
              Managed AWS infrastructure, monitored systems via Site24x7, and maintained robust cloud operations for critical enterprise environments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior cloud operations engineer</h4>
                <h5>cloudxchange.io</h5>
              </div>
              <h3>Apr 2021 - Jul 2022</h3>
            </div>
            <p>
              Designed, deployed and managed production AWS infrastructure for enterprise workloads. Deployed and managed EKS clusters. Built automation using AWS Systems Manager and Lambda.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>senior cloud engineer</h4>
                <h5>TO THE NEW</h5>
              </div>
              <h3>Jul 2022 - Present</h3>
            </div>
            <p>
              Designed EKS-based infrastructure. Implemented GitOps using ArgoCD. Achieved 30–40% cost reduction using AI-driven autoscaling. Led zero-downtime migrations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
