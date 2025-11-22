import { Link, useParams } from "react-router-dom";
import projectsData from "../data/projectsData";

function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData[id];

  if (!project) {
    return (
      <section className="section">
        <div className="container">
          <h2>Project not found.</h2>
          <Link to="/" className="button button-primary" style={{ marginTop: "1rem" }}>
            Back to home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section project-detail">
      <div className="container">
        <Link to="/" className="back-link">
          ← Back to projects
        </Link>

        <header className="project-detail-header">
          <h1>{project.title}</h1>
          <p className="project-detail-tech">{project.tech}</p>
        </header>

        <div className="project-detail-content">
          <section className="project-detail-section">
            <h2>Overview</h2>
            <p>{project.detailOverview}</p>
          </section>

          <section className="project-detail-section">
            <h2>My Role</h2>
            <p>{project.detailRole}</p>
          </section>

          <section className="project-detail-section">
            <h2>Process</h2>
            <ul>
              {project.detailProcess?.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </section>

          <section className="project-detail-section">
            <h2>Outcome</h2>
            <p>{project.detailOutcome}</p>
          </section>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetail;
