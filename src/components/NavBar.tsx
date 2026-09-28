import "../styles/navbar.css"
function NavBar() {
    return (
        <nav className="navbar">
            <div className="container navbar-content">

                <a className="nav-name" href="#landing">
                    Tanya Ocampo
                </a>

                <div className="nav-links">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#tools">Tools</a>
                    <a href="#resume">Resume</a>
                    <a href="#connect">Contact</a>
                </div>

            </div>
        </nav>
    )
}

export default NavBar;