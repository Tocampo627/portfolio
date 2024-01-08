import { useEffect, useState } from "react";
import "./TechStack.css";
import { TechStackInterface, techStack } from "./interfaces/TechStackInterface";
import TechProfile from "./TechProfile";

const TechStack = () => {
  const [categorySelected, setCategorySelected] = useState<string>("");
  const [techStackArray, setTechStackArray] =
    useState<TechStackInterface[]>(techStack);
  const [viewTechProfile, setViewTechProfile] = useState<boolean>(false);
  const [toolId, setToolId] = useState<number | null>(null);
  const uniqueCategories: string[] = Array.from(
    new Set(techStack.map((tool) => tool.category))
  );

  const filterByType = () => {
    if (categorySelected) {
      setTechStackArray(
        techStack.filter((tech) => tech.category === categorySelected)
      );
    } else {
      setTechStackArray(techStack);
    }
  };
  
  const handleToolClick = (id: number | null) => {
    setToolId(id);
    setViewTechProfile(true);
  };

  useEffect(() => {
    filterByType();
  }, [categorySelected]);

  if (viewTechProfile) {
    const selectedTool = techStack.find((tool) => tool.id === toolId);
    return (
      <TechProfile
        setViewTechProfile={setViewTechProfile}
        tool={selectedTool}
      ></TechProfile>
    );
  } else {
    return (
      <div className="tech-stack-container font">
        <div className="paragraph-container font">
          <p className="tech-intro-paragraph">
            Throughout my career, I've been fortunate to engage with a diverse
            range of technologies, each contributing to my expertise and
            understanding of the ever-evolving tech landscape. Here's a snapshot
            of the tools and technologies I've worked with:
          </p>
          <p className="tech-intro-paragraph">
            Click on each technology to get more insight into how I have
            utilized each tool and to understand my level of comfort and
            experience with them.
          </p>
        </div>
        <div className="category-buttons-container">
          <button onClick={() => setTechStackArray(techStack)}>All</button>
          {uniqueCategories.map((category) => (
            <div key={category}>
              <button onClick={() => setCategorySelected(category)}>
                {category}
              </button>
            </div>
          ))}
        </div>

        <div className="techstack-container">
          {techStackArray.map((tool) => (
            <div
              className="tech-logos"
              key={tool.id}
              onClick={() => (
                setViewTechProfile(true), handleToolClick(tool.id)
              )}
            >
              <img src={tool.image} className="logo-img"></img>
              <p>{tool.toolName}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default TechStack;
