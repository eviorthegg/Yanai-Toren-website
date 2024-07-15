import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './HomePage.module.css';
import YouTubePlaceholder from './YouTubePlaceholder';

function App() {
  const srcs3 = 'https://d3csxsarc47q4y.cloudfront.net';

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const servicesSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="App">
      <Helmet>
        <title>Yanai Toren Production's - Home</title>
        <meta name="description" content="Welcome to ORI AMITAI PRODUCTION. Based in Tel Aviv, we create music videos for artists and content for global brands." />
      </Helmet>
      <header className={styles.heroSection}>
        <video autoPlay loop muted playsInline className={styles.heroVideo}>
          <source src={`${srcs3}/HeroVideo.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.videoOverlay}>
          <h1>Yanai Toren Productions</h1>
          <hr className={styles.heroLine} />
          <p>Based in Tel Aviv, we are Creating Music Videos for artists and Content for Global brands.</p>
          <p>We bring the collective years of our experience and strategies to every project.</p>
          <Link to="/contact" className={styles.contactButton}>Contact</Link>
          <div className={styles.arrowDown}></div>
        </div>
      </header>
      <main className={styles.MainCointer}>
        <section className={styles.productionSection}>
          <h2>Our Production</h2>
          <Slider {...settings} className={styles.slider}>
            <div>
              <YouTubePlaceholder videoId="GBV1m1i6wWM" />
            </div>
            <div>
              <YouTubePlaceholder videoId="sLPt028Iao8" />
            </div>
            <div>
              <YouTubePlaceholder videoId="D0AN5mbIk_s" />
            </div>
            <div>
              <YouTubePlaceholder videoId="R-W2pClUlzQ" />
            </div>
            <div>
              <YouTubePlaceholder videoId="9aj713Txvpo" />
            </div>
            <div>
              <YouTubePlaceholder videoId="M_UxnjtQtRc" />
            </div>
            <div>
              <YouTubePlaceholder videoId="jNTd9yjpOxc" />
            </div>
            <div>
              <YouTubePlaceholder videoId="QhvWoDbGG_Q" />
            </div>
          </Slider>
        </section>
        <section className={styles.servicesSection}>
          <h2>Our Services</h2>
          <Slider {...servicesSettings} className={styles.serviceCarousel}>
            <div className={styles.serviceContainer}>
              <img src={`${srcs3}/pictures/download.png`} alt="Production" className={styles.serviceImage} />
              <div className={styles.serviceName}>PRODUCTION</div>
            </div>
            <div className={styles.serviceContainer}>
              <img src={`${srcs3}/pictures/download%20(1).png`} alt="Commercials" className={styles.serviceImage} />
              <div className={styles.serviceName}>COMMERCIALS</div>
            </div>
            <div className={styles.serviceContainer}>
              <img src={`${srcs3}/pictures/download%20(2).png`} alt="Music Videos" className={styles.serviceImage} />
              <div className={styles.serviceName}>MUSIC VIDEOS</div>
            </div>
            <div className={styles.serviceContainer}>
              <img src={`${srcs3}/pictures/download%20(3).png`} alt="Live Shows" className={styles.serviceImage} />
              <div className={styles.serviceName}>LIVE SHOWS</div>
            </div>
          </Slider>
        </section>
      </main>
    </div>
  );
}

export default App;
