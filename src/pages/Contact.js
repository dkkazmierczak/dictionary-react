import profile from "../images/profile.jpg"
import "./Contact.scss"

const Contact = () => {
  return (
    <div className="Contact">
      <section>
        <div className="image-container">
          <img src={profile} alt="Profile" className="image" />
        </div>
      </section>
      <header>
        <h1>Dominika</h1>
        <h2>Basen in Halden, Norway</h2>
      </header>
      <section>
        <div className="links">
          <div className="portfolio-link">
            {" "}
            <a
              href="https://dkkazmierczak.com"
              target="_blank"
              rel="noreferrer">
              Website
            </a>
          </div>
          <div className="contact-link">
            <a
              href="mailto:dkl.kazmierczk@gmail.com"
              target="_blank"
              rel="noreferrer">
              e-mail
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
