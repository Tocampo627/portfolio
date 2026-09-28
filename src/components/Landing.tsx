import "../styles/landing.css";

function Landing() {

    return (
        <section className="hero" id="landing">
            <div className="container">
                <h1>Hello, I'm Tanya.</h1>

                <p>
                    I am a software engineer focused on building web applications accross the stack, with strong interest in backend systems, APIs, and maintainable architecture.
                </p>


                <div id="landing-button-box" >

                    <div id="view-work-box">
                        <a className="primary-button" href="#projects">View My Work</a>
                    </div>
                    <div id="contact-me-box">
                        <a className="primary-button" href="#connect">Contact Me</a>
                    </div>

                </div >
            </div>
        </section>

    )


}

export default Landing;