import React from 'react';
import '../assets/styles/Contact.scss';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Feel free to reach out for collaboration, research, or consulting.</p>
          <div className="contact-info">
            <div className="contact-item">
              <h2>Atharva Agashe</h2>
            </div>
            <div className="contact-item">
              <LocationOnIcon />
              <span>San Jose, CA</span>
            </div>
            <div className="contact-item">
              <PhoneIcon />
              <a href="tel:+19793449611">(979) 344-9611</a>
            </div>
            <div className="contact-item">
              <EmailIcon />
              <a href="mailto:agashe2209@gmail.com">
                agashe2209@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;