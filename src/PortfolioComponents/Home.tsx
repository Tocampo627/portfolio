import AboutMe from "./AboutMe";
import "./Home.css";
import { useSpring, animated } from "@react-spring/web";
import TechStack from "./TechStack";
import Contact from "./Contact";
import Resume from "./Resume";
import Projects from "./Projects";

const Home = () => {
  const springs = useSpring({
    from: { y: 500 },
    to: { y: 0 },
  });
  return (
    <div className="greeting-container">
      <div className="greeting-container">
        <div className="intro-text">
          <div>
            <animated.div style={{ ...springs }}>
              <h1>Hello, I'm Tanya</h1>
              <p>Welcome to my website</p>
            </animated.div>
          </div>
          <div>
            <AboutMe></AboutMe>
          </div>
          <div>
            <TechStack></TechStack>
          </div>
          <div>
            <Resume></Resume>
          </div>
          <div>
            <Projects></Projects>
          </div>
          <div>
            <Contact></Contact>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
