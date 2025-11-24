// src/components/AboutSection.jsx
function AboutSection() {
    return (
      <section id="about" className="section">
        <div className="container">
          <div className="about-card">
            <h2 className="about-heading">About Me</h2>
  
            <div className="about-body">
              <p>
                I’m an undergraduate student at the University of Florida obtaining a degree in Computer Science with a focus in
                data analysis seeking a full-time position in the fileds of {" "}
                <span className="about-highlight">Business Intelligence</span> and{" "}
                <span className="about-highlight">Data Analysis</span>.
              </p>
  
              <p>
              My goal as a computer scientist is to bridge the gap between technical problem-solving and real business impact. 
              What drew me into this field wasn’t just building things—it was understanding how people make decisions 
              and how technology can guide those choices. 
              I enjoy taking complex ideas and turning them into clear insights, tools, and 
              solutions that teams can actually use. 
              Seeing stakeholders make confident decisions because of something I built is what motivates me the most.
              </p>
  
              <p>
                Outside of work and school, you’ll usually find me cooking,
                watching sports, trying new coffee spots, or spending time with
                family and friends.
              </p>
            </div>
  
            <div className="about-links">
              <a
                href="https://www.linkedin.com/in/jesusdlopezmarti"
                target="_blank"
                rel="noreferrer"
                className="about-link"
              >
                LinkedIn
              </a>
              <a
                href="/Jesus_Lopez_Resume.pdf"
                className="about-link"
              >
                Resume
              </a>
              <a
                href="https://github.com/jlopezmarti20"
                target="_blank"
                rel="noreferrer"
                className="about-link"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default AboutSection;
  