import heroWave from "../assets/hero-wave.png";

function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Top content in container */}
      <div className="container hero-inner">
        <p className="hero-kicker">DATA-DRIVEN COMPUTER SCIENTIST</p>
        <h1 className="hero-title">Hi, I’m Jesus L.</h1>
      </div>

      {/* Full-width wave image (NOT in container) */}
      <div className="hero-img-wrapper">
        <img
          src={heroWave}
          alt="Audio waveform visual"
          className="hero-img"
        />
      </div>

      {/* Subtitle back inside container */}
      <div className="container">
        <p className="hero-sub">
          I am a{" "}
          <span className="gradient-text">data-driven Computer Scientist</span>{" "}
          who thrives on teamwork, leadership, and clear communication across
          tech and design.
        </p>
      </div>
    </section>
  );
}

export default Hero;
