import "./NavBar.css";
import { useState } from "react";

type NavBarProperties = {
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
};

const NavBar = ({ setCurrentTab }: NavBarProperties) => {
  const [isHidden, setIsOpen] = useState<boolean>(true);

  const handleNavClick = (tab: string) => {
    setCurrentTab(tab);
    setIsOpen(true);
  };
  const toggleMenu = () => {
    setIsOpen(!isHidden);
  };

  return (
    <div className="navbar-container">
      <div>
        <img
          src="./portfolio-logo.svg"
          className="logo"
          onClick={() => handleNavClick("home")}
        ></img>
      </div>
      <div className="burger-button-container">
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          &#9776;
        </button>
        <div>
          <div className={`button-container ${isHidden ? "" : "hidden"}`}>
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
    </div>
  );
};

export default NavBar;
