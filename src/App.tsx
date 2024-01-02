import { useState } from "react";
import "./App.css";
import NavBar from "./PortfolioComponents/NavBar";
import Home from "./PortfolioComponents/Home";
import AboutMe from "./PortfolioComponents/AboutMe";
import TechStack from "./PortfolioComponents/TechStack";
import Contact from "./PortfolioComponents/Contact";
import Resume from "./PortfolioComponents/Resume";
import Projects from "./PortfolioComponents/Projects";
import Footer from "./PortfolioComponents/Footer";

function App() {
  const [currentTab, setCurrentTab] = useState("home");
  return (
    <>
      <div>
        <NavBar setCurrentTab={setCurrentTab}></NavBar>
        {currentTab === "home" && <Home></Home>}
        {currentTab === "about-me" && <AboutMe />}
        {currentTab === "tech-stack" && <TechStack></TechStack>}
        {currentTab === "contact" && <Contact></Contact>}
        {currentTab === "resume" && <Resume></Resume>}
        {currentTab === "projects" && <Projects></Projects>}
        <Footer />
      </div>
    </>
  );
}

export default App;
