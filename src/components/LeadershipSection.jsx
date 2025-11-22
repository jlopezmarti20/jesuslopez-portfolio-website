import SectionTitle from "./SectionTitle";
import ExperienceCard from "./ExperienceCard";
import leadershipData from "../data/leadershipData";

function LeadershipSection() {
  return (
    <section id="leadership" className="section">
      <div className="container">
        <SectionTitle title="Leadership" />

        <div className="experience-grid">
          {leadershipData.map((item, index) => (
            <ExperienceCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LeadershipSection;
