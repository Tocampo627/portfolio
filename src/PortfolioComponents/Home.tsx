import "./Home.css";
import { useSpring, animated } from "@react-spring/web";

const Home = () => {
  const springs = useSpring({
    from: { y: 500 },
    to: { y: 0 },
  });
  return (
    <div className="greeting-container">
      <div className="greeting-container">
        <div className="intro-text">
          <div></div>
          <animated.div style={{ ...springs }}>
            <h1>Hello, I'm Tanya</h1>
            <p>Welcome to my website</p>
          </animated.div>
        </div>
      </div>
    </div>
  );
  // return (
  //   <div className="greeting-container">
  //     <div className="intro-text">
  //       <h1>Hello, I'm Tanya</h1>
  //       <p>Welcome to my website</p>
  //     </div>
  //   </div>
  // );
};

export default Home;
