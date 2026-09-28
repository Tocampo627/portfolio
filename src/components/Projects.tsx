
import "../styles/listingcards.css";
import "../styles/projects.css";
import { projects } from "../data/Projects";
import ProjectCard from "./ProjectCard";


function Projects() {
    return (
        <section id="projects">
            <div className="container">

                <div className="section-heading">
                    <span className="section-kicker">My Work</span>
                    <h2>Projects</h2>
                </div>
                <div className="listing-box">

                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            {...project}
                        />
                    ))}


                </div>    </div>
        </section>
    )
}

export default Projects;