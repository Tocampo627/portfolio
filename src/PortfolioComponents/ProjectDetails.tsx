import "./ProjectDetails.css";
import { ProjectInterface } from "./interfaces/ProjectInterface";
import { TechStackInterface } from "./interfaces/TechStackInterface";

type ProjectDetailsProperties = {
  project: ProjectInterface | undefined;
};
const ProjectDetails = ({ project }: ProjectDetailsProperties) => {
  // project has an array of techstack
  const len = project?.techToolIds.length || 0;

  for (let i = 0; i < len; i++) {
    {
      console.log(project?.techToolIds[i]);
    }
  }
  return (
    <div>
      <h1>Project Details</h1>
      {project?.name}
    </div>
  );
};

export default ProjectDetails;
