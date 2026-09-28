import ToolsCard from "./ToolsCard";
import { techStack } from "../data/Technologies";
import "../styles/tools.css";

function Tools() {
    return (
        <section id="tools">
            <div className="container">

                <div className="section-heading">
                    <span className="section-kicker">My Techstack</span>
                    <h2>Technical Toolkit</h2>
                </div>

                <div className="tech-grid">
                    {techStack.map((group) => (
                        <ToolsCard
                            key={group.category}
                            group={group}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Tools;