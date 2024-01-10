import "./Projects.css";
import { useState } from "react";
import "./Projects.css";
import { ProjectInterface, myProjects } from "./interfaces/ProjectInterface";
import ProjectDetails from "./ProjectDetails";

const Projects = () => {
  const [projectArray, setProjectArray] =
    useState<ProjectInterface[]>(myProjects);
  const [showProjectDetails, setShowProjectDetails] = useState<boolean>(false);
  const [projectId, setProjectId] = useState<number | null>(null);

  const handleShowDetails = () => {
    setShowProjectDetails(true);
    setProjectArray(myProjects);
  };

  if (!showProjectDetails) {
    return (
      <div>
        <h1>PROJECTS</h1>
        <p className="project-intro">
          In this section, you'll discover a selection of projects that
          represent the bedrock of my coding journey. While the interfaces here
          provide a glimpse into my front-end capabilities, the full breadth of
          some projects awaits on my GitHub repositories.
        </p>
        <div className="project-container">
          {projectArray.map((project) => (
            <div className="project-cards">
              <div>
                <img src={project.image} className="project-img" />
              </div>
              <div className="project-name">
                <p>{project.name}</p>
              </div>
              <div className="project-button-container">
                <div>
                  <button
                    className="project-button"
                    onClick={() => (
                      handleShowDetails(), setProjectId(project.id)
                    )}
                  >
                    More Details
                  </button>
                </div>
                <div>
                  <a href={project.link}>
                    <button className="project-button">Visit Project</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    const proj = myProjects.find((p) => p.id === projectId);
    return (
      <ProjectDetails
        project={proj}
        setShowProjectDetails={setShowProjectDetails}
      ></ProjectDetails>
    );
  }
};

export default Projects;
