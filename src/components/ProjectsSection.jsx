// src/components/ProjectsSection.jsx
import { useEffect, useRef } from "react";
import projectsData from "../data/projectsData";

// Composite hero images
import movesComposite from "../assets/Group 1.png";
import iosComposite from "../assets/Group 2.png";

function ProjectsSection() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean);
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
          <div className="section-underline" />
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => {
            // Use slug as main identifier, fall back to id if needed
            const slug = project.slug || project.id || `project-${index}`;
            const isMoves = slug === "moves-app";
            const isIOS = slug === "ios-shpe";

            return (
              <article
                key={slug}
                className={`project-card 
                  ${isMoves ? "project-card--moves" : ""} 
                  ${isIOS ? "project-card--iosshpe" : ""} 
                  ${project.accentClass || ""}`}
                ref={(el) => (cardRefs.current[index] = el)}
              >
                {/* Visual area */}
                {isMoves ? (
                  <div className="project-visual moves-visual">
                    <img
                      src={movesComposite}
                      alt="Moves App"
                      className="project-image"
                    />
                  </div>
                ) : isIOS ? (
                  <div className="project-visual ios-visual">
                    <img
                      src={iosComposite}
                      alt="iOS SHPE UF App"
                      className="project-image"
                    />
                  </div>
                ) : (
                  project.image && (
                    <div className="project-visual">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                      />
                    </div>
                  )
                )}

                {/* Text content */}
                <div className="project-card-content">
                  <h3>{project.title}</h3>
                  {project.year && (
                    <i className="project-year">{project.year}</i>
                  )}
                  <hr />
                  <p>{project.description || project.summary}</p>

                  {project.link && (
                    <div className="links">
                      <a href={project.link}>
                        View Project <span className="home-arrow">➔</span>
                      </a>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
