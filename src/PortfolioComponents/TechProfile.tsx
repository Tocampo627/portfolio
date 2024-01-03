import "./TechProfile.css";
import { TechStackInterface } from "./interfaces/TechStackInterface";

type TechProfileProperties = {
  setViewTechProfile: React.Dispatch<React.SetStateAction<boolean>>;
  tool: TechStackInterface | undefined;
};
const TechProfile = ({ setViewTechProfile, tool }: TechProfileProperties) => {
  return (
    <div>
      <div className="pop-up-container">
        <div className="back-key-container">
          <span
            className="material-symbols-outlined back-key"
            onClick={() => setViewTechProfile(false)}
          >
            arrow_back
          </span>
        </div>
        <div>
          <img src={tool?.image}  className="single-tool-img"/>
          <h1>{tool?.toolName}</h1>
          <p>{tool?.description}</p>
          <p>{tool?.level}</p>
        </div>
      </div>
    </div>
  );
};

export default TechProfile;
