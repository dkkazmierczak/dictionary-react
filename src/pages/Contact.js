import profile from "../images/profile.jpg"
import "./Contact.scss"

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-wrapper">
        <div className="image-wrapper">
          <img src={profile} alt="Profile" className="image" />
        </div>

        <div className="about-wrapper">
          <header>
            {" "}
            <div className="about">Front-end developer</div>
            <h1>
              Dominika
              <br />
              Kaźmierczak
            </h1>
            <h2>Based in Halden, Norway</h2>
          </header>
          <div className="links-wrapper">
            <button className="portfolio-link">
              {" "}
              <a
                href="https://dkkazmierczak.com"
                target="_blank"
                rel="noreferrer">
                Website
              </a>
            </button>
            <button className="contact-link">
              <a
                href="mailto:dkl.kazmierczk@gmail.com"
                target="_blank"
                rel="noreferrer">
                e-mail
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
