function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <h2>Jesus Lopez</h2>

        <ul>
          {/* Work → scroll to Projects */}
          <li>
            <a href="#projects">Work</a>
          </li>

          {/* About → scroll to About Me */}
          <li>
            <a href="#about">About</a>
          </li>

          {/* Resume PDF */}
          <li>
            <a
              href="/Jesus_Lopez_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>

          {/* Contact → Opens Email */}
          <li>
            <a href="mailto:jlopezmarti05@gmail.com?subject=Let%27s%20Connect">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
