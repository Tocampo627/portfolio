import "./Resume.css";

const Resume = () => {
  return (
    <div>
      <div className="download-resume-container">
        <p className="thanks-paragraph">
          Thank you for taking the time to explore my portfolio and learn about
          my professional journey. I appreciate your interest in my work and
          experience. If you'd like to keep a summary of my skills, feel free to
          download a copy of my resume. Your support and any opportunities for
          collaboration or feedback are highly valued.
        </p>
        <p className="download-me-text">Download a copy of my resume:</p>
        <div>
          <a
            href="./Ocampo_SWE_2024_Public_Resume.pdf"
            download="TanyaOcampo_2024_Resume.pdf"
          >
            <button className="download-button">
              <span className="material-symbols-outlined">download</span>CLICK
              HERE
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
