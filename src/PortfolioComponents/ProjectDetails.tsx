import "./ProjectDetails.css";
import { ProjectInterface } from "./interfaces/ProjectInterface";
import { TechStackInterface, techStack } from "./interfaces/TechStackInterface";
import { useEffect, useState } from "react";

type ProjectDetailsProperties = {
  project: ProjectInterface | undefined;
  setShowProjectDetails: React.Dispatch<React.SetStateAction<boolean>>;
};
const ProjectDetails = ({
  project,
  setShowProjectDetails,
}: ProjectDetailsProperties) => {
  const [techStackArray, setTechStackArray] =
    useState<TechStackInterface[]>(techStack);

  useEffect(() => {
    if (project) {
      const projectTechTools = project.techToolIds
        .map((id) => techStack.find((tech) => tech.id === id))
        .filter((tech): tech is TechStackInterface => tech !== undefined);

      setTechStackArray(projectTechTools);
    }
  }, [project]);

  return (
    <div className="project-details">
      <div className="back-key-container">
        <span
          className="material-symbols-outlined back-key"
          onClick={() => setShowProjectDetails(false)}
        >
          arrow_back
        </span>
      </div>
      <div>
        <h1>Project Details</h1>
        <h3>{project?.name}</h3>
        <p className="paragraph-container">{project?.description}</p>
        <a href={project?.sourceCodeLink}>SOURCE CODE</a>
        <p>Tools Used:</p>
        <div className="techstack-container">
          {techStackArray.map((tool) => (
            <div>
              <div>
                <img src={tool.image} className="logo-img" />
              </div>
              <div>{tool.toolName}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
