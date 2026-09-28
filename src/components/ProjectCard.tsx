import "../styles/card.css";
import { Project } from "../types/Project";

function ProjectCard({ title, description, technologies, link }:Project) {
    return (
        <article className="basic-card-box" >
            <h3>{title}</h3>

            <p className="card-description">{description}</p>
            <p className="basic-card-details">{technologies.join(" • ")}</p>
            <a className="card-link secondary-button" href={link}> View Project </a>

          
        </article>
    )
}
export default ProjectCard;