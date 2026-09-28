import type { TechGroup } from "../types/Technology";
import "../styles/tools.css";

type TechGroupCardProps = {
    group: TechGroup;
};

function ToolsCard({ group }: TechGroupCardProps) {

    return (
        <article className="tech-group-card">
            <h3>{group.category}</h3>
            <div className="tech-list">
                {
                    group.technologies.map((tech) => (
                        <div className="tech-item" key={tech.id}>
                          
                            <img
                                src={tech.logo}
                                alt={`${tech.name} logo`}
                                className="tech-logo"
                            />
                              <span>{tech.name}</span>
                        </div>
                    ))
                }

            </div>
        </article>
    )

}

export default ToolsCard;