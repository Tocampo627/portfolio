import "./TechProfile.css";
import { TechStackInterface } from "./interfaces/TechStackInterface";
import { useSpring, animated } from "@react-spring/web";

type TechProfileProperties = {
  setViewTechProfile: React.Dispatch<React.SetStateAction<boolean>>;
  tool: TechStackInterface | undefined;
};
const TechProfile = ({ setViewTechProfile, tool }: TechProfileProperties) => {
  const [props, set] = useSpring(() => ({
    transform: "perspective(600px) rotateY(0deg)",
    config: { mass: 20, tension: 100, friction: 60 },
  }));
  const generateLevelBar = () => {
    const levelNumber: number = tool?.level ? tool?.level : 0;
    const star: JSX.Element[] = [];

    for (let i = 0; i < 5; i++) {
      star.push(
        <span
          key={i}
          className={`material-symbols-outlined ${
            i < levelNumber ? "yellow-star" : ""
          }`}
        >
          kid_star
        </span>
      );
    }

    return star;
  };

  return (
    <div>
      <div className="pop-up-container font">
        <div className="back-key-container">
          <span
            className="material-symbols-outlined back-key"
            onClick={() => setViewTechProfile(false)}
          >
            arrow_back
          </span>
        </div>
        <div className="profile-card">
          <animated.img
            src={tool?.image}
            alt="tech-logo"
            className="single-tool-img"
            style={props}
            onMouseEnter={() =>
              set({ transform: "perspective(600px) rotateY(360deg)" })
            }
            onMouseLeave={() =>
              set({ transform: "perspective(600px) rotateY(0deg)" })
            }
          />
          <p className="tool-name">{tool?.toolName}</p>
          <span className="level-comfort">Level of Confort: </span>
          <div className="star-progress-bar-container">
            {generateLevelBar()}
          </div>
          <p className="tech-experience-paragraph">{tool?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TechProfile;
