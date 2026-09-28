import "../styles/connect.css"
function Connect() {
  return (
    <section id="connect">
      <div className="container">


        <div className="section-heading">
          <span className="section-kicker">Lets Connect</span>
          <h2>Contact Information</h2>
        </div>

        <div className="contact-content">
          <p className="contact-intro">
            I'm always happy to connect about software engineering,
            opportunities, or just talk tech.
          </p>

          <div className="contact-links">
            <a
              href="mailto:tocampo6270@gmail.com"
              className="contact-link"
            >
              <span className="contact-label">Email</span>
              <span>tocampo6270@gmail.com</span>
            </a>

            <a
              href="https://www.linkedin.com/in/tanyaocampo627"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span className="contact-label">LinkedIn</span>
              <span>tanyaocampo627</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Connect;