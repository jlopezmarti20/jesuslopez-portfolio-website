// src/components/ExperienceSection.jsx
import experienceData from "../data/experienceData";

function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="card experience-list-card">
          {/* Heading INSIDE the card */}
          <div className="experience-card-header">
            <h2 className="experience-heading">Experience</h2>
          </div>

          {experienceData.map((job, index) => (
            <div key={index} className="experience-row">
              <div className="experience-left">
                {job.logo && (
                  <img
                    src={job.logo}
                    alt={`${job.company} logo`}
                    className="experience-logo"
                  />
                )}

                <div>
                  <div className="experience-role">{job.title}</div>
                  <div className="experience-company">{job.company}</div>
                </div>
              </div>

              <div className="experience-dates">{job.dates}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
