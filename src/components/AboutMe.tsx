import "../styles/aboutme.css"
import me from "../assets/me.jpg"

function AboutMe() {
    return (
        <section id="about">

            <div className="container">

                <div className="section-heading">
                    <span className="section-kicker">About Me</span>
                    <h2>My Path Into Software</h2>
                </div>

                <div className="about-layout">
                    <div className="about-sidebar">

                        <img className="profile-img" src={me} alt="Tanya Ocampo" />

                        <div className="engineer-note">As a software engineer, I value thoughtful solutions, continuous learning, and building software that both users and teammates can rely on.</div>

                    </div>

                    <div className="about-story">
                        <p>
                            My path into software engineering has been anything but traditional. I was a preschool teacher, and during remote learning, I began teaching myself to create interactive, app-like Google Slides for my students. I then started building small projects on my own, took a free course in Java and SQL while working two jobs, and eventually landed a software development apprenticeship that gave me my first professional exposure in tech.</p>


                        <p>Through that experience, I learned how to build full-stack applications and discovered that I’m especially drawn to backend development such as APIs, business logic, databases, and the systems that keep an application running behind the scenes. </p>
                        <p>
                            After being laid off, I decided to fully commit to the field. Since my undergraduate background was in an unrelated field, I pursued a master's in computer science to strengthen my technical foundation and prepare for a long-term career in software.</p>

                        <p> Throughout graduate school, I also worked full-time in an unrelated field. Coordinating work and school was one of the most demanding things I’ve taken on, and it taught me a lot about discipline, persistence, and following through even when motivation isn’t always there. </p>
                        <p>I’m proud of that experience because it reflects the way I meet challenges: I keep showing up, keep learning, and keep moving forward.</p>


                        <p className="about-personal">Outside of programming, you’ll usually find me in a spin class, doing pilates or yoga, or trying something new.</p>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutMe;