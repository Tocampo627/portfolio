// assemble the web
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Tools from "./components/Tools";
import Connect from "./components/Connect";
import Resume from "./components/Resume";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


function App() {
    return (
        <>

        <NavBar />

        <main>
        <Landing></Landing>
        <AboutMe></AboutMe>
        <Projects></Projects>
        <Tools></Tools>
        <Connect></Connect>
        <Resume></Resume>
        </main>
        <Footer/>

        
        </>
    );
}

export default App;