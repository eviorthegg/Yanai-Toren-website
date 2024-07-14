import React from 'react';
import styles from './About.module.css';
import producerImage from '../content/pictures/yani.jpg'; // Import the producer's image
import { Helmet } from 'react-helmet';

function About() {
  return (
    <div className={styles.aboutContainer}>
      <Helmet>
        <title>About Us - ORI AMITAI PRODUCTION</title>
        <meta name="description" content="Learn more about ORI AMITAI PRODUCTION and our vision." />
      </Helmet>

      <h2 className={styles.title}>About Us</h2>
      <div className={styles.producerSection}>
        <img src={producerImage} alt="Producer" className={styles.producerImage} />
        <h3 className={styles.producerName}>Yanai Toren Salami</h3>
      </div>
      <div className={styles.contentSection}>
        <h4>About the Producer</h4>
        <p>Yanai Toren Salami is a visionary producer with a passion for creating innovative solutions. With years of experience in the industry, Yanai has spearheaded numerous successful projects, bringing creativity and excellence to every endeavor.</p>
        
        <h4>About the Company</h4>
        <p>Our company is dedicated to delivering top-notch services and products that exceed customer expectations. We believe in the power of technology to transform lives and are committed to pushing the boundaries of what's possible.</p>
        
        <h4>Our Vision</h4>
        <p>We envision a future where technology and creativity intersect to create a better world. Our mission is to lead the industry through innovation, integrity, and excellence, making a positive impact on society and the environment.</p>
      </div>
    </div>
  );
}

export default About;
