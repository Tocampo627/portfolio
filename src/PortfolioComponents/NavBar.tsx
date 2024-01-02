import "./NavBar.css";
import { useState } from "react";
type NavBarProperties = {
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
};

const NavBar = ({ setCurrentTab }: NavBarProperties) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleNavClick = (tab: string) => {
    setCurrentTab(tab);
    setIsNavExpanded(false); // Close mobile menu when a tab is selected
  };
  return (
    <div className="navbar">
      <button
        className="hamburger"
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        <span className="material-symbols-outlined">menu</span>
      </button>
      <div className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
        <div className="button-container">
          <button onClick={() => handleNavClick("home")}>Home</button>
          <button onClick={() => handleNavClick("about-me")}>About Me</button>
          <button onClick={() => handleNavClick("tech-stack")}>
            Tech Stack
          </button>
          <button onClick={() => handleNavClick("contact")}>Contact</button>
          <button onClick={() => handleNavClick("resume")}>Resume</button>
          <button onClick={() => handleNavClick("projects")}>Projects</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
