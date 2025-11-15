import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div>
      <h1>About Me</h1>
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
  I’m a Computer Science graduate student and early career software engineer 
  with hands on experience in full-stack development and a background in 
  education and production leadership. As a career changer, I bring creativity, 
  strong communication, and real-world problem-solving to every project. 
  I’m passionate about building meaningful software, improving processes, 
  and learning continuously.
</p>
          <div className="logos-container">
            <a
              href="https://www.linkedin.com/in/tanyaocampo627/"
              target="_blank"
            >
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
    </div>
  );
};

export default AboutMe;
