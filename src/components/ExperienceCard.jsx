function ExperienceCard({ logo, title, company, dates }) {
    return (
      <div className="experience-row">
        {/* Logo */}
        <img src={logo} alt={company} className="experience-logo" />
  
        {/* Text block */}
        <div className="experience-info">
          <h3 className="experience-title">{title}</h3>
          <p className="experience-company">{company}</p>
        </div>
  
        {/* Dates (right side) */}
        <div className="experience-dates">
          {dates}
        </div>
      </div>
    );
  }
  
  export default ExperienceCard;
  
  
  