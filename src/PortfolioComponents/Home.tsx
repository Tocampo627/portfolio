import AboutMe from "./AboutMe";
import "./Home.css";
import { useSpring, animated } from "@react-spring/web";
import TechStack from "./TechStack";
import Contact from "./Contact";
import Projects from "./Projects";

const Home = () => {
  const springs = useSpring({
    from: { y: 600 },
    to: { y: -200 },
  });
  return (
    <div className="greeting-container">
      <div className="greeting-container">
        <div className="intro-text">
          <div className="section">
            <animated.div style={{ ...springs }}>
              <h1>Hello, I'm Tanya</h1>
              <p>Welcome to my website</p>
            </animated.div>
          </div>
          <div className="section">
            <AboutMe></AboutMe>
          </div>
          <div className="section">
            <Contact></Contact>
          </div>
          <div className="section">
            <TechStack></TechStack>
          </div>
          <div className="section">
            <Projects></Projects>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
