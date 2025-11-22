// src/components/ProjectCard.jsx
import { Link } from "react-router-dom";
import rectangleBg from "../assets/Rectangle 27.png";
import movesHome from "../assets/Moves-home-screen.webp";

function ProjectCard({ project }) {
  const isMoves = project.slug === "moves-app"; // ⬅️ make sure this matches your Moves slug

  return (
    <article
      className={`card project-card ${isMoves ? "project-card--moves" : ""}`}
    >
      {/* VISUAL AREA */}
      {project.image || isMoves ? (
        <div className={`project-visual ${isMoves ? "moves-visual" : ""}`}>
          {isMoves ? (
            <>
              {/* Background shape */}
              <img
                src={rectangleBg}
                alt=""
                aria-hidden="true"
                className="moves-bg"
              />

              {/* Foreground Moves app screen */}
              <img
                src={movesHome}
                alt="Moves app screens"
                className="moves-fg"
              />
            </>
          ) : (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="project-image"
            />
          )}
        </div>
      ) : null}

      {/* TEXT CONTENT */}
      <div className="project-card-content">
        <h3 className="card-title">{project.title}</h3>
        {project.year && <p className="project-year">{project.year}</p>}

        {project.summary && (
          <p className="card-body-text">{project.summary}</p>
        )}

        {project.tech && <p className="card-tech">{project.tech}</p>}

        <div className="card-actions">
          <Link
            to={`/projects/${project.slug}`}
            className="button button-primary"
          >
            View Project
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;

