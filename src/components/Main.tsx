import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';

const avatar = new URL("../assets/images/circle_atharva.png", import.meta.url).href;

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="content">
          <div className="hero-header">
            <div className="hero-media">
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
                <span className="contact-chip contact-link">
                  <EmailIcon />
                  <a href="mailto:atharva.agashe22@gmail.com">atharva.agashe22@gmail.com</a>
                </span>
              </div>
            </div>
            <div className="hero-text">
              <div className="hero-heading">
                <h1>
                  Atharva
                  <br />
                  Agashe
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
            I am a passionate engineer with a proven track record of building scalable, secure,
            and reliable distributed systems. I have built full stack applications spanning cloud
            computing, backend services, APIs, and user facing applications. I also bring strong
            applied AI and ML experience across audio and speech, and computer vision, including
            research driven work in areas such as 3D computer vision and reconstruction. I thrive
            where innovation meets impact and am drawn to opportunities that combine research driven
            insights with real world engineering challenges.
          </p>

          <div className="mobile_social_icons">
            <a href="https://github.com/atharvagasheTAMU" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/atharvagashe22/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;