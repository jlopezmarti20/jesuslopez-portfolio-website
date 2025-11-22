import SectionTitle from "./SectionTitle";
import links from "../data/linksData";

function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionTitle title="Contact" />

        <p className="contact-text">
          Let’s connect about data, product, and building useful tools for people.
        </p>

        <p className="contact-email">
          Email:{" "}
          <a href={`mailto:${links.email}`}>
            {links.email}
          </a>
        </p>

        <div className="contact-links">
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
