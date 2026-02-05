import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';

const avatar = new URL("../assets/images/profile_pic.png", import.meta.url).href;

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="content">
          <div className="hero-header">
            <div className="image-wrapper">
              <img src={avatar} alt="Atharva Agashe" />
            </div>
            <div className="contact-inline">
              <div className="contact-row">
                <span className="contact-chip">
                  <LocationOnIcon />
                  San Jose, CA
                </span>
                <a
                  className="contact-icon"
                  href="https://github.com/atharvagasheTAMU"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <GitHubIcon />
                </a>
                <a
                  className="contact-icon"
                  href="https://www.linkedin.com/in/atharvagashe22/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
              </div>
              {/* <span className="contact-chip contact-link">
                <PhoneIcon />
                <a href="tel:+19793449611">(979) 344-9611</a>
              </span> */}
              <a
                className="contact-icon contact-icon--mail"
                href="mailto:agashe2209@gmail.com"
                aria-label="Email"
              >
                <EmailIcon />
              </a>
            </div>
            <div className="hero-text">
              <div className="hero-heading">
                <h1>
                  Atharva Agashe
                </h1>
                <p className="role">AI/ML & Software Engineer</p>
              </div>
              <div className="interests">
                <span className="interests-label">Interests</span>
                <div className="interests-list">
                  <span className="interest-chip">Cloud Computing</span>
                  <span className="interest-chip">Distributed Systems</span>
                  <span className="interest-chip">Computer Vision</span>
                  <span className="interest-chip">Gen AI</span>
                </div>
              </div>
            </div>
          </div>
          <p className="summary">
          Software Engineer with ~4 years of experience building reliable distributed systems and cloud services. I also work in applied AI/ML, especially computer vision, and I like using agentic AI to automate messy workflows.          </p>

        </div>
      </div>
    </div>
  );
}

export default Main;