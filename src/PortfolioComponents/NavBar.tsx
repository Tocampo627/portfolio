import "./NavBar.css";
import { useState } from "react";
type NavBarProperties = {
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
};

const NavBar = ({ setCurrentTab }: NavBarProperties) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleNavClick = (tab: string) => {
    setCurrentTab(tab);
    setIsOpen(false);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      <div>
        <img src="./t-logo.svg" className="logo"></img>
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
          <div className={`button-container ${isOpen ? "" : "hidden"}`}>
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
