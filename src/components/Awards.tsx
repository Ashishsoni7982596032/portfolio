import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/Awards.css";
import { useState, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

interface AwardItem {
  title: string;
  date: string;
  description?: string;
  image?: string;
}

const Awards = () => {
  const [selectedAward, setSelectedAward] = useState<AwardItem | null>(null);

  // Handle ESC key to close evidence viewer
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && selectedAward) {
        setSelectedAward(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedAward]);

  const awards: AwardItem[] = [
    {
      title: "Star Performer",
      date: "December 2025",
      description: "Outstanding performance and contribution",
      image: "/awards/Star-Dec-2025.pdf",
    },
    {
      title: "Star Performer",
      date: "June 2025",
      description: "Excellence in DevOps and Cloud Infrastructure",
      image: "/awards/Star-Jun-2025.pdf",
    },
    {
      title: "Spot Award",
      date: "October 2025",
      description: "Exceptional work on critical initiatives",
      image: "/awards/Spot-Oct-2025.png",
    },
    {
      title: "Star Performer",
      date: "August 2025",
      description: "Leadership and technical excellence",
      image: "/awards/Star-Aug2025.png",
    },
    {
      title: "Spot Award",
      date: "August 2024",
      description: "Outstanding contribution to team goals",
      image: "/awards/Spot-Aug-2024.png",
    },
    {
      title: "Star Performer",
      date: "December 2022",
      description: "Consistent excellence and innovation",
      image: "/awards/Star-Dec-2022.png",
    },
    {
      title: "ExtraMiler",
      date: "Recognition",
      description: "Going above and beyond expectations",
      image: "/awards/ExtraMiler.png",
    },
    {
      title: "CX-FS (Customer Experience - First Solved)",
      date: "Recognition",
      description: "Exceptional customer satisfaction",
      image: "/awards/CX-FS.png",
    },
    {
      title: "CX-FS MD (Customer Experience - First Solved, Most Decisive)",
      date: "Recognition",
      description: "Outstanding customer experience delivery",
      image: "/awards/CX-FS-MD.png",
    },
    {
      title: "Gratitude Award",
      date: "Recognition",
      description: "Valued contribution to team culture",
      image: "/awards/Grat.png",
    },
    {
      title: "Owner Award",
      date: "Recognition",
      description: "Taking ownership and driving results",
      image: "/awards/Owner.png",
    },
    {
      title: "Knowledge Award",
      date: "Recognition",
      description: "Sharing knowledge and mentoring others",
      image: "/awards/Knl.png",
    },
  ];

  useGSAP(() => {
    gsap.from(".award-card", {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".awards-section",
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
    });

    gsap.from(".awards-title", {
      x: -50,
      opacity: 0,
      scrollTrigger: {
        trigger: ".awards-section",
        start: "top 90%",
        end: "top 60%",
        scrub: 1,
      },
    });
  });

  const closeModal = () => {
    setSelectedAward(null);
  };

  return (
    <div className="awards-section section-container" id="awards">
      <div className="awards-container">
        <h2 className="awards-title">
          My <span>Awards & Recognitions</span>
        </h2>

        {selectedAward ? (
          <div className="award-evidence-viewer">
            <div className="evidence-header">
              <div>
                <h3>{selectedAward.title}</h3>
                <p className="evidence-date">{selectedAward.date}</p>
              </div>
              <button className="evidence-close" onClick={closeModal}>
                ✕
              </button>
            </div>
            <div className="evidence-container" onContextMenu={(e) => e.preventDefault()}>
              {selectedAward.image && (
                <>
                  {selectedAward.image.endsWith(".pdf") ? (
                    <embed
                      src={selectedAward.image}
                      type="application/pdf"
                      className="evidence-pdf"
                      onContextMenu={(e) => e.preventDefault()}
                      onDragStart={(e) => e.preventDefault()}
                    />
                  ) : (
                    <img
                      src={selectedAward.image}
                      alt={selectedAward.title}
                      className="evidence-image"
                      onContextMenu={(e) => e.preventDefault()}
                      onDragStart={(e) => e.preventDefault()}
                      draggable={false}
                    />
                  )}
                </>
              )}
            </div>
            <button className="evidence-back-btn" onClick={closeModal}>
              ← Back to Awards
            </button>
          </div>
        ) : (
          <div className="awards-grid">
            {awards.map((award, index) => (
              <div 
                key={index} 
                className="award-card"
                onClick={() => setSelectedAward(award)}
                style={{ cursor: award.image ? "pointer" : "default" }}
              >
                <div className="award-icon">🏆</div>
                <h3>{award.title}</h3>
                <p className="award-date">{award.date}</p>
                {award.description && (
                  <p className="award-description">{award.description}</p>
                )}
                {award.image && (
                  <p className="award-view-evidence">Click to view evidence</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Awards;
