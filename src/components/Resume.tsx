import resume from "../assets/Tanya_Ocampo_Resume.pdf";
import "../styles/resume.css"
function Resume() {
    return (
        <section id="resume">
            <div className="container">
                <div className="section-heading">
                    <span className="section-kicker">Get More Details</span>
                    <h2>Resume</h2>
                </div>

                <div className="resume-content">
                    <p>
                        Take a look at my latest resume for a closer look at my
                        experience, education, and technical skills.
                    </p>

                    <a
                        href={resume}
                        download="Tanya_Ocampo_Resume.pdf"
                        className="primary-button"
                    >
                        Download Resume
                    </a>
                </div>

            </div>

        </section>
    )
}

export default Resume;