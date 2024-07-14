import React from 'react';
import styles from './Footer.module.css'; // Import the CSS module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.footerTitle}>Get in Touch</h2>
      <div className={styles.divider}></div>
      <div className={styles.contactInfo}>
        <p><FontAwesomeIcon icon={faPhone} /> +972-552777169</p>
        <p><FontAwesomeIcon icon={faEnvelope} /> Yanai.Toren@gmail.com</p>
        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Tel Aviv, Israel</p>
      </div>
      <div className={styles.socialIcons}>
        <a href="https://wa.me/972552777169" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href="https://www.facebook.com/share/WFyzi2TgZSMwvHL6/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.youtube.com/your-channel" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="https://www.instagram.com/yanai_tts?igsh=ZWliNjB6cTViZTF2" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <div className={styles.footerContainer}>
    <p className={styles.footerText}>
      &copy; 2024 My Website. All rights reserved to 
      <a href="https://www.evior.io" target="_blank" rel="noopener noreferrer" className={styles.footerLink}> evior.io.</a>
    </p>
  </div>
    </footer>
  );
}

export default Footer;
