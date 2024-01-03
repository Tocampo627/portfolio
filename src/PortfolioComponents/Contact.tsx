import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="contact-me">
        <div>
          <img src="./person-logo.png" className="person-logo" />
          <p className="my-name">Tanya Ocampo</p>
        </div>

        <h1>Contact Me</h1>
        <div className="contact-info-container">
          <div className="info-container">
            <span className="material-symbols-outlined">location_on</span>
            <p className="location">Chicago Metropolitan Area</p>
          </div>
          <div className="info-container">
            <span className="material-symbols-outlined">phone_iphone</span>
            <p className="phone-number">Upon Linked In Request</p>
          </div>
          <div className="info-container">
            <span className="material-symbols-outlined">mail</span>
            <a href="https://www.linkedin.com/in/tanyaocampo627/">
              <p className="email">Send LinkedIn Mail</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
