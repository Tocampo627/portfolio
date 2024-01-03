import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="left-container">
        <div>
          <img src="./my-photo.png" className="my-photo" />
        </div>
        <div>
          <h1 className="my-name font">Tanya Ocampo</h1>
          <h1 className="my-title font">Full Stack Developer</h1>
        </div>
      </div>
      <div className="right-container">
        <p className="my-summary font">
          Results-driven Full-stack Developer with a proven track record of
          delivering impactful solutions for large-scale international
          companies. With a demonstrated experience in a diverse set of
          technologies and a self-driven approach to problem-solving, I actively
          contribute to innovative and collaborative projects. Seeking roles
          where I can continue to make an impact at scale and embrace continuous
          learning.
        </p>
        <div className="logos-container">
          <a href="https://www.linkedin.com/in/tanyaocampo627/" target="_blank">
            <img
              src="./linkedin-nofill.svg"
              alt="LinkedIn"
              className="mini-logos"
            />
          </a>

          <a href="https://github.com/Tocampo627" target="_blank">
            <img
              src="./github-nofill.svg"
              alt="GitHub"
              className="mini-logos"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
